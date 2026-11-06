/* Pure SVG charts: RD curves. No external dependencies, works offline */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var COLORS = {
    "1.0": "#8a929e", "2.0": "#2f6fb3", "2.1": "#6f9fd0", "3.0": "#2e8b6f", "4.0": "#c1662f",
    "5.0": "#8a5cb8", "6.0": "#c94f6d", "7.0": "#b58a10", "8.0": "#3d7f8c"
  };
  // Versions that reuse another version's measured points keep a distinct line
  // style: thinner and dashed, with open markers, so overlapping curves stay readable.
  var DASH = { "2.1": "3 3", "8.0": "7 4" };
  var WIDTH = { "2.1": 1.5, "8.0": 1.8 };
  var HOLLOW = { "2.1": true, "8.0": true };

  function svgEl(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    return n;
  }

  function niceTicks(min, max, count) {
    var span = max - min;
    if (span <= 0) return [min];
    var raw = span / count;
    var mag = Math.pow(10, Math.floor(Math.log10(raw)));
    var norm = raw / mag;
    var step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10) * mag;
    var start = Math.ceil(min / step) * step;
    var out = [];
    for (var v = start; v <= max + 1e-9; v += step) out.push(Math.round(v * 1e6) / 1e6);
    return out;
  }

  function fmt(v, digits) {
    var s = v.toFixed(digits === undefined ? 1 : digits);
    return s.replace(/\.0$/, "");
  }

  /* ───────────────────────── RD 曲线 ───────────────────────── */
  function rd(host, cfg) {
    var points = cfg.points || {};
    var versions = cfg.versions || Object.keys(points);
    var logX = cfg.logX !== false;
    var visible = {};
    versions.forEach(function (v) { visible[v] = true; });

    var W = 880, H = 470, M = { l: 64, r: 20, t: 18, b: 56 };

    host.classList.add("chart-host");
    host.innerHTML = "";

    var legend = document.createElement("div");
    legend.className = "chart-legend";
    var svg = svgEl("svg", { class: "chart-svg", viewBox: "0 0 " + W + " " + H, role: "img" });
    var tip = document.createElement("div");
    tip.className = "chart-tip";
    tip.setAttribute("hidden", "");

    host.appendChild(legend);
    host.appendChild(svg);
    host.appendChild(tip);

    var state = { logX: logX };

    function xmap(v, d) {
      var t = state.logX ? (Math.log10(v) - Math.log10(d[0])) / (Math.log10(d[1]) - Math.log10(d[0]))
                         : (v - d[0]) / (d[1] - d[0]);
      return M.l + t * (W - M.l - M.r);
    }

    function domain() {
      var lo = Infinity, hi = -Infinity;
      versions.forEach(function (v) {
        (points[v] || []).forEach(function (p) {
          if (p.mbps > 0) { lo = Math.min(lo, p.mbps); hi = Math.max(hi, p.mbps); }
        });
      });
      if (!isFinite(lo)) { lo = 1; hi = 10; }
      var pad = state.logX ? 0 : (hi - lo) * 0.06;
      return [lo * (state.logX ? 0.94 : 1) - pad, hi * (state.logX ? 1.06 : 1) + pad];
    }

    function ys() {
      var lo = Infinity, hi = -Infinity;
      versions.forEach(function (v) {
        (points[v] || []).forEach(function (p) {
          lo = Math.min(lo, p.psnr); hi = Math.max(hi, p.psnr);
        });
      });
      if (!isFinite(lo)) { lo = 20; hi = 40; }
      var pad = Math.max(0.6, (hi - lo) * 0.12);
      return [lo - pad, hi + pad];
    }

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      var xd = domain(), yd = ys();
      var pw = W - M.l - M.r, ph = H - M.t - M.b;

      function ymap(v) { return M.t + ph - (v - yd[0]) / (yd[1] - yd[0]) * ph; }

      // 网格 + 坐标轴
      var gGrid = svgEl("g", { class: "c-grid" });
      svg.appendChild(gGrid);

      var xticks = state.logX ? [1, 2, 5, 10, 20, 50, 100].filter(function (t) { return t >= xd[0] && t <= xd[1]; })
                              : niceTicks(xd[0], xd[1], 5);
      xticks.forEach(function (t) {
        gGrid.appendChild(svgEl("line", { x1: xmap(t, xd), y1: M.t, x2: xmap(t, xd), y2: M.t + ph }));
      });

      var yticks = niceTicks(yd[0], yd[1], 5);
      yticks.forEach(function (t) {
        gGrid.appendChild(svgEl("line", { x1: M.l, y1: ymap(t), x2: M.l + pw, y2: ymap(t) }));
      });

      // 轴线
      var gAxis = svgEl("g", { class: "c-axis" });
      svg.appendChild(gAxis);
      gAxis.appendChild(svgEl("line", { x1: M.l, y1: M.t + ph, x2: M.l + pw, y2: M.t + ph }));
      gAxis.appendChild(svgEl("line", { x1: M.l, y1: M.t, x2: M.l, y2: M.t + ph }));

      // 刻度文字
      var gTicks = svgEl("g", { class: "c-ticks" });
      svg.appendChild(gTicks);
      xticks.forEach(function (t) {
        var tx = svgEl("text", { x: xmap(t, xd), y: M.t + ph + 20, "text-anchor": "middle" });
        tx.textContent = fmt(t, t < 10 ? 1 : 0);
        gTicks.appendChild(tx);
      });
      yticks.forEach(function (t) {
        var ty = svgEl("text", { x: M.l - 10, y: ymap(t) + 4, "text-anchor": "end" });
        ty.textContent = fmt(t, 1);
        gTicks.appendChild(ty);
      });

      // 轴标题
      var xl = svgEl("text", { x: M.l + pw / 2, y: H - 12, "text-anchor": "middle", class: "axis-title" });
      xl.textContent = "Rate (Mbit/s" + (state.logX ? ", log scale)" : ")");
      svg.appendChild(xl);
      var yl = svgEl("text", { x: 14, y: M.t + ph / 2, "text-anchor": "middle", class: "axis-title",
                               transform: "rotate(-90 14 " + (M.t + ph / 2) + ")" });
      yl.textContent = "PSNR (dB)";
      svg.appendChild(yl);

      // 曲线
      var gSeries = svgEl("g", {});
      svg.appendChild(gSeries);

      versions.forEach(function (v) {
        var pts = (points[v] || []).slice().filter(function (p) { return p.mbps > 0; })
                    .sort(function (a, b) { return a.mbps - b.mbps; });
        if (!pts.length) return;

        var g = svgEl("g", { class: "c-series", "data-ver": v });
        if (!visible[v]) g.setAttribute("display", "none");
        var color = COLORS[v] || "#555";

        if (pts.length > 1) {
          var d = pts.map(function (p, i) {
            return (i ? "L" : "M") + xmap(p.mbps, xd).toFixed(1) + "," + ymap(p.psnr).toFixed(1);
          }).join(" ");
          g.appendChild(svgEl("path", { d: d, stroke: color, "stroke-width": WIDTH[v] || 2, fill: "none",
                                       "stroke-linejoin": "round", "stroke-dasharray": DASH[v] || "" }));
        }
        pts.forEach(function (p) {
          // Reusing versions are drawn as an open ring around the measured point, so the
          // original version's filled dot stays visible and both series remain hoverable.
          var hollow = !!HOLLOW[v];
          var baseR = hollow ? 6.2 : 4.4;
          var c = svgEl("circle", {
            cx: xmap(p.mbps, xd), cy: ymap(p.psnr), r: baseR,
            fill: hollow ? "none" : color, stroke: hollow ? color : "none", "stroke-width": hollow ? 1.5 : 0
          });
          c.addEventListener("mouseenter", function () {
            tip.removeAttribute("hidden");
            tip.innerHTML = "<b>" + cfg.seqName + "</b><br>Version " + v +
              (v === "2.1" ? " (reuses 2.0 results)" : "") +
              "<br>Rate " + p.mbps + " Mbit/s<br>PSNR " + p.psnr + " dB<br>Representation " + p.mb + " MB/frame";
            var hr = host.getBoundingClientRect();
            var cr = c.getBoundingClientRect();
            tip.style.left = Math.min(cr.left - hr.left + 14, hr.width - 190) + "px";
            tip.style.top = Math.max(cr.top - hr.top - 10, 0) + "px";
            c.setAttribute("r", baseR + 1.8);
          });
          c.addEventListener("mouseleave", function () {
            tip.setAttribute("hidden", "");
            c.setAttribute("r", baseR);
          });
          g.appendChild(c);
        });
        gSeries.appendChild(g);
      });
    }

    // 图例
    versions.forEach(function (v) {
      if (!(points[v] || []).length) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lg-btn on";
      b.innerHTML = '<span class="lg-swatch" style="' +
        (DASH[v]
          ? "background:repeating-linear-gradient(90deg," + (COLORS[v] || "#555") + " 0 4px,transparent 4px 7px)"
          : "background:" + (COLORS[v] || "#555")) +
        '"></span>' + v;
      b.addEventListener("click", function () {
        visible[v] = !visible[v];
        b.classList.toggle("on", visible[v]);
        var g = svg.querySelector('.c-series[data-ver="' + v + '"]');
        if (g) g.setAttribute("display", visible[v] ? "" : "none");
      });
      legend.appendChild(b);
    });

    var scaleBtn = document.createElement("button");
    scaleBtn.type = "button";
    scaleBtn.className = "lg-btn scale";
    scaleBtn.textContent = state.logX ? "Switch to linear axis" : "Switch to log axis";
    scaleBtn.addEventListener("click", function () {
      state.logX = !state.logX;
      scaleBtn.textContent = state.logX ? "Switch to linear axis" : "Switch to log axis";
      draw();
    });
    legend.appendChild(scaleBtn);

    draw();
    return { draw: draw, setLog: function (v) { state.logX = v; draw(); } };
  }

  window.I3DVCharts = { rd: rd };
})();

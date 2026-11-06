/* 站点交互与数据渲染：无外部依赖，可离线打开 */
(function () {
  "use strict";

  // 标记 JS 已启动：CSS 只在 html.js 下隐藏 .reveal，脚本失败时内容仍可见
  document.documentElement.classList.add("js");

  var D = window.I3DV_DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── 主题 ──────────────────────────────────────────── */
  var KEY = "i3dv-theme";
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved) root.setAttribute("data-theme", saved);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      root.setAttribute("data-theme", "dark");
  } catch (e) {}

  var toggle = $("#theme-toggle");
  if (toggle) toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  /* ── 导航高亮 ──────────────────────────────────────── */
  var page = document.body.getAttribute("data-page");
  $$(".nav a").forEach(function (a) {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });

  /* ── 滚动显现 ──────────────────────────────────────── */
  // 注意：本页大量内容由下方 render* 动态注入，必须在渲染后重新 observe，
  // 否则新节点的 .reveal 永远拿不到 .visible，会保持 opacity:0 导致“空白页”。
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
  }
  function observeReveal() {
    var items = $$(".reveal:not(.visible)");
    if (!io) { items.forEach(function (el) { el.classList.add("visible"); }); return; }
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── 复制 ──────────────────────────────────────────── */
  $$("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = document.getElementById(btn.dataset.copy);
      if (!src) return;
      var txt = src.textContent, old = btn.textContent;
      function ok() {
        btn.textContent = "Copied"; btn.classList.add("copied");
        setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1500);
      }
      if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(txt).then(ok, function () {});
      else {
        var ta = document.createElement("textarea");
        ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  });

  /* ── 渲染工具 ──────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  // 会议日期只显示月份和年份："Aug 21-24, 2024" -> "Aug 2024"
  function monthYear(s) {
    var m = /^\s*([A-Za-z]+)\s+(?:.*?)(\d{4})\s*$/.exec(String(s));
    return m ? m[1] + " " + m[2] : String(s);
  }
  function tag(text, cls) { return '<span class="pill ' + cls + '">' + esc(text) + "</span>"; }
  function statusClass(s) {
    return s === "Released" ? "pill-release"
      : s === "Adopted" ? "pill-adopt"
      : s === "TBD" ? "pill-todo" : "pill-propose";
  }

  /* ── 时间线 ────────────────────────────────────────── */
  function renderTimeline() {
    var host = $("#timeline");
    if (!host) return;
    host.innerHTML = D.meetings.map(function (m, i) {
      var label = m.p3911 ? "P3911 Meeting " + m.p3911 : "Early work record";
      return '<li class="tl-item">' +
        '<div class="tl-marker"><span class="tl-dot"></span></div>' +
        '<div class="tl-body">' +
          '<div class="tl-head">' +
            '<span class="tl-n">' + label + "</span>" +
            '<span class="tl-date">' + esc(monthYear(m.date)) + (m.place !== "TBD" ? " · " + esc(m.place) : "") + "</span>" +
            (m.version ? tag("i3DV " + m.version, m.status === "Released" ? "pill-release" : "pill-todo") : "") +
            tag(m.status, statusClass(m.status)) +
            (m.dateNote ? '<span class="tl-warn">' + esc(m.dateNote) + "</span>" : "") +
          "</div>" +
          "<h3>" + esc(m.head) + "</h3>" +
          '<p>' + esc(m.body) + "</p>" +
          (m.proposals.length ?
            '<ul class="proposal-list">' + m.proposals.map(function (p) {
              return "<li><code>" + esc(p[0]) + "</code><span>" + esc(p[1]) + "</span>" +
                     tag(p[2], statusClass(p[2])) + "</li>";
            }).join("") + "</ul>" : "") +
        "</div></li>";
    }).join("");
  }

  /* ── 技术专题 ──────────────────────────────────────── */
  function renderModules() {
    var host = $("#modules");
    if (!host) return;
    host.innerHTML = D.modules.map(function (mod, mi) {
      return '<section class="module" id="m-' + mod.id + '">' +
        '<div class="module-head">' +
          '<span class="module-no">' + String(mi + 1).padStart(2, "0") + "</span>" +
          "<div><h2>" + esc(mod.name) + '</h2><p class="module-desc">' + esc(mod.desc) + "</p></div>" +
        "</div>" +
        '<div class="tech-grid">' + mod.items.map(function (it) {
          return '<article class="tech" data-vers="' + esc(it.ver) + '">' +
            '<div class="tech-top"><h3>' + esc(it.name) + "</h3>" + tag("v" + it.ver, "pill-ver") + "</div>" +
            '<div class="tech-meta">' + (it.ps ? "<code>" + esc(it.ps) + "</code>" : "") + tag(it.status, statusClass(it.status)) + "</div>" +
            '<dl><dt>Problem</dt><dd>' + esc(it.problem) + "</dd>" +
            "<dt>Effect</dt><dd>" + esc(it.effect) + "</dd></dl>" +
          "</article>";
        }).join("") + "</div></section>";
    }).join("");

    var nav = $("#module-nav");
    if (nav) nav.innerHTML = D.modules.map(function (m) {
      return '<a href="#m-' + m.id + '">' + esc(m.name) + "</a>";
    }).join("");

    renderTechFilter(host);
  }

  /* 按版本筛选技术点 */
  function renderTechFilter(host) {
    var bar = $("#tech-filter");
    if (!bar) return;

    var vers = [];
    D.modules.forEach(function (m) {
      m.items.forEach(function (it) {
        it.ver.split("/").forEach(function (v) {
          v = v.trim();
          if (v && vers.indexOf(v) < 0) vers.push(v);
        });
      });
    });
    vers.sort(function (a, b) { return parseFloat(a) - parseFloat(b); });

    bar.innerHTML = '<button type="button" class="seg-btn on" data-ver="*">All</button>' +
      vers.map(function (v) {
        return '<button type="button" class="seg-btn" data-ver="' + esc(v) + '">v' + esc(v) + "</button>";
      }).join("");

    $$(".seg-btn", bar).forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".seg-btn", bar).forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        applyTechFilter(host, b.dataset.ver);
      });
    });

    applyTechFilter(host, "*");
  }

  function applyTechFilter(host, ver) {
    $$(".tech", host).forEach(function (card) {
      var hit = ver === "*" || card.getAttribute("data-vers").indexOf(ver) >= 0;
      card.style.display = hit ? "" : "none";
    });
    $$(".module", host).forEach(function (sec) {
      var any = $$(".tech", sec).some(function (c) { return c.style.display !== "none"; });
      sec.style.display = any ? "" : "none";
    });
    var cnt = $("#tech-count");
    if (cnt) {
      var n = $$(".tech", host).filter(function (c) { return c.style.display !== "none"; }).length;
      cnt.textContent = ver === "*" ? n + " techniques in total" : "Version v" + ver + ": " + n + " techniques";
    }
  }

  /* ── 版本表 ────────────────────────────────────────── */
  function renderVersions() {
    var host = $("#version-table");
    if (!host) return;
    host.innerHTML = D.versions.map(function (v) {
      var cov = v.ver === "2.1" ? 6 : Object.keys(D.rd[v.ver] || {}).length;
      return "<tr>" +
        '<td data-label="Version"><span class="ver-badge">' + esc(v.ver) + "</span></td>" +
        '<td data-label="Meeting">' + (v.meeting ? (v.meeting >= 96 ? "P3911 Meeting " + (v.meeting - 95) : "Early work record") : '<span class="todo-mark">TBD</span>') + "</td>" +
        '<td data-label="Date">' + esc(v.date) + "</td>" +
        '<td class="num" data-label="Coverage">' + cov + " / 6" +
          (v.ver === "8.0" ? " · 4 reused" : v.ver === "2.1" ? " · reuses 2.0" : "") + "</td>" +
        '<td data-label="Note">' + (v.note ? esc(v.note) : "—") + "</td>" +
      "</tr>";
    }).join("");
  }

  /* ── 性能页 ────────────────────────────────────────── */
  var current = null;

  function renderSeqTabs() {
    var host = $("#seq-tabs");
    if (!host) return;
    host.innerHTML = D.sequences.map(function (s, i) {
      var has = Object.keys(D.rd).some(function (v) { return D.rd[v][s.key]; });
      return '<button type="button" class="seg-btn' + (i === 0 ? " on" : "") + '" data-seq="' + s.key + '"' +
        (has ? "" : " disabled") + ">" + esc(s.name) + "</button>";
    }).join("");
    $$(".seg-btn", host).forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".seg-btn", host).forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        showSeq(b.dataset.seq);
      });
    });
    $$(".seg-btn", host).forEach(function (b) {
      var s = D.sequences.filter(function (x) { return x.key === b.dataset.seq; })[0];
      if (s) b.title = s.note;
    });
  }

  /* ── 性能页：序列与曲线 ────────────────────────────── */
  // 2.1 has no independent measurements; it reuses the 2.0 points (given fact).
  var ALL_VERSIONS = ["1.0", "2.0", "2.1", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"];

  function showSeq(seq) {
    current = seq;
    var s = D.sequences.filter(function (x) { return x.key === seq; })[0];
    var points = {};
    var versions = [];
    ALL_VERSIONS.forEach(function (v) {
      if (v === "2.1") {
        if (D.rd["2.0"] && D.rd["2.0"][seq]) {
          points["2.1"] = D.rd["2.0"][seq];
          versions.push(v);
        }
        return;
      }
      if (D.rd[v] && D.rd[v][seq]) { points[v] = D.rd[v][seq]; versions.push(v); }
    });
    var host = $("#rd-chart");
    if (host) window.I3DVCharts.rd(host, { points: points, versions: versions, seqName: s.name });
    var cap = $("#rd-caption");
    if (cap) {
      var reuse = D.rd8Reuse && D.rd8Reuse.indexOf(seq) >= 0;
      cap.textContent = s.name + " (" + s.note + "): " + versions.length +
        " versions, 4 rate points each. 2.1 reuses 2.0 results." +
        (reuse ? " 8.0 reuses 7.0 results for this sequence." : "");
    }
  }

  /* ── 成果页 ────────────────────────────────────────── */
  function renderPapers() {
    var host = $("#papers");
    if (!host) return;
    host.innerHTML = D.papers.map(function (p) {
      return '<article class="paper-card">' +
        '<div class="paper-year">' + esc(p.year) + "</div>" +
        '<div class="paper-main"><h3>' + esc(p.title) + "</h3>" +
        '<p class="paper-authors">' + esc(p.authors) + "</p>" +
        '<p class="paper-venue"><em>' + esc(p.venue) + "</em> · " + esc(p.meta) + "</p>" +
        '<p class="paper-note">' + esc(p.note) + "</p>" +
        '<div class="paper-links">' + p.links.map(function (l) {
          return '<a class="chip" href="' + l[1] + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>";
        }).join("") + "</div></div></article>";
    }).join("");
  }

  function renderStandards() {
    var host = $("#standards");
    if (!host) return;
    host.innerHTML = D.standards.map(function (s) {
      return '<article class="spec">' +
        '<div class="spec-head"><span class="spec-org">' + esc(s.org) + "</span>" +
        '<span class="spec-status">' + esc(s.status) + "</span></div>" +
        "<h3>" + esc(s.name) + "</h3>" +
        '<ul class="spec-list">' + s.facts.map(function (f) {
          return "<li><span>" + esc(f[0]) + "</span><span>" + esc(f[1]) + "</span></li>";
        }).join("") + "</ul></article>";
    }).join("");
  }

  function renderTodos() {
    var host = $("#todos");
    if (!host) return;
    host.innerHTML = D.todos.map(function (t) {
      return '<tr><td data-label="Item">' + esc(t[0]) + '</td><td data-label="Status">' + esc(t[1]) + "</td></tr>";
    }).join("");
  }

  /* ── 初始化 ────────────────────────────────────────── */
  renderTimeline();
  renderModules();
  renderVersions();
  renderSeqTabs();
  renderPapers();
  renderStandards();
  renderTodos();
  if ($("#rd-chart") && D.sequences[0]) showSeq("gz");

  // 所有内容注入完成后再统一接管显现动画（关键：动态节点必须在此重新 observe）
  observeReveal();
})();

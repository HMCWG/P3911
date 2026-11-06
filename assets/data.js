/* Site data for the IEEE P3911 project site. Numbers are generated from the standard records; do not hand-edit. */
window.I3DV_DATA = {
 "meta": {
  "title": "IEEE P3911 — Standard for Holographic Video Coding",
  "generated": "2026-11-04",
  "sources": [
   "Accepted papers and the PAR supplied with the site",
   "Standard documents and reference software held by the working group"
  ]
 },
 "meetings": [
  {
   "n": 89,
   "date": "Jun 2024",
   "dateNote": "",
   "place": "Shaoxing",
   "version": null,
   "status": "Proposed",
   "head": "iFVC is proposed for the first time; the call for proposals opens",
   "body": "The end-to-end holographic video coding method was submitted as M0001, \"A Dynamic 3D Scene Reconstruction and Compression Method\": anchor-primitive representation, a binary hash table caching inter-frame transforms, and joint end-to-end rate-distortion optimization. The proposal compresses 250 frames of 1920x1080 multi-view video to 138.28 MB (0.55 MB/frame).",
   "proposals": [
    [
     "M0001",
     "A Dynamic 3D Scene Reconstruction and Compression Method (iFVC)",
     "Proposed"
    ]
   ]
  },
  {
   "n": 90,
   "date": "Aug 21-24, 2024",
   "dateNote": "",
   "place": "Weihai",
   "version": "1.0",
   "status": "Released",
   "head": "i3DV 1.0 released: the platform is formally established",
   "body": "M0002, \"i3DV: Intelligent 3D Holographic Video Coding Platform\", was adopted as the working group's technical platform for holographic video coding, forming i3DV 1.0. This is the point where the work moved from a single-meeting method proposal to a continuously iterated reference software.",
   "proposals": [
    [
     "M0002",
     "i3DV: Intelligent 3D Holographic Video Coding Platform",
     "Adopted"
    ]
   ]
  },
  {
   "n": 91,
   "date": "Dec 18-21, 2024",
   "dateNote": "",
   "place": "Zhuhai",
   "version": "2.0",
   "status": "Released",
   "head": "i3DV 2.0: anchor motion prediction, Gaussian attributes and accelerated training",
   "body": "Four proposals were adopted and integrated to form i3DV 2.0: M0003 introduced one-stage inter-frame prediction with joint anchor motion modelling, M0004 made Gaussian attribute derivation independent of view distance, M0005 added network parameter quantization for predictive scenes, and M0006 accelerated 3D Gaussian training with parallel gradient writes. It was the first time the platform integrated several tools within a single meeting cycle; M0007, a 3D holographic video coding example for virtual reality, was adopted at the same meeting.",
   "proposals": [
    [
     "M0003",
     "One-stage inter-frame prediction with joint anchor motion modelling",
     "Adopted"
    ],
    [
     "M0004",
     "View-distance-independent Gaussian attribute derivation",
     "Adopted"
    ],
    [
     "M0005",
     "Network parameter quantization for predictive scenes",
     "Adopted"
    ],
    [
     "M0006",
     "Accelerating 3D Gaussian training with parallel gradient writes",
     "Adopted"
    ],
    [
     "M0007",
     "An example of 3D holographic video coding for virtual reality",
     "Adopted"
    ],
    [
     "M0008",
     "Spatio-temporal predictive coding for 3D holographic video",
     "Adopted"
    ]
   ]
  },
  {
   "n": 92,
   "date": "Mar 12-15, 2025",
   "dateNote": "",
   "place": "Changsha",
   "version": "2.1",
   "status": "Released",
   "head": "i3DV 2.1: implicit modeling of Gaussian primitive offsets",
   "body": "M0009, \"Implicit Modeling of Gaussian Primitive Offsets\", was adopted, forming i3DV 2.1. This is the reference software described in the IEEE TCSVT 2026 paper (submitted 2025-04-30, accepted 2026-04-13).",
   "proposals": [
    [
     "M0009",
     "Implicit modeling method for Gaussian primitive offsets",
     "Adopted"
    ],
    [
     "M0010",
     "Feature enhancement for all-intra 3D holographic video coding",
     "Adopted"
    ],
    [
     "M0011",
     "Quality enhancement for the coding scheme",
     "Adopted"
    ]
   ]
  },
  {
   "n": 93,
   "date": "Jun 11-14, 2025",
   "dateNote": "",
   "place": "Shenyang",
   "version": "3.0",
   "status": "Released",
   "head": "i3DV 3.0: residual primitives and lossless geometry-coordinate coding",
   "body": "M0012, \"Residual Primitive Generation and Coding\", was adopted and became the core tool of 3.0 (encoder flag flag_residual); M0013 on lossless coding of geometry coordinates and M0014 on lossless compression of anchor geometry coordinates were adopted in the same meeting, while M0015 on scene-cut improvement progressed there as well. These tools were integrated with 2.1 to form i3DV 3.0.",
   "proposals": [
    [
     "M0012",
     "Residual primitive generation and coding method",
     "Adopted"
    ],
    [
     "M0013",
     "Lossless coding of geometry coordinates",
     "Adopted"
    ],
    [
     "M0014",
     "Lossless compression of anchor geometry coordinates",
     "Adopted"
    ],
    [
     "M0015",
     "Scene-cut improvement based on spatio-temporal masks",
     "Adopted"
    ]
   ]
  },
  {
   "n": 94,
   "date": "Aug 20-23, 2025",
   "dateNote": "",
   "place": "Dalian",
   "version": "4.0",
   "status": "Released",
   "head": "i3DV 4.0: representation pruning and engineering acceleration",
   "body": "i3DV 3.0 consisted of 2.1 plus five adopted tools: M0016 for feature entropy coding (flag_ent_feat), M0012 for residual primitives (flag_residual), M0015 for scene-cut improvement, and M0013 with M0014 for PCC anchor coding (flag_pcc). At this meeting six further proposals were adopted: M0019 for hash-grid feature pruning, M0020 for geometric constraints based on 2D Gaussian primitives, M0017 for real-time decoding, M0018 for cross-platform consistency, M0021 for CUDA-accelerated SSIM and M0022 for dynamic anchor adjustment in motion-scene coding. Together these tools formed i3DV 4.0, and M0023 extended the test set.",
   "proposals": [
    [
     "M0017",
     "Real-time decoding optimization for i3DV",
     "Adopted"
    ],
    [
     "M0018",
     "Cross-platform codec consistency optimization for i3DV",
     "Adopted"
    ],
    [
     "M0019",
     "Hash-grid feature pruning",
     "Adopted"
    ],
    [
     "M0020",
     "Geometric constraints based on 2D Gaussian primitives",
     "Adopted"
    ],
    [
     "M0021",
     "CUDA-accelerated SSIM computation",
     "Adopted"
    ],
    [
     "M0022",
     "Dynamic anchor adjustment for motion-scene coding",
     "Adopted"
    ]
   ]
  },
  {
   "n": 95,
   "date": "Dec 2025",
   "dateNote": "",
   "place": "Macau",
   "version": "5.0",
   "status": "Released",
   "head": "i3DV 5.0: residual initialization, moving-scene coding and 3DGS data support",
   "body": "i3DV 4.0 consisted of 3.0 together with six tools adopted in Dalian: hash-grid feature pruning (M0019, flag_prune_grid, on by default), 2D Gaussian geometric constraints (M0020, flag_2dgs), real-time decoding (M0017), cross-platform consistency (M0018), CUDA SSIM (M0021, flag_fused_ssim, on by default) and dynamic anchors (M0022). At this meeting i3DV 5.0 was formed from residual primitive initialization based on multi-view stereo matching (M0024), feature-splitting based coding optimisation for moving scenes (M0025), optimisation for banding artefacts caused by padding in de-distortion (M0026) and a native 3DGS dynamic sequence dataset (M0027); the test set gained migu_full_basketball_360 and cook_spinach.",
   "proposals": [
    [
     "M0024",
     "Residual primitive initialization based on multi-view stereo matching",
     "Adopted"
    ],
    [
     "M0025",
     "Feature-splitting based coding optimisation for moving scenes",
     "Adopted"
    ],
    [
     "M0026",
     "Optimisation for banding artefacts caused by padding in de-distortion",
     "Adopted"
    ],
    [
     "M0027",
     "Native 3DGS dynamic sequence dataset",
     "Adopted"
    ]
   ]
  },
  {
   "n": 96,
   "p3911": 1,
   "date": "Mar 18-20, 2026",
   "dateNote": "",
   "place": "Hangzhou",
   "version": "6.0",
   "status": "Released",
   "head": "i3DV 6.0: native 3DGS input, residual coding and training acceleration",
   "body": "i3DV 5.0 consisted of 4.0 together with residual primitive initialization (M0024), which uses COLMAP sparse point clouds for VRU sequences and ACMH dense point clouds for migu; reduced cook_spinach iterations from 30k to 15k (M0028); quantization element clipping, with the entropy-model delta scaled by 0.99 to avoid division by zero (M0029); feature-splitting based coding for moving scenes (M0025); and handling of banding artefacts caused by padding in de-distortion (M0026). Decoder hyperparameters are now written into the bitstream. At this meeting i3DV 6.0 was formed from residual training acceleration for the i3DV platform (M0031), shared anchor-feature probability parameters (M0032), native 3DGS input (M0033) and Tensor Core rendering acceleration (M0034).",
   "proposals": [
    [
     "M0031",
     "Residual training acceleration for the i3DV holographic video coding platform",
     "Adopted"
    ],
    [
     "M0032",
     "Residual bitrate optimization via shared anchor-feature probability parameters",
     "Adopted"
    ],
    [
     "M0033",
     "Native 3DGS coding support",
     "Adopted"
    ],
    [
     "M0034",
     "Tensor Core rendering acceleration",
     "Adopted"
    ]
   ]
  },
  {
   "n": 97,
   "p3911": 2,
   "date": "Jun 10-13, 2026",
   "dateNote": "",
   "place": "Urumqi",
   "version": "7.0",
   "status": "Released",
   "head": "i3DV 7.0: quantization, pruning and recalibration",
   "body": "i3DV 6.0 consisted of 5.0 together with residual training acceleration (M0031), Tensor Core rendering acceleration (M0034), shared anchor-feature probability parameters (M0032) and native 3DGS input (M0033, flag_3dgs_input, off by default); configuration documents now annotate the source proposal of each tool. At this meeting i3DV 7.0 was formed from a cross-platform consistent quantised codec for holographic video (M0035, off by default), post-training uniform integer quantization of network parameters (M0038), bandwidth-aware dynamic hash-grid capacity (M0036), 3D-to-2D and planar coding (M0037), pruning of 3DGS data (M0039) and recalibration based on latent-representation difference awareness with subjective quality assessment (M0041).",
   "proposals": [
    [
     "M0035",
     "Cross-platform consistent quantised codec for i3DV holographic video",
     "Adopted"
    ],
    [
     "M0036",
     "Bandwidth-aware dynamic hash-grid capacity configuration",
     "Adopted"
    ],
    [
     "M0037",
     "\"3D-to-2D + planar coding\" method",
     "Adopted"
    ],
    [
     "M0038",
     "Post-training uniform integer quantization of network parameters",
     "Adopted"
    ],
    [
     "M0039",
     "Pruning of 3DGS data",
     "Adopted"
    ],
    [
     "M0041",
     "Recalibration based on latent-representation difference awareness with subjective quality assessment",
     "Adopted"
    ]
   ]
  },
  {
   "n": 98,
   "p3911": 3,
   "date": "Aug 19-22, 2026",
   "dateNote": "",
   "place": "Shanghai",
   "version": "8.0",
   "status": "Released",
   "head": "i3DV 8.0: training acceleration, transformation cache and person-aware initialization",
   "body": "i3DV 7.0 consisted of 6.0 together with cross-platform consistency quantization (M0035, off by default), post-training uniform integer quantization of MLPs (M0038, flag_encode_mlp, on by default), bandwidth-aware hash grid (M0036), 3D-to-2D and planar coding (M0037), 3DGS data pruning (M0039, flag_prune_and_finetune, on by default) and implicit-representation discrepancy-aware recalibration (M0041, flag_refresh, on by default). The configuration document lists seven input / optimization / coding route combinations. At this meeting i3DV 8.0 was formed from training acceleration for the i3DV holographic video coding platform (M0042), which extends the earlier residual training acceleration M0031 adopted in 6.0, 3D-to-2D coding for neural transformation cache (M0043), person-aware non-uniform initialization (M0044) and redundant-process optimization (M0045). For 8.0, independent rate-distortion data exist for Dance_Dunhuang_Pair_1080 and migu_full_basketball_360 only; the remaining sequences reuse the 7.0 values.",
   "proposals": [
    [
     "M0042",
     "Training acceleration for the i3DV holographic video coding platform",
     "Adopted"
    ],
    [
     "M0043",
     "3D-to-2D coding for neural transformation cache on the i3DV platform",
     "Adopted"
    ],
    [
     "M0044",
     "Person-aware non-uniform initialization for i3DV",
     "Adopted"
    ],
    [
     "M0045",
     "Redundant-process optimization in the i3DV codec",
     "Adopted"
    ]
   ]
  }
 ],
 "versions": [
  {
   "ver": "1.0",
   "meeting": 90,
   "date": "Aug 2024",
   "note": "First public software release"
  },
  {
   "ver": "2.0",
   "meeting": 91,
   "date": "Dec 2024",
   "note": "Separate software release packages introduced, plus an additional offset branch"
  },
  {
   "ver": "2.1",
   "meeting": 92,
   "date": "Mar 2025",
   "note": "Reference-software version described in the TCSVT paper (author-supplied, to be confirmed)"
  },
  {
   "ver": "3.0",
   "meeting": 93,
   "date": "Jun 2025",
   "note": "Package name without a separator; data processing and interfaces unified from this version"
  },
  {
   "ver": "4.0",
   "meeting": 94,
   "date": "Aug 2025",
   "note": "Adds the migu and cook test sequences"
  },
  {
   "ver": "5.0",
   "meeting": 95,
   "date": "Dec 2025",
   "note": ""
  },
  {
   "ver": "6.0",
   "meeting": 96,
   "date": "Mar 2026",
   "note": ""
  },
  {
   "ver": "7.0",
   "meeting": 97,
   "date": "Jun 2026",
   "note": "Seven coding routes documented"
  },
  {
   "ver": "8.0",
   "meeting": 98,
   "date": "Aug 2026",
   "note": "Released at P3911 Meeting 3; independent RD data for Dance_Dunhuang_Pair_1080 and migu_full_basketball_360 only, four sequences reuse 7.0 (measured equal)"
  }
 ],
 "modules": [
  {
   "id": "repr",
   "name": "Representation and geometry",
   "desc": "The coded object changes from multi-view video to a differentiable representation model: Gaussian primitives are aggregated into sparse anchors carrying position x, feature f and scale l, and an MLP restores full Gaussian attributes at render time. This is the foundation of the whole technical route and the focus of every later tool.",
   "items": [
    {
     "name": "Compact anchor-primitive representation",
     "ver": "1.0",
     "ps": "M0001 / M0002",
     "status": "Adopted",
     "problem": "3DGS has a huge number of primitives with scattered parameters; direct coding is expensive to store",
     "effect": "Sparse anchors plus spatial prediction replace per-primitive coding and become the canonical i3DV representation"
    },
    {
     "name": "Implicit modeling of Gaussian primitive offsets",
     "ver": "2.1",
     "ps": "M0009",
     "status": "Adopted",
     "problem": "Explicitly coding offsets between anchors and Gaussians costs bitrate, and prediction errors propagate over time",
     "effect": "Offsets are modeled implicitly, removing offset bitrate and limiting temporal error accumulation"
    },
    {
     "name": "Geometric constraints on 2D Gaussian primitives",
     "ver": "4.0",
     "ps": "M0020",
     "status": "Adopted",
     "problem": "3D anchor representations are geometrically unstable on thin structures and weak textures",
     "effect": "2DGS geometric constraints improve reconstruction quality; flag_2dgs is off by default"
    },
    {
     "name": "Hash-grid feature pruning",
     "ver": "4.0",
     "ps": "M0019",
     "status": "Adopted",
     "problem": "Hash-grid feature tables contain many low-contribution entries that inflate storage",
     "effect": "Prunes redundant features; flag_prune_grid is on by default, lowering representation bitrate"
    },
    {
     "name": "Dynamic anchor adjustment",
     "ver": "4.0",
     "ps": "M0022",
     "status": "Adopted",
     "problem": "Anchors stay fixed in moving scenes, producing large prediction residuals",
     "effect": "Anchors may move dynamically, improving motion-scene efficiency"
    },
    {
     "name": "3DGS data pruning",
     "ver": "7.0",
     "ps": "M0039",
     "status": "Adopted",
     "problem": "Native 3DGS inputs carry redundant primitives",
     "effect": "Prune then fine-tune; flag_prune_and_finetune is on by default"
    },
    {
     "name": "Implicit-representation discrepancy-aware recalibration",
     "ver": "7.0",
     "ps": "M0040 → M0041",
     "status": "Adopted",
     "problem": "Implicit representations drift systematically along long prediction chains",
     "effect": "Recalibration plus subjective quality assessment; flag_refresh is on by default"
    }
   ]
  },
  {
   "id": "pred",
   "name": "Prediction and residuals",
   "desc": "Inter-frame redundancy dominates the bitrate of holographic video. Version 1.0 described inter-frame changes with a binary transform cache; from 3.0 the bitstream-level frame structure is used: I-frames carry anchor primitives and P-frames carry residuals modeled by a hash grid.",
   "items": [
    {
     "name": "Binary transform cache (BTC)",
     "ver": "1.0",
     "ps": "M0001",
     "status": "Proposed",
     "problem": "Dynamic changes between adjacent moments need a compact representation whose rate can be estimated exactly",
     "effect": "High-resolution tri-plane transforms plus a saliency grid make the rate directly estimable during training; the proposal reports 0.55 MB/frame"
    },
    {
     "name": "Residual primitive generation and coding",
     "ver": "3.0",
     "ps": "M0012",
     "status": "Adopted",
     "problem": "Anchor mapping alone cannot cover newly appearing or fast-moving regions in P-frames",
     "effect": "Adds a residual-primitive channel controlled by the encoder flag flag_residual"
    },
    {
     "name": "Residual primitive initialization",
     "ver": "5.0",
     "ps": "M0024",
     "status": "Adopted",
     "problem": "Initial residual-primitive positions rely on a single sparse point cloud with insufficient coverage",
     "effect": "COLMAP sparse point clouds for VRU sequences and ACMH dense point clouds for migu, enabled per sequence"
    },
    {
     "name": "Shared anchor-feature probability parameters",
     "ver": "6.0",
     "ps": "M0032",
     "status": "Adopted",
     "problem": "Each residual element estimates its own probability, raising parameter overhead and bitrate",
     "effect": "Shared probability parameters reduce residual coding bitrate"
    },
    {
     "name": "Dynamic feature splitting / static-dynamic gating",
     "ver": "5.0 / 6.0",
     "ps": "M0025 / M0030",
     "status": "Adopted",
     "problem": "Moving and static regions share one representation, making separate rate allocation difficult",
     "effect": "Splitting and gating by motion characteristics improve motion-scene reconstruction"
    }
   ]
  },
  {
   "id": "entropy",
   "name": "Quantization and entropy coding",
   "desc": "The differentiable entropy model makes bitrate an optimizable target: the hash grid supplies context, a small MLP predicts quantization steps and Gaussian distribution parameters, and arithmetic coding writes the bitstream. Later versions bring the MLP parameters themselves into quantization and the bitstream.",
   "items": [
    {
     "name": "Differentiable adaptive quantization + entropy model",
     "ver": "1.0",
     "ps": "M0001 / M0002",
     "status": "Adopted",
     "problem": "Quantization is non-differentiable, preventing end-to-end bitrate optimization",
     "effect": "Stop-gradient rounding approximation plus Gaussian probability integration enables joint rate-distortion optimization"
    },
    {
     "name": "Quantization element clipping and division-by-zero avoidance",
     "ver": "5.0",
     "ps": "M0029",
     "status": "Adopted",
     "problem": "Numerical overflow and arithmetic-coder errors during entropy coding",
     "effect": "Clipped quantization elements and adaptive quantization parameters scaled by 0.99 avoid division by zero and improve robustness"
    },
    {
     "name": "Post-training uniform integer quantization of network parameters",
     "ver": "7.0",
     "ps": "M0038",
     "status": "Adopted",
     "problem": "MLP weights are decoded as floats, which is inconsistent across platforms and costs bitrate",
     "effect": "Post-training integer quantization; flag_encode_mlp is on by default"
    },
    {
     "name": "Cross-platform consistency quantization",
     "ver": "7.0",
     "ps": "M0035",
     "status": "Adopted",
     "problem": "Decoding results differ slightly across hardware and frameworks",
     "effect": "Consistency-preserving quantization codec; qat_cfg.enabled is off by default"
    }
   ]
  },
  {
   "id": "eng",
   "name": "Platform engineering and performance",
   "desc": "From \"it can encode\" to \"it can run in real time, reproducibly, across platforms\": decoding and rendering acceleration, consistency checks, metric acceleration, and unified data processing and interfaces.",
   "items": [
    {
     "name": "Unified data processing and interfaces",
     "ver": "3.0",
     "status": "Adopted",
     "problem": "Separate preparation pipelines duplicated work and invited inconsistency",
     "effect": "Unified data-processing scripts and readers; one dataset serves the whole platform"
    },
    {
     "name": "Real-time decoding optimization",
     "ver": "4.0",
     "ps": "M0017",
     "status": "Adopted",
     "problem": "Decoder runtime does not meet real-time viewing requirements",
     "effect": "Rewrites the arithmetic submodule to cut decoding time"
    },
    {
     "name": "Cross-platform codec consistency optimization",
     "ver": "4.0",
     "ps": "M0018",
     "status": "Adopted",
     "problem": "Reconstructions differ across platforms, hindering metric reproduction",
     "effect": "Aligns codec paths to improve cross-platform consistency"
    },
    {
     "name": "CUDA SSIM acceleration",
     "ver": "4.0",
     "ps": "M0021",
     "status": "Adopted",
     "problem": "SSIM computation became the evaluation bottleneck",
     "effect": "fused-ssim submodule; flag_fused_ssim is on by default"
    },
    {
     "name": "Tensor Core rendering acceleration",
     "ver": "6.0",
     "ps": "M0034",
     "status": "Adopted",
     "problem": "Gaussian rasterization dominates rendering cost",
     "effect": "Tensor Core rendering acceleration on the decoder side"
    },
    {
     "name": "Residual training acceleration",
     "ver": "6.0",
     "ps": "M0031",
     "status": "Adopted",
     "problem": "Per-frame training of P-frames is slow",
     "effect": "Accelerates the residual training pipeline"
    }
   ]
  },
  {
   "id": "io",
   "name": "Input interfaces and test conditions",
   "desc": "A standard must support multiple input forms and reproducible test conditions: from multi-view video, to native 3DGS, to the 3D-to-2D + planar coding route.",
   "items": [
    {
     "name": "PCC anchor coding interface",
     "ver": "3.0",
     "ps": "M0013 / M0014",
     "status": "Adopted",
     "problem": "Anchor geometry can be carried by a mature point-cloud codec",
     "effect": "Calls the point-cloud codec reference software with flag_pcc enabled; requires building the bundled point-cloud codec submodule"
    },
    {
     "name": "Decoder hyperparameters written into the bitstream",
     "ver": "5.0",
     "status": "Adopted",
     "problem": "Decoding depended on external configuration files; the bitstream was not self-contained",
     "effect": "Header syntax elements updated; hyperparameters from the configuration are written into the bitstream"
    },
    {
     "name": "Native 3DGS coding input",
     "ver": "6.0",
     "ps": "M0033",
     "status": "Adopted",
     "problem": "Existing 3DGS assets could not enter the coding pipeline directly",
     "effect": "flag_3dgs_input enables native 3DGS input; off by default"
    },
    {
     "name": "3D-to-2D + planar coding",
     "ver": "7.0",
     "ps": "M0037",
     "status": "Adopted",
     "problem": "The 3D intelligent coding route has a high compute barrier and needs an easier-to-deploy alternative",
     "effect": "Anchors and Gaussians are projected to 2D and coded with a planar codec; the configuration document lists seven route combinations"
    },
    {
     "name": "Test sequence and parameter refinement",
     "ver": "4.0 / 5.0",
     "ps": "M0023 / M0028 / M0026",
     "status": "Adopted",
     "problem": "Coverage of test sequences was insufficient and N3DV first-frame parameters conflicted with undistortion constraints",
     "effect": "Expanded the test set, adjusted first-frame training parameters and updated undistortion resolution and camera parameters"
    }
   ]
  }
 ],
 "sequences": [
  {
   "key": "gz",
   "name": "VRU_gz",
   "note": "34 cameras · VRU basketball dataset"
  },
  {
   "key": "dg4",
   "name": "VRU_dg4",
   "note": "34 cameras · VRU basketball dataset"
  },
  {
   "key": "dh",
   "name": "Dance_Dunhuang_Pair_1080",
   "note": ">56 cameras · 360°"
  },
  {
   "key": "sg",
   "name": "Show_Groups_4K",
   "note": ">56 cameras · 270°"
  },
  {
   "key": "migu",
   "name": "migu_full_basketball_360",
   "note": "Tested from 4.0 onward"
  },
  {
   "key": "cook",
   "name": "cook_spinach",
   "note": "Tested from 4.0 onward"
  }
 ],
 "rd": {
  "1.0": {
   "gz": [
    {
     "mb": 0.202,
     "mbps": 40.4,
     "psnr": 29.7
    },
    {
     "mb": 0.253,
     "mbps": 50.6,
     "psnr": 30.04
    },
    {
     "mb": 0.299,
     "mbps": 59.8,
     "psnr": 30.182
    },
    {
     "mb": 0.382,
     "mbps": 76.4,
     "psnr": 30.435
    }
   ],
   "dg4": [
    {
     "mb": 0.183,
     "mbps": 36.6,
     "psnr": 28.213
    },
    {
     "mb": 0.211,
     "mbps": 42.2,
     "psnr": 28.434
    },
    {
     "mb": 0.239,
     "mbps": 47.8,
     "psnr": 28.481
    },
    {
     "mb": 0.286,
     "mbps": 57.2,
     "psnr": 28.523
    }
   ],
   "dh": [
    {
     "mb": 0.186,
     "mbps": 37.2,
     "psnr": 34.066
    },
    {
     "mb": 0.204,
     "mbps": 40.8,
     "psnr": 34.279
    },
    {
     "mb": 0.239,
     "mbps": 47.8,
     "psnr": 34.514
    },
    {
     "mb": 0.273,
     "mbps": 54.6,
     "psnr": 34.633
    }
   ],
   "sg": [
    {
     "mb": 0.152,
     "mbps": 30.4,
     "psnr": 36.963
    },
    {
     "mb": 0.17,
     "mbps": 34.0,
     "psnr": 37.298
    },
    {
     "mb": 0.191,
     "mbps": 38.2,
     "psnr": 37.397
    },
    {
     "mb": 0.237,
     "mbps": 47.4,
     "psnr": 37.801
    }
   ]
  },
  "2.0": {
   "gz": [
    {
     "mb": 0.0742,
     "mbps": 14.84,
     "psnr": 29.702
    },
    {
     "mb": 0.0912,
     "mbps": 18.24,
     "psnr": 30.152
    },
    {
     "mb": 0.1175,
     "mbps": 23.5,
     "psnr": 30.446
    },
    {
     "mb": 0.1552,
     "mbps": 31.04,
     "psnr": 30.673
    }
   ],
   "dg4": [
    {
     "mb": 0.0743,
     "mbps": 14.86,
     "psnr": 28.054
    },
    {
     "mb": 0.0867,
     "mbps": 17.34,
     "psnr": 28.285
    },
    {
     "mb": 0.1044,
     "mbps": 20.88,
     "psnr": 28.472
    },
    {
     "mb": 0.1264,
     "mbps": 25.28,
     "psnr": 28.56
    }
   ],
   "dh": [
    {
     "mb": 0.1069,
     "mbps": 21.38,
     "psnr": 35.175
    },
    {
     "mb": 0.1274,
     "mbps": 25.48,
     "psnr": 35.413
    },
    {
     "mb": 0.1664,
     "mbps": 33.28,
     "psnr": 35.666
    },
    {
     "mb": 0.2092,
     "mbps": 41.84,
     "psnr": 35.789
    }
   ],
   "sg": [
    {
     "mb": 0.0537,
     "mbps": 10.74,
     "psnr": 36.211
    },
    {
     "mb": 0.0615,
     "mbps": 12.3,
     "psnr": 36.775
    },
    {
     "mb": 0.0744,
     "mbps": 14.88,
     "psnr": 37.208
    },
    {
     "mb": 0.0915,
     "mbps": 18.3,
     "psnr": 37.504
    }
   ]
  },
  "3.0": {
   "gz": [
    {
     "mb": 0.086,
     "mbps": 17.2,
     "psnr": 30.258
    },
    {
     "mb": 0.1,
     "mbps": 20.0,
     "psnr": 30.6
    },
    {
     "mb": 0.121,
     "mbps": 24.2,
     "psnr": 30.857
    },
    {
     "mb": 0.16,
     "mbps": 32.0,
     "psnr": 31.067
    }
   ],
   "dg4": [
    {
     "mb": 0.084,
     "mbps": 16.8,
     "psnr": 28.399
    },
    {
     "mb": 0.108,
     "mbps": 21.6,
     "psnr": 28.684
    },
    {
     "mb": 0.146,
     "mbps": 29.2,
     "psnr": 28.834
    },
    {
     "mb": 0.181,
     "mbps": 36.2,
     "psnr": 28.919
    }
   ],
   "dh": [
    {
     "mb": 0.169,
     "mbps": 33.8,
     "psnr": 36.793
    },
    {
     "mb": 0.216,
     "mbps": 43.2,
     "psnr": 37.296
    },
    {
     "mb": 0.282,
     "mbps": 56.4,
     "psnr": 37.629
    },
    {
     "mb": 0.357,
     "mbps": 71.4,
     "psnr": 37.751
    }
   ],
   "sg": [
    {
     "mb": 0.061,
     "mbps": 12.2,
     "psnr": 36.776
    },
    {
     "mb": 0.07,
     "mbps": 14.0,
     "psnr": 37.058
    },
    {
     "mb": 0.08,
     "mbps": 16.0,
     "psnr": 37.314
    },
    {
     "mb": 0.108,
     "mbps": 21.6,
     "psnr": 37.582
    }
   ]
  },
  "4.0": {
   "gz": [
    {
     "mb": 0.102,
     "mbps": 20.4,
     "psnr": 30.617
    },
    {
     "mb": 0.121,
     "mbps": 24.2,
     "psnr": 30.831
    },
    {
     "mb": 0.141,
     "mbps": 28.2,
     "psnr": 30.985
    },
    {
     "mb": 0.169,
     "mbps": 33.8,
     "psnr": 31.096
    }
   ],
   "dg4": [
    {
     "mb": 0.099,
     "mbps": 19.8,
     "psnr": 28.608
    },
    {
     "mb": 0.11,
     "mbps": 22.0,
     "psnr": 28.721
    },
    {
     "mb": 0.129,
     "mbps": 25.8,
     "psnr": 28.802
    },
    {
     "mb": 0.154,
     "mbps": 30.8,
     "psnr": 28.894
    }
   ],
   "dh": [
    {
     "mb": 0.167,
     "mbps": 33.4,
     "psnr": 37.041
    },
    {
     "mb": 0.205,
     "mbps": 41.0,
     "psnr": 37.463
    },
    {
     "mb": 0.261,
     "mbps": 52.2,
     "psnr": 37.738
    },
    {
     "mb": 0.314,
     "mbps": 62.8,
     "psnr": 37.872
    }
   ],
   "sg": [
    {
     "mb": 0.071,
     "mbps": 14.2,
     "psnr": 37.053
    },
    {
     "mb": 0.078,
     "mbps": 15.6,
     "psnr": 37.332
    },
    {
     "mb": 0.086,
     "mbps": 17.2,
     "psnr": 37.517
    },
    {
     "mb": 0.107,
     "mbps": 21.4,
     "psnr": 37.734
    }
   ],
   "migu": [
    {
     "mb": 0.151,
     "mbps": 30.2,
     "psnr": 23.107
    },
    {
     "mb": 0.18,
     "mbps": 36.0,
     "psnr": 23.272
    },
    {
     "mb": 0.231,
     "mbps": 46.2,
     "psnr": 23.329
    },
    {
     "mb": 0.317,
     "mbps": 63.4,
     "psnr": 23.401
    }
   ],
   "cook": [
    {
     "mb": 0.073,
     "mbps": 17.52,
     "psnr": 33.601
    },
    {
     "mb": 0.075,
     "mbps": 18,
     "psnr": 33.883
    },
    {
     "mb": 0.08,
     "mbps": 19.2,
     "psnr": 33.912
    },
    {
     "mb": 0.09,
     "mbps": 21.6,
     "psnr": 34.085
    }
   ]
  },
  "5.0": {
   "gz": [
    {
     "mb": 0.182,
     "mbps": 36.4,
     "psnr": 30.801
    },
    {
     "mb": 0.198,
     "mbps": 39.6,
     "psnr": 31.021
    },
    {
     "mb": 0.224,
     "mbps": 44.8,
     "psnr": 31.207
    },
    {
     "mb": 0.26,
     "mbps": 52.0,
     "psnr": 31.316
    }
   ],
   "dg4": [
    {
     "mb": 0.159,
     "mbps": 31.8,
     "psnr": 28.771
    },
    {
     "mb": 0.174,
     "mbps": 34.8,
     "psnr": 28.935
    },
    {
     "mb": 0.195,
     "mbps": 39.0,
     "psnr": 29.092
    },
    {
     "mb": 0.228,
     "mbps": 45.6,
     "psnr": 29.113
    }
   ],
   "dh": [
    {
     "mb": 0.185,
     "mbps": 37.0,
     "psnr": 37.162
    },
    {
     "mb": 0.227,
     "mbps": 45.4,
     "psnr": 37.552
    },
    {
     "mb": 0.281,
     "mbps": 56.2,
     "psnr": 37.798
    },
    {
     "mb": 0.34,
     "mbps": 68.0,
     "psnr": 37.948
    }
   ],
   "sg": [
    {
     "mb": 0.07,
     "mbps": 14.0,
     "psnr": 37.174
    },
    {
     "mb": 0.082,
     "mbps": 16.4,
     "psnr": 37.436
    },
    {
     "mb": 0.096,
     "mbps": 19.2,
     "psnr": 37.552
    },
    {
     "mb": 0.125,
     "mbps": 25.0,
     "psnr": 37.697
    }
   ],
   "migu": [
    {
     "mb": 0.162,
     "mbps": 32.4,
     "psnr": 23.433
    },
    {
     "mb": 0.198,
     "mbps": 39.6,
     "psnr": 23.601
    },
    {
     "mb": 0.257,
     "mbps": 51.4,
     "psnr": 23.697
    },
    {
     "mb": 0.348,
     "mbps": 69.6,
     "psnr": 23.762
    }
   ],
   "cook": [
    {
     "mb": 0.048,
     "mbps": 11.52,
     "psnr": 33.733
    },
    {
     "mb": 0.052,
     "mbps": 12.48,
     "psnr": 33.887
    },
    {
     "mb": 0.058,
     "mbps": 13.92,
     "psnr": 34.144
    },
    {
     "mb": 0.069,
     "mbps": 16.56,
     "psnr": 34.232
    }
   ]
  },
  "6.0": {
   "gz": [
    {
     "mb": 0.146,
     "mbps": 29.2,
     "psnr": 30.924
    },
    {
     "mb": 0.163,
     "mbps": 32.6,
     "psnr": 31.106
    },
    {
     "mb": 0.192,
     "mbps": 38.4,
     "psnr": 31.227
    },
    {
     "mb": 0.22,
     "mbps": 44.0,
     "psnr": 31.285
    }
   ],
   "dg4": [
    {
     "mb": 0.102,
     "mbps": 20.4,
     "psnr": 28.411
    },
    {
     "mb": 0.118,
     "mbps": 23.6,
     "psnr": 28.662
    },
    {
     "mb": 0.142,
     "mbps": 28.4,
     "psnr": 28.8
    },
    {
     "mb": 0.168,
     "mbps": 33.6,
     "psnr": 28.902
    }
   ],
   "dh": [
    {
     "mb": 0.153,
     "mbps": 30.6,
     "psnr": 37.069
    },
    {
     "mb": 0.193,
     "mbps": 38.6,
     "psnr": 37.466
    },
    {
     "mb": 0.246,
     "mbps": 49.2,
     "psnr": 37.706
    },
    {
     "mb": 0.305,
     "mbps": 61.0,
     "psnr": 37.85
    }
   ],
   "sg": [
    {
     "mb": 0.069,
     "mbps": 13.8,
     "psnr": 37.058
    },
    {
     "mb": 0.082,
     "mbps": 16.4,
     "psnr": 37.199
    },
    {
     "mb": 0.097,
     "mbps": 19.4,
     "psnr": 37.59
    },
    {
     "mb": 0.127,
     "mbps": 25.4,
     "psnr": 37.669
    }
   ],
   "migu": [
    {
     "mb": 0.159,
     "mbps": 31.8,
     "psnr": 23.482
    },
    {
     "mb": 0.193,
     "mbps": 38.6,
     "psnr": 23.602
    },
    {
     "mb": 0.255,
     "mbps": 51.0,
     "psnr": 23.721
    },
    {
     "mb": 0.36,
     "mbps": 72.0,
     "psnr": 23.754
    }
   ],
   "cook": [
    {
     "mb": 0.049,
     "mbps": 11.76,
     "psnr": 33.381
    },
    {
     "mb": 0.052,
     "mbps": 12.48,
     "psnr": 33.571
    },
    {
     "mb": 0.058,
     "mbps": 13.92,
     "psnr": 33.668
    },
    {
     "mb": 0.069,
     "mbps": 16.56,
     "psnr": 33.82
    }
   ]
  },
  "7.0": {
   "gz": [
    {
     "mb": 0.072,
     "mbps": 14.4,
     "psnr": 30.839
    },
    {
     "mb": 0.083,
     "mbps": 16.6,
     "psnr": 30.972
    },
    {
     "mb": 0.107,
     "mbps": 21.4,
     "psnr": 31.121
    },
    {
     "mb": 0.127,
     "mbps": 25.4,
     "psnr": 31.219
    }
   ],
   "dg4": [
    {
     "mb": 0.058,
     "mbps": 11.6,
     "psnr": 28.576
    },
    {
     "mb": 0.074,
     "mbps": 14.8,
     "psnr": 28.721
    },
    {
     "mb": 0.092,
     "mbps": 18.4,
     "psnr": 28.855
    },
    {
     "mb": 0.11,
     "mbps": 22.0,
     "psnr": 28.903
    }
   ],
   "dh": [
    {
     "mb": 0.12,
     "mbps": 24.0,
     "psnr": 37.284
    },
    {
     "mb": 0.149,
     "mbps": 29.8,
     "psnr": 37.551
    },
    {
     "mb": 0.207,
     "mbps": 41.4,
     "psnr": 37.742
    },
    {
     "mb": 0.247,
     "mbps": 49.4,
     "psnr": 37.816
    }
   ],
   "sg": [
    {
     "mb": 0.034,
     "mbps": 6.8,
     "psnr": 37.06
    },
    {
     "mb": 0.045,
     "mbps": 9.0,
     "psnr": 37.39
    },
    {
     "mb": 0.056,
     "mbps": 11.2,
     "psnr": 37.606
    },
    {
     "mb": 0.062,
     "mbps": 12.4,
     "psnr": 37.609
    }
   ],
   "migu": [
    {
     "mb": 0.119,
     "mbps": 23.8,
     "psnr": 23.493
    },
    {
     "mb": 0.162,
     "mbps": 32.4,
     "psnr": 23.605
    },
    {
     "mb": 0.211,
     "mbps": 42.2,
     "psnr": 23.682
    },
    {
     "mb": 0.321,
     "mbps": 64.2,
     "psnr": 23.756
    }
   ],
   "cook": [
    {
     "mb": 0.024,
     "mbps": 5.76,
     "psnr": 33.449
    },
    {
     "mb": 0.026,
     "mbps": 6.24,
     "psnr": 33.678
    },
    {
     "mb": 0.032,
     "mbps": 7.68,
     "psnr": 33.736
    },
    {
     "mb": 0.04,
     "mbps": 9.6,
     "psnr": 33.873
    }
   ]
  },
  "8.0": {
   "gz": [
    {
     "mb": 0.072,
     "mbps": 14.4,
     "psnr": 30.839
    },
    {
     "mb": 0.083,
     "mbps": 16.6,
     "psnr": 30.972
    },
    {
     "mb": 0.107,
     "mbps": 21.4,
     "psnr": 31.121
    },
    {
     "mb": 0.127,
     "mbps": 25.4,
     "psnr": 31.219
    }
   ],
   "dg4": [
    {
     "mb": 0.058,
     "mbps": 11.6,
     "psnr": 28.576
    },
    {
     "mb": 0.074,
     "mbps": 14.8,
     "psnr": 28.721
    },
    {
     "mb": 0.092,
     "mbps": 18.4,
     "psnr": 28.855
    },
    {
     "mb": 0.11,
     "mbps": 22.0,
     "psnr": 28.903
    }
   ],
   "dh": [
    {
     "mb": 0.078,
     "mbps": 15.6,
     "psnr": 36.888
    },
    {
     "mb": 0.101,
     "mbps": 20.2,
     "psnr": 37.247
    },
    {
     "mb": 0.135,
     "mbps": 27.0,
     "psnr": 37.524
    },
    {
     "mb": 0.16,
     "mbps": 32.0,
     "psnr": 37.659
    }
   ],
   "sg": [
    {
     "mb": 0.034,
     "mbps": 6.8,
     "psnr": 37.06
    },
    {
     "mb": 0.045,
     "mbps": 9.0,
     "psnr": 37.39
    },
    {
     "mb": 0.056,
     "mbps": 11.2,
     "psnr": 37.606
    },
    {
     "mb": 0.062,
     "mbps": 12.4,
     "psnr": 37.609
    }
   ],
   "migu": [
    {
     "mb": 0.11,
     "mbps": 22.0,
     "psnr": 24.623
    },
    {
     "mb": 0.144,
     "mbps": 28.8,
     "psnr": 24.747
    },
    {
     "mb": 0.191,
     "mbps": 38.2,
     "psnr": 24.82
    },
    {
     "mb": 0.22,
     "mbps": 44.0,
     "psnr": 24.877
    }
   ],
   "cook": [
    {
     "mb": 0.024,
     "mbps": 5.76,
     "psnr": 33.449
    },
    {
     "mb": 0.026,
     "mbps": 6.24,
     "psnr": 33.678
    },
    {
     "mb": 0.032,
     "mbps": 7.68,
     "psnr": 33.736
    },
    {
     "mb": 0.04,
     "mbps": 9.6,
     "psnr": 33.873
    }
   ]
  }
 },
 "papers": [
  {
   "key": "ifvc",
   "year": "2025",
   "venue": "AAAI-25",
   "title": "Compressing Streamable Free-Viewpoint Videos to 0.1 MB per Frame",
   "authors": "Luyang Tang, Jiayu Yang, Rui Peng, Yongqi Zhai, Shihe Shen, Ronggang Wang",
   "meta": "Proceedings of the AAAI Conference on Artificial Intelligence, vol. 39, no. 7, pp. 7257–7265",
   "note": "iFVC: anchor-primitive representation + binary transform cache + end-to-end rate-distortion optimization; 13 s/frame training, 0.1 MB/frame, 120 FPS rendering. Corresponds to proposal M0001 in the June 2024 early record.",
   "links": [
    [
     "Paper",
     "https://ojs.aaai.org/index.php/AAAI/article/view/32780"
    ],
    [
     "Code",
     "https://github.com/Pomelomm/iFVC"
    ]
   ]
  },
  {
   "key": "i3dv",
   "year": "2026",
   "venue": "IEEE TCSVT",
   "title": "i3DV: Intelligent 3D Holographic Video Coding Standard and Platform",
   "authors": "Jiayu Yang, Luyang Tang, Jiahao Wu, Jie Liang, Feng Gao, Ronggang Wang",
   "meta": "IEEE Transactions on Circuits and Systems for Video Technology, vol. 36, no. 8, pp. 11068–11080, Aug. 2026 · DOI 10.1109/TCSVT.2026.3686427",
   "note": "Survey of the i3DV reference software and its coding platform: frame structure, spatial prediction, differentiable entropy model, common test conditions and coding efficiency. Corresponds to i3DV 2.1.",
   "links": [
    [
     "DOI",
     "https://doi.org/10.1109/TCSVT.2026.3686427"
    ]
   ]
  }
 ],
 "standards": [
  {
   "org": "IEEE",
   "name": "P3911 — Standard for Holographic Video Coding",
   "status": "PAR approved on 2025-12-10",
   "facts": [
    [
     "Working group",
     "IEEE C/DC Holographic Media Coding Working Group (HMCWG)"
    ],
    [
     "Scope",
     "Holographic video representation and coding supporting 6DoF interaction and photorealistic virtual-viewpoint rendering, covering multi-view video, MVD and 3D/4D Gaussian splatting"
    ],
    [
     "Standard content",
     "Tools for representation and encoding, with the syntax, semantics, parsing and decoding procedures that make the bitstream decodable"
    ],
    [
     "Timeline",
     "First Standards Committee ballot in Dec 2027; RevCom submission in Oct 2029"
    ],
    [
     "Meetings",
     "P3911 Meetings 1–3; the seven earlier records (Jun 2024 – Dec 2025) predate the project"
    ]
   ]
  },
  {
   "org": "Reference software",
   "name": "i3DV — Reference software of IEEE P3911",
   "status": "Version 8.0 released (Aug 2026)",
   "facts": [
    [
     "Role",
     "Implements and validates the coding tools of the standard; adopted tools are integrated into a numbered release"
    ],
    [
     "Versions",
     "1.0 to 8.0, released across the meeting series from Aug 2024 to Aug 2026"
    ],
    [
     "Origin",
     "First proposed as iFVC in June 2024; established as i3DV 1.0 in August 2024"
    ],
    [
     "Test conditions",
     "Common Test Conditions 4.0 (N0004, January 2026), six test sequences"
    ]
   ]
  }
 ],
 "todos": [
  [
   "Exact dates of the June 2024 record (Shaoxing)",
   "M0001 and N0001 are dated 2024-06-13 / 06-18, so only the month is certain"
  ],
  [
   "Exact dates of the December 2025 record (Macau)",
   "Proposal files are dated 2025-12-03 to 12-22, so only the month is certain"
  ],
  [
   "Exact correspondence between 2.1 and the TCSVT paper",
   "The author-supplied hint is \"2.1 corresponds to TCSVT\"; the paper was submitted 2025-04-30 and accepted 2026-04-13, so its relation to 2.1 (Mar 2025) and later versions needs author confirmation"
  ],
  [
   "Original proposal documents for M0016",
   "Listed only in the 3.0 version integration record; no original proposal documents were found"
  ],
  [
   "Early data for migu_full_basketball_360 and cook_spinach",
   "Zero in the 1.0-3.0 data tables, so a 1.0 baseline cannot be computed; the site uses 4.0 as the baseline"
  ],
  [
   "8.0 results for VRU_gz, VRU_dg4, Show_Groups_4K and cook_spinach",
   "Per the author-supplied fact these sequences measure the same at 8.0 and 7.0; the site reuses the 7.0 values and says so on every relevant chart and table"
  ]
 ],
 "rd8Reuse": [
  "gz",
  "dg4",
  "sg",
  "cook"
 ]
};

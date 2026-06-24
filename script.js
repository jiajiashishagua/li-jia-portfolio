const baseProjects = {
  launch: {
    category: "AI Short Drama / Launch",
    title: "精品短剧量产与平台上线",
    visual: "assets/card-manga-pipeline.png",
    cover: "5 部精品短剧\n3 部海外上线",
    description:
      "入职 3 个月完成精品短剧创作 5 部，其中 3 部上线 ReelShort、TikTok 等平台，2 部播放量破百万。熟悉海外短剧平台的内容节奏、画面标准与传播反馈。",
    details: [
      ["Role", "AIGC创意导演/AI精品短剧制作人/AI工作流创建人"],
      ["Output", "3 个月完成 5 部精品短剧创作"],
      ["Platform", "ReelShort / TikTok 等海外平台"],
      ["Result", "2 部作品播放量破百万"],
    ],
  },
  cards: {
    category: "Direction / Shot Planning",
    title: "剧本到镜头拆解",
    visual: "assets/card-manga-pipeline.png",
    cover: "Shot Planning\nLens / Emotion / Beat",
    description:
      "作为制作人员全程参与项目，能围绕剧情节奏、人物关系、镜头景别、动作细节与情绪表达进行稳定拆解和优化。",
    details: [
      ["Planning", "剧情节奏、人物关系、镜头景别拆解"],
      ["Lens", "镜头景别、场面调度、转场设计"],
      ["Emotion", "人物微表情、动作细节、情绪递进"],
      ["Value", "以导演视角把剧本转为可生成镜头"],
    ],
  },
  lens: {
    category: "Lens Language / Review",
    title: "镜头语言与拉片复盘",
    visual: "assets/creative-light-portrait.png",
    cover: "Shot Language\nReview System",
    description:
      "持续跟随韩国高校影视方向研究生毕业导演学习镜头语言，通过多次拉片与镜头复盘，强化镜头调度、人物微表情、场面节奏与语言表达能力。",
    details: [
      ["Training", "跟随影视方向导演持续学习镜头语言"],
      ["Method", "拉片、镜头复盘、构图和节奏拆解"],
      ["Focus", "人物微表情、动作设计、场面节奏"],
      ["Result", "强化短剧镜头质检与画面表达判断"],
    ],
  },
  agent: {
    category: "AIGC Workflow / API",
    title: "API 与 Agent 工作流",
    visual: "assets/card-report-system.png",
    cover: "Model API\nAgent Workflow",
    description:
      "参与短视频生成平台及模型 API 搭建与对接，完成模型能力评估、接口选型与流程打通；对接 LibTV、NeoWow、Wuli 分镜师、分秒帧、帧界等提效工具平台。",
    details: [
      ["API", "模型能力评估、接口选型、调用流程设计"],
      ["Tools", "LibTV / NeoWow / Wuli / 分秒帧 / 帧界"],
      ["Agents", "资产提取、故事板、分镜提示词、剧情分析"],
      ["Efficiency", "约 1 个半月 1 部提升至 20 天 2 部"],
    ],
  },
  prompt: {
    category: "Prompt Library / Production Asset",
    title: "视频提示词网站与资产库",
    visual: "assets/card-ai-product.png",
    cover: "Prompt Asset\nAction / Light / Blocking",
    description:
      "自建视频提示词网站，系统整理人物动作、微表情、光影设计、镜头控制、人物站位控制等提示词模块，提升画面真实感、一致性与团队复用效率。",
    details: [
      ["Action", "人物动作与场面调度提示词"],
      ["Expression", "微表情、情绪递进与人物关系"],
      ["Camera", "镜头控制、景别、运动和构图"],
      ["Library", "可复用团队资产与制作规范"],
    ],
  },
};

const CONFIDENTIAL_NOTICE = "*注：本案例仅作求职技能展示，涉及项目保密协议，请勿公开传播。";

const shortDramaSections = [
  {
    id: "my-husband-lost-me",
    eyebrow: "PART 01",
    title: "My Husband Lost Me",
    summary: "Narrative Hook / Web Preview",
    description: "代表性精简样片，用于展示出海短剧项目中的叙事节奏、情绪钩子和画面交付能力。",
    files: [
      {
        id: "narrative-hook",
        title: "My Husband Lost Me // 叙事钩子样片",
        fileName: "my-husband-lost-me-narrative-demo.mp4",
        type: "video/mp4",
        role: "职责：剧情钩子提炼、人物关系拆解、成片问题复盘",
        proof: "能力证明：能在出海短剧语境下平衡情绪强度、镜头清晰度与交付稳定性。",
        src: "assets/short-drama/demo/my-husband-lost-me-narrative-demo.mp4",
        available: true,
        confidential: true,
      },
    ],
  },
  {
    id: "the-hidden-empress",
    eyebrow: "PART 02",
    title: "The Hidden Empress",
    summary: "Emotional Detail / Web Preview",
    description: "代表性情绪样片，用于展示我对人物情感层次、微表情变化和细腻情绪递进的把控。",
    files: [
      {
        id: "emotion-detail",
        title: "The Hidden Empress // 情绪表达样片",
        fileName: "the-hidden-empress-emotion-demo.mp4",
        type: "video/mp4",
        role: "职责：情绪节奏理解、人物微表情观察、细腻情感表达优化",
        proof: "能力证明：能从眼神、停顿、面部细节和人物关系中提取情绪重点，让 AIGC 短剧画面更贴近真实表演。",
        src: "assets/short-drama/demo/the-hidden-empress-emotion-demo.mp4",
        available: true,
        confidential: true,
      },
    ],
  },
  {
    id: "mad-queen",
    eyebrow: "PART 03",
    title: "Mad Queen",
    summary: "High Conflict / Web Preview",
    description: "代表性精简样片，用于展示短剧镜头调度、人物状态和高密度剧情推进能力。",
    files: [
      {
        id: "high-conflict",
        title: "Mad Queen // 高冲突节奏样片",
        fileName: "mad-queen-conflict-demo.mp4",
        type: "video/mp4",
        role: "职责：剧情理解、人物状态拆解、镜头节奏与画面质量优化",
        proof: "能力证明：能把高密度情绪冲突转译成可生成、可质检、可交付的镜头方案。",
        src: "assets/short-drama/demo/mad-queen-conflict-demo.mp4",
        available: true,
        confidential: true,
      },
    ],
  },
  {
    id: "second-chance",
    eyebrow: "PART 04",
    title: "Second Chance - No More Mrs. Nice Girl",
    summary: "Character Turn / Web Preview",
    description: "代表性精简样片，用于呈现连续叙事、人物关系变化、情绪反转和短剧节奏控制。",
    files: [
      {
        id: "character-turn",
        title: "Second Chance // 人物反转样片",
        fileName: "second-chance-character-turn-demo.mp4",
        type: "video/mp4",
        role: "职责：叙事节奏拆解、二卡/三卡制作、分镜提示词优化",
        proof: "能力证明：能围绕人物反转和平台节奏，拆出更适合 AIGC 生产的画面结构。",
        src: "assets/short-drama/demo/second-chance-character-turn-demo.mp4",
        available: true,
        confidential: true,
      },
    ],
  },
  {
    id: "additional-samples",
    eyebrow: "PART 05",
    title: "其他样片与成长轨迹 / Additional Samples",
    summary: "Growth Sample / Web Preview",
    description: "补充样片用于展示创作路径、叙事理解和影像表达的成长轨迹。",
    files: [
      {
        id: "marriage-growth",
        title: "乘风破浪的婚姻 // 成长轨迹样片",
        fileName: "additional-samples-marriage-demo.mp4",
        type: "video/mp4",
        role: "职责：创作练习、镜头语言学习、提示词表达沉淀",
        proof: "能力证明：展示从执行型制作到更强镜头判断的成长轨迹。",
        src: "assets/short-drama/demo/additional-samples-marriage-demo.mp4",
        available: true,
        confidential: true,
      },
      {
        id: "ai-taohuayuan",
        title: "AI时代·桃花源 // 概念表达样片",
        fileName: "additional-samples-ai-taohuayuan-demo.mp4",
        type: "video/mp4",
        role: "职责：概念创意表达、世界观氛围搭建、AI 影像叙事探索",
        proof: "能力证明：展示对 AI 时代议题、视觉气质和长线叙事节奏的早期探索。",
        src: "assets/short-drama/demo/additional-samples-ai-taohuayuan-demo.mp4",
        available: true,
        confidential: true,
      },
      {
        id: "dark-prison",
        title: "暗狱 // 情绪氛围样片",
        fileName: "additional-samples-dark-prison-demo.mp4",
        type: "video/mp4",
        role: "职责：暗色调氛围控制、人物压迫感表达、短片节奏练习",
        proof: "能力证明：展示对情绪张力、画面压迫感和竖屏影像表达的探索。",
        src: "assets/short-drama/demo/additional-samples-dark-prison-demo.mp4",
        available: true,
        confidential: true,
      },
    ],
  },
];

const capabilityDetails = {
  "full-production": {
    category: "Core Capability / 01",
    title: "AIGC 短剧全流程制作能力",
    cover: "Full-Cycle\nAIGC Production",
    tags: ["Script", "Assets", "Cards", "Final Cut"],
    description:
      "能参与精品短剧从剧本理解、剧情分析、人物/场景/道具拆解、分镜提示词到成片优化的完整流程，不停留在单点执行。",
    details: [
      ["Production Scope", "覆盖剧情理解、人物关系拆解、场景/道具资产梳理、分镜提示词、二卡/三卡制作与成片优化。"],
      ["Project Proof", "已参与完成 5 部精品短剧，其中 3 部上线 ReelShort、TikTok 等平台，2 部播放量破百万。"],
      ["HR Signal", "具备真实项目经验和平台结果验证，能进入实际生产现场，承担从理解到交付的关键环节。"],
    ],
  },
  "sop-standardization": {
    category: "Core Capability / 02",
    title: "SOP、飞书资产管理与流程标准化能力",
    cover: "SOP\nAsset System",
    tags: ["Structure", "Feishu", "Repeatable"],
    description:
      "擅长把复杂、高频、依赖个人经验的工作拆成标准流程，也能把资产、版本、状态和责任人放进可协作的系统里。",
    details: [
      ["Previous Proof", "曾在七星微电子调研 15 人技术团队诉求，搭建 6 套标准化报告模板，覆盖 400 余种产品型号。"],
      ["Feishu Asset System", "在飞书搭建资产管理表格，统一人物、场景、道具、提示词、版本状态与交付信息，减少反复沟通，提升团队协作效率。"],
      ["AIGC Transfer", "入职后将流程拆解能力迁移至 AIGC 短剧生产，沉淀提示词平台、Agent 工作流与制作 SOP。"],
      ["Value", "这项能力让短剧生产不只是完成单个任务，而是形成可沉淀、可迭代、可交接的协作体系。"],
    ],
  },
  "prompt-system": {
    category: "Core Capability / 03",
    title: "规律提炼与提示词体系化能力",
    cover: "Prompt\nAsset Library",
    tags: ["Action", "Expression", "Camera", "Lighting"],
    description:
      "能从大量项目实践中提炼画面生成规律，并沉淀为可复用的提示词体系，提升画面质量和团队效率。",
    details: [
      ["System", "自建视频提示词平台，系统整理人物动作、微表情、光影设计、镜头控制、人物站位等模块。"],
      ["Quality", "提示词不是零散句子，而是服务画面真实感、人物一致性和镜头表达稳定性的制作资产。"],
      ["Team Value", "把个人手感转成团队可调用资产，降低协作成本，提升批量生产的一致性。"],
    ],
  },
  "tool-selection": {
    category: "Core Capability / 04",
    title: "工具选型与平台对接能力",
    cover: "Tools\nAPI & Platform",
    tags: ["LibTV", "NeoWow", "Wuli", "API"],
    description:
      "能主动寻找提效工具、评估能力边界、对接平台方，并判断工具是否真正适合生产流程。",
    details: [
      ["Platform Work", "参与模型 API 能力评估、接口选型与业务落地判断，理解模型能力、流程调用和生产约束。"],
      ["Tool Partners", "对接 LibTV、NeoWow、Wuli 分镜师、分秒帧、帧界等 AIGC 提效平台，完成工具调研和生产匹配。"],
      ["Business Judgment", "关注工具能否进入真实制作流程，而不是只看演示效果。"],
    ],
  },
  "agent-workflow": {
    category: "Core Capability / 05",
    title: "AIGC Agent 工作流搭建能力",
    cover: "Agent\nWorkflow",
    tags: ["Asset Agent", "Storyboard", "Prompt", "Analysis"],
    description:
      "能够根据短剧制作中的高频需求设计 Agent，用工具化、自动化方式减少重复劳动并提升团队效率。",
    details: [
      ["Agents", "创建人物/道具/场景资产提取 Agent、故事板生成 Agent、分镜提示词生成 Agent、剧情分析 Agent 等。"],
      ["Efficiency", "推动项目制作节奏由约 45 天/部提升至约 20 天/2 部，交付节奏显著提升。"],
      ["Positioning", "这说明我不只是执行 AIGC 制作，也能帮助团队建立更高效的生产系统。"],
    ],
  },
  "creative-language": {
    category: "Core Capability / 06",
    title: "创作理解与镜头语言成长能力",
    cover: "Creative\nLens Language",
    tags: ["Emotion", "Blocking", "Shot", "Review"],
    description:
      "持续学习镜头语言、拉片分析和导演思维，能从剧情情绪、人物关系和画面表达角度优化成片。",
    details: [
      ["Learning Path", "在短剧制作过程中持续学习镜头语言、拉片分析和导演思维，强化画面判断。"],
      ["Creative Focus", "能从剧情情绪、人物关系、镜头景别、动作节奏、微表情表达等角度理解画面。"],
      ["Growth Signal", "已能承担精品短剧镜头拆解与画面优化工作，并具备从执行交付走向导演判断的成长潜力。"],
    ],
  },
};

const STORAGE_KEYS = {
  copy: "li-jia-page-copy-v1",
  works: "li-jia-uploaded-works-v1",
};

const DB_NAME = "li-jia-portfolio-files";
const DB_VERSION = 1;
const FILE_STORE = "files";

let projects = { ...baseProjects };
let staticDramaProjects = {};
let uploadedWorks = [];
let editingEnabled = false;
const objectUrlCache = new Map();

const header = document.querySelector(".site-header");
const modal = document.querySelector(".project-modal");
const modalMedia = document.querySelector("#modal-media");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalDetails = document.querySelector("#modal-details");
const editorToggle = document.querySelector(".editor-toggle");
const editorPanel = document.querySelector(".editor-panel");
const editorClose = document.querySelector(".editor-close");
const toggleEditModeButton = document.querySelector("#toggle-edit-mode");
const saveCopyButton = document.querySelector("#save-page-copy");
const resetCopyButton = document.querySelector("#reset-page-copy");
const workUploadForm = document.querySelector("#work-upload-form");
const uploadedWorkList = document.querySelector("#uploaded-work-list");
const workGrid = document.querySelector(".work-grid");
const dramaLibrary = document.querySelector("#short-drama-library");
const photoHook = document.querySelector(".hero-photo-hook");
const butterflyTrigger = document.querySelector(".butterfly-trigger");
const photoDrop = document.querySelector("#personal-photo-drop");
const photoIdCard = document.querySelector(".photo-id-card");
let photoAnimationFrame;

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easeInOutCubic(value) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function dampedSpringProgress(seconds) {
  const dampingRatio = 0.66;
  const angularFrequency = 4.4;
  const dampedFrequency = angularFrequency * Math.sqrt(1 - dampingRatio * dampingRatio);
  const envelope = Math.exp(-dampingRatio * angularFrequency * seconds);
  const phase =
    Math.cos(dampedFrequency * seconds) +
    (dampingRatio / Math.sqrt(1 - dampingRatio * dampingRatio)) * Math.sin(dampedFrequency * seconds);
  return 1 - envelope * phase;
}

function setPhotoDropFrame({ y, angle, opacity, shadowY, shadowBlur, shadowAlpha }) {
  if (!photoDrop) return;

  photoDrop.style.opacity = String(clampNumber(opacity, 0, 1));
  photoDrop.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${angle.toFixed(3)}deg)`;
  photoDrop.style.filter = `drop-shadow(0 ${shadowY.toFixed(1)}px ${shadowBlur.toFixed(1)}px rgba(0, 0, 0, ${shadowAlpha.toFixed(3)}))`;
}

function cancelPhotoMotion() {
  if (photoAnimationFrame) {
    window.cancelAnimationFrame(photoAnimationFrame);
    photoAnimationFrame = undefined;
  }
}

function runPhotoOpenMotion() {
  if (!photoDrop) return;

  cancelPhotoMotion();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setPhotoDropFrame({ y: 0, angle: 0, opacity: 1, shadowY: 18, shadowBlur: 38, shadowAlpha: 0.13 });
    return;
  }

  const startY = -230;
  const targetY = 0;
  const duration = 2400;
  const settleAt = 2200;
  const startedAt = window.performance.now();

  const tick = (timestamp) => {
    const elapsed = timestamp - startedAt;
    const seconds = elapsed / 1000;
    const progress = dampedSpringProgress(seconds);
    const y = startY + (targetY - startY) * progress;
    const swingSeconds = Math.max(0, seconds - 0.72);
    const swingEnvelope = Math.exp(-1.9 * swingSeconds);
    const entryLean = -1.8 * (1 - clampNumber(elapsed / 560, 0, 1));
    const swing = swingSeconds > 0 ? 3.3 * swingEnvelope * Math.sin(8.4 * swingSeconds) : 0;
    const opacity = clampNumber(elapsed / 420, 0, 1);
    const velocityHint = clampNumber(Math.abs(y) / Math.abs(startY), 0, 1);
    const shadowLift = 1 - velocityHint;

    setPhotoDropFrame({
      y,
      angle: entryLean + swing,
      opacity,
      shadowY: 8 + shadowLift * 18,
      shadowBlur: 18 + shadowLift * 30,
      shadowAlpha: 0.06 + shadowLift * 0.1,
    });

    if (elapsed < duration && (elapsed < settleAt || Math.abs(y) > 0.25 || Math.abs(swing) > 0.12)) {
      photoAnimationFrame = window.requestAnimationFrame(tick);
      return;
    }

    setPhotoDropFrame({ y: 0, angle: 0, opacity: 1, shadowY: 18, shadowBlur: 38, shadowAlpha: 0.13 });
    photoAnimationFrame = undefined;
  };

  photoAnimationFrame = window.requestAnimationFrame(tick);
}

function runPhotoCloseMotion(onComplete) {
  if (!photoDrop) return;

  cancelPhotoMotion();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setPhotoDropFrame({ y: -210, angle: -3, opacity: 0, shadowY: 10, shadowBlur: 24, shadowAlpha: 0.08 });
    onComplete?.();
    return;
  }

  const duration = 760;
  const startedAt = window.performance.now();

  const tick = (timestamp) => {
    const elapsed = timestamp - startedAt;
    const progress = clampNumber(elapsed / duration, 0, 1);
    const eased = easeInOutCubic(progress);
    const dip = Math.sin(Math.min(progress * Math.PI, Math.PI)) * 9;
    const y = dip - 210 * eased;
    const angle = -3.4 * eased;
    const opacity = 1 - clampNumber((progress - 0.18) / 0.72, 0, 1);
    const shadowEase = 1 - eased;

    setPhotoDropFrame({
      y,
      angle,
      opacity,
      shadowY: 10 + shadowEase * 8,
      shadowBlur: 24 + shadowEase * 14,
      shadowAlpha: 0.08 + shadowEase * 0.05,
    });

    if (progress < 1) {
      photoAnimationFrame = window.requestAnimationFrame(tick);
      return;
    }

    setPhotoDropFrame({ y: -210, angle: -3, opacity: 0, shadowY: 10, shadowBlur: 24, shadowAlpha: 0.08 });
    photoAnimationFrame = undefined;
    onComplete?.();
  };

  photoAnimationFrame = window.requestAnimationFrame(tick);
}

function setPhotoHookOpen(open) {
  if (!photoHook || !butterflyTrigger || !photoDrop) return;

  cancelPhotoMotion();

  butterflyTrigger.setAttribute("aria-expanded", String(open));

  if (open) {
    photoHook.classList.remove("is-closing");
    photoHook.classList.add("is-open");
    photoDrop.setAttribute("aria-hidden", "false");
    runPhotoOpenMotion();
    return;
  }

  if (!photoHook.classList.contains("is-open")) {
    photoHook.classList.remove("is-closing");
    photoDrop.setAttribute("aria-hidden", "true");
    return;
  }

  photoHook.classList.remove("is-open");
  photoHook.classList.add("is-closing");
  photoDrop.setAttribute("aria-hidden", "true");
  runPhotoCloseMotion(() => {
    photoHook.classList.remove("is-closing");
  });
}

if (photoHook && butterflyTrigger && photoDrop && photoIdCard) {
  setPhotoDropFrame({ y: -210, angle: -3, opacity: 0, shadowY: 10, shadowBlur: 24, shadowAlpha: 0.08 });

  butterflyTrigger.addEventListener("click", () => {
    setPhotoHookOpen(!photoHook.classList.contains("is-open"));
  });

  photoIdCard.addEventListener("click", () => setPhotoHookOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setPhotoHookOpen(false);
    }
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(FILE_STORE)) {
        db.createObjectStore(FILE_STORE, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withFileStore(mode, callback) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(FILE_STORE, mode);
    const store = transaction.objectStore(FILE_STORE);
    const result = callback(store);

    transaction.oncomplete = () => {
      db.close();
      resolve(result);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function putStoredFile(id, file) {
  await withFileStore("readwrite", (store) => {
    store.put({
      id,
      file,
      name: file.name,
      type: file.type || "application/octet-stream",
      lastModified: file.lastModified,
    });
  });
}

async function getStoredFile(id) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(FILE_STORE, "readonly");
    const store = transaction.objectStore(FILE_STORE);
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => db.close();
  });
}

async function deleteStoredFile(id) {
  await withFileStore("readwrite", (store) => {
    store.delete(id);
  });

  const cached = objectUrlCache.get(id);
  if (cached) {
    URL.revokeObjectURL(cached);
    objectUrlCache.delete(id);
  }
}

async function getObjectUrl(fileId) {
  if (objectUrlCache.has(fileId)) return objectUrlCache.get(fileId);

  const record = await getStoredFile(fileId);
  if (!record) return "";

  const url = URL.createObjectURL(record.file);
  objectUrlCache.set(fileId, url);
  return url;
}

function loadUploadedWorks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.works) || "[]");
  } catch {
    return [];
  }
}

function saveUploadedWorks() {
  localStorage.setItem(STORAGE_KEYS.works, JSON.stringify(uploadedWorks));
}

function getFileKind(fileType = "") {
  if (fileType.startsWith("video/")) return "video";
  if (fileType.startsWith("image/")) return "image";
  return "file";
}

function createFileVisual(work) {
  const visual = document.createElement("div");
  visual.className = "work-visual file-visual";

  const wrap = document.createElement("div");
  const title = document.createElement("strong");
  const meta = document.createElement("small");

  title.textContent = work.fileName || "Uploaded File";
  meta.textContent = work.fileType || "Any file";
  wrap.append(title, meta);
  visual.append(wrap);

  return visual;
}

function resetProjectRegistry() {
  projects = { ...baseProjects, ...staticDramaProjects };
}

function bindPreviewPlayback(card, video) {
  card.addEventListener("mouseenter", () => {
    video.play().catch(() => {});
  });
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
}

function createDramaVisual(card, section, file) {
  const kind = getFileKind(file.type);

  if (kind === "video" && file.available && file.src) {
    const visual = document.createElement("div");
    visual.className = "work-visual video-visual drama-video-visual";

    const video = document.createElement("video");
    video.src = file.src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "work-preview-video";

    const label = document.createElement("span");
    label.textContent = "Hover Preview";
    const fallback = document.createElement("div");
    fallback.className = "video-fallback";
    fallback.innerHTML = `
      <strong>Confidential Demo</strong>
      <small>Preview available in interview</small>
    `;

    video.addEventListener("error", () => {
      visual.classList.add("is-unavailable");
    });

    visual.append(video, label, fallback);
    bindPreviewPlayback(card, video);
    return visual;
  }

  const visual = document.createElement("div");
  visual.className = "work-visual confidential-placeholder";
  visual.innerHTML = `
    <div>
      <span>${escapeHtml(section.eyebrow)}</span>
      <strong>保密作品占位卡</strong>
      <small>Interview-only preview</small>
    </div>
  `;
  return visual;
}

function createDramaCard(section, file) {
  const key = `drama-${section.id}-${file.id}`;
  const card = document.createElement("article");
  card.className = "work-card drama-card";
  card.dataset.project = key;

  const hit = document.createElement("button");
  hit.type = "button";
  hit.className = "work-hit";
  hit.setAttribute("aria-label", `查看 ${file.title}`);

  const visual = createDramaVisual(card, section, file);
  const info = document.createElement("div");
  info.className = "work-info";
  info.innerHTML = `
    <div>
      <h3>${escapeHtml(file.title)}</h3>
      <p>${escapeHtml(file.role || section.title)}</p>
      ${file.proof ? `<p class="drama-proof">${escapeHtml(file.proof)}</p>` : ""}
      ${file.confidential ? `<small class="confidential-note">${escapeHtml(CONFIDENTIAL_NOTICE)}</small>` : ""}
    </div>
    <span class="dot-mark"></span>
  `;

  card.append(hit, visual, info);
  hit.addEventListener("click", () => openProject(key));

  staticDramaProjects[key] = {
    category: `${section.eyebrow} / ${file.available ? "Representative Demo" : "Confidential Placeholder"}`,
    title: file.title,
    description: file.confidential ? `${section.description}\n${CONFIDENTIAL_NOTICE}` : section.description,
    cover: `${section.title}\n${file.title}`,
    visual: "assets/card-manga-pipeline.png",
    staticFile: file.available ? file.src : "",
    fileName: file.fileName,
    fileType: file.type,
    placeholder: !file.available,
    details: [
      ["Project", section.title],
      ["Role", file.role || "短剧制作与画面优化"],
      ["Capability Proof", file.proof || "代表性样片用于说明短剧制作能力。"],
      ["Access", file.available ? "Hover preview / modal playback" : "保密项目，仅面试沟通后定向展示。"],
      ...(file.confidential ? [["Confidential", "仅作求职技能展示，涉及项目保密协议，请勿公开传播。"]] : []),
    ],
  };

  return card;
}

function renderShortDramaLibrary() {
  if (!dramaLibrary) return;

  staticDramaProjects = {};
  dramaLibrary.replaceChildren();

  shortDramaSections.forEach((section) => {
    const sectionElement = document.createElement("article");
    sectionElement.className = "drama-section";
    sectionElement.innerHTML = `
      <div class="drama-section-copy">
        <p>${escapeHtml(section.eyebrow)}</p>
        <h3>${escapeHtml(section.title)}</h3>
        <span>${escapeHtml(section.summary)}</span>
        <small class="drama-section-note">${escapeHtml(section.description)}</small>
      </div>
      <div class="drama-file-grid"></div>
    `;

    const fileGrid = sectionElement.querySelector(".drama-file-grid");
    section.files.forEach((file) => {
      fileGrid.append(createDramaCard(section, file));
    });

    dramaLibrary.append(sectionElement);
  });

  resetProjectRegistry();
}

async function createUploadedWorkCard(work) {
  const key = `uploaded-${work.id}`;
  const kind = getFileKind(work.fileType);
  const article = document.createElement("article");
  article.className = "work-card uploaded-card";
  article.dataset.project = key;

  const hit = document.createElement("button");
  hit.type = "button";
  hit.className = "work-hit";
  hit.setAttribute("aria-label", `查看 ${work.title}`);

  let visual;
  const fileUrl = await getObjectUrl(work.fileId);

  if (kind === "video" && fileUrl) {
    visual = document.createElement("div");
    visual.className = "work-visual video-visual";

    const video = document.createElement("video");
    video.src = fileUrl;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "work-preview-video";

    const label = document.createElement("span");
    label.textContent = work.category || "Uploaded Video";
    visual.append(video, label);

    bindPreviewPlayback(article, video);
  } else if (kind === "image" && fileUrl) {
    visual = document.createElement("div");
    visual.className = "work-visual image-visual";

    const image = document.createElement("img");
    image.src = fileUrl;
    image.alt = work.title;

    const label = document.createElement("span");
    label.textContent = work.category || "Uploaded Image";
    visual.append(image, label);
  } else {
    visual = createFileVisual(work);
  }

  const info = document.createElement("div");
  info.className = "work-info";
  info.innerHTML = `
    <div>
      <h3>${escapeHtml(work.title)}</h3>
      <p>${escapeHtml(work.subtitle || work.description || "本地上传作品")}</p>
    </div>
    <span class="dot-mark"></span>
  `;

  article.append(hit, visual, info);
  hit.addEventListener("click", () => openProject(key));

  projects[key] = {
    category: work.category || "Uploaded Work",
    title: work.title,
    description: work.description || work.subtitle || "本地上传作品。",
    cover: `${work.title}\n${work.fileName || "Uploaded File"}`,
    fileId: work.fileId,
    fileName: work.fileName,
    fileType: work.fileType,
    details: [
      ["Type", work.fileType || "Unknown"],
      ["File", work.fileName || "Uploaded file"],
      ["Source", "Local browser storage"],
      ["Preview", kind === "video" ? "Hover to preview in normal color" : "Click to view details"],
    ],
  };

  return article;
}

async function renderUploadedWorks() {
  document.querySelectorAll(".uploaded-card").forEach((card) => card.remove());
  resetProjectRegistry();

  for (const work of uploadedWorks) {
    const card = await createUploadedWorkCard(work);
    workGrid.append(card);
  }

  renderUploadedWorkList();
}

function renderUploadedWorkList() {
  uploadedWorkList.replaceChildren();

  if (uploadedWorks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "editor-empty";
    empty.textContent = "还没有上传作品。";
    uploadedWorkList.append(empty);
    return;
  }

  uploadedWorks.forEach((work) => {
    const item = document.createElement("div");
    item.className = "uploaded-work-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(work.title)}</strong>
        <span>${escapeHtml(work.fileName || work.fileType || "Uploaded file")}</span>
      </div>
    `;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "删除";
    remove.addEventListener("click", async () => {
      await deleteStoredFile(work.fileId);
      uploadedWorks = uploadedWorks.filter((itemWork) => itemWork.id !== work.id);
      saveUploadedWorks();
      await renderUploadedWorks();
    });

    item.append(remove);
    uploadedWorkList.append(item);
  });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function openProject(key) {
  const project = projects[key];
  if (!project) return;

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalDetails.replaceChildren();
  modalMedia.replaceChildren();

  await renderModalMedia(project);

  project.details.forEach(([term, description]) => {
    const group = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = term;
    dd.textContent = description;
    group.append(dt, dd);
    modalDetails.append(group);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function openCapability(key) {
  const capability = capabilityDetails[key];
  if (!capability) return;

  modalCategory.textContent = capability.category;
  modalTitle.textContent = capability.title;
  modalDescription.textContent = capability.description;
  modalDetails.replaceChildren();
  modalMedia.replaceChildren();

  renderCapabilityMedia(capability);

  capability.details.forEach(([term, description]) => {
    const group = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = term;
    dd.textContent = description;
    group.append(dt, dd);
    modalDetails.append(group);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderCapabilityMedia(capability) {
  const visual = document.createElement("div");
  visual.className = "capability-modal-visual";

  const label = document.createElement("p");
  label.textContent = capability.category;

  const title = document.createElement("h3");
  title.textContent = capability.cover;

  const tags = document.createElement("div");
  tags.className = "capability-modal-tags";
  capability.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    tags.append(item);
  });

  visual.append(label, title, tags);
  modalMedia.append(visual);
}

async function renderModalMedia(project) {
  if (project.placeholder) {
    const placeholder = document.createElement("div");
    placeholder.className = "modal-confidential-placeholder";
    placeholder.innerHTML = `
      <strong>Confidential Sample</strong>
      <span>样片涉及项目保密协议，当前仅展示职责与能力证明；高清作品可在面试沟通后定向查看。</span>
    `;
    modalMedia.append(placeholder);
    return;
  }

  if (project.staticFile) {
    const kind = getFileKind(project.fileType);

    if (kind === "video") {
      const wrap = document.createElement("div");
      wrap.className = "modal-video-wrap";
      const video = document.createElement("video");
      video.src = project.staticFile;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";

      const fallback = document.createElement("div");
      fallback.className = "modal-video-fallback";
      fallback.innerHTML = `
        <strong>Confidential Demo</strong>
        <span>高清样片涉及项目保密协议，可在面试沟通后定向查看。</span>
      `;

      video.addEventListener("error", () => {
        wrap.classList.add("is-unavailable");
      });

      wrap.append(video, fallback);
      modalMedia.append(wrap);
      return;
    }

    const download = document.createElement("div");
    download.className = "modal-file-download";
    download.innerHTML = `
      <a href="${project.staticFile}" download="${escapeHtml(project.fileName || project.title)}">
        <strong>${escapeHtml(project.fileName || project.title)}</strong>
        <span>Download / Open uploaded file</span>
      </a>
    `;
    modalMedia.append(download);
    return;
  }

  if (project.fileId) {
    const fileUrl = await getObjectUrl(project.fileId);
    const kind = getFileKind(project.fileType);

    if (kind === "video") {
      const video = document.createElement("video");
      video.src = fileUrl;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      modalMedia.append(video);
      return;
    }

    if (kind === "image") {
      const image = document.createElement("img");
      image.src = fileUrl;
      image.alt = project.title;
      modalMedia.append(image);
      appendCoverText(project);
      return;
    }

    const download = document.createElement("div");
    download.className = "modal-file-download";
    download.innerHTML = `
      <a href="${fileUrl}" download="${escapeHtml(project.fileName || project.title)}">
        <strong>${escapeHtml(project.fileName || project.title)}</strong>
        <span>Download / Open uploaded file</span>
      </a>
    `;
    modalMedia.append(download);
    return;
  }

  const image = document.createElement("img");
  image.src = project.visual;
  image.alt = project.title;
  modalMedia.append(image);
  appendCoverText(project);
}

function appendCoverText(project) {
  const cover = document.createElement("div");
  cover.className = "cover-text";
  const coverTitle = document.createElement("h3");
  coverTitle.textContent = project.cover;
  cover.append(coverTitle);
  modalMedia.append(cover);
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  modalMedia.querySelectorAll("video").forEach((video) => {
    video.pause();
  });
}

document.querySelectorAll(".work-card").forEach((card) => {
  const key = card.dataset.project;
  const hit = card.querySelector(".work-hit");

  hit.addEventListener("click", () => openProject(key));
});

document.querySelectorAll(".signal-card[data-capability]").forEach((card) => {
  const key = card.dataset.capability;
  const hit = card.querySelector(".signal-hit");

  hit.addEventListener("click", () => openCapability(key));
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProject();
  }
});

function getEditableElements() {
  return [...document.querySelectorAll("main h1, main h2, main h3, main p, main li, main .hero-meta div, footer span, footer a")]
    .filter((element) => !element.closest(".editor-panel, .project-modal, .uploaded-card"));
}

function prepareEditableElements() {
  const savedCopy = loadSavedCopy();

  getEditableElements().forEach((element, index) => {
    const key = element.dataset.editKey || `copy-${index}`;
    element.dataset.editKey = key;

    if (savedCopy[key] !== undefined) {
      element.innerHTML = savedCopy[key];
    }
  });
}

function loadSavedCopy() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.copy) || "{}");
  } catch {
    return {};
  }
}

function setEditMode(enabled) {
  editingEnabled = enabled;
  document.body.classList.toggle("is-editing", enabled);
  toggleEditModeButton.textContent = enabled ? "关闭文字编辑" : "开启文字编辑";

  document.querySelectorAll("[data-edit-key]").forEach((element) => {
    element.contentEditable = enabled ? "true" : "false";
    element.spellcheck = false;
  });
}

function savePageCopy() {
  const data = {};

  document.querySelectorAll("[data-edit-key]").forEach((element) => {
    data[element.dataset.editKey] = element.innerHTML;
  });

  localStorage.setItem(STORAGE_KEYS.copy, JSON.stringify(data));
  setEditMode(false);
}

function resetPageCopy() {
  localStorage.removeItem(STORAGE_KEYS.copy);
  window.location.reload();
}

function hasEditorAccess() {
  return new URLSearchParams(window.location.search).get("edit") === "1";
}

function openEditor() {
  if (!hasEditorAccess()) return;
  editorPanel.classList.add("is-open");
  editorPanel.setAttribute("aria-hidden", "false");
}

function closeEditor() {
  editorPanel.classList.remove("is-open");
  editorPanel.setAttribute("aria-hidden", "true");
}

function syncEditorAccess() {
  const canEdit = hasEditorAccess();
  editorToggle.classList.toggle("is-enabled", canEdit);

  if (!canEdit) {
    closeEditor();
    setEditMode(false);
  }
}

editorToggle.addEventListener("click", openEditor);
editorClose.addEventListener("click", closeEditor);
toggleEditModeButton.addEventListener("click", () => setEditMode(!editingEnabled));
saveCopyButton.addEventListener("click", savePageCopy);
resetCopyButton.addEventListener("click", resetPageCopy);

workUploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(workUploadForm);
  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) return;

  const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  await putStoredFile(id, file);

  uploadedWorks.unshift({
    id,
    fileId: id,
    fileName: file.name,
    fileType: file.type || "application/octet-stream",
    title: String(formData.get("title") || file.name).trim(),
    subtitle: String(formData.get("subtitle") || "").trim(),
    category: String(formData.get("category") || "Uploaded Work").trim(),
    description: String(formData.get("description") || "").trim(),
    createdAt: new Date().toISOString(),
  });

  saveUploadedWorks();
  await renderUploadedWorks();
  workUploadForm.reset();
});

async function boot() {
  syncEditorAccess();
  renderShortDramaLibrary();
  prepareEditableElements();
  uploadedWorks = loadUploadedWorks();
  await renderUploadedWorks();
}

boot().catch((error) => {
  console.error("Portfolio editor failed to initialize:", error);
});

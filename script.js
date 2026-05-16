const suits = {
  "Major Arcana": { label: "大阿卡那", symbol: "✦" },
  Wands: { label: "权杖", symbol: "♣", imagePrefix: "Wands", element: "火" },
  Cups: { label: "圣杯", symbol: "♥", imagePrefix: "Cups", element: "水" },
  Swords: { label: "宝剑", symbol: "♠", imagePrefix: "Swords", element: "风" },
  Pentacles: { label: "星币", symbol: "♦", imagePrefix: "Pents", element: "土" },
};

const majors = [
  ["0", "愚者", "The Fool", "RWS_Tarot_00_Fool.jpg", ["开始", "自由", "冒险"], "你心里有一部分已经准备离开旧剧本，只是还没有告诉任何人。"],
  ["I", "魔术师", "The Magician", "RWS_Tarot_01_Magician.jpg", ["创造", "意志", "显化"], "你并非没有力量。你只是一直在等对方先承认些什么。"],
  ["II", "女祭司", "The High Priestess", "RWS_Tarot_02_High_Priestess.jpg", ["直觉", "秘密", "内在"], "你已经感觉到了答案，只是那个答案太安静，也太不方便。"],
  ["III", "皇后", "The Empress", "RWS_Tarot_03_Empress.jpg", ["丰盛", "滋养", "吸引"], "你身上有一种被看见之后会让人靠近的柔软。别把它交给不回应的人保管。"],
  ["IV", "皇帝", "The Emperor", "RWS_Tarot_04_Emperor.jpg", ["边界", "掌控", "稳定"], "这件事需要边界。不是为了惩罚谁，而是为了让你不再反复失血。"],
  ["V", "教皇", "The Hierophant", "RWS_Tarot_05_Hierophant.jpg", ["传统", "承诺", "规则"], "你在意的不是形式，而是对方是否愿意给这段关系一个清楚的位置。"],
  ["VI", "恋人", "The Lovers", "RWS_Tarot_06_Lovers.jpg", ["选择", "关系", "价值"], "真正折磨你的不是喜欢，而是对方迟迟不选择。"],
  ["VII", "战车", "The Chariot", "RWS_Tarot_07_Chariot.jpg", ["推进", "控制", "胜利"], "你需要把方向从 Ta 的反应里拿回来。否则每一次沉默都会替你开车。"],
  ["VIII", "力量", "Strength", "RWS_Tarot_08_Strength.jpg", ["温柔", "克制", "勇气"], "你还在温柔地克制，但这份克制不该被误认为永远不会离开。"],
  ["IX", "隐士", "The Hermit", "RWS_Tarot_09_Hermit.jpg", ["独处", "寻找", "沉淀"], "答案会在你停止追问 Ta 的那一刻，慢慢露出轮廓。"],
  ["X", "命运之轮", "Wheel of Fortune", "RWS_Tarot_10_Wheel_of_Fortune.jpg", ["转机", "循环", "变化"], "你们之间不是没有转机，只是旧循环必须先被看见。"],
  ["XI", "正义", "Justice", "RWS_Tarot_11_Justice.jpg", ["公平", "因果", "真相"], "这段关系正在要求你承认事实，而不是继续替对方写动机。"],
  ["XII", "倒吊人", "The Hanged Man", "RWS_Tarot_12_Hanged_Man.jpg", ["暂停", "换角度", "等待"], "暂停不是输。它只是让你看清，谁在害怕靠近，谁在害怕失去。"],
  ["XIII", "死神", "Death", "RWS_Tarot_13_Death.jpg", ["结束", "转化", "重生"], "某个版本的你必须结束，那个总是等待被选择的版本。"],
  ["XIV", "节制", "Temperance", "RWS_Tarot_14_Temperance.jpg", ["调和", "疗愈", "平衡"], "别急着把一切说死。真正的修复需要两个人都愿意慢下来。"],
  ["XV", "恶魔", "The Devil", "RWS_Tarot_15_Devil.jpg", ["执念", "欲望", "束缚"], "你不是放不下 Ta，你是放不下那种差一点就被爱上的感觉。"],
  ["XVI", "高塔", "The Tower", "RWS_Tarot_16_Tower.jpg", ["崩塌", "真相", "释放"], "如果真相会让关系倒塌，那倒塌本身也是一种回答。"],
  ["XVII", "星星", "The Star", "RWS_Tarot_17_Star.jpg", ["希望", "修复", "愿景"], "你仍然可以相信爱，但不必把希望押在一个模糊的人身上。"],
  ["XVIII", "月亮", "The Moon", "RWS_Tarot_18_Moon.jpg", ["迷雾", "潜意识", "不安"], "Ta 的沉默里有情绪，但情绪不等于承诺。你要分清这两件事。"],
  ["XIX", "太阳", "The Sun", "RWS_Tarot_19_Sun.jpg", ["清晰", "喜悦", "公开"], "真正属于你的关系，不会只在深夜成立。"],
  ["XX", "审判", "Judgement", "RWS_Tarot_20_Judgement.jpg", ["觉醒", "召唤", "复盘"], "你正在从这段关系里醒来，不一定是离开，也可能是不再自欺。"],
  ["XXI", "世界", "The World", "RWS_Tarot_21_World.jpg", ["完成", "整合", "圆满"], "你快要走完这一课。无论 Ta 是否回来，你都会更完整地回到自己身上。"],
];

const minorNames = [
  ["Ace", "一", "新的情绪入口"], ["Two", "二", "相互试探"], ["Three", "三", "外界影响"], ["Four", "四", "停滞保护"],
  ["Five", "五", "拉扯失衡"], ["Six", "六", "旧记忆回潮"], ["Seven", "七", "防御和猜测"], ["Eight", "八", "快速变化"],
  ["Nine", "九", "临界情绪"], ["Ten", "十", "无法再装轻松"], ["Page", "侍从", "小心翼翼的信息"], ["Knight", "骑士", "冲动靠近"],
  ["Queen", "王后", "成熟感受"], ["King", "国王", "克制掌控"],
];

const suitMeanings = {
  Wands: { zh: "权杖", keywords: ["行动", "欲望", "热度"], tone: "这张牌带着火。它关心的是冲动、靠近、主动和谁先打破沉默。" },
  Cups: { zh: "圣杯", keywords: ["情感", "想念", "关系"], tone: "这张牌带着水。它关心的是想念、依恋、失望和那些不肯说出口的柔软。" },
  Swords: { zh: "宝剑", keywords: ["思考", "防御", "真相"], tone: "这张牌带着风。它关心的是信息、误解、理智和说出口会改变关系的话。" },
  Pentacles: { zh: "星币", keywords: ["现实", "稳定", "价值"], tone: "这张牌带着土。它关心的是现实、时间、投入和对方是否真的愿意落地。" },
};

function imageUrl(fileName, width = 420) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;
}

const cards = [
  ...majors.map(([number, name, english, imageFile, keywords, meaning]) => ({
    id: `major-${english.toLowerCase().replaceAll(" ", "-")}`,
    number, name, english, arcana: "Major Arcana", group: "大阿卡那", image: imageUrl(imageFile), keywords, upright: meaning,
    reversed: `逆位时，${name}像一种回避。它提醒你：真正的答案可能不是没有发生，而是有人不敢承担发生后的结果。`,
  })),
  ...Object.entries(suitMeanings).flatMap(([suit, info]) =>
    minorNames.map(([rank, rankZh, rankMeaning], index) => ({
      id: `${suit.toLowerCase()}-${rank.toLowerCase()}`,
      number: `${index + 1}`,
      name: `${info.zh}${rankZh}`,
      english: `${rank} of ${suit}`,
      arcana: suit,
      group: `${info.zh}牌组`,
      image: imageUrl(`${suits[suit].imagePrefix}${String(index + 1).padStart(2, "0")}.jpg`),
      keywords: [...info.keywords, rankMeaning],
      upright: `${info.tone}${rankZh}的位置指向“${rankMeaning}”。这不是结论，而是你们此刻最明显的情绪纹理。`,
      reversed: `逆位的${info.zh}${rankZh}让“${rankMeaning}”变得不稳定。有人想靠近，但同时也在保护自己不被看穿。`,
    }))
  ),
];

const modeCopy = {
  daily: { title: "今天，别把自己交给旧情绪审判。", lens: ["今天最该被照顾的不是答案，而是你的神经系统。", "你需要的不是立刻决定，而是把自己的感受从别人的反应里拿回来。"] },
  relationship: { title: "这段关系没有结束在表面，它结束或延续在沉默里。", lens: ["你在等一个明确的动作，但对方更擅长留下暗示。", "不要再只看 Ta 有没有回来，也要看 Ta 回来时是否愿意承担。"] },
  feelings: { title: "Ta 不是没有感觉，只是那份感觉没有成熟到可以保护你。", lens: ["Ta 的情绪里有你的位置，但位置不等于选择。", "你感受到的暧昧是真的，可它也可能只是 Ta 逃避孤独的方式。"] },
  future: { title: "未来不是断开或复合，而是谁先变得诚实。", lens: ["这段连接还有回声，但回声不能替代行动。", "真正的未来需要一个清楚的人，而不是两个都在猜的人。"] },
};

const state = { filter: "all", query: "", lastReading: null };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const cardGrid = $("#cardGrid");
const resultCount = $("#resultCount");
const searchInput = $("#searchInput");
const filterButtons = $$(".filter");
const ritualForm = $("#ritualForm");
const shuffleStage = $("#shuffleStage");
const shuffleStatus = $("#shuffleStatus");
const resultSection = $("#result");
const shareCard = $("#shareCard");
const copyButton = $("#copyButton");
const saveButton = $("#saveButton");
const memoryList = $("#memoryList");
const dialog = $("#cardDialog");
const dialogContent = $("#dialogContent");
const dialogClose = $("#dialogClose");
const soundToggle = $("#soundToggle");

function cardMatches(card) {
  const inFilter = state.filter === "all" || card.arcana === state.filter;
  const haystack = `${card.name} ${card.english} ${card.group} ${card.keywords.join(" ")}`.toLowerCase();
  return inFilter && haystack.includes(state.query.toLowerCase().trim());
}

function renderCards() {
  const visibleCards = cards.filter(cardMatches);
  resultCount.textContent = `当前显示 ${visibleCards.length} / 78 张牌`;
  cardGrid.innerHTML = visibleCards.map((card) => `
    <button class="card-tile" type="button" data-id="${card.id}">
      <span class="mini-card" aria-hidden="true"><img src="${card.image}" alt="" loading="lazy" /></span>
      <span class="card-meta">
        <small>${card.group} · ${card.english}</small>
        <strong>${card.name}</strong>
        <p>${card.upright}</p>
        <span class="keywords">${card.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</span>
      </span>
    </button>`).join("");
  $$(".card-tile").forEach((tile) => tile.addEventListener("click", () => openDialog(tile.dataset.id)));
}

function openDialog(id) {
  const card = cards.find((item) => item.id === id);
  if (!card) return;
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-card" aria-hidden="true"><img src="${card.image}" alt="" /></div>
      <div class="dialog-body">
        <p class="eyebrow">${card.group} · ${card.english}</p>
        <h2>${card.name}</h2>
        <div class="keywords">${card.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
        <div class="detail-block"><strong>正位：</strong><p>${card.upright}</p></div>
        <div class="detail-block"><strong>逆位：</strong><p>${card.reversed}</p></div>
      </div>
    </div>`;
  if (typeof dialog.showModal === "function") dialog.showModal();
}

function pickCards(seedText) {
  const seed = [...seedText].reduce((sum, char) => sum + char.charCodeAt(0), Date.now() % 9973);
  return [...cards]
    .map((card, index) => ({ card, score: Math.sin(seed + index * 91.7) + Math.random() }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ card }, index) => ({ ...card, position: ["你真正带来的问题", "Ta 没说出口的部分", "下一步的情绪走向"][index], reversedDraw: Math.random() > 0.72 }));
}

function composeReading({ mode, person, question, spread }) {
  const copy = modeCopy[mode];
  const names = spread.map((card) => `${card.name}${card.reversedDraw ? "逆位" : "正位"}`).join("、");
  const target = person || "那个人";
  const questionLine = question || "这段关系接下来会怎样？";
  return {
    title: copy.title,
    shareText: `Carrie塔罗｜${copy.title}\n问题：${questionLine}\n牌面：${names}`,
    paragraphs: [
      `你问的是「${questionLine}」。但牌面听见的更像是：你不想再靠猜测维持一种亲密。`,
      spread[0].reversedDraw ? spread[0].reversed : spread[0].upright,
      `${target}在这件事里并非全然无感。只是牌面显示，Ta 更习惯先观察风险，再决定要不要暴露真实需要。`,
      copy.lens[Math.floor(Math.random() * copy.lens.length)],
      `如果你要一个建议：接下来别再用更用力的表达换回应。给出一个清楚的位置，然后看 Ta 是否有能力走进来。`,
    ],
  };
}

function renderReading(reading) {
  shareCard.classList.remove("empty");
  resultSection.classList.remove("result-ready", "cards-awake", "text-awake");
  shareCard.innerHTML = `
    <div class="result-kicker">Carrie塔罗 · ${new Date().toLocaleDateString("zh-CN")}</div>
    <div class="result-oracle">
      <h3 class="result-title">${reading.title}</h3>
      <p class="result-question">${reading.question}</p>
    </div>
    <div class="revealed-grid">
      ${reading.spread.map((card) => `
        <div class="revealed-card ${card.reversedDraw ? "reversed" : ""}">
          <div class="revealed-card-shell">
            <div class="revealed-card-face">
              <img src="${card.image}" alt="${card.name}" />
            </div>
          </div>
          <small>${card.position} · ${card.reversedDraw ? "逆位" : "正位"}</small>
          <strong>${card.name}</strong>
        </div>`).join("")}
    </div>
    <div class="reading-text">${reading.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>`;
  requestAnimationFrame(() => {
    resultSection.classList.add("result-ready");
    setTimeout(() => resultSection.classList.add("cards-awake"), 520);
    setTimeout(() => resultSection.classList.add("text-awake"), 1300);
  });
}

async function beginRitual(event) {
  event.preventDefault();
  const form = new FormData(ritualForm);
  const mode = form.get("mode");
  const person = $("#personInput").value.trim();
  const question = $("#questionInput").value.trim();
  const seedText = `${mode}|${person}|${question}`;
  resultSection.classList.remove("result-ready", "cards-awake", "text-awake");
  shuffleStage.classList.remove("settling", "revealing");
  shuffleStage.classList.add("shuffling");
  shuffleStatus.textContent = "正在洗牌。答案已经存在，只是还没有被看见。";
  location.hash = "#shuffle";
  await new Promise((resolve) => setTimeout(resolve, 2800));
  shuffleStage.classList.remove("shuffling");
  shuffleStage.classList.add("settling");
  shuffleStatus.textContent = "牌面停住了。先别急着解释。";
  await new Promise((resolve) => setTimeout(resolve, 1500));
  shuffleStage.classList.add("revealing");
  shuffleStatus.textContent = "光正在靠近你的问题。";
  await new Promise((resolve) => setTimeout(resolve, 950));
  const spread = pickCards(seedText);
  const readingBase = composeReading({ mode, person, question, spread });
  state.lastReading = { ...readingBase, mode, person, question: question || "我真正想知道的答案是什么？", spread, createdAt: new Date().toISOString() };
  renderReading(state.lastReading);
  shuffleStage.classList.remove("shuffling", "settling");
  shuffleStatus.textContent = "结果已经出现。";
  location.hash = "#result";
}

function saveReading() {
  if (!state.lastReading) return showToast("先完成一次抽牌。");
  const history = JSON.parse(localStorage.getItem("carrieTarotHistory") || "[]");
  history.unshift(state.lastReading);
  localStorage.setItem("carrieTarotHistory", JSON.stringify(history.slice(0, 3)));
  renderMemory();
  showToast("已保存到本机记忆。");
}

function renderMemory() {
  const history = JSON.parse(localStorage.getItem("carrieTarotHistory") || "[]");
  memoryList.innerHTML = history.length ? history.map((item) => `
    <article class="memory-item">
      <small>${new Date(item.createdAt).toLocaleString("zh-CN")}</small>
      <h3>${item.title}</h3>
      <p>${item.spread.map((card) => card.name).join(" · ")}</p>
    </article>`).join("") : `<article class="memory-item"><h3>还没有保存的结果。</h3><p>完成一次抽牌后，可以把它留在本机记忆里。</p></article>`;
}

async function copyReading() {
  if (!state.lastReading) return showToast("先完成一次抽牌。");
  const text = `${state.lastReading.shareText}\n\n${state.lastReading.paragraphs.join("\n")}\n\nhttps://ruiruin7.github.io/Carrie-tarot/`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("分享文案已复制。");
  } catch (error) {
    showToast("浏览器没有允许复制，请手动截图保存。");
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 220);
  }, 1800);
}

function setupParticles() {
  const canvas = $("#starfield");
  const ctx = canvas.getContext("2d");
  let particles = [];
  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    particles = Array.from({ length: Math.min(120, Math.floor(window.innerWidth / 7)) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.7 + .2,
      v: Math.random() * .22 + .05,
      a: Math.random() * .6 + .12,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y -= p.v * devicePixelRatio;
      if (p.y < -10) p.y = canvas.height + 10;
      ctx.beginPath();
      ctx.fillStyle = `rgba(248,239,230,${p.a})`;
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener("resize", resize);
}

function setupStageParallax() {
  if (!shuffleStage) return;
  let raf = 0;
  function setTilt(event) {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = shuffleStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      shuffleStage.style.setProperty("--tilt-y", `${x * 9}deg`);
      shuffleStage.style.setProperty("--tilt-x", `${y * -7}deg`);
      shuffleStage.style.setProperty("--nebula-x", `${x * -26}px`);
      shuffleStage.style.setProperty("--nebula-y", `${y * 18}px`);
    });
  }
  function resetTilt() {
    shuffleStage.style.setProperty("--tilt-y", "0deg");
    shuffleStage.style.setProperty("--tilt-x", "0deg");
    shuffleStage.style.setProperty("--nebula-x", "0px");
    shuffleStage.style.setProperty("--nebula-y", "0px");
  }
  shuffleStage.addEventListener("pointermove", setTilt);
  shuffleStage.addEventListener("pointerleave", resetTilt);
}

function setupResultParallax() {
  if (!resultSection) return;
  let raf = 0;
  function moveLight(event) {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = resultSection.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      resultSection.style.setProperty("--result-tilt-y", `${x * 7}deg`);
      resultSection.style.setProperty("--result-tilt-x", `${y * -5}deg`);
      resultSection.style.setProperty("--result-light-x", `${50 + x * 18}%`);
      resultSection.style.setProperty("--result-light-y", `${42 + y * 14}%`);
    });
  }
  function resetLight() {
    resultSection.style.setProperty("--result-tilt-y", "0deg");
    resultSection.style.setProperty("--result-tilt-x", "0deg");
    resultSection.style.setProperty("--result-light-x", "50%");
    resultSection.style.setProperty("--result-light-y", "42%");
  }
  resultSection.addEventListener("pointermove", moveLight);
  resultSection.addEventListener("pointerleave", resetLight);
}

let audioContext;
function toggleSound() {
  if (audioContext) {
    audioContext.close();
    audioContext = null;
    soundToggle.textContent = "Ambient off";
    soundToggle.setAttribute("aria-pressed", "false");
    return;
  }
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return showToast("当前浏览器不支持环境音。");
  audioContext = new AudioEngine();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = "sine";
  osc.frequency.value = 92;
  gain.gain.value = 0.025;
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  soundToggle.textContent = "Ambient on";
  soundToggle.setAttribute("aria-pressed", "true");
}

searchInput.addEventListener("input", (event) => { state.query = event.target.value; renderCards(); });
filterButtons.forEach((button) => button.addEventListener("click", () => {
  filterButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.filter = button.dataset.filter;
  renderCards();
}));
ritualForm.addEventListener("submit", beginRitual);
copyButton.addEventListener("click", copyReading);
saveButton.addEventListener("click", saveReading);
dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
soundToggle.addEventListener("click", toggleSound);

renderCards();
renderMemory();
setupParticles();
setupStageParallax();
setupResultParallax();

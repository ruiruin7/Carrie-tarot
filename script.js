const suits = {
  "Major Arcana": { label: "大阿卡那", symbol: "✦", element: "命运" },
  Wands: { label: "权杖", symbol: "♣", element: "火", imagePrefix: "Wands" },
  Cups: { label: "圣杯", symbol: "♥", element: "水", imagePrefix: "Cups" },
  Swords: { label: "宝剑", symbol: "♠", element: "风", imagePrefix: "Swords" },
  Pentacles: { label: "星币", symbol: "♦", element: "土", imagePrefix: "Pents" },
};

const majors = [
  ["0", "愚者", "The Fool", "RWS_Tarot_00_Fool.jpg", ["开始", "自由", "冒险"], "新的旅程正在展开。它提醒你保持开放，但也要看清脚下的路。"],
  ["I", "魔术师", "The Magician", "RWS_Tarot_01_Magician.jpg", ["创造", "意志", "显化"], "资源已经在你手中。关键是集中注意力，把想法变成行动。"],
  ["II", "女祭司", "The High Priestess", "RWS_Tarot_02_High_Priestess.jpg", ["直觉", "秘密", "内在"], "答案不只在表面。暂停、观察、相信那些安静但清楚的感觉。"],
  ["III", "皇后", "The Empress", "RWS_Tarot_03_Empress.jpg", ["丰盛", "滋养", "创造力"], "适合培育关系、作品和身体感受。温柔不是退让，而是生长的力量。"],
  ["IV", "皇帝", "The Emperor", "RWS_Tarot_04_Emperor.jpg", ["秩序", "边界", "掌控"], "需要结构、规则和责任。把松散的想法落到明确安排里。"],
  ["V", "教皇", "The Hierophant", "RWS_Tarot_05_Hierophant.jpg", ["传统", "学习", "信念"], "向成熟系统或前辈经验学习，也检查自己是否被旧规则限制。"],
  ["VI", "恋人", "The Lovers", "RWS_Tarot_06_Lovers.jpg", ["选择", "关系", "价值观"], "真正的选择来自价值一致。别只问喜欢什么，也问愿意承担什么。"],
  ["VII", "战车", "The Chariot", "RWS_Tarot_07_Chariot.jpg", ["推进", "自控", "胜利"], "方向明确后就不要被杂音拖走。胜利来自意志和节奏。"],
  ["VIII", "力量", "Strength", "RWS_Tarot_08_Strength.jpg", ["勇气", "温柔", "驯服"], "用耐心处理冲突。你不必强硬，也能拥有强大的影响力。"],
  ["IX", "隐士", "The Hermit", "RWS_Tarot_09_Hermit.jpg", ["独处", "寻找", "智慧"], "暂时远离喧闹，回到自己的灯下。答案需要沉淀。"],
  ["X", "命运之轮", "Wheel of Fortune", "RWS_Tarot_10_Wheel_of_Fortune.jpg", ["转机", "循环", "变化"], "局势正在转动。顺势而为，同时看见重复出现的模式。"],
  ["XI", "正义", "Justice", "RWS_Tarot_11_Justice.jpg", ["公平", "因果", "判断"], "事实、责任和选择会带来结果。保持诚实，做出清醒判断。"],
  ["XII", "倒吊人", "The Hanged Man", "RWS_Tarot_12_Hanged_Man.jpg", ["暂停", "换角度", "臣服"], "进展暂缓不是失败。换一个角度，可能会看见新的出口。"],
  ["XIII", "死神", "Death", "RWS_Tarot_13_Death.jpg", ["结束", "转化", "重生"], "某个阶段需要告别。腾出空间，新的生命力才进得来。"],
  ["XIV", "节制", "Temperance", "RWS_Tarot_14_Temperance.jpg", ["平衡", "调和", "疗愈"], "不要极端推进。混合不同资源，找到更稳定的中间道路。"],
  ["XV", "恶魔", "The Devil", "RWS_Tarot_15_Devil.jpg", ["束缚", "欲望", "执念"], "看见让你上瘾或受困的模式。承认它，才有机会松绑。"],
  ["XVI", "高塔", "The Tower", "RWS_Tarot_16_Tower.jpg", ["崩塌", "真相", "释放"], "不稳固的结构会被打破。虽然震动强烈，但它也清除了虚假。"],
  ["XVII", "星星", "The Star", "RWS_Tarot_17_Star.jpg", ["希望", "疗愈", "愿景"], "信心正在恢复。把注意力放回长期愿景和温柔修复。"],
  ["XVIII", "月亮", "The Moon", "RWS_Tarot_18_Moon.jpg", ["迷雾", "潜意识", "不安"], "信息并不完整。不要急着下结论，先辨认恐惧和直觉的差别。"],
  ["XIX", "太阳", "The Sun", "RWS_Tarot_19_Sun.jpg", ["喜悦", "清晰", "成功"], "事情变得明亮直接。适合表达、庆祝、公开和推进。"],
  ["XX", "审判", "Judgement", "RWS_Tarot_20_Judgement.jpg", ["觉醒", "召唤", "复盘"], "旧经验正在召唤你升级。听见内心的声音，做一次认真回应。"],
  ["XXI", "世界", "The World", "RWS_Tarot_21_World.jpg", ["完成", "整合", "圆满"], "一个周期抵达完成。整合成果，然后准备进入更大的舞台。"],
];

function imageUrl(fileName, width = 360) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;
}

const minorNames = [
  ["Ace", "一", "开始和种子"], ["Two", "二", "选择和平衡"], ["Three", "三", "合作和扩展"], ["Four", "四", "稳定和结构"],
  ["Five", "五", "冲突和调整"], ["Six", "六", "恢复和流动"], ["Seven", "七", "挑战和策略"], ["Eight", "八", "行动和熟练"],
  ["Nine", "九", "积累和临界"], ["Ten", "十", "完成和负荷"], ["Page", "侍从", "学习和消息"], ["Knight", "骑士", "推进和追求"],
  ["Queen", "王后", "成熟和滋养"], ["King", "国王", "掌控和领导"],
];

const suitMeanings = {
  Wands: { zh: "权杖", keywords: ["行动", "热情", "创造"], tone: "关于欲望、事业、能量和主动性。它问你是否愿意点燃火焰，也提醒你管理冲动。" },
  Cups: { zh: "圣杯", keywords: ["情感", "关系", "直觉"], tone: "关于感受、爱、关系和内在需求。它提醒你照顾心，也诚实面对情绪。" },
  Swords: { zh: "宝剑", keywords: ["思考", "冲突", "真相"], tone: "关于沟通、判断、压力和清晰度。它要求你把复杂问题说清楚。" },
  Pentacles: { zh: "星币", keywords: ["现实", "资源", "身体"], tone: "关于金钱、工作、健康和长期建设。它把问题拉回现实和可执行步骤。" },
};

const cards = [
  ...majors.map(([number, name, english, imageFile, keywords, meaning]) => ({
    id: `major-${english.toLowerCase().replaceAll(" ", "-")}`,
    number, name, english, arcana: "Major Arcana", group: "大阿卡那", symbol: suits["Major Arcana"].symbol,
    image: imageUrl(imageFile), keywords, upright: meaning,
    reversed: "逆位时，这张牌提醒你留意阻塞、逃避或能量使用不当。先回到真实感受，再决定下一步。",
  })),
  ...Object.entries(suitMeanings).flatMap(([suit, info]) =>
    minorNames.map(([rank, rankZh, rankMeaning], index) => ({
      id: `${suit.toLowerCase()}-${rank.toLowerCase()}`,
      number: `${index + 1}`,
      name: `${info.zh}${rankZh}`,
      english: `${rank} of ${suit}`,
      arcana: suit,
      group: `${info.zh}牌组`,
      symbol: suits[suit].symbol,
      image: imageUrl(`${suits[suit].imagePrefix}${String(index + 1).padStart(2, "0")}.jpg`),
      keywords: [...info.keywords, rankMeaning.split("和")[0]],
      upright: `${info.tone} “${rankZh}”带来${rankMeaning}的主题，建议你把注意力放在当前最具体的一步。`,
      reversed: `逆位时，${info.zh}${rankZh}可能表示${rankMeaning}受阻、过度或方向不稳。先降低噪音，再重新整理节奏。`,
    }))
  ),
];

const state = { filter: "all", query: "" };
const cardGrid = document.querySelector("#cardGrid");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter");
const drawButton = document.querySelector("#drawButton");
const resetButton = document.querySelector("#resetButton");
const drawSlots = document.querySelectorAll(".draw-slot");
const dialog = document.querySelector("#cardDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");

function cardMatches(card) {
  const inFilter = state.filter === "all" || card.arcana === state.filter;
  const haystack = `${card.name} ${card.english} ${card.group} ${card.keywords.join(" ")}`.toLowerCase();
  return inFilter && haystack.includes(state.query.toLowerCase().trim());
}

function renderCards() {
  const visibleCards = cards.filter(cardMatches);
  resultCount.textContent = `当前显示 ${visibleCards.length} / 78 张牌`;
  cardGrid.innerHTML = visibleCards.map(createCardTile).join("");
  cardGrid.querySelectorAll(".card-tile").forEach((tile) => tile.addEventListener("click", () => openDialog(tile.dataset.id)));
}

function createCardTile(card) {
  return `
    <button class="card-tile" type="button" data-id="${card.id}">
      <span class="mini-card" aria-hidden="true"><img src="${card.image}" alt="" loading="lazy" /></span>
      <span class="card-meta">
        <small>${card.group} · ${card.english}</small>
        <strong>${card.name}</strong>
        <p>${card.upright}</p>
        <span class="keywords">${card.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</span>
      </span>
    </button>`;
}

function openDialog(id) {
  const card = cards.find((item) => item.id === id);
  if (!card) return;
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="draw-card dialog-card" aria-hidden="true"><img src="${card.image}" alt="" /></div>
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

function getThreeCards() {
  return [...cards].sort(() => Math.random() - 0.5).slice(0, 3).map((card) => ({ ...card, reversedDraw: Math.random() > 0.72 }));
}

function drawCards() {
  const positions = ["过去", "现在", "未来"];
  getThreeCards().forEach((card, index) => {
    const slot = drawSlots[index];
    const meaning = card.reversedDraw ? card.reversed : card.upright;
    slot.innerHTML = `
      <p>${positions[index]} · ${card.reversedDraw ? "逆位" : "正位"}</p>
      <div class="draw-card ${card.reversedDraw ? "reversed" : ""}" aria-hidden="true"><img src="${card.image}" alt="" /></div>
      <h3>${card.name}</h3>
      <span>${meaning}</span>`;
  });
}

function resetDraw() {
  const labels = [["过去", "问题的根源和已发生的影响"], ["现在", "当前状态、挑战和机会"], ["未来", "趋势、建议和下一步可能性"]];
  drawSlots.forEach((slot, index) => {
    slot.innerHTML = `<p>${labels[index][0]}</p><div class="draw-card card-back"></div><h3>等待抽牌</h3><span>${labels[index][1]}</span>`;
  });
}

searchInput.addEventListener("input", (event) => { state.query = event.target.value; renderCards(); });
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderCards();
  });
});
drawButton.addEventListener("click", drawCards);
resetButton.addEventListener("click", resetDraw);
dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
renderCards();

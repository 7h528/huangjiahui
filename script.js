// ===== 26条校园活动模拟数据 =====
const defaultActivities = [
  { id: 1, title: "人工智能前沿讲座", category: "学术", location: "图书馆报告厅", time: "2026-09-25T14:00", desc: "邀请AI领域专家分享最新研究成果与未来趋势" },
  { id: 2, title: "校际篮球联赛", category: "体育", location: "体育馆", time: "2026-09-28T09:00", desc: "四校联合篮球对抗赛，争夺校级冠军" },
  { id: 3, title: "校园歌手大赛初赛", category: "文艺", location: "大学生活动中心", time: "2026-10-10T19:00", desc: "一年一度的校园歌手选拔，展现音乐才华" },
  { id: 4, title: "辩论社招新", category: "社团", location: "教学楼B203", time: "2026-09-22T18:30", desc: "辩论爱好者加入我们的大家庭，锻炼思维与口才" },
  { id: 5, title: "社区志愿服务", category: "志愿", location: "校门口集合", time: "2026-09-27T08:00", desc: "前往社区开展环保志愿活动，共建绿色家园" },
  { id: 6, title: "秋季校园招聘会", category: "就业", location: "就业中心大厅", time: "2026-10-15T09:00", desc: "50+企业现场招聘，覆盖多个行业" },
  { id: 7, title: "数据结构竞赛培训", category: "学术", location: "计算机楼301", time: "2026-10-05T14:00", desc: "ACM竞赛队教练带队训练，备战区域赛" },
  { id: 8, title: "足球新生杯", category: "体育", location: "足球场", time: "2026-10-01T15:00", desc: "新生班级间足球对抗赛，挥洒汗水" },
  { id: 9, title: "话剧社年度演出", category: "文艺", location: "大礼堂", time: "2026-11-20T19:30", desc: "原创话剧《青春纪事》首演，感受戏剧魅力" },
  { id: 10, title: "摄影社外拍活动", category: "社团", location: "校门口集合", time: "2026-09-30T10:00", desc: "秋日校园与城市风光外拍，记录美好瞬间" },
  { id: 11, title: "敬老院探访", category: "志愿", location: "校门口集合", time: "2026-10-12T08:30", desc: "走进敬老院，传递温暖与关怀" },
  { id: 12, title: "简历制作工作坊", category: "就业", location: "就业中心会议室", time: "2026-10-08T14:00", desc: "资深HR手把手教你写简历，提升求职竞争力" },
  { id: 13, title: "量子计算入门讲座", category: "学术", location: "物理楼报告厅", time: "2026-10-18T14:00", desc: "了解量子计算的基本原理与应用前景" },
  { id: 14, title: "校运会", category: "体育", location: "田径场", time: "2026-10-25T08:00", desc: "一年一度的全校运动会，挑战自我极限" },
  { id: 15, title: "电影之夜", category: "文艺", location: "学生活动中心", time: "2026-09-29T19:00", desc: "放映经典影片，交流观影感受" },
  { id: 16, title: "机器人社团展示", category: "社团", location: "工程楼展厅", time: "2026-10-03T13:00", desc: "社团成员机器人作品展示与互动体验" },
  { id: 17, title: "无偿献血活动", category: "志愿", location: "食堂广场", time: "2026-10-20T09:00", desc: "与市中心血站联合举办的爱心献血活动" },
  { id: 18, title: "模拟面试大赛", category: "就业", location: "行政楼多功能厅", time: "2026-11-01T14:00", desc: "企业面试官现场模拟面试，积累实战经验" },
  { id: 19, title: "数学建模经验分享", category: "学术", location: "数学楼201", time: "2026-10-22T15:00", desc: "国赛一等奖团队分享备赛经验与心得" },
  { id: 20, title: "羽毛球友谊赛", category: "体育", location: "羽毛球馆", time: "2026-10-06T16:00", desc: "院系间羽毛球交流赛，以球会友" },
  { id: 21, title: "书法展览", category: "文艺", location: "图书馆一楼展厅", time: "2026-10-28T10:00", desc: "书法协会成员作品展览，感受传统文化" },
  { id: 22, title: "天文社观星夜", category: "社团", location: "天文台", time: "2026-10-15T20:00", desc: "使用专业望远镜观测星空，探索宇宙奥秘" },
  { id: 23, title: "支教志愿者招募", category: "志愿", location: "教学楼A102", time: "2026-09-20T15:00", desc: "暑期山区支教志愿者选拔，传递知识与希望" },
  { id: 24, title: "创业路演", category: "就业", location: "创新创业中心", time: "2026-11-10T14:00", desc: "大学生创业项目路演与投资对接" },
  { id: 25, title: "英语角", category: "学术", location: "英语角草坪", time: "2026-09-23T17:00", desc: "每周英语口语交流，提升口语表达能力" },
  { id: 26, title: "街舞社招新", category: "社团", location: "舞蹈房", time: "2026-09-21T19:00", desc: "零基础也可加入，感受街舞魅力与节奏" }
];

// ===== 数据管理 =====
function loadActivities() {
  const stored = localStorage.getItem("campusActivities");
  if (stored) return JSON.parse(stored);
  saveActivities(defaultActivities);
  return [...defaultActivities];
}

function saveActivities(data) {
  localStorage.setItem("campusActivities", JSON.stringify(data));
}

// ===== 倒计时 =====
function getCountdown(targetTime) {
  const now = new Date();
  const target = new Date(targetTime);
  const diff = target - now;
  if (diff <= 0) return { expired: true, text: "活动已结束", days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  let text = "";
  if (days > 0) text = `${days}天 ${hours}小时`;
  else if (hours > 0) text = `${hours}小时 ${minutes}分钟`;
  else text = `${minutes}分钟`;
  return { expired: false, text, days, hours, minutes };
}

// ===== Toast 消息 =====
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== 渲染活动卡片 =====
function renderActivities(activities) {
  const container = document.getElementById("activity-list");
  const emptyState = document.getElementById("empty-state");
  container.innerHTML = "";

  if (activities.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  activities.forEach((act, index) => {
    const cd = getCountdown(act.time);
    const card = document.createElement("div");
    card.className = `activity-card${cd.expired ? " expired" : ""}`;
    card.style.animationDelay = `${index * 0.05}s`;
    card.onclick = () => showDetail(act);

    card.innerHTML = `
      <div class="card-accent ${act.category}"></div>
      <div class="card-body">
        <div class="card-header">
          <span class="category-tag ${act.category}">${act.category}</span>
        </div>
        <h3 class="card-title">${act.title}</h3>
        <div class="card-meta">
          <div class="meta-item"><span class="meta-icon">📍</span>${act.location}</div>
          <div class="meta-item"><span class="meta-icon">🕐</span>${act.time.replace("T", " ")}</div>
        </div>
        ${act.desc ? `<p class="card-desc">${act.desc}</p>` : ""}
        <div class="card-footer">
          <span class="countdown-badge ${cd.expired ? "expired" : "upcoming"}">
            ${cd.expired ? "已结束" : "⏱ " + cd.text}
          </span>
          <span class="card-action">详情 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== 活动详情弹窗 =====
function showDetail(act) {
  const cd = getCountdown(act.time);
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-content");
  content.innerHTML = `
    <div class="detail-hero ${act.category}">
      <span class="detail-tag">${act.category}</span>
      <h2>${act.title}</h2>
    </div>
    <div class="detail-info">
      <div class="detail-row">
        <span class="detail-icon">📍</span>
        <span class="detail-label">地点</span>
        <span class="detail-value">${act.location}</span>
      </div>
      <div class="detail-row">
        <span class="detail-icon">🕐</span>
        <span class="detail-label">时间</span>
        <span class="detail-value">${act.time.replace("T", " ")}</span>
      </div>
      ${act.desc ? `<div class="detail-row"><span class="detail-icon">📝</span><span class="detail-label">简介</span><span class="detail-value">${act.desc}</span></div>` : ""}
    </div>
    <div class="detail-countdown">
      <div class="dc-label">${cd.expired ? "活动状态" : "距离开始还有"}</div>
      <div class="dc-value" style="color:${cd.expired ? "var(--text-muted)" : "var(--accent)"}">${cd.expired ? "已结束" : cd.text}</div>
    </div>
  `;
  modal.classList.add("open");
}

// ===== 筛选与排序 =====
function filterActivities() {
  const activities = loadActivities();
  const category = document.getElementById("category-filter").value;
  const status = document.getElementById("status-filter").value;
  const sort = document.getElementById("sort-filter").value;
  const search = document.getElementById("search-input").value.toLowerCase().trim();

  let filtered = activities;
  if (category !== "all") filtered = filtered.filter(a => a.category === category);
  if (status === "upcoming") filtered = filtered.filter(a => !getCountdown(a.time).expired);
  if (status === "expired") filtered = filtered.filter(a => getCountdown(a.time).expired);
  if (search) filtered = filtered.filter(a => a.title.toLowerCase().includes(search) || a.location.toLowerCase().includes(search) || (a.desc || "").toLowerCase().includes(search));

  if (sort === "time-asc") filtered.sort((a, b) => new Date(a.time) - new Date(b.time));
  else if (sort === "time-desc") filtered.sort((a, b) => new Date(b.time) - new Date(a.time));
  else if (sort === "name") filtered.sort((a, b) => a.title.localeCompare(b.title, "zh"));

  document.getElementById("result-count").textContent = filtered.length;
  renderActivities(filtered);
}

// ===== 分类标签栏 =====
function setupTabs() {
  document.querySelectorAll(".category-tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tabs .tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("category-filter").value = tab.dataset.category;
      filterActivities();
    });
  });
}

// ===== 导航视图切换 =====
function setupNav() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const view = link.dataset.view;
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById(`view-${view}`).classList.add("active");
      if (view === "stats") renderStats();
    });
  });
}

// ===== 数据看板 =====
function renderStats() {
  const activities = loadActivities();
  const categories = ["学术", "体育", "文艺", "社团", "志愿", "就业"];
  const icons = ["📚", "⚽", "🎵", "🎭", "🤝", "💼"];
  const upcoming = activities.filter(a => !getCountdown(a.time).expired).length;
  const expired = activities.length - upcoming;

  const grid = document.getElementById("stats-grid");
  grid.innerHTML = "";

  // 总览卡片
  const overviewCards = [
    { icon: "📋", num: activities.length, label: "活动总数" },
    { icon: "🔥", num: upcoming, label: "即将开始" },
    { icon: "✅", num: expired, label: "已结束" },
    { icon: "📊", num: categories.length, label: "活动分类" }
  ];
  overviewCards.forEach(c => {
    grid.innerHTML += `<div class="stat-card"><div class="stat-icon">${c.icon}</div><div class="stat-num">${c.num}</div><div class="stat-label">${c.label}</div></div>`;
  });

  // 各分类卡片
  categories.forEach((cat, i) => {
    const count = activities.filter(a => a.category === cat).length;
    grid.innerHTML += `<div class="stat-card"><div class="stat-icon">${icons[i]}</div><div class="stat-num">${count}</div><div class="stat-label">${cat}</div></div>`;
  });

  // 柱状图
  renderChart(activities, categories);
}

function renderChart(activities, categories) {
  const chartEl = document.getElementById("category-chart");
  const maxCount = Math.max(...categories.map(c => activities.filter(a => a.category === c).length));

  chartEl.innerHTML = `<div class="bar-chart">${categories.map(cat => {
    const count = activities.filter(a => a.category === cat).length;
    const pct = maxCount > 0 ? (count / maxCount * 100) : 0;
    return `<div class="bar-row">
      <span class="bar-label">${cat}</span>
      <div class="bar-track"><div class="bar-fill ${cat}" style="width:${pct}%">${count}</div></div>
    </div>`;
  }).join("")}</div>`;

  // 延迟触发动画
  setTimeout(() => {
    chartEl.querySelectorAll(".bar-fill").forEach(bar => {
      bar.style.width = bar.style.width;
    });
  }, 50);
}

// ===== Hero 统计 =====
function renderHeroStats() {
  const activities = loadActivities();
  const upcoming = activities.filter(a => !getCountdown(a.time).expired).length;
  const categories = new Set(activities.map(a => a.category)).size;
  document.getElementById("hero-stats").innerHTML = `
    <div class="hero-stat"><div class="hero-stat-num">${activities.length}</div><div class="hero-stat-label">活动总数</div></div>
    <div class="hero-stat"><div class="hero-stat-num">${upcoming}</div><div class="hero-stat-label">即将开始</div></div>
    <div class="hero-stat"><div class="hero-stat-num">${categories}</div><div class="hero-stat-label">活动分类</div></div>
  `;
}

// ===== 发布弹窗 =====
function setupPublishModal() {
  const modal = document.getElementById("publish-modal");
  document.getElementById("btn-open-publish").onclick = () => modal.classList.add("open");
  document.getElementById("modal-close").onclick = () => modal.classList.remove("open");
  modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("open"); });
}

// ===== 详情弹窗关闭 =====
function setupDetailModal() {
  const modal = document.getElementById("detail-modal");
  document.getElementById("detail-close").onclick = () => modal.classList.remove("open");
  modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("open"); });
}

// ===== 表单提交 =====
function handleFormSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("act-title").value.trim();
  const category = document.getElementById("act-category").value;
  const location = document.getElementById("act-location").value.trim();
  const time = document.getElementById("act-time").value;
  const desc = document.getElementById("act-desc").value.trim();

  if (!title || !category || !location || !time) {
    showToast("请填写所有必填项", "error");
    return;
  }

  const activities = loadActivities();
  activities.push({ id: Date.now(), title, category, location, time, desc });
  saveActivities(activities);

  document.getElementById("publish-modal").classList.remove("open");
  e.target.reset();
  showToast("活动发布成功！");
  renderHeroStats();
  filterActivities();
}

// ===== 主题切换 =====
function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
  updateThemeIcon();

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    updateThemeIcon();
  });
}
function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.querySelector(".theme-icon").textContent = isDark ? "☀️" : "🌙";
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupNav();
  setupTabs();
  setupPublishModal();
  setupDetailModal();
  renderHeroStats();
  filterActivities();

  document.getElementById("category-filter").addEventListener("change", filterActivities);
  document.getElementById("status-filter").addEventListener("change", filterActivities);
  document.getElementById("sort-filter").addEventListener("change", filterActivities);
  document.getElementById("search-input").addEventListener("input", filterActivities);
  document.getElementById("new-activity-form").addEventListener("submit", handleFormSubmit);

  // 每分钟刷新倒计时
  setInterval(() => { renderHeroStats(); filterActivities(); }, 60000);
});

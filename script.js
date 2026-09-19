// ===== 珠海科技学院 26条模拟活动数据 =====
const defaultActivities = [
  { id: 1, title: "蓝桥杯程序设计校内训练营", type: "竞赛", publisher: "学校官方", deadline: "2026-09-24T22:00", desc: "9月20日起每周六19:00训练；面向全校学生；零基础可参加。" },
  { id: 2, title: "AI应用入门公开课", type: "讲座", publisher: "学校官方", deadline: "", desc: "9月19日19:00；计算机学院教学楼；面向全校学生；无需报名；预计90分钟。" },
  { id: 3, title: "大学生创新创业项目团队招募", type: "招募", publisher: "学校官方", deadline: "2026-09-22T18:00", desc: "招募开发、设计、材料成员；每周稳定投入4小时以上；需提交简短自我介绍。" },
  { id: 4, title: "数学建模竞赛经验分享会", type: "讲座", publisher: "学校官方", deadline: "", desc: "直播时间为9月18日19:30；不限专业；直播已结束，活动回放预计9月20日上传。" },
  { id: 5, title: "校园公益志愿服务活动", type: "志愿", publisher: "学校官方", deadline: "2026-09-20T12:00", desc: "活动时间9月27日8:30—17:00；预计服务8小时；需提前到场签到。" },
  { id: 6, title: "Web开发零基础学习小组", type: "学习小组", publisher: "学校官方", deadline: "", desc: "9月23日起每周三19:30开展，共6周；面向零基础学生；限30人；报名时间未注明，满员即止。" },
  { id: 7, title: "AI创新应用挑战赛", type: "竞赛", publisher: "学校官方", deadline: "2026-09-21T18:00", desc: "2—4人组队；9月21日18:00前完成校内意向登记；10月20日提交作品；意向登记不等同于最终作品提交。" },
  { id: 8, title: "校园软件项目组招募", type: "招募", publisher: "学校官方", deadline: "", desc: "开发校园实用工具；面向大一、大二学生；希望成员了解Git基本操作；每周预计投入5小时；长期招募，满员即止。" },
  { id: 9, title: "程序设计训练营补充通知", type: "讲座", publisher: "学校官方", deadline: "2026-09-24T22:00", desc: "因场地调整，首次训练改为9月21日19:30，地点改至实验楼A402；已报名同学无需重复提交；报名截止时间不变。" },
  { id: 10, title: "前端开发经验交流会", type: "讲座", publisher: "学校官方", deadline: "", desc: "9月19日15:00—16:30；线下A201并同步线上直播；无需报名。" },
  { id: 11, title: "大学生科研入门分享会", type: "讲座", publisher: "学校官方", deadline: "", desc: "9月21日19:00—20:30；介绍论文检索、学生科研项目和导师联系方法；面向全校学生。" },
  { id: 12, title: "全国高校计算机能力挑战赛", type: "竞赛", publisher: "学校官方", deadline: "2026-10-05T23:59", desc: "面向本科生；个人参赛；具体费用信息未提供。" },
  { id: 13, title: "科研助理招募", type: "招募", publisher: "学校官方", deadline: "2026-09-21T23:59", desc: "协助数据整理和实验工作；仅限大二及以上学生；每周预计投入6小时。" },
  { id: 14, title: "Git与GitHub零基础工作坊", type: "学习小组", publisher: "学校官方", deadline: "2026-09-21T20:30", desc: "9月21日19:00—20:30；主要面向大一新生；限40人；需提前预约，提交报名表不代表最终录取，以审核通知为准。" },
  { id: 15, title: "AI应用创意挑战", type: "竞赛", publisher: "学校官方", deadline: "2026-09-23T23:59", desc: "9月23日23:59前提交创意方案；9月30日前提交最终作品；允许个人或团队参加；进入展示环节后可再组队。" },
  { id: 16, title: "校园摄影志愿者招募", type: "招募", publisher: "学校官方", deadline: "", desc: "长期招募；参与校内大型活动摄影；有摄影设备者优先但不作硬性要求。" },
  { id: 17, title: "Python程序设计学习资料合集", type: "学习小组", publisher: "学校官方", deadline: "2026-09-22T23:59", desc: "包含课程、练习和项目案例；资料长期开放；当前网盘提取信息有效期至9月22日，后续将统一更新。" },
  { id: 18, title: "网络安全兴趣交流小组", type: "学习小组", publisher: "学校官方", deadline: "", desc: "首次交流时间9月19日19:30；之后每两周开展一次；面向CTF、Web安全等方向感兴趣的学生；不限基础。" },
  { id: 19, title: "学生创新项目路演观摩", type: "讲座", publisher: "学校官方", deadline: "2026-09-18T22:00", desc: "活动时间9月20日14:30；原报名截止时间为9月18日22:00；活动说明如现场仍有余位，可接受候补入场。" },
  { id: 20, title: "创新创业项目团队补充说明", type: "招募", publisher: "学校官方", deadline: "2026-09-22T18:00", desc: "开发方向名额已满，现主要补充设计与材料成员；9月22日18:00截止；此前已投递者无需重复提交。" },
  { id: 21, title: "计算机学院AI产品设计分享会", type: "讲座", publisher: "学校官方", deadline: "", desc: "计算机学院发布；9月20日19:00；明德楼B203；面向全校学生；无需报名，座位有限。" },
  { id: 22, title: "周末羽毛球约球", type: "招募", publisher: "学生自发", deadline: "", desc: "学生个人发布；9月20日16:00；计划6—8人；费用AA；场地待最终确认。" },
  { id: 23, title: "AI工具交流搭子招募", type: "招募", publisher: "学生自发", deadline: "", desc: "学生个人发布；拟于9月21日晚开展；欢迎零基础；报名后拉群；具体地点未确定。" },
  { id: 24, title: "校园兼职福利分享", type: "招募", publisher: "学生自发", deadline: "", desc: "学生个人发布；称"零门槛、日结"，要求添加私人微信获取详情；未提供主办方、地点和完整内容。⚠️信息存疑，请谨慎辨别，谨防诈骗。" },
  { id: 25, title: "数码新品体验交流", type: "讲座", publisher: "学生自发", deadline: "", desc: "学生个人发布；标题为技术交流，正文主要介绍某商家优惠及购买链接；活动时间、地点未注明。⚠️疑似商业推广，请理性甄别。" },
  { id: 26, title: "外国语学院校园语言角", type: "讲座", publisher: "学校官方", deadline: "", desc: "外国语学院发布；9月21日15:00；面向全校学生；自由交流；场地容量有限，无需提前报名。" }
];

// ===== 数据管理 =====
function loadActivities() {
  const stored = localStorage.getItem("zhukeActivities");
  if (stored) {
    const parsed = JSON.parse(stored);
    // 如果缓存数据条数少于默认数据，说明是旧数据或异常数据，用默认数据覆盖
    if (Array.isArray(parsed) && parsed.length >= defaultActivities.length) {
      return parsed;
    }
  }
  saveActivities(defaultActivities);
  return [...defaultActivities];
}

function saveActivities(data) {
  localStorage.setItem("zhukeActivities", JSON.stringify(data));
}

// ===== 倒计时计算 =====
function getCountdown(deadline) {
  if (!deadline) return { status: "no-deadline", text: "无报名截止时间", days: 0, hours: 0 };
  const now = new Date();
  const target = new Date(deadline);
  const diff = target - now;
  if (diff <= 0) return { status: "expired", text: "报名已截止", days: 0, hours: 0 };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  let text = "", status = "upcoming";
  if (days > 0) {
    text = `距离截止还有 ${days}天${hours}小时`;
    if (days <= 1) status = "urgent";
    else if (days <= 3) status = "warning";
  } else if (hours > 0) {
    text = `距离截止还有 ${hours}小时${minutes}分钟`;
    status = "urgent";
  } else {
    text = `距离截止还有 ${minutes}分钟`;
    status = "urgent";
  }
  return { status, text, days, hours, minutes };
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
    const cd = getCountdown(act.deadline);
    const isExpired = cd.status === "expired";
    const hasWarning = (act.desc || "").includes("⚠️");
    const card = document.createElement("div");
    card.className = `activity-card${isExpired ? " expired" : ""}`;
    card.style.animationDelay = `${index * 0.05}s`;
    card.onclick = () => showDetail(act);

    // 发布方标签
    const publisherClass = act.publisher === "学校官方" ? "official" : "student";
    const publisherText = act.publisher === "学校官方" ? "官方" : "学生发起";

    card.innerHTML = `
      <div class="card-accent ${act.type}"></div>
      <div class="card-body">
        <div class="card-header">
          <span class="category-tag ${act.type}">${act.type}</span>
          <span class="publisher-tag ${publisherClass}">${publisherText}</span>
          ${hasWarning ? '<span class="warning-tag">⚠️ 信息警示</span>' : ""}
        </div>
        <h3 class="card-title">${act.title}</h3>
        ${act.desc ? `<p class="card-desc">${act.desc.replace(/⚠️[^。]*[。]?/g, "").trim()}</p>` : ""}
        <div class="card-footer">
          <span class="countdown-badge ${cd.status}">
            ${cd.status === "expired" ? "⚠️ " : cd.status === "no-deadline" ? "⏰ " : "⏱ "}
            ${cd.text}
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
  const cd = getCountdown(act.deadline);
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-content");
  const publisherClass = act.publisher === "学校官方" ? "official" : "student";
  const publisherText = act.publisher === "学校官方" ? "官方发布" : "学生自发";
  const hasWarning = (act.desc || "").includes("⚠️");

  content.innerHTML = `
    <div class="detail-hero ${act.type}">
      <span class="detail-tag">${act.type}</span>
      <span class="detail-tag">${publisherText}</span>
      ${hasWarning ? '<span class="detail-tag" style="background:rgba(212,63,58,0.8)">⚠️ 信息警示</span>' : ""}
      <h2>${act.title}</h2>
    </div>
    <div class="detail-info">
      <div class="detail-row">
        <span class="detail-icon">🏫</span>
        <span class="detail-label">发布方</span>
        <span class="detail-value">${act.publisher}</span>
      </div>
      ${act.deadline ? `<div class="detail-row">
        <span class="detail-icon">📅</span>
        <span class="detail-label">截止</span>
        <span class="detail-value">${act.deadline.replace("T", " ")}</span>
      </div>` : ""}
      ${act.desc ? `<div class="detail-row">
        <span class="detail-icon">📝</span>
        <span class="detail-label">简介</span>
        <span class="detail-value">${act.desc}</span>
      </div>` : ""}
    </div>
    <div class="detail-countdown">
      <div class="dc-label">${cd.status === "expired" ? "报名状态" : cd.status === "no-deadline" ? "截止时间" : "报名倒计时"}</div>
      <div class="dc-value" style="color:${cd.status === "expired" ? "var(--danger-red)" : cd.status === "no-deadline" ? "var(--text-muted)" : "var(--accent)"}">
        ${cd.status === "expired" ? "已截止" : cd.text}
      </div>
    </div>
  `;
  modal.classList.add("open");
}

// ===== 筛选与排序 =====
function filterActivities() {
  const activities = loadActivities();
  const typeFilter = document.getElementById("type-filter").value;
  const publisherFilter = document.getElementById("publisher-filter").value;
  const statusFilter = document.getElementById("status-filter").value;
  const sortFilter = document.getElementById("sort-filter").value;
  const search = document.getElementById("search-input").value.toLowerCase().trim();

  let filtered = activities;

  if (typeFilter !== "all") filtered = filtered.filter(a => a.type === typeFilter);
  if (publisherFilter !== "all") filtered = filtered.filter(a => a.publisher === publisherFilter);
  if (search) filtered = filtered.filter(a =>
    a.title.toLowerCase().includes(search) || (a.desc || "").toLowerCase().includes(search)
  );

  if (statusFilter === "upcoming") filtered = filtered.filter(a => getCountdown(a.deadline).status === "upcoming" || getCountdown(a.deadline).status === "warning" || getCountdown(a.deadline).status === "urgent");
  else if (statusFilter === "expired") filtered = filtered.filter(a => getCountdown(a.deadline).status === "expired");
  else if (statusFilter === "no-deadline") filtered = filtered.filter(a => getCountdown(a.deadline).status === "no-deadline");

  // 排序：未截止的放前面，过期的放后面
  if (sortFilter === "deadline-asc") {
    filtered.sort((a, b) => {
      const dA = a.deadline ? new Date(a.deadline) : new Date("9999-12-31");
      const dB = b.deadline ? new Date(b.deadline) : new Date("9999-12-31");
      return dA - dB;
    });
  } else if (sortFilter === "deadline-desc") {
    filtered.sort((a, b) => {
      const dA = a.deadline ? new Date(a.deadline) : new Date("0000-01-01");
      const dB = b.deadline ? new Date(b.deadline) : new Date("0000-01-01");
      return dB - dA;
    });
  } else if (sortFilter === "name") {
    filtered.sort((a, b) => a.title.localeCompare(b.title, "zh"));
  }

  document.getElementById("result-count").textContent = filtered.length;
  renderActivities(filtered);
}

// ===== 分类标签栏 =====
function setupTabs() {
  document.querySelectorAll(".category-tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tabs .tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("type-filter").value = tab.dataset.type;
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
  const types = ["竞赛", "讲座", "招募", "学习小组", "志愿"];
  const icons = ["🏆", "🎤", "👥", "📖", "🤝"];
  const upcoming = activities.filter(a => {
    const s = getCountdown(a.deadline).status;
    return s === "upcoming" || s === "warning" || s === "urgent";
  }).length;
  const expired = activities.filter(a => getCountdown(a.deadline).status === "expired").length;
  const noDeadline = activities.filter(a => getCountdown(a.deadline).status === "no-deadline").length;
  const official = activities.filter(a => a.publisher === "学校官方").length;
  const student = activities.filter(a => a.publisher === "学生自发").length;

  const grid = document.getElementById("stats-grid");
  grid.innerHTML = "";

  const overviewCards = [
    { icon: "📋", num: activities.length, label: "活动总数" },
    { icon: "🔥", num: upcoming, label: "报名中" },
    { icon: "⏰", num: expired, label: "已截止" },
    { icon: "♾️", num: noDeadline, label: "无截止时间" }
  ];
  overviewCards.forEach(c => {
    grid.innerHTML += `<div class="stat-card"><div class="stat-icon">${c.icon}</div><div class="stat-num">${c.num}</div><div class="stat-label">${c.label}</div></div>`;
  });
  types.forEach((cat, i) => {
    const count = activities.filter(a => a.type === cat).length;
    grid.innerHTML += `<div class="stat-card"><div class="stat-icon">${icons[i]}</div><div class="stat-num">${count}</div><div class="stat-label">${cat}</div></div>`;
  });

  // 类型分布柱状图
  const maxType = Math.max(...types.map(t => activities.filter(a => a.type === t).length));
  document.getElementById("category-chart").innerHTML = `<div class="bar-chart">${types.map(cat => {
    const count = activities.filter(a => a.type === cat).length;
    const pct = maxType > 0 ? (count / maxType * 100) : 0;
    return `<div class="bar-row">
      <span class="bar-label">${cat}</span>
      <div class="bar-track"><div class="bar-fill ${cat}" style="width:${pct}%">${count}</div></div>
    </div>`;
  }).join("")}</div>`;

  // 发布方占比柱状图
  const maxPub = Math.max(official, student);
  document.getElementById("publisher-chart").innerHTML = `<div class="bar-chart">
    <div class="bar-row">
      <span class="bar-label">学校官方</span>
      <div class="bar-track"><div class="bar-fill official" style="width:${maxPub > 0 ? (official / maxPub * 100) : 0}%">${official}</div></div>
    </div>
    <div class="bar-row">
      <span class="bar-label">学生自发</span>
      <div class="bar-track"><div class="bar-fill student" style="width:${maxPub > 0 ? (student / maxPub * 100) : 0}%">${student}</div></div>
    </div>
  </div>`;
}

// ===== Hero 统计 =====
function renderHeroStats() {
  const activities = loadActivities();
  const upcoming = activities.filter(a => {
    const s = getCountdown(a.deadline).status;
    return s === "upcoming" || s === "warning" || s === "urgent";
  }).length;
  const types = new Set(activities.map(a => a.type)).size;
  document.getElementById("hero-stats").innerHTML = `
    <div class="hero-stat"><div class="hero-stat-num">${activities.length}</div><div class="hero-stat-label">活动总数</div></div>
    <div class="hero-stat"><div class="hero-stat-num">${upcoming}</div><div class="hero-stat-label">报名中</div></div>
    <div class="hero-stat"><div class="hero-stat-num">${types}</div><div class="hero-stat-label">活动类型</div></div>
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
  const type = document.getElementById("act-type").value;
  const publisher = document.getElementById("act-publisher").value;
  const deadline = document.getElementById("act-deadline").value;
  const desc = document.getElementById("act-desc").value.trim();

  if (!title || !type || !desc) {
    showToast("请填写所有必填项", "error");
    return;
  }

  const activities = loadActivities();
  activities.push({ id: Date.now(), title, type, publisher, deadline, desc });
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

  document.getElementById("type-filter").addEventListener("change", () => {
    // 同步标签栏
    document.querySelectorAll(".category-tabs .tab").forEach(t => {
      t.classList.toggle("active", t.dataset.type === document.getElementById("type-filter").value);
    });
    filterActivities();
  });
  document.getElementById("publisher-filter").addEventListener("change", filterActivities);
  document.getElementById("status-filter").addEventListener("change", filterActivities);
  document.getElementById("sort-filter").addEventListener("change", filterActivities);
  document.getElementById("search-input").addEventListener("input", filterActivities);
  document.getElementById("new-activity-form").addEventListener("submit", handleFormSubmit);

  // 每分钟刷新倒计时
  setInterval(() => { renderHeroStats(); filterActivities(); }, 60000);
});

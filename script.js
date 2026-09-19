// 珠海科技学院 26条模拟活动数据
let activityData = JSON.parse(localStorage.getItem("actData")) || [
    {title:"蓝桥杯程序设计校内训练营",type:"竞赛",publisher:"学校官方",deadline:"2026-09-24T22:00",desc:"9月20日起每周六19:00训练；面向全校学生；零基础可参加。"},
    {title:"AI应用入门公开课",type:"讲座",publisher:"学校官方",deadline:"",desc:"9月19日19:00；计算机学院教学楼；面向全校学生；无需报名；预计90分钟。"},
    {title:"大学生创新创业项目团队招募",type:"招募",publisher:"学校官方",deadline:"2026-09-22T18:00",desc:"招募开发、设计、材料成员；每周稳定投入4小时以上；需提交简短自我介绍。"},
    {title:"数学建模竞赛经验分享会",type:"讲座",publisher:"学校官方",deadline:"",desc:"直播时间为9月18日19:30；不限专业；直播已结束，活动回放预计9月20日上传。"},
    {title:"校园公益志愿服务活动",type:"志愿",publisher:"学校官方",deadline:"2026-09-20T12:00",desc:"活动时间9月27日8:30—17:00；预计服务8小时；需提前到场签到。"},
    {title:"Web开发零基础学习小组",type:"学习小组",publisher:"学校官方",deadline:"",desc:"9月23日起每周三19:30开展，共6周；面向零基础学生；限30人；报名时间未注明，满员即止。"},
    {title:"AI创新应用挑战赛",type:"竞赛",publisher:"学校官方",deadline:"2026-09-21T18:00",desc:"2—4人组队；9月21日18:00前完成校内意向登记；10月20日提交作品；意向登记不等同于最终作品提交。"},
    {title:"校园软件项目组招募",type:"招募",publisher:"学校官方",deadline:"",desc:"开发校园实用工具；面向大一、大二学生；希望成员了解Git基本操作；每周预计投入5小时；长期招募，满员即止。"},
    {title:"程序设计训练营补充通知",type:"讲座",publisher:"学校官方",deadline:"2026-09-24T22:00",desc:"因场地调整，首次训练改为9月21日19:30，地点改至实验楼A402；已报名同学无需重复提交；报名截止时间不变。"},
    {title:"前端开发经验交流会",type:"讲座",publisher:"学校官方",deadline:"",desc:"9月19日15:00—16:30；线下A201并同步线上直播；无需报名。"},
    {title:"大学生科研入门分享会",type:"讲座",publisher:"学校官方",deadline:"",desc:"9月21日19:00—20:30；介绍论文检索、学生科研项目和导师联系方法；面向全校学生。"},
    {title:"全国高校计算机能力挑战赛",type:"竞赛",publisher:"学校官方",deadline:"2026-10-05T23:59",desc:"面向本科生；个人参赛；具体费用信息未提供。"},
    {title:"科研助理招募",type:"招募",publisher:"学校官方",deadline:"2026-09-21T23:59",desc:"协助数据整理和实验工作；仅限大二及以上学生；每周预计投入6小时。"},
    {title:"Git与GitHub零基础工作坊",type:"学习小组",publisher:"学校官方",deadline:"2026-09-21T20:30",desc:"9月21日19:00—20:30；主要面向大一新生；限40人；需提前预约，提交报名表不代表最终录取，以审核通知为准。"},
    {title:"AI应用创意挑战",type:"竞赛",publisher:"学校官方",deadline:"2026-09-23T23:59",desc:"9月23日23:59前提交创意方案；9月30日前提交最终作品；允许个人或团队参加；进入展示环节后可再组队。"},
    {title:"校园摄影志愿者招募",type:"招募",publisher:"学校官方",deadline:"",desc:"长期招募；参与校内大型活动摄影；有摄影设备者优先但不作硬性要求。"},
    {title:"Python程序设计学习资料合集",type:"学习小组",publisher:"学校官方",deadline:"2026-09-22T23:59",desc:"包含课程、练习和项目案例；资料长期开放；当前网盘提取信息有效期至9月22日，后续将统一更新。"},
    {title:"网络安全兴趣交流小组",type:"学习小组",publisher:"学校官方",deadline:"",desc:"首次交流时间9月19日19:30；之后每两周开展一次；面向CTF、Web安全等方向感兴趣的学生；不限基础。"},
    {title:"学生创新项目路演观摩",type:"讲座",publisher:"学校官方",deadline:"2026-09-18T22:00",desc:"活动时间9月20日14:30；原报名截止时间为9月18日22:00；活动说明如现场仍有余位，可接受候补入场。"},
    {title:"创新创业项目团队补充说明",type:"招募",publisher:"学校官方",deadline:"2026-09-22T18:00",desc:"开发方向名额已满，现主要补充设计与材料成员；9月22日18:00截止；此前已投递者无需重复提交。"},
    {title:"计算机学院AI产品设计分享会",type:"讲座",publisher:"学校官方",deadline:"",desc:"计算机学院发布；9月20日19:00；明德楼B203；面向全校学生；无需报名，座位有限。"},
    {title:"周末羽毛球约球",type:"招募",publisher:"学生自发",deadline:"",desc:"学生个人发布；9月20日16:00；计划6—8人；费用AA；场地待最终确认。"},
    {title:"AI工具交流搭子招募",type:"招募",publisher:"学生自发",deadline:"",desc:"学生个人发布；拟于9月21日晚开展；欢迎零基础；报名后拉群；具体地点未确定。"},
    {title:"校园兼职福利分享",type:"招募",publisher:"学生自发",deadline:"",desc:"学生个人发布；称"零门槛、日结"，要求添加私人微信获取详情；未提供主办方、地点和完整内容。⚠️信息存疑，请谨慎辨别，谨防诈骗。"},
    {title:"数码新品体验交流",type:"讲座",publisher:"学生自发",deadline:"",desc:"学生个人发布；标题为技术交流，正文主要介绍某商家优惠及购买链接；活动时间、地点未注明。⚠️疑似商业推广，请理性甄别。"},
    {title:"外国语学院校园语言角",type:"讲座",publisher:"学校官方",deadline:"",desc:"外国语学院发布；9月21日15:00；面向全校学生；自由交流；场地容量有限，无需提前报名。"},
];

const activityListDom = document.getElementById("activityList");
const publishForm = document.getElementById("publishForm");
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");

// 渲染活动列表
function renderList(filterType="all", keyword=""){
    activityListDom.innerHTML = "";
    const now = new Date();
    let list = activityData;
    if(filterType !== "all"){
        list = activityData.filter(item=>item.type === filterType);
    }
    if(keyword){
        list = list.filter(item=>item.title.includes(keyword) || item.desc.includes(keyword));
    }
    // 排序：未截止放前面，过期放后面
    list.sort((a,b)=>{
        const dA = a.deadline ? new Date(a.deadline) : new Date("9999-12-31");
        const dB = b.deadline ? new Date(b.deadline) : new Date("9999-12-31");
        return dA - dB;
    })
    list.forEach(item=>{
        let deadlineTime = item.deadline ? new Date(item.deadline) : null;
        const isExpired = deadlineTime && deadlineTime < now;
        let tipText = "";
        let tipColor = "";
        if(!deadlineTime){
            tipText = "⏰无报名截止时间";
            tipColor = "#444";
        }else if(isExpired){
            tipText = "⚠️报名已截止";
            tipColor = "var(--danger-red)";
        }else{
            const diffMs = deadlineTime - now;
            const day = Math.floor(diffMs/(1000*60*60*24));
            const hour = Math.floor((diffMs %(1000*60*60*24))/(1000*60*60));
            tipText = `⏰距离报名截止还有 ${day}天${hour}小时`;
            if(day <=1) tipColor = "var(--danger-red)";
            else if(day <=3) tipColor = "var(--warn-orange)";
            else tipColor = "var(--success-green)";
        }
        const card = document.createElement("div");
        card.className = `card ${isExpired?"expired":""}`;
        let tagHtml = "";
        if(item.publisher === "学校官方"){
            tagHtml += `<span class="tag official">官方</span>`;
        }else{
            tagHtml += `<span class="tag student">学生发起</span>`;
        }
        if(item.desc.includes("⚠️")){
            tagHtml += `<span class="tag warning">信息警示</span>`;
        }
        card.innerHTML = `
            ${tagHtml}
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p class="deadline" style="color:${tipColor}">${tipText}</p>
        `
        activityListDom.appendChild(card);
    })
}

// 筛选事件监听
typeFilter.addEventListener("change",()=>{
    renderList(typeFilter.value, searchInput.value.trim())
})
searchInput.addEventListener("input",()=>{
    renderList(typeFilter.value, searchInput.value.trim())
})

// 表单提交
publishForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newAct = {
        title:document.getElementById("title").value,
        type:document.getElementById("actType").value,
        publisher:document.getElementById("publisher").value,
        deadline:document.getElementById("deadline").value,
        desc:document.getElementById("desc").value
    }
    activityData.push(newAct);
    localStorage.setItem("actData", JSON.stringify(activityData));
    publishForm.reset();
    renderList();
    alert("活动发布成功！");
})

// 页面初始化渲染
renderList();

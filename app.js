const STORAGE_KEY = "okr-inprogress-demo:v3-demo-default";
const TOAST_DURATION = 2200;
const CURRENT_APPROVER = {
  id: "yanbo",
  label: "焰柏",
};
const START_GOAL_PERIOD_TYPE_OPTIONS = [
  { key: "monthly", label: "月度" },
];
const START_GOAL_PERIOD_OPTIONS = createStartGoalPeriodOptions();

const STAGE_META = {
  confirming: { label: "确认中", className: "stage-confirming" },
  executing: { label: "执行中", className: "stage-executing" },
  rating: { label: "评分中", className: "stage-rating" },
};

const MY_GOAL_STAGE_META = {
  confirming: { label: "确认中", className: "pending-stage-confirming" },
  executing: { label: "执行中", className: "pending-stage-executing" },
  rating: { label: "评分中", className: "pending-stage-rating" },
};

const DEFAULT_GOALS = [];

const DEFAULT_COMPLETED_GOALS = [];

const DEFAULT_PENDING_GOALS = [];

const DEFAULT_MY_EXECUTING_GOALS = [];

const DEFAULT_MY_COMPLETED_GOALS = [];

const DEFAULT_LIBRARY_GOALS = [];

const GOAL_CONFIG_TYPE_OPTIONS = [
  { key: "all", label: "全部类型" },
  { key: "auto", label: "自动评分" },
  { key: "manual", label: "手动评分" },
  { key: "weighted", label: "手动加权" },
];

const GOAL_CONFIG_TYPE_LABELS = {
  auto: "自动评分",
  manual: "手动评分",
  weighted: "手动加权",
};

const GOAL_CONFIG_EXECUTOR_OPTIONS = [
  { id: "yanbo", label: "焰柏" },
  { id: "liukan", label: "刘侃" },
  { id: "yuyaobo", label: "于耀博" },
  { id: "wubaowei", label: "吴宝为" },
  { id: "liuyuanhui", label: "刘远辉" },
  { id: "zhangxudong", label: "张旭东" },
  { id: "wuxuanyu", label: "吴宣宇" },
];

const DEFAULT_GOAL_CONFIG_GROUPS = [
  { id: "all", label: "全部分组", parentId: null, count: 0, kind: "all" },
  { id: "group-demo", label: "未命名分组", parentId: null, count: 0, kind: "folder" },
  { id: "recycle", label: "周转箱", parentId: null, count: 0, kind: "recycle" },
];

const GOAL_CONFIG_MAX_LEVEL = 5;
const GOAL_CONFIG_MAX_DEPTH = GOAL_CONFIG_MAX_LEVEL - 1;

const DEFAULT_GOAL_CONFIG_GOALS = [
  {
    id: "goal-config-demo",
    groupId: "group-demo",
    title: "演示目标",
    type: "auto",
    alignedGoal: "",
    executors: ["yanbo"],
    flow: "默认流程",
    createdAt: "2026-03-24T10:00:00",
    krs: [
      { id: "gcfg-demo-kr-1", title: "完成演示关键结果一", threshold: "60", passing: "80", challenge: "100", weight: "50%" },
      { id: "gcfg-demo-kr-2", title: "完成演示关键结果二", threshold: "1", passing: "2", challenge: "3", weight: "50%" },
    ],
  },
];

const DEFAULT_GOAL_CONFIG_PROCESSES = [
  {
    id: "goal-process-default",
    name: "默认流程",
    creatorId: "system",
    creator: "系统",
    updatedAt: "2026-03-29 10:00",
    isDefault: true,
  },
];

const GOAL_CONFIG_PROCESS_GUIDE_URL =
  "https://oa.dingtalk.com/dingtalk/web/query/dashboard?dinghash=aflowSetting#/aflowSetting?lang=zh_CN&nation=CN&code=ad8a9098eedc338da489f261416e9e99";
const GOAL_CONFIG_PROCESS_GUIDE_SPRITE = "./assets/process-guide-sprite.png";

const GOAL_CONFIG_PROCESS_GUIDE_STEPS = [
  {
    step: 1,
    image: "./assets/process-guide-step1.png",
    caption: "点击“搜索表单”，按快捷键“cmd+v”，点击“回车”",
    actionLabel: "跳过",
  },
  {
    step: 2,
    image: "./assets/process-guide-step2.png",
    caption: "点击“编辑”",
    actionLabel: "跳过",
  },
  {
    step: 3,
    image: "./assets/process-guide-step3.png",
    caption: "点击“3. 流程设计”，开始配置流程即可",
    actionLabel: "好的，我已了解",
  },
];

const MEMBER_OPTIONS = [
  {
    key: "member:yanbo",
    label: "焰柏",
    type: "member",
    subtext: "主管理员",
    memberIds: ["yanbo"],
  },
  {
    key: "member:yilin",
    label: "亦林",
    type: "member",
    subtext: "产品负责人",
    memberIds: ["yilin"],
  },
  {
    key: "member:mengyao",
    label: "梦瑶",
    type: "member",
    subtext: "运营负责人",
    memberIds: ["mengyao"],
  },
  {
    key: "dept:rd",
    label: "研发中心（含子部门成员）",
    type: "department",
    subtext: "包含 焰柏 / 予珂",
    memberIds: ["yanbo", "yuke"],
  },
  {
    key: "dept:product",
    label: "产品部（含子部门成员）",
    type: "department",
    subtext: "包含 亦林",
    memberIds: ["yilin"],
  },
  {
    key: "dept:ops",
    label: "运营部（含子部门成员）",
    type: "department",
    subtext: "包含 梦瑶",
    memberIds: ["mengyao"],
  },
];

const PAGE_SIZE_OPTIONS = [20, 50, 100];
const COMPLETED_TYPE_OPTIONS = [
  { key: "all", label: "全部类型" },
  { key: "auto", label: "自动评分" },
];
const GOAL_PAGE_KEYS = ["my-goals", "goal-alignment", "goal-management", "goal-config"];
const PLAN_PAGE_KEYS = ["plan-management"];
const BRIEF_PAGE_KEYS = ["brief-fill", "brief-review", "brief-management", "brief-config"];
const STATS_PAGE_KEYS = ["task-report", "plan-report", "goal-report", "brief-report"];
const SETTINGS_PAGE_KEYS = ["recycle-space", "company-info", "personal-settings", "permission-settings"];
const APP_PAGE_KEYS = [
  "workbench",
  "task-module",
  "plan-module",
  ...GOAL_PAGE_KEYS,
  ...PLAN_PAGE_KEYS,
  ...BRIEF_PAGE_KEYS,
  ...STATS_PAGE_KEYS,
  ...SETTINGS_PAGE_KEYS,
  "brief-module",
  "stats-module",
  "settings-module",
];
const GOAL_PAGE_LABELS = {
  workbench: "工作台",
  "task-module": "任务模块",
  "plan-module": "计划模块",
  "plan-management": "计划管理",
  "my-goals": "我的目标",
  "goal-alignment": "目标对齐",
  "goal-management": "目标管理",
  "goal-config": "目标配置",
  "brief-module": "简报模块",
  "brief-fill": "填写简报",
  "brief-review": "审阅简报",
  "brief-management": "简报管理",
  "brief-config": "简报配置",
  "stats-module": "统计模块",
  "task-report": "任务报表",
  "plan-report": "计划报表",
  "goal-report": "目标报表",
  "brief-report": "简报报表",
  "settings-module": "设置模块",
  "recycle-space": "回收空间",
  "company-info": "企业信息",
  "personal-settings": "个性配置",
  "permission-settings": "权限配置",
};
const SIDEBAR_PRIMARY_MODULES = [
  { pageKey: "workbench", icon: "menu-workbench.svg", label: GOAL_PAGE_LABELS.workbench },
  { pageKey: "task-module", icon: "menu-task.svg", label: GOAL_PAGE_LABELS["task-module"] },
];
const SIDEBAR_GROUPS = [
  {
    key: "plan",
    pageKeys: ["plan-module", ...PLAN_PAGE_KEYS],
    icon: "menu-plan.svg",
    label: GOAL_PAGE_LABELS["plan-module"],
    items: PLAN_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
  {
    key: "goal",
    pageKeys: GOAL_PAGE_KEYS,
    icon: "menu-goal.svg",
    label: "目标模块",
    items: GOAL_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
  {
    key: "brief",
    pageKeys: ["brief-module", ...BRIEF_PAGE_KEYS],
    icon: "menu-brief.svg",
    label: GOAL_PAGE_LABELS["brief-module"],
    items: BRIEF_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
  {
    key: "stats",
    pageKeys: ["stats-module", ...STATS_PAGE_KEYS],
    icon: "menu-stats.svg",
    label: GOAL_PAGE_LABELS["stats-module"],
    items: STATS_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
  {
    key: "settings",
    pageKeys: ["settings-module", ...SETTINGS_PAGE_KEYS],
    icon: "menu-settings.svg",
    label: GOAL_PAGE_LABELS["settings-module"],
    items: SETTINGS_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
];
const app = document.getElementById("app");
let toastTimer = null;
const goalConfigProcessGuideImageCache = [];

const clone = (value) => JSON.parse(JSON.stringify(value));
const normalizeGoalPage = (value) => (APP_PAGE_KEYS.includes(value) ? value : "my-goals");
const isGoalModulePage = (pageKey) => GOAL_PAGE_KEYS.includes(normalizeGoalPage(pageKey));
const getSidebarGroup = (groupKey) => SIDEBAR_GROUPS.find((group) => group.key === groupKey) || null;
const getSidebarGroupKeyByPage = (pageKey) =>
  (SIDEBAR_GROUPS.find((group) => group.pageKeys.includes(normalizeGoalPage(pageKey))) || {}).key || null;
function isSidebarGroupExpanded(groupKey) {
  switch (groupKey) {
    case "plan":
      return !!state.planNavExpanded;
    case "goal":
      return !!state.goalNavExpanded;
    case "brief":
      return !!state.briefNavExpanded;
    case "stats":
      return !!state.statsNavExpanded;
    case "settings":
      return !!state.settingsNavExpanded;
    default:
      return false;
  }
}

function setSidebarGroupExpanded(groupKey, nextValue) {
  if (nextValue) {
    state.planNavExpanded = groupKey === "plan";
    state.goalNavExpanded = groupKey === "goal";
    state.briefNavExpanded = groupKey === "brief";
    state.statsNavExpanded = groupKey === "stats";
    state.settingsNavExpanded = groupKey === "settings";
    return;
  }

  switch (groupKey) {
    case "plan":
      state.planNavExpanded = !!nextValue;
      break;
    case "goal":
      state.goalNavExpanded = !!nextValue;
      break;
    case "brief":
      state.briefNavExpanded = !!nextValue;
      break;
    case "stats":
      state.statsNavExpanded = !!nextValue;
      break;
    case "settings":
      state.settingsNavExpanded = !!nextValue;
      break;
    default:
      break;
  }
}

function getPendingGoalBadgeCount() {
  return Math.max(0, state.pendingGoals.length || 0);
}

function renderPendingGoalBadge(className = "") {
  const count = getPendingGoalBadgeCount();
  if (!count) {
    return "";
  }
  const classes = ["sidebar-pending-badge", className].filter(Boolean).join(" ");
  return `<span class="${classes}" aria-hidden="true">${escapeHtml(count)}</span>`;
}

function resetGoalPageEntryTab(pageKey) {
  switch (normalizeGoalPage(pageKey)) {
    case "my-goals":
      state.myGoals.activeTab = "pending";
      break;
    case "goal-management":
      state.activeTab = "ongoing";
      break;
    case "goal-config":
      state.goalConfig.activeTab = "library";
      break;
    default:
      break;
  }
}

function preloadGoalConfigProcessGuideImages() {
  goalConfigProcessGuideImageCache.length = 0;
  const image = new Image();
  image.decoding = "sync";
  image.loading = "eager";
  image.fetchPriority = "high";
  image.src = GOAL_CONFIG_PROCESS_GUIDE_SPRITE;
  if (typeof image.decode === "function") {
    image.decode().catch(() => {});
  }
  goalConfigProcessGuideImageCache.push(image);
}

function renderGoalConfigProcessGuidePreload() {
  return `
    <div class="goal-config-process-guide-preload" aria-hidden="true">
      <img src="${GOAL_CONFIG_PROCESS_GUIDE_SPRITE}" alt="" loading="eager" decoding="sync" width="3360" height="576" />
    </div>
  `;
}

function makeDefaultState() {
  return {
    activePage: "my-goals",
    planNavExpanded: false,
    goalNavExpanded: true,
    briefNavExpanded: false,
    statsNavExpanded: false,
    settingsNavExpanded: false,
    sidebarCollapsed: false,
    goals: clone(DEFAULT_GOALS),
    completedGoals: clone(DEFAULT_COMPLETED_GOALS),
    pendingGoals: clone(DEFAULT_PENDING_GOALS),
    myExecutingGoals: clone(DEFAULT_MY_EXECUTING_GOALS),
    myCompletedGoals: clone(DEFAULT_MY_COMPLETED_GOALS),
    libraryGoals: clone(DEFAULT_LIBRARY_GOALS),
    goalConfigGroups: clone(DEFAULT_GOAL_CONFIG_GROUPS),
    goalConfigGoals: clone(DEFAULT_GOAL_CONFIG_GOALS),
    goalConfigProcesses: clone(DEFAULT_GOAL_CONFIG_PROCESSES),
    activeTab: "ongoing",
    guideDismissed: false,
    filters: {
      ongoing: {
        keyword: "",
        period: "all",
        stage: "all",
        members: [],
      },
      completed: {
        keyword: "",
        period: "all",
        type: "all",
        members: [],
      },
    },
    selectionByTab: {
      ongoing: [],
      completed: [],
    },
    pageByTab: {
      ongoing: 1,
      completed: 1,
    },
    myGoals: {
      activeTab: "pending",
      filtersByTab: {
        pending: {
          keyword: "",
          period: "all",
          stage: "pending",
        },
        executing: {
          keyword: "",
          period: "all",
        },
        completed: {
          keyword: "",
          period: "all",
        },
      },
      pageByTab: {
        pending: 1,
        executing: 1,
        completed: 1,
      },
    },
    goalConfig: {
      activeTab: "library",
      selectedGroupId: "group-demo",
      expandedGroupIds: [],
      treeCollapsed: false,
      processGuideDismissed: false,
      groupSearch: "",
      keyword: "",
      type: "all",
      processKeyword: "",
      processSelection: [],
      processPage: 1,
      processEditingId: null,
      processEditingName: "",
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    pageSize: 100,
    openDropdown: null,
    openRowMenu: null,
    overlay: null,
    toast: "",
  };
}

let state = loadState();

function loadState() {
  const base = makeDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return base;
    }
    const saved = JSON.parse(raw);
    const isLegacyFilters = saved.filters && Object.prototype.hasOwnProperty.call(saved.filters, "keyword");
    return normalizeState({
      ...base,
      ...saved,
      activePage: normalizeGoalPage(saved.activePage || base.activePage),
      planNavExpanded:
        typeof saved.planNavExpanded === "boolean"
          ? saved.planNavExpanded
          : base.planNavExpanded,
      goalNavExpanded:
        typeof saved.goalNavExpanded === "boolean"
          ? saved.goalNavExpanded
          : base.goalNavExpanded,
      briefNavExpanded:
        typeof saved.briefNavExpanded === "boolean"
          ? saved.briefNavExpanded
          : base.briefNavExpanded,
      statsNavExpanded:
        typeof saved.statsNavExpanded === "boolean"
          ? saved.statsNavExpanded
          : base.statsNavExpanded,
      settingsNavExpanded:
        typeof saved.settingsNavExpanded === "boolean"
          ? saved.settingsNavExpanded
          : base.settingsNavExpanded,
      sidebarCollapsed:
        typeof saved.sidebarCollapsed === "boolean"
          ? saved.sidebarCollapsed
          : base.sidebarCollapsed,
      pendingGoals: saved.pendingGoals || base.pendingGoals,
      myExecutingGoals: saved.myExecutingGoals || base.myExecutingGoals,
      myCompletedGoals: saved.myCompletedGoals || base.myCompletedGoals,
      goalConfigGroups: saved.goalConfigGroups || base.goalConfigGroups,
      goalConfigGoals: saved.goalConfigGoals || base.goalConfigGoals,
      goalConfigProcesses: saved.goalConfigProcesses || base.goalConfigProcesses,
      filters: isLegacyFilters
        ? {
            ...base.filters,
            ongoing: {
              ...base.filters.ongoing,
              ...(saved.filters || {}),
            },
          }
        : {
            ...base.filters,
            ...(saved.filters || {}),
            ongoing: {
              ...base.filters.ongoing,
              ...((saved.filters && saved.filters.ongoing) || {}),
            },
            completed: {
              ...base.filters.completed,
              ...((saved.filters && saved.filters.completed) || {}),
            },
          },
      selectionByTab: saved.selectionByTab || {
        ongoing: saved.selection || base.selectionByTab.ongoing,
        completed: base.selectionByTab.completed,
      },
      pageByTab: saved.pageByTab || {
        ongoing: saved.page || base.pageByTab.ongoing,
        completed: base.pageByTab.completed,
      },
      myGoals: {
        ...base.myGoals,
        ...(saved.myGoals || {}),
        filtersByTab: {
          ...base.myGoals.filtersByTab,
          ...((saved.myGoals && saved.myGoals.filtersByTab) || {}),
          pending: {
            ...base.myGoals.filtersByTab.pending,
            ...((saved.myGoals && saved.myGoals.filtersByTab && saved.myGoals.filtersByTab.pending) || {}),
          },
          executing: {
            ...base.myGoals.filtersByTab.executing,
            ...((saved.myGoals && saved.myGoals.filtersByTab && saved.myGoals.filtersByTab.executing) || {}),
          },
          completed: {
            ...base.myGoals.filtersByTab.completed,
            ...((saved.myGoals && saved.myGoals.filtersByTab && saved.myGoals.filtersByTab.completed) || {}),
          },
        },
        pageByTab: {
          ...base.myGoals.pageByTab,
          ...((saved.myGoals && saved.myGoals.pageByTab) || {}),
        },
      },
      goalConfig: {
        ...base.goalConfig,
        ...(saved.goalConfig || {}),
        expandedGroupIds:
          (saved.goalConfig && Array.isArray(saved.goalConfig.expandedGroupIds) && saved.goalConfig.expandedGroupIds) ||
          base.goalConfig.expandedGroupIds,
        treeCollapsed:
          saved.goalConfig && typeof saved.goalConfig.treeCollapsed === "boolean"
            ? saved.goalConfig.treeCollapsed
            : base.goalConfig.treeCollapsed,
        processGuideDismissed:
          saved.goalConfig && typeof saved.goalConfig.processGuideDismissed === "boolean"
            ? saved.goalConfig.processGuideDismissed
            : base.goalConfig.processGuideDismissed,
      },
    });
  } catch (error) {
    return base;
  }
}

function sanitizeGoalConfigGroups(groups) {
  const source = Array.isArray(groups) && groups.length ? clone(groups) : clone(DEFAULT_GOAL_CONFIG_GROUPS);
  const nextGroups = source.map((group) => ({ ...group }));
  const groupMap = new Map(nextGroups.map((group) => [group.id, group]));

  nextGroups.forEach((group) => {
    if (group.kind === "all" || group.kind === "recycle") {
      group.parentId = null;
      return;
    }

    const ancestors = [];
    const seen = new Set([group.id]);
    let parentId = group.parentId;

    while (parentId && groupMap.has(parentId) && !seen.has(parentId)) {
      ancestors.push(parentId);
      seen.add(parentId);
      parentId = groupMap.get(parentId).parentId;
    }

    if (parentId && seen.has(parentId)) {
      group.parentId = null;
      return;
    }

    if (group.parentId && !groupMap.has(group.parentId)) {
      group.parentId = null;
      return;
    }

    if (ancestors.length > GOAL_CONFIG_MAX_DEPTH) {
      group.parentId = ancestors[ancestors.length - GOAL_CONFIG_MAX_DEPTH];
    }
  });

  return nextGroups;
}

function normalizeState(nextState) {
  const current = nextState || makeDefaultState();
  const ongoingGoalIds = new Set(current.goals.map((goal) => goal.id));
  const completedGoalIds = new Set(current.completedGoals.map((goal) => goal.id));
  const processIds = new Set((current.goalConfigProcesses || clone(DEFAULT_GOAL_CONFIG_PROCESSES)).map((item) => item.id));
  const normalizedGoalConfigGroups = sanitizeGoalConfigGroups(current.goalConfigGroups);
  const normalizedPendingGoals = (current.pendingGoals || clone(DEFAULT_PENDING_GOALS)).map((goal) => {
    if (goal.stage !== "executing") {
      return goal;
    }

    const shouldRate = goal.id === "pending-4";
    return {
      ...goal,
      stage: shouldRate ? "rating" : "confirming",
      currentValue: shouldRate ? "待评分" : "待确认",
      processType: shouldRate ? "目标评分审批" : "目标确认审批",
      keyResults: (goal.keyResults || []).map((item) => ({
        ...item,
        score: shouldRate ? "等待评分审批" : "等待确认审批",
      })),
    };
  });
  return {
    ...current,
    pendingGoals: normalizedPendingGoals,
    myExecutingGoals: current.myExecutingGoals || clone(DEFAULT_MY_EXECUTING_GOALS),
    myCompletedGoals: current.myCompletedGoals || clone(DEFAULT_MY_COMPLETED_GOALS),
    goalConfigGroups: normalizedGoalConfigGroups,
    goalConfigGoals: current.goalConfigGoals || clone(DEFAULT_GOAL_CONFIG_GOALS),
    goalConfigProcesses: current.goalConfigProcesses || clone(DEFAULT_GOAL_CONFIG_PROCESSES),
    activePage: normalizeGoalPage(current.activePage),
    planNavExpanded:
      getSidebarGroupKeyByPage(current.activePage) === "plan" ? current.planNavExpanded !== false : false,
    goalNavExpanded: isGoalModulePage(current.activePage) ? current.goalNavExpanded !== false : false,
    briefNavExpanded:
      getSidebarGroupKeyByPage(current.activePage) === "brief" ? current.briefNavExpanded !== false : false,
    statsNavExpanded:
      getSidebarGroupKeyByPage(current.activePage) === "stats" ? current.statsNavExpanded !== false : false,
    settingsNavExpanded:
      getSidebarGroupKeyByPage(current.activePage) === "settings" ? current.settingsNavExpanded !== false : false,
    sidebarCollapsed: !!current.sidebarCollapsed,
    selectionByTab: {
      ongoing: ((current.selectionByTab && current.selectionByTab.ongoing) || [])
        .filter((id) => ongoingGoalIds.has(id)),
      completed: ((current.selectionByTab && current.selectionByTab.completed) || [])
        .filter((id) => completedGoalIds.has(id)),
    },
    pageByTab: {
      ongoing: Math.max(1, Number(current.pageByTab && current.pageByTab.ongoing) || 1),
      completed: Math.max(1, Number(current.pageByTab && current.pageByTab.completed) || 1),
    },
    myGoals: {
      activeTab:
        current.myGoals && ["pending", "executing", "completed"].includes(current.myGoals.activeTab)
          ? current.myGoals.activeTab
          : "pending",
      filtersByTab: {
        pending: {
          keyword:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.pending &&
              current.myGoals.filtersByTab.pending.keyword) ||
            "",
          period:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.pending &&
              current.myGoals.filtersByTab.pending.period) ||
            "all",
          stage:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.pending &&
              current.myGoals.filtersByTab.pending.stage) ||
            "pending",
        },
        executing: {
          keyword:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.executing &&
              current.myGoals.filtersByTab.executing.keyword) ||
            "",
          period:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.executing &&
              current.myGoals.filtersByTab.executing.period) ||
            "all",
        },
        completed: {
          keyword:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.completed &&
              current.myGoals.filtersByTab.completed.keyword) ||
            "",
          period:
            (current.myGoals &&
              current.myGoals.filtersByTab &&
              current.myGoals.filtersByTab.completed &&
              current.myGoals.filtersByTab.completed.period) ||
            "all",
        },
      },
      pageByTab: {
        pending: Math.max(
          1,
          Number(current.myGoals && current.myGoals.pageByTab && current.myGoals.pageByTab.pending) || 1
        ),
        executing: Math.max(
          1,
          Number(current.myGoals && current.myGoals.pageByTab && current.myGoals.pageByTab.executing) || 1
        ),
        completed: Math.max(
          1,
          Number(current.myGoals && current.myGoals.pageByTab && current.myGoals.pageByTab.completed) || 1
        ),
      },
    },
    goalConfig: {
      activeTab:
        current.goalConfig && ["library", "process"].includes(current.goalConfig.activeTab)
          ? current.goalConfig.activeTab
          : "library",
      selectedGroupId:
        (current.goalConfig && current.goalConfig.selectedGroupId) || "group-1-2",
      expandedGroupIds:
        current.goalConfig && Array.isArray(current.goalConfig.expandedGroupIds)
          ? current.goalConfig.expandedGroupIds
          : ["group-1", "group-1-3", "group-1-3-3"],
      treeCollapsed: !!(current.goalConfig && current.goalConfig.treeCollapsed),
      processGuideDismissed: !!(current.goalConfig && current.goalConfig.processGuideDismissed),
      groupSearch: (current.goalConfig && current.goalConfig.groupSearch) || "",
      keyword: (current.goalConfig && current.goalConfig.keyword) || "",
      type: GOAL_CONFIG_TYPE_OPTIONS.some((item) => item.key === (current.goalConfig && current.goalConfig.type))
        ? current.goalConfig.type
        : "all",
      processKeyword: (current.goalConfig && current.goalConfig.processKeyword) || "",
      processSelection: (
        (current.goalConfig && Array.isArray(current.goalConfig.processSelection) && current.goalConfig.processSelection) || []
      ).filter((id) => processIds.has(id)),
      processPage: Math.max(1, Number(current.goalConfig && current.goalConfig.processPage) || 1),
      processEditingId: null,
      processEditingName: "",
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    pageSize: PAGE_SIZE_OPTIONS.includes(Number(current.pageSize))
      ? Number(current.pageSize)
      : 100,
    openDropdown: null,
    openRowMenu: null,
    overlay: null,
    toast: "",
  };
}

function persistState() {
  const payload = {
    activePage: state.activePage,
    planNavExpanded: state.planNavExpanded,
    goalNavExpanded: state.goalNavExpanded,
    briefNavExpanded: state.briefNavExpanded,
    statsNavExpanded: state.statsNavExpanded,
    settingsNavExpanded: state.settingsNavExpanded,
    sidebarCollapsed: state.sidebarCollapsed,
    goals: state.goals,
    completedGoals: state.completedGoals,
    pendingGoals: state.pendingGoals,
    myExecutingGoals: state.myExecutingGoals,
    myCompletedGoals: state.myCompletedGoals,
    libraryGoals: state.libraryGoals,
    goalConfigGroups: state.goalConfigGroups,
    goalConfigGoals: state.goalConfigGoals,
    goalConfigProcesses: state.goalConfigProcesses,
    activeTab: state.activeTab,
    guideDismissed: state.guideDismissed,
    filters: state.filters,
    selectionByTab: state.selectionByTab,
    pageByTab: state.pageByTab,
    myGoals: state.myGoals,
    goalConfig: {
      ...state.goalConfig,
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      processEditingId: null,
      processEditingName: "",
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    pageSize: state.pageSize,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clearDemoStorageAndReload() {
  const keysToDelete = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key && key.startsWith("okr-inprogress-demo:")) {
      keysToDelete.push(key);
    }
  }
  keysToDelete.forEach((key) => localStorage.removeItem(key));

  const sessionKeysToDelete = [];
  for (let index = 0; index < sessionStorage.length; index += 1) {
    const key = sessionStorage.key(index);
    if (key && key.startsWith("okr-inprogress-demo:")) {
      sessionKeysToDelete.push(key);
    }
  }
  sessionKeysToDelete.forEach((key) => sessionStorage.removeItem(key));

  window.location.reload();
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function createRuntimeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function createStartGoalPeriodOptions() {
  const current = new Date();
  const base = new Date(current.getFullYear(), current.getMonth(), 1);
  return Array.from({ length: 6 }, (_, index) => {
    const next = new Date(base.getFullYear(), base.getMonth() + index, 1);
    return `${next.getFullYear()}年${padNumber(next.getMonth() + 1)}月`;
  });
}

function formatDateOnly(date = new Date()) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
}

function formatDateTime(date = new Date()) {
  return `${formatDateOnly(date)} ${padNumber(date.getHours())}:${padNumber(date.getMinutes())}`;
}

function formatLaunchPeriod(period) {
  if (!period) {
    return "";
  }
  return period.endsWith("目标管理") ? period : `${period}目标管理`;
}

function createApprovalNo() {
  const now = new Date();
  return `OA-${now.getFullYear()}${padNumber(now.getMonth() + 1)}${padNumber(now.getDate())}-${Math.floor(
    Math.random() * 900 + 100
  )}`;
}

function isCurrentUserExecutor(executorId) {
  return executorId === CURRENT_APPROVER.id;
}

function sortGoals(goals) {
  return [...goals].sort((left, right) => {
    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

function getTabKey(tabKey = state.activeTab) {
  return tabKey === "completed" ? "completed" : "ongoing";
}

function getActiveFilters(tabKey = getTabKey()) {
  return state.filters[getTabKey(tabKey)];
}

function getActiveGoalList(tabKey = getTabKey()) {
  return getTabKey(tabKey) === "completed" ? state.completedGoals : state.goals;
}

function setActiveGoalList(goals, tabKey = getTabKey()) {
  if (getTabKey(tabKey) === "completed") {
    state.completedGoals = goals;
    return;
  }
  state.goals = goals;
}

function getActiveSelection(tabKey = getTabKey()) {
  return state.selectionByTab[getTabKey(tabKey)] || [];
}

function setActiveSelection(nextSelection, tabKey = getTabKey()) {
  state.selectionByTab[getTabKey(tabKey)] = nextSelection;
}

function getActivePage(tabKey = getTabKey()) {
  return state.pageByTab[getTabKey(tabKey)] || 1;
}

function setActivePage(nextPage, tabKey = getTabKey()) {
  state.pageByTab[getTabKey(tabKey)] = Math.max(1, Number(nextPage) || 1);
}

function selectedMemberIds(memberKeys = []) {
  if (!memberKeys.length) {
    return [];
  }
  const ids = new Set();
  memberKeys.forEach((key) => {
    const option = MEMBER_OPTIONS.find((item) => item.key === key);
    if (!option) {
      return;
    }
    option.memberIds.forEach((memberId) => ids.add(memberId));
  });
  return [...ids];
}

function getFilteredGoals(tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const filters = getActiveFilters(currentTab);
  let goals = sortGoals(getActiveGoalList(currentTab));

  const keyword = filters.keyword.trim().toLowerCase();
  if (keyword) {
    goals = goals.filter((goal) => goal.title.toLowerCase().includes(keyword));
  }

  if (filters.period !== "all") {
    goals = goals.filter((goal) => goal.period === filters.period);
  }

  if (currentTab === "ongoing" && filters.stage !== "all") {
    goals = goals.filter((goal) => goal.stage === filters.stage);
  }

  if (currentTab === "completed" && filters.type !== "all") {
    goals = goals.filter((goal) => {
      if (filters.type === "auto") {
        return goal.goalType === "自动评分";
      }
      return true;
    });
  }

  const memberIds = selectedMemberIds(filters.members);
  if (memberIds.length) {
    goals = goals.filter((goal) => memberIds.includes(goal.executorId));
  }

  return goals;
}

function getPagedGoals(goals, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const totalPages = Math.max(1, Math.ceil(goals.length / state.pageSize));
  const currentPage = Math.min(getActivePage(currentTab), totalPages);
  if (currentPage !== getActivePage(currentTab)) {
    setActivePage(currentPage, currentTab);
  }
  const start = (currentPage - 1) * state.pageSize;
  return {
    page: currentPage,
    totalPages,
    items: goals.slice(start, start + state.pageSize),
  };
}

function getGoal(goalId, tabKey = getTabKey()) {
  return getActiveGoalList(tabKey).find((goal) => goal.id === goalId);
}

function getLibraryGoal(libraryId) {
  return state.libraryGoals.find((goal) => goal.id === libraryId);
}

function getPeriodOptions(tabKey = getTabKey()) {
  const periods = new Map();
  sortGoals(getActiveGoalList(tabKey)).forEach((goal) => {
    if (!periods.has(goal.period)) {
      periods.set(goal.period, 0);
    }
    periods.set(goal.period, periods.get(goal.period) + 1);
  });
  return [...periods.entries()].map(([period, count]) => ({ period, count }));
}

function getSelectedGoals(tabKey = getTabKey()) {
  return getActiveSelection(tabKey)
    .map((id) => getGoal(id, tabKey))
    .filter(Boolean);
}

function getHeaderCheckboxState(pageGoals, tabKey = getTabKey()) {
  const selectedIds = getActiveSelection(tabKey);
  if (!pageGoals.length) {
    return "unchecked";
  }
  const selectedCount = pageGoals.filter((goal) => selectedIds.includes(goal.id)).length;
  if (selectedCount === 0) {
    return "unchecked";
  }
  if (selectedCount === pageGoals.length) {
    return "checked";
  }
  return "partial";
}

function memberLabel(tabKey = getTabKey()) {
  const filters = getActiveFilters(tabKey);
  if (!filters.members.length) {
    return "全部成员";
  }
  if (filters.members.length === 1) {
    const option = MEMBER_OPTIONS.find((item) => item.key === filters.members[0]);
    return option ? option.label : "全部成员";
  }
  return `已选 ${filters.members.length} 项`;
}

function canAdvanceAll(filteredGoals, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const filters = getActiveFilters(currentTab);
  return currentTab === "ongoing" && filters.stage === "executing" && filteredGoals.length > 0;
}

function getAdvanceActionState(filteredGoals, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const filters = getActiveFilters(currentTab);
  const isExecutingStage = currentTab === "ongoing" && filters.stage === "executing";
  return {
    isExecutingStage,
    hasGoals: filteredGoals.length > 0,
    canAdvance: isExecutingStage && filteredGoals.length > 0,
    tooltip: isExecutingStage ? "" : "点击切换阶段为「执行中」，即可全部推进评分",
  };
}

function canAdvanceSelection(tabKey = getTabKey()) {
  if (getTabKey(tabKey) !== "ongoing") {
    return false;
  }
  const selectedGoals = getSelectedGoals(tabKey);
  return selectedGoals.length > 0 && selectedGoals.every((goal) => goal.stage === "executing");
}

function resetListState(tabKey = getTabKey()) {
  setActivePage(1, tabKey);
  setActiveSelection([], tabKey);
  state.openDropdown = null;
  state.openRowMenu = null;
}

function getMyGoalTabKey(tabKey = state.myGoals.activeTab) {
  return ["pending", "executing", "completed"].includes(tabKey) ? tabKey : "pending";
}

function getMyGoalFilters(tabKey = getMyGoalTabKey()) {
  return state.myGoals.filtersByTab[getMyGoalTabKey(tabKey)];
}

function getMyGoalList(tabKey = getMyGoalTabKey()) {
  const currentTab = getMyGoalTabKey(tabKey);
  if (currentTab === "pending") {
    return state.pendingGoals;
  }
  if (currentTab === "executing") {
    return state.myExecutingGoals;
  }
  return state.myCompletedGoals;
}

function getMyGoal(goalId, tabKey = getMyGoalTabKey()) {
  return getMyGoalList(tabKey).find((goal) => goal.id === goalId);
}

function getMyGoalPage(tabKey = getMyGoalTabKey()) {
  return state.myGoals.pageByTab[getMyGoalTabKey(tabKey)] || 1;
}

function setMyGoalPage(nextPage, tabKey = getMyGoalTabKey()) {
  state.myGoals.pageByTab[getMyGoalTabKey(tabKey)] = Math.max(1, Number(nextPage) || 1);
}

function getFilteredMyGoals(tabKey = getMyGoalTabKey()) {
  const currentTab = getMyGoalTabKey(tabKey);
  const filters = getMyGoalFilters(currentTab);
  let goals = sortGoals(getMyGoalList(currentTab));

  const keyword = filters.keyword.trim().toLowerCase();
  if (keyword) {
    goals = goals.filter((goal) => goal.title.toLowerCase().includes(keyword));
  }

  if (filters.period !== "all") {
    goals = goals.filter((goal) => goal.period === filters.period);
  }

  if (currentTab === "pending" && filters.stage !== "pending") {
    goals = goals.filter((goal) => goal.stage === filters.stage);
  }

  return goals;
}

function getMyGoalPagedGoals(goals, tabKey = getMyGoalTabKey()) {
  const currentTab = getMyGoalTabKey(tabKey);
  const totalPages = Math.max(1, Math.ceil(goals.length / state.pageSize));
  const currentPage = Math.min(getMyGoalPage(currentTab), totalPages);
  if (currentPage !== getMyGoalPage(currentTab)) {
    setMyGoalPage(currentPage, currentTab);
  }
  const start = (currentPage - 1) * state.pageSize;
  return {
    page: currentPage,
    totalPages,
    items: goals.slice(start, start + state.pageSize),
  };
}

function getMyGoalPeriodOptions(tabKey = getMyGoalTabKey()) {
  const periods = new Map();
  sortGoals(getMyGoalList(tabKey)).forEach((goal) => {
    if (!periods.has(goal.period)) {
      periods.set(goal.period, 0);
    }
    periods.set(goal.period, periods.get(goal.period) + 1);
  });
  return [...periods.entries()].map(([period, count]) => ({ period, count }));
}

function getGoalConfigGroup(groupId) {
  return state.goalConfigGroups.find((group) => group.id === groupId);
}

function getGoalConfigChildren(parentId = null) {
  return state.goalConfigGroups.filter((group) => group.parentId === parentId);
}

function getGoalConfigGroupLevel(group) {
  let depth = 0;
  let current = group;
  while (current && current.parentId) {
    depth += 1;
    current = getGoalConfigGroup(current.parentId);
  }
  return depth;
}

function getGoalConfigAncestors(groupId) {
  const ids = [];
  let current = getGoalConfigGroup(groupId);
  while (current && current.parentId) {
    ids.push(current.parentId);
    current = getGoalConfigGroup(current.parentId);
  }
  return ids;
}

function getGoalConfigDescendantIds(groupId) {
  const ids = [groupId];
  getGoalConfigChildren(groupId).forEach((group) => {
    ids.push(...getGoalConfigDescendantIds(group.id));
  });
  return ids;
}

function getGoalConfigDeleteScope(groupId) {
  const groupIds = getGoalConfigDescendantIds(groupId);
  const groupSet = new Set(groupIds);
  const goals = state.goalConfigGoals.filter((goal) => groupSet.has(goal.groupId));
  return { groupIds, groupSet, goals };
}

function getGoalConfigGroupCount(groupId) {
  if (groupId === "all") {
    return state.goalConfigGoals.length;
  }
  if (groupId === "recycle") {
    return state.goalConfigGoals.filter((goal) => goal.groupId === "recycle").length;
  }
  return state.goalConfigGoals.filter((goal) => goal.groupId === groupId).length;
}

function getGoalConfigVisibleGroups() {
  const search = state.goalConfig.groupSearch.trim().toLowerCase();
  const visibleIds = new Set();

  if (search) {
    state.goalConfigGroups.forEach((group) => {
      if (group.label.toLowerCase().includes(search) || group.kind === "all" || group.kind === "recycle") {
        visibleIds.add(group.id);
        getGoalConfigAncestors(group.id).forEach((id) => visibleIds.add(id));
      }
    });
  } else {
    state.goalConfigGroups.forEach((group) => visibleIds.add(group.id));
  }

  const result = [];
  const walk = (parentId = null) => {
    getGoalConfigChildren(parentId).forEach((group) => {
      if (!visibleIds.has(group.id)) {
        return;
      }
      result.push(group);
      const isExpanded = search || state.goalConfig.expandedGroupIds.includes(group.id);
      if (isExpanded) {
        walk(group.id);
      }
    });
  };

  walk(null);
  return result;
}

function resolveGoalConfigTargetGroupId(groupId = state.goalConfig.selectedGroupId) {
  const target = getGoalConfigGroup(groupId);
  if (!target) {
    return "recycle";
  }
  if (target.kind === "all" || target.kind === "recycle") {
    return "recycle";
  }
  return target.id;
}

function getGoalConfigGoal(goalId) {
  return state.goalConfigGoals.find((goal) => goal.id === goalId);
}

function sortGoalConfigGoals(goals) {
  return [...goals].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime());
}

function getFilteredGoalConfigGoals() {
  const { selectedGroupId, keyword, type } = state.goalConfig;
  let goals = sortGoalConfigGoals(state.goalConfigGoals);

  if (selectedGroupId && selectedGroupId !== "all") {
    if (selectedGroupId === "recycle") {
      goals = goals.filter((goal) => goal.groupId === "recycle");
    } else {
      goals = goals.filter((goal) => goal.groupId === selectedGroupId);
    }
  }

  const normalizedKeyword = keyword.trim().toLowerCase();
  if (normalizedKeyword) {
    goals = goals.filter((goal) => goal.title.toLowerCase().includes(normalizedKeyword));
  }

  if (type !== "all") {
    goals = goals.filter((goal) => goal.type === type);
  }

  return goals;
}

function getGoalConfigTypeLabel(type) {
  return GOAL_CONFIG_TYPE_LABELS[type] || GOAL_CONFIG_TYPE_LABELS.auto;
}

function goalConfigExecutorLabel(executorId) {
  const option = GOAL_CONFIG_EXECUTOR_OPTIONS.find((item) => item.id === executorId);
  return option ? option.label : executorId;
}

function getGoalConfigExecutorText(executorIds = []) {
  return executorIds.map((id) => `@${goalConfigExecutorLabel(id)}`);
}

function createGoalConfigKr(type = "auto", index = 0) {
  const next = {
    id: `gcfg-draft-kr-${Date.now()}-${index}-${Math.random().toString(16).slice(2, 5)}`,
    title: "",
  };
  if (type === "auto") {
    return { ...next, threshold: "", passing: "", challenge: "", weight: index === 0 ? "100%" : "0%" };
  }
  if (type === "weighted") {
    return { ...next, weight: index === 0 ? "100%" : "0%" };
  }
  return next;
}

function createGoalConfigInitialKrs(type = "auto") {
  const first = createGoalConfigKr(type, 0);
  const second = createGoalConfigKr(type, 1);

  if (type === "auto" || type === "weighted") {
    first.weight = "50%";
    second.weight = "50%";
  }

  return [first, second];
}

function sanitizeGoalConfigMetricValue(value) {
  const normalized = String(value || "").replace(/[^\d.]/g, "");
  const [integerPart = "", ...decimalParts] = normalized.split(".");
  const decimalPart = decimalParts.join("");
  if (!normalized.includes(".")) {
    return integerPart;
  }
  if (!integerPart && !decimalPart) {
    return "";
  }
  return `${integerPart || "0"}.${decimalPart}`;
}

function isGoalConfigNumericValue(value) {
  return /^(?:0|[1-9]\d*)(?:\.\d+)?$/.test(String(value || "").trim());
}

function isGoalConfigStrictOrderedTriple(values) {
  if (values.length !== 3) {
    return false;
  }
  return (
    (values[0] > values[1] && values[1] > values[2]) ||
    (values[0] < values[1] && values[1] < values[2])
  );
}

function getGoalConfigFlowOptions() {
  const processes =
    Array.isArray(state.goalConfigProcesses) && state.goalConfigProcesses.length
      ? state.goalConfigProcesses
      : DEFAULT_GOAL_CONFIG_PROCESSES;

  const options = sortGoalConfigProcesses(processes)
    .map((item) => item.name)
    .filter((name, index, source) => name && source.indexOf(name) === index);

  return options.length ? options : ["默认流程"];
}

function getDefaultGoalConfigFlow() {
  return getGoalConfigFlowOptions()[0];
}

function isGoalConfigPristineDraft(draft) {
  if (!draft || !draft.isNew) {
    return false;
  }

  return (
    !draft.title &&
    !draft.alignedGoal &&
    !(draft.executors || []).length &&
    (draft.flow || getDefaultGoalConfigFlow()) === getDefaultGoalConfigFlow() &&
    (draft.krs || []).every((kr) => !kr.title && !kr.threshold && !kr.passing && !kr.challenge)
  );
}

function normalizeGoalConfigDraft(draft) {
  if (!draft) {
    return draft;
  }

  const next = clone(draft);
  next.krs = (next.krs && next.krs.length ? next.krs : [createGoalConfigKr(next.type, 0)]).map((kr, index) => {
    const base = {
      ...kr,
      title: kr.title || "",
    };

    if (next.type === "auto") {
      return {
        ...base,
        threshold: kr.threshold || "",
        passing: kr.passing || "",
        challenge: kr.challenge || "",
        weight: kr.weight || (index === 0 ? "100%" : "0%"),
      };
    }

    if (next.type === "weighted") {
      return {
        ...base,
        threshold: "",
        passing: "",
        challenge: "",
        weight: kr.weight || (index === 0 ? "100%" : "0%"),
      };
    }

    return {
      ...base,
      threshold: "",
      passing: "",
      challenge: "",
      weight: "",
    };
  });

  if (next.type === "auto" || next.type === "weighted") {
    const weights = next.krs.map((kr) => Number.parseInt(String(kr.weight).replace("%", ""), 10) || 0);
    const lockedIndex = next.krs.length - 1;
    const used = weights.slice(0, lockedIndex).reduce((sum, current) => sum + current, 0);
    const last = Math.max(0, 100 - used);
    next.krs = next.krs.map((kr, index) => ({
      ...kr,
      weight: `${index === lockedIndex ? last : Math.max(0, Math.min(100, weights[index]))}%`,
    }));
  }

  return next;
}

function createGoalConfigDraft(goal) {
  return normalizeGoalConfigDraft(
    goal || {
      id: `goal-config-new-${Date.now()}`,
      groupId: resolveGoalConfigTargetGroupId(),
      title: "",
      type: "auto",
      alignedGoal: "",
      executors: [],
      flow: getDefaultGoalConfigFlow(),
      createdAt: new Date().toISOString(),
      isNew: true,
      krs: createGoalConfigInitialKrs("auto"),
    }
  );
}

function getGoalConfigLaunchGoals() {
  return sortGoalConfigGoals(state.goalConfigGoals)
    .filter((goal) => goal.groupId !== "recycle" && goal.flow && (goal.executors || []).length)
    .map((goal) => ({
      id: goal.id,
      title: goal.title,
      groupId: goal.groupId,
      groupLabel: getGoalConfigGroup(goal.groupId)?.label || "全部分组",
      type: goal.type,
      goalType: getGoalConfigTypeLabel(goal.type),
      alignedGoal: goal.alignedGoal || "",
      executors: clone(goal.executors || []),
      executorLabels: (goal.executors || []).map((item) => goalConfigExecutorLabel(item)),
      flow: goal.flow,
      createdAt: goal.createdAt,
      krs: clone(goal.krs || []),
    }));
}

function sortGoalConfigProcesses(processes) {
  return [...processes].sort((left, right) => {
    if (left.isDefault !== right.isDefault) {
      return left.isDefault ? -1 : 1;
    }
    return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
  });
}

function getFilteredGoalConfigProcesses() {
  const keyword = state.goalConfig.processKeyword.trim().toLowerCase();
  let processes = sortGoalConfigProcesses(state.goalConfigProcesses);
  if (keyword) {
    processes = processes.filter((item) => item.name.toLowerCase().includes(keyword));
  }
  return processes;
}

function getGoalConfigProcessPage() {
  return Math.max(1, Number(state.goalConfig.processPage) || 1);
}

function setGoalConfigProcessPage(nextPage) {
  state.goalConfig.processPage = Math.max(1, Number(nextPage) || 1);
}

function getGoalConfigProcessPaged(processes) {
  const totalPages = Math.max(1, Math.ceil(processes.length / state.pageSize));
  const currentPage = Math.min(getGoalConfigProcessPage(), totalPages);
  if (currentPage !== getGoalConfigProcessPage()) {
    setGoalConfigProcessPage(currentPage);
  }
  const start = (currentPage - 1) * state.pageSize;
  return {
    page: currentPage,
    totalPages,
    items: processes.slice(start, start + state.pageSize),
  };
}

function getGoalConfigSelectedProcesses() {
  const selected = new Set(state.goalConfig.processSelection || []);
  return state.goalConfigProcesses.filter((item) => selected.has(item.id));
}

function getGoalConfigProcessHeaderState(pageProcesses) {
  const selectedIds = state.goalConfig.processSelection || [];
  const selectableProcesses = pageProcesses.filter((item) => !item.isDefault);
  if (!selectableProcesses.length) {
    return "unchecked";
  }
  const selectedCount = selectableProcesses.filter((item) => selectedIds.includes(item.id)).length;
  if (selectedCount === 0) {
    return "unchecked";
  }
  if (selectedCount === selectableProcesses.length) {
    return "checked";
  }
  return "partial";
}

function resetGoalConfigProcessState() {
  setGoalConfigProcessPage(1);
  state.goalConfig.processSelection = [];
  state.goalConfig.processMenuId = null;
}

function normalizeProcessName(value) {
  return String(value || "").trim();
}

function saveGoalConfigProcessName(processId) {
  if (!state.goalConfig.processEditingId || state.goalConfig.processEditingId !== processId) {
    return;
  }
  const nextName = normalizeProcessName(state.goalConfig.processEditingName);
  if (!nextName) {
    showToast("请输入流程名称");
    return;
  }
  state.goalConfigProcesses = state.goalConfigProcesses.map((item) =>
    item.id === processId
      ? {
          ...item,
          name: nextName,
          updatedAt: formatDateOnly(),
        }
      : item
  );
  state.goalConfig.processEditingId = null;
  state.goalConfig.processEditingName = "";
  state.goalConfig.processMenuId = null;
  showToast("流程名称已更新");
}

function cancelGoalConfigProcessEditing() {
  state.goalConfig.processEditingId = null;
  state.goalConfig.processEditingName = "";
}

function getGoalConfigProcessGuideStep(step) {
  return (
    GOAL_CONFIG_PROCESS_GUIDE_STEPS.find((item) => item.step === Number(step)) ||
    GOAL_CONFIG_PROCESS_GUIDE_STEPS[0]
  );
}

function buildGoalConfigProcessGuideOverlay(processId, processKind, step = 1, dontRemind = false) {
  return {
    type: "goal-config-process-guide",
    processId,
    processKind,
    step,
    dontRemind,
  };
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "readonly");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (error) {
    // Ignore copy fallback errors in demo mode.
  }
  document.body.removeChild(textarea);
}

function copyTextBestEffort(text) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard.writeText(text).catch(() => fallbackCopyText(text));
    return;
  }
  fallbackCopyText(text);
}

function openGoalConfigProcessEditor() {
  const popup = window.open(GOAL_CONFIG_PROCESS_GUIDE_URL, "_blank", "noopener,noreferrer");
  if (popup) {
    popup.opener = null;
  }
}

function beginGoalConfigProcessEdit(processId, processKind) {
  const process = state.goalConfigProcesses.find((item) => item.id === processId);
  if (!process) {
    return;
  }

  const suffix = processKind === "confirm" ? "确认流程" : "评分流程";
  copyTextBestEffort(`${process.name}-${suffix}`);
  showToast("已复制成功");
  clearGoalConfigPanels();

  if (state.goalConfig.processGuideDismissed) {
    openGoalConfigProcessEditor();
    return;
  }

  state.overlay = buildGoalConfigProcessGuideOverlay(processId, processKind, 1, false);
}

function completeGoalConfigProcessGuide() {
  if (!state.overlay || state.overlay.type !== "goal-config-process-guide") {
    return;
  }

  if (state.overlay.dontRemind) {
    state.goalConfig.processGuideDismissed = true;
  }

  state.overlay = null;
  openGoalConfigProcessEditor();
}

function buildGoalConfigProcessConfirmOverlay(processIds) {
  return {
    type: "confirm",
    scope: "goal-config-process",
    processIds,
    title: "确认删除流程",
    summary: `本次将删除 ${processIds.length} 个流程。`,
    description: "删除后对应目标会自动回退到默认流程，操作不可恢复。",
  };
}

function buildResetDemoConfirmOverlay(step = 1) {
  return {
    type: "confirm",
    scope: step === 1 ? "demo-reset-step-1" : "demo-reset-step-2",
    title: step === 1 ? "确认重置演示数据" : "再次确认重置",
    summary:
      step === 1
        ? "将清空当前演示页面的本地缓存。"
        : "重置后会恢复到默认演示数据，并刷新页面。",
    description:
      step === 1
        ? "这会清除当前 demo 的浏览器本地缓存，适合重新开始测试。"
        : "确认后会删除 okr-inprogress-demo 的本地缓存键并刷新当前页面。",
  };
}

function getStartGoalOverlay(overlay = state.overlay) {
  return {
    type: "start-goal",
    source: "goal-config",
    selectedIds: [],
    periodType: START_GOAL_PERIOD_TYPE_OPTIONS[0].key,
    period: START_GOAL_PERIOD_OPTIONS[0],
    groupId: "all",
    ...(overlay || {}),
  };
}

function getStartGoalGroupOptions(source = "goal-config") {
  if (source !== "goal-config") {
    return [{ id: "all", label: "全部分组" }];
  }

  return [
    { id: "all", label: "全部分组" },
    ...state.goalConfigGroups
      .filter((group) => group.kind !== "all" && group.kind !== "recycle")
      .map((group) => ({
        id: group.id,
        label: group.label,
      })),
  ];
}

function getStartGoalVisibleGoals(overlay = state.overlay) {
  const nextOverlay = getStartGoalOverlay(overlay);
  let goals = getGoalConfigLaunchGoals();

  if (nextOverlay.groupId !== "all") {
    goals = goals.filter((goal) => goal.groupId === nextOverlay.groupId);
  }

  return goals;
}

function getStartGoalSelectedGoals(overlay = state.overlay) {
  const nextOverlay = getStartGoalOverlay(overlay);
  const allGoals = new Map(getGoalConfigLaunchGoals().map((goal) => [goal.id, goal]));
  return (nextOverlay.selectedIds || []).map((id) => allGoals.get(id)).filter(Boolean);
}

function createGoalInstanceKeyResults(goalTypeKey, krs = [], mode = "confirming") {
  return krs.map((kr, index) => {
    const base = {
      title: `KR${index + 1}: ${kr.title}`,
    };

    if (mode === "confirming") {
      return {
        ...base,
        value: "待确认",
        score: "等待确认审批",
      };
    }

    if (mode === "executing") {
      return {
        ...base,
        value: "待填报",
        score: goalTypeKey === "manual" ? "待人工评分" : "待推进评分",
      };
    }

    const resultValue =
      goalTypeKey === "manual"
        ? "已完成"
        : kr.challenge || kr.passing || kr.threshold || "已完成";
    return {
      ...base,
      value: resultValue,
      score: goalTypeKey === "manual" ? "人工评分 3.2分" : "自动评分 3.2分",
    };
  });
}

function createManagementGoalInstance(template, executorId, launchPeriod) {
  const createdAt = new Date().toISOString();
  return {
    id: createRuntimeId("goal-instance"),
    templateId: template.id,
    title: template.title,
    stage: "confirming",
    executorId,
    executor: goalConfigExecutorLabel(executorId),
    period: formatLaunchPeriod(launchPeriod),
    department: template.groupLabel || "目标配置",
    createdAt,
    score: 0,
    scoreText: "-",
    currentValue: "待确认",
    approvalNo: createApprovalNo(),
    goalType: template.goalType,
    goalTypeKey: template.type,
    flow: template.flow,
    alignedGoal: template.alignedGoal || "",
    templateKrs: clone(template.krs || []),
    keyResults: createGoalInstanceKeyResults(template.type, template.krs, "confirming"),
  };
}

function createPendingTaskFromGoal(goal, stage = goal.stage) {
  return {
    id: goal.id,
    templateId: goal.templateId,
    title: goal.title,
    stage,
    executorId: goal.executorId,
    executor: goal.executor,
    arrivedAt: formatDateOnly(),
    period: goal.period,
    department: goal.department,
    createdAt: goal.createdAt,
    currentValue: stage === "rating" ? "待评分" : "待确认",
    approvalNo: goal.approvalNo,
    processType: stage === "rating" ? "目标评分审批" : "目标确认审批",
    goalType: goal.goalType,
    goalTypeKey: goal.goalTypeKey,
    flow: goal.flow,
    alignedGoal: goal.alignedGoal,
    templateKrs: clone(goal.templateKrs || []),
    keyResults: createGoalInstanceKeyResults(goal.goalTypeKey || "auto", goal.templateKrs || [], stage),
  };
}

function convertGoalToExecuting(goal) {
  const nextKeyResults = createGoalInstanceKeyResults(goal.goalTypeKey || "auto", goal.templateKrs || [], "executing");
  return {
    ...goal,
    stage: "executing",
    currentValue: nextKeyResults.map((item, index) => `KR${index + 1} ${item.value}`).join(" | "),
    keyResults: nextKeyResults,
  };
}

function convertGoalToRating(goal) {
  return {
    ...goal,
    stage: "rating",
    currentValue: "待评分",
    keyResults: createGoalInstanceKeyResults(goal.goalTypeKey || "auto", goal.templateKrs || [], "executing").map(
      (item) => ({
        ...item,
        score: "等待评分审批",
      })
    ),
  };
}

function createMyExecutingGoalFromGoal(goal) {
  return {
    id: goal.id,
    title: goal.title,
    executorId: goal.executorId,
    period: goal.period,
    createdAt: goal.createdAt,
    totalScore: "--",
    krs: (goal.templateKrs || []).map((kr, index) => ({
      label: `KR ${index + 1}`,
      title: kr.title,
      threshold: goal.goalTypeKey === "auto" ? kr.threshold || "-" : "-",
      passing: goal.goalTypeKey === "auto" ? kr.passing || "-" : "-",
      challenge: goal.goalTypeKey === "auto" ? kr.challenge || "-" : "-",
      current: "待填写",
      weight: goal.goalTypeKey === "manual" ? "-" : kr.weight || "0%",
      score: "--",
    })),
  };
}

function createCompletedGoalFromGoal(goal) {
  return {
    id: goal.id,
    templateId: goal.templateId,
    title: goal.title,
    goalType: goal.goalType || getGoalConfigTypeLabel(goal.goalTypeKey || "auto"),
    goalTypeKey: goal.goalTypeKey || "auto",
    executorId: goal.executorId,
    executor: goal.executor,
    scoreValue: 3.2,
    scoreText: "3.2分",
    period: goal.period,
    department: goal.department,
    createdAt: new Date().toISOString(),
    stage: "rating",
    currentValue: "已完成",
    approvalNo: goal.approvalNo,
    templateKrs: clone(goal.templateKrs || []),
    keyResults: createGoalInstanceKeyResults(goal.goalTypeKey || "auto", goal.templateKrs || [], "completed"),
  };
}

function createMyCompletedGoalFromGoal(goal) {
  return {
    id: goal.id,
    title: goal.title,
    executorId: goal.executorId,
    period: goal.period,
    createdAt: new Date().toISOString(),
    totalScore: "3.2",
    krs: (goal.templateKrs || []).map((kr, index) => ({
      label: `KR ${index + 1}`,
      title: kr.title,
      threshold: goal.goalTypeKey === "auto" ? kr.threshold || "-" : "-",
      passing: goal.goalTypeKey === "auto" ? kr.passing || "-" : "-",
      challenge: goal.goalTypeKey === "auto" ? kr.challenge || "-" : "-",
      result:
        goal.goalTypeKey === "manual"
          ? "已完成"
          : kr.challenge || kr.passing || kr.threshold || "已完成",
      weight: goal.goalTypeKey === "manual" ? "-" : kr.weight || "0%",
      score: "3.2",
    })),
  };
}

function clearGoalConfigPanels() {
  state.goalConfig.groupMenuId = null;
  state.goalConfig.cardMenuId = null;
  state.goalConfig.processMenuId = null;
}

function resetMyGoalListState(tabKey = getMyGoalTabKey()) {
  setMyGoalPage(1, tabKey);
  state.openDropdown = null;
  state.openRowMenu = null;
}

function closeTransientPanels() {
  state.openDropdown = null;
  state.openRowMenu = null;
  clearGoalConfigPanels();
  cancelGoalConfigProcessEditing();
}

function showToast(message) {
  state.toast = message;
  syncToast();
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    state.toast = "";
    syncToast();
  }, TOAST_DURATION);
}

function syncToast() {
  if (!(app instanceof HTMLElement)) {
    return;
  }

  const existingToast = app.querySelector(".toast");
  if (!state.toast) {
    existingToast?.remove();
    return;
  }

  if (existingToast instanceof HTMLElement) {
    existingToast.textContent = state.toast;
    return;
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = state.toast;
  app.appendChild(toast);
}

function stageTag(goal) {
  const meta = STAGE_META[goal.stage];
  return `<span class="stage-tag ${meta.className}">${meta.label}</span>`;
}

function pendingStageTag(goal) {
  const meta = MY_GOAL_STAGE_META[goal.stage] || MY_GOAL_STAGE_META.executing;
  return `<span class="pending-stage-tag ${meta.className}">${meta.label}</span>`;
}

function renderCheckbox(checkboxState, attrs = "") {
  return `
    <button class="checkbox ${checkboxState === "checked" ? "is-checked" : ""} ${checkboxState === "partial" ? "is-partial" : ""}" type="button" ${attrs}>
      ${
        checkboxState === "checked"
          ? '<img src="./assets/check.svg" alt="" />'
          : checkboxState === "partial"
            ? '<span class="checkbox-bar"></span>'
            : ""
      }
    </button>
  `;
}

function renderCheckboxIndicator(checkboxState) {
  return `
    <span class="checkbox ${checkboxState === "checked" ? "is-checked" : ""} ${checkboxState === "partial" ? "is-partial" : ""}" aria-hidden="true">
      ${
        checkboxState === "checked"
          ? '<img src="./assets/check.svg" alt="" />'
          : checkboxState === "partial"
            ? '<span class="checkbox-bar"></span>'
            : ""
      }
    </span>
  `;
}

function renderArrow(direction, className = "") {
  return `<span class="ui-arrow ui-arrow-${direction} ${className}" aria-hidden="true"></span>`;
}

function renderBreadcrumbSeparator() {
  return `
    <span class="breadcrumb-separator" aria-hidden="true">
      <svg class="breadcrumb-separator-icon" viewBox="0 0 5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75L4.25 4.25L0.75 7.75" stroke="#8F959E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  `;
}

function renderDropdowns(tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const filters = getActiveFilters(currentTab);
  return {
    period:
      state.openDropdown === "period"
        ? `
        <div class="dropdown-panel">
          <button class="dropdown-option ${filters.period === "all" ? "is-active" : ""}" data-action="set-period" data-value="all" type="button">全部周期</button>
          ${getPeriodOptions(currentTab)
            .map(
              (option) => `
                <button class="dropdown-option ${filters.period === option.period ? "is-active" : ""}" data-action="set-period" data-value="${escapeHtml(option.period)}" type="button">
                  ${escapeHtml(option.period)}（${option.count}）
                </button>
              `
            )
            .join("")}
        </div>
      `
        : "",
    type:
      currentTab === "completed" && state.openDropdown === "type"
        ? `
        <div class="dropdown-panel">
          ${COMPLETED_TYPE_OPTIONS.map(
            (option) => `
              <button class="dropdown-option ${filters.type === option.key ? "is-active" : ""}" data-action="set-type" data-value="${option.key}" type="button">
                ${option.label}
              </button>
            `
          ).join("")}
        </div>
      `
        : "",
    members:
      state.openDropdown === "members"
        ? `
        <div class="dropdown-panel member-dropdown">
          <div class="member-heading">选择成员或部门，部门会自动包含子部门成员</div>
          ${MEMBER_OPTIONS.map((option) => {
            const active = filters.members.includes(option.key);
            return `
              <button class="dropdown-option" data-action="toggle-member" data-value="${option.key}" type="button">
                ${renderCheckboxIndicator(active ? "checked" : "unchecked")}
                <span class="dropdown-meta">
                  <span>${escapeHtml(option.label)}</span>
                  <span class="dropdown-subtext">${escapeHtml(option.subtext)}</span>
                </span>
              </button>
            `;
          }).join("")}
        </div>
      `
        : "",
    pageSize:
      state.openDropdown === "page-size"
        ? `
        <div class="dropdown-panel">
          ${PAGE_SIZE_OPTIONS.map(
            (size) => `
              <button class="dropdown-option ${state.pageSize === size ? "is-active" : ""}" data-action="set-page-size" data-value="${size}" type="button">
                ${size} / 页
              </button>
            `
          ).join("")}
        </div>
      `
        : "",
  };
}

function renderMyGoalsDropdowns(tabKey = getMyGoalTabKey()) {
  const currentTab = getMyGoalTabKey(tabKey);
  const filters = getMyGoalFilters(currentTab);
  return {
    period:
      state.openDropdown === "my-goal-period"
        ? `
        <div class="dropdown-panel">
          <button class="dropdown-option ${filters.period === "all" ? "is-active" : ""}" data-action="set-my-goal-period" data-value="all" type="button">全部周期</button>
          ${getMyGoalPeriodOptions(currentTab)
            .map(
              (option) => `
                <button class="dropdown-option ${filters.period === option.period ? "is-active" : ""}" data-action="set-my-goal-period" data-value="${escapeHtml(option.period)}" type="button">
                  ${escapeHtml(option.period)}（${option.count}）
                </button>
              `
            )
            .join("")}
        </div>
      `
        : "",
    pageSize:
      state.openDropdown === "my-goal-page-size"
        ? `
        <div class="dropdown-panel">
          ${PAGE_SIZE_OPTIONS.map(
            (size) => `
              <button class="dropdown-option ${state.pageSize === size ? "is-active" : ""}" data-action="set-my-goal-page-size" data-value="${size}" type="button">
                ${size} / 页
              </button>
            `
          ).join("")}
        </div>
      `
        : "",
  };
}

function renderSidebar() {
  const renderSidebarIcon = (icon) => `
    <span class="menu-icon-wrap">
      <span class="menu-icon-frame"><img src="./assets/${icon}" alt="" /></span>
    </span>
  `;
  const renderModuleButton = (item, isActive) => `
    <button
      class="menu-item menu-item-button ${isActive ? "is-active" : ""}"
      data-action="navigate-page"
      data-value="${item.pageKey}"
      type="button"
      title="${item.label}"
      aria-label="${item.label}"
    >
      <div class="menu-item-top">
        ${renderSidebarIcon(item.icon)}
        <span class="menu-label">${item.label}</span>
      </div>
    </button>
  `;
  const renderSidebarGroup = (group, isActive, expanded, collapsedBadge = "") => `
    <div class="sidebar-group sidebar-group-${group.key}">
      <div class="sidebar-goal-wrap">
        <button
          class="menu-item menu-item-button sidebar-goal-button ${isActive ? "is-active" : ""}"
          data-action="toggle-sidebar-group"
          data-value="${group.key}"
          type="button"
          title="${group.label}"
          aria-label="${group.label}"
        >
          <div class="menu-item-top">
            ${renderSidebarIcon(group.icon)}
            <span class="menu-label">${group.label}</span>
          </div>
          ${collapsedBadge}
          <span class="menu-expand">${renderArrow(expanded ? "down" : "right", "ui-arrow-sm")}</span>
        </button>
        ${
          isSidebarCollapsed
            ? `
              <div class="dropdown-panel sidebar-goal-popover">
                <div class="sidebar-goal-popover-title">${group.label}</div>
                ${group.items
                  .map(
                    (item) => `
                      <button class="dropdown-option ${state.activePage === item.pageKey ? "is-active" : ""}" data-action="navigate-page" data-value="${item.pageKey}" type="button">
                        ${item.label}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      </div>

      <div class="submenu-list ${expanded ? "is-open" : ""}">
        ${group.items
          .map(
            (item) => `
              <button class="submenu-item ${state.activePage === item.pageKey ? "is-active" : ""}" data-action="navigate-page" data-value="${item.pageKey}" type="button">
                <span class="submenu-label">${item.label}</span>
                ${group.key === "goal" && item.pageKey === "my-goals" ? pendingGoalBadge : ""}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
  const isSidebarCollapsed = !!state.sidebarCollapsed;
  const pendingGoalBadge = renderPendingGoalBadge();
  const collapsedPendingGoalBadge = renderPendingGoalBadge("is-collapsed");

  return `
    <aside class="sidebar ${isSidebarCollapsed ? "is-collapsed" : ""}">
      <div class="sidebar-inner">
        <div class="sidebar-menu">
          ${SIDEBAR_PRIMARY_MODULES
            .map(
              (item) => renderModuleButton(item, state.activePage === item.pageKey)
            )
            .join("")}

          ${SIDEBAR_GROUPS
            .map(
              (group) =>
                renderSidebarGroup(
                  group,
                  group.pageKeys.includes(state.activePage),
                  isSidebarGroupExpanded(group.key),
                  group.key === "goal" ? collapsedPendingGoalBadge : ""
                )
            )
            .join("")}
        </div>

        <div class="sidebar-footer">
          <button class="collapse-button ${isSidebarCollapsed ? "is-collapsed" : ""}" data-action="collapse-nav" type="button" aria-label="${isSidebarCollapsed ? "展开导航" : "收起导航"}" title="${isSidebarCollapsed ? "展开导航" : "收起导航"}">
            <img src="./assets/collapse.svg" alt="" />
            <span>收起导航</span>
          </button>
        </div>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <button class="brand" data-action="request-demo-reset" type="button" aria-label="重置演示缓存">
        <img class="brand-logo" src="./assets/logo.png" alt="Teams OKR" />
        <div class="brand-name">Teams OKR</div>
      </button>
      <div class="topbar-right">
        <button class="icon-button" type="button"><img src="./assets/help.svg" alt="" /></button>
        <button class="icon-button" type="button"><img src="./assets/bell.svg" alt="" /></button>
        <div class="user-chip">
          <div class="avatar">支</div>
          <div class="user-meta">
            <div class="user-name">焰柏</div>
            <div class="role-tag">主管理员</div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderOngoingFilterRow(filteredGoals) {
  const filters = getActiveFilters("ongoing");
  const dropdowns = renderDropdowns("ongoing");
  const advanceState = getAdvanceActionState(filteredGoals, "ongoing");
  return `
    <div class="filter-row">
      <div class="filter-left">
        <label class="search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="keyword" type="text" value="${escapeHtml(filters.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-period control-auto">
          <button class="control-button" data-action="toggle-dropdown" data-value="period" type="button">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.period}
        </div>

        <div class="control control-members control-auto">
          <button class="control-button" data-action="toggle-dropdown" data-value="members" type="button">
            <span class="truncate">${escapeHtml(memberLabel())}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.members}
        </div>

        <div class="segmented control-stage">
          ${[
            { key: "all", label: "全部" },
            { key: "confirming", label: "确认中" },
            { key: "executing", label: "执行中" },
            { key: "rating", label: "评分中" },
          ]
            .map(
              (item) => `
                <button class="segment ${filters.stage === item.key ? "is-active" : ""}" data-action="set-stage" data-value="${item.key}" type="button">
                  ${item.label}
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="primary-action-wrap ${advanceState.tooltip ? "has-guide" : ""}">
        ${
          advanceState.tooltip
            ? `
              <div class="primary-action-guide" aria-hidden="true">${escapeHtml(advanceState.tooltip)}</div>
              <div class="primary-action-guide-arrow" aria-hidden="true"></div>
            `
            : ""
        }
        <button
          class="primary-action ${advanceState.isExecutingStage ? "is-enabled" : ""}"
          data-action="advance-all"
          type="button"
          aria-disabled="${advanceState.isExecutingStage ? "false" : "true"}"
        >
          推进评分
        </button>
      </div>
    </div>
  `;
}

function renderCompletedFilterRow() {
  const filters = getActiveFilters("completed");
  const dropdowns = renderDropdowns("completed");
  return `
    <div class="filter-row">
      <div class="filter-left">
        <label class="search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="keyword" type="text" value="${escapeHtml(filters.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-period control-auto">
          <button class="control-button" data-action="toggle-dropdown" data-value="period" type="button">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.period}
        </div>

        <div class="control control-members control-auto">
          <button class="control-button" data-action="toggle-dropdown" data-value="members" type="button">
            <span class="truncate">${escapeHtml(memberLabel("completed"))}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.members}
        </div>

        <div class="control control-type control-auto">
          <button class="control-button" data-action="toggle-dropdown" data-value="type" type="button">
            <span class="truncate">${escapeHtml(
              (COMPLETED_TYPE_OPTIONS.find((option) => option.key === filters.type) || COMPLETED_TYPE_OPTIONS[0]).label
            )}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.type}
        </div>
      </div>
    </div>
  `;
}

function renderRowMenu(goal) {
  if (state.openRowMenu !== goal.id) {
    return "";
  }
  return `
    <div class="row-menu">
      ${
        goal.stage === "executing"
          ? `<button class="dropdown-option" data-action="request-advance" data-value="${goal.id}" type="button">推进评分</button>`
          : ""
      }
      <button class="dropdown-option danger" data-action="request-delete" data-value="${goal.id}" type="button">删除</button>
    </div>
  `;
}

function renderEmptyState(message) {
  return `
    <div class="table-empty">
      <div class="empty-illustration"></div>
      <div class="empty-title">${escapeHtml(message)}</div>
    </div>
  `;
}

function renderGoalTypeTag(goal) {
  return `<span class="goal-type-tag">${escapeHtml(goal.goalType || "自动评分")}</span>`;
}

function renderPagination(filteredGoals, totalPages, currentPage, tabKey = getTabKey()) {
  const dropdowns = renderDropdowns(tabKey);
  return `
    <div class="pagination">
      <div class="pagination-total">共 ${filteredGoals.length} 条</div>
      <div class="pagination-controls">
        <button class="page-button" data-action="page-prev" type="button" ${currentPage <= 1 ? "disabled" : ""}>
          ${renderArrow("left", "ui-arrow-xs")}
        </button>
        <div class="page-current">${currentPage}</div>
        <button class="page-button" data-action="page-next" type="button" ${currentPage >= totalPages ? "disabled" : ""}>
          ${renderArrow("right", "ui-arrow-xs")}
        </button>
      </div>
      <div class="page-size">
        <button class="page-size-button" data-action="toggle-dropdown" data-value="page-size" type="button">
          <span>${state.pageSize} / 页</span>
          ${renderArrow("down", "ui-arrow-xs")}
        </button>
        ${dropdowns.pageSize}
      </div>
    </div>
  `;
}

function renderOngoingTable(filteredGoals) {
  const tabKey = "ongoing";
  const { items: pageGoals, totalPages, page } = getPagedGoals(filteredGoals, tabKey);
  const headerState = getHeaderCheckboxState(pageGoals, tabKey);
  const selectedIds = getActiveSelection(tabKey);
  const shouldShowBatch = selectedIds.length > 0;

  return `
    <div class="table-region">
      <div class="table-shell">
      <div class="table-header table-grid-ongoing">
        <div class="cell checkbox-wrap">
          ${renderCheckbox(headerState, 'data-action="toggle-select-all"')}
        </div>
        <div class="cell header-title">目标名称</div>
        <div class="cell">阶段类型</div>
        <div class="cell">执行人</div>
        <div class="cell">周期</div>
        <div class="cell header-actions">操作</div>
      </div>

      <div class="table-body">
      ${
        pageGoals.length
          ? pageGoals
              .map((goal) => {
                const checked = selectedIds.includes(goal.id);
                return `
                  <div class="table-row table-grid-ongoing ${checked ? "is-selected" : ""}">
                    <div class="cell checkbox-wrap">
                      ${renderCheckbox(checked ? "checked" : "unchecked", `data-action="toggle-select-row" data-value="${goal.id}"`)}
                    </div>
                    <div class="cell cell-title">
                      <span class="truncate" title="${escapeHtml(goal.title)}">${escapeHtml(goal.title)}</span>
                    </div>
                    <div class="cell">${stageTag(goal)}</div>
                    <div class="cell cell-executor">
                      <span class="truncate">${escapeHtml(goal.executor)}</span>
                    </div>
                    <div class="cell cell-period">
                      <span class="truncate" title="${escapeHtml(goal.period)}">${escapeHtml(goal.period)}</span>
                    </div>
                    <div class="cell cell-actions">
                      <button class="link-action" data-action="view-goal" data-value="${goal.id}" type="button">查看</button>
                      <button class="more-button row-menu-trigger" data-action="toggle-row-menu" data-value="${goal.id}" type="button" aria-label="更多操作">
                        <span class="more-dot"></span>
                        <span class="more-dot"></span>
                        <span class="more-dot"></span>
                      </button>
                      ${renderRowMenu(goal)}
                    </div>
                  </div>
                `;
              })
              .join("")
          : renderEmptyState(getActiveGoalList(tabKey).length === 0 ? "暂无进行中的目标" : "未找到符合条件目标")
      }
      </div>
      </div>

      <div class="footer-row">
        <div class="batch-actions">
          ${
            shouldShowBatch && canAdvanceSelection(tabKey)
              ? '<button class="ghost-button" data-action="advance-batch" type="button">批量推进评分</button>'
              : ""
          }
          ${
            shouldShowBatch
              ? '<button class="danger-button" data-action="delete-batch" type="button">删除目标</button>'
              : ""
          }
        </div>

        ${renderPagination(filteredGoals, totalPages, page, tabKey)}
      </div>
    </div>
  `;
}

function renderCompletedTable(filteredGoals) {
  const tabKey = "completed";
  const { items: pageGoals, totalPages, page } = getPagedGoals(filteredGoals, tabKey);
  const headerState = getHeaderCheckboxState(pageGoals, tabKey);
  const selectedIds = getActiveSelection(tabKey);
  const shouldShowDelete = selectedIds.length > 0;

  return `
    <div class="table-region">
      <div class="table-shell">
        <div class="table-header table-grid-completed">
          <div class="cell checkbox-wrap">
            ${renderCheckbox(headerState, 'data-action="toggle-select-all"')}
          </div>
          <div class="cell header-title">目标名称</div>
          <div class="cell">目标类型</div>
          <div class="cell">执行人</div>
          <div class="cell">得分</div>
          <div class="cell">周期</div>
          <div class="cell header-actions">操作</div>
        </div>

        <div class="table-body">
          ${
            pageGoals.length
              ? pageGoals
                  .map((goal) => {
                    const checked = selectedIds.includes(goal.id);
                    return `
                      <div class="table-row table-grid-completed ${checked ? "is-selected" : ""}">
                        <div class="cell checkbox-wrap">
                          ${renderCheckbox(checked ? "checked" : "unchecked", `data-action="toggle-select-row" data-value="${goal.id}"`)}
                        </div>
                        <div class="cell cell-title">
                          <span class="truncate" title="${escapeHtml(goal.title)}">${escapeHtml(goal.title)}</span>
                        </div>
                        <div class="cell">${renderGoalTypeTag(goal)}</div>
                        <div class="cell cell-executor">
                          <span class="truncate">${escapeHtml(goal.executor)}</span>
                        </div>
                        <div class="cell">
                          <span class="truncate">${escapeHtml(goal.scoreText || "-")}</span>
                        </div>
                        <div class="cell cell-period">
                          <span class="truncate" title="${escapeHtml(goal.period)}">${escapeHtml(goal.period)}</span>
                        </div>
                        <div class="cell cell-actions">
                          <button class="link-action" data-action="view-goal" data-value="${goal.id}" type="button">查看</button>
                          <button class="more-button row-menu-trigger" data-action="toggle-row-menu" data-value="${goal.id}" type="button" aria-label="更多操作">
                            <span class="more-dot"></span>
                            <span class="more-dot"></span>
                            <span class="more-dot"></span>
                          </button>
                          ${renderRowMenu(goal)}
                        </div>
                      </div>
                    `;
                  })
                  .join("")
              : renderEmptyState(getActiveGoalList(tabKey).length === 0 ? "暂无已完成目标" : "未找到符合条件目标")
          }
        </div>
      </div>

      <div class="footer-row">
        <div class="batch-actions">
          ${shouldShowDelete ? '<button class="danger-button" data-action="delete-batch" type="button">删除目标</button>' : ""}
        </div>

        ${renderPagination(filteredGoals, totalPages, page, tabKey)}
      </div>
    </div>
  `;
}

function renderMyGoalPagination(filteredGoals, totalPages, currentPage, tabKey = getMyGoalTabKey()) {
  const dropdowns = renderMyGoalsDropdowns(tabKey);
  return `
    <div class="pagination">
      <div class="pagination-total">共 ${filteredGoals.length} 条</div>
      <div class="pagination-controls">
        <button class="page-button" data-action="my-goal-page-prev" type="button" ${currentPage <= 1 ? "disabled" : ""}>
          ${renderArrow("left", "ui-arrow-xs")}
        </button>
        <div class="page-current">${currentPage}</div>
        <button class="page-button" data-action="my-goal-page-next" type="button" ${currentPage >= totalPages ? "disabled" : ""}>
          ${renderArrow("right", "ui-arrow-xs")}
        </button>
      </div>
      <div class="page-size">
        <button class="page-size-button" data-action="toggle-my-goal-dropdown" data-value="my-goal-page-size" type="button">
          <span>${state.pageSize} / 页</span>
          ${renderArrow("down", "ui-arrow-xs")}
        </button>
        ${dropdowns.pageSize}
      </div>
    </div>
  `;
}

function renderPendingFilterRow() {
  const filters = getMyGoalFilters("pending");
  const dropdowns = renderMyGoalsDropdowns("pending");
  return `
    <div class="filter-row">
      <div class="filter-left">
        <label class="search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="my-goal-keyword" type="text" value="${escapeHtml(filters.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-period control-auto">
          <button class="control-button" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.period}
        </div>

        <div class="segmented control-stage-pending">
          ${[
            { key: "pending", label: "待处理" },
            { key: "confirming", label: "确认中" },
            { key: "rating", label: "评分中" },
          ]
            .map(
              (item) => `
                <button class="segment ${filters.stage === item.key ? "is-active" : ""}" data-action="set-my-goal-stage" data-value="${item.key}" type="button">
                  ${item.label}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderPendingTable(filteredGoals) {
  const tabKey = "pending";
  const { items: pageGoals, totalPages, page } = getMyGoalPagedGoals(filteredGoals, tabKey);

  return `
    <div class="table-region">
      <div class="table-shell">
        <div class="table-header table-grid-pending">
          <div class="cell">目标名称</div>
          <div class="cell">阶段类型</div>
          <div class="cell">执行人</div>
          <div class="cell">到达时间</div>
          <div class="cell">周期</div>
          <div class="cell header-actions">操作</div>
        </div>

        <div class="table-body">
          ${
            pageGoals.length
              ? pageGoals
                  .map(
                    (goal) => `
                      <div class="table-row table-grid-pending">
                        <div class="cell">
                          <span class="truncate" title="${escapeHtml(goal.title)}">${escapeHtml(goal.title)}</span>
                        </div>
                        <div class="cell">${pendingStageTag(goal)}</div>
                        <div class="cell cell-executor">
                          <span class="truncate">${escapeHtml(goal.executor)}</span>
                        </div>
                        <div class="cell">
                          <span class="truncate">${escapeHtml(goal.arrivedAt)}</span>
                        </div>
                        <div class="cell cell-period">
                          <span class="truncate" title="${escapeHtml(goal.period)}">${escapeHtml(goal.period)}</span>
                        </div>
                        <div class="cell cell-actions">
                          <button class="link-action" data-action="process-pending-goal" data-value="${goal.id}" type="button">处理</button>
                        </div>
                      </div>
                    `
                  )
                  .join("")
              : renderEmptyState(state.pendingGoals.length === 0 ? "暂无待处理的目标" : "未找到匹配的目标")
          }
        </div>
      </div>

      <div class="footer-row">
        <div class="batch-actions"></div>
        ${renderMyGoalPagination(filteredGoals, totalPages, page, tabKey)}
      </div>
    </div>
  `;
}

function renderMetricValue(value) {
  const text = String(value ?? "-");
  const shouldTooltip = text.length > 12;
  if (!shouldTooltip) {
    return `<span class="metric-text">${escapeHtml(text)}</span>`;
  }
  return `
    <span class="metric-tooltip" data-tooltip="${escapeHtml(text)}">
      <span class="metric-text is-truncated" title="${escapeHtml(text)}">${escapeHtml(text)}</span>
    </span>
  `;
}

function renderExecutingFilterRow() {
  const filters = getMyGoalFilters("executing");
  const dropdowns = renderMyGoalsDropdowns("executing");
  return `
    <div class="filter-row">
      <div class="filter-left">
        <label class="search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="my-goal-keyword" type="text" value="${escapeHtml(filters.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-period control-auto">
          <button class="control-button" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.period}
        </div>
      </div>
    </div>
  `;
}

function renderMyCompletedFilterRow() {
  const filters = getMyGoalFilters("completed");
  const dropdowns = renderMyGoalsDropdowns("completed");
  return `
    <div class="filter-row">
      <div class="filter-left">
        <label class="search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="my-goal-keyword" type="text" value="${escapeHtml(filters.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-period control-auto">
          <button class="control-button" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </button>
          ${dropdowns.period}
        </div>
      </div>
    </div>
  `;
}

function renderExecutingCard(goal) {
  return `
    <article class="executing-card">
      <div class="executing-card-head">
        <div class="executing-period-meta">
          <span class="executing-period-label">周期</span>
          <span class="executing-period-divider">-</span>
          <span class="executing-period-value">${escapeHtml(goal.period)}</span>
        </div>
        <div class="executing-metric-head">
          <span>门槛</span>
          <span>及格</span>
          <span>挑战</span>
          <span>当前</span>
          <span>权重</span>
          <span class="align-right">分数</span>
        </div>
      </div>

      <div class="executing-card-body">
        <div class="executing-goal-row">
          <div class="goal-chip">目标</div>
          <div class="executing-goal-title">${escapeHtml(goal.title)}</div>
          <div class="executing-goal-score">${escapeHtml(goal.totalScore)}</div>
        </div>

        <div class="executing-kr-list">
          ${goal.krs
            .map(
              (item) => `
                <div class="executing-kr-row">
                  <div class="executing-kr-text">
                    <span class="kr-chip">${escapeHtml(item.label)}</span>
                    <span class="executing-kr-title">${escapeHtml(item.title)}</span>
                  </div>
                  <div class="executing-metric-cell align-right">${renderMetricValue(item.threshold)}</div>
                  <div class="executing-metric-cell align-right">${renderMetricValue(item.passing)}</div>
                  <div class="executing-metric-cell align-right">${renderMetricValue(item.challenge)}</div>
                  <div class="executing-metric-cell align-right">${renderMetricValue(item.current)}</div>
                  <div class="executing-metric-cell align-right">
                    <span class="weight-chip">${escapeHtml(item.weight)}</span>
                  </div>
                  <div class="executing-metric-cell align-right executing-score-cell">${renderMetricValue(item.score)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderCompletedCard(goal) {
  return `
    <article class="executing-card">
      <div class="executing-card-head">
        <div class="executing-period-meta">
          <span class="executing-period-label">周期</span>
          <span class="executing-period-divider">-</span>
          <span class="executing-period-value">${escapeHtml(goal.period)}</span>
        </div>
        <div class="executing-metric-head">
          <span>门槛</span>
          <span>及格</span>
          <span>挑战</span>
          <span>结果</span>
          <span>权重</span>
          <span>得分</span>
        </div>
      </div>

      <div class="executing-card-body">
        <div class="executing-goal-row">
          <div class="goal-chip">目标</div>
          <div class="executing-goal-title">${escapeHtml(goal.title)}</div>
          <div class="executing-goal-score">${escapeHtml(goal.totalScore)}</div>
        </div>

        <div class="executing-kr-list">
          ${goal.krs
            .map(
              (item) => `
                <div class="executing-kr-row">
                  <div class="executing-kr-text">
                    <span class="kr-chip">${escapeHtml(item.label)}</span>
                    <span class="executing-kr-title">${escapeHtml(item.title)}</span>
                  </div>
                  <div class="executing-metric-cell">${renderMetricValue(item.threshold)}</div>
                  <div class="executing-metric-cell">${renderMetricValue(item.passing)}</div>
                  <div class="executing-metric-cell">${renderMetricValue(item.challenge)}</div>
                  <div class="executing-metric-cell">${renderMetricValue(item.result)}</div>
                  <div class="executing-metric-cell">
                    <span class="weight-chip">${escapeHtml(item.weight)}</span>
                  </div>
                  <div class="executing-metric-cell executing-score-cell">${renderMetricValue(item.score)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderExecutingCards(filteredGoals) {
  const tabKey = "executing";
  const { items: pageGoals, totalPages, page } = getMyGoalPagedGoals(filteredGoals, tabKey);

  return `
    <div class="executing-region">
      <div class="executing-list">
        ${
          pageGoals.length
            ? pageGoals.map((goal) => renderExecutingCard(goal)).join("")
            : renderEmptyState(state.myExecutingGoals.length === 0 ? "暂无执行中的目标" : "未找到匹配的目标")
        }
      </div>

      <div class="footer-row">
        <div class="batch-actions"></div>
        ${renderMyGoalPagination(filteredGoals, totalPages, page, tabKey)}
      </div>
    </div>
  `;
}

function renderCompletedCards(filteredGoals) {
  const tabKey = "completed";
  const { items: pageGoals, totalPages, page } = getMyGoalPagedGoals(filteredGoals, tabKey);

  return `
    <div class="executing-region">
      <div class="executing-list">
        ${
          pageGoals.length
            ? pageGoals.map((goal) => renderCompletedCard(goal)).join("")
            : renderEmptyState(state.myCompletedGoals.length === 0 ? "暂无已完成的目标" : "未找到匹配的目标")
        }
      </div>

      <div class="footer-row">
        <div class="batch-actions"></div>
        ${renderMyGoalPagination(filteredGoals, totalPages, page, tabKey)}
      </div>
    </div>
  `;
}

function renderMyGoalsPlaceholder(tabKey) {
  const labelMap = {
    completed: "已完成",
  };
  const label = labelMap[tabKey] || "当前";
  return `
    <div class="completed-placeholder">
      <div class="completed-card">
        <h3>${label}页待补充</h3>
        <p>这次已经按 Figma 完成了“待处理”和“执行中”页，${label}页保留了真实 Tab 入口，后续可以继续补。</p>
      </div>
    </div>
  `;
}

function renderDevelopingPage(pageKey) {
  const label = GOAL_PAGE_LABELS[pageKey] || "当前页面";
  const groupKey = getSidebarGroupKeyByPage(pageKey);
  const parentLabel =
    groupKey === "goal"
      ? "目标模块"
      : groupKey === "plan"
        ? GOAL_PAGE_LABELS["plan-module"]
        : groupKey === "brief"
          ? GOAL_PAGE_LABELS["brief-module"]
          : groupKey === "stats"
            ? GOAL_PAGE_LABELS["stats-module"]
            : groupKey === "settings"
              ? GOAL_PAGE_LABELS["settings-module"]
              : "";
  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            ${
              parentLabel
                ? `
                  <span class="breadcrumb-segment">
                    <span class="breadcrumb-item">${parentLabel}</span>
                  </span>
                  ${renderBreadcrumbSeparator()}
                `
                : ""
            }
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active">${label}</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="completed-placeholder">
            <div class="completed-card">
              <h3>${label} 待开发</h3>
              <p>${label}页面入口已经开放，当前版本先保留提示页，方便继续验收导航流转和整体视觉。</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderGoalConfigSvgIcon(className, viewBox, content) {
  return `<svg class="${className}" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${content}</svg>`;
}

function renderGoalConfigTreeIcon(group) {
  const hasChildren = getGoalConfigChildren(group.id).length > 0;
  const isExpanded = state.goalConfig.expandedGroupIds.includes(group.id);

  if (group.kind === "all") {
    return renderGoalConfigSvgIcon(
      "goal-config-tree-icon-svg is-all",
      "0 0 13.3333 13.3333",
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.33333C0 0.596954 0.596954 0 1.33333 0H4.66667C5.40305 0 6 0.596954 6 1.33333V4.66667C6 5.40305 5.40305 6 4.66667 6H1.33333C0.596954 6 0 5.40305 0 4.66667V1.33333ZM4.66667 1.33333H1.33333V4.66667H4.66667V1.33333ZM7.33333 1.33333C7.33333 0.596954 7.93029 0 8.66667 0H12C12.7364 0 13.3333 0.596954 13.3333 1.33333V4.66667C13.3333 5.40305 12.7364 6 12 6H8.66667C7.93029 6 7.33333 5.40305 7.33333 4.66667V1.33333ZM12 1.33333H8.66667V4.66667H12V1.33333ZM0 8.66667C0 7.93029 0.596954 7.33333 1.33333 7.33333H4.66667C5.40305 7.33333 6 7.93029 6 8.66667V12C6 12.7364 5.40305 13.3333 4.66667 13.3333H1.33333C0.596954 13.3333 0 12.7364 0 12V8.66667ZM4.66667 8.66667H1.33333V12H4.66667V8.66667ZM7.33333 8.66667C7.33333 7.93029 7.93029 7.33333 8.66667 7.33333H12C12.7364 7.33333 13.3333 7.93029 13.3333 8.66667V12C13.3333 12.7364 12.7364 13.3333 12 13.3333H8.66667C7.93029 13.3333 7.33333 12.7364 7.33333 12V8.66667ZM12 8.66667H8.66667V12H12V8.66667Z" fill="currentColor"/>'
    );
  }

  if (group.kind === "recycle") {
    return renderGoalConfigSvgIcon(
      "goal-config-tree-icon-svg is-recycle",
      "0 0 13.3334 13.6667",
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.49829 0.227664C2.62488 0.082987 2.80777 0 3.00001 0H10.3333C10.5256 0 10.7085 0.082987 10.8351 0.227664L13.1684 2.89433C13.3119 3.05832 13.3606 3.27278 13.3191 3.47079C13.3285 3.53472 13.3333 3.60012 13.3333 3.66667V12.3333C13.3333 13.0697 12.7364 13.6667 12 13.6667H1.33334C0.596963 13.6667 9.15177e-06 13.0697 9.15177e-06 12.3333V3.66667C9.15177e-06 3.60012 0.00488362 3.53472 0.014295 3.47079C-0.0272691 3.27278 0.0214648 3.05832 0.164958 2.89433L2.49829 0.227664ZM2.42752 2.33333H10.9058L10.0308 1.33333H3.30252L2.42752 2.33333ZM12 3.66667H1.33334V12.3333H12V3.66667ZM3.98328 7.00277C3.98328 6.63458 4.28175 6.3361 4.64994 6.3361H8.64994C9.01813 6.3361 9.31661 6.63458 9.31661 7.00277C9.31661 7.37096 9.01813 7.66943 8.64994 7.66943H4.64994C4.28175 7.66943 3.98328 7.37096 3.98328 7.00277Z" fill="currentColor" fill-opacity="0.85"/>'
    );
  }

  if (hasChildren) {
    return renderGoalConfigSvgIcon(
      `goal-config-tree-icon-svg is-expand goal-config-tree-caret ${isExpanded ? "is-expanded" : ""}`,
      "0 0 9.33337 5.33333",
      '<path d="M0.666686 0C0.397045 0 0.153954 0.162428 0.0507665 0.411544C-0.0524209 0.660661 0.00461628 0.947406 0.195282 1.13807L4.19528 5.13807C4.45563 5.39842 4.87774 5.39842 5.13809 5.13807L9.13809 1.13807C9.32876 0.947406 9.38579 0.660661 9.28261 0.411544C9.17942 0.162428 8.93633 0 8.66669 0H0.666686Z" fill="currentColor"/>'
    );
  }

  return renderGoalConfigSvgIcon(
    "goal-config-tree-icon-svg is-leaf",
    "0 0 14.0007 13.334",
    '<g><path d="M0 12V1.33398C0 0.597605 0.597605 0 1.33398 0H5.33399L5.40723 0.00488281C5.5774 0.0237815 5.73488 0.107258 5.8457 0.240234L7.3125 2H12.667C13.4034 2 14 2.59759 14 3.33398V12C14 12.7364 13.4034 13.334 12.667 13.334H1.33398C0.597611 13.334 0 12.7364 0 12ZM1.33398 12H12.667V3.33398H7C6.80228 3.33389 6.61487 3.24564 6.48828 3.09375L5.02148 1.33398H1.33398V12Z" fill="currentColor"/><path d="M13.334 5.33333V6.66732H0.666992V5.33333H13.334Z" fill="currentColor"/><path d="M0 8.00033V4.00033C0 3.63214 0.298802 3.33333 0.666992 3.33333C1.03518 3.33333 1.33398 3.63214 1.33398 4.00033V8.00033C1.33398 8.36852 1.03518 8.66732 0.666992 8.66732C0.298802 8.66732 0 8.36852 0 8.00033Z" fill="currentColor"/><path d="M12.6667 8.00033V4.00033C12.6667 3.63214 12.9655 3.33333 13.3337 3.33333C13.7018 3.33333 14.0007 3.63214 14.0007 4.00033V8.00033C14.0007 8.36852 13.7018 8.66732 13.3337 8.66732C12.9655 8.66732 12.6667 8.36852 12.6667 8.00033Z" fill="currentColor"/></g>'
  );
}

function renderGoalConfigCollapseHandleIcon(isCollapsed = false) {
  return renderGoalConfigSvgIcon(
    `goal-config-tree-collapse-icon ${isCollapsed ? "is-collapsed" : ""}`,
    "0 0 4.58175 8.69475",
    '<path d="M3.98437 0.093375L0.105375 4.08937C0.035125 4.15962 0 4.24362 0 4.34137C0 4.43912 0.035125 4.527 0.105375 4.605L3.98437 8.601C4.05462 8.6635 4.13662 8.69475 4.23037 8.69475C4.32412 8.69475 4.40612 8.65962 4.47637 8.58937C4.54662 8.51912 4.58175 8.43712 4.58175 8.34337C4.58175 8.24962 4.54662 8.16762 4.47637 8.09737L0.820125 4.34737L4.47637 0.597375C4.54662 0.527125 4.58175 0.445125 4.58175 0.351375C4.58175 0.257625 4.54662 0.175625 4.47637 0.105375C4.40612 0.035125 4.32412 0 4.23037 0C4.13662 0 4.05462 0.03125 3.98437 0.09375V0.093375Z" fill="currentColor"/>'
  );
}

function renderGoalConfigTreeMoreIcon() {
  return `
    <span class="goal-config-tree-more-icon-wrap" aria-hidden="true">
      ${renderGoalConfigSvgIcon(
        "goal-config-tree-more-icon",
        "0 0 3 14.5",
        '<g><path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="currentColor"/><path d="M1.5 9C2.32843 9 3 8.32843 3 7.5C3 6.67157 2.32843 6 1.5 6C0.671573 6 0 6.67157 0 7.5C0 8.32843 0.671573 9 1.5 9Z" fill="currentColor"/><path d="M1.5 14.5C2.32843 14.5 3 13.8285 3 13C3 12.1716 2.32843 11.5 1.5 11.5C0.671573 11.5 0 12.1716 0 13C0 13.8285 0.671573 14.5 1.5 14.5Z" fill="currentColor"/></g>'
      )}
    </span>
  `;
}

function renderGoalConfigToolbarSearchIcon() {
  return renderGoalConfigSvgIcon(
    "goal-config-inline-icon goal-config-toolbar-search-icon",
    "0 0 12.1647 12.1647",
    '<g><path d="M9.91724 5.54224C9.91724 3.1261 7.95834 1.16739 5.54224 1.16724C3.126 1.16724 1.16724 3.126 1.16724 5.54224C1.16739 7.95834 3.1261 9.91724 5.54224 9.91724C7.95824 9.91708 9.91708 7.95824 9.91724 5.54224ZM11.0836 5.54224C11.0835 8.60258 8.60258 11.0835 5.54224 11.0836C2.48177 11.0836 0.000153997 8.60267 0 5.54224C0 2.48167 2.48167 0 5.54224 0C8.60267 0.000154 11.0836 2.48177 11.0836 5.54224Z" fill="currentColor"/><path d="M8.69389 8.69389C8.92169 8.46608 9.29152 8.46608 9.51933 8.69389L11.9939 11.1694C12.2216 11.3972 12.2217 11.7662 11.9939 11.9939C11.7662 12.2217 11.3972 12.2216 11.1694 11.9939L8.69389 9.51933C8.46608 9.29152 8.46608 8.92169 8.69389 8.69389Z" fill="currentColor"/></g>'
  );
}

function renderGoalConfigSelectArrow(className = "") {
  return renderGoalConfigSvgIcon(
    `goal-config-select-arrow ${className}`.trim(),
    "0 0 11.594 6.1095",
    '<path d="M10.7965 0.141002L5.7965 5.016L0.7965 0.141002C0.702833 0.0473354 0.5935 0.000501969 0.4685 0.000501969C0.3435 0.000501969 0.234167 0.0473354 0.1405 0.141002C0.0468334 0.234669 0 0.344002 0 0.469002C0 0.594002 0.0416667 0.698169 0.125 0.781502L5.453 5.969C5.54667 6.06267 5.66133 6.1095 5.797 6.1095C5.93267 6.1095 6.04733 6.06267 6.141 5.969L11.469 0.797002C11.5523 0.703335 11.594 0.591335 11.594 0.461002C11.594 0.330668 11.5472 0.221335 11.4535 0.133002C11.3598 0.0446688 11.2505 0.0003351 11.1255 1.76678e-06C11.0005 -0.000331567 10.8912 0.0465018 10.7975 0.140502L10.7965 0.141002Z" fill="currentColor"/>'
  );
}

function renderGoalConfigToolbarMoreIcon() {
  return renderGoalConfigSvgIcon(
    "goal-config-inline-icon goal-config-more-icon",
    "0 0 12.25 3.0625",
    '<path d="M1.53125 0C1.96875 0.00904167 2.331 0.157208 2.618 0.4445C2.905 0.731792 3.05317 1.09404 3.0625 1.53125C3.05346 1.96875 2.90529 2.331 2.618 2.618C2.33071 2.905 1.96846 3.05317 1.53125 3.0625C1.09375 3.05346 0.7315 2.90529 0.4445 2.618C0.1575 2.33071 0.00933333 1.96846 0 1.53125C0.00904167 1.09375 0.157208 0.7315 0.4445 0.4445C0.731792 0.1575 1.09404 0.00933333 1.53125 0ZM6.125 0C6.5625 0.00904167 6.92475 0.157208 7.21175 0.4445C7.49875 0.731792 7.64692 1.09404 7.65625 1.53125C7.64721 1.96875 7.49904 2.331 7.21175 2.618C6.92446 2.905 6.56221 3.05317 6.125 3.0625C5.6875 3.05346 5.32525 2.90529 5.03825 2.618C4.75125 2.33071 4.60308 1.96846 4.59375 1.53125C4.60279 1.09375 4.75096 0.7315 5.03825 0.4445C5.32554 0.1575 5.68779 0.00933333 6.125 0ZM10.7188 0C11.1562 0.00904167 11.5185 0.157208 11.8055 0.4445C12.0925 0.731792 12.2407 1.09404 12.25 1.53125C12.241 1.96875 12.0928 2.331 11.8055 2.618C11.5182 2.905 11.156 3.05317 10.7188 3.0625C10.2812 3.05346 9.919 2.90529 9.632 2.618C9.345 2.33071 9.19683 1.96846 9.1875 1.53125C9.19654 1.09375 9.34471 0.7315 9.632 0.4445C9.91929 0.1575 10.2815 0.00933333 10.7188 0Z" fill="currentColor"/>'
  );
}

function renderGoalConfigInlineIcon(name) {
  if (name === "align") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-align-icon",
      "0 0 10.4985 10.4905",
      '<path d="M7.54295 3.01965L3.41382 5.58996C3.48674 5.82708 3.50949 6.06858 3.48207 6.31446L7.3102 7.7499C7.57445 7.38531 7.91395 7.15286 8.3287 7.05252C8.74345 6.95219 9.15134 7.00688 9.55238 7.21658C9.95343 7.42629 10.2292 7.72933 10.3797 8.12571C10.5302 8.52208 10.5279 8.93231 10.3727 9.3564C10.2175 9.78048 9.95095 10.0927 9.57295 10.2931C9.19495 10.4935 8.78705 10.5413 8.34926 10.4366C7.91147 10.3319 7.56745 10.1063 7.3172 9.75977C7.06695 9.41327 6.96443 9.01223 7.00963 8.55665L3.18151 7.12121C2.96276 7.43125 2.6848 7.64767 2.34763 7.77046C2.01047 7.89325 1.66178 7.90696 1.30157 7.81158C0.941363 7.71621 0.645175 7.53158 0.413008 7.25771C0.180842 6.98383 0.0463835 6.66256 0.0096335 6.2939C-0.0271165 5.92523 0.0412793 5.5834 0.214821 5.2684C0.388363 4.9534 0.643571 4.71642 0.980446 4.55746C1.31732 4.3985 1.66134 4.34381 2.01251 4.3934C2.36368 4.44298 2.6759 4.59567 2.9492 4.85146L7.07832 2.28115C6.95057 1.84365 6.97332 1.4289 7.14657 1.0369C7.31982 0.644897 7.61149 0.355564 8.02157 0.168897C8.43165 -0.0177694 8.83955 -0.0497069 9.24526 0.0730848C9.65097 0.195876 9.97457 0.448752 10.2161 0.83171C10.4576 1.21467 10.5442 1.61571 10.4759 2.03483C10.4077 2.45396 10.198 2.80717 9.84682 3.09446C9.49566 3.38175 9.10599 3.51621 8.67782 3.49783C8.24965 3.47946 7.87136 3.31992 7.54295 3.01921V3.01965Z" fill="currentColor"/>'
    );
  }
  if (name === "edit") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-edit-icon",
      "0 0 10.8281 10.8277",
      '<path d="M9.625 5.57769C9.625 5.44994 9.66598 5.34508 9.74794 5.26313C9.8299 5.18117 9.93475 5.14019 10.0625 5.14019C10.1902 5.14019 10.2951 5.18117 10.3771 5.26313C10.459 5.34508 10.5 5.44994 10.5 5.57769V10.3902C10.5 10.5179 10.459 10.6228 10.3771 10.7048C10.2951 10.7867 10.1902 10.8277 10.0625 10.8277H0.4375C0.30975 10.8277 0.204896 10.7867 0.122938 10.7048C0.0409792 10.6228 0 10.5179 0 10.3902V0.765188C0 0.637438 0.0409792 0.532583 0.122938 0.450625C0.204896 0.368667 0.30975 0.327688 0.4375 0.327688H5.25C5.37775 0.327688 5.4826 0.368667 5.56456 0.450625C5.64652 0.532583 5.6875 0.637438 5.6875 0.765188C5.6875 0.892938 5.64652 0.997792 5.56456 1.07975C5.4826 1.16171 5.37775 1.20269 5.25 1.20269H0.875V9.95269H9.625V5.57769ZM4.676 6.15213L5.4005 6.05631L9.83019 1.61306C9.9486 1.49465 9.9874 1.35567 9.94656 1.19613C9.90573 1.03658 9.80321 0.934063 9.639 0.888563C9.47479 0.843063 9.33348 0.879521 9.21506 0.997938L4.77181 5.42763L4.676 6.15213ZM10.4453 0.382375C10.7005 0.637583 10.8281 0.945146 10.8281 1.30506C10.8281 1.66498 10.7005 1.97721 10.4453 2.24175L5.91981 6.76725C5.8469 6.84017 5.76027 6.88581 5.65994 6.90419L4.2245 7.10938C4.07867 7.12775 3.95558 7.08444 3.85525 6.97944C3.75492 6.87444 3.71394 6.74917 3.73231 6.60363L3.9375 5.16819C3.94654 5.06785 3.98752 4.98575 4.06044 4.92188L8.5995 0.382813C8.86375 0.127604 9.17131 0 9.52219 0C9.87306 0 10.1806 0.127604 10.4449 0.382813L10.4453 0.382375Z" fill="currentColor"/>'
    );
  }
  if (name === "more") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-card-more-icon",
      "0 0 17.5 4.375",
      '<path d="M2.1875 0C2.8125 0.0129167 3.33 0.224583 3.74 0.635C4.15 1.04542 4.36167 1.56292 4.375 2.1875C4.36208 2.8125 4.15042 3.33 3.74 3.74C3.32958 4.15 2.81208 4.36167 2.1875 4.375C1.5625 4.36208 1.045 4.15042 0.635 3.74C0.225 3.32958 0.0133333 2.81208 0 2.1875C0.0129167 1.5625 0.224583 1.045 0.635 0.635C1.04542 0.225 1.56292 0.0133333 2.1875 0ZM8.75 0C9.375 0.0129167 9.8925 0.224583 10.3025 0.635C10.7125 1.04542 10.9242 1.56292 10.9375 2.1875C10.9246 2.8125 10.7129 3.33 10.3025 3.74C9.89208 4.15 9.37458 4.36167 8.75 4.375C8.125 4.36208 7.6075 4.15042 7.1975 3.74C6.7875 3.32958 6.57583 2.81208 6.5625 2.1875C6.57542 1.5625 6.78708 1.045 7.1975 0.635C7.60792 0.225 8.12542 0.0133333 8.75 0ZM15.3125 0C15.9375 0.0129167 16.455 0.224583 16.865 0.635C17.275 1.04542 17.4867 1.56292 17.5 2.1875C17.4871 2.8125 17.2754 3.33 16.865 3.74C16.4546 4.15 15.9371 4.36167 15.3125 4.375C14.6875 4.36208 14.17 4.15042 13.76 3.74C13.35 3.32958 13.1383 2.81208 13.125 2.1875C13.1379 1.5625 13.3496 1.045 13.76 0.635C14.1704 0.225 14.6879 0.0133333 15.3125 0Z" fill="currentColor"/>'
    );
  }
  if (name === "plus") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-plus-icon",
      "0 0 11.375 11.375",
      '<path d="M5.25 5.25V0.4375C5.25 0.30975 5.29098 0.204896 5.37294 0.122937C5.4549 0.0409791 5.55975 0 5.6875 0C5.81525 0 5.9201 0.0409791 6.00206 0.122937C6.08402 0.204896 6.125 0.30975 6.125 0.4375V5.25H10.9375C11.0652 5.25 11.1701 5.29098 11.2521 5.37294C11.334 5.4549 11.375 5.55975 11.375 5.6875C11.375 5.81525 11.334 5.9201 11.2521 6.00206C11.1701 6.08402 11.0652 6.125 10.9375 6.125H6.125V10.9375C6.125 11.0652 6.08402 11.1701 6.00206 11.2521C5.9201 11.334 5.81525 11.375 5.6875 11.375C5.55975 11.375 5.4549 11.334 5.37294 11.2521C5.29098 11.1701 5.25 11.0652 5.25 10.9375V6.125H0.4375C0.30975 6.125 0.204896 6.08402 0.122937 6.00206C0.0409791 5.9201 0 5.81525 0 5.6875C0 5.55975 0.0409791 5.4549 0.122937 5.37294C0.204896 5.29098 0.30975 5.25 0.4375 5.25H5.25Z" fill="currentColor"/>'
    );
  }
  if (name === "executor") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-executor-icon",
      "0 0 10.5 11.8125",
      '<path d="M5.25 6.125C5.99754 6.10663 6.61733 5.85142 7.10938 5.35938C7.60142 4.86733 7.85663 4.24754 7.875 3.5C7.85663 2.75246 7.60142 2.13267 7.10938 1.64062C6.61733 1.14858 5.99754 0.893375 5.25 0.875C4.50246 0.893375 3.88267 1.14858 3.39062 1.64062C2.89858 2.13267 2.64337 2.75246 2.625 3.5C2.64337 4.24754 2.89858 4.86733 3.39062 5.35938C3.88267 5.85142 4.50246 6.10663 5.25 6.125ZM5.25 7C4.25658 6.97258 3.43175 6.63075 2.7755 5.9745C2.11925 5.31825 1.77742 4.49342 1.75 3.5C1.77742 2.50658 2.11925 1.68175 2.7755 1.0255C3.43175 0.36925 4.25658 0.0274167 5.25 0C6.24342 0.0274167 7.06825 0.36925 7.7245 1.0255C8.38075 1.68175 8.72258 2.50658 8.75 3.5C8.72258 4.49342 8.38075 5.31825 7.7245 5.9745C7.06825 6.63075 6.24342 6.97258 5.25 7ZM9.625 11.375V10.0625C9.61596 9.68888 9.48835 9.37898 9.24219 9.13281C8.99602 8.88665 8.68612 8.75904 8.3125 8.75H2.1875C1.81388 8.75904 1.50398 8.88665 1.25781 9.13281C1.01165 9.37898 0.884042 9.68888 0.875 10.0625V11.375C0.875 11.5027 0.834021 11.6076 0.752062 11.6896C0.670104 11.7715 0.56525 11.8125 0.4375 11.8125C0.30975 11.8125 0.204896 11.7715 0.122938 11.6896C0.0409792 11.6076 0 11.5027 0 11.375V10.0625C0.018375 9.44271 0.232604 8.92777 0.642687 8.51769C1.05277 8.1076 1.56771 7.89337 2.1875 7.875H8.3125C8.93229 7.89337 9.44723 8.1076 9.85731 8.51769C10.2674 8.92777 10.4816 9.44271 10.5 10.0625V11.375C10.5 11.5027 10.459 11.6076 10.3771 11.6896C10.2951 11.7715 10.1902 11.8125 10.0625 11.8125C9.93475 11.8125 9.8299 11.7715 9.74794 11.6896C9.66598 11.6076 9.625 11.5027 9.625 11.375Z" fill="currentColor"/>'
    );
  }
  if (name === "sync") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-tree-sync-icon",
      "0 0 14 14",
      '<g><path d="M9.04167 1.75H4.95833V4.375H9.04167V1.75Z" stroke="currentColor" stroke-width="1.16667" stroke-linejoin="round"/><path d="M5.83333 9.625H1.75V12.25H5.83333V9.625Z" stroke="currentColor" stroke-width="1.16667" stroke-linejoin="round"/><path d="M12.25 9.625H8.16667V12.25H12.25V9.625Z" stroke="currentColor" stroke-width="1.16667" stroke-linejoin="round"/><path d="M7 4.66667V7" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.79167 9.625V7H10.2083V9.625" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/></g>'
    );
  }
  if (name === "delete") {
    return renderGoalConfigSvgIcon(
      "goal-config-inline-icon goal-config-delete-icon",
      "0 0 9.5834 9.5834",
      '<path d="M8.72945 0.150949L4.79195 4.08845L0.854449 0.150949C0.750115 0.057282 0.632949 0.0104488 0.502949 0.0104488C0.372949 0.0104488 0.258282 0.0599488 0.158949 0.158949C0.0596154 0.257949 0.0101152 0.372615 0.0104486 0.502949C0.0107819 0.633282 0.0576153 0.750449 0.150949 0.854449L4.08845 4.79195L0.150949 8.72945C0.0156153 8.86478 -0.0287179 9.02628 0.0179487 9.21395C0.0646154 9.40161 0.179282 9.51878 0.361949 9.56545C0.544615 9.61212 0.708615 9.56778 0.853948 9.43245L4.79145 5.49495L8.72895 9.43245C8.83328 9.52612 8.95045 9.57295 9.08045 9.57295C9.21045 9.57295 9.32511 9.52345 9.42445 9.42445C9.52378 9.32545 9.57328 9.21078 9.57295 9.08045C9.57261 8.95011 9.52578 8.83295 9.43245 8.72895L5.49495 4.79145L9.43245 0.853949C9.56778 0.718615 9.61211 0.557115 9.56545 0.369449C9.51878 0.181782 9.40161 0.0646154 9.21395 0.0179487C9.02628 -0.0287179 8.86478 0.0156153 8.72945 0.150949V0.150949Z" fill="currentColor"/>'
    );
  }
  return "";
}

function renderGoalConfigFormLabel(text) {
  return `
    <div class="goal-config-form-label">
      <span class="goal-config-form-label-text">${text}</span>
      <span class="goal-config-form-label-line"></span>
    </div>
  `;
}

function renderGoalConfigMetricHead(type) {
  if (type === "manual") {
    return `<div class="goal-config-metric-head"></div>`;
  }
  if (type === "weighted") {
    return `
      <div class="goal-config-metric-head">
        <span class="goal-config-head-weight">权重</span>
      </div>
    `;
  }
  return `
    <div class="goal-config-metric-head">
      <span>门槛</span>
      <span>及格</span>
      <span>挑战</span>
      <span class="goal-config-head-weight">权重</span>
    </div>
  `;
}

function renderGoalConfigViewCells(goal, kr) {
  if (goal.type === "manual") {
    return "";
  }
  if (goal.type === "weighted") {
    return `
      <div class="goal-config-metric-cell goal-config-weight-cell">
        <span class="weight-chip">${escapeHtml(kr.weight || "100%")}</span>
      </div>
    `;
  }
  return `
    <div class="goal-config-metric-cell">${renderMetricValue(kr.threshold || "-")}</div>
    <div class="goal-config-metric-cell">${renderMetricValue(kr.passing || "-")}</div>
    <div class="goal-config-metric-cell">${renderMetricValue(kr.challenge || "-")}</div>
    <div class="goal-config-metric-cell goal-config-weight-cell">
      <span class="weight-chip">${escapeHtml(kr.weight || "0%")}</span>
    </div>
  `;
}

function renderGoalConfigCardMenu(goal) {
  if (state.goalConfig.cardMenuId !== goal.id) {
    return "";
  }
  return `
    <div class="goal-config-card-menu dropdown-panel">
      <button class="dropdown-option" data-action="goal-config-copy" data-value="${goal.id}" type="button">复制目标</button>
      <button class="dropdown-option" data-action="goal-config-record" data-value="${goal.id}" type="button">目标记录</button>
      <button class="dropdown-option danger" data-action="goal-config-delete" data-value="${goal.id}" type="button">删除目标</button>
    </div>
  `;
}

function renderGoalConfigGroupMenu(group) {
  if (state.goalConfig.groupMenuId !== group.id || group.kind === "all") {
    return "";
  }
  if (group.kind === "recycle") {
    return `
      <div class="goal-config-group-menu dropdown-panel">
        <button class="dropdown-option danger" data-action="goal-config-empty-recycle" type="button">清空周转箱</button>
      </div>
    `;
  }
  const canAddChild = getGoalConfigGroupLevel(group) < GOAL_CONFIG_MAX_DEPTH;
  return `
    <div class="goal-config-group-menu dropdown-panel">
      ${
        canAddChild
          ? `<button class="dropdown-option" data-action="goal-config-add-child-group" data-value="${group.id}" type="button">新增子级分组</button>`
          : ""
      }
      <button class="dropdown-option" data-action="goal-config-rename-group" data-value="${group.id}" type="button">重命名分组</button>
      <button class="dropdown-option danger" data-action="goal-config-delete-group" data-value="${group.id}" type="button">删除分组</button>
    </div>
  `;
}

function renderGoalConfigTreeRow(group) {
  const isSelected = state.goalConfig.selectedGroupId === group.id;
  const isEditing = state.goalConfig.editingGroupId === group.id;
  const hasChildren = getGoalConfigChildren(group.id).length > 0;
  const level = getGoalConfigGroupLevel(group);
  const paddingLeft = 8 + Math.min(level, GOAL_CONFIG_MAX_DEPTH) * 24;
  const showMenu = group.kind !== "all";
  return `
    <div class="goal-config-tree-row-wrap">
      <div class="goal-config-tree-row ${isSelected ? "is-selected" : ""}" style="padding-left:${paddingLeft}px">
        ${
          hasChildren && group.kind !== "all" && group.kind !== "recycle"
            ? `<button class="goal-config-tree-icon-button" data-action="goal-config-toggle-group" data-value="${group.id}" type="button" aria-label="切换分组展开状态">
                <span class="goal-config-tree-icon">${renderGoalConfigTreeIcon(group)}</span>
              </button>`
            : `<span class="goal-config-tree-icon">${renderGoalConfigTreeIcon(group)}</span>`
        }
        ${
          isEditing
            ? `<div class="goal-config-tree-main is-editing">
                <input class="goal-config-tree-input" data-field="goal-config-group-name" data-group-id="${group.id}" value="${escapeHtml(group.label)}" />
              </div>`
            : `<button class="goal-config-tree-main" data-action="goal-config-select-group" data-value="${group.id}" type="button">
                <span class="goal-config-tree-label">${escapeHtml(group.label || "未命名分组")}</span>
              </button>`
        }
        <div class="goal-config-tree-end">
          <span class="goal-config-tree-count">${getGoalConfigGroupCount(group.id)}</span>
          ${
            showMenu
              ? `<button class="goal-config-tree-hover-action" data-action="goal-config-toggle-group-menu" data-value="${group.id}" type="button" aria-label="更多操作">${renderGoalConfigTreeMoreIcon()}</button>`
              : `<span class="goal-config-tree-hover-action is-placeholder ${group.kind === "all" ? "is-hidden" : ""}" aria-hidden="true">${group.kind === "all" ? "" : renderGoalConfigTreeMoreIcon()}</span>`
          }
          ${renderGoalConfigGroupMenu(group)}
        </div>
      </div>
    </div>
  `;
}

function renderGoalConfigTree() {
  if (state.goalConfig.treeCollapsed) {
    return `
      <aside class="goal-config-tree-panel is-collapsed">
        <button class="goal-config-tree-collapse-handle is-collapsed" data-action="goal-config-collapse-tree" type="button" aria-label="展开左侧分组" title="展开左侧分组">
          ${renderGoalConfigCollapseHandleIcon(true)}
        </button>
      </aside>
    `;
  }

  return `
    <aside class="goal-config-tree-panel">
      <div class="goal-config-tree-search">
        <label class="search-box goal-config-search-box">
          <img src="./assets/search.svg" alt="" />
          <input data-field="goal-config-group-search" type="text" value="${escapeHtml(state.goalConfig.groupSearch)}" placeholder="搜索分组名称" />
        </label>
        <button class="goal-config-tree-collapse-handle" data-action="goal-config-collapse-tree" type="button" aria-label="收起左侧分组" title="收起左侧分组">
          ${renderGoalConfigCollapseHandleIcon(false)}
        </button>
      </div>
      <div class="goal-config-tree-list">
        ${getGoalConfigVisibleGroups().map((group) => renderGoalConfigTreeRow(group)).join("")}
      </div>
      <div class="goal-config-tree-footer">
        <button class="goal-config-tree-add" data-action="goal-config-add-group" type="button">新增分组</button>
        <button class="goal-config-tree-sync" data-action="goal-config-sync-groups" type="button" aria-label="同步组织架构">
          ${renderGoalConfigInlineIcon("sync")}
        </button>
      </div>
    </aside>
  `;
}

function renderGoalConfigToolbar() {
  const typeLabel =
    (GOAL_CONFIG_TYPE_OPTIONS.find((option) => option.key === state.goalConfig.type) || GOAL_CONFIG_TYPE_OPTIONS[0]).label;

  return `
    <div class="goal-config-toolbar">
      <div class="goal-config-toolbar-left">
        <label class="search-box goal-config-toolbar-search">
          ${renderGoalConfigToolbarSearchIcon()}
          <input data-field="goal-config-keyword" type="text" value="${escapeHtml(state.goalConfig.keyword)}" placeholder="搜索关键字" />
        </label>

        <div class="control control-type control-auto goal-config-toolbar-type">
          <button class="control-button goal-config-toolbar-type-button" data-action="toggle-goal-config-dropdown" data-value="goal-config-type" type="button">
            <span class="truncate">${escapeHtml(typeLabel)}</span>
            ${renderGoalConfigSelectArrow()}
          </button>
          ${
            state.openDropdown === "goal-config-type"
              ? `
                <div class="dropdown-panel">
                  ${GOAL_CONFIG_TYPE_OPTIONS.map(
                    (option) => `
                      <button class="dropdown-option ${state.goalConfig.type === option.key ? "is-active" : ""}" data-action="set-goal-config-type-filter" data-value="${option.key}" type="button">
                        ${option.label}
                      </button>
                    `
                  ).join("")}
                </div>
              `
              : ""
          }
        </div>
      </div>

      <div class="goal-config-toolbar-right">
        <div class="goal-config-more-wrap">
          <button class="goal-config-icon-button goal-config-toolbar-more-button" data-action="toggle-goal-config-dropdown" data-value="goal-config-toolbar" type="button" aria-label="更多操作">
            <span class="goal-config-toolbar-more-rotator">${renderGoalConfigToolbarMoreIcon()}</span>
          </button>
          ${
            state.openDropdown === "goal-config-toolbar"
              ? `
                <div class="dropdown-panel goal-config-toolbar-menu">
                  <button class="dropdown-option" data-action="goal-config-export" type="button">导出目标</button>
                </div>
              `
              : ""
          }
        </div>
        <div class="goal-config-create-wrap">
          <div class="goal-config-create-button" role="group" aria-label="创建目标">
            <button class="goal-config-create-button-text" data-action="goal-config-create-direct" type="button">创建目标</button>
            <button
              class="goal-config-create-button-icon"
              data-action="toggle-goal-config-dropdown"
              data-value="goal-config-create"
              type="button"
              aria-label="展开创建目标菜单"
            >
              ${renderGoalConfigSelectArrow("is-brand")}
            </button>
          </div>
          ${
            state.openDropdown === "goal-config-create"
              ? `
                <div class="dropdown-panel goal-config-create-menu">
                  <button class="dropdown-option" data-action="goal-config-import" type="button">导入目标</button>
                  <button class="dropdown-option" data-action="goal-config-ai-template" type="button">AI 模版库</button>
                </div>
              `
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function renderGoalConfigViewCard(goal) {
  const executorText = getGoalConfigExecutorText(goal.executors);
  const executorPreview = executorText.slice(0, 5);
  return `
    <article class="goal-config-card" data-goal-config-card data-goal-type="${goal.type}">
      <div class="goal-config-card-head">
        <div class="goal-config-card-row">
          ${renderGoalConfigFormLabel("对齐")}
          <div class="goal-config-align-display">
            ${renderGoalConfigInlineIcon("align")}
            <span>${escapeHtml(goal.alignedGoal || "未设置对齐目标")}</span>
          </div>
          ${renderGoalConfigMetricHead(goal.type)}
          <div class="goal-config-card-actions">
            <button class="goal-config-link-button" data-action="goal-config-edit" data-value="${goal.id}" type="button">
              ${renderGoalConfigInlineIcon("edit")}
              <span>编辑目标</span>
            </button>
            <button class="goal-config-card-more-button" data-action="goal-config-toggle-card-menu" data-value="${goal.id}" type="button" aria-label="卡片更多操作">
              ${renderGoalConfigInlineIcon("more")}
            </button>
            ${renderGoalConfigCardMenu(goal)}
          </div>
        </div>
      </div>

      <div class="goal-config-card-content">
        <div class="goal-config-goal-row">
          <span class="goal-chip">目标</span>
          <div class="goal-config-goal-title">${escapeHtml(goal.title)}</div>
        </div>

        <div class="goal-config-kr-list">
          ${goal.krs
            .map(
              (kr, index) => `
                <div class="goal-config-kr-row">
                  <div class="goal-config-kr-main">
                    <span class="kr-chip">KR ${index + 1}</span>
                    <span class="goal-config-kr-title">${escapeHtml(kr.title)}</span>
                  </div>
                  ${renderGoalConfigViewCells(goal, kr)}
                </div>
              `
            )
            .join("")}
        </div>

        <div class="goal-config-info-row">
          ${renderGoalConfigFormLabel("执行")}
          <div class="goal-config-info-value">
            ${executorPreview.map((text) => `<span class="goal-config-executor-item">${escapeHtml(text)}</span>`).join("")}
            ${
              executorText.length
                ? `<button class="goal-config-member-count-link" data-action="goal-config-show-executors" data-value="${goal.id}" type="button">共${executorText.length}人 ${renderGoalConfigSelectArrow("goal-config-member-count-arrow")}</button>`
                : `<span class="goal-config-empty-copy">未设置执行人</span>`
            }
          </div>
        </div>

        <div class="goal-config-info-row goal-config-flow-row">
          ${renderGoalConfigFormLabel("流程")}
          <div class="goal-config-info-value">
            <span class="goal-config-flow-copy">${escapeHtml(goal.flow)}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderGoalConfigDraftTypeSwitch(type) {
  return `
    <div class="goal-config-type-switch" role="radiogroup" aria-label="目标类型">
      ${["auto", "manual", "weighted"]
        .map(
          (item) => `
            <button class="goal-config-type-radio ${type === item ? "is-active" : ""}" data-action="set-goal-config-draft-type" data-value="${item}" type="button" role="radio" aria-checked="${type === item}">
              <span class="goal-config-type-radio-indicator" aria-hidden="true"></span>
              <span class="goal-config-type-radio-label">${getGoalConfigTypeLabel(item)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGoalConfigDraftAddRow() {
  return `
    <button class="goal-config-kr-add-row" data-action="goal-config-add-kr" type="button">
      <span class="goal-config-kr-add-action">
        ${renderGoalConfigInlineIcon("plus")}
        <span>添加关键结果（Key Result）</span>
      </span>
    </button>
  `;
}

function renderGoalConfigDraftKrRow(kr, index, draft) {
  const isLast = index === draft.krs.length - 1;
  const showMetrics = draft.type === "auto";
  const showWeight = draft.type === "auto" || draft.type === "weighted";
  const showEmptyWeightPlaceholder =
    isGoalConfigPristineDraft(draft) &&
    draft.krs.length === 2 &&
    !isLast &&
    (draft.type === "auto" || draft.type === "weighted");
  const weightValue = showEmptyWeightPlaceholder ? "" : kr.weight || "";

  return `
    <div class="goal-config-kr-row is-editing">
      <div class="goal-config-kr-main">
        <span class="kr-chip">KR ${index + 1}</span>
        <input class="goal-config-input goal-config-title-input" data-field="goal-config-kr-title" data-kr-id="${kr.id}" value="${escapeHtml(kr.title)}" placeholder="请输入KR名称" />
      </div>
      ${
        showMetrics
          ? `
            <div class="goal-config-metric-input-wrap"><input class="goal-config-input goal-config-metric-input" inputmode="decimal" data-field="goal-config-kr-threshold" data-kr-id="${kr.id}" value="${escapeHtml(kr.threshold || "")}" placeholder="请输入" /></div>
            <div class="goal-config-metric-input-wrap"><input class="goal-config-input goal-config-metric-input" inputmode="decimal" data-field="goal-config-kr-passing" data-kr-id="${kr.id}" value="${escapeHtml(kr.passing || "")}" placeholder="请输入" /></div>
            <div class="goal-config-metric-input-wrap"><input class="goal-config-input goal-config-metric-input" inputmode="decimal" data-field="goal-config-kr-challenge" data-kr-id="${kr.id}" value="${escapeHtml(kr.challenge || "")}" placeholder="请输入" /></div>
          `
          : ""
      }
      ${
        showWeight
          ? `
            <div class="goal-config-weight-input-wrap">
              <input class="goal-config-input goal-config-weight-input" data-field="goal-config-kr-weight" data-kr-id="${kr.id}" value="${escapeHtml(weightValue)}" placeholder="请输入" ${isLast ? "disabled" : ""} />
            </div>
          `
          : ""
      }
      <div class="goal-config-kr-remove-wrap">
        ${
          draft.krs.length > 1
            ? `<button class="goal-config-kr-remove" data-action="goal-config-remove-kr" data-value="${kr.id}" type="button" aria-label="删除 KR">${renderGoalConfigInlineIcon("delete")}</button>`
            : ""
        }
      </div>
    </div>
  `;
}

function renderGoalConfigEditingCard() {
  const draft = state.goalConfig.editingDraft;
  if (!draft) {
    return "";
  }

  const selectedAlign = draft.alignedGoal || "未设置对齐目标";

  return `
    <article class="goal-config-card is-editing" data-goal-config-card data-goal-type="${draft.type}">
      <div class="goal-config-edit-row goal-config-edit-row-type">
        ${renderGoalConfigFormLabel("类型")}
        <div class="goal-config-edit-value">
          ${renderGoalConfigDraftTypeSwitch(draft.type)}
        </div>
      </div>

      <div class="goal-config-edit-row goal-config-edit-row-align">
        ${renderGoalConfigFormLabel("对齐")}
        <div class="goal-config-align-display">
          ${renderGoalConfigInlineIcon("align")}
          <span>${escapeHtml(selectedAlign)}</span>
        </div>
        ${renderGoalConfigMetricHead(draft.type)}
      </div>

      <div class="goal-config-card-content">
        <div class="goal-config-goal-row is-editing">
          <span class="goal-chip">目标</span>
          <input class="goal-config-input goal-config-goal-input" data-field="goal-config-title" value="${escapeHtml(draft.title)}" placeholder="请输入目标名称" />
        </div>

        <div class="goal-config-kr-list is-editing">
          ${draft.krs.map((kr, index) => renderGoalConfigDraftKrRow(kr, index, draft)).join("")}
          ${renderGoalConfigDraftAddRow()}
        </div>

        <div class="goal-config-info-row is-editing">
          ${renderGoalConfigFormLabel("执行")}
          <div class="goal-config-info-value goal-config-info-value-editing">
            <button class="goal-config-inline-link goal-config-executor-select-link" data-action="toggle-goal-config-dropdown" data-value="goal-config-executors" type="button">
              ${renderGoalConfigInlineIcon("executor")}
              <span>选择执行人</span>
            </button>
            ${(draft.executors || [])
              .map(
                (executorId) => `
                  <span class="goal-config-user-tag">
                    @${escapeHtml(goalConfigExecutorLabel(executorId))}
                  </span>
                `
              )
              .join("")}
            ${
              (draft.executors || []).length
                ? `<span class="goal-config-member-count-link is-static">共${draft.executors.length}人 ${renderGoalConfigSelectArrow("goal-config-member-count-arrow")}</span>`
                : ""
            }
            ${
              state.openDropdown === "goal-config-executors"
                ? `
                  <div class="dropdown-panel member-dropdown goal-config-executor-menu">
                    <div class="member-heading">选择可执行当前目标的成员</div>
                    ${GOAL_CONFIG_EXECUTOR_OPTIONS.map(
                      (option) => `
                        <button class="dropdown-option" data-action="toggle-goal-config-executor" data-value="${option.id}" type="button">
                          ${renderCheckboxIndicator((draft.executors || []).includes(option.id) ? "checked" : "unchecked")}
                          <span>${escapeHtml(option.label)}</span>
                        </button>
                      `
                    ).join("")}
                  </div>
                `
                : ""
            }
          </div>
        </div>

        <div class="goal-config-info-row is-editing goal-config-flow-row">
          ${renderGoalConfigFormLabel("流程")}
          <div class="goal-config-info-value goal-config-info-value-editing">
            <div class="control goal-config-inline-control">
              <button class="control-button goal-config-select-button goal-config-select-medium" data-action="toggle-goal-config-dropdown" data-value="goal-config-flow" type="button">
                <span class="truncate">${escapeHtml(draft.flow || getDefaultGoalConfigFlow())}</span>
                ${renderGoalConfigSelectArrow()}
              </button>
              ${
                state.openDropdown === "goal-config-flow"
                  ? `
                    <div class="dropdown-panel goal-config-inline-menu">
                      ${getGoalConfigFlowOptions().map(
                        (option) => `
                          <button class="dropdown-option ${draft.flow === option ? "is-active" : ""}" data-action="set-goal-config-draft-flow" data-value="${option}" type="button">
                            ${option}
                          </button>
                        `
                      ).join("")}
                    </div>
                  `
                  : ""
              }
            </div>
          </div>
        </div>
      </div>

      <div class="goal-config-card-footer">
        <div class="goal-config-card-footer-actions">
          <button class="modal-button-primary" data-action="goal-config-save" type="button">保存</button>
          <button class="modal-button" data-action="goal-config-cancel" type="button">取消</button>
        </div>
      </div>
    </article>
  `;
}

function renderGoalConfigCards() {
  const goals = getFilteredGoalConfigGoals();
  const draft = state.goalConfig.editingDraft;
  const isNewDraft = draft && draft.isNew;
  const cards = [];

  if (isNewDraft) {
    cards.push(renderGoalConfigEditingCard());
  }

  goals.forEach((goal) => {
    if (draft && !draft.isNew && draft.id === goal.id) {
      cards.push(renderGoalConfigEditingCard());
    } else {
      cards.push(renderGoalConfigViewCard(goal));
    }
  });

  if (!cards.length) {
    return renderEmptyState("暂无目标");
  }

  return cards.join("");
}

function renderGoalConfigProcessTag(process) {
  return `
    ${process.isDefault ? '<span class="goal-config-process-tag">默认</span>' : ""}
  `;
}

function renderGoalConfigProcessRowMenu(process) {
  if (state.goalConfig.processMenuId !== process.id) {
    return "";
  }
  return `
    <div class="goal-config-process-menu dropdown-panel">
      <button class="dropdown-option" data-action="goal-config-process-batch-apply" data-value="${process.id}" type="button">批量套用</button>
      <button class="dropdown-option" data-action="goal-config-process-rename" data-value="${process.id}" type="button">编辑名称</button>
      ${
        process.isDefault
          ? ""
          : `<button class="dropdown-option" data-action="goal-config-process-set-default" data-value="${process.id}" type="button">设为默认</button>`
      }
      ${
        process.isDefault
          ? ""
          : `<button class="dropdown-option danger" data-action="goal-config-process-delete" data-value="${process.id}" type="button">删除流程</button>`
      }
    </div>
  `;
}

function renderGoalConfigProcessToolbar() {
  return `
    <div class="goal-config-process-toolbar">
      <label class="search-box goal-config-process-search">
        <img src="./assets/search.svg" alt="" />
        <input data-field="goal-config-process-keyword" type="text" value="${escapeHtml(
          state.goalConfig.processKeyword
        )}" placeholder="搜索关键字" />
      </label>
      <button class="goal-config-process-create-button" data-action="open-goal-config-process-create" type="button">创建流程</button>
    </div>
  `;
}

function renderGoalConfigProcessPagination(processes, totalPages, currentPage) {
  return `
    <div class="pagination">
      <div class="pagination-total">共 ${processes.length} 条</div>
      <div class="pagination-controls">
        <button class="page-button" data-action="goal-config-process-page-prev" type="button" ${currentPage <= 1 ? "disabled" : ""}>
          ${renderArrow("left", "ui-arrow-xs")}
        </button>
        <div class="page-current">${currentPage}</div>
        <button class="page-button" data-action="goal-config-process-page-next" type="button" ${currentPage >= totalPages ? "disabled" : ""}>
          ${renderArrow("right", "ui-arrow-xs")}
        </button>
      </div>
      <div class="page-size">
        <button class="page-size-button" data-action="toggle-dropdown" data-value="goal-config-process-page-size" type="button">
          <span>${state.pageSize} / 页</span>
          ${renderArrow("down", "ui-arrow-xs")}
        </button>
        ${
          state.openDropdown === "goal-config-process-page-size"
            ? `
              <div class="dropdown-panel">
                ${PAGE_SIZE_OPTIONS.map(
                  (item) => `
                    <button class="dropdown-option ${state.pageSize === item ? "is-active" : ""}" data-action="set-goal-config-process-page-size" data-value="${item}" type="button">${item} / 页</button>
                  `
                ).join("")}
              </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderGoalConfigProcessTable() {
  const filteredProcesses = getFilteredGoalConfigProcesses();
  const { items: pageProcesses, totalPages, page } = getGoalConfigProcessPaged(filteredProcesses);
  const selectedIds = state.goalConfig.processSelection || [];
  const headerState = getGoalConfigProcessHeaderState(pageProcesses);
  const selectedProcesses = getGoalConfigSelectedProcesses();
  const canDeleteSelection =
    selectedProcesses.length > 0 && selectedProcesses.every((item) => !item.isDefault);

  return `
    <div class="table-region goal-config-process-region">
      <div class="table-shell">
        <div class="table-header table-grid-process">
          <div class="cell checkbox-wrap">
            ${renderCheckbox(headerState, 'data-action="toggle-goal-config-process-all"')}
          </div>
          <div class="cell header-title">流程名称</div>
          <div class="cell">创建人</div>
          <div class="cell">更新时间</div>
          <div class="cell header-actions">操作</div>
        </div>

        <div class="table-body">
          ${
            pageProcesses.length
              ? pageProcesses
                  .map((process) => {
                    const checked = selectedIds.includes(process.id);
                    const isEditing = state.goalConfig.processEditingId === process.id;
                    return `
                      <div class="table-row table-grid-process ${checked ? "is-selected" : ""}">
                        <div class="cell checkbox-wrap">
                          ${
                            process.isDefault
                              ? '<span class="goal-config-process-checkbox-placeholder" aria-hidden="true"></span>'
                              : renderCheckbox(checked ? "checked" : "unchecked", `data-action="toggle-goal-config-process-row" data-value="${process.id}"`)
                          }
                        </div>
                        <div class="cell cell-title goal-config-process-name-cell">
                          ${
                            isEditing
                              ? `<input class="goal-config-input goal-config-process-name-input" data-field="goal-config-process-name" data-process-id="${process.id}" value="${escapeHtml(
                                  state.goalConfig.processEditingName
                                )}" placeholder="请输入流程名称" />`
                              : `
                                <span class="goal-config-process-name-wrap">
                                  <span class="truncate goal-config-process-name-text">${escapeHtml(process.name)}</span>
                                  ${renderGoalConfigProcessTag(process)}
                                </span>
                              `
                          }
                        </div>
                        <div class="cell cell-executor"><span class="truncate">${escapeHtml(process.creator)}</span></div>
                        <div class="cell"><span class="truncate">${escapeHtml(process.updatedAt)}</span></div>
                        <div class="cell cell-actions goal-config-process-actions">
                          <button class="link-action goal-config-process-link" data-action="goal-config-process-edit-confirm" data-value="${process.id}" type="button">编辑确认流程</button>
                          <button class="link-action goal-config-process-link" data-action="goal-config-process-edit-rating" data-value="${process.id}" type="button">编辑评分流程</button>
                          ${
                            isEditing
                              ? ""
                              : `
                                <button class="more-button row-menu-trigger" data-action="toggle-goal-config-process-menu" data-value="${process.id}" type="button" aria-label="更多操作">
                                  <span class="more-dot"></span>
                                  <span class="more-dot"></span>
                                  <span class="more-dot"></span>
                                </button>
                                ${renderGoalConfigProcessRowMenu(process)}
                              `
                          }
                        </div>
                      </div>
                    `;
                  })
                  .join("")
              : renderEmptyState("未找到匹配的流程")
          }
        </div>
      </div>

      <div class="footer-row">
        <div class="batch-actions">
          ${canDeleteSelection ? '<button class="danger-button" data-action="goal-config-process-delete-batch" type="button">删除流程</button>' : ""}
        </div>
        ${renderGoalConfigProcessPagination(filteredProcesses, totalPages, page)}
      </div>
    </div>
  `;
}

function renderGoalConfigProcessCreateModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal goal-config-process-create-modal" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">创建流程</h2>
          <p class="panel-subtitle">确认后将模拟自动创建“确认流程”和“评分流程”两个 OA 模板。</p>
        </div>
      </div>
      <div class="panel-content">
        <label class="goal-config-process-create-field">
          <span class="goal-config-process-create-label">流程名称</span>
          <input class="goal-config-input" data-field="goal-config-create-process-name" type="text" value="${escapeHtml(
            overlay.processName || ""
          )}" placeholder="请输入流程名称" />
        </label>
      </div>
      <div class="panel-footer">
        <button class="modal-button" data-action="close-overlay" type="button">取消</button>
        <button class="modal-button-primary" data-action="confirm-goal-config-process-create" type="button">确认</button>
      </div>
    </div>
  `;
}

function renderGoalConfigProcessGuideNavButton(direction, step, disabled = false) {
  const hiddenClass = disabled ? "is-hidden" : "";
  return `
    <button
      class="goal-config-process-guide-nav ${hiddenClass}"
      data-action="goal-config-process-guide-${direction}"
      data-value="${step}"
      type="button"
      aria-label="${direction === "prev" ? "上一步" : "下一步"}"
      ${disabled ? "tabindex=\"-1\" aria-hidden=\"true\"" : ""}
    >
      <svg class="goal-config-process-guide-chevron" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        ${
          direction === "prev"
            ? '<path d="M6.5 1.5L1.5 7L6.5 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
            : '<path d="M1.5 1.5L6.5 7L1.5 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        }
      </svg>
    </button>
  `;
}

function renderGoalConfigProcessGuideModal(overlay) {
  const currentStep = getGoalConfigProcessGuideStep(overlay.step);
  const isFirst = currentStep.step === 1;
  const isLast = currentStep.step === GOAL_CONFIG_PROCESS_GUIDE_STEPS.length;
  const spriteOffset = (((currentStep.step - 1) * 100) / GOAL_CONFIG_PROCESS_GUIDE_STEPS.length).toFixed(6);
  return `
    <div class="backdrop goal-config-process-guide-backdrop" data-action="close-overlay"></div>
    <div class="modal goal-config-process-guide-modal" data-overlay-panel="true">
      <div class="goal-config-process-guide-header">
        <h2 class="goal-config-process-guide-title">配置OA流程</h2>
      </div>
      <div class="goal-config-process-guide-content">
        <div class="goal-config-process-guide-stage">
          <div class="goal-config-process-guide-nav-slot">
            ${renderGoalConfigProcessGuideNavButton("prev", currentStep.step - 1, isFirst)}
          </div>
          <div class="goal-config-process-guide-image-shell">
            <img
              class="goal-config-process-guide-sprite"
              data-step="${currentStep.step}"
              src="${GOAL_CONFIG_PROCESS_GUIDE_SPRITE}"
              alt=""
              loading="eager"
              decoding="sync"
              fetchpriority="high"
              width="3360"
              height="576"
              style="transform: translate3d(-${spriteOffset}%, 0, 0);"
            />
          </div>
          <div class="goal-config-process-guide-nav-slot">
            ${renderGoalConfigProcessGuideNavButton("next", currentStep.step + 1, isLast)}
          </div>
        </div>
        <div class="goal-config-process-guide-copy">${escapeHtml(currentStep.caption)}</div>
        <div class="goal-config-process-guide-step">${currentStep.step}/${GOAL_CONFIG_PROCESS_GUIDE_STEPS.length}</div>
      </div>
      <div class="goal-config-process-guide-footer">
        <button class="goal-config-process-guide-reminder" data-action="toggle-goal-config-process-guide-reminder" type="button">
          ${renderCheckboxIndicator(overlay.dontRemind ? "checked" : "unchecked")}
          <span>不再提醒</span>
        </button>
        <div class="goal-config-process-guide-actions">
          <button class="modal-button" data-action="close-overlay" type="button">取消</button>
          <button class="modal-button-primary" data-action="complete-goal-config-process-guide" type="button">${currentStep.actionLabel}</button>
        </div>
      </div>
    </div>
  `;
}

function syncGoalConfigProcessGuideModal() {
  if (!state.overlay || state.overlay.type !== "goal-config-process-guide") {
    return false;
  }

  const modal = document.querySelector(".goal-config-process-guide-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  const currentStep = getGoalConfigProcessGuideStep(state.overlay.step);
  const isFirst = currentStep.step === 1;
  const isLast = currentStep.step === GOAL_CONFIG_PROCESS_GUIDE_STEPS.length;
  const spriteOffset = (((currentStep.step - 1) * 100) / GOAL_CONFIG_PROCESS_GUIDE_STEPS.length).toFixed(6);
  const sprite = modal.querySelector(".goal-config-process-guide-sprite");
  if (sprite instanceof HTMLElement) {
    sprite.dataset.step = String(currentStep.step);
    sprite.style.transform = `translate3d(-${spriteOffset}%, 0, 0)`;
  }

  const copy = modal.querySelector(".goal-config-process-guide-copy");
  if (copy) {
    copy.textContent = currentStep.caption;
  }

  const step = modal.querySelector(".goal-config-process-guide-step");
  if (step) {
    step.textContent = `${currentStep.step}/${GOAL_CONFIG_PROCESS_GUIDE_STEPS.length}`;
  }

  const primaryAction = modal.querySelector('[data-action="complete-goal-config-process-guide"]');
  if (primaryAction) {
    primaryAction.textContent = currentStep.actionLabel;
  }

  const prevButton = modal.querySelector('[data-action="goal-config-process-guide-prev"]');
  if (prevButton instanceof HTMLElement) {
    prevButton.dataset.value = String(currentStep.step - 1);
    prevButton.classList.toggle("is-hidden", isFirst);
    if (isFirst) {
      prevButton.setAttribute("tabindex", "-1");
      prevButton.setAttribute("aria-hidden", "true");
    } else {
      prevButton.removeAttribute("tabindex");
      prevButton.removeAttribute("aria-hidden");
    }
  }

  const nextButton = modal.querySelector('[data-action="goal-config-process-guide-next"]');
  if (nextButton instanceof HTMLElement) {
    nextButton.dataset.value = String(currentStep.step + 1);
    nextButton.classList.toggle("is-hidden", isLast);
    if (isLast) {
      nextButton.setAttribute("tabindex", "-1");
      nextButton.setAttribute("aria-hidden", "true");
    } else {
      nextButton.removeAttribute("tabindex");
      nextButton.removeAttribute("aria-hidden");
    }
  }

  const reminder = modal.querySelector(".goal-config-process-guide-reminder .checkbox");
  if (reminder instanceof HTMLElement) {
    reminder.classList.toggle("is-checked", !!state.overlay.dontRemind);
    reminder.classList.remove("is-partial");
    reminder.innerHTML = state.overlay.dontRemind ? '<img src="./assets/check.svg" alt="" />' : "";
  }

  return true;
}

function renderGoalConfigProcessPage() {
  return `
    <div class="goal-config-process-page">
      ${renderGoalConfigProcessToolbar()}
      ${renderGoalConfigProcessTable()}
    </div>
  `;
}

function renderGoalConfigPage() {
  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item">目标模块</span>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active">目标配置</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="tab-row">
            <div class="tabs">
              <button class="tab ${state.goalConfig.activeTab === "library" ? "is-active" : ""}" data-action="set-goal-config-tab" data-value="library" type="button">目标库</button>
              <button class="tab ${state.goalConfig.activeTab === "process" ? "is-active" : ""}" data-action="set-goal-config-tab" data-value="process" type="button">流程库</button>
            </div>
            <button class="launch-button" data-action="open-start-goal" type="button">
              <span>发起目标</span>
              ${renderArrow("right", "ui-arrow-xs")}
            </button>
          </div>

          ${
            state.goalConfig.activeTab === "process"
              ? renderGoalConfigProcessPage()
              : `
                <div class="goal-config-body">
                  ${renderGoalConfigTree()}
                  <section class="goal-config-main">
                    ${renderGoalConfigToolbar()}
                    <div class="goal-config-card-list">
                      ${renderGoalConfigCards()}
                    </div>
                  </section>
                </div>
              `
          }
        </section>
      </div>
    </main>
  `;
}

function renderMyGoalsPage() {
  const activeMyGoalTab = getMyGoalTabKey();
  const filteredPendingGoals = getFilteredMyGoals("pending");
  const filteredExecutingGoals = getFilteredMyGoals("executing");
  const filteredCompletedGoals = getFilteredMyGoals("completed");

  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item">目标模块</span>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active">我的目标</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="tab-row tab-row-simple">
            <div class="tabs">
              <button class="tab ${activeMyGoalTab === "pending" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="pending" type="button">待处理</button>
              <button class="tab ${activeMyGoalTab === "executing" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="executing" type="button">执行中</button>
              <button class="tab ${activeMyGoalTab === "completed" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="completed" type="button">已完成</button>
            </div>
          </div>

          ${
            activeMyGoalTab === "pending"
              ? `
                <div class="panel-body">
                  ${renderPendingFilterRow()}
                  ${renderPendingTable(filteredPendingGoals)}
                </div>
              `
              : activeMyGoalTab === "executing"
                ? `
                  <div class="panel-body">
                    ${renderExecutingFilterRow()}
                    ${renderExecutingCards(filteredExecutingGoals)}
                  </div>
                `
                : `
                  <div class="panel-body">
                    ${renderMyCompletedFilterRow()}
                    ${renderCompletedCards(filteredCompletedGoals)}
                  </div>
                `
          }
        </section>
      </div>
    </main>
  `;
}

function renderGoalManagementPage() {
  const filteredGoals = getFilteredGoals();

  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item">目标模块</span>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active">目标管理</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="tab-row">
            <div class="tabs">
              <button class="tab ${state.activeTab === "ongoing" ? "is-active" : ""}" data-action="set-tab" data-value="ongoing" type="button">进行中</button>
              <button class="tab ${state.activeTab === "completed" ? "is-active" : ""}" data-action="set-tab" data-value="completed" type="button">已完成</button>
            </div>
            <button class="launch-button" data-action="open-start-goal" type="button">
              <span>发起目标</span>
              ${renderArrow("right", "ui-arrow-xs")}
            </button>
          </div>

          ${
            state.activeTab === "ongoing"
              ? `
                <div class="panel-body">
                  ${renderOngoingFilterRow(filteredGoals)}
                  ${renderOngoingTable(filteredGoals)}
                </div>
              `
              : `
                <div class="panel-body">
                  ${renderCompletedFilterRow()}
                  ${renderCompletedTable(filteredGoals)}
                </div>
              `
          }
        </section>
      </div>
    </main>
  `;
}

function renderActivePage() {
  if (state.activePage === "workbench") {
    return renderDevelopingPage(state.activePage);
  }
  if (state.activePage === "task-module") {
    return renderDevelopingPage(state.activePage);
  }
  if (PLAN_PAGE_KEYS.includes(state.activePage) || state.activePage === "plan-module") {
    return renderDevelopingPage(state.activePage);
  }
  if (state.activePage === "goal-management") {
    return renderGoalManagementPage();
  }
  if (state.activePage === "goal-config") {
    return renderGoalConfigPage();
  }
  if (state.activePage === "goal-alignment") {
    return renderDevelopingPage(state.activePage);
  }
  if (BRIEF_PAGE_KEYS.includes(state.activePage) || state.activePage === "brief-module") {
    return renderDevelopingPage(state.activePage);
  }
  if (STATS_PAGE_KEYS.includes(state.activePage) || state.activePage === "stats-module") {
    return renderDevelopingPage(state.activePage);
  }
  if (SETTINGS_PAGE_KEYS.includes(state.activePage) || state.activePage === "settings-module") {
    return renderDevelopingPage(state.activePage);
  }
  return renderMyGoalsPage();
}

function renderGoalModal(goal) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">${escapeHtml(goal.title)}</h2>
          <p class="panel-subtitle">${goal.goalType ? "已完成目标详情，当前仅支持查看。" : "执行阶段目标详情，当前仅支持查看。"}</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="panel-content">
        <div class="goal-card">
          <div class="goal-meta-grid">
            <div class="meta-item">
              <div class="meta-label">周期</div>
              <div class="meta-value">${escapeHtml(goal.period)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">执行人</div>
              <div class="meta-value">${escapeHtml(goal.executor)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">当前值</div>
              <div class="meta-value">${escapeHtml(goal.currentValue)}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">${goal.goalType ? "得分" : "参考得分"}</div>
              <div class="meta-value">${escapeHtml(goal.scoreText || String(goal.score ?? "-"))}</div>
            </div>
          </div>
          <div>
            <h3 class="section-title">KR 明细</h3>
            <div class="kr-list">
              ${goal.keyResults
                .map(
                  (item) => `
                    <div class="kr-item">
                      <h4>${escapeHtml(item.title)}</h4>
                      <p>当前值：${escapeHtml(item.value)}，${escapeHtml(item.score)}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDrawer(goal) {
  const stageLabel = STAGE_META[goal.stage].label;
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <aside class="drawer" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">审批单详情</h2>
          <p class="panel-subtitle">${escapeHtml(goal.title)}</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="drawer-content">
        <span class="drawer-status">${stageLabel}</span>

        <div class="goal-meta-grid" style="margin-top: 20px;">
          <div class="meta-item">
            <div class="meta-label">审批单号</div>
            <div class="meta-value">${escapeHtml(goal.approvalNo)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">周期</div>
            <div class="meta-value">${escapeHtml(goal.period)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">发起人</div>
            <div class="meta-value">${escapeHtml(goal.executor)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">当前状态</div>
            <div class="meta-value">${stageLabel}</div>
          </div>
        </div>

        <h3 class="section-title">OA 审批流程</h3>
        <div class="oa-steps">
          <div class="oa-step">
            <h4>步骤 1：同步考核周期</h4>
            <p>系统已校验目标所属周期为 ${escapeHtml(goal.period)}，字段状态正常。</p>
          </div>
          <div class="oa-step">
            <h4>步骤 2：同步执行阶段</h4>
            <p>当前处于“${stageLabel}”阶段，关闭抽屉后列表会自动刷新。</p>
          </div>
          <div class="oa-step">
            <h4>步骤 3：审批流记录</h4>
            <p>审批单 ${escapeHtml(goal.approvalNo)} 已回写到业务表，后续支持继续推进评分。</p>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderPendingDrawer(goal) {
  const stageLabel = (MY_GOAL_STAGE_META[goal.stage] || MY_GOAL_STAGE_META.executing).label;
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <aside class="drawer" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">审批单详情</h2>
          <p class="panel-subtitle">${escapeHtml(goal.title)}</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="drawer-content">
        ${pendingStageTag(goal)}

        <div class="goal-meta-grid" style="margin-top: 20px;">
          <div class="meta-item">
            <div class="meta-label">审批单号</div>
            <div class="meta-value">${escapeHtml(goal.approvalNo)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">到达时间</div>
            <div class="meta-value">${escapeHtml(goal.arrivedAt)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">周期</div>
            <div class="meta-value">${escapeHtml(goal.period)}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">当前状态</div>
            <div class="meta-value">${escapeHtml(stageLabel)}</div>
          </div>
        </div>

        <h3 class="section-title">OA 审批单</h3>
        <div class="oa-steps">
          <div class="oa-step">
            <h4>审批类型</h4>
            <p>${escapeHtml(goal.processType)} 已同步到当前用户的待处理列表。</p>
          </div>
          <div class="oa-step">
            <h4>当前值</h4>
            <p>${escapeHtml(goal.currentValue)}，处理完成后会从待处理列表移除。</p>
          </div>
          <div class="oa-step">
            <h4>处理说明</h4>
            <p>这里用本地 mock 抽屉模拟钉钉 OA 审批，点击下方按钮即可完成处理。</p>
          </div>
        </div>
      </div>
      <div class="panel-footer drawer-footer">
        <button class="modal-button" data-action="close-overlay" type="button">稍后处理</button>
        <button class="modal-button-primary" data-action="complete-pending-process" data-value="${goal.id}" type="button">模拟处理完成</button>
      </div>
    </aside>
  `;
}

function renderConfirmModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal confirm-modal" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">${escapeHtml(overlay.title)}</h2>
          <p class="panel-subtitle">${escapeHtml(overlay.summary)}</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="confirm-copy">${escapeHtml(overlay.description)}</div>
      <div class="panel-footer">
        <button class="modal-button" data-action="close-overlay" type="button">取消</button>
        <button class="modal-button-primary" data-action="confirm-overlay" type="button">确认</button>
      </div>
    </div>
  `;
}

function renderStartGoalRemoveIcon() {
  return `
    <svg class="start-goal-remove-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.66675 4.66663L11.3334 11.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M11.3334 4.66663L4.66675 11.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
}

function renderStartGoalModalInner(overlay) {
  const nextOverlay = getStartGoalOverlay(overlay);
  const available = getStartGoalVisibleGoals(nextOverlay);
  const selectedGoals = getStartGoalSelectedGoals(nextOverlay);
  const groupOptions = getStartGoalGroupOptions(nextOverlay.source);
  const groupLabel =
    (groupOptions.find((item) => item.id === nextOverlay.groupId) || groupOptions[0] || { label: "全部分组" }).label;
  const allSelected =
    available.length > 0 &&
    available.every((goal) => (nextOverlay.selectedIds || []).includes(goal.id));

  return `
      <div class="start-goal-period-row">
        <div class="start-goal-period-title">选择发起周期</div>
        <div class="start-goal-period-selects">
          <div class="start-goal-period-type">
            <span>${START_GOAL_PERIOD_TYPE_OPTIONS[0].label}</span>
            ${renderArrow("down", "ui-arrow-sm")}
          </div>
          <div class="control start-goal-period-control">
            <button class="start-goal-period-button" data-action="toggle-dropdown" data-value="start-goal-period" type="button">
              <span>${escapeHtml(nextOverlay.period)}</span>
              ${renderArrow("down", "ui-arrow-sm")}
            </button>
            ${
              state.openDropdown === "start-goal-period"
                ? `
                  <div class="dropdown-panel start-goal-dropdown">
                    ${START_GOAL_PERIOD_OPTIONS.map(
                      (item) => `
                        <button class="dropdown-option ${nextOverlay.period === item ? "is-active" : ""}" data-action="set-start-goal-period" data-value="${item}" type="button">${item}</button>
                      `
                    ).join("")}
                  </div>
                `
                : ""
            }
          </div>
        </div>
      </div>
      <div class="start-goal-body">
        <div class="start-goal-column">
          <div class="start-goal-column-toolbar">
            <button class="start-goal-all-button ${allSelected ? "is-active" : ""}" data-action="toggle-start-goal-all" type="button">全选</button>
            <div class="control start-goal-group-control">
              <button class="start-goal-group-button" data-action="toggle-dropdown" data-value="start-goal-group" type="button">
                <span class="truncate">${escapeHtml(groupLabel)}</span>
                ${renderArrow("down", "ui-arrow-sm")}
              </button>
              ${
                state.openDropdown === "start-goal-group"
                  ? `
                    <div class="dropdown-panel start-goal-dropdown">
                      ${groupOptions
                        .map(
                          (item) => `
                            <button class="dropdown-option ${nextOverlay.groupId === item.id ? "is-active" : ""}" data-action="set-start-goal-group" data-value="${item.id}" type="button">${escapeHtml(item.label)}</button>
                          `
                        )
                        .join("")}
                    </div>
                  `
                  : ""
              }
            </div>
          </div>
          <div class="start-goal-card-list">
            ${
              available.length
                ? available
                    .map(
                      (goal) => `
                        <button class="start-goal-item" data-action="toggle-library-goal" data-value="${goal.id}" type="button">
                          <span class="start-goal-item-checkbox">${renderCheckboxIndicator(
                            (nextOverlay.selectedIds || []).includes(goal.id) ? "checked" : "unchecked"
                          )}</span>
                          <span class="goal-chip start-goal-item-chip">目标</span>
                          <span class="start-goal-item-title">${escapeHtml(goal.title)}</span>
                        </button>
                      `
                    )
                    .join("")
                : '<div class="start-goal-empty">暂无可发起目标</div>'
            }
          </div>
        </div>

        <div class="start-goal-column is-selected">
          <div class="start-goal-selected-title">已选-待发起目标</div>
          <div class="start-goal-card-list">
            ${
              selectedGoals.length
                ? selectedGoals
                    .map(
                      (goal) => `
                        <div class="start-goal-item is-selected">
                          <span class="goal-chip start-goal-item-chip">目标</span>
                          <span class="start-goal-item-title">${escapeHtml(goal.title)}</span>
                          <button class="start-goal-remove-button" data-action="remove-start-goal" data-value="${goal.id}" type="button" aria-label="移除目标">
                            ${renderStartGoalRemoveIcon()}
                          </button>
                        </div>
                      `
                    )
                    .join("")
                : '<div class="start-goal-empty">请先在左侧选择待发起目标</div>'
            }
          </div>
        </div>
      </div>
      <div class="panel-footer start-goal-footer">
        <div class="start-goal-footer-period">${escapeHtml(formatLaunchPeriod(nextOverlay.period))}</div>
        <button class="modal-button" data-action="close-overlay" type="button">取消</button>
        <button class="modal-button-primary" data-action="confirm-start-goal" type="button" ${selectedGoals.length === 0 ? "disabled" : ""}>发起</button>
      </div>
  `;
}

function syncStartGoalModal() {
  if (!state.overlay || state.overlay.type !== "start-goal") {
    return false;
  }

  const modal = document.querySelector(".start-goal-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  const listScrollTops = [...modal.querySelectorAll(".start-goal-card-list")].map((list) =>
    list instanceof HTMLElement ? list.scrollTop : 0
  );

  modal.innerHTML = renderStartGoalModalInner(state.overlay);
  modal.querySelectorAll(".start-goal-card-list").forEach((list, index) => {
    if (list instanceof HTMLElement) {
      list.scrollTop = listScrollTops[index] || 0;
    }
  });
  return true;
}

function renderStartGoalModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal start-goal-modal" data-overlay-panel="true">${renderStartGoalModalInner(overlay)}</div>
  `;
}

function renderInfoModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal info-modal" data-overlay-panel="true">
      <div class="panel-header">
        <div>
          <h2 class="panel-title">${escapeHtml(overlay.title)}</h2>
          <p class="panel-subtitle">${escapeHtml(overlay.summary || "")}</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="panel-content">
        ${
          overlay.kind === "executors"
            ? `
              <div class="info-tag-list">
                ${overlay.items
                  .map(
                    (item) => `
                      <span class="goal-config-user-tag">${escapeHtml(item)}</span>
                    `
                  )
                  .join("")}
              </div>
            `
            : `
              <div class="oa-steps">
                ${overlay.items
                  .map(
                    (item) => `
                      <div class="oa-step">
                        <h4>${escapeHtml(item.title)}</h4>
                        <p>${escapeHtml(item.description)}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
        }
      </div>
      <div class="panel-footer">
        <button class="modal-button-primary" data-action="close-overlay" type="button">我知道了</button>
      </div>
    </div>
  `;
}

function renderOverlay() {
  if (!state.overlay) {
    return "";
  }

  if (state.overlay.type === "goal-modal") {
    const goal = getGoal(state.overlay.goalId, state.overlay.tabKey);
    return goal ? `<div class="overlay-root">${renderGoalModal(goal)}</div>` : "";
  }

  if (state.overlay.type === "drawer") {
    const goal = getGoal(state.overlay.goalId, state.overlay.tabKey);
    return goal ? `<div class="overlay-root">${renderDrawer(goal)}</div>` : "";
  }

  if (state.overlay.type === "pending-drawer") {
    const goal = getMyGoal(state.overlay.goalId, "pending");
    return goal ? `<div class="overlay-root">${renderPendingDrawer(goal)}</div>` : "";
  }

  if (state.overlay.type === "confirm") {
    return `<div class="overlay-root">${renderConfirmModal(state.overlay)}</div>`;
  }

  if (state.overlay.type === "start-goal") {
    return `<div class="overlay-root">${renderStartGoalModal(state.overlay)}</div>`;
  }

  if (state.overlay.type === "goal-config-process-create") {
    return `<div class="overlay-root">${renderGoalConfigProcessCreateModal(state.overlay)}</div>`;
  }

  if (state.overlay.type === "goal-config-process-guide") {
    return `<div class="overlay-root">${renderGoalConfigProcessGuideModal(state.overlay)}</div>`;
  }

  if (state.overlay.type === "info") {
    return `<div class="overlay-root">${renderInfoModal(state.overlay)}</div>`;
  }

  return "";
}

function openGoalView(goalId, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const goal = getGoal(goalId, currentTab);
  if (!goal) {
    return;
  }

  state.openRowMenu = null;
  state.overlay =
    currentTab === "completed" || goal.stage === "executing"
      ? { type: "goal-modal", goalId, tabKey: currentTab }
      : { type: "drawer", goalId, tabKey: currentTab };
}

function buildConfirmOverlay(kind, goalIds, tabKey = getTabKey()) {
  const count = goalIds.length;
  const isDelete = kind === "delete";
  return {
    type: "confirm",
    kind,
    tabKey: getTabKey(tabKey),
    goalIds,
    title: isDelete ? "确认删除目标" : "确认推进评分",
    summary: isDelete
      ? `本次将删除 ${count} 个目标。`
      : `本次将把 ${count} 个目标推进到评分阶段。`,
    description: isDelete
      ? "删除后当前列表会立即刷新，操作不可恢复。"
      : "确认后会同步更新本地 mock 数据，关闭弹窗后自动刷新表格。",
  };
}

function buildGoalConfigConfirmOverlay(scope, payload) {
  if (scope === "goal") {
    return {
      type: "confirm",
      scope: "goal-config-goal",
      goalIds: payload.goalIds,
      title: "确认删除目标",
      summary: `本次将删除 ${payload.goalIds.length} 个目标。`,
      description: "删除后会立即从目标库移除，操作不可恢复。",
    };
  }
  if (scope === "recycle") {
    const count = state.goalConfigGoals.filter((goal) => goal.groupId === "recycle").length;
    return {
      type: "confirm",
      scope: "goal-config-recycle",
      title: "确认清空周转箱",
      summary: `本次将删除 ${count} 个周转箱内目标。`,
      description: "清空后周转箱中的目标会被永久移除，操作不可恢复。",
    };
  }
  const { groupIds, goals } = getGoalConfigDeleteScope(payload.groupId);
  return {
    type: "confirm",
    scope: "goal-config-group",
    groupId: payload.groupId,
    title: "确认删除分组",
    summary: `本次将删除 ${groupIds.length} 个分组，并转移 ${goals.length} 个目标。`,
    description: "删除后分组及其子分组会从左侧树形结构移除，分组内目标将进入周转箱。",
  };
}

function applyAdvance(goalIds, tabKey = getTabKey()) {
  if (getTabKey(tabKey) !== "ongoing") {
    return;
  }
  const targets = new Set(goalIds);
  const ratingTasks = [];
  state.goals = state.goals.map((goal) => {
    if (!targets.has(goal.id)) {
      return goal;
    }
    const nextGoal = convertGoalToRating(goal);
    ratingTasks.push(createPendingTaskFromGoal(nextGoal, "rating"));
    return nextGoal;
  });
  state.pendingGoals = [...ratingTasks, ...state.pendingGoals.filter((goal) => !targets.has(goal.id))];
  setActiveSelection([], tabKey);
  state.overlay = null;
  state.openRowMenu = null;
  showToast("目标已推进到评分审批");
}

function removeGoalInstanceEverywhere(goalIds) {
  const targets = new Set(Array.isArray(goalIds) ? goalIds : [goalIds]);
  state.goals = state.goals.filter((goal) => !targets.has(goal.id));
  state.completedGoals = state.completedGoals.filter((goal) => !targets.has(goal.id));
  state.pendingGoals = state.pendingGoals.filter((goal) => !targets.has(goal.id));
  state.myExecutingGoals = state.myExecutingGoals.filter((goal) => !targets.has(goal.id));
  state.myCompletedGoals = state.myCompletedGoals.filter((goal) => !targets.has(goal.id));
}

function applyDelete(goalIds, tabKey = getTabKey()) {
  removeGoalInstanceEverywhere(goalIds);
  setActiveSelection([], tabKey);
  state.overlay = null;
  state.openRowMenu = null;
  showToast("目标已删除");
}

function completePendingProcess(goalId) {
  const pendingGoal = state.pendingGoals.find((goal) => goal.id === goalId);
  if (!pendingGoal) {
    return;
  }

  state.pendingGoals = state.pendingGoals.filter((goal) => goal.id !== goalId);

  if (pendingGoal.stage === "confirming") {
    const ongoingGoal = state.goals.find((goal) => goal.id === goalId);
    if (ongoingGoal) {
      const nextGoal = convertGoalToExecuting(ongoingGoal);
      state.goals = state.goals.map((goal) => (goal.id === goalId ? nextGoal : goal));

      if (isCurrentUserExecutor(nextGoal.executorId)) {
        state.myExecutingGoals = [
          createMyExecutingGoalFromGoal(nextGoal),
          ...state.myExecutingGoals.filter((goal) => goal.id !== goalId),
        ];
      }
    }

    state.overlay = null;
    state.openDropdown = null;
    state.openRowMenu = null;
    showToast("确认审批已完成，目标进入执行中");
    return;
  }

  const sourceGoal = state.goals.find((goal) => goal.id === goalId) || pendingGoal;
  removeGoalInstanceEverywhere(goalId);
  state.completedGoals = [createCompletedGoalFromGoal(sourceGoal), ...state.completedGoals];

  if (isCurrentUserExecutor(sourceGoal.executorId)) {
    state.myCompletedGoals = [createMyCompletedGoalFromGoal(sourceGoal), ...state.myCompletedGoals];
  }

  state.overlay = null;
  state.openDropdown = null;
  state.openRowMenu = null;
  showToast("评分审批已完成，目标进入已完成");
}

function confirmOverlayAction() {
  if (!state.overlay || state.overlay.type !== "confirm") {
    return false;
  }
  if (state.overlay.scope === "goal-config-goal") {
    const targets = new Set(state.overlay.goalIds || []);
    state.goalConfigGoals = state.goalConfigGoals.filter((goal) => !targets.has(goal.id));
    if (state.goalConfig.editingDraft && targets.has(state.goalConfig.editingDraft.id)) {
      state.goalConfig.editingDraft = null;
      state.goalConfig.editingGoalId = null;
    }
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("目标已删除");
    return false;
  }
  if (state.overlay.scope === "goal-config-recycle") {
    state.goalConfigGoals = state.goalConfigGoals.filter((goal) => goal.groupId !== "recycle");
    if (state.goalConfig.editingDraft && state.goalConfig.editingDraft.groupId === "recycle") {
      state.goalConfig.editingDraft = null;
      state.goalConfig.editingGoalId = null;
    }
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("周转箱已清空");
    return false;
  }
  if (state.overlay.scope === "goal-config-group") {
    const groupId = state.overlay.groupId;
    const { groupSet } = getGoalConfigDeleteScope(groupId);
    state.goalConfigGoals = state.goalConfigGoals.map((goal) =>
      groupSet.has(goal.groupId) ? { ...goal, groupId: "recycle" } : goal
    );
    if (state.goalConfig.editingDraft && groupSet.has(state.goalConfig.editingDraft.groupId)) {
      state.goalConfig.editingDraft = {
        ...state.goalConfig.editingDraft,
        groupId: "recycle",
      };
    }
    state.goalConfigGroups = state.goalConfigGroups.filter((group) => !groupSet.has(group.id));
    state.goalConfig.expandedGroupIds = state.goalConfig.expandedGroupIds.filter((id) => !groupSet.has(id));
    if (groupSet.has(state.goalConfig.selectedGroupId)) {
      state.goalConfig.selectedGroupId = "recycle";
    }
    state.goalConfig.editingGroupId = null;
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("分组已删除，目标已移入周转箱");
    return false;
  }
  if (state.overlay.scope === "goal-config-process") {
    const targets = new Set(state.overlay.processIds || []);
    state.goalConfigProcesses = state.goalConfigProcesses.filter((item) => !targets.has(item.id) || item.isDefault);
    state.goalConfig.processSelection = state.goalConfig.processSelection.filter((id) => !targets.has(id));
    cancelGoalConfigProcessEditing();
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("流程已删除");
    return false;
  }
  if (state.overlay.scope === "demo-reset-step-1") {
    state.overlay = buildResetDemoConfirmOverlay(2);
    return false;
  }
  if (state.overlay.scope === "demo-reset-step-2") {
    clearDemoStorageAndReload();
    return true;
  }
  if (state.overlay.kind === "advance") {
    applyAdvance(state.overlay.goalIds, state.overlay.tabKey);
    return false;
  }
  if (state.overlay.kind === "delete") {
    applyDelete(state.overlay.goalIds, state.overlay.tabKey);
  }
  return false;
}

function confirmStartGoal() {
  if (!state.overlay || state.overlay.type !== "start-goal") {
    return;
  }
  const overlay = getStartGoalOverlay(state.overlay);
  const selectedGoals = getStartGoalSelectedGoals(overlay);
  if (!selectedGoals.length || !overlay.period) {
    return;
  }

  const instances = selectedGoals.flatMap((goal) =>
    (goal.executors || []).map((executorId) => createManagementGoalInstance(goal, executorId, overlay.period))
  );

  state.goals = [...instances, ...state.goals];
  state.pendingGoals = [
    ...instances.map((goal) => createPendingTaskFromGoal(goal, "confirming")),
    ...state.pendingGoals,
  ];
  state.overlay = null;
  state.activePage = "goal-management";
  state.filters.ongoing.stage = "all";
  state.filters.ongoing.keyword = "";
  state.filters.ongoing.period = "all";
  state.filters.ongoing.members = [];
  state.activeTab = "ongoing";
  setActivePage(1, "ongoing");
  setActiveSelection([], "ongoing");
  state.openDropdown = null;
  state.openRowMenu = null;
  showToast(`已发起 ${instances.length} 个目标实例，进入确认审批`);
}

function openGoalConfigInfoOverlay(kind, goalId) {
  const goal = getGoalConfigGoal(goalId);
  if (!goal) {
    return;
  }

  if (kind === "executors") {
    const items = getGoalConfigExecutorText(goal.executors);
    state.overlay = {
      type: "info",
      kind,
      title: "执行人列表",
      summary: goal.title,
      items: items.length ? items : ["未设置执行人"],
    };
    return;
  }

  state.overlay = {
    type: "info",
    kind,
    title: "目标记录",
    summary: goal.title,
    items: [
      {
        title: "目标创建",
        description: `${new Date(goal.createdAt).toLocaleDateString("zh-CN")} 已在目标库中创建当前目标。`,
      },
      {
        title: "流程绑定",
        description: `当前目标已绑定「${goal.flow}」，执行人与评分规则已就绪。`,
      },
      {
        title: "目标类型",
        description: `当前目标属于「${getGoalConfigTypeLabel(goal.type)}」，卡片展示已按对应规则适配。`,
      },
    ],
  };
}

function startGoalConfigEditing(goal) {
  state.goalConfig.editingGoalId = goal.id;
  state.goalConfig.editingDraft = createGoalConfigDraft(goal);
  clearGoalConfigPanels();
  state.openDropdown = null;
  state.overlay = null;
}

function clearGoalConfigEditing() {
  state.goalConfig.editingGoalId = null;
  state.goalConfig.editingDraft = null;
  state.openDropdown = null;
}

function createGoalConfigGroup(parentId = null) {
  if (parentId) {
    const parentGroup = getGoalConfigGroup(parentId);
    if (parentGroup && getGoalConfigGroupLevel(parentGroup) >= GOAL_CONFIG_MAX_DEPTH) {
      showToast(`分组层级最多支持 ${GOAL_CONFIG_MAX_LEVEL} 级`);
      clearGoalConfigPanels();
      return;
    }
  }

  const nextId = `goal-group-${Date.now()}-${Math.random().toString(16).slice(2, 5)}`;
  const nextGroup = {
    id: nextId,
    label: "未命名分组",
    parentId,
    count: 0,
    kind: "folder",
  };
  const recycleIndex = state.goalConfigGroups.findIndex((group) => group.id === "recycle");
  if (recycleIndex >= 0 && parentId === null) {
    state.goalConfigGroups.splice(recycleIndex, 0, nextGroup);
  } else {
    state.goalConfigGroups.push(nextGroup);
  }
  if (parentId && !state.goalConfig.expandedGroupIds.includes(parentId)) {
    state.goalConfig.expandedGroupIds = [...state.goalConfig.expandedGroupIds, parentId];
  }
  state.goalConfig.selectedGroupId = nextId;
  state.goalConfig.editingGroupId = nextId;
  clearGoalConfigPanels();
}

function saveGoalConfigDraft() {
  const sourceDraft = clone(state.goalConfig.editingDraft);
  const draft = normalizeGoalConfigDraft(sourceDraft);
  if (!draft) {
    return;
  }

  if (!draft.title.trim()) {
    showToast("请先填写目标名称");
    return;
  }

  if (!draft.krs.length) {
    showToast("请至少保留一个关键结果");
    return;
  }

  const hasEmptyKr = draft.krs.some((kr) => !kr.title.trim());
  if (hasEmptyKr) {
    showToast("请先补全关键结果名称");
    return;
  }

  if (draft.type === "auto" || draft.type === "weighted") {
    const editableKrs = (sourceDraft.krs || []).slice(0, Math.max(0, (sourceDraft.krs || []).length - 1));
    const missingWeightIndex = editableKrs.findIndex((kr) => !String(kr.weight || "").replace("%", "").trim());
    if (missingWeightIndex !== -1) {
      showToast(`请补全 KR${missingWeightIndex + 1} 的权重`);
      return;
    }
  }

  if (draft.type === "auto") {
    const missingMetricsIndex = draft.krs.findIndex((kr) =>
      [kr.threshold, kr.passing, kr.challenge].some((item) => !String(item || "").trim())
    );
    if (missingMetricsIndex !== -1) {
      showToast(`请补全 KR${missingMetricsIndex + 1} 的门槛、及格、挑战`);
      return;
    }

    const nonNumericMetricIndex = draft.krs.findIndex((kr) =>
      [kr.threshold, kr.passing, kr.challenge].some((item) => !isGoalConfigNumericValue(item))
    );
    if (nonNumericMetricIndex !== -1) {
      showToast(`KR${nonNumericMetricIndex + 1} 的门槛、及格、挑战只能输入数字`);
      return;
    }

    const invalidOrderIndex = draft.krs.findIndex((kr) =>
      !isGoalConfigStrictOrderedTriple([Number(kr.threshold), Number(kr.passing), Number(kr.challenge)])
    );
    if (invalidOrderIndex !== -1) {
      showToast(`KR${invalidOrderIndex + 1} 的门槛、及格、挑战只支持大中小或小中大`);
      return;
    }
  }

  const nextGoal = {
    ...draft,
    title: draft.title.trim(),
    groupId: draft.groupId || resolveGoalConfigTargetGroupId(),
    isNew: undefined,
    krs: draft.krs.map((kr) => ({
      ...kr,
      title: kr.title.trim(),
    })),
  };

  if (draft.isNew) {
    state.goalConfigGoals = [nextGoal, ...state.goalConfigGoals];
    showToast("目标已创建");
  } else {
    state.goalConfigGoals = state.goalConfigGoals.map((goal) => (goal.id === nextGoal.id ? nextGoal : goal));
    showToast("目标已更新");
  }

  state.goalConfig.keyword = "";
  state.goalConfig.type = "all";
  state.goalConfig.selectedGroupId = nextGoal.groupId;
  state.goalConfig.expandedGroupIds = [...new Set([...state.goalConfig.expandedGroupIds, ...getGoalConfigAncestors(nextGoal.groupId)])];
  clearGoalConfigEditing();
  clearGoalConfigPanels();
}

function getInputPreserveFocus(input) {
  if (!(input instanceof HTMLInputElement) || !input.dataset.field) {
    return null;
  }

  if (input.dataset.processId) {
    return {
      selector: `[data-field="${input.dataset.field}"][data-process-id="${input.dataset.processId}"]`,
      start: input.selectionStart,
      end: input.selectionEnd,
    };
  }

  if (input.dataset.field === "goal-config-group-name" && input.dataset.groupId) {
    return {
      selector: `[data-field="goal-config-group-name"][data-group-id="${input.dataset.groupId}"]`,
      start: input.selectionStart,
      end: input.selectionEnd,
    };
  }

  if (input.dataset.krId) {
    return {
      selector: `[data-field="${input.dataset.field}"][data-kr-id="${input.dataset.krId}"]`,
      start: input.selectionStart,
      end: input.selectionEnd,
    };
  }

  return {
    selector: `[data-field="${input.dataset.field}"]`,
    start: input.selectionStart,
    end: input.selectionEnd,
  };
}

function shouldDeferInputRender(event) {
  return (
    event.isComposing ||
    (event.target instanceof HTMLInputElement && event.target.dataset.composing === "true")
  );
}

function render(preserveFocus) {
  const ongoingIds = new Set(state.goals.map((goal) => goal.id));
  const completedIds = new Set(state.completedGoals.map((goal) => goal.id));
  state.selectionByTab.ongoing = getActiveSelection("ongoing").filter((id) => ongoingIds.has(id));
  state.selectionByTab.completed = getActiveSelection("completed").filter((id) => completedIds.has(id));

  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      <div class="app-body">
        ${renderSidebar()}
        ${renderActivePage()}
      </div>
    </div>
    ${renderGoalConfigProcessGuidePreload()}
    ${renderOverlay()}
  `;

  persistState();
  syncToast();

  if (preserveFocus && preserveFocus.selector) {
    const input = document.querySelector(preserveFocus.selector);
    if (input) {
      input.focus();
      if (typeof preserveFocus.start === "number" && typeof preserveFocus.end === "number") {
        input.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
  }
}

preloadGoalConfigProcessGuideImages();

function animateSidebarCollapse(target) {
  const sidebar = document.querySelector(".sidebar");
  const nextCollapsed = !state.sidebarCollapsed;

  state.sidebarCollapsed = nextCollapsed;
  closeTransientPanels();
  state.overlay = null;

  if (!sidebar) {
    render();
    return;
  }

  sidebar.classList.toggle("is-collapsed", nextCollapsed);

  const collapseButton = sidebar.querySelector(".collapse-button");
  if (collapseButton) {
    collapseButton.classList.toggle("is-collapsed", nextCollapsed);
    collapseButton.setAttribute("aria-label", nextCollapsed ? "展开导航" : "收起导航");
    collapseButton.setAttribute("title", nextCollapsed ? "展开导航" : "收起导航");
  }

  const goalPopover = sidebar.querySelector(".sidebar-goal-popover");
  if (goalPopover) {
    goalPopover.remove();
  }

  if (target instanceof HTMLElement) {
    target.setAttribute("aria-label", nextCollapsed ? "展开导航" : "收起导航");
    target.setAttribute("title", nextCollapsed ? "展开导航" : "收起导航");
  }

  persistState();
}

function onAction(action, value, target) {
  const tabKey = getTabKey();
  const filters = getActiveFilters(tabKey);
  const filteredGoals = getFilteredGoals(tabKey);
  const paged = getPagedGoals(filteredGoals, tabKey).items;
  const selectedIds = getActiveSelection(tabKey);
  const myGoalTab = getMyGoalTabKey();
  const filteredMyGoals = getFilteredMyGoals(myGoalTab);

  switch (action) {
    case "toggle-sidebar-group": {
      if (state.sidebarCollapsed) {
        break;
      } else {
        setSidebarGroupExpanded(value, !isSidebarGroupExpanded(value));
        state.openDropdown = null;
      }
      break;
    }
    case "navigate-page":
      state.activePage = normalizeGoalPage(value);
      resetGoalPageEntryTab(state.activePage);
      if (getSidebarGroupKeyByPage(state.activePage)) {
        setSidebarGroupExpanded(getSidebarGroupKeyByPage(state.activePage), true);
      }
      closeTransientPanels();
      state.overlay = null;
      break;
    case "dismiss-guide":
      state.guideDismissed = true;
      break;
    case "request-demo-reset":
      state.overlay = buildResetDemoConfirmOverlay(1);
      closeTransientPanels();
      break;
    case "toggle-dropdown":
      state.openDropdown = state.openDropdown === value ? null : value;
      state.openRowMenu = null;
      if (
        state.overlay?.type === "start-goal" &&
        (value === "start-goal-period" || value === "start-goal-group")
      ) {
        syncStartGoalModal();
        return;
      }
      break;
    case "toggle-my-goal-dropdown":
      state.openDropdown = state.openDropdown === value ? null : value;
      state.openRowMenu = null;
      break;
    case "set-my-goal-tab":
      state.myGoals.activeTab = value;
      closeTransientPanels();
      state.overlay = null;
      break;
    case "set-goal-config-tab":
      state.goalConfig.activeTab = value === "process" ? "process" : "library";
      closeTransientPanels();
      clearGoalConfigEditing();
      cancelGoalConfigProcessEditing();
      state.overlay = null;
      break;
    case "goal-config-select-group":
      state.goalConfig.selectedGroupId = value;
      state.goalConfig.editingGroupId = null;
      clearGoalConfigPanels();
      state.openDropdown = null;
      clearGoalConfigEditing();
      break;
    case "goal-config-toggle-group":
      if (state.goalConfig.expandedGroupIds.includes(value)) {
        state.goalConfig.expandedGroupIds = state.goalConfig.expandedGroupIds.filter((id) => id !== value);
      } else {
        state.goalConfig.expandedGroupIds = [...state.goalConfig.expandedGroupIds, value];
      }
      break;
    case "toggle-goal-config-dropdown":
      state.openDropdown = state.openDropdown === value ? null : value;
      clearGoalConfigPanels();
      state.openRowMenu = null;
      break;
    case "set-goal-config-type-filter":
      state.goalConfig.type = GOAL_CONFIG_TYPE_OPTIONS.some((option) => option.key === value) ? value : "all";
      state.openDropdown = null;
      clearGoalConfigEditing();
      break;
    case "goal-config-toggle-card-menu":
      state.goalConfig.cardMenuId = state.goalConfig.cardMenuId === value ? null : value;
      state.goalConfig.groupMenuId = null;
      state.openDropdown = null;
      break;
    case "goal-config-toggle-group-menu":
      state.goalConfig.groupMenuId = state.goalConfig.groupMenuId === value ? null : value;
      state.goalConfig.cardMenuId = null;
      state.openDropdown = null;
      break;
    case "goal-config-edit": {
      const goal = getGoalConfigGoal(value);
      if (goal) {
        startGoalConfigEditing(goal);
      }
      break;
    }
    case "goal-config-create-direct": {
      const draft = createGoalConfigDraft();
      state.goalConfig.editingGoalId = draft.id;
      state.goalConfig.editingDraft = draft;
      state.goalConfig.selectedGroupId = draft.groupId;
      clearGoalConfigPanels();
      state.openDropdown = null;
      break;
    }
    case "goal-config-import": {
      const draft = createGoalConfigDraft({
        id: `goal-config-import-${Date.now()}`,
        groupId: resolveGoalConfigTargetGroupId(),
        title: "导入的经营目标模板",
        type: "manual",
        alignedGoal: "",
        executors: ["yuyaobo", "zhangxudong"],
        flow: getDefaultGoalConfigFlow(),
        createdAt: new Date().toISOString(),
        isNew: true,
        krs: [
          createGoalConfigKr("manual", 0),
          createGoalConfigKr("manual", 1),
        ],
      });
      draft.krs[0].title = "补齐业务目标描述";
      draft.krs[1].title = "完成人工评分标准";
      state.goalConfig.editingGoalId = draft.id;
      state.goalConfig.editingDraft = draft;
      clearGoalConfigPanels();
      state.openDropdown = null;
      showToast("已载入导入模板，可继续编辑");
      break;
    }
    case "goal-config-ai-template": {
      const draft = createGoalConfigDraft({
        id: `goal-config-ai-${Date.now()}`,
        groupId: resolveGoalConfigTargetGroupId(),
        title: "AI 推荐的经营目标模板",
        type: "weighted",
        alignedGoal: "更好的经营企业",
        executors: ["liukan", "wuxuanyu"],
        flow: getGoalConfigFlowOptions()[1] || getDefaultGoalConfigFlow(),
        createdAt: new Date().toISOString(),
        isNew: true,
        krs: [createGoalConfigKr("weighted", 0), createGoalConfigKr("weighted", 1)],
      });
      draft.krs[0].title = "沉淀经营会前材料模板";
      draft.krs[0].weight = "40%";
      draft.krs[1].title = "推动核心团队完成试跑";
      draft.krs[1].weight = "60%";
      state.goalConfig.editingGoalId = draft.id;
      state.goalConfig.editingDraft = draft;
      clearGoalConfigPanels();
      state.openDropdown = null;
      showToast("已载入 AI 模板，可继续编辑");
      break;
    }
    case "goal-config-export":
      state.openDropdown = null;
      showToast("已模拟导出目标库");
      break;
    case "goal-config-save":
      saveGoalConfigDraft();
      break;
    case "goal-config-cancel":
      clearGoalConfigEditing();
      clearGoalConfigPanels();
      break;
    case "set-goal-config-draft-type":
      if (state.goalConfig.editingDraft) {
        state.goalConfig.editingDraft = normalizeGoalConfigDraft({
          ...state.goalConfig.editingDraft,
          type: value,
        });
      }
      break;
    case "set-goal-config-draft-align":
      if (state.goalConfig.editingDraft) {
        state.goalConfig.editingDraft = {
          ...state.goalConfig.editingDraft,
          alignedGoal: value || "",
        };
        state.openDropdown = null;
      }
      break;
    case "set-goal-config-draft-flow":
      if (state.goalConfig.editingDraft) {
        state.goalConfig.editingDraft = {
          ...state.goalConfig.editingDraft,
          flow: value,
        };
        state.openDropdown = null;
      }
      break;
    case "toggle-goal-config-executor":
      if (state.goalConfig.editingDraft) {
        const currentExecutors = new Set(state.goalConfig.editingDraft.executors || []);
        if (currentExecutors.has(value)) {
          currentExecutors.delete(value);
        } else {
          currentExecutors.add(value);
        }
        state.goalConfig.editingDraft = {
          ...state.goalConfig.editingDraft,
          executors: [...currentExecutors],
        };
      }
      break;
    case "goal-config-add-kr":
      if (state.goalConfig.editingDraft) {
        const draft = state.goalConfig.editingDraft;
        state.goalConfig.editingDraft = normalizeGoalConfigDraft({
          ...draft,
          krs: [...draft.krs, createGoalConfigKr(draft.type, draft.krs.length)],
        });
      }
      break;
    case "goal-config-remove-kr":
      if (state.goalConfig.editingDraft) {
        const draft = state.goalConfig.editingDraft;
        state.goalConfig.editingDraft = normalizeGoalConfigDraft({
          ...draft,
          krs: draft.krs.filter((kr) => kr.id !== value),
        });
      }
      break;
    case "goal-config-show-executors":
      openGoalConfigInfoOverlay("executors", value);
      clearGoalConfigPanels();
      break;
    case "goal-config-record":
      openGoalConfigInfoOverlay("record", value);
      clearGoalConfigPanels();
      break;
    case "goal-config-copy": {
      const goal = getGoalConfigGoal(value);
      if (goal) {
        const cloned = createGoalConfigDraft({
          ...clone(goal),
          id: `goal-config-copy-${Date.now()}`,
          title: `${goal.title}（副本）`,
          createdAt: new Date().toISOString(),
          isNew: true,
        });
        state.goalConfig.editingGoalId = cloned.id;
        state.goalConfig.editingDraft = cloned;
        state.goalConfig.selectedGroupId = cloned.groupId;
        clearGoalConfigPanels();
        showToast("已复制目标，请确认后保存");
      }
      break;
    }
    case "goal-config-delete":
      state.overlay = buildGoalConfigConfirmOverlay("goal", { goalIds: [value] });
      clearGoalConfigPanels();
      break;
    case "goal-config-add-group":
      createGoalConfigGroup(null);
      break;
    case "goal-config-add-child-group":
      createGoalConfigGroup(value);
      break;
    case "goal-config-rename-group":
      state.goalConfig.editingGroupId = value;
      clearGoalConfigPanels();
      break;
    case "goal-config-delete-group": {
      state.overlay = buildGoalConfigConfirmOverlay("group", { groupId: value });
      clearGoalConfigPanels();
      break;
    }
    case "goal-config-empty-recycle":
      state.overlay = buildGoalConfigConfirmOverlay("recycle", {});
      clearGoalConfigPanels();
      break;
    case "goal-config-sync-groups":
      clearGoalConfigPanels();
      showToast("已模拟同步组织架构");
      break;
    case "goal-config-collapse-tree":
      state.goalConfig.treeCollapsed = !state.goalConfig.treeCollapsed;
      clearGoalConfigPanels();
      break;
    case "open-goal-config-process-create":
      state.overlay = {
        type: "goal-config-process-create",
        processName: "",
      };
      clearGoalConfigPanels();
      state.openDropdown = null;
      break;
    case "confirm-goal-config-process-create":
      if (state.overlay && state.overlay.type === "goal-config-process-create") {
        const processName = normalizeProcessName(state.overlay.processName);
        if (!processName) {
          showToast("请输入流程名称");
          break;
        }
        state.goalConfigProcesses = [
          {
            id: createRuntimeId("goal-process"),
            name: processName,
            creatorId: CURRENT_APPROVER.id,
            creator: CURRENT_APPROVER.label,
            updatedAt: formatDateOnly(),
            isDefault: false,
          },
          ...state.goalConfigProcesses,
        ];
        state.goalConfig.processKeyword = "";
        setGoalConfigProcessPage(1);
        state.overlay = null;
        showToast("已创建流程，并模拟生成两个 OA 模板");
      }
      break;
    case "toggle-goal-config-process-row": {
      const process = state.goalConfigProcesses.find((item) => item.id === value);
      if (process?.isDefault) {
        break;
      }
      const next = new Set(state.goalConfig.processSelection || []);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      state.goalConfig.processSelection = [...next];
      break;
    }
    case "toggle-goal-config-process-all": {
      const pageProcesses = getGoalConfigProcessPaged(getFilteredGoalConfigProcesses()).items;
      const pageIds = pageProcesses.filter((item) => !item.isDefault).map((item) => item.id);
      const selectedSet = new Set(state.goalConfig.processSelection || []);
      const allSelected = pageIds.length > 0 && pageIds.every((id) => selectedSet.has(id));
      if (allSelected) {
        pageIds.forEach((id) => selectedSet.delete(id));
      } else {
        pageIds.forEach((id) => selectedSet.add(id));
      }
      state.goalConfig.processSelection = [...selectedSet];
      break;
    }
    case "toggle-goal-config-process-menu":
      state.goalConfig.processMenuId = state.goalConfig.processMenuId === value ? null : value;
      state.openDropdown = null;
      break;
    case "goal-config-process-edit-confirm":
      beginGoalConfigProcessEdit(value, "confirm");
      break;
    case "goal-config-process-edit-rating":
      beginGoalConfigProcessEdit(value, "rating");
      break;
    case "goal-config-process-guide-prev":
      if (state.overlay?.type === "goal-config-process-guide") {
        state.overlay = {
          ...state.overlay,
          step: Math.max(1, Number(value) || 1),
        };
        syncGoalConfigProcessGuideModal();
        return;
      }
      break;
    case "goal-config-process-guide-next":
      if (state.overlay?.type === "goal-config-process-guide") {
        state.overlay = {
          ...state.overlay,
          step: Math.min(GOAL_CONFIG_PROCESS_GUIDE_STEPS.length, Number(value) || 1),
        };
        syncGoalConfigProcessGuideModal();
        return;
      }
      break;
    case "toggle-goal-config-process-guide-reminder":
      if (state.overlay?.type === "goal-config-process-guide") {
        state.overlay = {
          ...state.overlay,
          dontRemind: !state.overlay.dontRemind,
        };
        syncGoalConfigProcessGuideModal();
        return;
      }
      break;
    case "complete-goal-config-process-guide":
      completeGoalConfigProcessGuide();
      break;
    case "goal-config-process-batch-apply":
      clearGoalConfigPanels();
      if (!state.goalConfigGoals.length) {
        showToast("请先创建目标");
      } else {
        showToast("已预留批量套用弹窗入口");
      }
      break;
    case "goal-config-process-rename": {
      const process = state.goalConfigProcesses.find((item) => item.id === value);
      if (process) {
        state.goalConfig.processEditingId = process.id;
        state.goalConfig.processEditingName = process.name;
        state.goalConfig.processMenuId = null;
      }
      break;
    }
    case "goal-config-process-set-default":
      state.goalConfigProcesses = state.goalConfigProcesses.map((item) => ({
        ...item,
        isDefault: item.id === value,
      }));
      clearGoalConfigPanels();
      showToast("默认流程已更新");
      break;
    case "goal-config-process-delete":
      state.overlay = buildGoalConfigProcessConfirmOverlay([value]);
      clearGoalConfigPanels();
      break;
    case "goal-config-process-delete-batch": {
      const ids = getGoalConfigSelectedProcesses()
        .filter((item) => !item.isDefault)
        .map((item) => item.id);
      if (ids.length) {
        state.overlay = buildGoalConfigProcessConfirmOverlay(ids);
      }
      break;
    }
    case "goal-config-process-page-prev":
      setGoalConfigProcessPage(Math.max(1, getGoalConfigProcessPage() - 1));
      break;
    case "goal-config-process-page-next": {
      const totalPages = getGoalConfigProcessPaged(getFilteredGoalConfigProcesses()).totalPages;
      setGoalConfigProcessPage(Math.min(totalPages, getGoalConfigProcessPage() + 1));
      break;
    }
    case "set-goal-config-process-page-size":
      state.pageSize = Number(value);
      setGoalConfigProcessPage(1);
      state.openDropdown = null;
      break;
    case "set-my-goal-period":
      getMyGoalFilters(myGoalTab).period = value;
      resetMyGoalListState(myGoalTab);
      break;
    case "set-my-goal-stage":
      getMyGoalFilters("pending").stage = value;
      resetMyGoalListState("pending");
      break;
    case "process-pending-goal":
      state.overlay = { type: "pending-drawer", goalId: value };
      break;
    case "complete-pending-process":
      completePendingProcess(value);
      break;
    case "my-goal-page-prev":
      setMyGoalPage(Math.max(1, getMyGoalPage(myGoalTab) - 1), myGoalTab);
      break;
    case "my-goal-page-next": {
      const totalPages = getMyGoalPagedGoals(filteredMyGoals, myGoalTab).totalPages;
      setMyGoalPage(Math.min(totalPages, getMyGoalPage(myGoalTab) + 1), myGoalTab);
      break;
    }
    case "set-my-goal-page-size":
      state.pageSize = Number(value);
      setMyGoalPage(1, myGoalTab);
      state.openDropdown = null;
      break;
    case "set-period":
      filters.period = value;
      resetListState(tabKey);
      break;
    case "toggle-member":
      if (filters.members.includes(value)) {
        filters.members = filters.members.filter((item) => item !== value);
      } else {
        filters.members = [...filters.members, value];
      }
      resetListState(tabKey);
      state.openDropdown = "members";
      break;
    case "set-stage":
      state.filters.ongoing.stage = value;
      resetListState("ongoing");
      break;
    case "set-type":
      state.filters.completed.type = value;
      resetListState("completed");
      break;
    case "toggle-select-row":
      if (selectedIds.includes(value)) {
        setActiveSelection(selectedIds.filter((id) => id !== value), tabKey);
      } else {
        setActiveSelection([...selectedIds, value], tabKey);
      }
      break;
    case "toggle-select-all": {
      const pageIds = paged.map((goal) => goal.id);
      const everySelected = pageIds.length > 0 && pageIds.every((id) => selectedIds.includes(id));
      if (everySelected) {
        setActiveSelection(selectedIds.filter((id) => !pageIds.includes(id)), tabKey);
      } else {
        const merged = new Set([...selectedIds, ...pageIds]);
        setActiveSelection([...merged], tabKey);
      }
      break;
    }
    case "toggle-row-menu":
      state.openDropdown = null;
      state.openRowMenu = state.openRowMenu === value ? null : value;
      break;
    case "view-goal":
      openGoalView(value, tabKey);
      break;
    case "request-advance":
      state.overlay = buildConfirmOverlay("advance", [value], tabKey);
      break;
    case "request-delete":
      state.overlay = buildConfirmOverlay("delete", [value], tabKey);
      break;
    case "advance-all": {
      const advanceState = getAdvanceActionState(filteredGoals, tabKey);
      if (!advanceState.isExecutingStage) {
        state.filters.ongoing.stage = "executing";
        resetListState("ongoing");
        break;
      }
      if (!advanceState.hasGoals) {
        showToast("当前没有可推进评分的目标");
        break;
      }
      if (advanceState.canAdvance) {
        state.overlay = buildConfirmOverlay(
          "advance",
          filteredGoals.filter((goal) => goal.stage === "executing").map((goal) => goal.id),
          tabKey
        );
      }
      break;
    }
    case "advance-batch":
      if (canAdvanceSelection(tabKey)) {
        state.overlay = buildConfirmOverlay(
          "advance",
          getSelectedGoals(tabKey).map((goal) => goal.id),
          tabKey
        );
      }
      break;
    case "delete-batch":
      if (selectedIds.length) {
        state.overlay = buildConfirmOverlay("delete", [...selectedIds], tabKey);
      }
      break;
    case "confirm-overlay":
      if (confirmOverlayAction()) {
        return;
      }
      break;
    case "open-start-goal":
      state.overlay = getStartGoalOverlay({
        source: "goal-config",
        selectedIds: [],
        groupId: "all",
      });
      state.openDropdown = null;
      break;
    case "set-start-goal-period":
      if (state.overlay && state.overlay.type === "start-goal") {
        state.overlay = { ...state.overlay, period: value };
        state.openDropdown = null;
        syncStartGoalModal();
        return;
      }
      break;
    case "set-start-goal-group":
      if (state.overlay && state.overlay.type === "start-goal") {
        state.overlay = { ...state.overlay, groupId: value };
        state.openDropdown = null;
        syncStartGoalModal();
        return;
      }
      break;
    case "toggle-start-goal-all":
      if (state.overlay && state.overlay.type === "start-goal") {
        const visibleIds = getStartGoalVisibleGoals(state.overlay).map((goal) => goal.id);
        const currentSelected = new Set(state.overlay.selectedIds || []);
        const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => currentSelected.has(id));

        if (allVisibleSelected) {
          visibleIds.forEach((id) => currentSelected.delete(id));
        } else {
          visibleIds.forEach((id) => currentSelected.add(id));
        }

        state.overlay = { ...state.overlay, selectedIds: [...currentSelected] };
        syncStartGoalModal();
        return;
      }
      break;
    case "toggle-library-goal":
      if (state.overlay && state.overlay.type === "start-goal") {
        const next = new Set(state.overlay.selectedIds || []);
        if (next.has(value)) {
          next.delete(value);
        } else {
          next.add(value);
        }
        state.overlay = { ...state.overlay, selectedIds: [...next] };
        syncStartGoalModal();
        return;
      }
      break;
    case "remove-start-goal":
      if (state.overlay && state.overlay.type === "start-goal") {
        state.overlay = {
          ...state.overlay,
          selectedIds: (state.overlay.selectedIds || []).filter((id) => id !== value),
        };
        syncStartGoalModal();
        return;
      }
      break;
    case "confirm-start-goal":
      confirmStartGoal();
      break;
    case "page-prev":
      setActivePage(Math.max(1, getActivePage(tabKey) - 1), tabKey);
      break;
    case "page-next": {
      const totalPages = getPagedGoals(filteredGoals, tabKey).totalPages;
      setActivePage(Math.min(totalPages, getActivePage(tabKey) + 1), tabKey);
      break;
    }
    case "set-page-size":
      state.pageSize = Number(value);
      setActivePage(1, tabKey);
      state.openDropdown = null;
      break;
    case "set-tab":
      state.activeTab = value;
      closeTransientPanels();
      state.overlay = null;
      break;
    case "close-overlay":
      state.overlay = null;
      break;
    case "collapse-nav":
      animateSidebarCollapse(target);
      return;
    default:
      break;
  }

  render();
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    onAction(actionTarget.dataset.action, actionTarget.dataset.value, actionTarget);
    return;
  }

  if (!event.target.closest(".dropdown-panel") && !event.target.closest(".control") && state.openDropdown) {
    state.openDropdown = null;
    render();
    return;
  }

  if (!event.target.closest(".row-menu") && !event.target.closest(".row-menu-trigger") && state.openRowMenu) {
    state.openRowMenu = null;
    render();
    return;
  }

  if (
    !event.target.closest(".goal-config-card-menu") &&
    !event.target.closest(".goal-config-group-menu") &&
    !event.target.closest(".goal-config-process-menu") &&
    !event.target.closest(".goal-config-icon-button") &&
    !event.target.closest(".row-menu-trigger") &&
    (state.goalConfig.cardMenuId || state.goalConfig.groupMenuId || state.goalConfig.processMenuId)
  ) {
    clearGoalConfigPanels();
    render();
  }
});

document.addEventListener("input", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  const preserveFocus = getInputPreserveFocus(event.target);
  const deferRender = shouldDeferInputRender(event);
  if (event.target.dataset.field === "keyword") {
    const tabKey = getTabKey();
    state.filters[tabKey].keyword = event.target.value;
    resetListState(tabKey);
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "my-goal-keyword") {
    const myGoalTab = getMyGoalTabKey();
    state.myGoals.filtersByTab[myGoalTab].keyword = event.target.value;
    resetMyGoalListState(myGoalTab);
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-group-search") {
    state.goalConfig.groupSearch = event.target.value;
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-keyword") {
    state.goalConfig.keyword = event.target.value;
    clearGoalConfigEditing();
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-process-keyword") {
    state.goalConfig.processKeyword = event.target.value;
    setGoalConfigProcessPage(1);
    state.goalConfig.processSelection = [];
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-process-name" && event.target.dataset.processId) {
    state.goalConfig.processEditingName = event.target.value;
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-create-process-name" && state.overlay?.type === "goal-config-process-create") {
    state.overlay = {
      ...state.overlay,
      processName: event.target.value,
    };
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "goal-config-group-name") {
    state.goalConfigGroups = state.goalConfigGroups.map((group) =>
      group.id === event.target.dataset.groupId ? { ...group, label: event.target.value } : group
    );
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (state.goalConfig.editingDraft && event.target.dataset.field === "goal-config-title") {
    state.goalConfig.editingDraft = {
      ...state.goalConfig.editingDraft,
      title: event.target.value,
    };
    if (!deferRender) {
      render(preserveFocus);
    }
  }
  if (state.goalConfig.editingDraft && event.target.dataset.krId) {
    const updateKr = (updater) => {
      state.goalConfig.editingDraft = normalizeGoalConfigDraft({
        ...state.goalConfig.editingDraft,
        krs: state.goalConfig.editingDraft.krs.map((kr) =>
          kr.id === event.target.dataset.krId ? updater(kr) : kr
        ),
      });
    };
    if (event.target.dataset.field === "goal-config-kr-title") {
      updateKr((kr) => ({ ...kr, title: event.target.value }));
    }
    if (event.target.dataset.field === "goal-config-kr-threshold") {
      const nextValue = sanitizeGoalConfigMetricValue(event.target.value);
      updateKr((kr) => ({ ...kr, threshold: nextValue }));
    }
    if (event.target.dataset.field === "goal-config-kr-passing") {
      const nextValue = sanitizeGoalConfigMetricValue(event.target.value);
      updateKr((kr) => ({ ...kr, passing: nextValue }));
    }
    if (event.target.dataset.field === "goal-config-kr-challenge") {
      const nextValue = sanitizeGoalConfigMetricValue(event.target.value);
      updateKr((kr) => ({ ...kr, challenge: nextValue }));
    }
    if (event.target.dataset.field === "goal-config-kr-weight") {
      updateKr((kr) => ({ ...kr, weight: event.target.value }));
    }
    if (!deferRender) {
      render(preserveFocus);
    }
  }
});

document.addEventListener("focusout", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  if (event.target.dataset.field === "goal-config-process-name" && event.target.dataset.processId) {
    window.setTimeout(() => {
      if (state.goalConfig.processEditingId === event.target.dataset.processId) {
        saveGoalConfigProcessName(event.target.dataset.processId);
        render();
      }
    }, 0);
  }
});

document.addEventListener("keydown", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  if (event.target.dataset.field === "goal-config-process-name" && event.target.dataset.processId) {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      saveGoalConfigProcessName(event.target.dataset.processId);
      render();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      cancelGoalConfigProcessEditing();
      render();
    }
  }
  if (event.target.dataset.field === "goal-config-create-process-name" && state.overlay?.type === "goal-config-process-create") {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      onAction("confirm-goal-config-process-create", "");
    }
    if (event.key === "Escape") {
      event.preventDefault();
      state.overlay = null;
      render();
    }
  }
});

document.addEventListener("compositionstart", (event) => {
  if (event.target instanceof HTMLInputElement) {
    event.target.dataset.composing = "true";
  }
});

document.addEventListener("compositionend", (event) => {
  if (event.target instanceof HTMLInputElement) {
    delete event.target.dataset.composing;
    const preserveFocus = getInputPreserveFocus(event.target);
    if (preserveFocus) {
      render(preserveFocus);
    }
  }
});

document.addEventListener("focusout", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  if (event.target.dataset.field === "goal-config-group-name") {
    state.goalConfig.editingGroupId = null;
    render();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.overlay) {
      state.overlay = null;
      render();
      return;
    }
    if (
      state.openDropdown ||
      state.openRowMenu ||
      state.goalConfig.cardMenuId ||
      state.goalConfig.groupMenuId ||
      state.goalConfig.editingGroupId
    ) {
      closeTransientPanels();
      state.goalConfig.editingGroupId = null;
      render();
    }
  }
  if (event.key === "Enter" && event.target instanceof HTMLInputElement && event.target.dataset.field === "goal-config-group-name") {
    state.goalConfig.editingGroupId = null;
    render();
  }
});

render();

const STORAGE_KEY = "okr-inprogress-demo:v3-demo-default";
const TOAST_DURATION = 2200;
const DROPDOWN_CHEVRON_ANIMATION_MS = 220;
const DROPDOWN_PANEL_ANIMATION_MS = 220;
const TAB_INDICATOR_ANIMATION_MS = 220;
const DEFAULT_CURRENT_USER_KEY = "yanbo";
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
  { id: "yuanchuan", label: "远川" },
  { id: "liukan", label: "刘侃" },
  { id: "yuyaobo", label: "于耀博" },
  { id: "wubaowei", label: "吴宝为" },
  { id: "liuyuanhui", label: "刘远辉" },
  { id: "zhangxudong", label: "张旭东" },
  { id: "wuxuanyu", label: "吴宣宇" },
];
const ALL_GOAL_CONFIG_EXECUTOR_IDS = GOAL_CONFIG_EXECUTOR_OPTIONS.map((item) => item.id);

const DEFAULT_GOAL_CONFIG_GROUPS = [
  { id: "all", label: "全部分组", parentId: null, count: 0, kind: "all" },
  { id: "recycle", label: "周转箱", parentId: null, count: 0, kind: "recycle" },
];

const GOAL_CONFIG_MAX_LEVEL = 5;
const GOAL_CONFIG_MAX_DEPTH = GOAL_CONFIG_MAX_LEVEL - 1;

const DEFAULT_GOAL_CONFIG_GOALS = [];

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
const GOAL_INSTANCE_DETAIL_URL =
  "https://applink.dingtalk.com/approval/detail?corpId=ding749b80b6d5dc606effe93478753d9884&instanceId=ZSKgmcLwSH6GWeItLB4WwA01691774353203&from=applink";
const GOAL_CONFIG_PROCESS_GUIDE_SPRITE = "./assets/process-guide-sprite.png";
const PAYROLL_GROUP_LOCK_ICON_ASSET = "./assets/lock.svg";

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

const CONFIG_PREP_GUIDE_STEPS = [
  {
    step: 1,
    title: '侧边导航“目标配置”',
    message: "从这里开始配置你的目标体系",
    hint: "点击进入目标配置",
    placement: "right",
    padding: 10,
    radius: 12,
    selectors: ['[data-guide-id="config-prep-nav-goal-config"]'],
  },
  {
    step: 2,
    title: 'Tab 栏“流程库”',
    message: "先创建一个审批流程",
    hint: "点击切换到流程库",
    placement: "bottom",
    padding: 10,
    radius: 12,
    selectors: ['[data-guide-id="config-prep-tab-process"]'],
  },
  {
    step: 3,
    title: '“创建流程”按钮',
    message: "点击创建你的第一个流程",
    hint: "点击打开命名弹窗",
    placement: "bottom",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="config-prep-create-process"]'],
  },
  {
    step: 4,
    title: "命名弹窗",
    message: "输入流程名称，如“月度考核流程”",
    hint: "输入名称并确认",
    placement: "bottom",
    padding: 12,
    radius: 18,
    selectors: ['[data-guide-id="config-prep-process-modal"]'],
  },
  {
    step: 5,
    title: 'Tab 栏“目标库”',
    message: "流程创建完成，接下来创建目标",
    hint: "点击切换到目标库",
    placement: "bottom",
    padding: 10,
    radius: 12,
    selectors: ['[data-guide-id="config-prep-tab-library"]'],
  },
  {
    step: 6,
    title: '“新增分组”按钮',
    message: "先建一个分组来归类你的目标",
    hint: "点击新增分组",
    placement: "right",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="config-prep-add-group"]'],
  },
  {
    step: 7,
    title: "分组名称输入框",
    message: "给分组起个名字，回车确认",
    hint: "输入名称并回车",
    placement: "right",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="config-prep-group-name"]'],
  },
  {
    step: 8,
    title: '“创建目标”按钮',
    message: "在这个分组下创建第一个目标",
    hint: "点击创建目标",
    placement: "left",
    padding: 12,
    radius: 16,
    selectors: ['[data-guide-id="config-prep-create-goal"]'],
  },
  {
    step: 9,
    title: "目标名称与 KR 区域",
    message: "输入目标名称、三值和权重，完成后点空白处进入下一步",
    hint: "填完后脱离聚焦",
    placement: "top",
    padding: 12,
    radius: 16,
    selectors: [
      '[data-guide-id="config-prep-goal-title"]',
      '[data-guide-id="config-prep-first-kr"]',
    ],
  },
  {
    step: 10,
    title: "执行人选择器",
    message: "选择谁来执行这个目标",
    hint: "点击并选择人员",
    placement: "right",
    padding: 14,
    radius: 18,
    selectors: () => {
      const selectors = ['[data-guide-id="config-prep-executor-row"]'];
      if (state.openDropdown === "goal-config-executors") {
        selectors.push(".goal-config-executor-menu");
      }
      return selectors;
    },
  },
  {
    step: 11,
    title: '“保存”按钮',
    message: "配置完成，点击保存即可结束本次引导",
    hint: "点击保存，结束引导",
    placement: "top",
    padding: 12,
    radius: 16,
    selectors: ['[data-guide-id="config-prep-save-goal"]'],
  },
];

const LAUNCH_ADVANCE_GUIDE_STEPS = [
  {
    step: 1,
    title: '侧边导航“目标管理”',
    message: "从这里管理所有已发起的目标",
    hint: "点击进入目标管理",
    placement: "right",
    padding: 10,
    radius: 12,
    selectors: ['[data-guide-id="launch-advance-nav-goal-management"]'],
  },
  {
    step: 2,
    title: '“发起目标”入口',
    message: "目标配置完成！点这里发起考核",
    hint: "点击打开发起弹窗",
    placement: "left",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="launch-advance-entry"]'],
  },
  {
    step: 3,
    title: "发起弹窗中第一个目标",
    message: "选择刚创建的目标",
    hint: "点击勾选目标",
    placement: "right",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="launch-advance-first-goal"]'],
  },
  {
    step: 4,
    title: '“发起”按钮',
    message: "确认发起，目标进入确认审批",
    hint: "点击发起目标",
    placement: "top",
    padding: 12,
    radius: 16,
    selectors: ['[data-guide-id="launch-advance-confirm"]'],
  },
  {
    step: 5,
    title: '阶段分段控件“执行中”',
    message: "目标确认通过后会到这里，点击看看",
    hint: "点击切换到执行中",
    placement: "bottom",
    padding: 12,
    radius: 14,
    selectors: ['[data-guide-id="launch-advance-stage-executing"]'],
  },
  {
    step: 6,
    title: '“推进评分”按钮',
    message: '待目标需要推进评分，切换到执行中后，就可以推进评分了。点击“推进评分”或“完成引导”都可以结束本次引导',
    hint: '点击“推进评分”或“完成引导”结束本次引导',
    placement: "left",
    padding: 12,
    radius: 16,
    selectors: ['[data-guide-id="launch-advance-advance-all"]'],
  },
];

const CONFIG_PREP_GUIDE_DEFINITIONS = {
  "goal-process": {
    label: "目标与流程",
    steps: CONFIG_PREP_GUIDE_STEPS,
    completedToast: "目标与流程引导已完成",
  },
  "launch-advance": {
    label: "发起与推进",
    steps: LAUNCH_ADVANCE_GUIDE_STEPS,
    completedToast: "发起与推进引导已完成",
  },
};

const GOAL_MANAGEMENT_GUIDE_TEXT =
  "若目标执行结束，可以按步骤发起评分： 选择考核周期 → 选择执行阶段 → 点击“推进评分”";

const MEMBER_OPTIONS = [
  {
    key: "member:yanbo",
    label: "焰柏",
    type: "member",
    subtext: "主管理员",
    memberIds: ["yanbo"],
  },
  {
    key: "member:yuanchuan",
    label: "远川",
    type: "member",
    subtext: "普通员工",
    memberIds: ["yuanchuan"],
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
const STATS_PAGE_KEYS = ["task-report", "plan-report"];
const SETTINGS_PAGE_KEYS = ["recycle-space", "company-info"];
const APP_PAGE_KEYS = [
  "workbench",
  "task-module",
  ...PLAN_PAGE_KEYS,
  "goal-management",
  ...STATS_PAGE_KEYS,
  ...SETTINGS_PAGE_KEYS,
];
const GOAL_PAGE_LABELS = {
  workbench: "工作台",
  "task-module": "档案模块",
  "plan-module": "算薪模块",
  "plan-management": "算薪管理",
  "my-goals": "我的目标",
  "goal-alignment": "目标对齐",
  "goal-management": "目标管理",
  "goal-config": "目标配置",
  "brief-module": "简报模块",
  "brief-fill": "填写简报",
  "brief-review": "审阅简报",
  "brief-management": "简报管理",
  "brief-config": "简报配置",
  "stats-module": "报表模块",
  "task-report": "薪资报表",
  "plan-report": "档案报表",
  "goal-report": "目标报表",
  "brief-report": "简报报表",
  "settings-module": "设置模块",
  "recycle-space": "职级薪档",
  "company-info": "薪酬组设置",
  "personal-settings": "个性配置",
  "permission-settings": "权限配置",
};
const SIDEBAR_PRIMARY_MODULES = [
  { pageKey: "workbench", icon: "menu-workbench.svg", label: GOAL_PAGE_LABELS.workbench },
  { pageKey: "task-module", icon: "menu-task.svg", label: GOAL_PAGE_LABELS["task-module"] },
  { pageKey: "plan-management", icon: "menu-plan.svg", label: GOAL_PAGE_LABELS["plan-module"] },
];
const SIDEBAR_GROUPS = [
  {
    key: "stats",
    pageKeys: STATS_PAGE_KEYS,
    icon: "menu-stats.svg",
    label: GOAL_PAGE_LABELS["stats-module"],
    items: STATS_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
  {
    key: "settings",
    pageKeys: SETTINGS_PAGE_KEYS,
    icon: "menu-settings.svg",
    label: GOAL_PAGE_LABELS["settings-module"],
    items: SETTINGS_PAGE_KEYS.map((pageKey) => ({ pageKey, label: GOAL_PAGE_LABELS[pageKey] })),
  },
];
const PAGE_KEY_ALIASES = {
  "my-goals": "goal-management",
  "goal-alignment": "goal-management",
  "goal-config": "goal-management",
  "brief-module": "goal-management",
  "brief-fill": "goal-management",
  "brief-review": "goal-management",
  "brief-management": "goal-management",
  "brief-config": "goal-management",
  "goal-report": "goal-management",
  "brief-report": "goal-management",
  "stats-module": "task-report",
  "settings-module": "recycle-space",
  "plan-module": "plan-management",
};
const USER_PROFILES = [
  {
    key: "yanbo",
    memberId: "yanbo",
    label: "焰柏",
    roleLabel: "主管理员",
    avatar: "焰",
    defaultPage: "task-module",
    allowedPageKeys: Array.from(new Set(APP_PAGE_KEYS.map((pageKey) => PAGE_KEY_ALIASES[pageKey] || pageKey))),
  },
  {
    key: "yuanchuan",
    memberId: "yuanchuan",
    label: "远川",
    roleLabel: "普通员工",
    avatar: "远",
    defaultPage: "task-module",
    allowedPageKeys: ["workbench", "task-module", "plan-management", "goal-management", "task-report", "plan-report", "recycle-space", "company-info"],
  },
];
const USER_PROFILE_BY_KEY = Object.fromEntries(
  USER_PROFILES.map((profile) => [
    profile.key,
    {
      ...profile,
      allowedPageKeySet: new Set(profile.allowedPageKeys.map((pageKey) => PAGE_KEY_ALIASES[pageKey] || pageKey)),
    },
  ])
);
const DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS = [
  {
    id: "payroll-group-zhidao",
    name: "支稻科技有限公司",
    creatorId: "yanbo",
    creator: "焰柏",
  },
  {
    id: "payroll-group-youdao",
    name: "友稻科技有限公司",
    creatorId: "yanbo",
    creator: "焰柏",
  },
  {
    id: "payroll-group-budao",
    name: "布稻科技有限公司",
    creatorId: "yanbo",
    creator: "焰柏",
  },
  {
    id: "payroll-group-other",
    name: "其他公司",
    creatorId: "yanbo",
    creator: "焰柏",
  },
];
const PAYROLL_GROUP_DETAIL_TAB_OPTIONS = [
  { key: "salary-items", label: "薪酬项" },
  { key: "rules", label: "规则设置" },
  { key: "permissions", label: "权限设置" },
];
const PAYROLL_GROUP_RULE_VIEW_OPTIONS = [
  { key: "fixed", label: "固定天数" },
  { key: "monthly", label: "每月天数" },
];
const PAYROLL_GROUP_RULE_MONTH_OPTIONS = Array.from({ length: 12 }, (_, index) => ({
  key: `month-${index + 1}`,
  label: `${index + 1}月天数（天）`,
}));
const DEFAULT_PAYROLL_GROUP_RULE_SETTINGS = {
  viewMode: "fixed",
  fixedDays: "",
  dailyAttendanceHours: "8.00",
  monthlyDays: PAYROLL_GROUP_RULE_MONTH_OPTIONS.map(() => ""),
};
const PAYROLL_GROUP_DETAIL_SECTION_OPTIONS = [
  { key: "info", label: "信息项" },
  { key: "payment", label: "支付项" },
  { key: "deduction", label: "扣减项" },
  { key: "change", label: "变动项" },
  { key: "company", label: "公司承担" },
];
const PAYROLL_GROUP_DETAIL_STATUS_OPTIONS = [
  { key: "all", label: "全部状态" },
  { key: "enabled", label: "已启用" },
  { key: "disabled", label: "已停用" },
];
const DEFAULT_PAYROLL_GROUP_DETAIL_FIELDS = [
  { id: "payroll-field-name", sectionKey: "info", name: "姓名", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-mobile", sectionKey: "info", name: "手机号", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-department", sectionKey: "info", name: "部门", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-position", sectionKey: "info", name: "职位", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-employee-type", sectionKey: "info", name: "员工类型", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-employee-status", sectionKey: "info", name: "员工状态", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-onboard-date", sectionKey: "info", name: "入职时间", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-grade-salary", sectionKey: "info", name: "档位薪资", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-performance-score", sectionKey: "info", name: "绩效得分", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-performance-bonus", sectionKey: "change", name: "绩效奖罚金", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-company-insurance", sectionKey: "company", name: "公司承担社保", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
  { id: "payroll-field-company-fund", sectionKey: "company", name: "公司承担公积金", status: "enabled", creatorId: "yanbo", creator: "焰柏" },
];
const DEFAULT_PAYROLL_GROUP_DETAIL_FIELD_IDS = new Set(DEFAULT_PAYROLL_GROUP_DETAIL_FIELDS.map((item) => item.id));
const DEFAULT_PAYROLL_GROUP_DETAIL_STATE = {
  rowId: null,
  activeTab: "salary-items",
  sectionKey: "info",
  itemKeyword: "",
  fieldKeyword: "",
  status: "all",
  creator: "all",
  page: 1,
  sidebarCollapsed: false,
  ruleSettings: {
    ...DEFAULT_PAYROLL_GROUP_RULE_SETTINGS,
    monthlyDays: [...DEFAULT_PAYROLL_GROUP_RULE_SETTINGS.monthlyDays],
  },
};
const app = document.getElementById("app");
let toastTimer = null;
let configPrepGuideFrame = 0;
let configPrepGuideTimer = 0;
const goalConfigProcessGuideImageCache = [];

const clone = (value) => JSON.parse(JSON.stringify(value));
const normalizeBooleanMap = (value) =>
  value && typeof value === "object" && !Array.isArray(value)
    ? Object.fromEntries(Object.entries(value).map(([key, flag]) => [key, !!flag]))
    : {};
const normalizeCurrentUserKey = (value) => (USER_PROFILE_BY_KEY[value] ? value : DEFAULT_CURRENT_USER_KEY);
const isValidPayrollGroupCreator = (value, rows = DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS) =>
  value === "all" || rows.some((row) => row.creator === value);
const getUserProfileByKey = (key = DEFAULT_CURRENT_USER_KEY) => USER_PROFILE_BY_KEY[normalizeCurrentUserKey(key)];
const getCurrentUserProfile = () => getUserProfileByKey(state?.currentUserKey);
function getPayrollGroupSwitchAvatarLabel(name, index = 0) {
  const compactName = String(name || "").replace(/[\s()（）]/g, "").trim();
  if (compactName) {
    return compactName.charAt(0).toUpperCase();
  }
  return String((index % 9) + 1);
}

function getPayrollGroupSwitchOptions(rows = getPayrollGroupSettingsRows()) {
  const sourceRows = Array.isArray(rows) ? rows : [];
  if (!sourceRows.length) {
    return [
      {
        key: "",
        label: "暂无薪酬组",
        subtext: "未配置",
        avatar: "-",
      },
    ];
  }

  return sourceRows.map((row, index) => ({
    key: row.id,
    label: row.name,
    subtext: row.creator || "未设置创建人",
    avatar: getPayrollGroupSwitchAvatarLabel(row.name, index),
  }));
}

function getDefaultPayrollGroupId(rows = getPayrollGroupSettingsRows(), preferredId = "") {
  const sourceRows = Array.isArray(rows) ? rows : [];
  if (preferredId && sourceRows.some((row) => row.id === preferredId)) {
    return preferredId;
  }
  return sourceRows[0]?.id || "";
}

const getCurrentPayrollGroupId = () => getDefaultPayrollGroupId(getPayrollGroupSettingsRows(), state?.currentPayrollGroupId);
function getCurrentPayrollGroupSwitchOption(payrollGroupId = getCurrentPayrollGroupId(), rows = getPayrollGroupSettingsRows()) {
  const options = getPayrollGroupSwitchOptions(rows);
  return options.find((option) => option.key === payrollGroupId) || options[0];
}
const getCurrentApprover = () => {
  const currentUser = getCurrentUserProfile();
  return {
    id: currentUser.memberId,
    label: currentUser.label,
  };
};
const normalizeGoalPage = (value) => {
  const aliased = PAGE_KEY_ALIASES[value];
  if (aliased) {
    return aliased;
  }
  return APP_PAGE_KEYS.includes(value) ? value : "task-module";
};
const isGoalModulePage = (pageKey) => GOAL_PAGE_KEYS.includes(normalizeGoalPage(pageKey));
const getSidebarGroup = (groupKey) => SIDEBAR_GROUPS.find((group) => group.key === groupKey) || null;
const getSidebarGroupKeyByPage = (pageKey) =>
  (SIDEBAR_GROUPS.find((group) => group.pageKeys.includes(normalizeGoalPage(pageKey))) || {}).key || null;
function isPageAllowedForProfile(pageKey, profile = getCurrentUserProfile()) {
  return profile.allowedPageKeySet.has(normalizeGoalPage(pageKey));
}

function getVisibleSidebarPrimaryModules(profile = getCurrentUserProfile()) {
  return SIDEBAR_PRIMARY_MODULES.filter((item) => isPageAllowedForProfile(item.pageKey, profile));
}

function getVisibleSidebarGroups(profile = getCurrentUserProfile()) {
  return SIDEBAR_GROUPS
    .map((group) => {
      const items = group.items.filter((item) => isPageAllowedForProfile(item.pageKey, profile));
      return {
        ...group,
        items,
        pageKeys: group.pageKeys.filter((pageKey) => isPageAllowedForProfile(pageKey, profile)),
      };
    })
    .filter((group) => group.items.length > 0);
}

function getFirstAccessiblePageInGroup(groupKey, profile = getCurrentUserProfile()) {
  const group = getSidebarGroup(groupKey);
  if (!group) {
    return null;
  }
  const firstItem = group.items.find((item) => isPageAllowedForProfile(item.pageKey, profile));
  return firstItem ? firstItem.pageKey : null;
}

function getFallbackPageForProfile(profile = getCurrentUserProfile()) {
  if (isPageAllowedForProfile(profile.defaultPage, profile)) {
    return profile.defaultPage;
  }
  const firstPrimaryModule = getVisibleSidebarPrimaryModules(profile)[0];
  return firstPrimaryModule ? firstPrimaryModule.pageKey : "my-goals";
}

function getAccessiblePage(pageKey, profile = getCurrentUserProfile()) {
  const normalizedPage = normalizeGoalPage(pageKey);
  if (isPageAllowedForProfile(normalizedPage, profile)) {
    return normalizedPage;
  }
  const groupKey = getSidebarGroupKeyByPage(normalizedPage);
  const groupFallbackPage = groupKey ? getFirstAccessiblePageInGroup(groupKey, profile) : null;
  return groupFallbackPage || getFallbackPageForProfile(profile);
}

function syncActivePageAccess() {
  const nextPage = getAccessiblePage(state.activePage);
  if (nextPage === state.activePage) {
    return;
  }
  state.activePage = nextPage;
  resetGoalPageEntryTab(nextPage);
  const groupKey = getSidebarGroupKeyByPage(nextPage);
  if (groupKey) {
    setSidebarGroupExpanded(groupKey, true);
  }
}

function getPageParentLabel(pageKey) {
  const normalizedPage = normalizeGoalPage(pageKey);
  if (PLAN_PAGE_KEYS.includes(normalizedPage)) {
    return GOAL_PAGE_LABELS["plan-module"];
  }
  if (GOAL_PAGE_KEYS.includes(normalizedPage)) {
    return "目标模块";
  }
  if (BRIEF_PAGE_KEYS.includes(normalizedPage)) {
    return GOAL_PAGE_LABELS["brief-module"];
  }
  if (STATS_PAGE_KEYS.includes(normalizedPage)) {
    return GOAL_PAGE_LABELS["stats-module"];
  }
  if (SETTINGS_PAGE_KEYS.includes(normalizedPage)) {
    return GOAL_PAGE_LABELS["settings-module"];
  }
  return "";
}

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

function syncSidebarGroupExpandedInDom(groupKey, expanded) {
  const groupRoot = document.querySelector(`.sidebar-group-${groupKey}`);
  if (!groupRoot) {
    return;
  }

  const submenu = groupRoot.querySelector(".submenu-list");
  if (submenu) {
    submenu.classList.toggle("is-open", expanded);
  }

  const arrow = groupRoot.querySelector(".menu-expand .ui-arrow");
  if (arrow) {
    arrow.classList.toggle("ui-arrow-down", expanded);
    arrow.classList.toggle("ui-arrow-right", !expanded);
  }
}

function syncSidebarGroupPopoversInDom() {
  document.querySelectorAll(".sidebar-goal-popover").forEach((popover) => {
    popover.remove();
  });

  if (!state.sidebarCollapsed) {
    return;
  }

  getVisibleSidebarGroups().forEach((group) => {
    const groupRoot = document.querySelector(`.sidebar-group-${group.key}`);
    const wrap = groupRoot?.querySelector(".sidebar-goal-wrap");
    if (!wrap) {
      return;
    }

    wrap.insertAdjacentHTML("beforeend", renderSidebarGroupPopover(group));
  });
}

function animateSidebarGroupToggle(groupKey) {
  const sidebar = document.querySelector(".sidebar");
  const previousExpandedGroups = new Map(
    SIDEBAR_GROUPS.map((group) => [group.key, isSidebarGroupExpanded(group.key)])
  );

  setSidebarGroupExpanded(groupKey, !isSidebarGroupExpanded(groupKey));

  if (!sidebar) {
    render();
    return;
  }

  SIDEBAR_GROUPS.forEach((group) => {
    const wasExpanded = previousExpandedGroups.get(group.key);
    const isExpanded = isSidebarGroupExpanded(group.key);

    if (wasExpanded !== isExpanded) {
      syncSidebarGroupExpandedInDom(group.key, isExpanded);
    }
  });

  persistState();
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

function renderSidebarGroupPopover(group) {
  return `
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
  `;
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
    currentUserKey: DEFAULT_CURRENT_USER_KEY,
    currentPayrollGroupId: DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS[0]?.id || "",
    activePage: "task-module",
    pendingManualGuidePage: null,
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
    goalManagementGuideDismissedByUser: {},
    guideAutoStartedByUser: {},
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
      selectionByTab: {
        pending: [],
        executing: [],
        completed: [],
      },
    },
    goalConfig: {
      activeTab: "library",
      selectedGroupId: "all",
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
      editingGroupName: "",
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    payrollGroupSettings: {
      keyword: "",
      creator: "all",
      page: 1,
      rows: clone(DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS),
      savedRuleSettingsByRowId: {},
      draftRuleSettingsByRowId: {},
      detail: clone(DEFAULT_PAYROLL_GROUP_DETAIL_STATE),
    },
    pageSize: 100,
    openDropdown: null,
    openRowMenu: null,
    overlay: null,
    configPrepGuide: null,
    toast: "",
  };
}

let state = loadState();
let pendingDropdownChevronAnimations = [];
let pendingTabIndicatorTransitions = new Map();
let openingDropdownKeys = new Set();
let closingDropdownKeys = new Set();
let dropdownCloseTimers = new Map();
let openingTransientPanelKeys = new Set();
let closingTransientPanelKeys = new Set();
let transientPanelCloseTimers = new Map();
let dropdownMotionCleanupQueued = false;

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
      currentUserKey: normalizeCurrentUserKey(saved.currentUserKey || base.currentUserKey),
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
        selectionByTab: {
          ...base.myGoals.selectionByTab,
          ...((saved.myGoals && saved.myGoals.selectionByTab) || {}),
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

function queueDropdownChevronAnimation(key, direction) {
  if (!key) {
    return;
  }

  pendingDropdownChevronAnimations.push({ key, direction });
}

function animateDropdownChevron(key, direction) {
  const chevron = document.querySelector(`[data-value="${key}"] .dropdown-chevron`);
  if (!(chevron instanceof HTMLElement) || typeof chevron.animate !== "function") {
    return;
  }

  const frames =
    direction === "closing"
      ? [{ transform: "rotate(180deg)" }, { transform: "rotate(0deg)" }]
      : [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }];

  chevron.animate(frames, {
    duration: DROPDOWN_CHEVRON_ANIMATION_MS,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  });
}

function flushDropdownChevronAnimations() {
  if (!pendingDropdownChevronAnimations.length) {
    return;
  }

  const queuedAnimations = pendingDropdownChevronAnimations.slice();
  pendingDropdownChevronAnimations = [];

  requestAnimationFrame(() => {
    queuedAnimations.forEach(({ key, direction }) => animateDropdownChevron(key, direction));
  });
}

function scheduleDropdownMotionStateCleanup() {
  if (dropdownMotionCleanupQueued) {
    return;
  }

  dropdownMotionCleanupQueued = true;
  requestAnimationFrame(() => {
    openingDropdownKeys.clear();
    openingTransientPanelKeys.clear();
    dropdownMotionCleanupQueued = false;
  });
}

function escapeSelectorAttributeValue(value) {
  const text = String(value || "");
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(text);
  }

  return text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function queueTabIndicatorTransition(groupKey, fromTabKey, toTabKey) {
  if (!groupKey || !fromTabKey || !toTabKey || fromTabKey === toTabKey) {
    return;
  }

  pendingTabIndicatorTransitions.set(groupKey, { fromTabKey, toTabKey });
}

function getTabIndicatorMetrics(tabRow, tabKey) {
  const tabButton = [...tabRow.querySelectorAll(".tab")].find(
    (button) => button instanceof HTMLElement && button.dataset.tabValue === tabKey
  );

  if (!(tabButton instanceof HTMLElement)) {
    return null;
  }

  return {
    left: Math.max(0, tabButton.offsetLeft + 8),
    width: Math.max(0, tabButton.offsetWidth - 16),
  };
}

function syncTabIndicators() {
  const queuedTransitions = pendingTabIndicatorTransitions;
  pendingTabIndicatorTransitions = new Map();

  document.querySelectorAll(".tabs[data-tab-group]").forEach((tabRow) => {
    if (!(tabRow instanceof HTMLElement)) {
      return;
    }

    const indicator = tabRow.querySelector(".tab-indicator");
    const activeTab = tabRow.querySelector(".tab.is-active");

    if (!(indicator instanceof HTMLElement) || !(activeTab instanceof HTMLElement)) {
      return;
    }

    const activeTabKey = activeTab.dataset.tabValue || "";
    const activeMetrics = getTabIndicatorMetrics(tabRow, activeTabKey);

    if (!activeMetrics) {
      return;
    }

    indicator.style.opacity = "1";

    const transition = queuedTransitions.get(tabRow.dataset.tabGroup || "");
    if (!transition || transition.toTabKey !== activeTabKey) {
      indicator.style.left = `${activeMetrics.left}px`;
      indicator.style.width = `${activeMetrics.width}px`;
      return;
    }

    const fromMetrics = getTabIndicatorMetrics(tabRow, transition.fromTabKey);
    if (!fromMetrics) {
      indicator.style.left = `${activeMetrics.left}px`;
      indicator.style.width = `${activeMetrics.width}px`;
      return;
    }

    if (typeof indicator.animate === "function") {
      indicator.style.left = `${activeMetrics.left}px`;
      indicator.style.width = `${activeMetrics.width}px`;
      indicator.animate(
        [
          { left: `${fromMetrics.left}px`, width: `${fromMetrics.width}px` },
          { left: `${activeMetrics.left}px`, width: `${activeMetrics.width}px` },
        ],
        {
          duration: TAB_INDICATOR_ANIMATION_MS,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );
      return;
    }

    indicator.style.transition = `left ${TAB_INDICATOR_ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), width ${TAB_INDICATOR_ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    indicator.style.left = `${fromMetrics.left}px`;
    indicator.style.width = `${fromMetrics.width}px`;
    requestAnimationFrame(() => {
      indicator.style.left = `${activeMetrics.left}px`;
      indicator.style.width = `${activeMetrics.width}px`;
    });
    window.setTimeout(() => {
      indicator.style.transition = "";
    }, TAB_INDICATOR_ANIMATION_MS);
  });
}

function clearClosingDropdown(dropdownKey) {
  if (!dropdownKey) {
    return;
  }

  const timer = dropdownCloseTimers.get(dropdownKey);
  if (timer) {
    clearTimeout(timer);
    dropdownCloseTimers.delete(dropdownKey);
  }

  closingDropdownKeys.delete(dropdownKey);
}

function refreshDropdownMotionContainers() {
  if (syncConfirmModal()) {
    return;
  }

  if (syncGoalConfigProcessCreateModal()) {
    return;
  }

  if (syncPayrollGroupCreateModal()) {
    return;
  }

  if (syncPayrollGroupFieldCreateDrawer()) {
    return;
  }

  if (syncGoalConfigTransferModal()) {
    return;
  }

  if (syncStartGoalModal()) {
    return;
  }

  if (state.activePage === "company-info" && syncPayrollGroupPage()) {
    return;
  }

  render();
}

function queueClosingDropdown(dropdownKey) {
  if (!dropdownKey) {
    return;
  }

  clearClosingDropdown(dropdownKey);
  openingDropdownKeys.delete(dropdownKey);
  closingDropdownKeys.add(dropdownKey);

  const timer = setTimeout(() => {
    dropdownCloseTimers.delete(dropdownKey);
    if (!closingDropdownKeys.delete(dropdownKey)) {
      return;
    }

    refreshDropdownMotionContainers();
  }, DROPDOWN_PANEL_ANIMATION_MS);

  dropdownCloseTimers.set(dropdownKey, timer);
}

function getTransientPanelKey(panelType, panelId) {
  return `${panelType}:${panelId}`;
}

function clearClosingTransientPanel(panelType, panelId) {
  if (!panelId) {
    return;
  }

  const transientPanelKey = getTransientPanelKey(panelType, panelId);
  const timer = transientPanelCloseTimers.get(transientPanelKey);
  if (timer) {
    clearTimeout(timer);
    transientPanelCloseTimers.delete(transientPanelKey);
  }

  closingTransientPanelKeys.delete(transientPanelKey);
}

function queueClosingTransientPanel(panelType, panelId) {
  if (!panelId) {
    return;
  }

  const transientPanelKey = getTransientPanelKey(panelType, panelId);
  clearClosingTransientPanel(panelType, panelId);
  openingTransientPanelKeys.delete(transientPanelKey);
  closingTransientPanelKeys.add(transientPanelKey);

  const timer = setTimeout(() => {
    transientPanelCloseTimers.delete(transientPanelKey);
    if (!closingTransientPanelKeys.delete(transientPanelKey)) {
      return;
    }

    refreshDropdownMotionContainers();
  }, DROPDOWN_PANEL_ANIMATION_MS);

  transientPanelCloseTimers.set(transientPanelKey, timer);
}

function setAnimatedPanelState(panelType, currentId, nextId, applyState) {
  if (currentId === nextId) {
    return;
  }

  if (currentId) {
    queueClosingTransientPanel(panelType, currentId);
  }

  if (nextId) {
    clearClosingTransientPanel(panelType, nextId);
    openingTransientPanelKeys.add(getTransientPanelKey(panelType, nextId));
  }

  applyState(nextId);
}

function setDropdownOpenState(nextDropdown) {
  const previousDropdown = state.openDropdown;
  if (previousDropdown === nextDropdown) {
    return;
  }

  if (previousDropdown) {
    queueDropdownChevronAnimation(previousDropdown, "closing");
    queueClosingDropdown(previousDropdown);
  }

  if (nextDropdown) {
    clearClosingDropdown(nextDropdown);
    openingDropdownKeys.add(nextDropdown);
    queueDropdownChevronAnimation(nextDropdown, "opening");
  }

  state.openDropdown = nextDropdown;
}

function toggleDropdownOpenState(dropdownKey) {
  setDropdownOpenState(state.openDropdown === dropdownKey ? null : dropdownKey);
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

function getGoalConfigDefaultSelectedGroupId(groups, preferredGroupId) {
  const normalizedGroups = Array.isArray(groups) ? groups : [];
  const groupMap = new Map(normalizedGroups.map((group) => [group.id, group]));
  if (preferredGroupId && groupMap.has(preferredGroupId)) {
    return preferredGroupId;
  }
  if (groupMap.has("all")) {
    return "all";
  }
  if (normalizedGroups.length) {
    return normalizedGroups[0].id;
  }
  return "all";
}

function getGoalConfigDefaultDraftGroupId(groups, preferredGroupId) {
  const normalizedGroups = Array.isArray(groups) ? groups : [];
  const groupMap = new Map(normalizedGroups.map((group) => [group.id, group]));
  const preferredGroup = preferredGroupId ? groupMap.get(preferredGroupId) : null;
  if (preferredGroup && preferredGroup.kind === "folder") {
    return preferredGroup.id;
  }
  const firstFolder = normalizedGroups.find((group) => group.kind === "folder");
  if (firstFolder) {
    return firstFolder.id;
  }
  return getGoalConfigDefaultSelectedGroupId(normalizedGroups, preferredGroupId);
}

function normalizeState(nextState) {
  const current = nextState || makeDefaultState();
  const currentUserKey = normalizeCurrentUserKey(current.currentUserKey);
  const currentUserProfile = getUserProfileByKey(currentUserKey);
  const activePage = getAccessiblePage(current.activePage, currentUserProfile);
  const ongoingGoalIds = new Set(current.goals.map((goal) => goal.id));
  const completedGoalIds = new Set(current.completedGoals.map((goal) => goal.id));
  const normalizedGoalConfigGroups = sanitizeGoalConfigGroups(current.goalConfigGroups);
  const normalizedGoalConfigGroupIds = new Set(normalizedGoalConfigGroups.map((group) => group.id));
  const normalizedGoalConfigProcesses = sortGoalConfigProcesses(
    Array.isArray(current.goalConfigProcesses) && current.goalConfigProcesses.length
      ? current.goalConfigProcesses
      : clone(DEFAULT_GOAL_CONFIG_PROCESSES)
  );
  const normalizedGoalConfigProcessIds = new Set(normalizedGoalConfigProcesses.map((item) => item.id));
  const normalizedGoalConfigProcessNameMap = new Map();
  normalizedGoalConfigProcesses.forEach((process) => {
    const name = normalizeProcessName(process.name);
    if (name && !normalizedGoalConfigProcessNameMap.has(name)) {
      normalizedGoalConfigProcessNameMap.set(name, process.id);
    }
  });
  const normalizedGoalConfigGoalSource = Array.isArray(current.goalConfigGoals)
    ? current.goalConfigGoals
    : clone(DEFAULT_GOAL_CONFIG_GOALS);
  const normalizedGoalConfigGoalIds = new Set(normalizedGoalConfigGoalSource.map((goal) => goal.id));
  const normalizedGoalConfigGoalTitleMap = new Map();
  normalizedGoalConfigGoalSource.forEach((goal) => {
    const title = String(goal.title || "").trim();
    if (title && !normalizedGoalConfigGoalTitleMap.has(title)) {
      normalizedGoalConfigGoalTitleMap.set(title, goal.id);
    }
  });
  const defaultFlowProcessId = normalizedGoalConfigProcesses[0]?.id || DEFAULT_GOAL_CONFIG_PROCESSES[0].id;
  const defaultFlowName = normalizedGoalConfigProcesses[0]?.name || DEFAULT_GOAL_CONFIG_PROCESSES[0].name;
  const normalizedMyExecutingGoals = current.myExecutingGoals || clone(DEFAULT_MY_EXECUTING_GOALS);
  const normalizedMyCompletedGoals = current.myCompletedGoals || clone(DEFAULT_MY_COMPLETED_GOALS);
  const normalizedPendingGoals = (current.pendingGoals || clone(DEFAULT_PENDING_GOALS))
    .filter(
      (goal) => goal.id !== "pending-preview-confirm-flow" && goal.id !== "pending-preview-rating-flow"
    )
    .map((goal) => {
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
  const pendingGoalIds = new Set(normalizedPendingGoals.map((goal) => goal.id));
  const myExecutingGoalIds = new Set(normalizedMyExecutingGoals.map((goal) => goal.id));
  const myCompletedGoalIds = new Set(normalizedMyCompletedGoals.map((goal) => goal.id));
  const normalizedGoalConfigGoals = normalizedGoalConfigGoalSource.map((goal) => {
    const hasFlowProcessId = Object.prototype.hasOwnProperty.call(goal, "flowProcessId");
    const hasAlignedGoalId = Object.prototype.hasOwnProperty.call(goal, "alignedGoalId");
    const explicitFlowProcessId = String(goal.flowProcessId || "").trim();
    const explicitAlignedGoalId = String(goal.alignedGoalId || "").trim();
    const legacyFlow = String(goal.flow || "").trim();
    const legacyAlignedGoal = String(goal.alignedGoal || "").trim();

    let nextFlowProcessId = "";
    if (explicitFlowProcessId) {
      nextFlowProcessId = normalizedGoalConfigProcessIds.has(explicitFlowProcessId)
        ? explicitFlowProcessId
        : defaultFlowProcessId;
    } else if (hasFlowProcessId) {
      nextFlowProcessId = defaultFlowProcessId;
    } else if (legacyFlow) {
      nextFlowProcessId = normalizedGoalConfigProcessNameMap.get(normalizeProcessName(legacyFlow)) || "";
    }

    let nextAlignedGoalId = "";
    if (explicitAlignedGoalId) {
      nextAlignedGoalId = normalizedGoalConfigGoalIds.has(explicitAlignedGoalId) ? explicitAlignedGoalId : "";
    } else if (!hasAlignedGoalId && legacyAlignedGoal) {
      nextAlignedGoalId = normalizedGoalConfigGoalTitleMap.get(legacyAlignedGoal) || "";
    }

    const nextFlowName = nextFlowProcessId
      ? normalizedGoalConfigProcesses.find((item) => item.id === nextFlowProcessId)?.name || legacyFlow || defaultFlowName
      : legacyFlow;
    const nextAlignedGoalTitle = nextAlignedGoalId
      ? normalizedGoalConfigGoalSource.find((item) => item.id === nextAlignedGoalId)?.title || legacyAlignedGoal || ""
      : hasAlignedGoalId
        ? ""
        : legacyAlignedGoal;

    return {
      ...goal,
      flowProcessId: nextFlowProcessId,
      flow: nextFlowName,
      alignedGoalId: nextAlignedGoalId,
      alignedGoal: nextAlignedGoalTitle,
    };
  });
  const normalizedPayrollGroupSettingsRows = normalizePayrollGroupSettingsRows(
    current.payrollGroupSettings && current.payrollGroupSettings.rows
  );
  const normalizedPayrollGroupSavedRuleSettingsByRowId = normalizePayrollGroupRuleSettingsMap(
    current.payrollGroupSettings && current.payrollGroupSettings.savedRuleSettingsByRowId,
    normalizedPayrollGroupSettingsRows
  );
  const normalizedPayrollGroupDraftRuleSettingsByRowId = normalizePayrollGroupRuleSettingsMap(
    current.payrollGroupSettings && current.payrollGroupSettings.draftRuleSettingsByRowId,
    normalizedPayrollGroupSettingsRows
  );
  const normalizedPayrollGroupDetail = normalizePayrollGroupDetailState(
    current.payrollGroupSettings && current.payrollGroupSettings.detail,
    normalizedPayrollGroupSettingsRows
  );
  const currentPayrollGroupId = getDefaultPayrollGroupId(
    normalizedPayrollGroupSettingsRows,
    current.currentPayrollGroupId
  );
  return {
    ...current,
    currentUserKey,
    currentPayrollGroupId,
    pendingGoals: normalizedPendingGoals,
    myExecutingGoals: normalizedMyExecutingGoals,
    myCompletedGoals: normalizedMyCompletedGoals,
    goalConfigGroups: normalizedGoalConfigGroups,
    goalConfigGoals: normalizedGoalConfigGoals,
    goalConfigProcesses: normalizedGoalConfigProcesses,
    activePage,
    planNavExpanded: !!current.planNavExpanded,
    goalNavExpanded: !!current.goalNavExpanded,
    briefNavExpanded: !!current.briefNavExpanded,
    statsNavExpanded: !!current.statsNavExpanded,
    settingsNavExpanded: !!current.settingsNavExpanded,
    sidebarCollapsed: !!current.sidebarCollapsed,
    goalManagementGuideDismissedByUser: normalizeBooleanMap(current.goalManagementGuideDismissedByUser),
    guideAutoStartedByUser: normalizeBooleanMap(current.guideAutoStartedByUser),
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
      selectionByTab: {
        pending: (
          (current.myGoals &&
            current.myGoals.selectionByTab &&
            Array.isArray(current.myGoals.selectionByTab.pending) &&
            current.myGoals.selectionByTab.pending) ||
          []
        ).filter((id) => pendingGoalIds.has(id)),
        executing: (
          (current.myGoals &&
            current.myGoals.selectionByTab &&
            Array.isArray(current.myGoals.selectionByTab.executing) &&
            current.myGoals.selectionByTab.executing) ||
          []
        ).filter((id) => myExecutingGoalIds.has(id)),
        completed: (
          (current.myGoals &&
            current.myGoals.selectionByTab &&
            Array.isArray(current.myGoals.selectionByTab.completed) &&
            current.myGoals.selectionByTab.completed) ||
          []
        ).filter((id) => myCompletedGoalIds.has(id)),
      },
    },
    goalConfig: {
      activeTab:
        current.goalConfig && ["library", "process"].includes(current.goalConfig.activeTab)
          ? current.goalConfig.activeTab
          : "library",
      selectedGroupId: getGoalConfigDefaultSelectedGroupId(
        normalizedGoalConfigGroups,
        current.goalConfig && current.goalConfig.selectedGroupId
      ),
      expandedGroupIds:
        current.goalConfig && Array.isArray(current.goalConfig.expandedGroupIds)
          ? current.goalConfig.expandedGroupIds.filter((id) => normalizedGoalConfigGroupIds.has(id))
          : [],
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
      editingGroupName: "",
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    payrollGroupSettings: {
      keyword: (current.payrollGroupSettings && current.payrollGroupSettings.keyword) || "",
      creator:
        current.payrollGroupSettings &&
        isValidPayrollGroupCreator(current.payrollGroupSettings.creator, normalizedPayrollGroupSettingsRows)
          ? current.payrollGroupSettings.creator
          : "all",
      page: Math.max(1, Number(current.payrollGroupSettings && current.payrollGroupSettings.page) || 1),
      rows: normalizedPayrollGroupSettingsRows,
      savedRuleSettingsByRowId: normalizedPayrollGroupSavedRuleSettingsByRowId,
      draftRuleSettingsByRowId: normalizedPayrollGroupDraftRuleSettingsByRowId,
      detail: normalizedPayrollGroupDetail,
    },
    pageSize: PAGE_SIZE_OPTIONS.includes(Number(current.pageSize))
      ? Number(current.pageSize)
      : 100,
    openDropdown: null,
    openRowMenu: null,
    overlay: null,
    configPrepGuide: null,
    toast: "",
  };
}

function persistState() {
  const payload = {
    currentUserKey: state.currentUserKey,
    currentPayrollGroupId: state.currentPayrollGroupId,
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
    goalManagementGuideDismissedByUser: state.goalManagementGuideDismissedByUser,
    guideAutoStartedByUser: state.guideAutoStartedByUser,
    filters: state.filters,
    selectionByTab: state.selectionByTab,
    pageByTab: state.pageByTab,
    myGoals: state.myGoals,
    goalConfig: {
      ...state.goalConfig,
      editingGoalId: null,
      editingDraft: null,
      editingGroupId: null,
      editingGroupName: "",
      processEditingId: null,
      processEditingName: "",
      groupMenuId: null,
      cardMenuId: null,
      processMenuId: null,
    },
    payrollGroupSettings: state.payrollGroupSettings,
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
  return executorId === getCurrentUserProfile().memberId;
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

function getPayrollGroupCreatorOptions() {
  const rows = getPayrollGroupSettingsRows();
  return [
    { key: "all", label: "全部成员" },
    ...new Map(rows.map((row) => [row.creator, { key: row.creator, label: row.creator }])).values(),
  ];
}

function getPayrollGroupSettingsFilters() {
  return state.payrollGroupSettings;
}

function getPayrollGroupSettingsRows() {
  if (state.payrollGroupSettings && Array.isArray(state.payrollGroupSettings.rows)) {
    return state.payrollGroupSettings.rows;
  }
  return clone(DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS);
}

function normalizePayrollGroupDetailFieldName(name) {
  const trimmedName = String(name || "").trim();
  return trimmedName === "Tip" ? "薪酬项模版" : trimmedName;
}

function normalizePayrollGroupSettingsRows(rows) {
  const sourceRows = Array.isArray(rows) ? rows : clone(DEFAULT_PAYROLL_GROUP_SETTINGS_ROWS);
  return sourceRows
    .map((row) => ({
      ...row,
      id: String(row.id || "").trim(),
      name: String(row.name || "").trim(),
      creatorId: String(row.creatorId || "").trim(),
      creator: String(row.creator || "").trim(),
    }))
    .filter((row) => row.id && row.name && row.creator);
}

function normalizePayrollGroupDetailFieldRows(rows) {
  const sourceRows = Array.isArray(rows) ? rows : clone(DEFAULT_PAYROLL_GROUP_DETAIL_FIELDS);
  return sourceRows
    .map((row) => {
      const id = String(row.id || "").trim();
      return {
        ...row,
        id,
        sectionKey: PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.some((item) => item.key === row.sectionKey)
          ? row.sectionKey
          : DEFAULT_PAYROLL_GROUP_DETAIL_STATE.sectionKey,
        name: normalizePayrollGroupDetailFieldName(row.name),
        status: row.status === "disabled" ? "disabled" : "enabled",
        creatorId: String(row.creatorId || "").trim(),
        creator: String(row.creator || "").trim(),
        isSystemDefault: row.isSystemDefault === true || DEFAULT_PAYROLL_GROUP_DETAIL_FIELD_IDS.has(id),
      };
    })
    .filter((row) => row.id && row.name && row.creator);
}

function normalizePayrollGroupRuleSettings(ruleSettings) {
  const source = ruleSettings && typeof ruleSettings === "object" ? ruleSettings : DEFAULT_PAYROLL_GROUP_RULE_SETTINGS;
  const monthlyDaysSource = Array.isArray(source.monthlyDays) ? source.monthlyDays : [];

  return {
    viewMode: source.viewMode === "monthly" ? "monthly" : "fixed",
    fixedDays: String(source.fixedDays || ""),
    dailyAttendanceHours: String(
      source.dailyAttendanceHours ?? DEFAULT_PAYROLL_GROUP_RULE_SETTINGS.dailyAttendanceHours
    ),
    monthlyDays: PAYROLL_GROUP_RULE_MONTH_OPTIONS.map((_, index) => String(monthlyDaysSource[index] || "")),
  };
}

function normalizePayrollGroupRuleSettingsMap(ruleSettingsMap, rows = getPayrollGroupSettingsRows()) {
  const source =
    ruleSettingsMap && typeof ruleSettingsMap === "object" && !Array.isArray(ruleSettingsMap) ? ruleSettingsMap : {};
  const validRowIds = new Set(rows.map((row) => row.id));

  return Object.fromEntries(
    Object.entries(source)
      .filter(([rowId]) => validRowIds.has(rowId))
      .map(([rowId, settings]) => [rowId, normalizePayrollGroupRuleSettings(settings)])
  );
}

function normalizePayrollGroupDetailState(detail, rows = getPayrollGroupSettingsRows()) {
  const source = detail && typeof detail === "object" ? detail : DEFAULT_PAYROLL_GROUP_DETAIL_STATE;
  const activeTab = PAYROLL_GROUP_DETAIL_TAB_OPTIONS.some((item) => item.key === source.activeTab)
    ? source.activeTab
    : DEFAULT_PAYROLL_GROUP_DETAIL_STATE.activeTab;
  const sectionKey = PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.some((item) => item.key === source.sectionKey)
    ? source.sectionKey
    : DEFAULT_PAYROLL_GROUP_DETAIL_STATE.sectionKey;
  const rowId = rows.some((row) => row.id === source.rowId) ? source.rowId : null;
  const fieldRows = normalizePayrollGroupDetailFieldRows(
    Array.isArray(source.fieldRows) ? source.fieldRows : clone(DEFAULT_PAYROLL_GROUP_DETAIL_FIELDS)
  );

  return {
    rowId,
    activeTab,
    sectionKey,
    itemKeyword: String(source.itemKeyword || ""),
    fieldKeyword: String(source.fieldKeyword || ""),
    status: PAYROLL_GROUP_DETAIL_STATUS_OPTIONS.some((item) => item.key === source.status) ? source.status : "all",
    creator: String(source.creator || "all"),
    page: Math.max(1, Number(source.page) || 1),
    sidebarCollapsed: !!source.sidebarCollapsed,
    fieldRows,
    ruleSettings: normalizePayrollGroupRuleSettings(source.ruleSettings),
  };
}

function getPayrollGroupDetailState() {
  return normalizePayrollGroupDetailState(state.payrollGroupSettings?.detail, getPayrollGroupSettingsRows());
}

function isPayrollGroupDetailOpen() {
  return !!getPayrollGroupDetailState().rowId;
}

function getPayrollGroupDetailRow() {
  const detail = getPayrollGroupDetailState();
  return detail.rowId ? getPayrollGroupSettingsRow(detail.rowId) : null;
}

function setPayrollGroupDetailState(nextDetail) {
  state.payrollGroupSettings.detail = normalizePayrollGroupDetailState(nextDetail, getPayrollGroupSettingsRows());
}

function resetPayrollGroupDetailPaging() {
  const detail = getPayrollGroupDetailState();
  setPayrollGroupDetailState({
    ...detail,
    page: 1,
  });
}

function getPayrollGroupDetailFieldRows() {
  return getPayrollGroupDetailState().fieldRows || clone(DEFAULT_PAYROLL_GROUP_DETAIL_FIELDS);
}

function getPayrollGroupSavedRuleSettingsMap() {
  return normalizePayrollGroupRuleSettingsMap(
    state.payrollGroupSettings?.savedRuleSettingsByRowId,
    getPayrollGroupSettingsRows()
  );
}

function getPayrollGroupRuleDraftSettingsMap() {
  return normalizePayrollGroupRuleSettingsMap(
    state.payrollGroupSettings?.draftRuleSettingsByRowId,
    getPayrollGroupSettingsRows()
  );
}

function getPayrollGroupRuleSettingsForRow(rowId, fallbackSettings = DEFAULT_PAYROLL_GROUP_RULE_SETTINGS) {
  const normalizedRowId = String(rowId || "").trim();
  const draftSettings = getPayrollGroupRuleDraftSettingsMap()[normalizedRowId];
  if (draftSettings) {
    return draftSettings;
  }
  const savedSettings = getPayrollGroupSavedRuleSettingsMap()[normalizedRowId];
  if (savedSettings) {
    return savedSettings;
  }
  return normalizePayrollGroupRuleSettings(fallbackSettings);
}

function setPayrollGroupRuleDraftForRow(rowId, nextSettings) {
  const normalizedRowId = String(rowId || "").trim();
  if (!normalizedRowId) {
    return normalizePayrollGroupRuleSettings(nextSettings);
  }
  const normalizedSettings = normalizePayrollGroupRuleSettings(nextSettings);
  state.payrollGroupSettings = {
    ...state.payrollGroupSettings,
    draftRuleSettingsByRowId: {
      ...getPayrollGroupRuleDraftSettingsMap(),
      [normalizedRowId]: normalizedSettings,
    },
  };
  return normalizedSettings;
}

function setPayrollGroupRuleSavedForRow(rowId, nextSettings) {
  const normalizedRowId = String(rowId || "").trim();
  if (!normalizedRowId) {
    return normalizePayrollGroupRuleSettings(nextSettings);
  }
  const normalizedSettings = normalizePayrollGroupRuleSettings(nextSettings);
  state.payrollGroupSettings = {
    ...state.payrollGroupSettings,
    savedRuleSettingsByRowId: {
      ...getPayrollGroupSavedRuleSettingsMap(),
      [normalizedRowId]: normalizedSettings,
    },
    draftRuleSettingsByRowId: {
      ...getPayrollGroupRuleDraftSettingsMap(),
      [normalizedRowId]: normalizedSettings,
    },
  };
  return normalizedSettings;
}

function getPayrollGroupRuleSettings() {
  const detail = getPayrollGroupDetailState();
  if (detail.rowId) {
    return getPayrollGroupRuleSettingsForRow(detail.rowId, detail.ruleSettings);
  }
  return normalizePayrollGroupRuleSettings(detail.ruleSettings);
}

function getPayrollGroupDetailField(fieldId) {
  return getPayrollGroupDetailFieldRows().find((item) => item.id === fieldId) || null;
}

function getPayrollGroupDetailCreatorOptions() {
  return [
    { key: "all", label: "全部成员" },
    ...new Map(getPayrollGroupDetailFieldRows().map((item) => [item.creator, { key: item.creator, label: item.creator }])).values(),
  ];
}

function getPayrollGroupDetailSectionCounts(rows = getPayrollGroupDetailFieldRows()) {
  return rows.reduce((counts, item) => {
    const sectionKey = String(item.sectionKey || "");
    counts[sectionKey] = (counts[sectionKey] || 0) + 1;
    return counts;
  }, {});
}

function getVisiblePayrollGroupDetailSections() {
  const detail = getPayrollGroupDetailState();
  const keyword = detail.itemKeyword.trim().toLowerCase();
  const sectionCounts = getPayrollGroupDetailSectionCounts();
  return PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.filter((item) => {
    if (!keyword) {
      return true;
    }
    return item.label.toLowerCase().includes(keyword);
  }).map((item) => ({
    ...item,
    count: sectionCounts[item.key] || 0,
  }));
}

function getFilteredPayrollGroupDetailFields() {
  const detail = getPayrollGroupDetailState();
  const keyword = detail.fieldKeyword.trim().toLowerCase();

  return getPayrollGroupDetailFieldRows().filter((item) => {
    if (item.sectionKey !== detail.sectionKey) {
      return false;
    }
    if (detail.status !== "all" && item.status !== detail.status) {
      return false;
    }
    if (detail.creator !== "all" && item.creator !== detail.creator) {
      return false;
    }
    if (!keyword) {
      return true;
    }
    return [item.name, item.creator].some((value) => String(value || "").toLowerCase().includes(keyword));
  });
}

function getPayrollGroupDetailPagedFields(rows) {
  const detail = getPayrollGroupDetailState();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  const currentPage = Math.min(detail.page, totalPages);

  if (currentPage !== detail.page) {
    setPayrollGroupDetailState({
      ...detail,
      page: currentPage,
    });
  }

  const start = (currentPage - 1) * state.pageSize;
  return {
    page: currentPage,
    totalPages,
    items: rows.slice(start, start + state.pageSize),
  };
}

function getPayrollGroupDetailFieldMenuId(fieldId) {
  return `payroll-group-detail-field:${fieldId}`;
}

function isPayrollGroupDetailFieldMenuId(menuId) {
  return String(menuId || "").startsWith("payroll-group-detail-field:");
}

function isPayrollGroupPageMenuId(menuId) {
  return isPayrollGroupRowMenuId(menuId) || isPayrollGroupDetailFieldMenuId(menuId);
}

function isPayrollGroupDropdownKey(key) {
  return [
    "payroll-group-creator",
    "payroll-group-page-size",
    "payroll-group-detail-status",
    "payroll-group-detail-creator",
    "payroll-group-detail-page-size",
  ].includes(key);
}

function getPayrollGroupDetailTabLabel(tabKey) {
  return PAYROLL_GROUP_DETAIL_TAB_OPTIONS.find((item) => item.key === tabKey)?.label || "薪酬项";
}

function getPayrollGroupDetailSectionLabel(sectionKey) {
  return PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.find((item) => item.key === sectionKey)?.label || "信息项";
}

function formatPayrollGroupDetailCreateLabel(sectionKey) {
  const label = getPayrollGroupDetailSectionLabel(sectionKey);
  return `创建${label}${label.endsWith("项") ? "" : "项"}`;
}

function formatPayrollGroupDetailEditLabel(sectionKey) {
  const label = getPayrollGroupDetailSectionLabel(sectionKey);
  return `编辑${label}${label.endsWith("项") ? "" : "项"}`;
}

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_MODE_OPTIONS = [
  { key: "manual", label: "手动输入" },
  { key: "auto", label: "自动输入" },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_TYPE_OPTIONS = {
  auto: [
    { key: "formula", label: "公式" },
    { key: "other-application", label: "其他来源" },
  ],
  manual: [
    { key: "text", label: "文本" },
    { key: "number", label: "数值" },
  ],
};

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_APP_KEY = "自定义外部";

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_APP_OPTIONS = [
  {
    key: PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_APP_KEY,
    label: PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_APP_KEY,
  },
  { key: "钉钉 OA", label: "钉钉 OA" },
  { key: "钉钉 花名册", label: "钉钉 花名册" },
  { key: "销邦邦 CRM", label: "销邦邦 CRM" },
  { key: "简道云", label: "简道云" },
  { key: "Teams OKR", label: "Teams OKR" },
  { key: "Teams AMB", label: "Teams AMB" },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FORM_OPTIONS_BY_APP = {
  "钉钉 OA": [
    { key: "加班", label: "加班" },
    { key: "请假", label: "请假" },
    { key: "外出", label: "外出" },
    { key: "出差", label: "出差" },
  ],
};

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS = [
  { key: "姓名", label: "姓名" },
  { key: "工号", label: "工号" },
  { key: "部门", label: "部门" },
  { key: "岗位", label: "岗位" },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS_BY_APP = {
  "销邦邦 CRM": [
    { key: "私海客户数量", label: "私海客户数量" },
    { key: "跟进次数", label: "跟进次数" },
    { key: "订单金额", label: "订单金额" },
    { key: "回款金额", label: "回款金额" },
  ],
  简道云: [
    { key: "项目金额", label: "项目金额" },
    { key: "项目利润", label: "项目利润" },
  ],
  "Teams OKR": [
    { key: "绩效得分", label: "绩效得分" },
    { key: "绩效总平均分", label: "绩效总平均分" },
    { key: "任务完成率", label: "任务完成率" },
    { key: "任务未完成率", label: "任务未完成率" },
    { key: "简报提交率", label: "简报提交率" },
    { key: "简报未提交率", label: "简报未提交率" },
  ],
  "Teams AMB": [
    { key: "固定总额", label: "固定总额" },
    { key: "变动总额", label: "变动总额" },
    { key: "扣减总额", label: "扣减总额" },
  ],
};

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS_BY_APP_AND_FORM = {
  "钉钉 OA": {
    加班: [{ key: "时长（小时）", label: "时长（小时）" }],
    请假: [{ key: "时长", label: "时长" }],
    外出: [{ key: "时长（天）", label: "时长（天）" }],
    出差: [{ key: "出差天数", label: "出差天数" }],
  },
};

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_MATCH_FIELD_OPTIONS = [
  { key: "员工 ID", label: "员工 ID" },
  { key: "部门 ID", label: "部门 ID" },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_AUTH_OPTIONS = [
  { key: "none", label: "无需鉴权" },
  { key: "bearer_token", label: "Token鉴权" },
  { key: "api_key_header", label: "API Key（Header）" },
  { key: "api_key_query", label: "API Key（Query参数）" },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_MAPPING_GROUPS = [
  {
    key: "number",
    label: "数字类",
    tagClassName: "is-number",
    options: [
      { key: "amount", label: "金额" },
      { key: "tax", label: "税额" },
      { key: "current_receipt_amount", label: "本次收付金额" },
      { key: "cost", label: "成本" },
    ],
  },
  {
    key: "text",
    label: "文本类",
    tagClassName: "is-text",
    options: [
      { key: "source_order_no", label: "源数据单号" },
      { key: "remark", label: "备注" },
      { key: "error_message", label: "错误信息" },
    ],
  },
  {
    key: "date",
    label: "时间类",
    tagClassName: "is-date",
    options: [{ key: "date", label: "日期" }],
  },
];

const PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_MOCK_RESPONSE = {
  code: 200,
  data: {
    employee_id: "EMP001",
    employee_name: "张三",
    overtime_hours: 12.5,
    base_salary: 8000,
    bonus: 1500,
    attendance_date: "2025-05-01",
    department: "技术部",
    note: "当月含法定假日加班",
  },
};

const PAYROLL_GROUP_DETAIL_FORMULA_EDITOR_SUGGESTED_FIELDS = [
  { key: "基本工资", label: "基本工资", sectionKey: "payment" },
  { key: "岗位津贴", label: "岗位津贴", sectionKey: "payment" },
  { key: "出勤天数", label: "出勤天数", sectionKey: "info" },
  { key: "绩效系数", label: "绩效系数", sectionKey: "change" },
  { key: "社保个人承担", label: "社保个人承担", sectionKey: "deduction" },
];

const PAYROLL_GROUP_DETAIL_FORMULA_EDITOR_FUNCTION_OPTIONS = [
  {
    key: "SUM",
    label: "SUM",
    signature: "SUM(value1, value2, ...)",
    description: "返回多个值的总和。",
    insertText: "SUM()",
    caretOffset: 4,
  },
  {
    key: "IF",
    label: "IF",
    signature: "IF(condition, trueValue, falseValue)",
    description: "按条件返回不同结果。",
    insertText: "IF()",
    caretOffset: 3,
  },
  {
    key: "ROUND",
    label: "ROUND",
    signature: "ROUND(value, digits)",
    description: "按指定小数位进行四舍五入。",
    insertText: "ROUND()",
    caretOffset: 6,
  },
  {
    key: "MAX",
    label: "MAX",
    signature: "MAX(value1, value2, ...)",
    description: "返回一组值中的最大值。",
    insertText: "MAX()",
    caretOffset: 4,
  },
  {
    key: "MIN",
    label: "MIN",
    signature: "MIN(value1, value2, ...)",
    description: "返回一组值中的最小值。",
    insertText: "MIN()",
    caretOffset: 4,
  },
  {
    key: "ABS",
    label: "ABS",
    signature: "ABS(value)",
    description: "返回数值的绝对值。",
    insertText: "ABS()",
    caretOffset: 4,
  },
];

function getPayrollGroupDetailFieldCreateSourceFormOptions(sourceApp) {
  return PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FORM_OPTIONS_BY_APP[String(sourceApp || "")] || [];
}

function getPayrollGroupDetailFieldCreateSourceFieldOptions(sourceApp, sourceForm) {
  const sourceFieldOptionsByApp = PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS_BY_APP[String(sourceApp || "")] || null;
  if (sourceFieldOptionsByApp) {
    return sourceFieldOptionsByApp;
  }
  const sourceFieldOptionsByForm =
    PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS_BY_APP_AND_FORM[String(sourceApp || "")] || null;
  if (sourceFieldOptionsByForm) {
    return sourceFieldOptionsByForm[String(sourceForm || "")] || [];
  }
  return PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_FIELD_OPTIONS;
}

function isPayrollGroupDetailCustomExternalSource(sourceApp) {
  return String(sourceApp || "") === PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_APP_KEY;
}

function getPayrollGroupDetailCustomExternalAuthOption(authType) {
  return (
    PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_AUTH_OPTIONS.find((item) => item.key === authType) ||
    PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_AUTH_OPTIONS[0]
  );
}

function isPayrollGroupDetailCustomExternalAuthValueRequired(authType) {
  return getPayrollGroupDetailCustomExternalAuthOption(authType).key !== "none";
}

function isPayrollGroupDetailCustomExternalUrlValid(url) {
  return /^https?:\/\/\S+/i.test(String(url || "").trim());
}

function inferPayrollGroupDetailCustomExternalFieldType(value) {
  return typeof value === "number" && Number.isFinite(value) ? "number" : "string";
}

function isPayrollGroupDetailCustomExternalDateLikeField(field) {
  const text = String(field?.valuePreview || field?.label || field?.path || "");
  return /^\d{4}-\d{2}-\d{2}(?:\s|T|$)/.test(text) || /(?:date|time|日期|时间)/i.test(String(field?.path || ""));
}

function getPayrollGroupDetailCustomExternalMappingOptions() {
  return PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_MAPPING_GROUPS.flatMap((group) => group.options);
}

function getPayrollGroupDetailCustomExternalMappingGroupByFieldType(fieldType) {
  const groupKey = fieldType === "number" ? "number" : fieldType === "date" ? "date" : "text";
  return PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_MAPPING_GROUPS.find((group) => group.key === groupKey) || null;
}

function getPayrollGroupDetailCustomExternalMappingOptionsForField(field) {
  return getPayrollGroupDetailCustomExternalMappingGroupByFieldType(field?.fieldType)?.options || [];
}

function getPayrollGroupDetailCustomExternalMappingOption(mappingKey) {
  return getPayrollGroupDetailCustomExternalMappingOptions().find((option) => option.key === mappingKey) || null;
}

function getPayrollGroupDetailCustomExternalMappingLabel(mappingKey) {
  return getPayrollGroupDetailCustomExternalMappingOption(mappingKey)?.label || "";
}

function flattenPayrollGroupDetailCustomExternalFields(value, path = []) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, childValue]) =>
      flattenPayrollGroupDetailCustomExternalFields(childValue, [...path, key])
    );
  }
  if (Array.isArray(value)) {
    return value.flatMap((childValue, index) => flattenPayrollGroupDetailCustomExternalFields(childValue, [...path, String(index)]));
  }
  if (!path.length) {
    return [];
  }
  const fieldPath = path.join(".");
  const fieldType = /^\d{4}-\d{2}-\d{2}(?:\s|T|$)/.test(String(value || ""))
    ? "date"
    : inferPayrollGroupDetailCustomExternalFieldType(value);
  return [
    {
      path: fieldPath,
      label: fieldPath,
      fieldType,
      valuePreview: value === null || value === undefined ? "" : String(value),
    },
  ];
}

function getPayrollGroupDetailCustomExternalMockFields() {
  return flattenPayrollGroupDetailCustomExternalFields(PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_MOCK_RESPONSE);
}

function normalizePayrollGroupDetailCustomExternalFields(fields) {
  const sourceFields = Array.isArray(fields) ? fields : [];
  const seen = new Set();
  return sourceFields
    .map((field) => {
      const path = String(field?.path || field?.key || "").trim();
      if (!path || seen.has(path)) {
        return null;
      }
      seen.add(path);
      const fieldType = ["number", "date"].includes(field?.fieldType) ? field.fieldType : "string";
      return {
        path,
        label: String(field?.label || path),
        fieldType,
        valuePreview: String(field?.valuePreview || ""),
      };
    })
    .filter(Boolean);
}

function getPayrollGroupDetailCustomExternalFieldByPath(fields, fieldPath) {
  return normalizePayrollGroupDetailCustomExternalFields(fields).find((field) => field.path === fieldPath) || null;
}

function canSelectPayrollGroupDetailCustomExternalField(sectionKey, field) {
  return String(sectionKey || "") === "info" || field?.fieldType === "number";
}

function normalizePayrollGroupDetailCustomExternalMappings(source, fields, sectionKey) {
  const sourceMappings = source && typeof source === "object" ? source : {};
  const nextMappings = {};
  const fieldOptions = normalizePayrollGroupDetailCustomExternalFields(fields);
  const applyMapping = (fieldPath, mappingField) => {
    const selectedField = getPayrollGroupDetailCustomExternalFieldByPath(fieldOptions, fieldPath);
    const selectedMapping = getPayrollGroupDetailCustomExternalMappingOption(mappingField);
    const allowedMappings = getPayrollGroupDetailCustomExternalMappingOptionsForField(selectedField);
    if (
      !selectedField ||
      !selectedMapping ||
      !canSelectPayrollGroupDetailCustomExternalField(sectionKey, selectedField) ||
      !allowedMappings.some((option) => option.key === selectedMapping.key)
    ) {
      return;
    }
    nextMappings[selectedField.path] = selectedMapping.key;
  };

  const customExternalMappings = sourceMappings.customExternalMappings || sourceMappings.mappings;
  if (Array.isArray(customExternalMappings)) {
    customExternalMappings.forEach((item) => {
      applyMapping(item?.fieldPath || item?.field_path || item?.path, item?.mappingField || item?.mapping_field || item?.field);
    });
  } else if (customExternalMappings && typeof customExternalMappings === "object") {
    Object.entries(customExternalMappings).forEach(([fieldPath, mappingField]) => {
      applyMapping(fieldPath, mappingField);
    });
  }

  const configMappings = sourceMappings.customExternalConfig?.field_mappings || sourceMappings.customExternalConfig?.fieldMappings;
  if (Array.isArray(configMappings)) {
    configMappings.forEach((item) => {
      applyMapping(item?.field_path || item?.fieldPath || item?.path, item?.mapping_field || item?.mappingField || item?.field);
    });
  }

  applyMapping(
    sourceMappings.customExternalFieldPath || sourceMappings.customExternalConfig?.fieldPath || sourceMappings.customExternalConfig?.field_path,
    sourceMappings.customExternalMappingField ||
      sourceMappings.customExternalConfig?.mappingField ||
      sourceMappings.customExternalConfig?.mapping_field ||
      sourceMappings.customExternalMapField
  );

  return nextMappings;
}

function getPayrollGroupDetailCustomExternalMappingEntries(overlay) {
  const fields = normalizePayrollGroupDetailCustomExternalFields(overlay?.customExternalFields);
  const mappings = normalizePayrollGroupDetailCustomExternalMappings(overlay, fields, overlay?.sectionKey);
  return Object.entries(mappings)
    .map(([fieldPath, mappingField]) => {
      const field = getPayrollGroupDetailCustomExternalFieldByPath(fields, fieldPath);
      const mapping = getPayrollGroupDetailCustomExternalMappingOption(mappingField);
      return field && mapping ? { field, mapping } : null;
    })
    .filter(Boolean);
}

function canFetchPayrollGroupDetailCustomExternalFields(overlay) {
  const authType = getPayrollGroupDetailCustomExternalAuthOption(overlay?.customExternalAuthType).key;
  return (
    isPayrollGroupDetailCustomExternalUrlValid(overlay?.customExternalUrl) &&
    (!isPayrollGroupDetailCustomExternalAuthValueRequired(authType) || !!String(overlay?.customExternalAuthValue || "").trim())
  );
}

function createPayrollGroupDetailFormulaEditorState(source, overrides = {}) {
  const formulaConfig = String(source?.formulaConfig || "");
  const formulaDescription = String(source?.formulaDescription || "");
  return {
    open: false,
    draftFormula: formulaConfig,
    draftDescription: formulaDescription,
    fieldKeyword: "",
    functionKeyword: "",
    selectionStart: formulaConfig.length,
    selectionEnd: formulaConfig.length,
    scrollTop: 0,
    scrollLeft: 0,
    ...overrides,
  };
}

function normalizePayrollGroupDetailFormulaEditorState(formulaEditor, source) {
  const base = createPayrollGroupDetailFormulaEditorState(source);
  const nextState = formulaEditor && typeof formulaEditor === "object" ? formulaEditor : {};
  const draftFormula = String(nextState.draftFormula ?? base.draftFormula);
  const selectionStart =
    typeof nextState.selectionStart === "number" && Number.isFinite(nextState.selectionStart)
      ? Math.max(0, Math.min(draftFormula.length, nextState.selectionStart))
      : Math.min(draftFormula.length, base.selectionStart);
  const selectionEnd =
    typeof nextState.selectionEnd === "number" && Number.isFinite(nextState.selectionEnd)
      ? Math.max(selectionStart, Math.min(draftFormula.length, nextState.selectionEnd))
      : selectionStart;

  return {
    open: !!nextState.open,
    draftFormula,
    draftDescription: String(nextState.draftDescription ?? base.draftDescription),
    fieldKeyword: String(nextState.fieldKeyword || ""),
    functionKeyword: String(nextState.functionKeyword || ""),
    selectionStart,
    selectionEnd,
    scrollTop:
      typeof nextState.scrollTop === "number" && Number.isFinite(nextState.scrollTop) ? Math.max(0, nextState.scrollTop) : 0,
    scrollLeft:
      typeof nextState.scrollLeft === "number" && Number.isFinite(nextState.scrollLeft) ? Math.max(0, nextState.scrollLeft) : 0,
  };
}

function getPayrollGroupDetailFormulaFunctionOption(functionKey) {
  return PAYROLL_GROUP_DETAIL_FORMULA_EDITOR_FUNCTION_OPTIONS.find((item) => item.key === functionKey) || null;
}

function getPayrollGroupDetailFormulaReferenceOptions(overlay) {
  const currentName = String(overlay?.name || "").trim();
  const currentSectionKey = String(overlay?.sectionKey || "");
  const referenceMap = new Map();

  [...PAYROLL_GROUP_DETAIL_FORMULA_EDITOR_SUGGESTED_FIELDS, ...getPayrollGroupDetailFieldRows()]
    .map((item) =>
      "sectionKey" in item
        ? {
            key: item.key || item.name,
            label: item.label || item.name,
            sectionKey: item.sectionKey,
          }
        : item
    )
    .forEach((item) => {
      const key = String(item.key || item.name || item.label || "").trim();
      if (!key || key === currentName || referenceMap.has(key)) {
        return;
      }
      referenceMap.set(key, {
        key,
        label: String(item.label || item.name || key),
        sectionKey: String(item.sectionKey || ""),
      });
    });

  return [...referenceMap.values()].sort((left, right) => {
    const leftIsCurrentSection = left.sectionKey === currentSectionKey;
    const rightIsCurrentSection = right.sectionKey === currentSectionKey;
    if (leftIsCurrentSection !== rightIsCurrentSection) {
      return leftIsCurrentSection ? -1 : 1;
    }
    return left.label.localeCompare(right.label, "zh-Hans-CN");
  });
}

function insertPayrollGroupFormulaText(source, insertText, selectionStart, selectionEnd, caretOffset = insertText.length) {
  const safeSource = String(source || "");
  const start = typeof selectionStart === "number" ? Math.max(0, Math.min(safeSource.length, selectionStart)) : safeSource.length;
  const end = typeof selectionEnd === "number" ? Math.max(start, Math.min(safeSource.length, selectionEnd)) : start;
  const nextValue = `${safeSource.slice(0, start)}${insertText}${safeSource.slice(end)}`;
  const nextCaret = Math.max(start, Math.min(start + caretOffset, nextValue.length));
  return {
    value: nextValue,
    selectionStart: nextCaret,
    selectionEnd: nextCaret,
  };
}

function getPayrollGroupDetailFieldCreateDefaultMode(sectionKey) {
  return sectionKey === "info" ? "auto" : "manual";
}

function getPayrollGroupDetailFieldCreateDefaultType(mode) {
  return mode === "auto" ? "formula" : "text";
}

function getPayrollGroupDetailFieldCreateTypes(mode) {
  return PAYROLL_GROUP_DETAIL_FIELD_CREATE_TYPE_OPTIONS[mode] || PAYROLL_GROUP_DETAIL_FIELD_CREATE_TYPE_OPTIONS.manual;
}

function normalizePayrollGroupDetailFieldCreateOverlay(overlay) {
  const source = overlay && typeof overlay === "object" ? overlay : {};
  const submitMode = source.submitMode === "edit" ? "edit" : "create";
  const editingFieldId = submitMode === "edit" ? String(source.editingFieldId || source.id || "").trim() : "";
  const sectionKey = PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.some((item) => item.key === source.sectionKey)
    ? source.sectionKey
    : "info";
  const modeValue = String(source.mode || source.entryMode || "");
  const mode = modeValue === "auto" ? "auto" : "manual";
  const isInfoSection = sectionKey === "info";
  const typeOptions = getPayrollGroupDetailFieldCreateTypes(mode);
  const itemType = isInfoSection && typeOptions.some((item) => item.key === source.itemType)
    ? source.itemType
    : isInfoSection
      ? getPayrollGroupDetailFieldCreateDefaultType(mode)
      : null;
  const sourceAppValue = String(source.sourceApp || "");
  const sourceApp = PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_APP_OPTIONS.some((item) => item.key === sourceAppValue)
    ? sourceAppValue
    : "";
  const sourceFormOptions = getPayrollGroupDetailFieldCreateSourceFormOptions(sourceApp);
  const sourceFormValue = String(source.sourceForm || "");
  const sourceForm = sourceFormOptions.some((item) => item.key === sourceFormValue)
    ? sourceFormValue
    : "";
  const sourceFieldOptions = getPayrollGroupDetailFieldCreateSourceFieldOptions(sourceApp, sourceForm);
  const sourceFieldValue = String(source.sourceField || "");
  const requiresSourceForm = sourceFormOptions.length > 0;
  const sourceField =
    sourceApp &&
    (!requiresSourceForm || sourceForm) &&
    sourceFieldOptions.some((item) => item.key === sourceFieldValue)
      ? sourceFieldValue
      : "";
  const matchFieldValue = String(source.matchField || "");
  const matchField =
    sourceField && PAYROLL_GROUP_DETAIL_FIELD_CREATE_MATCH_FIELD_OPTIONS.some((item) => item.key === matchFieldValue)
      ? matchFieldValue
      : "";
  const customExternalConfig =
    source.customExternalConfig && typeof source.customExternalConfig === "object" ? source.customExternalConfig : {};
  const customExternalAuthTypeValue = String(
    source.customExternalAuthType || customExternalConfig.authType || customExternalConfig.auth_type || "none"
  );
  const customExternalAuthType = getPayrollGroupDetailCustomExternalAuthOption(customExternalAuthTypeValue).key;
  const customExternalFields = normalizePayrollGroupDetailCustomExternalFields(
    source.customExternalFields || customExternalConfig.fields
  );
  const customExternalFieldPathValue = String(
    source.customExternalFieldPath || customExternalConfig.fieldPath || customExternalConfig.field_path || ""
  );
  const customExternalSelectedField = getPayrollGroupDetailCustomExternalFieldByPath(
    customExternalFields,
    customExternalFieldPathValue
  );
  const customExternalFieldPath =
    customExternalSelectedField && canSelectPayrollGroupDetailCustomExternalField(sectionKey, customExternalSelectedField)
      ? customExternalSelectedField.path
      : customExternalFields.length
        ? ""
        : customExternalFieldPathValue;
  const customExternalFieldType = customExternalSelectedField
    ? customExternalSelectedField.fieldType
    : String(source.customExternalFieldType || customExternalConfig.fieldType || customExternalConfig.field_type || "");
  const customExternalMappingFieldValue = String(
    source.customExternalMappingField ||
      customExternalConfig.mappingField ||
      customExternalConfig.mapping_field ||
      source.customExternalMapField ||
      ""
  );
  const customExternalMappingField = getPayrollGroupDetailCustomExternalMappingOption(customExternalMappingFieldValue)
    ? customExternalMappingFieldValue
    : "";
  const customExternalMappings = normalizePayrollGroupDetailCustomExternalMappings(
    { ...source, customExternalConfig },
    customExternalFields,
    sectionKey
  );
  const customExternalMappingEntries = Object.entries(customExternalMappings);
  const primaryCustomExternalFieldPath = customExternalMappingEntries[0]?.[0] || customExternalFieldPath;
  const primaryCustomExternalMappingField = customExternalMappingEntries[0]?.[1] || customExternalMappingField;
  const primaryCustomExternalSelectedField = getPayrollGroupDetailCustomExternalFieldByPath(
    customExternalFields,
    primaryCustomExternalFieldPath
  );
  const customExternalFetchStatusValue = String(source.customExternalFetchStatus || "");
  const customExternalFetchStatus = ["idle", "loading", "success", "error"].includes(customExternalFetchStatusValue)
    ? customExternalFetchStatusValue
    : customExternalFields.length
      ? "success"
      : "idle";

  return {
    type: "payroll-group-field-create",
    submitMode,
    editingFieldId,
    sectionKey,
    name: String(source.name || ""),
    mode,
    itemType,
    formulaConfig: String(source.formulaConfig || ""),
    formulaDescription: String(source.formulaDescription || ""),
    formulaEditor: normalizePayrollGroupDetailFormulaEditorState(source.formulaEditor, source),
    sourceApp,
    sourceForm,
    sourceField,
    matchField,
    customExternalUrl: String(source.customExternalUrl || customExternalConfig.url || ""),
    customExternalAuthType,
    customExternalAuthValue: String(source.customExternalAuthValue || customExternalConfig.authValue || customExternalConfig.auth_value || ""),
    customExternalAuthValueVisible: !!source.customExternalAuthValueVisible,
    customExternalFetchStatus,
    customExternalFetchError: String(source.customExternalFetchError || ""),
    customExternalRequestId: String(source.customExternalRequestId || ""),
    customExternalFields,
    customExternalFieldPath: primaryCustomExternalFieldPath,
    customExternalFieldType: primaryCustomExternalSelectedField?.fieldType || customExternalFieldType,
    customExternalMappingField: primaryCustomExternalMappingField,
    customExternalMappings,
    defaultText: String(source.defaultText || ""),
    defaultNumber: String(source.defaultNumber || ""),
  };
}

function buildPayrollGroupFieldCreateOverlay(sectionKey) {
  return normalizePayrollGroupDetailFieldCreateOverlay({
    sectionKey,
    name: "",
    mode: getPayrollGroupDetailFieldCreateDefaultMode(sectionKey),
    itemType: getPayrollGroupDetailFieldCreateDefaultType(getPayrollGroupDetailFieldCreateDefaultMode(sectionKey)),
  });
}

function buildPayrollGroupFieldEditOverlay(field) {
  return normalizePayrollGroupDetailFieldCreateOverlay({
    ...field,
    submitMode: "edit",
    editingFieldId: field.id,
    mode: field.entryMode || getPayrollGroupDetailFieldCreateDefaultMode(field.sectionKey),
    itemType:
      field.itemType ||
      getPayrollGroupDetailFieldCreateDefaultType(field.entryMode || getPayrollGroupDetailFieldCreateDefaultMode(field.sectionKey)),
  });
}

function getPayrollGroupDetailStatusLabel(statusKey) {
  return PAYROLL_GROUP_DETAIL_STATUS_OPTIONS.find((item) => item.key === statusKey)?.label || "全部状态";
}

function getFilteredPayrollGroupSettingsRows() {
  const filters = getPayrollGroupSettingsFilters();
  const keyword = filters.keyword.trim().toLowerCase();
  return getPayrollGroupSettingsRows().filter((row) => {
    if (filters.creator !== "all" && row.creator !== filters.creator) {
      return false;
    }

    if (!keyword) {
      return true;
    }

    return [row.name, row.creator].some((value) => String(value || "").toLowerCase().includes(keyword));
  });
}

function getPayrollGroupSettingsRow(rowId) {
  return getPayrollGroupSettingsRows().find((row) => row.id === rowId) || null;
}

function getPayrollGroupSettingsRowMenuId(rowId) {
  return `payroll-group:${rowId}`;
}

function isPayrollGroupRowMenuId(menuId) {
  return String(menuId || "").startsWith("payroll-group:");
}

function isPayrollGroupSettingsNameTaken(name, rows = getPayrollGroupSettingsRows()) {
  const normalizedName = String(name || "").trim().toLowerCase();
  if (!normalizedName) {
    return false;
  }
  return rows.some((row) => String(row.name || "").trim().toLowerCase() === normalizedName);
}

function makePayrollGroupCopyName(sourceName, rows = getPayrollGroupSettingsRows()) {
  const baseName = `${String(sourceName || "").trim()}（复制）`;
  if (!isPayrollGroupSettingsNameTaken(baseName, rows)) {
    return baseName;
  }

  let index = 2;
  while (isPayrollGroupSettingsNameTaken(`${baseName}${index}`, rows)) {
    index += 1;
  }
  return `${baseName}${index}`;
}

function ensurePayrollGroupCreatorFilterVisible(creator) {
  if (state.payrollGroupSettings.creator !== "all" && state.payrollGroupSettings.creator !== creator) {
    state.payrollGroupSettings.creator = "all";
  }
}

function getPayrollGroupSettingsPagedRows(rows) {
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  const currentPage = Math.min(state.payrollGroupSettings.page, totalPages);
  if (currentPage !== state.payrollGroupSettings.page) {
    state.payrollGroupSettings.page = currentPage;
  }
  const start = (currentPage - 1) * state.pageSize;
  return {
    page: currentPage,
    totalPages,
    items: rows.slice(start, start + state.pageSize),
  };
}

function setPayrollGroupSettingsPage(nextPage) {
  state.payrollGroupSettings.page = Math.max(1, Number(nextPage) || 1);
}

function resetPayrollGroupSettingsPaging() {
  setPayrollGroupSettingsPage(1);
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

function isGoalManagementGuideDismissed(userKey = state.currentUserKey) {
  return !!(state.goalManagementGuideDismissedByUser && state.goalManagementGuideDismissedByUser[userKey]);
}

function dismissGoalManagementGuide(userKey = state.currentUserKey) {
  state.goalManagementGuideDismissedByUser = {
    ...(state.goalManagementGuideDismissedByUser || {}),
    [normalizeCurrentUserKey(userKey)]: true,
  };
}

function getGuideUserKey(userKey = state.currentUserKey) {
  return normalizeCurrentUserKey(userKey);
}

function getGuideAutoStartKey(type, userKey = state.currentUserKey) {
  return `${getGuideUserKey(userKey)}:${type}`;
}

function hasGuideAutoStarted(type, userKey = state.currentUserKey) {
  return !!(state.guideAutoStartedByUser && state.guideAutoStartedByUser[getGuideAutoStartKey(type, userKey)]);
}

function markGuideAutoStarted(type, userKey = state.currentUserKey) {
  state.guideAutoStartedByUser = {
    ...(state.guideAutoStartedByUser || {}),
    [getGuideAutoStartKey(type, userKey)]: true,
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
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
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

function getMyGoalSelection(tabKey = getMyGoalTabKey()) {
  return state.myGoals.selectionByTab[getMyGoalTabKey(tabKey)] || [];
}

function setMyGoalSelection(nextSelection, tabKey = getMyGoalTabKey()) {
  state.myGoals.selectionByTab[getMyGoalTabKey(tabKey)] = nextSelection;
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

function getSelectedMyGoals(tabKey = getMyGoalTabKey()) {
  return getMyGoalSelection(tabKey)
    .map((id) => getMyGoal(id, tabKey))
    .filter(Boolean);
}

function getMyGoalHeaderCheckboxState(pageGoals, tabKey = getMyGoalTabKey()) {
  const selectedIds = getMyGoalSelection(tabKey);
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

function getGoalConfigGroupPathLabel(groupId) {
  const group = getGoalConfigGroup(groupId);
  if (!group) {
    return "未知分组";
  }
  if (group.kind === "recycle") {
    return group.label || "周转箱";
  }
  const ancestorLabels = getGoalConfigAncestors(groupId)
    .reverse()
    .map((id) => getGoalConfigGroup(id)?.label)
    .filter(Boolean);
  return [...ancestorLabels, group.label || "未命名分组"].join(" / ");
}

function getGoalConfigTransferGroupOptions(goalOrId) {
  const goal = typeof goalOrId === "string" ? getGoalConfigGoal(goalOrId) : goalOrId;
  const currentGroupId = goal?.groupId || null;
  const options = [];

  const walk = (parentId = null) => {
    getGoalConfigChildren(parentId).forEach((group) => {
      if (group.kind === "all") {
        return;
      }
      if (group.id !== currentGroupId) {
        options.push({
          id: group.id,
          label: getGoalConfigGroupPathLabel(group.id),
          kind: group.kind,
        });
      }
      if (group.kind === "folder") {
        walk(group.id);
      }
    });
  };

  walk(null);
  return options;
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
  return getGoalConfigDefaultDraftGroupId(state.goalConfigGroups, groupId);
}

function getGoalConfigGoal(goalId) {
  return state.goalConfigGoals.find((goal) => goal.id === goalId);
}

function sortGoalConfigGoals(goals) {
  return [...goals].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime());
}

function getGoalConfigGoalsByGroup(groupId) {
  return sortGoalConfigGoals(state.goalConfigGoals.filter((goal) => goal.groupId === groupId));
}

function getGoalConfigTransferSelectedGoals(overlay = state.overlay) {
  if (!overlay || overlay.type !== "goal-config-transfer") {
    return [];
  }
  const selectedIds = new Set(Array.isArray(overlay.goalIds) ? overlay.goalIds : []);
  return getGoalConfigGoalsByGroup(overlay.sourceGroupId).filter((goal) => selectedIds.has(goal.id));
}

function getGoalConfigTransferSummary(overlay = state.overlay) {
  const selectedGoals = getGoalConfigTransferSelectedGoals(overlay);
  if (!selectedGoals.length) {
    return "请选择目标";
  }
  if (selectedGoals.length <= 2) {
    return selectedGoals.map((goal) => goal.title).join("、");
  }
  return `${selectedGoals[0].title}、${selectedGoals[1].title} 等 ${selectedGoals.length} 个目标`;
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

function getGoalConfigAlignReferenceKeys(draft = state.goalConfig.editingDraft) {
  const keys = new Set();
  const draftId = String(draft?.id || "").trim();
  const draftTitle = String(draft?.title || "").trim();
  const persistedTitle = draftId ? String(getGoalConfigGoal(draftId)?.title || "").trim() : "";

  if (draftId) {
    keys.add(`id:${draftId}`);
  }
  if (draftTitle) {
    keys.add(`title:${draftTitle}`);
  }
  if (persistedTitle) {
    keys.add(`title:${persistedTitle}`);
  }

  return keys;
}

function isGoalConfigMutualAlignBlocked(draft, candidateGoal) {
  if (!draft || !candidateGoal) {
    return false;
  }

  const referenceKeys = getGoalConfigAlignReferenceKeys(draft);
  const candidateAlignedGoalId = String(candidateGoal.alignedGoalId || "").trim();
  if (candidateAlignedGoalId && referenceKeys.has(`id:${candidateAlignedGoalId}`)) {
    return true;
  }

  const candidateAlignedGoal = String(candidateGoal.alignedGoal || "").trim();
  if (!candidateAlignedGoal) {
    return false;
  }

  return referenceKeys.has(`title:${candidateAlignedGoal}`);
}

function getGoalConfigAlignOptions(draft = state.goalConfig.editingDraft) {
  const currentGoalId = draft?.id || null;

  return sortGoalConfigGoals(state.goalConfigGoals)
    .filter((goal) => goal.groupId !== "recycle" && goal.id !== currentGoalId)
    .filter((goal) => !isGoalConfigMutualAlignBlocked(draft, goal))
    .map((goal) => ({
      id: goal.id,
      title: goal.title,
    }));
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
  return [createGoalConfigKr(type, 0)];
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

function getGoalConfigProcesses() {
  const processes =
    Array.isArray(state.goalConfigProcesses) && state.goalConfigProcesses.length
      ? state.goalConfigProcesses
      : DEFAULT_GOAL_CONFIG_PROCESSES;
  return sortGoalConfigProcesses(processes);
}

function getGoalConfigProcessById(processId) {
  return getGoalConfigProcesses().find((item) => item.id === processId);
}

function getGoalConfigProcessName(processId, fallback = "") {
  return getGoalConfigProcessById(processId)?.name || fallback;
}

function getGoalConfigGoalTitle(goalId, fallback = "") {
  return getGoalConfigGoal(goalId)?.title || fallback;
}

function resolveGoalConfigFlowProcessId(flowValue) {
  const normalizedValue = String(flowValue || "").trim();
  if (!normalizedValue) {
    return "";
  }

  const directMatch = getGoalConfigProcessById(normalizedValue);
  if (directMatch) {
    return directMatch.id;
  }

  const legacyMatch = getGoalConfigProcesses().find((item) => normalizeProcessName(item.name) === normalizedValue);
  return legacyMatch ? legacyMatch.id : "";
}

function resolveGoalConfigAlignedGoalId(alignedGoalValue) {
  const normalizedValue = String(alignedGoalValue || "").trim();
  if (!normalizedValue) {
    return "";
  }

  const directMatch = getGoalConfigGoal(normalizedValue);
  if (directMatch) {
    return directMatch.id;
  }

  const legacyMatch = sortGoalConfigGoals(state.goalConfigGoals).find((goal) => String(goal.title || "").trim() === normalizedValue);
  return legacyMatch ? legacyMatch.id : "";
}

function isGoalConfigProcessNameTaken(nextName, ignoreProcessId = "") {
  const normalizedName = normalizeProcessName(nextName);
  if (!normalizedName) {
    return false;
  }

  return getGoalConfigProcesses().some(
    (item) => item.id !== ignoreProcessId && normalizeProcessName(item.name) === normalizedName
  );
}

function getGoalConfigFlowOptions() {
  return getGoalConfigProcesses().map((item) => ({
    id: item.id,
    label: item.name,
    isDefault: !!item.isDefault,
  }));
}

function getDefaultGoalConfigFlow() {
  return getGoalConfigFlowOptions()[0]?.id || DEFAULT_GOAL_CONFIG_PROCESSES[0].id;
}

function isGoalConfigPristineDraft(draft) {
  if (!draft || !draft.isNew) {
    return false;
  }

  return (
    !draft.title &&
    !draft.alignedGoalId &&
    !(draft.executors || []).length &&
    (draft.flowProcessId || getDefaultGoalConfigFlow()) === getDefaultGoalConfigFlow() &&
    (draft.krs || []).every((kr) => !kr.title && !kr.threshold && !kr.passing && !kr.challenge)
  );
}

function normalizeGoalConfigDraft(draft) {
  if (!draft) {
    return draft;
  }

  const next = clone(draft);
  const defaultFlowProcessId = getDefaultGoalConfigFlow();
  const hasFlowProcessId = Object.prototype.hasOwnProperty.call(next, "flowProcessId");
  const hasAlignedGoalId = Object.prototype.hasOwnProperty.call(next, "alignedGoalId");
  const resolvedFlowProcessId = resolveGoalConfigFlowProcessId(next.flowProcessId || next.flow);
  const resolvedAlignedGoalId = resolveGoalConfigAlignedGoalId(next.alignedGoalId || next.alignedGoal);

  if (resolvedFlowProcessId) {
    next.flowProcessId = resolvedFlowProcessId;
  } else if (hasFlowProcessId) {
    next.flowProcessId = defaultFlowProcessId;
  } else {
    next.flowProcessId = "";
  }

  if (next.flowProcessId) {
    next.flow = getGoalConfigProcessName(next.flowProcessId, String(next.flow || ""));
  } else if (!String(next.flow || "").trim() && hasFlowProcessId) {
    next.flow = getGoalConfigProcessName(defaultFlowProcessId);
  } else {
    next.flow = String(next.flow || "");
  }

  if (resolvedAlignedGoalId) {
    next.alignedGoalId = resolvedAlignedGoalId;
  } else if (hasAlignedGoalId) {
    next.alignedGoalId = "";
  } else {
    next.alignedGoalId = "";
  }

  if (next.alignedGoalId) {
    next.alignedGoal = getGoalConfigGoalTitle(next.alignedGoalId, String(next.alignedGoal || ""));
  } else if (hasAlignedGoalId) {
    next.alignedGoal = "";
  } else {
    next.alignedGoal = String(next.alignedGoal || "");
  }

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
      alignedGoalId: "",
      executors: [],
      flowProcessId: getDefaultGoalConfigFlow(),
      createdAt: new Date().toISOString(),
      isNew: true,
      krs: createGoalConfigInitialKrs("auto"),
    }
  );
}

function createGoalConfigTestingDraft(goal) {
  const draft = createGoalConfigDraft({
    ...(goal || {}),
    id: goal?.id || `goal-config-testing-${Date.now()}`,
    groupId: goal?.groupId || resolveGoalConfigTargetGroupId(),
    title: "测试经营目标模板",
    type: "auto",
    alignedGoalId: "",
    executors: clone(ALL_GOAL_CONFIG_EXECUTOR_IDS),
    flowProcessId: getDefaultGoalConfigFlow(),
    createdAt: new Date().toISOString(),
    isNew: true,
    krs: [createGoalConfigKr("auto", 0), createGoalConfigKr("auto", 1)],
  });

  draft.krs = [
    {
      ...draft.krs[0],
      title: "经营复盘覆盖率达到目标值",
      threshold: "60",
      passing: "80",
      challenge: "100",
      weight: "50%",
    },
    {
      ...draft.krs[1],
      title: "重点经营动作按期闭环",
      threshold: "1",
      passing: "2",
      challenge: "3",
      weight: "50%",
    },
  ];

  return normalizeGoalConfigDraft(draft);
}

function getGoalConfigLaunchGoals() {
  return sortGoalConfigGoals(state.goalConfigGoals)
    .filter((goal) => isGoalConfigLaunchReadyGoal(goal))
    .map((goal) => {
      const alignedGoalId = goal.alignedGoalId || resolveGoalConfigAlignedGoalId(goal.alignedGoal);
      const flowProcessId = goal.flowProcessId || resolveGoalConfigFlowProcessId(goal.flow);
      return {
        id: goal.id,
        title: goal.title,
        groupId: goal.groupId,
        groupLabel: getGoalConfigGroup(goal.groupId)?.label || "全部分组",
        type: goal.type,
        goalType: getGoalConfigTypeLabel(goal.type),
        alignedGoalId,
        alignedGoal: alignedGoalId ? getGoalConfigGoalTitle(alignedGoalId, goal.alignedGoal || "") : goal.alignedGoal || "",
        executors: clone(goal.executors || []),
        executorLabels: (goal.executors || []).map((item) => goalConfigExecutorLabel(item)),
        flowProcessId,
        flow: flowProcessId ? getGoalConfigProcessName(flowProcessId, goal.flow || "") : goal.flow || "",
        createdAt: goal.createdAt,
        krs: clone(goal.krs || []),
      };
    });
}

function isGoalConfigLaunchReadyGoal(goal) {
  if (!goal || goal.groupId === "recycle") {
    return false;
  }

  const hasTitle = !!String(goal.title || "").trim();
  const hasFlow = !!String(goal.flowProcessId || goal.flow || "").trim();
  const hasExecutors = Array.isArray(goal.executors) && goal.executors.length > 0;
  const hasKrs = Array.isArray(goal.krs) && goal.krs.length > 0;
  const hasKrTitles = hasKrs && goal.krs.every((kr) => !!String(kr.title || "").trim());

  return hasTitle && hasFlow && hasExecutors && hasKrs && hasKrTitles;
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
  setGoalConfigProcessMenuId(null);
}

function normalizeProcessName(value) {
  return String(value || "").trim();
}

function normalizeGoalConfigGroupName(value) {
  return String(value || "").trim();
}

function beginGoalConfigGroupEditing(groupId) {
  const group = getGoalConfigGroup(groupId);
  if (!group) {
    return;
  }
  state.goalConfig.editingGroupId = groupId;
  state.goalConfig.editingGroupName = group.label || "";
  clearGoalConfigPanels();
}

function cancelGoalConfigGroupEditing() {
  state.goalConfig.editingGroupId = null;
  state.goalConfig.editingGroupName = "";
}

function saveGoalConfigProcessName(processId) {
  if (!state.goalConfig.processEditingId || state.goalConfig.processEditingId !== processId) {
    return true;
  }
  const process = state.goalConfigProcesses.find((item) => item.id === processId);
  if (!process) {
    cancelGoalConfigProcessEditing();
    return true;
  }
  const previousName = process.name;
  const nextName = normalizeProcessName(state.goalConfig.processEditingName);
  if (!nextName) {
    showToast("请输入流程名称");
    return false;
  }
  if (isGoalConfigProcessNameTaken(nextName, processId)) {
    showToast("流程名称已存在");
    return false;
  }
  if (process.name !== nextName) {
    state.goalConfigProcesses = state.goalConfigProcesses.map((item) =>
      item.id === processId
        ? {
            ...item,
            name: nextName,
            updatedAt: formatDateOnly(),
          }
        : item
    );
    state.goalConfigGoals = state.goalConfigGoals.map((goal) => {
      const flowProcessId = goal.flowProcessId || resolveGoalConfigFlowProcessId(goal.flow);
      if (flowProcessId !== processId && goal.flow !== previousName) {
        return goal;
      }
      return {
        ...goal,
        flowProcessId: processId,
        flow: nextName,
      };
    });
    if (state.goalConfig.editingDraft) {
      state.goalConfig.editingDraft = normalizeGoalConfigDraft(state.goalConfig.editingDraft);
    }
    showToast("流程名称已更新");
  }
  state.goalConfig.processEditingId = null;
  state.goalConfig.processEditingName = "";
  setGoalConfigProcessMenuId(null);
  return true;
}

function saveGoalConfigGroupName(groupId) {
  if (!state.goalConfig.editingGroupId || state.goalConfig.editingGroupId !== groupId) {
    return true;
  }
  const group = getGoalConfigGroup(groupId);
  if (!group) {
    cancelGoalConfigGroupEditing();
    return true;
  }
  const nextName = normalizeGoalConfigGroupName(state.goalConfig.editingGroupName);
  if (!nextName) {
    showToast("请输入分组名称");
    return false;
  }
  if (group.label !== nextName) {
    state.goalConfigGroups = state.goalConfigGroups.map((item) =>
      item.id === groupId
        ? {
            ...item,
            label: nextName,
          }
        : item
    );
    showToast("分组名称已更新");
  }
  cancelGoalConfigGroupEditing();
  if (isConfigPrepGuideStep(7)) {
    advanceConfigPrepGuide(8);
  }
  return true;
}

function cancelGoalConfigProcessEditing() {
  state.goalConfig.processEditingId = null;
  state.goalConfig.processEditingName = "";
  setGoalConfigProcessMenuId(null);
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

function openExternalPage(url) {
  const popup = window.open(url, "_blank", "noopener,noreferrer");
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

function getConfigPrepGuideType() {
  const guideType = state.configPrepGuide && state.configPrepGuide.type;
  return CONFIG_PREP_GUIDE_DEFINITIONS[guideType] ? guideType : "goal-process";
}

function getConfigPrepGuideMeta(type = getConfigPrepGuideType()) {
  return CONFIG_PREP_GUIDE_DEFINITIONS[type] || CONFIG_PREP_GUIDE_DEFINITIONS["goal-process"];
}

function getConfigPrepGuideSteps(type = getConfigPrepGuideType()) {
  return getConfigPrepGuideMeta(type).steps;
}

function isConfigPrepGuideLastStep() {
  if (!state.configPrepGuide) {
    return false;
  }

  return Number(state.configPrepGuide.step) === getConfigPrepGuideSteps().length;
}

function getConfigPrepGuideStep(step = state.configPrepGuide && state.configPrepGuide.step) {
  return getConfigPrepGuideSteps().find((item) => item.step === Number(step)) || null;
}

function isGuideTypeStep(type, step) {
  return !!state.configPrepGuide && getConfigPrepGuideType() === type && Number(state.configPrepGuide.step) === Number(step);
}

function isConfigPrepGuideStep(step) {
  return isGuideTypeStep("goal-process", step);
}

function isLaunchAdvanceGuideStep(step) {
  return isGuideTypeStep("launch-advance", step);
}

function getGuideStartBlockedMessage(type, profile = getCurrentUserProfile()) {
  if (type === "launch-advance") {
    if (!isPageAllowedForProfile("goal-management", profile)) {
      return '无法开始“发起与推进”引导：当前角色缺少“目标管理”页面权限';
    }
    if (!getGoalConfigLaunchGoals().length) {
      return '无法开始“发起与推进”引导：目标库中至少需要 1 个完整可发起的目标';
    }
    return "";
  }

  if (!isPageAllowedForProfile("goal-config", profile)) {
    return '无法开始“目标与流程”引导：当前角色缺少“目标配置”页面权限';
  }

  return "";
}

function startConfigPrepGuideByType(type, startStep = 1) {
  const blockedMessage = getGuideStartBlockedMessage(type);
  if (blockedMessage) {
    setDropdownOpenState(null);
    showToast(blockedMessage);
    return false;
  }
  closeTransientPanels();
  clearGoalConfigEditing();
  state.overlay = null;
  state.sidebarCollapsed = false;
  setSidebarGroupExpanded("goal", true);
  state.goalConfig.treeCollapsed = false;
  state.configPrepGuide = { type, step: 1 };
  if (Number(startStep) > 1) {
    setConfigPrepGuideStep(startStep);
  }
  return true;
}

function startConfigPrepGuide(startStep = 1) {
  return startConfigPrepGuideByType("goal-process", startStep);
}

function startLaunchAdvanceGuide(startStep = 1) {
  return startConfigPrepGuideByType("launch-advance", startStep);
}

function closeConfigPrepGuide(showCompletedToast = false) {
  const guideType = state.configPrepGuide ? getConfigPrepGuideType() : "";
  const guideMeta = state.configPrepGuide ? getConfigPrepGuideMeta(guideType) : null;
  state.configPrepGuide = null;

  if (showCompletedToast && guideMeta && guideMeta.completedToast) {
    showToast(guideMeta.completedToast);
  }
}

function setConfigPrepGuideStep(step) {
  if (!state.configPrepGuide) {
    return;
  }

  const guideType = getConfigPrepGuideType();
  const guideSteps = getConfigPrepGuideSteps(guideType);

  if (step > guideSteps.length) {
    closeConfigPrepGuide(true);
    return;
  }

  if (guideType === "goal-process") {
    if (step <= 1) {
      state.sidebarCollapsed = false;
      setSidebarGroupExpanded("goal", true);
    }

    if (step >= 6) {
      state.goalConfig.treeCollapsed = false;
    }
  } else if (guideType === "launch-advance") {
    state.sidebarCollapsed = false;
    setSidebarGroupExpanded("goal", true);

    if (step >= 2) {
      state.activePage = "goal-management";
    }
  }

  state.configPrepGuide = { type: guideType, step };
}

function advanceConfigPrepGuide(nextStep) {
  if (!state.configPrepGuide) {
    return;
  }
  setConfigPrepGuideStep(nextStep);
}

function maybeStartAutomaticGuide() {
  if (state.configPrepGuide || state.overlay) {
    return false;
  }

  const pendingManualGuidePage = state.pendingManualGuidePage;
  state.pendingManualGuidePage = null;

  if (!pendingManualGuidePage || pendingManualGuidePage !== state.activePage) {
    return false;
  }

  const currentUser = getCurrentUserProfile();

  if (
    state.activePage === "goal-config" &&
    !hasGuideAutoStarted("goal-process", currentUser.key) &&
    !getGuideStartBlockedMessage("goal-process", currentUser)
  ) {
    const started = startConfigPrepGuide(2);
    if (started) {
      markGuideAutoStarted("goal-process", currentUser.key);
    }
    return started;
  }

  if (
    state.activePage === "goal-management" &&
    !hasGuideAutoStarted("launch-advance", currentUser.key) &&
    !getGuideStartBlockedMessage("launch-advance", currentUser)
  ) {
    const started = startLaunchAdvanceGuide(2);
    if (started) {
      markGuideAutoStarted("launch-advance", currentUser.key);
    }
    return started;
  }

  return false;
}

function getConfigPrepGuideFirstKrId() {
  const draft = state.goalConfig.editingDraft;
  return draft && Array.isArray(draft.krs) && draft.krs[0] ? draft.krs[0].id : "";
}

function getConfigPrepGuideInputValue(field, krId = "") {
  const krSelector = krId ? `[data-kr-id="${krId}"]` : "";
  const input = document.querySelector(`[data-field="${field}"]${krSelector}`);
  return input instanceof HTMLInputElement ? input.value.trim() : "";
}

function isConfigPrepGuideGoalDraftReady() {
  const firstKrId = getConfigPrepGuideFirstKrId();
  if (!firstKrId) {
    return false;
  }

  return [
    getConfigPrepGuideInputValue("goal-config-title"),
    getConfigPrepGuideInputValue("goal-config-kr-threshold", firstKrId),
    getConfigPrepGuideInputValue("goal-config-kr-passing", firstKrId),
    getConfigPrepGuideInputValue("goal-config-kr-challenge", firstKrId),
    getConfigPrepGuideInputValue("goal-config-kr-weight", firstKrId),
  ].every(Boolean);
}

function isConfigPrepGuideDraftFocusField(element) {
  if (!(element instanceof HTMLInputElement)) {
    return false;
  }

  const firstKrId = getConfigPrepGuideFirstKrId();
  if (!firstKrId) {
    return false;
  }

  if (element.dataset.field === "goal-config-title") {
    return true;
  }

  return (
    element.dataset.krId === firstKrId &&
    [
      "goal-config-kr-threshold",
      "goal-config-kr-passing",
      "goal-config-kr-challenge",
      "goal-config-kr-weight",
    ].includes(element.dataset.field || "")
  );
}

function resolveConfigPrepGuideSelectors(step) {
  if (!step) {
    return [];
  }

  const selectors = typeof step.selectors === "function" ? step.selectors() : step.selectors;
  return (Array.isArray(selectors) ? selectors : [selectors]).filter(Boolean);
}

function isVisibleGuideTarget(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }

  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

function getConfigPrepGuideTargetElements(step) {
  return [...new Set(resolveConfigPrepGuideSelectors(step))]
    .map((selector) => document.querySelector(selector))
    .filter((element) => isVisibleGuideTarget(element));
}

function ensureConfigPrepGuideTargetVisible(elements) {
  const primary = elements[0];
  if (!(primary instanceof HTMLElement)) {
    return;
  }

  const rect = primary.getBoundingClientRect();
  const margin = 32;
  const isOutsideViewport =
    rect.top < margin ||
    rect.bottom > window.innerHeight - margin ||
    rect.left < margin ||
    rect.right > window.innerWidth - margin;

  if (isOutsideViewport) {
    primary.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }
}

function getConfigPrepGuideTargetRect(step, elements) {
  if (!elements.length) {
    return null;
  }

  const padding = Number(step.padding) || 10;
  let top = Number.POSITIVE_INFINITY;
  let left = Number.POSITIVE_INFINITY;
  let right = 0;
  let bottom = 0;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    top = Math.min(top, rect.top);
    left = Math.min(left, rect.left);
    right = Math.max(right, rect.right);
    bottom = Math.max(bottom, rect.bottom);
  });

  if (!Number.isFinite(top) || !Number.isFinite(left)) {
    return null;
  }

  const paddedTop = Math.round(Math.max(8, top - padding));
  const paddedLeft = Math.round(Math.max(8, left - padding));
  const paddedRight = Math.round(Math.min(window.innerWidth - 8, right + padding));
  const paddedBottom = Math.round(Math.min(window.innerHeight - 8, bottom + padding));

  return {
    top: paddedTop,
    left: paddedLeft,
    right: paddedRight,
    bottom: paddedBottom,
    width: Math.max(0, paddedRight - paddedLeft),
    height: Math.max(0, paddedBottom - paddedTop),
    radius: (Number(step.radius) || 16) + 6,
  };
}

function renderConfigPrepGuideBubble(step) {
  const guideMeta = getConfigPrepGuideMeta();
  const isLastStep = Number(step.step) === guideMeta.steps.length;
  const closeLabel = step.closeLabel || (isLastStep ? "完成引导" : "结束引导");
  return `
    <div class="config-prep-guide-bubble" data-config-prep-guide-bubble data-placement="${escapeHtml(step.placement || "right")}">
      <button class="config-prep-guide-close" data-action="close-config-prep-guide" type="button" aria-label="${escapeHtml(closeLabel)}">${escapeHtml(closeLabel)}</button>
      <div class="config-prep-guide-bubble-badge">${escapeHtml(guideMeta.label)} ${step.step}/${guideMeta.steps.length}</div>
      <div class="config-prep-guide-bubble-title">${escapeHtml(step.title)}</div>
      <div class="config-prep-guide-bubble-copy">${escapeHtml(step.message)}</div>
      <div class="config-prep-guide-bubble-hint">${escapeHtml(step.hint)}</div>
      <div class="config-prep-guide-bubble-arrow" aria-hidden="true"></div>
    </div>
  `;
}

function buildConfigPrepGuideRoundedRectPath(rect) {
  const radius = Math.max(0, Math.min(rect.radius, rect.width / 2, rect.height / 2));

  if (!radius) {
    return `M${rect.left} ${rect.top}H${rect.right}V${rect.bottom}H${rect.left}Z`;
  }

  return [
    `M${rect.left + radius} ${rect.top}`,
    `H${rect.right - radius}`,
    `A${radius} ${radius} 0 0 1 ${rect.right} ${rect.top + radius}`,
    `V${rect.bottom - radius}`,
    `A${radius} ${radius} 0 0 1 ${rect.right - radius} ${rect.bottom}`,
    `H${rect.left + radius}`,
    `A${radius} ${radius} 0 0 1 ${rect.left} ${rect.bottom - radius}`,
    `V${rect.top + radius}`,
    `A${radius} ${radius} 0 0 1 ${rect.left + radius} ${rect.top}`,
    "Z",
  ].join(" ");
}

function renderConfigPrepGuideLayer(step, rect) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const outerPath = `M0 0H${viewportWidth}V${viewportHeight}H0Z`;
  const cutoutPath = buildConfigPrepGuideRoundedRectPath(rect);

  return `
    <svg
      class="config-prep-guide-mask"
      aria-hidden="true"
      viewBox="0 0 ${viewportWidth} ${viewportHeight}"
      preserveAspectRatio="none"
    >
      <path class="config-prep-guide-mask-shape" d="${outerPath} ${cutoutPath}" fill-rule="evenodd"></path>
    </svg>
    <div
      class="config-prep-guide-spotlight"
      style="top:${rect.top}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height}px;border-radius:${rect.radius}px;"
      aria-hidden="true"
    ></div>
    ${renderConfigPrepGuideBubble(step)}
  `;
}

function computeConfigPrepGuideBubblePosition(step, rect, bubble) {
  const bubbleWidth = bubble.offsetWidth;
  const bubbleHeight = bubble.offsetHeight;
  const preferred = step.placement || "right";
  const placements = [...new Set([preferred, "right", "left", "bottom", "top"])];
  const gap = 18;
  const margin = 16;

  const buildPosition = (placement) => {
    switch (placement) {
      case "left":
        return {
          placement,
          top: rect.top + rect.height / 2 - bubbleHeight / 2,
          left: rect.left - bubbleWidth - gap,
        };
      case "bottom":
        return {
          placement,
          top: rect.bottom + gap,
          left: rect.left + rect.width / 2 - bubbleWidth / 2,
        };
      case "top":
        return {
          placement,
          top: rect.top - bubbleHeight - gap,
          left: rect.left + rect.width / 2 - bubbleWidth / 2,
        };
      case "right":
      default:
        return {
          placement: "right",
          top: rect.top + rect.height / 2 - bubbleHeight / 2,
          left: rect.right + gap,
        };
    }
  };

  const fitsViewport = (position) =>
    position.top >= margin &&
    position.left >= margin &&
    position.top + bubbleHeight <= window.innerHeight - margin &&
    position.left + bubbleWidth <= window.innerWidth - margin;

  const clampPosition = (position) => ({
    placement: position.placement,
    top: Math.min(Math.max(position.top, margin), Math.max(margin, window.innerHeight - bubbleHeight - margin)),
    left: Math.min(Math.max(position.left, margin), Math.max(margin, window.innerWidth - bubbleWidth - margin)),
  });

  const fittingPosition = placements.map(buildPosition).find((position) => fitsViewport(position));
  return clampPosition(fittingPosition || buildPosition(preferred));
}

function syncConfigPrepGuide() {
  const layer = document.querySelector("[data-config-prep-guide-layer]");
  if (!(layer instanceof HTMLElement)) {
    return;
  }

  if (!state.configPrepGuide) {
    layer.innerHTML = "";
    return;
  }

  const step = getConfigPrepGuideStep();
  if (!step) {
    layer.innerHTML = "";
    return;
  }

  let elements = getConfigPrepGuideTargetElements(step);
  if (elements.length) {
    ensureConfigPrepGuideTargetVisible(elements);
    elements = getConfigPrepGuideTargetElements(step);
  }

  const rect = getConfigPrepGuideTargetRect(step, elements);
  if (!rect) {
    layer.innerHTML = `
      <div class="config-prep-guide-fallback">
        ${renderConfigPrepGuideBubble(step)}
      </div>
    `;
    return;
  }

  layer.innerHTML = renderConfigPrepGuideLayer(step, rect);
  const bubble = layer.querySelector("[data-config-prep-guide-bubble]");
  if (!(bubble instanceof HTMLElement)) {
    return;
  }

  const position = computeConfigPrepGuideBubblePosition(step, rect, bubble);
  bubble.dataset.placement = position.placement;
  bubble.style.top = `${position.top}px`;
  bubble.style.left = `${position.left}px`;
}

function shouldDelayConfigPrepGuideSyncForAnimatedTarget() {
  if (!state.configPrepGuide) {
    return false;
  }

  const step = getConfigPrepGuideStep();
  if (!step) {
    return false;
  }

  return getConfigPrepGuideTargetElements(step).some(
    (element) => element instanceof HTMLElement && ["opening", "closing"].includes(element.dataset.dropdownState || "")
  );
}

function scheduleConfigPrepGuideSync(syncImmediately = false) {
  window.cancelAnimationFrame(configPrepGuideFrame);
  window.clearTimeout(configPrepGuideTimer);
  configPrepGuideTimer = 0;

  if (!syncImmediately && shouldDelayConfigPrepGuideSyncForAnimatedTarget()) {
    configPrepGuideTimer = window.setTimeout(() => {
      configPrepGuideTimer = 0;
      scheduleConfigPrepGuideSync(true);
    }, DROPDOWN_PANEL_ANIMATION_MS);
    return;
  }

  configPrepGuideFrame = window.requestAnimationFrame(() => {
    configPrepGuideFrame = 0;
    syncConfigPrepGuide();
  });
}

function shouldSyncConfigPrepGuideAfterMotion(target) {
  if (!state.configPrepGuide || !(target instanceof HTMLElement)) {
    return false;
  }

  if (target.closest(".config-prep-guide-root")) {
    return false;
  }

  const step = getConfigPrepGuideStep();
  if (!step) {
    return false;
  }

  return getConfigPrepGuideTargetElements(step).some(
    (element) => element === target || element.contains(target) || target.contains(element)
  );
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
        : "重置后会恢复为空的初始数据，并刷新页面。",
    description:
      step === 1
        ? "这会清除当前 demo 的浏览器本地缓存，适合重新开始测试。"
        : "确认后会删除 okr-inprogress-demo 的本地缓存键，并以空目标库重新加载当前页面。",
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
        value: "待填写",
        score: "--",
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
    flowProcessId: template.flowProcessId || "",
    flow: template.flow,
    alignedGoalId: template.alignedGoalId || "",
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
    flowProcessId: goal.flowProcessId || "",
    flow: goal.flow,
    alignedGoalId: goal.alignedGoalId || "",
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

function normalizeGoalViewKrTitle(title, index = 0) {
  const raw = String(title || "").trim();
  if (!raw) {
    return `KR ${index + 1}`;
  }
  return raw.replace(/^KR\s*\d+\s*[:：]\s*/i, "").trim() || `KR ${index + 1}`;
}

function extractGoalViewScore(value, fallback = "-") {
  const text = String(value ?? "").trim();
  if (!text || text === "-" || text === "--") {
    return fallback;
  }
  const matched = text.match(/-?\d+(?:\.\d+)?/);
  return matched ? matched[0] : text;
}

function buildGoalViewCardData(goal, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const isCompleted = currentTab === "completed";
  const goalTypeKey = goal.goalTypeKey || "auto";
  const keyResults = Array.isArray(goal.keyResults) ? goal.keyResults : [];
  const templateKrs =
    Array.isArray(goal.templateKrs) && goal.templateKrs.length
      ? goal.templateKrs
      : keyResults.map((item, index) => ({
          title: normalizeGoalViewKrTitle(item.title, index),
          threshold: "-",
          passing: "-",
          challenge: "-",
          weight: goalTypeKey === "manual" ? "-" : "0%",
        }));
  const totalScore = extractGoalViewScore(
    goal.scoreValue ?? goal.scoreText ?? goal.totalScore ?? goal.score,
    isCompleted ? "-" : "--"
  );

  return {
    title: goal.title,
    period: goal.period,
    totalScore,
    krs: templateKrs.map((kr, index) => {
      const result = keyResults[index] || {};
      const base = {
        label: `KR ${index + 1}`,
        title: kr.title || normalizeGoalViewKrTitle(result.title, index),
        threshold: goalTypeKey === "auto" ? kr.threshold || "-" : "-",
        passing: goalTypeKey === "auto" ? kr.passing || "-" : "-",
        challenge: goalTypeKey === "auto" ? kr.challenge || "-" : "-",
        weight: goalTypeKey === "manual" ? "-" : kr.weight || "0%",
      };

      if (isCompleted) {
        return {
          ...base,
          result:
            result.value ||
            (goalTypeKey === "manual" ? "已完成" : kr.challenge || kr.passing || kr.threshold || "已完成"),
          score: extractGoalViewScore(result.score, totalScore),
        };
      }

      return {
        ...base,
        current: "待填写",
        score: "--",
      };
    }),
  };
}

function clearGoalConfigPanels() {
  setGoalConfigGroupMenuId(null);
  setGoalConfigCardMenuId(null);
  setGoalConfigProcessMenuId(null);
}

function resetMyGoalListState(tabKey = getMyGoalTabKey()) {
  setMyGoalPage(1, tabKey);
  setMyGoalSelection([], tabKey);
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
}

function clearAllTableSelections() {
  state.selectionByTab.ongoing = [];
  state.selectionByTab.completed = [];
  state.myGoals.selectionByTab.pending = [];
  state.myGoals.selectionByTab.executing = [];
  state.myGoals.selectionByTab.completed = [];
  state.goalConfig.processSelection = [];
  setGoalConfigProcessMenuId(null);
}

function refreshCurrentPageTableState(pageKey = state.activePage) {
  const currentPage = normalizeGoalPage(pageKey);
  clearAllTableSelections();

  if (currentPage === "goal-management") {
    setActivePage(1, getTabKey(state.activeTab));
    return;
  }

  if (currentPage === "my-goals") {
    setMyGoalPage(1, getMyGoalTabKey(state.myGoals.activeTab));
    return;
  }

  if (currentPage === "goal-config") {
    setGoalConfigProcessPage(1);
  }
}

function closeTransientPanels() {
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
  clearGoalConfigPanels();
  cancelGoalConfigGroupEditing();
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

// Exact chevron geometry pulled from the Figma base select component (node 296:19731).
function renderDropdownChevronIcon(className = "", size = "md") {
  const classes = ["dropdown-chevron", size === "sm" ? "is-sm" : "", className].filter(Boolean).join(" ");
  return `
    <span class="${classes}" aria-hidden="true">
      <svg class="dropdown-chevron-vector" viewBox="0 0 11.594 6.1095" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7965 0.141002L5.7965 5.016L0.7965 0.141002C0.702833 0.0473354 0.5935 0.000501969 0.4685 0.000501969C0.3435 0.000501969 0.234167 0.0473354 0.1405 0.141002C0.0468334 0.234669 0 0.344002 0 0.469002C0 0.594002 0.0416667 0.698169 0.125 0.781502L5.453 5.969C5.54667 6.06267 5.66133 6.1095 5.797 6.1095C5.93267 6.1095 6.04733 6.06267 6.141 5.969L11.469 0.797002C11.5523 0.703335 11.594 0.591335 11.594 0.461002C11.594 0.330668 11.5472 0.221335 11.4535 0.133002C11.3598 0.0446688 11.2505 0.0003351 11.1255 1.76678e-06C11.0005 -0.000331567 10.8912 0.0465018 10.7975 0.140502L10.7965 0.141002Z" fill="currentColor"/>
      </svg>
    </span>
  `;
}

function renderControlArrow(className = "") {
  return renderDropdownChevronIcon(`control-arrow ${className}`.trim());
}

function isDropdownOpen(dropdownKey) {
  return state.openDropdown === dropdownKey;
}

function dropdownTriggerClass(baseClass, dropdownKey) {
  return `${baseClass}${isDropdownOpen(dropdownKey) ? " is-open" : ""}`;
}

function getDropdownMotionState(dropdownKey) {
  if (state.openDropdown === dropdownKey) {
    return openingDropdownKeys.has(dropdownKey) ? "opening" : "open";
  }

  return closingDropdownKeys.has(dropdownKey) ? "closing" : "closed";
}

function shouldRenderDropdown(dropdownKey) {
  return getDropdownMotionState(dropdownKey) !== "closed";
}

function renderDropdownPanel(dropdownKey, content, className = "dropdown-panel", attributes = "") {
  if (!shouldRenderDropdown(dropdownKey)) {
    return "";
  }

  const extraAttributes = attributes ? ` ${attributes.trim()}` : "";
  return `
    <div class="${className}" data-dropdown-key="${escapeHtml(dropdownKey)}" data-dropdown-state="${getDropdownMotionState(dropdownKey)}"${extraAttributes}>
      ${content}
    </div>
  `;
}

function getTransientPanelMotionState(panelType, panelId, isOpen) {
  const transientPanelKey = getTransientPanelKey(panelType, panelId);
  if (isOpen) {
    return openingTransientPanelKeys.has(transientPanelKey) ? "opening" : "open";
  }

  return closingTransientPanelKeys.has(transientPanelKey) ? "closing" : "closed";
}

function renderTransientPanel(panelType, panelId, isOpen, content, className, attributes = "") {
  const motionState = getTransientPanelMotionState(panelType, panelId, isOpen);
  if (motionState === "closed") {
    return "";
  }

  const extraAttributes = attributes ? ` ${attributes.trim()}` : "";
  return `
    <div class="${className}" data-transient-panel-key="${escapeHtml(getTransientPanelKey(panelType, panelId))}" data-dropdown-state="${motionState}"${extraAttributes}>
      ${content}
    </div>
  `;
}

function setRowMenuOpenState(nextMenuId) {
  setAnimatedPanelState("row-menu", state.openRowMenu, nextMenuId, (value) => {
    state.openRowMenu = value;
  });
}

function setGoalConfigCardMenuId(nextId) {
  setAnimatedPanelState("goal-config-card-menu", state.goalConfig.cardMenuId, nextId, (value) => {
    state.goalConfig.cardMenuId = value;
  });
}

function setGoalConfigGroupMenuId(nextId) {
  setAnimatedPanelState("goal-config-group-menu", state.goalConfig.groupMenuId, nextId, (value) => {
    state.goalConfig.groupMenuId = value;
  });
}

function setGoalConfigProcessMenuId(nextId) {
  setAnimatedPanelState("goal-config-process-menu", state.goalConfig.processMenuId, nextId, (value) => {
    state.goalConfig.processMenuId = value;
  });
}

function renderBreadcrumbSeparator() {
  return `
    <span class="breadcrumb-separator" aria-hidden="true">
      <img class="breadcrumb-separator-icon" src="./assets/breadcrumb-chevron.svg" alt="" />
    </span>
  `;
}

function renderDropdowns(tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const filters = getActiveFilters(currentTab);
  return {
    period: renderDropdownPanel(
      "period",
      `
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
      `
    ),
    type:
      currentTab === "completed"
        ? renderDropdownPanel(
            "type",
            `
          ${COMPLETED_TYPE_OPTIONS.map(
            (option) => `
              <button class="dropdown-option ${filters.type === option.key ? "is-active" : ""}" data-action="set-type" data-value="${option.key}" type="button">
                ${option.label}
              </button>
            `
          ).join("")}
        `
          )
        : "",
    members: renderDropdownPanel(
      "members",
      `
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
      `
      ,
      "dropdown-panel member-dropdown"
    ),
    pageSize: renderDropdownPanel(
      "page-size",
      `
          ${PAGE_SIZE_OPTIONS.map(
            (size) => `
              <button class="dropdown-option ${state.pageSize === size ? "is-active" : ""}" data-action="set-page-size" data-value="${size}" type="button">
                ${size} / 页
              </button>
            `
          ).join("")}
      `
    ),
  };
}

function renderMyGoalsDropdowns(tabKey = getMyGoalTabKey()) {
  const currentTab = getMyGoalTabKey(tabKey);
  const filters = getMyGoalFilters(currentTab);
  return {
    period: renderDropdownPanel(
      "my-goal-period",
      `
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
      `
    ),
    pageSize: renderDropdownPanel(
      "my-goal-page-size",
      `
          ${PAGE_SIZE_OPTIONS.map(
            (size) => `
              <button class="dropdown-option ${state.pageSize === size ? "is-active" : ""}" data-action="set-my-goal-page-size" data-value="${size}" type="button">
                ${size} / 页
              </button>
            `
          ).join("")}
      `
    ),
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
        ${isSidebarCollapsed ? renderSidebarGroupPopover(group) : ""}
      </div>

      <div class="submenu-list ${expanded ? "is-open" : ""}">
        ${group.items
          .map(
            (item) => `
              <button
                class="submenu-item ${state.activePage === item.pageKey ? "is-active" : ""}"
                data-action="navigate-page"
                data-value="${item.pageKey}"
                ${group.key === "goal" && item.pageKey === "goal-config" ? 'data-guide-id="config-prep-nav-goal-config"' : ""}
                ${group.key === "goal" && item.pageKey === "goal-management" ? 'data-guide-id="launch-advance-nav-goal-management"' : ""}
                type="button"
              >
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
  const sidebarPrimaryModules = getVisibleSidebarPrimaryModules();
  const sidebarGroups = getVisibleSidebarGroups();

  return `
    <aside class="sidebar ${isSidebarCollapsed ? "is-collapsed" : ""}">
      <div class="sidebar-inner">
        <div class="sidebar-menu">
          ${sidebarPrimaryModules
            .map(
              (item) => renderModuleButton(item, state.activePage === item.pageKey)
            )
            .join("")}

          ${sidebarGroups
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

function renderPayrollGroupSwitchControl() {
  const payrollGroupOptions = getPayrollGroupSwitchOptions();
  const currentPayrollGroup = getCurrentPayrollGroupSwitchOption();

  return `
    <button
      class="user-chip user-chip-button ${state.openDropdown === "payroll-group-switch" ? "is-open" : ""}"
      data-action="toggle-dropdown"
      data-value="payroll-group-switch"
      type="button"
      aria-haspopup="menu"
      aria-expanded="${state.openDropdown === "payroll-group-switch" ? "true" : "false"}"
      aria-label="切换薪酬组"
    >
      <div class="avatar user-chip-avatar">${escapeHtml(currentPayrollGroup.avatar)}</div>
      <div class="user-meta">
        <div class="user-name">${escapeHtml(currentPayrollGroup.label)}</div>
        <div class="role-tag">${escapeHtml(currentPayrollGroup.subtext)}</div>
      </div>
      <span class="user-switch-arrow" aria-hidden="true">
        <img class="user-switch-arrow-icon" src="./assets/chevron-down.svg" alt="" />
      </span>
    </button>
    ${renderDropdownPanel(
      "payroll-group-switch",
      `
        ${payrollGroupOptions
          .map(
            (group) => `
              <button
                class="dropdown-option user-switch-option ${group.key === currentPayrollGroup.key ? "is-active" : ""}"
                data-action="switch-payroll-group"
                data-value="${group.key}"
                type="button"
                role="menuitemradio"
                aria-checked="${group.key === currentPayrollGroup.key ? "true" : "false"}"
                ${group.key ? "" : "disabled"}
              >
                <span class="user-switch-option-label truncate" title="${escapeHtml(group.label)}">${escapeHtml(group.label)}</span>
              </button>
            `
          )
          .join("")}
      `,
      "dropdown-panel user-switch-panel",
      'role="menu" aria-label="薪酬组切换"'
    )}
  `;
}

function renderTopbar() {
  const isSidebarCollapsed = !!state.sidebarCollapsed;
  return `
    <header class="topbar ${isSidebarCollapsed ? "is-sidebar-collapsed" : ""}">
      <button class="brand" data-action="request-demo-reset" type="button" aria-label="重置演示缓存">
        <img class="brand-logo" src="./assets/Logo.svg" alt="Teams 薪酬" />
        <div class="brand-name" aria-hidden="true"><span class="brand-name-en">Teams</span> <span class="brand-name-cn">薪酬</span></div>
      </button>
      <div class="topbar-right">
        <button class="icon-button" type="button"><img src="./assets/bell.svg" alt="" /></button>
        <div class="topbar-user-switch">
          ${renderPayrollGroupSwitchControl()}
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
          <button class="${dropdownTriggerClass("control-button", "period")}" data-action="toggle-dropdown" data-value="period" type="button" aria-expanded="${isDropdownOpen("period") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderControlArrow()}
          </button>
          ${dropdowns.period}
        </div>

        <div class="control control-members control-auto">
          <button class="${dropdownTriggerClass("control-button", "members")}" data-action="toggle-dropdown" data-value="members" type="button" aria-expanded="${isDropdownOpen("members") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(memberLabel())}</span>
            ${renderControlArrow()}
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
                <button
                  class="segment ${filters.stage === item.key ? "is-active" : ""}"
                  data-action="set-stage"
                  data-value="${item.key}"
                  ${item.key === "executing" ? 'data-guide-id="launch-advance-stage-executing"' : ""}
                  type="button"
                >
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
          data-guide-id="launch-advance-advance-all"
          type="button"
          aria-disabled="${advanceState.isExecutingStage ? "false" : "true"}"
        >
          推进评分
        </button>
      </div>
    </div>
  `;
}

function renderGoalManagementGuide() {
  if (isGoalManagementGuideDismissed()) {
    return "";
  }

  return `
    <div class="guide-wrap">
      <div class="guide" role="note" aria-label="推进评分操作指引">
        <img src="./assets/info.svg" alt="" aria-hidden="true" />
        <div class="guide-text">${escapeHtml(GOAL_MANAGEMENT_GUIDE_TEXT)}</div>
        <button class="guide-close" data-action="dismiss-guide" type="button" aria-label="关闭推进评分操作指引">我知道了</button>
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
          <button class="${dropdownTriggerClass("control-button", "period")}" data-action="toggle-dropdown" data-value="period" type="button" aria-expanded="${isDropdownOpen("period") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderControlArrow()}
          </button>
          ${dropdowns.period}
        </div>

        <div class="control control-members control-auto">
          <button class="${dropdownTriggerClass("control-button", "members")}" data-action="toggle-dropdown" data-value="members" type="button" aria-expanded="${isDropdownOpen("members") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(memberLabel("completed"))}</span>
            ${renderControlArrow()}
          </button>
          ${dropdowns.members}
        </div>

        <div class="control control-type control-auto">
          <button class="${dropdownTriggerClass("control-button", "type")}" data-action="toggle-dropdown" data-value="type" type="button" aria-expanded="${isDropdownOpen("type") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(
              (COMPLETED_TYPE_OPTIONS.find((option) => option.key === filters.type) || COMPLETED_TYPE_OPTIONS[0]).label
            )}</span>
            ${renderControlArrow()}
          </button>
          ${dropdowns.type}
        </div>
      </div>
    </div>
  `;
}

function renderRowMenu(goal) {
  return renderTransientPanel(
    "row-menu",
    goal.id,
    state.openRowMenu === goal.id,
    `
      ${
        goal.stage === "executing"
          ? `<button class="dropdown-option" data-action="request-advance" data-value="${goal.id}" type="button">推进评分</button>`
          : ""
      }
      ${
        goal.stage === "rating"
          ? `
            <button class="dropdown-option" data-action="view-confirm-instance" data-value="${goal.id}" type="button">查看确认实例</button>
            <button class="dropdown-option" data-action="view-rating-instance" data-value="${goal.id}" type="button">查看评分实例</button>
          `
          : ""
      }
      <button class="dropdown-option danger" data-action="request-delete" data-value="${goal.id}" type="button">删除</button>
    `,
    "row-menu"
  );
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
          <button class="${dropdownTriggerClass("control-button", "my-goal-period")}" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button" aria-expanded="${isDropdownOpen("my-goal-period") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderControlArrow()}
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
  const headerState = getMyGoalHeaderCheckboxState(pageGoals, tabKey);
  const selectedIds = getMyGoalSelection(tabKey);
  const shouldShowBatchActions = selectedIds.length > 0;

  return `
    <div class="table-region">
      <div class="table-shell">
        <div class="table-header table-grid-pending">
          <div class="cell checkbox-wrap">
            ${renderCheckbox(headerState, 'data-action="toggle-my-goal-select-all"')}
          </div>
          <div class="cell header-title">目标名称</div>
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
                    (goal) => {
                      const checked = selectedIds.includes(goal.id);
                      return `
                      <div class="table-row table-grid-pending ${checked ? "is-selected" : ""}">
                        <div class="cell checkbox-wrap">
                          ${renderCheckbox(checked ? "checked" : "unchecked", `data-action="toggle-my-goal-select-row" data-value="${goal.id}"`)}
                        </div>
                        <div class="cell cell-title">
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
                    `;
                    }
                  )
                  .join("")
              : renderEmptyState(state.pendingGoals.length === 0 ? "暂无待处理的目标" : "未找到匹配的目标")
          }
        </div>
      </div>

      <div class="footer-row">
        <div class="batch-actions">
          ${shouldShowBatchActions ? '<button class="ghost-button" data-action="approve-my-goal-batch" type="button">批量通过</button>' : ""}
          ${shouldShowBatchActions ? '<button class="danger-button" data-action="reject-my-goal-batch" type="button">批量拒绝</button>' : ""}
        </div>
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
          <button class="${dropdownTriggerClass("control-button", "my-goal-period")}" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button" aria-expanded="${isDropdownOpen("my-goal-period") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderControlArrow()}
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
          <button class="${dropdownTriggerClass("control-button", "my-goal-period")}" data-action="toggle-my-goal-dropdown" data-value="my-goal-period" type="button" aria-expanded="${isDropdownOpen("my-goal-period") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(filters.period === "all" ? "全部周期" : filters.period)}</span>
            ${renderControlArrow()}
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
  const parentLabel = getPageParentLabel(pageKey);
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

function renderPayrollGroupSettingsPagination(rows, totalPages, currentPage) {
  return `
    <div class="pagination">
      <div class="pagination-total">共 ${rows.length} 条</div>
      <div class="pagination-controls">
        <button class="page-button" data-action="payroll-group-page-prev" type="button" ${currentPage <= 1 ? "disabled" : ""}>
          <img class="payroll-group-pagination-arrow" src="./assets/page-prev.svg" alt="" />
        </button>
        <div class="page-current">${currentPage}</div>
        <button class="page-button" data-action="payroll-group-page-next" type="button" ${currentPage >= totalPages ? "disabled" : ""}>
          <img class="payroll-group-pagination-arrow" src="./assets/page-next.svg" alt="" />
        </button>
      </div>
      <div class="page-size">
        <button class="page-size-button payroll-group-page-size-button ${isDropdownOpen("payroll-group-page-size") ? "is-open" : ""}" data-action="toggle-dropdown" data-value="payroll-group-page-size" type="button" aria-expanded="${isDropdownOpen("payroll-group-page-size") ? "true" : "false"}">
          <span>${state.pageSize} / 页</span>
          <img class="payroll-group-page-size-chevron" src="./assets/chevron-down.svg" alt="" />
        </button>
        ${renderDropdownPanel(
          "payroll-group-page-size",
          `
            ${PAGE_SIZE_OPTIONS.map(
              (item) => `
                <button class="dropdown-option ${state.pageSize === item ? "is-active" : ""}" data-action="set-payroll-group-page-size" data-value="${item}" type="button">${item} / 页</button>
              `
            ).join("")}
          `
        )}
      </div>
    </div>
  `;
}

function renderPayrollGroupSettingsRows(rows) {
  return rows.length
    ? rows
        .map(
          (row) => {
            const menuId = getPayrollGroupSettingsRowMenuId(row.id);
            const isMenuOpen = state.openRowMenu === menuId;
            return `
            <div class="payroll-group-table-row">
              <div class="payroll-group-table-cell payroll-group-table-name">
                <span class="truncate" title="${escapeHtml(row.name)}">${escapeHtml(row.name)}</span>
              </div>
              <div class="payroll-group-table-cell payroll-group-table-creator">
                <span class="truncate" title="${escapeHtml(row.creator)}">${escapeHtml(row.creator)}</span>
              </div>
              <div class="payroll-group-table-cell payroll-group-table-actions">
                <button class="payroll-group-config-link" data-action="configure-payroll-group" data-value="${escapeHtml(row.id)}" type="button">配置</button>
                <button
                  class="more-button row-menu-trigger"
                  data-action="toggle-row-menu"
                  data-value="${escapeHtml(menuId)}"
                  type="button"
                  aria-label="更多操作"
                  aria-haspopup="menu"
                  aria-expanded="${isMenuOpen ? "true" : "false"}"
                >
                  <span class="more-dot"></span>
                  <span class="more-dot"></span>
                  <span class="more-dot"></span>
                </button>
                ${renderPayrollGroupSettingsRowMenu(row)}
              </div>
            </div>
          `;
          }
        )
        .join("")
    : `
      <div class="table-empty payroll-group-empty">
        <div class="empty-title">未找到薪酬组</div>
      </div>
    `;
}

function renderPayrollGroupSettingsCreatorOptions(creatorOptions, selectedCreator) {
  return creatorOptions
    .map(
      (option) => `
        <button class="dropdown-option ${selectedCreator === option.key ? "is-active" : ""}" data-action="set-payroll-group-creator-filter" data-value="${escapeHtml(option.key)}" type="button">${escapeHtml(option.label)}</button>
      `
    )
    .join("");
}

function renderPayrollGroupSettingsRowMenu(row) {
  const menuId = getPayrollGroupSettingsRowMenuId(row.id);
  return renderTransientPanel(
    "row-menu",
    menuId,
    state.openRowMenu === menuId,
    `
      <button class="dropdown-option" data-action="copy-payroll-group" data-value="${escapeHtml(row.id)}" type="button">复制薪酬组</button>
      <button class="dropdown-option danger" data-action="delete-payroll-group" data-value="${escapeHtml(row.id)}" type="button">删除薪酬组</button>
    `,
    "row-menu"
  );
}

function renderPayrollGroupDetailTabs(activeTab) {
  return PAYROLL_GROUP_DETAIL_TAB_OPTIONS.map(
    (item) => `
      <button
        class="tab ${activeTab === item.key ? "is-active" : ""}"
        data-action="set-payroll-group-detail-tab"
        data-value="${escapeHtml(item.key)}"
        data-tab-value="${escapeHtml(item.key)}"
        type="button"
      >
        ${escapeHtml(item.label)}
      </button>
    `
  ).join("");
}

function renderPayrollGroupDetailSections(visibleSections, activeSectionKey) {
  if (!visibleSections.length) {
    return `<div class="payroll-group-detail-section-empty">未找到匹配项</div>`;
  }

  return visibleSections
    .map(
      (item) => `
        <div class="goal-config-tree-row-wrap">
          <div class="goal-config-tree-row payroll-group-detail-tree-row ${activeSectionKey === item.key ? "is-selected" : ""}">
            <span class="goal-config-tree-icon">${renderPayrollGroupDetailSectionIcon()}</span>
            <button
              class="goal-config-tree-main payroll-group-detail-tree-main"
              data-action="set-payroll-group-detail-section"
              data-value="${escapeHtml(item.key)}"
              type="button"
            >
              <span class="goal-config-tree-label">${escapeHtml(item.label)}</span>
            </button>
            <div class="goal-config-tree-end payroll-group-detail-tree-end">
              <span class="goal-config-tree-count">${item.count}</span>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderPayrollGroupDetailSectionIcon() {
  return renderGoalConfigSvgIcon(
    "goal-config-tree-icon-svg is-leaf",
    "0 0 14.0007 13.334",
    '<g><path d="M0 12V1.33398C0 0.597605 0.597605 0 1.33398 0H5.33399L5.40723 0.00488281C5.5774 0.0237815 5.73488 0.107258 5.8457 0.240234L7.3125 2H12.667C13.4034 2 14 2.59759 14 3.33398V12C14 12.7364 13.4034 13.334 12.667 13.334H1.33398C0.597611 13.334 0 12.7364 0 12ZM1.33398 12H12.667V3.33398H7C6.80228 3.33389 6.61487 3.24564 6.48828 3.09375L5.02148 1.33398H1.33398V12Z" fill="currentColor"/><path d="M13.334 5.33333V6.66732H0.666992V5.33333H13.334Z" fill="currentColor"/><path d="M0 8.00033V4.00033C0 3.63214 0.298802 3.33333 0.666992 3.33333C1.03518 3.33333 1.33398 3.63214 1.33398 4.00033V8.00033C1.33398 8.36852 1.03518 8.66732 0.666992 8.66732C0.298802 8.66732 0 8.36852 0 8.00033Z" fill="currentColor"/><path d="M12.6667 8.00033V4.00033C12.6667 3.63214 12.9655 3.33333 13.3337 3.33333C13.7018 3.33333 14.0007 3.63214 14.0007 4.00033V8.00033C14.0007 8.36852 13.7018 8.66732 13.3337 8.66732C12.9655 8.66732 12.6667 8.36852 12.6667 8.00033Z" fill="currentColor"/></g>'
  );
}

function renderPayrollGroupDetailSectionPanel(detail, visibleSections) {
  if (detail.sidebarCollapsed) {
    return `
      <aside class="goal-config-tree-panel payroll-group-detail-tree-panel is-collapsed" data-payroll-group-detail-sidebar>
        <button class="goal-config-tree-collapse-handle is-collapsed" data-action="toggle-payroll-group-detail-sidebar" type="button" aria-label="展开项分类" title="展开项分类">
          ${renderGoalConfigCollapseHandleIcon(true)}
        </button>
      </aside>
    `;
  }

  return `
    <aside class="goal-config-tree-panel payroll-group-detail-tree-panel" data-payroll-group-detail-sidebar>
      <div class="goal-config-tree-search">
        <label class="search-box goal-config-search-box payroll-group-detail-item-search">
          <img src="./assets/search.svg" alt="" />
          <input
            data-field="payroll-group-detail-item-keyword"
            data-payroll-group-detail-item-keyword-input
            type="text"
            value="${escapeHtml(detail.itemKeyword)}"
            placeholder="搜索项分组"
          />
        </label>
        <button class="goal-config-tree-collapse-handle" data-action="toggle-payroll-group-detail-sidebar" type="button" aria-label="收起项分类" title="收起项分类">
          ${renderGoalConfigCollapseHandleIcon(false)}
        </button>
      </div>
      <div class="goal-config-tree-list payroll-group-detail-section-list" data-payroll-group-detail-section-list>
        ${renderPayrollGroupDetailSections(visibleSections, detail.sectionKey)}
      </div>
    </aside>
  `;
}

function renderPayrollGroupDetailStatusOptions(selectedStatus) {
  return PAYROLL_GROUP_DETAIL_STATUS_OPTIONS.map(
    (option) => `
      <button class="dropdown-option ${selectedStatus === option.key ? "is-active" : ""}" data-action="set-payroll-group-detail-status-filter" data-value="${escapeHtml(option.key)}" type="button">${escapeHtml(option.label)}</button>
    `
  ).join("");
}

function renderPayrollGroupDetailCreatorOptionsList(creatorOptions, selectedCreator) {
  return creatorOptions
    .map(
      (option) => `
        <button class="dropdown-option ${selectedCreator === option.key ? "is-active" : ""}" data-action="set-payroll-group-detail-creator-filter" data-value="${escapeHtml(option.key)}" type="button">${escapeHtml(option.label)}</button>
      `
    )
    .join("");
}

function renderPayrollGroupDetailStatusTag(field) {
  const isEnabled = field.status === "enabled";
  return `
    <span class="payroll-group-detail-status-tag ${isEnabled ? "is-enabled" : "is-disabled"}">
      ${isEnabled ? "已启用" : "已停用"}
    </span>
  `;
}

function renderPayrollGroupDetailFieldMenu(field) {
  const menuId = getPayrollGroupDetailFieldMenuId(field.id);
  const isSystemDefault = !!field.isSystemDefault;
  const nextStatusAction = field.status === "enabled" ? "停用项" : "启用项";
  return renderTransientPanel(
    "row-menu",
    menuId,
    state.openRowMenu === menuId,
    `
      <button class="dropdown-option" data-action="edit-payroll-group-detail-field" data-value="${escapeHtml(field.id)}" type="button">编辑项</button>
      ${isSystemDefault ? "" : `<button class="dropdown-option" data-action="toggle-payroll-group-detail-field-status" data-value="${escapeHtml(field.id)}" type="button">${nextStatusAction}</button>
      <button class="dropdown-option danger" data-action="delete-payroll-group-detail-field" data-value="${escapeHtml(field.id)}" type="button">删除项</button>`}
    `,
    "row-menu"
  );
}

function renderPayrollGroupDetailLockIcon() {
  return `
    <span class="payroll-group-detail-lock-slot" aria-hidden="true">
      <img class="payroll-group-detail-lock-icon" src="${PAYROLL_GROUP_LOCK_ICON_ASSET}" alt="" />
    </span>
  `;
}

function renderPayrollGroupDetailRows(rows) {
  return rows.length
    ? rows
        .map((field) => {
          const menuId = getPayrollGroupDetailFieldMenuId(field.id);
          const isMenuOpen = state.openRowMenu === menuId;
          const isSystemDefault = !!field.isSystemDefault;
          return `
            <div class="payroll-group-detail-table-row ${isSystemDefault ? "is-system-default" : ""}">
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-name">
                <div class="payroll-group-detail-table-name-content">
                  <span class="truncate payroll-group-detail-table-name-text" title="${escapeHtml(field.name)}">${escapeHtml(field.name)}</span>
                  ${isSystemDefault ? renderPayrollGroupDetailLockIcon() : ""}
                </div>
              </div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-status">
                ${renderPayrollGroupDetailStatusTag(field)}
              </div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-creator">
                <span class="truncate" title="${escapeHtml(field.creator)}">${escapeHtml(field.creator)}</span>
              </div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-actions">
                <button class="link-action payroll-group-detail-edit-link" data-action="edit-payroll-group-detail-field" data-value="${escapeHtml(field.id)}" type="button">编辑</button>
                <button
                  class="more-button row-menu-trigger"
                  data-action="toggle-row-menu"
                  data-value="${escapeHtml(menuId)}"
                  type="button"
                  aria-label="更多操作"
                  aria-haspopup="menu"
                  aria-expanded="${isMenuOpen ? "true" : "false"}"
                >
                  <span class="more-dot"></span>
                  <span class="more-dot"></span>
                  <span class="more-dot"></span>
                </button>
                ${renderPayrollGroupDetailFieldMenu(field)}
              </div>
            </div>
          `;
        })
        .join("")
    : `
      <div class="table-empty payroll-group-empty">
        <div class="empty-title">未找到项</div>
      </div>
    `;
}

function renderPayrollGroupDetailPagination(rows, totalPages, currentPage) {
  return `
    <div class="pagination">
      <div class="pagination-total">共 ${rows.length} 条</div>
      <div class="pagination-controls">
        <button class="page-button" data-action="payroll-group-detail-page-prev" type="button" ${currentPage <= 1 ? "disabled" : ""}>
          <img class="payroll-group-pagination-arrow" src="./assets/page-prev.svg" alt="" />
        </button>
        <div class="page-current">${currentPage}</div>
        <button class="page-button" data-action="payroll-group-detail-page-next" type="button" ${currentPage >= totalPages ? "disabled" : ""}>
          <img class="payroll-group-pagination-arrow" src="./assets/page-next.svg" alt="" />
        </button>
      </div>
      <div class="page-size">
        <button class="page-size-button payroll-group-page-size-button ${isDropdownOpen("payroll-group-detail-page-size") ? "is-open" : ""}" data-action="toggle-dropdown" data-value="payroll-group-detail-page-size" type="button" aria-expanded="${isDropdownOpen("payroll-group-detail-page-size") ? "true" : "false"}">
          <span>${state.pageSize} / 页</span>
          <img class="payroll-group-page-size-chevron" src="./assets/chevron-down.svg" alt="" />
        </button>
        ${renderDropdownPanel(
          "payroll-group-detail-page-size",
          `
            ${PAGE_SIZE_OPTIONS.map(
              (item) => `
                <button class="dropdown-option ${state.pageSize === item ? "is-active" : ""}" data-action="set-payroll-group-detail-page-size" data-value="${item}" type="button">${item} / 页</button>
              `
            ).join("")}
          `
        )}
      </div>
    </div>
  `;
}

function renderPayrollGroupDetailSalaryItems(row) {
  const detail = getPayrollGroupDetailState();
  const visibleSections = getVisiblePayrollGroupDetailSections();
  const filteredFields = getFilteredPayrollGroupDetailFields();
  const { items: pageFields, totalPages, page } = getPayrollGroupDetailPagedFields(filteredFields);
  const creatorOptions = getPayrollGroupDetailCreatorOptions();
  const currentCreatorLabel =
    creatorOptions.find((option) => option.key === detail.creator)?.label || "全部成员";
  const currentStatusLabel = getPayrollGroupDetailStatusLabel(detail.status);
  const createLabel = formatPayrollGroupDetailCreateLabel(detail.sectionKey);

  return `
    <div class="payroll-group-detail-body goal-config-body">
      <div class="payroll-group-detail-side">
        ${renderPayrollGroupDetailSectionPanel(detail, visibleSections)}
      </div>

      <div class="payroll-group-detail-main goal-config-main">
        <div class="payroll-group-detail-toolbar">
          <div class="payroll-group-detail-toolbar-left">
            <label class="search-box payroll-group-detail-field-search">
              <img src="./assets/search.svg" alt="" />
            <input
              data-field="payroll-group-detail-field-keyword"
              data-payroll-group-detail-field-keyword-input
              type="text"
              value="${escapeHtml(detail.fieldKeyword)}"
              placeholder="搜索项名称"
            />
          </label>

            <div class="control control-period control-auto payroll-group-detail-status-control">
              <button
                class="${dropdownTriggerClass("control-button", "payroll-group-detail-status")}"
                data-action="toggle-dropdown"
                data-value="payroll-group-detail-status"
                type="button"
                aria-expanded="${isDropdownOpen("payroll-group-detail-status") ? "true" : "false"}"
              >
                <span class="truncate">${escapeHtml(currentStatusLabel)}</span>
                ${renderControlArrow()}
              </button>
              ${renderDropdownPanel(
                "payroll-group-detail-status",
                renderPayrollGroupDetailStatusOptions(detail.status),
                "dropdown-panel payroll-group-detail-status-menu"
              )}
            </div>

            <div class="control control-period control-auto payroll-group-detail-creator-control">
              <button
                class="${dropdownTriggerClass("control-button", "payroll-group-detail-creator")}"
                data-action="toggle-dropdown"
                data-value="payroll-group-detail-creator"
                type="button"
                aria-expanded="${isDropdownOpen("payroll-group-detail-creator") ? "true" : "false"}"
              >
                <span class="truncate">${escapeHtml(currentCreatorLabel)}</span>
                ${renderControlArrow()}
              </button>
              ${renderDropdownPanel(
                "payroll-group-detail-creator",
                renderPayrollGroupDetailCreatorOptionsList(creatorOptions, detail.creator),
                "dropdown-panel payroll-group-detail-creator-menu"
              )}
            </div>
          </div>

          <div class="payroll-group-detail-toolbar-right">
            <button class="payroll-group-create-button" data-action="create-payroll-group-detail-field" data-value="${escapeHtml(detail.sectionKey)}" data-payroll-group-detail-create-button type="button">
              ${escapeHtml(createLabel)}
            </button>
          </div>
        </div>

        <div class="table-region payroll-group-detail-table-region">
          <div class="table-shell payroll-group-detail-table-shell">
            <div class="payroll-group-detail-table-header">
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-name payroll-group-detail-table-head-cell">项名称</div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-status payroll-group-detail-table-head-cell">状态</div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-creator payroll-group-detail-table-head-cell">创建人</div>
              <div class="payroll-group-detail-table-cell payroll-group-detail-table-actions payroll-group-detail-table-head-cell">操作</div>
            </div>

            <div class="payroll-group-detail-table-body" data-payroll-group-detail-table-body>
              ${renderPayrollGroupDetailRows(pageFields)}
            </div>

            <div class="payroll-group-footer payroll-group-detail-footer" data-payroll-group-detail-footer>
              ${renderPayrollGroupDetailPagination(filteredFields, totalPages, page)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPayrollGroupRuleField(label, fieldName, value, { required = false, monthIndex = null } = {}) {
  const monthAttribute =
    monthIndex === null ? "" : ` data-month-index="${escapeHtml(String(monthIndex))}"`;
  return `
    <div class="payroll-group-rule-field">
      <label class="payroll-group-rule-field-label">
        ${required ? renderPayrollGroupRequiredIcon("payroll-group-rule-field-required") : ""}
        <span class="payroll-group-rule-field-label-text">${escapeHtml(label)}</span>
      </label>
      <span class="payroll-group-field-create-control-shell payroll-group-rule-input-shell">
        <input
          class="payroll-group-field-create-input payroll-group-rule-input"
          data-field="${escapeHtml(fieldName)}"${monthAttribute}
          type="text"
          inputmode="decimal"
          value="${escapeHtml(value || "")}"
          placeholder="请输入"
        />
      </span>
    </div>
  `;
}

function renderPayrollGroupRuleViewSwitch(viewMode) {
  return `
    <div class="segmented payroll-group-rule-switch-control" role="tablist" aria-label="时薪计算方式">
      ${PAYROLL_GROUP_RULE_VIEW_OPTIONS.map(
        (option) => `
          <button
            class="segment ${viewMode === option.key ? "is-active" : ""}"
            data-action="set-payroll-group-rule-view-mode"
            data-value="${escapeHtml(option.key)}"
            type="button"
            role="tab"
            aria-selected="${viewMode === option.key ? "true" : "false"}"
          >
            ${escapeHtml(option.label)}
          </button>
        `
      ).join("")}
    </div>
  `;
}

function renderPayrollGroupDetailRules() {
  const ruleSettings = getPayrollGroupRuleSettings();
  const modeFields =
    ruleSettings.viewMode === "monthly"
      ? PAYROLL_GROUP_RULE_MONTH_OPTIONS.map((item, index) =>
          renderPayrollGroupRuleField(item.label, "payroll-group-rule-month-day", ruleSettings.monthlyDays[index], {
            required: true,
            monthIndex: index,
          })
        ).join("")
      : renderPayrollGroupRuleField("固定天数（天）", "payroll-group-rule-fixed-days", ruleSettings.fixedDays, {
          required: true,
        });

  return `
    <div class="payroll-group-rule-page">
      <div class="payroll-group-rule-shell">
        <div class="payroll-group-rule-header">
          <h3 class="payroll-group-rule-title">时薪计算信息</h3>
        </div>

        <div class="payroll-group-rule-switch-row">
          ${renderPayrollGroupRuleViewSwitch(ruleSettings.viewMode)}
        </div>

        <div class="payroll-group-rule-content">
          <div class="payroll-group-rule-form-region">
            <div class="payroll-group-rule-form-card">
              ${modeFields}
              ${renderPayrollGroupRuleField(
                "每日出勤（时）",
                "payroll-group-rule-daily-attendance-hours",
                ruleSettings.dailyAttendanceHours
              )}
            </div>
          </div>

          <div class="payroll-group-rule-footer">
            <button class="primary-action is-enabled payroll-group-rule-save-button" data-action="save-payroll-group-rule-settings" type="button">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPayrollGroupDetailPlaceholder(row) {
  const detail = getPayrollGroupDetailState();
  const tabLabel = getPayrollGroupDetailTabLabel(detail.activeTab);
  return `
    <div class="payroll-group-detail-placeholder">
      <div class="completed-card">
        <h3>${escapeHtml(tabLabel)} 待接入</h3>
        <p>「${escapeHtml(row.name)}」的 ${escapeHtml(tabLabel)} 页签已经预留在当前详情页结构里，这次先完成了“薪酬项”和“规则设置”页。</p>
      </div>
    </div>
  `;
}

function renderPayrollGroupDetailContent(row, activeTab = getPayrollGroupDetailState().activeTab) {
  if (activeTab === "salary-items") {
    return renderPayrollGroupDetailSalaryItems(row);
  }
  if (activeTab === "rules") {
    return renderPayrollGroupDetailRules();
  }
  return renderPayrollGroupDetailPlaceholder(row);
}

function syncDropdownPanelInPlace(controlRoot, dropdownKey, panelClass, contentHtml) {
  if (!(controlRoot instanceof HTMLElement)) {
    return;
  }

  const button = controlRoot.querySelector(`[data-action="toggle-dropdown"][data-value="${dropdownKey}"]`);
  if (!(button instanceof HTMLElement)) {
    return;
  }

  const motionState = getDropdownMotionState(dropdownKey);
  const existingPanel = controlRoot.querySelector(`[data-dropdown-key="${dropdownKey}"]`);

  button.classList.toggle("is-open", isDropdownOpen(dropdownKey));
  button.setAttribute("aria-expanded", isDropdownOpen(dropdownKey) ? "true" : "false");

  if (motionState === "closed") {
    existingPanel?.remove();
    return;
  }

  if (existingPanel instanceof HTMLElement) {
    existingPanel.className = panelClass;
    existingPanel.setAttribute("data-dropdown-key", dropdownKey);
    existingPanel.setAttribute("data-dropdown-state", motionState);
    if (existingPanel.innerHTML !== contentHtml) {
      existingPanel.innerHTML = contentHtml;
    }
    return;
  }

  button.insertAdjacentHTML(
    "afterend",
    renderDropdownPanel(dropdownKey, contentHtml, panelClass) || ""
  );
}

function syncPayrollGroupSettingsPage() {
  const pageRoot = document.querySelector(".payroll-group-page");
  if (!(pageRoot instanceof HTMLElement)) {
    return false;
  }

  const filteredRows = getFilteredPayrollGroupSettingsRows();
  const { items: pageRows, totalPages, page } = getPayrollGroupSettingsPagedRows(filteredRows);
  const creatorOptions = getPayrollGroupCreatorOptions();
  const currentCreatorLabel =
    creatorOptions.find((option) => option.key === state.payrollGroupSettings.creator)?.label || "全部成员";

  const searchInput = pageRoot.querySelector('input[data-field="payroll-group-keyword"]');
  if (searchInput instanceof HTMLInputElement && searchInput.value !== state.payrollGroupSettings.keyword) {
    searchInput.value = state.payrollGroupSettings.keyword;
  }

  const creatorControl = pageRoot.querySelector(".payroll-group-creator-control");
  if (creatorControl instanceof HTMLElement) {
    const creatorButton = creatorControl.querySelector('[data-action="toggle-dropdown"][data-value="payroll-group-creator"]');
    if (creatorButton instanceof HTMLElement) {
      creatorButton.classList.toggle("is-open", isDropdownOpen("payroll-group-creator"));
      creatorButton.setAttribute("aria-expanded", isDropdownOpen("payroll-group-creator") ? "true" : "false");
      const label = creatorButton.querySelector(".truncate");
      if (label instanceof HTMLElement && label.textContent !== currentCreatorLabel) {
        label.textContent = currentCreatorLabel;
      }
    }

    syncDropdownPanelInPlace(
      creatorControl,
      "payroll-group-creator",
      "dropdown-panel payroll-group-creator-menu",
      renderPayrollGroupSettingsCreatorOptions(creatorOptions, state.payrollGroupSettings.creator)
    );
  }

  const tableBody = pageRoot.querySelector(".payroll-group-table-body");
  if (tableBody instanceof HTMLElement) {
    const nextRowsHtml = renderPayrollGroupSettingsRows(pageRows);
    if (tableBody.innerHTML !== nextRowsHtml) {
      const previousScrollTop = tableBody.scrollTop;
      tableBody.innerHTML = nextRowsHtml;
      tableBody.scrollTop = previousScrollTop;
    }
  }

  const footer = pageRoot.querySelector(".payroll-group-footer");
  if (footer instanceof HTMLElement) {
    const nextFooterHtml = renderPayrollGroupSettingsPagination(filteredRows, totalPages, page);
    if (footer.innerHTML !== nextFooterHtml) {
      footer.innerHTML = nextFooterHtml;
    }
  }

  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();
  syncAdaptiveTableActionColumns();
  syncPayrollGroupSwitchControl();
  return true;
}

function syncPayrollGroupSwitchControl() {
  const switchControl = document.querySelector(".topbar-user-switch");
  if (!(switchControl instanceof HTMLElement)) {
    return false;
  }

  const nextHtml = renderPayrollGroupSwitchControl();
  if (switchControl.innerHTML !== nextHtml) {
    switchControl.innerHTML = nextHtml;
  }
  return true;
}

function syncPayrollGroupDetailTabs(pageRoot, activeTab) {
  const contentCard = pageRoot.closest(".content-card");
  const tabsRoot = contentCard?.querySelector(".payroll-group-detail-tabs");
  if (!(tabsRoot instanceof HTMLElement)) {
    return;
  }

  tabsRoot.querySelectorAll(".tab").forEach((tabButton) => {
    if (!(tabButton instanceof HTMLElement)) {
      return;
    }
    tabButton.classList.toggle("is-active", tabButton.dataset.tabValue === activeTab);
  });

  syncTabIndicators();
}

function syncPayrollGroupDetailPage() {
  const detail = getPayrollGroupDetailState();
  const row = getPayrollGroupDetailRow();
  const pageRoot = document.querySelector(".payroll-group-detail-page");
  if (!(pageRoot instanceof HTMLElement) || !row) {
    return false;
  }

  const breadcrumbName = document.querySelector("[data-payroll-group-detail-name]");
  if (breadcrumbName instanceof HTMLElement && breadcrumbName.textContent !== row.name) {
    breadcrumbName.textContent = row.name;
  }

  syncPayrollGroupDetailTabs(pageRoot, detail.activeTab);

  if (detail.activeTab === "rules") {
    const currentFormRegion = pageRoot.querySelector(".payroll-group-rule-form-region");
    const previousScrollTop = currentFormRegion instanceof HTMLElement ? currentFormRegion.scrollTop : 0;
    const nextContentHtml = renderPayrollGroupDetailContent(row, detail.activeTab);
    if (pageRoot.innerHTML !== nextContentHtml) {
      pageRoot.innerHTML = nextContentHtml;
      const nextFormRegion = pageRoot.querySelector(".payroll-group-rule-form-region");
      if (nextFormRegion instanceof HTMLElement) {
        nextFormRegion.scrollTop = previousScrollTop;
      }
    }
    flushDropdownChevronAnimations();
    scheduleDropdownMotionStateCleanup();
    syncAdaptiveTableActionColumns();
    syncPayrollGroupSwitchControl();
    return true;
  }

  if (detail.activeTab !== "salary-items") {
    const nextContentHtml = renderPayrollGroupDetailContent(row, detail.activeTab);
    if (pageRoot.innerHTML !== nextContentHtml) {
      pageRoot.innerHTML = nextContentHtml;
    }
    flushDropdownChevronAnimations();
    scheduleDropdownMotionStateCleanup();
    syncAdaptiveTableActionColumns();
    syncPayrollGroupSwitchControl();
    return true;
  }

  if (!(pageRoot.querySelector(".payroll-group-detail-body") instanceof HTMLElement)) {
    pageRoot.innerHTML = renderPayrollGroupDetailContent(row, detail.activeTab);
  }

  const visibleSections = getVisiblePayrollGroupDetailSections();
  const filteredFields = getFilteredPayrollGroupDetailFields();
  const { items: pageFields, totalPages, page } = getPayrollGroupDetailPagedFields(filteredFields);
  const creatorOptions = getPayrollGroupDetailCreatorOptions();
  const currentCreatorLabel =
    creatorOptions.find((option) => option.key === detail.creator)?.label || "全部成员";
  const currentStatusLabel = getPayrollGroupDetailStatusLabel(detail.status);
  const createLabel = formatPayrollGroupDetailCreateLabel(detail.sectionKey);

  const sidebarPanel = pageRoot.querySelector("[data-payroll-group-detail-sidebar]");
  if (sidebarPanel instanceof HTMLElement) {
    const isCollapsed = sidebarPanel.classList.contains("is-collapsed");
    if (isCollapsed !== !!detail.sidebarCollapsed) {
      const nextSidebarHtml = renderPayrollGroupDetailSectionPanel(detail, visibleSections);
      if (sidebarPanel.outerHTML !== nextSidebarHtml) {
        sidebarPanel.outerHTML = nextSidebarHtml;
      }
    }
  }

  const itemSearchInput = pageRoot.querySelector('input[data-field="payroll-group-detail-item-keyword"]');
  if (itemSearchInput instanceof HTMLInputElement && itemSearchInput.value !== detail.itemKeyword) {
    itemSearchInput.value = detail.itemKeyword;
  }

  const fieldSearchInput = pageRoot.querySelector('input[data-field="payroll-group-detail-field-keyword"]');
  if (fieldSearchInput instanceof HTMLInputElement && fieldSearchInput.value !== detail.fieldKeyword) {
    fieldSearchInput.value = detail.fieldKeyword;
  }

  const sectionList = pageRoot.querySelector("[data-payroll-group-detail-section-list]");
  if (sectionList instanceof HTMLElement) {
    const nextSectionsHtml = renderPayrollGroupDetailSections(visibleSections, detail.sectionKey);
    if (sectionList.innerHTML !== nextSectionsHtml) {
      const previousScrollTop = sectionList.scrollTop;
      sectionList.innerHTML = nextSectionsHtml;
      sectionList.scrollTop = previousScrollTop;
    }
  }

  const statusControl = pageRoot.querySelector(".payroll-group-detail-status-control");
  if (statusControl instanceof HTMLElement) {
    const statusButton = statusControl.querySelector('[data-action="toggle-dropdown"][data-value="payroll-group-detail-status"]');
    if (statusButton instanceof HTMLElement) {
      statusButton.classList.toggle("is-open", isDropdownOpen("payroll-group-detail-status"));
      statusButton.setAttribute("aria-expanded", isDropdownOpen("payroll-group-detail-status") ? "true" : "false");
      const label = statusButton.querySelector(".truncate");
      if (label instanceof HTMLElement && label.textContent !== currentStatusLabel) {
        label.textContent = currentStatusLabel;
      }
    }

    syncDropdownPanelInPlace(
      statusControl,
      "payroll-group-detail-status",
      "dropdown-panel payroll-group-detail-status-menu",
      renderPayrollGroupDetailStatusOptions(detail.status)
    );
  }

  const creatorControl = pageRoot.querySelector(".payroll-group-detail-creator-control");
  if (creatorControl instanceof HTMLElement) {
    const creatorButton = creatorControl.querySelector('[data-action="toggle-dropdown"][data-value="payroll-group-detail-creator"]');
    if (creatorButton instanceof HTMLElement) {
      creatorButton.classList.toggle("is-open", isDropdownOpen("payroll-group-detail-creator"));
      creatorButton.setAttribute("aria-expanded", isDropdownOpen("payroll-group-detail-creator") ? "true" : "false");
      const label = creatorButton.querySelector(".truncate");
      if (label instanceof HTMLElement && label.textContent !== currentCreatorLabel) {
        label.textContent = currentCreatorLabel;
      }
    }

    syncDropdownPanelInPlace(
      creatorControl,
      "payroll-group-detail-creator",
      "dropdown-panel payroll-group-detail-creator-menu",
      renderPayrollGroupDetailCreatorOptionsList(creatorOptions, detail.creator)
    );
  }

  const createButton = pageRoot.querySelector("[data-payroll-group-detail-create-button]");
  if (createButton instanceof HTMLElement && createButton.textContent?.trim() !== createLabel) {
    createButton.textContent = createLabel;
  }

  const tableBody = pageRoot.querySelector("[data-payroll-group-detail-table-body]");
  if (tableBody instanceof HTMLElement) {
    const nextRowsHtml = renderPayrollGroupDetailRows(pageFields);
    if (tableBody.innerHTML !== nextRowsHtml) {
      const previousScrollTop = tableBody.scrollTop;
      tableBody.innerHTML = nextRowsHtml;
      tableBody.scrollTop = previousScrollTop;
    }
  }

  const footer = pageRoot.querySelector("[data-payroll-group-detail-footer]");
  if (footer instanceof HTMLElement) {
    const nextFooterHtml = renderPayrollGroupDetailPagination(filteredFields, totalPages, page);
    if (footer.innerHTML !== nextFooterHtml) {
      footer.innerHTML = nextFooterHtml;
    }
  }

  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();
  syncAdaptiveTableActionColumns();
  syncPayrollGroupSwitchControl();
  return true;
}

function syncPayrollGroupPage() {
  if (isPayrollGroupDetailOpen()) {
    return syncPayrollGroupDetailPage();
  }
  return syncPayrollGroupSettingsPage();
}

function renderPayrollGroupSettingsListPage() {
  const filteredRows = getFilteredPayrollGroupSettingsRows();
  const { items: pageRows, totalPages, page } = getPayrollGroupSettingsPagedRows(filteredRows);
  const creatorOptions = getPayrollGroupCreatorOptions();
  const currentCreatorLabel =
    creatorOptions.find((option) => option.key === state.payrollGroupSettings.creator)?.label || "全部成员";

  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item">设置模块</span>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active">薪酬组设置</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="tab-row">
            <div class="tabs payroll-group-tabs" data-tab-group="payroll-group-settings">
              <button class="tab is-active" data-tab-value="payroll-group-settings" type="button">薪酬组设置</button>
              <span class="tab-indicator" aria-hidden="true"></span>
            </div>
          </div>

          <div class="payroll-group-page" data-payroll-group-page>
            <div class="payroll-group-toolbar" data-payroll-group-toolbar>
              <div class="payroll-group-toolbar-left" data-payroll-group-toolbar-left>
                <label class="search-box" data-payroll-group-search-box>
                  <img src="./assets/search.svg" alt="" />
                  <input data-field="payroll-group-keyword" data-payroll-group-keyword-input type="text" value="${escapeHtml(
                    state.payrollGroupSettings.keyword
                  )}" placeholder="搜索薪酬组" />
                </label>

                <div class="control control-period control-auto payroll-group-creator-control" data-payroll-group-creator-control>
                  <button
                    class="${dropdownTriggerClass("control-button", "payroll-group-creator")}"
                    data-action="toggle-dropdown"
                    data-value="payroll-group-creator"
                    data-payroll-group-creator-trigger
                    type="button"
                    aria-expanded="${isDropdownOpen("payroll-group-creator") ? "true" : "false"}"
                  >
                    <span class="truncate" data-payroll-group-creator-label>${escapeHtml(currentCreatorLabel)}</span>
                    ${renderControlArrow()}
                  </button>
                  ${renderDropdownPanel(
                    "payroll-group-creator",
                    `
                      ${renderPayrollGroupSettingsCreatorOptions(creatorOptions, state.payrollGroupSettings.creator)}
                    `,
                    "dropdown-panel payroll-group-creator-menu"
                  )}
                </div>
              </div>
              <div class="payroll-group-toolbar-right" data-payroll-group-toolbar-right>
                <button class="payroll-group-create-button" data-action="create-payroll-group" type="button">创建薪酬组</button>
              </div>
            </div>

            <div class="table-region payroll-group-table-region" data-payroll-group-table-region>
              <div class="table-shell payroll-group-table-shell">
                <div class="payroll-group-table-header">
                  <div class="payroll-group-table-cell payroll-group-table-name payroll-group-table-head-cell">薪酬组名称</div>
                  <div class="payroll-group-table-cell payroll-group-table-creator payroll-group-table-head-cell">创建人</div>
                  <div class="payroll-group-table-cell payroll-group-table-actions payroll-group-table-head-cell">操作</div>
                </div>

                <div class="payroll-group-table-body" data-payroll-group-table-body>
                  ${renderPayrollGroupSettingsRows(pageRows)}
                </div>

                <div class="payroll-group-footer" data-payroll-group-footer>
                  ${renderPayrollGroupSettingsPagination(filteredRows, totalPages, page)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderPayrollGroupDetailPage() {
  const detail = getPayrollGroupDetailState();
  const row = getPayrollGroupDetailRow();
  if (!row) {
    return renderPayrollGroupSettingsListPage();
  }

  return `
    <main class="page">
      <div class="page-inner">
        <div class="breadcrumb-row">
          <div class="breadcrumb">
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item">设置模块</span>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <button class="breadcrumb-item breadcrumb-button" data-action="open-payroll-group-settings-list" type="button">薪酬组设置</button>
            </span>
            ${renderBreadcrumbSeparator()}
            <span class="breadcrumb-segment">
              <span class="breadcrumb-item is-active" data-payroll-group-detail-name>${escapeHtml(row.name)}</span>
            </span>
          </div>
        </div>

        <section class="content-card">
          <div class="tab-row">
            <div class="tabs payroll-group-detail-tabs" data-tab-group="payroll-group-detail">
              ${renderPayrollGroupDetailTabs(detail.activeTab)}
              <span class="tab-indicator" aria-hidden="true"></span>
            </div>
          </div>

          <div class="payroll-group-page payroll-group-detail-page" data-payroll-group-detail-page>
            ${renderPayrollGroupDetailContent(row, detail.activeTab)}
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderPayrollGroupSettingsPage() {
  return isPayrollGroupDetailOpen() ? renderPayrollGroupDetailPage() : renderPayrollGroupSettingsListPage();
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

function renderGoalConfigCreateArrowIcon() {
  return `
    <span class="goal-config-create-arrow-wrap" aria-hidden="true">
      <img class="goal-config-create-arrow-icon" src="./assets/goal-config-create-arrow.svg" alt="" />
    </span>
  `;
}

function renderGoalConfigSelectArrow(className = "") {
  return renderDropdownChevronIcon(`goal-config-select-arrow ${className}`.trim());
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
  return renderTransientPanel(
    "goal-config-card-menu",
    goal.id,
    state.goalConfig.cardMenuId === goal.id,
    `
      <button class="dropdown-option" data-action="goal-config-copy" data-value="${goal.id}" type="button">复制目标</button>
      <button class="dropdown-option" data-action="goal-config-transfer" data-value="${goal.id}" type="button">转移目标</button>
      <button class="dropdown-option" data-action="goal-config-record" data-value="${goal.id}" type="button">目标记录</button>
      <button class="dropdown-option danger" data-action="goal-config-delete" data-value="${goal.id}" type="button">删除目标</button>
    `,
    "goal-config-card-menu dropdown-panel"
  );
}

function renderGoalConfigGroupMenu(group) {
  if (group.kind === "all") {
    return "";
  }
  if (group.kind === "recycle") {
    return renderTransientPanel(
      "goal-config-group-menu",
      group.id,
      state.goalConfig.groupMenuId === group.id,
      `
        <button class="dropdown-option" data-action="goal-config-transfer-group-goal" data-value="${group.id}" type="button">转移目标</button>
        <button class="dropdown-option danger" data-action="goal-config-empty-recycle" type="button">清空周转箱</button>
      `,
      "goal-config-group-menu dropdown-panel"
    );
  }
  const canAddChild = getGoalConfigGroupLevel(group) < GOAL_CONFIG_MAX_DEPTH;
  return renderTransientPanel(
    "goal-config-group-menu",
    group.id,
    state.goalConfig.groupMenuId === group.id,
    `
      <button class="dropdown-option" data-action="goal-config-transfer-group-goal" data-value="${group.id}" type="button">转移目标</button>
      ${
        canAddChild
          ? `<button class="dropdown-option" data-action="goal-config-add-child-group" data-value="${group.id}" type="button">新增子级分组</button>`
          : ""
      }
      <button class="dropdown-option" data-action="goal-config-rename-group" data-value="${group.id}" type="button">重命名分组</button>
      <button class="dropdown-option danger" data-action="goal-config-delete-group" data-value="${group.id}" type="button">删除分组</button>
    `,
    "goal-config-group-menu dropdown-panel"
  );
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
                <input class="goal-config-tree-input" data-field="goal-config-group-name" data-group-id="${group.id}" ${state.goalConfig.editingGroupId === group.id ? 'data-guide-id="config-prep-group-name"' : ""} value="${escapeHtml(
                  state.goalConfig.editingGroupName
                )}" />
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
        <button class="goal-config-tree-add" data-action="goal-config-add-group" data-guide-id="config-prep-add-group" type="button">新增分组</button>
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
          <button class="${dropdownTriggerClass("control-button goal-config-toolbar-type-button", "goal-config-type")}" data-action="toggle-goal-config-dropdown" data-value="goal-config-type" type="button" aria-expanded="${isDropdownOpen("goal-config-type") ? "true" : "false"}">
            <span class="truncate">${escapeHtml(typeLabel)}</span>
            ${renderGoalConfigSelectArrow()}
          </button>
          ${renderDropdownPanel(
            "goal-config-type",
            `
              ${GOAL_CONFIG_TYPE_OPTIONS.map(
                (option) => `
                  <button class="dropdown-option ${state.goalConfig.type === option.key ? "is-active" : ""}" data-action="set-goal-config-type-filter" data-value="${option.key}" type="button">
                    ${option.label}
                  </button>
                `
              ).join("")}
            `
          )}
        </div>
      </div>

      <div class="goal-config-toolbar-right">
        <div class="goal-config-more-wrap">
          <button class="goal-config-icon-button goal-config-toolbar-more-button" data-action="toggle-goal-config-dropdown" data-value="goal-config-toolbar" type="button" aria-label="更多操作">
            <span class="goal-config-toolbar-more-rotator">${renderGoalConfigToolbarMoreIcon()}</span>
          </button>
          ${renderDropdownPanel(
            "goal-config-toolbar",
            `
              <button class="dropdown-option" data-action="goal-config-export" type="button">导出目标</button>
            `,
            "dropdown-panel goal-config-toolbar-menu"
          )}
        </div>
        <div class="goal-config-create-wrap">
          <div class="goal-config-create-button" role="group" aria-label="创建目标">
            <button class="goal-config-create-button-text" data-action="goal-config-create-direct" data-guide-id="config-prep-create-goal" type="button">创建目标</button>
            <button
              class="goal-config-create-button-icon"
              data-action="toggle-goal-config-dropdown"
              data-value="goal-config-create"
              type="button"
              aria-label="展开创建目标菜单"
            >
              ${renderGoalConfigCreateArrowIcon()}
            </button>
          </div>
          ${renderDropdownPanel(
            "goal-config-create",
            `
              <button class="dropdown-option" data-action="goal-config-import" type="button">导入目标</button>
              <button class="dropdown-option" data-action="goal-config-ai-template" type="button">AI 模版库</button>
            `,
            "dropdown-panel goal-config-create-menu"
          )}
        </div>
      </div>
    </div>
  `;
}

function renderGoalConfigViewCard(goal) {
  const executorText = getGoalConfigExecutorText(goal.executors);
  const executorPreview = executorText.slice(0, 5);
  const alignedGoalLabel = goal.alignedGoalId
    ? getGoalConfigGoalTitle(goal.alignedGoalId, goal.alignedGoal || "未设置对齐目标")
    : goal.alignedGoal || "未设置对齐目标";
  const flowLabel = goal.flowProcessId
    ? getGoalConfigProcessName(goal.flowProcessId, goal.flow || "未设置流程")
    : goal.flow || "未设置流程";
  return `
    <article class="goal-config-card" data-goal-config-card data-goal-type="${goal.type}">
      <div class="goal-config-card-head">
        <div class="goal-config-card-row">
          ${renderGoalConfigFormLabel("对齐")}
          <div class="goal-config-align-display">
            ${renderGoalConfigInlineIcon("align")}
            <span>${escapeHtml(alignedGoalLabel)}</span>
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
            <span class="goal-config-flow-copy">${escapeHtml(flowLabel)}</span>
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
    <div class="goal-config-kr-row is-editing" ${index === 0 ? 'data-guide-id="config-prep-first-kr"' : ""}>
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

  const selectedAlign = draft.alignedGoalId
    ? getGoalConfigGoalTitle(draft.alignedGoalId, draft.alignedGoal || "未设置对齐目标")
    : draft.alignedGoal || "未设置对齐目标";
  const alignOptions = getGoalConfigAlignOptions(draft);
  const activeAlignOption = alignOptions.find((option) => option.id === draft.alignedGoalId) || null;
  const flowOptions = getGoalConfigFlowOptions();
  const selectedFlowLabel = draft.flowProcessId
    ? getGoalConfigProcessName(draft.flowProcessId, draft.flow || "未设置流程")
    : draft.flow || "未设置流程";

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
        <div class="control goal-config-inline-control">
          <button class="${dropdownTriggerClass("control-button goal-config-select-button goal-config-select-wide", "goal-config-align")}" data-action="toggle-goal-config-dropdown" data-value="goal-config-align" type="button" aria-expanded="${isDropdownOpen("goal-config-align") ? "true" : "false"}">
            <span class="goal-config-align-display">
              ${renderGoalConfigInlineIcon("align")}
              <span>${escapeHtml(selectedAlign)}</span>
            </span>
            ${renderGoalConfigSelectArrow()}
          </button>
          ${renderDropdownPanel(
            "goal-config-align",
            `
              <button class="dropdown-option ${!draft.alignedGoalId ? "is-active" : ""}" data-action="set-goal-config-draft-align" data-value="" type="button">未设置对齐目标</button>
              ${
                alignOptions.length
                  ? alignOptions
                      .map(
                        (option) => `
                          <button class="dropdown-option ${activeAlignOption?.id === option.id ? "is-active" : ""}" data-action="set-goal-config-draft-align" data-value="${option.id}" type="button">
                            ${escapeHtml(option.title)}
                          </button>
                        `
                      )
                      .join("")
                  : '<div class="member-heading">暂无可选择的对齐目标</div>'
              }
            `,
            "dropdown-panel goal-config-inline-menu"
          )}
        </div>
        ${renderGoalConfigMetricHead(draft.type)}
      </div>

      <div class="goal-config-card-content">
        <div class="goal-config-goal-row is-editing">
          <span class="goal-chip">目标</span>
          <input
            class="goal-config-input goal-config-goal-input"
            data-field="goal-config-title"
            data-guide-id="config-prep-goal-title"
            value="${escapeHtml(draft.title)}"
            placeholder="请输入目标名称"
          />
        </div>

        <div class="goal-config-kr-list is-editing">
          ${draft.krs.map((kr, index) => renderGoalConfigDraftKrRow(kr, index, draft)).join("")}
          ${renderGoalConfigDraftAddRow()}
        </div>

        <div class="goal-config-info-row is-editing" data-guide-id="config-prep-executor-row">
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
              renderDropdownPanel(
                "goal-config-executors",
                `
                  <div class="member-heading">选择可执行当前目标的成员</div>
                  ${GOAL_CONFIG_EXECUTOR_OPTIONS.map(
                    (option) => `
                      <button class="dropdown-option" data-action="toggle-goal-config-executor" data-value="${option.id}" type="button">
                        ${renderCheckboxIndicator((draft.executors || []).includes(option.id) ? "checked" : "unchecked")}
                        <span>${escapeHtml(option.label)}</span>
                      </button>
                    `
                  ).join("")}
                `,
                "dropdown-panel member-dropdown goal-config-executor-menu"
              )
            }
          </div>
        </div>

        <div class="goal-config-info-row is-editing goal-config-flow-row">
          ${renderGoalConfigFormLabel("流程")}
          <div class="goal-config-info-value goal-config-info-value-editing">
            <div class="control goal-config-inline-control">
              <button class="${dropdownTriggerClass("control-button goal-config-select-button goal-config-select-medium", "goal-config-flow")}" data-action="toggle-goal-config-dropdown" data-value="goal-config-flow" type="button" aria-expanded="${isDropdownOpen("goal-config-flow") ? "true" : "false"}">
                <span class="truncate">${escapeHtml(selectedFlowLabel)}</span>
                ${renderGoalConfigSelectArrow()}
              </button>
              ${renderDropdownPanel(
                "goal-config-flow",
                `
                  ${flowOptions.map(
                    (option) => `
                      <button class="dropdown-option ${draft.flowProcessId === option.id ? "is-active" : ""}" data-action="set-goal-config-draft-flow" data-value="${option.id}" type="button">
                        ${escapeHtml(option.label)}
                      </button>
                    `
                  ).join("")}
                `,
                "dropdown-panel goal-config-inline-menu"
              )}
            </div>
          </div>
        </div>
      </div>

      <div class="goal-config-card-footer">
        <div class="goal-config-card-footer-actions">
          <button class="modal-button-primary" data-action="goal-config-save" data-guide-id="config-prep-save-goal" type="button">保存</button>
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
  return renderTransientPanel(
    "goal-config-process-menu",
    process.id,
    state.goalConfig.processMenuId === process.id,
    `
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
    `,
    "goal-config-process-menu dropdown-panel"
  );
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
      <button class="goal-config-process-create-button" data-action="open-goal-config-process-create" data-guide-id="config-prep-create-process" type="button">创建流程</button>
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
        ${renderDropdownPanel(
          "goal-config-process-page-size",
          `
            ${PAGE_SIZE_OPTIONS.map(
              (item) => `
                <button class="dropdown-option ${state.pageSize === item ? "is-active" : ""}" data-action="set-goal-config-process-page-size" data-value="${item}" type="button">${item} / 页</button>
              `
            ).join("")}
          `
        )}
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

function renderGoalConfigProcessCreateModalInner(overlay) {
  return `
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
  `;
}

function syncGoalConfigProcessCreateModal() {
  if (!state.overlay || state.overlay.type !== "goal-config-process-create") {
    return false;
  }

  const modal = document.querySelector(".goal-config-process-create-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  const input = modal.querySelector('[data-field="goal-config-create-process-name"]');
  const preserveFocus = input instanceof HTMLInputElement ? getInputPreserveFocus(input) : null;
  modal.innerHTML = renderGoalConfigProcessCreateModalInner(state.overlay);

  if (preserveFocus?.selector) {
    const nextInput = modal.querySelector(preserveFocus.selector);
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
      if (typeof preserveFocus.start === "number" && typeof preserveFocus.end === "number") {
        nextInput.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
  }

  return true;
}

function renderGoalConfigProcessCreateModal(overlay) {
  const guideStaticClass = isConfigPrepGuideStep(4) ? " config-prep-guide-static-modal" : "";
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal goal-config-process-create-modal${guideStaticClass}" data-overlay-panel="true" data-guide-id="config-prep-process-modal">${renderGoalConfigProcessCreateModalInner(overlay)}</div>
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
            <div class="tabs" data-tab-group="goal-config">
              <button
                class="tab ${state.goalConfig.activeTab === "library" ? "is-active" : ""}"
                data-action="set-goal-config-tab"
                data-value="library"
                data-guide-id="config-prep-tab-library"
                data-tab-value="library"
                type="button"
              >
                目标库
              </button>
              <button
                class="tab ${state.goalConfig.activeTab === "process" ? "is-active" : ""}"
                data-action="set-goal-config-tab"
                data-value="process"
                data-guide-id="config-prep-tab-process"
                data-tab-value="process"
                type="button"
              >
                流程库
              </button>
              <span class="tab-indicator" aria-hidden="true"></span>
            </div>
            <button class="launch-button" data-action="open-start-goal" data-guide-id="launch-advance-entry" type="button">
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
            <div class="tabs" data-tab-group="my-goals">
              <button class="tab ${activeMyGoalTab === "pending" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="pending" data-tab-value="pending" type="button">待处理</button>
              <button class="tab ${activeMyGoalTab === "executing" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="executing" data-tab-value="executing" type="button">执行中</button>
              <button class="tab ${activeMyGoalTab === "completed" ? "is-active" : ""}" data-action="set-my-goal-tab" data-value="completed" data-tab-value="completed" type="button">已完成</button>
              <span class="tab-indicator" aria-hidden="true"></span>
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

        ${renderGoalManagementGuide()}

        <section class="content-card">
          <div class="tab-row">
            <div class="tabs" data-tab-group="goal-management">
              <button class="tab ${state.activeTab === "ongoing" ? "is-active" : ""}" data-action="set-tab" data-value="ongoing" data-tab-value="ongoing" type="button">进行中</button>
              <button class="tab ${state.activeTab === "completed" ? "is-active" : ""}" data-action="set-tab" data-value="completed" data-tab-value="completed" type="button">已完成</button>
              <span class="tab-indicator" aria-hidden="true"></span>
            </div>
            <button class="launch-button" data-action="open-start-goal" data-guide-id="launch-advance-entry" type="button">
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
  if (state.activePage === "company-info") {
    return renderPayrollGroupSettingsPage();
  }
  if (SETTINGS_PAGE_KEYS.includes(state.activePage) || state.activePage === "settings-module") {
    return renderDevelopingPage(state.activePage);
  }
  return renderMyGoalsPage();
}

function renderGoalModal(goal, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const cardData = buildGoalViewCardData(goal, currentTab);
  const cardMarkup = currentTab === "completed" ? renderCompletedCard(cardData) : renderExecutingCard(cardData);
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="goal-view-dialog" data-overlay-panel="true">
      ${cardMarkup}
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

function renderConfirmModalInner(overlay) {
  const messages = [overlay.summary, overlay.description].filter(Boolean);
  return `
      <div class="confirm-modal-header">
        <h2 class="confirm-modal-title">${escapeHtml(overlay.title)}</h2>
        <button class="confirm-modal-close-button" data-action="close-overlay" type="button" aria-label="关闭二级提示">
          <img class="confirm-modal-close-icon" src="./assets/payroll-group-create-close.svg" alt="" />
        </button>
      </div>
      <div class="confirm-modal-copy">
        ${messages.map((message) => `<p class="confirm-modal-message">${escapeHtml(message)}</p>`).join("")}
      </div>
      <div class="confirm-modal-footer">
        <button class="modal-button" data-action="close-overlay" type="button">取消</button>
        <button class="${escapeHtml(overlay.confirmButtonClassName || "modal-button-primary")}" data-action="confirm-overlay" type="button">${escapeHtml(overlay.confirmLabel || "确认")}</button>
      </div>
  `;
}

function syncConfirmModal() {
  if (!state.overlay || state.overlay.type !== "confirm") {
    return false;
  }

  const modal = document.querySelector(".confirm-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  modal.innerHTML = renderConfirmModalInner(state.overlay);
  return true;
}

function renderConfirmModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal confirm-modal" data-overlay-panel="true">${renderConfirmModalInner(overlay)}</div>
  `;
}

function renderGoalConfigTransferModalInner(overlay) {
  const sourceGoals = overlay.sourceGroupId ? getGoalConfigGoalsByGroup(overlay.sourceGroupId) : [];
  const selectedGoalIds = new Set(Array.isArray(overlay.goalIds) ? overlay.goalIds : []);
  const selectedGoals = sourceGoals.filter((goal) => selectedGoalIds.has(goal.id));
  const options = overlay.sourceGroupId ? getGoalConfigTransferGroupOptions({ groupId: overlay.sourceGroupId }) : [];
  const activeOption = options.find((item) => item.id === overlay.targetGroupId) || null;
  const sourceLabel = getGoalConfigGroupPathLabel(overlay.sourceGroupId);
  const selectedSummary = getGoalConfigTransferSummary(overlay);

  return `
      <div class="panel-header">
        <div>
          <h2 class="panel-title">转移目标</h2>
          <p class="panel-subtitle">支持一次选择多个目标，并统一转移到一个新的目标分组。</p>
        </div>
        <button class="close-button" data-action="close-overlay" type="button">×</button>
      </div>
      <div class="panel-content goal-config-transfer-content">
        <div class="goal-config-transfer-field">
          <span class="goal-config-transfer-label">当前分组</span>
          <div class="goal-config-transfer-value">${escapeHtml(sourceLabel)}</div>
        </div>
        <div class="goal-config-transfer-field">
          <span class="goal-config-transfer-label">转移目标</span>
          <div class="control goal-config-transfer-control">
            <button
              class="${dropdownTriggerClass("control-button goal-config-select-button goal-config-select-wide", "goal-config-transfer-goal")}"
              data-action="toggle-goal-config-dropdown"
              data-value="goal-config-transfer-goal"
              type="button"
              aria-expanded="${isDropdownOpen("goal-config-transfer-goal") ? "true" : "false"}"
              ${sourceGoals.length ? "" : "disabled"}
            >
              <span class="truncate">${escapeHtml(selectedSummary)}</span>
              ${renderGoalConfigSelectArrow()}
            </button>
            ${renderDropdownPanel(
              "goal-config-transfer-goal",
              `
                ${
                  sourceGoals.length
                    ? sourceGoals
                        .map(
                          (item) => `
                            <button class="dropdown-option ${selectedGoalIds.has(item.id) ? "is-active" : ""}" data-action="toggle-goal-config-transfer-goal" data-value="${item.id}" type="button">
                              ${renderCheckboxIndicator(selectedGoalIds.has(item.id) ? "checked" : "unchecked")}
                              <span class="truncate">${escapeHtml(item.title)}</span>
                            </button>
                          `
                        )
                        .join("")
                    : '<div class="member-heading">暂无可转移目标</div>'
                }
              `,
              "dropdown-panel goal-config-inline-menu goal-config-transfer-menu"
            )}
          </div>
        </div>
        <div class="goal-config-transfer-field">
          <span class="goal-config-transfer-label">目标分组</span>
          <div class="control goal-config-transfer-control">
            <button
              class="${dropdownTriggerClass("control-button goal-config-select-button goal-config-select-wide", "goal-config-transfer-group")}"
              data-action="toggle-goal-config-dropdown"
              data-value="goal-config-transfer-group"
              type="button"
              aria-expanded="${isDropdownOpen("goal-config-transfer-group") ? "true" : "false"}"
              ${activeOption ? "" : "disabled"}
            >
              <span class="truncate">${escapeHtml(activeOption ? activeOption.label : "暂无可转移分组")}</span>
              ${renderGoalConfigSelectArrow()}
            </button>
            ${renderDropdownPanel(
              "goal-config-transfer-group",
              `
                ${
                  options.length
                    ? options
                        .map(
                          (item) => `
                            <button class="dropdown-option ${activeOption?.id === item.id ? "is-active" : ""}" data-action="set-goal-config-transfer-group" data-value="${item.id}" type="button">
                              ${escapeHtml(item.label)}
                            </button>
                          `
                        )
                        .join("")
                    : '<div class="member-heading">暂无可转移分组</div>'
                }
              `,
              "dropdown-panel goal-config-inline-menu goal-config-transfer-menu"
            )}
          </div>
          <div class="goal-config-transfer-hint">支持转移到其他自定义分组，也支持移入或移出周转箱。</div>
        </div>
      </div>
      <div class="panel-footer">
        <button class="modal-button" data-action="close-overlay" type="button">取消</button>
        <button class="modal-button-primary" data-action="confirm-goal-config-transfer" type="button" ${selectedGoals.length && activeOption ? "" : "disabled"}>确认转移</button>
      </div>
  `;
}

function syncGoalConfigTransferModal() {
  if (!state.overlay || state.overlay.type !== "goal-config-transfer") {
    return false;
  }

  const modal = document.querySelector(".goal-config-transfer-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  const menuScrollTops = [...modal.querySelectorAll(".goal-config-transfer-menu")].map((menu) =>
    menu instanceof HTMLElement ? menu.scrollTop : 0
  );

  modal.innerHTML = renderGoalConfigTransferModalInner(state.overlay);
  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();

  modal.querySelectorAll(".goal-config-transfer-menu").forEach((menu, index) => {
    if (menu instanceof HTMLElement) {
      menu.scrollTop = menuScrollTops[index] || 0;
    }
  });
  return true;
}

function renderGoalConfigTransferModal(overlay) {
  return `
    <div class="backdrop goal-config-transfer-backdrop" data-action="close-overlay"></div>
    <div class="modal goal-config-transfer-modal config-prep-guide-static-modal" data-overlay-panel="true">${renderGoalConfigTransferModalInner(overlay)}</div>
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

function renderStartGoalChevronIcon(size = "md") {
  return renderDropdownChevronIcon("start-goal-chevron-icon", size);
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
            ${renderStartGoalChevronIcon("sm")}
          </div>
          <div class="control start-goal-period-control">
            <button class="${dropdownTriggerClass("start-goal-period-button", "start-goal-period")}" data-action="toggle-dropdown" data-value="start-goal-period" type="button" aria-expanded="${isDropdownOpen("start-goal-period") ? "true" : "false"}">
              <span>${escapeHtml(nextOverlay.period)}</span>
              ${renderStartGoalChevronIcon()}
            </button>
            ${renderDropdownPanel(
              "start-goal-period",
              `
                ${START_GOAL_PERIOD_OPTIONS.map(
                  (item) => `
                    <button class="dropdown-option ${nextOverlay.period === item ? "is-active" : ""}" data-action="set-start-goal-period" data-value="${item}" type="button">${item}</button>
                  `
                ).join("")}
              `,
              "dropdown-panel start-goal-dropdown"
            )}
          </div>
        </div>
      </div>
      <div class="start-goal-body">
        <div class="start-goal-column">
          <div class="start-goal-column-toolbar">
            <button class="start-goal-all-button ${allSelected ? "is-active" : ""}" data-action="toggle-start-goal-all" type="button">全选</button>
            <div class="control start-goal-group-control">
              <button class="${dropdownTriggerClass("start-goal-group-button", "start-goal-group")}" data-action="toggle-dropdown" data-value="start-goal-group" type="button" aria-expanded="${isDropdownOpen("start-goal-group") ? "true" : "false"}">
                <span class="truncate">${escapeHtml(groupLabel)}</span>
                ${renderStartGoalChevronIcon()}
              </button>
              ${renderDropdownPanel(
                "start-goal-group",
                `
                  ${groupOptions
                    .map(
                      (item) => `
                        <button class="dropdown-option ${nextOverlay.groupId === item.id ? "is-active" : ""}" data-action="set-start-goal-group" data-value="${item.id}" type="button">${escapeHtml(item.label)}</button>
                      `
                    )
                    .join("")}
                `,
                "dropdown-panel start-goal-dropdown"
              )}
            </div>
          </div>
          <div class="start-goal-card-list">
            ${
              available.length
                ? available
                    .map(
                      (goal, index) => `
                        <button
                          class="start-goal-item"
                          data-action="toggle-library-goal"
                          data-value="${goal.id}"
                          ${index === 0 ? 'data-guide-id="launch-advance-first-goal"' : ""}
                          type="button"
                        >
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
        <div class="start-goal-footer-actions">
          <button class="modal-button" data-action="close-overlay" type="button">取消</button>
          <button class="modal-button-primary" data-action="confirm-start-goal" data-guide-id="launch-advance-confirm" type="button" ${selectedGoals.length === 0 ? "disabled" : ""}>发起</button>
        </div>
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
  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();
  modal.querySelectorAll(".start-goal-card-list").forEach((list, index) => {
    if (list instanceof HTMLElement) {
      list.scrollTop = listScrollTops[index] || 0;
    }
  });
  return true;
}

function renderStartGoalModal(overlay) {
  const guideStaticClass = isLaunchAdvanceGuideStep(3) || isLaunchAdvanceGuideStep(4) ? " config-prep-guide-static-modal" : "";
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal start-goal-modal${guideStaticClass}" data-overlay-panel="true">${renderStartGoalModalInner(overlay)}</div>
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

function renderPayrollGroupFieldCreateRadioGroup(fieldName, action, options, selectedValue, ariaLabel) {
  return `
    <div class="goal-config-type-switch payroll-group-field-create-radio-group" role="radiogroup" aria-label="${escapeHtml(
      ariaLabel
    )}">
      ${options
        .map(
          (option) => `
            <button
              class="goal-config-type-radio ${selectedValue === option.key ? "is-active" : ""}"
              data-action="${escapeHtml(action)}"
              data-field="${escapeHtml(fieldName)}"
              data-value="${escapeHtml(option.key)}"
              type="button"
              role="radio"
              aria-checked="${selectedValue === option.key ? "true" : "false"}"
            >
              <span class="goal-config-type-radio-indicator"></span>
              <span class="goal-config-type-radio-label">${escapeHtml(option.label)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPayrollGroupRequiredIcon(className = "") {
  return `
    <span class="${escapeHtml(className)}" aria-hidden="true">
      <img class="payroll-group-field-create-required-icon" src="./assets/required.svg" alt="" />
    </span>
  `;
}

function renderPayrollGroupFieldCreateLabel(label, { className = "", required = true } = {}) {
  return `
    <span class="payroll-group-field-create-label-block ${escapeHtml(className)}">
      ${required ? renderPayrollGroupRequiredIcon("payroll-group-field-create-label-required") : ""}
      <span class="payroll-group-field-create-label-text">${escapeHtml(label)}</span>
    </span>
  `;
}

function renderPayrollGroupFieldCreateTextControl(fieldName, value, placeholder, inputMode = "text") {
  return `
    <span class="payroll-group-field-create-control-shell">
      <input
        class="payroll-group-field-create-input"
        data-field="${escapeHtml(fieldName)}"
        type="text"
        ${inputMode === "decimal" ? 'inputmode="decimal"' : ""}
        value="${escapeHtml(value || "")}"
        placeholder="${escapeHtml(placeholder)}"
      />
    </span>
  `;
}

function renderPayrollGroupFieldCreateFormulaPreview(formulaConfig) {
  const compactFormula = String(formulaConfig || "").replace(/\s+/g, " ").trim();
  if (!compactFormula) {
    return '<span class="payroll-group-formula-trigger-placeholder">点击打开公式编辑器，按你的规则组合字段与函数</span>';
  }
  return `<span class="payroll-group-formula-trigger-value">${escapeHtml(compactFormula)}</span>`;
}

function renderPayrollGroupFieldCreateFormulaSummary(overlay) {
  const preview = renderPayrollGroupFieldCreateFormulaPreview(overlay.formulaConfig);
  const description = String(overlay.formulaDescription || "").trim();
  return `
    <div class="payroll-group-field-create-subgroup">
      ${renderPayrollGroupFieldCreateLabel("公式配置")}
      <button class="payroll-group-formula-trigger" data-action="open-payroll-group-field-formula-editor" type="button">
        <span class="payroll-group-formula-trigger-copy">
          <span class="payroll-group-formula-trigger-title">打开公式编辑器</span>
          ${preview}
        </span>
        <span class="payroll-group-formula-trigger-action">${overlay.formulaConfig ? "编辑" : "配置"}</span>
      </button>
      ${
        description
          ? `
            <div class="payroll-group-formula-description-preview">
              <span class="payroll-group-formula-description-preview-label">说明</span>
              <span class="payroll-group-formula-description-preview-value">${escapeHtml(description)}</span>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function renderPayrollGroupDetailFormulaEditorLineNumbers(formula) {
  const lineCount = Math.max(1, String(formula || "").split("\n").length);
  return Array.from({ length: lineCount }, (_, index) => `<span>${index + 1}</span>`).join("");
}

function renderPayrollGroupDetailFormulaEditorHighlight(formula) {
  const source = String(formula || "");
  if (!source) {
    return " ";
  }

  const regex = /\{[^{}\n]+\}|(?:\b\d+(?:\.\d+)?\b)|(?:\b[A-Z][A-Z0-9_]*(?=\s*\())/g;
  let cursor = 0;
  let html = "";
  let match = regex.exec(source);

  while (match) {
    if (match.index > cursor) {
      html += escapeHtml(source.slice(cursor, match.index));
    }

    const token = match[0];
    if (token.startsWith("{")) {
      html += `<span class="payroll-group-formula-editor-token payroll-group-formula-editor-token-field">${escapeHtml(token)}</span>`;
    } else if (/^\d/.test(token)) {
      html += `<span class="payroll-group-formula-editor-token payroll-group-formula-editor-token-number">${escapeHtml(token)}</span>`;
    } else {
      html += `<span class="payroll-group-formula-editor-token payroll-group-formula-editor-token-function">${escapeHtml(token)}</span>`;
    }
    cursor = match.index + token.length;
    match = regex.exec(source);
  }

  if (cursor < source.length) {
    html += escapeHtml(source.slice(cursor));
  }

  return source.endsWith("\n") ? `${html}\n ` : html;
}

function renderPayrollGroupFieldFormulaEditorModal(overlay) {
  const nextOverlay = normalizePayrollGroupDetailFieldCreateOverlay(overlay);
  const formulaEditor = nextOverlay.formulaEditor;
  const fieldKeyword = formulaEditor.fieldKeyword.trim().toLowerCase();
  const functionKeyword = formulaEditor.functionKeyword.trim().toLowerCase();
  const fieldOptions = getPayrollGroupDetailFormulaReferenceOptions(nextOverlay).filter((item) =>
    !fieldKeyword || item.label.toLowerCase().includes(fieldKeyword)
  );
  const functionOptions = PAYROLL_GROUP_DETAIL_FORMULA_EDITOR_FUNCTION_OPTIONS.filter((item) =>
    !functionKeyword ||
    item.label.toLowerCase().includes(functionKeyword) ||
    item.signature.toLowerCase().includes(functionKeyword) ||
    item.description.toLowerCase().includes(functionKeyword)
  );

  return `
    <div class="payroll-group-formula-editor-layer">
      <div class="backdrop payroll-group-formula-editor-backdrop" data-action="close-payroll-group-formula-editor"></div>
      <div class="modal payroll-group-formula-editor-modal" data-overlay-panel="true" role="dialog" aria-modal="true" aria-label="公式编辑器">
        <div class="payroll-group-formula-editor-header">
          <h2 class="payroll-group-formula-editor-title">公式编辑器</h2>
          <button class="payroll-group-formula-editor-close" data-action="close-payroll-group-formula-editor" type="button" aria-label="关闭公式编辑器">×</button>
        </div>

        <div class="payroll-group-formula-editor-body">
          <section class="payroll-group-formula-editor-main-panel">
            <div class="payroll-group-formula-editor-code-shell">
              <div class="payroll-group-formula-editor-code-toolbar">
                <span class="payroll-group-formula-editor-code-label">公式</span>
                <span class="payroll-group-formula-editor-code-hint">字段请使用 <code>{字段名}</code> 引用，函数可从右侧直接插入</span>
              </div>
              <div class="payroll-group-formula-editor-code-area">
                <div class="payroll-group-formula-editor-line-numbers" data-formula-editor-line-numbers>${renderPayrollGroupDetailFormulaEditorLineNumbers(
                  formulaEditor.draftFormula
                )}</div>
                <div class="payroll-group-formula-editor-code-layer">
                  <pre class="payroll-group-formula-editor-highlight" data-formula-editor-highlight>${renderPayrollGroupDetailFormulaEditorHighlight(
                    formulaEditor.draftFormula
                  )}</pre>
                  <textarea
                    class="payroll-group-formula-editor-input"
                    data-field="payroll-group-field-formula-editor-input"
                    spellcheck="false"
                    placeholder="例如：ROUND({基本工资} + {岗位津贴} * {出勤天数}, 2)"
                  >${escapeHtml(formulaEditor.draftFormula)}</textarea>
                  ${
                    formulaEditor.draftFormula
                      ? ""
                      : '<div class="payroll-group-formula-editor-empty-hint">在这里输入公式，右侧字段和函数都可以一键插入。</div>'
                  }
                </div>
              </div>
            </div>

            <label class="payroll-group-formula-editor-description">
              <span class="payroll-group-formula-editor-panel-label">说明</span>
              <input
                class="payroll-group-formula-editor-description-input"
                data-field="payroll-group-field-formula-editor-description"
                type="text"
                value="${escapeHtml(formulaEditor.draftDescription)}"
                placeholder="例如：用于计算员工当月应发基础收入"
              />
            </label>
          </section>

          <aside class="payroll-group-formula-editor-side-panel">
            <section class="payroll-group-formula-editor-reference-panel">
              <div class="payroll-group-formula-editor-panel-header">
                <span class="payroll-group-formula-editor-panel-title">字段引用</span>
              </div>
              <label class="payroll-group-formula-editor-search">
                <input
                  class="payroll-group-formula-editor-search-input"
                  data-field="payroll-group-field-formula-editor-field-search"
                  type="text"
                  value="${escapeHtml(formulaEditor.fieldKeyword)}"
                  placeholder="搜索字段"
                />
              </label>
              <div class="payroll-group-formula-editor-tag-list">
                ${
                  fieldOptions.length
                    ? fieldOptions
                        .map(
                          (item) => `
                            <button
                              class="payroll-group-formula-editor-tag"
                              data-action="insert-payroll-group-field-formula-reference"
                              data-value="${escapeHtml(item.key)}"
                              type="button"
                            >
                              <span class="payroll-group-formula-editor-tag-label">${escapeHtml(item.label)}</span>
                              <span class="payroll-group-formula-editor-tag-meta">${escapeHtml(
                                getPayrollGroupDetailSectionLabel(item.sectionKey)
                              )}</span>
                            </button>
                          `
                        )
                        .join("")
                    : '<div class="payroll-group-formula-editor-empty-panel">没有找到匹配字段</div>'
                }
              </div>
            </section>

            <section class="payroll-group-formula-editor-reference-panel">
              <div class="payroll-group-formula-editor-panel-header">
                <span class="payroll-group-formula-editor-panel-title">公式引用</span>
              </div>
              <label class="payroll-group-formula-editor-search">
                <input
                  class="payroll-group-formula-editor-search-input"
                  data-field="payroll-group-field-formula-editor-function-search"
                  type="text"
                  value="${escapeHtml(formulaEditor.functionKeyword)}"
                  placeholder="搜索函数"
                />
              </label>
              <div class="payroll-group-formula-editor-function-list">
                ${
                  functionOptions.length
                    ? functionOptions
                        .map(
                          (item) => `
                            <button
                              class="payroll-group-formula-editor-function"
                              data-action="insert-payroll-group-field-formula-function"
                              data-value="${escapeHtml(item.key)}"
                              type="button"
                            >
                              <span class="payroll-group-formula-editor-function-name">${escapeHtml(item.label)}</span>
                              <span class="payroll-group-formula-editor-function-signature">${escapeHtml(item.signature)}</span>
                              <span class="payroll-group-formula-editor-function-description">${escapeHtml(item.description)}</span>
                            </button>
                          `
                        )
                        .join("")
                    : '<div class="payroll-group-formula-editor-empty-panel">没有找到匹配函数</div>'
                }
              </div>
            </section>
          </aside>
        </div>

        <div class="payroll-group-formula-editor-footer">
          <button class="modal-button" data-action="close-payroll-group-formula-editor" type="button">取消</button>
          <button class="modal-button-primary" data-action="save-payroll-group-formula-editor" type="button">保存</button>
        </div>
      </div>
    </div>
  `;
}

function renderPayrollGroupFieldCreateDropdown(dropdownKey, action, value, options, placeholder, showEmptyOption = true) {
  const selectedOption = options.find((option) => option.key === value) || null;
  const buttonLabel = selectedOption ? selectedOption.label : placeholder;
  const panelOptions = [
    ...(showEmptyOption
      ? [
          `
            <button class="dropdown-option ${value ? "" : "is-active"}" data-action="${escapeHtml(action)}" data-value="" type="button">
              ${escapeHtml(placeholder)}
            </button>
          `,
        ]
      : []),
    ...options.map(
      (option) => `
        <button class="dropdown-option ${value === option.key ? "is-active" : ""}" data-action="${escapeHtml(action)}" data-value="${escapeHtml(option.key)}" type="button">
          ${escapeHtml(option.label)}
        </button>
      `
    ),
  ].join("");

  return `
    <div class="control payroll-group-field-create-select-control">
      <button
        class="${dropdownTriggerClass("control-button payroll-group-field-create-select-button", dropdownKey)} ${selectedOption ? "" : "is-placeholder"}"
        data-action="toggle-dropdown"
        data-value="${escapeHtml(dropdownKey)}"
        type="button"
        aria-haspopup="menu"
        aria-expanded="${isDropdownOpen(dropdownKey) ? "true" : "false"}"
      >
        <span class="truncate">${escapeHtml(buttonLabel)}</span>
        ${renderControlArrow()}
      </button>
      ${renderDropdownPanel(
        dropdownKey,
        panelOptions,
        "dropdown-panel payroll-group-field-create-select-menu"
      )}
    </div>
  `;
}

function renderPayrollGroupFieldCreatePasswordControl(fieldName, value, placeholder, visible) {
  return `
    <span class="payroll-group-field-create-control-shell payroll-group-field-create-password-shell">
      <input
        class="payroll-group-field-create-input"
        data-field="${escapeHtml(fieldName)}"
        type="${visible ? "text" : "password"}"
        value="${escapeHtml(value || "")}"
        placeholder="${escapeHtml(placeholder)}"
      />
      <button
        class="payroll-group-field-create-password-toggle"
        data-action="toggle-payroll-group-field-create-custom-auth-visible"
        type="button"
      >${visible ? "隐藏" : "显示"}</button>
    </span>
  `;
}

function renderPayrollGroupFieldCreateCustomExternalFieldCell(overlay, field, index) {
  if (!canSelectPayrollGroupDetailCustomExternalField(overlay.sectionKey, field)) {
    return '<span class="payroll-group-custom-external-disabled-map">仅支持数值类型</span>';
  }

  const dropdownKey = `payroll-group-field-create-custom-field-${index}`;
  const mappingOptions = getPayrollGroupDetailCustomExternalMappingOptionsForField(field).map((option) => ({
    key: `${field.path}|||${option.key}`,
    label: option.label,
  }));
  const selectedMappingKey = overlay.customExternalMappings?.[field.path] || "";
  const selectedValue = selectedMappingKey ? `${field.path}|||${selectedMappingKey}` : "";
  return renderPayrollGroupFieldCreateDropdown(
    dropdownKey,
    "set-payroll-group-field-create-custom-field",
    selectedValue,
    mappingOptions,
    "请选择",
    false
  );
}

function renderPayrollGroupFieldCreateCustomExternalFields(overlay) {
  const fields = normalizePayrollGroupDetailCustomExternalFields(overlay.customExternalFields);
  if (!fields.length) {
    return `
      <div class="payroll-group-custom-external-empty">
        暂无可选字段，请检查接口返回的 JSON 数据。
      </div>
    `;
  }

  return `
    <div class="payroll-group-custom-external-field-table">
      <div class="payroll-group-custom-external-field-row payroll-group-custom-external-field-head">
        <div class="payroll-group-custom-external-field-name">字段名称</div>
        <div class="payroll-group-custom-external-field-map">映射字段</div>
      </div>
      ${fields
        .map(
          (field, index) => `
            <div class="payroll-group-custom-external-field-row">
              <div class="payroll-group-custom-external-field-name">
                <span class="truncate" title="${escapeHtml(field.label)}">${escapeHtml(field.label)}</span>
              </div>
              <div class="payroll-group-custom-external-field-map">
                ${renderPayrollGroupFieldCreateCustomExternalFieldCell(overlay, field, index)}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPayrollGroupFieldCreateCustomExternalResult(overlay) {
  if (overlay.customExternalFetchStatus === "error") {
    return `
      <div class="payroll-group-custom-external-message is-error">
        ${escapeHtml(overlay.customExternalFetchError || "获取失败，请检查接口地址和鉴权信息")}
      </div>
    `;
  }
  if (overlay.customExternalFetchStatus === "success") {
    return `
      <section class="payroll-group-field-create-card payroll-group-custom-external-result-card">
        ${renderPayrollGroupFieldCreateCustomExternalFields(overlay)}
      </section>
    `;
  }
  return "";
}

function renderPayrollGroupFieldCreateCustomExternalConfig(overlay) {
  const authType = getPayrollGroupDetailCustomExternalAuthOption(overlay.customExternalAuthType).key;
  const showAuthValue = isPayrollGroupDetailCustomExternalAuthValueRequired(authType);
  const fetchDisabled = !canFetchPayrollGroupDetailCustomExternalFields(overlay);

  return `
    <div class="payroll-group-field-create-subgroup">
      ${renderPayrollGroupFieldCreateLabel("请求地址（URL）")}
      ${renderPayrollGroupFieldCreateTextControl(
        "payroll-group-field-create-custom-url",
        overlay.customExternalUrl,
        "https://api.example.com/attendance/overtime"
      )}
    </div>
    <div class="payroll-group-field-create-subgroup">
      ${renderPayrollGroupFieldCreateLabel("鉴权方式", { required: false })}
      ${renderPayrollGroupFieldCreateDropdown(
        "payroll-group-field-create-custom-auth-type",
        "set-payroll-group-field-create-custom-auth-type",
        authType,
        PAYROLL_GROUP_DETAIL_FIELD_CREATE_CUSTOM_EXTERNAL_AUTH_OPTIONS,
        "请选择",
        false
      )}
    </div>
    ${
      showAuthValue
        ? `
          <div class="payroll-group-field-create-subgroup">
            ${renderPayrollGroupFieldCreateLabel("鉴权值")}
            ${renderPayrollGroupFieldCreatePasswordControl(
              "payroll-group-field-create-custom-auth-value",
              overlay.customExternalAuthValue,
              authType === "bearer_token" ? "填入 Token" : "填入 API Key",
              overlay.customExternalAuthValueVisible
            )}
          </div>
        `
        : ""
    }
    <div class="payroll-group-custom-external-actions">
      <button
        class="modal-button-primary"
        data-action="fetch-payroll-group-field-create-custom-fields"
        type="button"
        ${fetchDisabled ? "disabled" : ""}
      >获取字段</button>
    </div>
  `;
}

function renderPayrollGroupFieldCreateAutoConfig(overlay) {
  if (overlay.itemType === "other-application") {
    const isCustomExternalSource = isPayrollGroupDetailCustomExternalSource(overlay.sourceApp);
    const sourceFormOptions = getPayrollGroupDetailFieldCreateSourceFormOptions(overlay.sourceApp);
    const sourceFieldOptions = getPayrollGroupDetailFieldCreateSourceFieldOptions(overlay.sourceApp, overlay.sourceForm);
    const showSourceForm = !isCustomExternalSource && sourceFormOptions.length > 0;
    const showSourceField = !isCustomExternalSource && !!overlay.sourceApp && (!showSourceForm || !!overlay.sourceForm);
    const showMatchField = showSourceField && !!overlay.sourceField;

    return `
      <div class="payroll-group-field-create-subgroup">
        ${renderPayrollGroupFieldCreateLabel("来源应用")}
        ${renderPayrollGroupFieldCreateDropdown(
          "payroll-group-field-create-source-app",
          "set-payroll-group-field-create-source-app",
          overlay.sourceApp,
          PAYROLL_GROUP_DETAIL_FIELD_CREATE_SOURCE_APP_OPTIONS,
          "请选择",
          false
        )}
      </div>
      ${isCustomExternalSource ? renderPayrollGroupFieldCreateCustomExternalConfig(overlay) : ""}
      ${
          showSourceForm
          ? `
            <div class="payroll-group-field-create-subgroup">
              ${renderPayrollGroupFieldCreateLabel("来源表单")}
              ${renderPayrollGroupFieldCreateDropdown(
                "payroll-group-field-create-source-form",
                "set-payroll-group-field-create-source-form",
                overlay.sourceForm,
                sourceFormOptions,
                "请选择",
                false
              )}
            </div>
          `
          : ""
      }
      ${
          showSourceField
          ? `
            <div class="payroll-group-field-create-subgroup">
              ${renderPayrollGroupFieldCreateLabel("来源字段")}
              ${renderPayrollGroupFieldCreateDropdown(
                "payroll-group-field-create-source-field",
                "set-payroll-group-field-create-source-field",
                overlay.sourceField,
                sourceFieldOptions,
                "请选择",
                false
              )}
            </div>
          `
          : ""
      }
      ${
          showMatchField
          ? `
            <div class="payroll-group-field-create-subgroup">
              ${renderPayrollGroupFieldCreateLabel("匹配字段")}
              ${renderPayrollGroupFieldCreateDropdown(
                "payroll-group-field-create-match-field",
                "set-payroll-group-field-create-match-field",
                overlay.matchField,
                PAYROLL_GROUP_DETAIL_FIELD_CREATE_MATCH_FIELD_OPTIONS,
                "请选择",
                false
              )}
            </div>
          `
          : ""
      }
    `;
  }

  return renderPayrollGroupFieldCreateFormulaSummary(overlay);
}

function renderPayrollGroupFieldCreateManualConfig(overlay) {
  if (overlay.itemType === "number") {
    return `
      <div class="payroll-group-field-create-subgroup">
        ${renderPayrollGroupFieldCreateLabel("默认数值")}
        ${renderPayrollGroupFieldCreateTextControl(
          "payroll-group-field-create-default-number",
          overlay.defaultNumber,
          "请输入",
          "decimal"
        )}
      </div>
    `;
  }

  return `
    <div class="payroll-group-field-create-subgroup">
      ${renderPayrollGroupFieldCreateLabel("默认文本")}
      ${renderPayrollGroupFieldCreateTextControl("payroll-group-field-create-default-text", overlay.defaultText, "请输入")}
    </div>
  `;
}

function renderPayrollGroupFieldCreateDrawerInner(overlay) {
  const nextOverlay = normalizePayrollGroupDetailFieldCreateOverlay(overlay);
  const isEditMode = nextOverlay.submitMode === "edit";
  const title = isEditMode
    ? formatPayrollGroupDetailEditLabel(nextOverlay.sectionKey)
    : formatPayrollGroupDetailCreateLabel(nextOverlay.sectionKey);
  const typeOptions = getPayrollGroupDetailFieldCreateTypes(nextOverlay.mode);
  const showTypeSection = nextOverlay.sectionKey === "info";
  const isAutoMode = nextOverlay.mode === "auto";
  const isManualMode = nextOverlay.mode === "manual";
  const showCustomExternalResult =
    showTypeSection &&
    isAutoMode &&
    nextOverlay.itemType === "other-application" &&
    isPayrollGroupDetailCustomExternalSource(nextOverlay.sourceApp);

  return `
    <div class="payroll-group-create-header">
      <h2 class="payroll-group-create-title">${escapeHtml(title)}</h2>
      <button class="payroll-group-create-close-button" data-action="close-overlay" type="button" aria-label="关闭${escapeHtml(
        title
      )}抽屉">
        <img class="payroll-group-create-close-icon" src="./assets/payroll-group-create-close.svg" alt="" />
      </button>
    </div>
    <div class="payroll-group-field-create-scroll">
      <div class="payroll-group-field-create-body">
        <section class="payroll-group-field-create-card">
          <label class="payroll-group-field-create-field payroll-group-field-create-field--name">
            ${renderPayrollGroupFieldCreateLabel("项名称", { className: "payroll-group-field-create-name-title" })}
            ${renderPayrollGroupFieldCreateTextControl("payroll-group-field-create-name", nextOverlay.name, "请输入")}
          </label>

          <div class="payroll-group-field-create-field">
            ${renderPayrollGroupFieldCreateLabel("项模式")}
            ${renderPayrollGroupFieldCreateRadioGroup(
              "payroll-group-field-create-mode",
              "set-payroll-group-field-create-mode",
              PAYROLL_GROUP_DETAIL_FIELD_CREATE_MODE_OPTIONS,
              nextOverlay.mode,
              "项模式"
            )}
          </div>
        </section>

        ${
          showTypeSection
            ? `
              <section class="payroll-group-field-create-card">
                <div class="payroll-group-field-create-field">
                  ${renderPayrollGroupFieldCreateLabel("项类型")}
                  ${renderPayrollGroupFieldCreateRadioGroup(
                    "payroll-group-field-create-item-type",
                    "set-payroll-group-field-create-type",
                    typeOptions,
                    nextOverlay.itemType,
                    "项类型"
                  )}
                </div>
                ${isAutoMode ? renderPayrollGroupFieldCreateAutoConfig(nextOverlay) : ""}
                ${isManualMode ? renderPayrollGroupFieldCreateManualConfig(nextOverlay) : ""}
              </section>
              ${showCustomExternalResult ? renderPayrollGroupFieldCreateCustomExternalResult(nextOverlay) : ""}
            `
            : ""
        }
      </div>
    </div>
    <div class="payroll-group-field-create-footer">
      <button class="modal-button" data-action="close-overlay" type="button">取消</button>
      <button class="modal-button-primary" data-action="confirm-payroll-group-field-create" type="button">${
        isEditMode ? "编辑" : "创建"
      }</button>
    </div>
  `;
}

function renderPayrollGroupCreateModalInner(overlay) {
  return `
      <div class="payroll-group-create-header">
        <h2 class="payroll-group-create-title">创建薪酬组</h2>
        <button class="payroll-group-create-close-button" data-action="close-overlay" type="button" aria-label="关闭创建薪酬组弹窗">
          <img class="payroll-group-create-close-icon" src="./assets/payroll-group-create-close.svg" alt="" />
        </button>
      </div>
      <div class="payroll-group-create-body">
        <label class="payroll-group-create-field">
          <span class="payroll-group-create-label">薪酬组名称</span>
          <input
            class="payroll-group-create-input"
            data-field="payroll-group-create-name"
            type="text"
            value="${escapeHtml(overlay.groupName || "")}"
            placeholder="请输入"
          />
        </label>
      </div>
      <div class="payroll-group-create-footer">
        <button class="modal-button-primary" data-action="confirm-payroll-group-create" type="button">确定</button>
      </div>
  `;
}

function syncPayrollGroupCreateModal() {
  if (!state.overlay || state.overlay.type !== "payroll-group-create") {
    return false;
  }

  const modal = document.querySelector(".payroll-group-create-modal");
  if (!(modal instanceof HTMLElement)) {
    return false;
  }

  const input = modal.querySelector('[data-field="payroll-group-create-name"]');
  const preserveFocus = input instanceof HTMLInputElement ? getInputPreserveFocus(input) : null;
  modal.innerHTML = renderPayrollGroupCreateModalInner(state.overlay);

  if (preserveFocus?.selector) {
    const nextInput = modal.querySelector(preserveFocus.selector);
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
      if (typeof preserveFocus.start === "number" && typeof preserveFocus.end === "number") {
        nextInput.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
  }

  return true;
}

function syncPayrollGroupFormulaEditorPresentation(textarea = null) {
  const formulaInput =
    textarea instanceof HTMLTextAreaElement
      ? textarea
      : document.querySelector('[data-field="payroll-group-field-formula-editor-input"]');
  if (!(formulaInput instanceof HTMLTextAreaElement)) {
    return false;
  }

  const codeArea = formulaInput.closest(".payroll-group-formula-editor-code-area");
  if (!(codeArea instanceof HTMLElement)) {
    return false;
  }

  if (state.overlay?.type === "payroll-group-field-create") {
    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    if (formulaInput.scrollTop !== formulaEditor.scrollTop) {
      formulaInput.scrollTop = formulaEditor.scrollTop;
    }
    if (formulaInput.scrollLeft !== formulaEditor.scrollLeft) {
      formulaInput.scrollLeft = formulaEditor.scrollLeft;
    }
  }

  const lineNumbers = codeArea.querySelector("[data-formula-editor-line-numbers]");
  const highlight = codeArea.querySelector("[data-formula-editor-highlight]");
  const nextLineNumbersHtml = renderPayrollGroupDetailFormulaEditorLineNumbers(formulaInput.value);
  const nextHighlightHtml = renderPayrollGroupDetailFormulaEditorHighlight(formulaInput.value);

  if (lineNumbers instanceof HTMLElement && lineNumbers.innerHTML !== nextLineNumbersHtml) {
    lineNumbers.innerHTML = nextLineNumbersHtml;
  }

  if (highlight instanceof HTMLElement) {
    if (highlight.innerHTML !== nextHighlightHtml) {
      highlight.innerHTML = nextHighlightHtml;
    }
    highlight.style.transform = `translate(${-formulaInput.scrollLeft}px, ${-formulaInput.scrollTop}px)`;
  }

  if (lineNumbers instanceof HTMLElement) {
    lineNumbers.style.transform = `translateY(${-formulaInput.scrollTop}px)`;
  }

  return true;
}

function focusPayrollGroupFormulaEditorInput(selectionStart = null, selectionEnd = selectionStart) {
  const textarea = document.querySelector('[data-field="payroll-group-field-formula-editor-input"]');
  if (!(textarea instanceof HTMLTextAreaElement)) {
    return false;
  }

  textarea.focus();
  if (typeof selectionStart === "number" && typeof selectionEnd === "number") {
    textarea.setSelectionRange(selectionStart, selectionEnd);
  }
  syncPayrollGroupFormulaEditorPresentation(textarea);
  return true;
}

function syncPayrollGroupFieldCreateDrawer() {
  if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
    return false;
  }

  const overlayRoot = document.querySelector(".overlay-root");
  const drawer = document.querySelector(".payroll-group-field-create-drawer");
  if (!(drawer instanceof HTMLElement) || !(overlayRoot instanceof HTMLElement)) {
    return false;
  }

  const scrollContainer = drawer.querySelector(".payroll-group-field-create-scroll");
  const scrollTop = scrollContainer instanceof HTMLElement ? scrollContainer.scrollTop : 0;
  const menuScrollTops = [...drawer.querySelectorAll(".payroll-group-field-create-select-menu")].map((menu) =>
    menu instanceof HTMLElement ? menu.scrollTop : 0
  );
  const activeElement = document.activeElement;
  const preserveFocus =
    activeElement instanceof HTMLElement && overlayRoot.contains(activeElement)
      ? getInteractivePreserveFocus(activeElement)
      : null;
  const nextOverlay = normalizePayrollGroupDetailFieldCreateOverlay(state.overlay);
  const nextDrawerHtml = renderPayrollGroupFieldCreateDrawerInner(nextOverlay);

  if (drawer.innerHTML !== nextDrawerHtml) {
    drawer.innerHTML = nextDrawerHtml;
  }

  const nextFormulaEditorHtml = nextOverlay.formulaEditor.open ? renderPayrollGroupFieldFormulaEditorModal(nextOverlay) : "";
  const existingFormulaEditor = overlayRoot.querySelector(".payroll-group-formula-editor-layer");
  if (nextFormulaEditorHtml) {
    if (existingFormulaEditor instanceof HTMLElement) {
      if (existingFormulaEditor.outerHTML !== nextFormulaEditorHtml) {
        existingFormulaEditor.outerHTML = nextFormulaEditorHtml;
      }
    } else {
      drawer.insertAdjacentHTML("afterend", nextFormulaEditorHtml);
    }
  } else {
    existingFormulaEditor?.remove();
  }

  const nextScrollContainer = drawer.querySelector(".payroll-group-field-create-scroll");
  if (nextScrollContainer instanceof HTMLElement) {
    nextScrollContainer.scrollTop = scrollTop;
  }

  drawer.querySelectorAll(".payroll-group-field-create-select-menu").forEach((menu, index) => {
    if (menu instanceof HTMLElement) {
      menu.scrollTop = menuScrollTops[index] || 0;
    }
  });

  if (preserveFocus?.selector) {
    const nextFocusedElement = overlayRoot.querySelector(preserveFocus.selector);
    if (nextFocusedElement instanceof HTMLElement) {
      nextFocusedElement.focus();
      if (
        typeof preserveFocus.start === "number" &&
        typeof preserveFocus.end === "number" &&
        (nextFocusedElement instanceof HTMLInputElement || nextFocusedElement instanceof HTMLTextAreaElement)
      ) {
        nextFocusedElement.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
  }

  syncPayrollGroupFormulaEditorPresentation();

  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();
  return true;
}

function renderPayrollGroupCreateModal(overlay) {
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <div class="modal payroll-group-create-modal" data-overlay-panel="true">${renderPayrollGroupCreateModalInner(overlay)}</div>
  `;
}

function renderPayrollGroupFieldCreateDrawer(overlay) {
  const nextOverlay = normalizePayrollGroupDetailFieldCreateOverlay(overlay);
  return `
    <div class="backdrop" data-action="close-overlay"></div>
    <aside class="drawer payroll-group-field-create-drawer" data-overlay-panel="true">
      ${renderPayrollGroupFieldCreateDrawerInner(nextOverlay)}
    </aside>
    ${nextOverlay.formulaEditor.open ? renderPayrollGroupFieldFormulaEditorModal(nextOverlay) : ""}
  `;
}

function renderOverlay() {
  if (!state.overlay) {
    return "";
  }

  if (state.overlay.type === "goal-modal") {
    const goal = getGoal(state.overlay.goalId, state.overlay.tabKey);
    return goal ? `<div class="overlay-root">${renderGoalModal(goal, state.overlay.tabKey)}</div>` : "";
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

  if (state.overlay.type === "goal-config-transfer") {
    return `<div class="overlay-root">${renderGoalConfigTransferModal(state.overlay)}</div>`;
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

  if (state.overlay.type === "payroll-group-field-create") {
    return `<div class="overlay-root">${renderPayrollGroupFieldCreateDrawer(state.overlay)}</div>`;
  }

  if (state.overlay.type === "payroll-group-create") {
    return `<div class="overlay-root">${renderPayrollGroupCreateModal(state.overlay)}</div>`;
  }

  if (state.overlay.type === "info") {
    return `<div class="overlay-root">${renderInfoModal(state.overlay)}</div>`;
  }

  return "";
}

function syncOverlayInPlace() {
  if (!(app instanceof HTMLElement)) {
    return false;
  }

  if (state.overlay?.type === "payroll-group-field-create" && syncPayrollGroupFieldCreateDrawer()) {
    return true;
  }

  if (state.overlay?.type === "payroll-group-create" && syncPayrollGroupCreateModal()) {
    return true;
  }

  const existingOverlayRoot = app.querySelector(".overlay-root");
  const activeElement = document.activeElement;
  const preserveFocus =
    existingOverlayRoot instanceof HTMLElement &&
    activeElement instanceof HTMLElement &&
    existingOverlayRoot.contains(activeElement)
      ? getInteractivePreserveFocus(activeElement)
      : null;
  const nextOverlayHtml = renderOverlay();

  if (!nextOverlayHtml) {
    if (existingOverlayRoot instanceof HTMLElement) {
      existingOverlayRoot.remove();
      return true;
    }
    return false;
  }

  if (existingOverlayRoot instanceof HTMLElement) {
    if (existingOverlayRoot.outerHTML !== nextOverlayHtml) {
      existingOverlayRoot.outerHTML = nextOverlayHtml;
    }
    if (preserveFocus?.selector) {
      const nextFocusedElement = document.querySelector(preserveFocus.selector);
      if (nextFocusedElement instanceof HTMLElement) {
        nextFocusedElement.focus();
        if (
          typeof preserveFocus.start === "number" &&
          typeof preserveFocus.end === "number" &&
          nextFocusedElement instanceof HTMLInputElement
        ) {
          nextFocusedElement.setSelectionRange(preserveFocus.start, preserveFocus.end);
        }
        return true;
      }
    }
    if (state.overlay?.type === "payroll-group-create") {
      const input = document.querySelector('[data-field="payroll-group-create-name"]');
      if (input instanceof HTMLInputElement) {
        input.focus();
      }
    }
    if (state.overlay?.type === "payroll-group-field-create") {
      if (state.overlay.formulaEditor?.open) {
        focusPayrollGroupFormulaEditorInput(state.overlay.formulaEditor.selectionStart, state.overlay.formulaEditor.selectionEnd);
        return true;
      }
      const input = document.querySelector('[data-field="payroll-group-field-create-name"]');
      if (input instanceof HTMLInputElement) {
        input.focus();
      }
    }
    return true;
  }

  app.insertAdjacentHTML("beforeend", nextOverlayHtml);
  if (state.overlay?.type === "payroll-group-create") {
    const input = document.querySelector('[data-field="payroll-group-create-name"]');
    if (input instanceof HTMLInputElement) {
      input.focus();
    }
  }
  if (state.overlay?.type === "payroll-group-field-create") {
    if (state.overlay.formulaEditor?.open) {
      focusPayrollGroupFormulaEditorInput(state.overlay.formulaEditor.selectionStart, state.overlay.formulaEditor.selectionEnd);
      return true;
    }
    const input = document.querySelector('[data-field="payroll-group-field-create-name"]');
    if (input instanceof HTMLInputElement) {
      input.focus();
    }
  }
  return true;
}

function renderConfigPrepGuideShell() {
  if (!state.configPrepGuide) {
    return "";
  }

  return '<div class="config-prep-guide-root" data-config-prep-guide-layer></div>';
}

function openGoalView(goalId, tabKey = getTabKey()) {
  const currentTab = getTabKey(tabKey);
  const goal = getGoal(goalId, currentTab);
  if (!goal) {
    return;
  }

  setRowMenuOpenState(null);
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

function getPendingSelectionStageMeta(goalIds) {
  const targetIds = new Set(Array.isArray(goalIds) ? goalIds : [goalIds]);
  const pendingGoals = state.pendingGoals.filter((goal) => targetIds.has(goal.id));
  const confirmingIds = pendingGoals.filter((goal) => goal.stage === "confirming").map((goal) => goal.id);
  const ratingIds = pendingGoals.filter((goal) => goal.stage === "rating").map((goal) => goal.id);
  return {
    totalCount: pendingGoals.length,
    confirmingCount: confirmingIds.length,
    ratingCount: ratingIds.length,
    confirmingIds,
    ratingIds,
  };
}

function buildMyGoalPendingConfirmOverlay(kind, goalIds) {
  const isReject = kind === "reject";
  const { totalCount, ratingCount, confirmingCount } = getPendingSelectionStageMeta(goalIds);
  let description = "";

  if (isReject) {
    if (ratingCount && confirmingCount) {
      description = "确认后会同步更新本地 mock 数据：确认中的目标将退回发起方，评分中的目标将退回执行中。";
    } else if (ratingCount) {
      description = "确认后会同步更新本地 mock 数据：评分中的目标将退回执行中。";
    } else {
      description = "确认后会同步更新本地 mock 数据：确认中的目标将退回发起方。";
    }
  } else if (ratingCount && confirmingCount) {
    description = "确认后会同步更新本地 mock 数据：确认中的目标将进入执行中，评分中的目标将进入已完成。";
  } else if (ratingCount) {
    description = "确认后会同步更新本地 mock 数据：评分中的目标将进入已完成。";
  } else {
    description = "确认后会同步更新本地 mock 数据：确认中的目标将进入执行中。";
  }

  return {
    type: "confirm",
    scope: "my-goal-pending",
    kind,
    goalIds,
    title: isReject ? "确认批量拒绝" : "确认批量通过",
    summary: `本次将${isReject ? "拒绝" : "通过"} ${totalCount || goalIds.length} 个待处理目标。`,
    description,
    confirmLabel: isReject ? "确认拒绝" : "确认通过",
    confirmButtonClassName: isReject ? "danger-button" : "modal-button-primary",
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

function buildGoalConfigTransferOverlay(goalId) {
  const goal = getGoalConfigGoal(goalId);
  if (!goal) {
    return null;
  }

  const options = getGoalConfigTransferGroupOptions(goal);
  return {
    type: "goal-config-transfer",
    sourceGroupId: goal.groupId,
    goalIds: [goal.id],
    targetGroupId: options[0]?.id || null,
  };
}

function buildGoalConfigGroupTransferOverlay(groupId) {
  const options = getGoalConfigTransferGroupOptions({ groupId });
  if (!options.length) {
    return null;
  }

  return {
    type: "goal-config-transfer",
    sourceGroupId: groupId,
    goalIds: [],
    targetGroupId: options[0]?.id || null,
  };
}

function buildPayrollGroupCreateOverlay() {
  return {
    type: "payroll-group-create",
    groupName: "",
  };
}

function buildPayrollGroupDeleteOverlay(row) {
  return {
    type: "confirm",
    scope: "payroll-group",
    kind: "delete",
    rowId: row.id,
    rowName: row.name,
    title: "确认删除薪酬组",
    summary: `本次将删除「${row.name}」。`,
    description: "删除后当前薪酬组将立即从列表移除，操作不可恢复。",
    confirmLabel: "删除",
    confirmButtonClassName: "danger-button",
  };
}

function buildPayrollGroupCopyOverlay(row) {
  return {
    type: "confirm",
    scope: "payroll-group",
    kind: "copy",
    rowId: row.id,
    rowName: row.name,
    title: "确认复制薪酬组",
    summary: `本次将复制「${row.name}」。`,
    description: "复制后会在当前列表新增一个同配置的薪酬组，名称自动追加“（复制）”。",
    confirmLabel: "确定",
    confirmButtonClassName: "modal-button-primary",
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
  setRowMenuOpenState(null);
  showToast("目标已推进到评分审批");
}

function removeGoalInstanceEverywhere(goalIds) {
  const targets = new Set(Array.isArray(goalIds) ? goalIds : [goalIds]);
  state.goals = state.goals.filter((goal) => !targets.has(goal.id));
  state.completedGoals = state.completedGoals.filter((goal) => !targets.has(goal.id));
  state.pendingGoals = state.pendingGoals.filter((goal) => !targets.has(goal.id));
  state.myExecutingGoals = state.myExecutingGoals.filter((goal) => !targets.has(goal.id));
  state.myCompletedGoals = state.myCompletedGoals.filter((goal) => !targets.has(goal.id));
  state.selectionByTab.ongoing = (state.selectionByTab.ongoing || []).filter((id) => !targets.has(id));
  state.selectionByTab.completed = (state.selectionByTab.completed || []).filter((id) => !targets.has(id));
  state.myGoals.selectionByTab.pending = (state.myGoals.selectionByTab.pending || []).filter((id) => !targets.has(id));
  state.myGoals.selectionByTab.executing = (state.myGoals.selectionByTab.executing || []).filter((id) => !targets.has(id));
  state.myGoals.selectionByTab.completed = (state.myGoals.selectionByTab.completed || []).filter((id) => !targets.has(id));
}

function applyDelete(goalIds, tabKey = getTabKey()) {
  removeGoalInstanceEverywhere(goalIds);
  setActiveSelection([], tabKey);
  state.overlay = null;
  setRowMenuOpenState(null);
  showToast("目标已删除");
}

function applyPendingApproval(goalIds, toastMessage) {
  const ids = Array.from(new Set(Array.isArray(goalIds) ? goalIds : [goalIds])).filter(Boolean);
  if (!ids.length) {
    return 0;
  }

  const targets = new Set(ids);
  const pendingGoals = state.pendingGoals.filter((goal) => targets.has(goal.id));
  if (!pendingGoals.length) {
    return 0;
  }

  const pendingGoalById = new Map(pendingGoals.map((goal) => [goal.id, goal]));
  const confirmingIds = new Set(pendingGoals.filter((goal) => goal.stage === "confirming").map((goal) => goal.id));
  const ratingIds = new Set(pendingGoals.filter((goal) => goal.stage === "rating").map((goal) => goal.id));
  const nextExecutingGoals = [];

  if (confirmingIds.size) {
    state.goals = state.goals.map((goal) => {
      if (!confirmingIds.has(goal.id)) {
        return goal;
      }
      const nextGoal = convertGoalToExecuting(goal);
      nextExecutingGoals.push(nextGoal);
      return nextGoal;
    });

    const nextMyExecutingGoals = nextExecutingGoals
      .filter((goal) => isCurrentUserExecutor(goal.executorId))
      .map((goal) => createMyExecutingGoalFromGoal(goal));
    if (nextMyExecutingGoals.length) {
      state.myExecutingGoals = [
        ...nextMyExecutingGoals,
        ...state.myExecutingGoals.filter((goal) => !confirmingIds.has(goal.id)),
      ];
    }
  }

  if (ratingIds.size) {
    const ratingSourceGoals = ids
      .filter((id) => ratingIds.has(id))
      .map((id) => state.goals.find((goal) => goal.id === id) || pendingGoalById.get(id))
      .filter(Boolean);

    removeGoalInstanceEverywhere([...ratingIds]);
    state.completedGoals = [...ratingSourceGoals.map((goal) => createCompletedGoalFromGoal(goal)), ...state.completedGoals];

    const nextMyCompletedGoals = ratingSourceGoals
      .filter((goal) => isCurrentUserExecutor(goal.executorId))
      .map((goal) => createMyCompletedGoalFromGoal(goal));
    if (nextMyCompletedGoals.length) {
      state.myCompletedGoals = [
        ...nextMyCompletedGoals,
        ...state.myCompletedGoals.filter((goal) => !ratingIds.has(goal.id)),
      ];
    }
  }

  state.pendingGoals = state.pendingGoals.filter((goal) => !targets.has(goal.id));
  state.myGoals.selectionByTab.pending = (state.myGoals.selectionByTab.pending || []).filter((id) => !targets.has(id));
  state.overlay = null;
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
  showToast(toastMessage || `已批量通过 ${pendingGoals.length} 个待处理目标`);
  return pendingGoals.length;
}

function applyPendingRejection(goalIds, toastMessage) {
  const ids = Array.from(new Set(Array.isArray(goalIds) ? goalIds : [goalIds])).filter(Boolean);
  if (!ids.length) {
    return 0;
  }

  const targets = new Set(ids);
  const pendingGoals = state.pendingGoals.filter((goal) => targets.has(goal.id));
  if (!pendingGoals.length) {
    return 0;
  }

  const confirmingIds = new Set(pendingGoals.filter((goal) => goal.stage === "confirming").map((goal) => goal.id));
  const ratingIds = new Set(pendingGoals.filter((goal) => goal.stage === "rating").map((goal) => goal.id));
  const revertedGoals = [];

  if (confirmingIds.size) {
    removeGoalInstanceEverywhere([...confirmingIds]);
  }

  if (ratingIds.size) {
    state.goals = state.goals.map((goal) => {
      if (!ratingIds.has(goal.id)) {
        return goal;
      }
      const nextGoal = convertGoalToExecuting(goal);
      revertedGoals.push(nextGoal);
      return nextGoal;
    });
    state.completedGoals = state.completedGoals.filter((goal) => !ratingIds.has(goal.id));
    state.myCompletedGoals = state.myCompletedGoals.filter((goal) => !ratingIds.has(goal.id));

    const nextMyExecutingGoals = revertedGoals
      .filter((goal) => isCurrentUserExecutor(goal.executorId))
      .map((goal) => createMyExecutingGoalFromGoal(goal));
    if (nextMyExecutingGoals.length) {
      state.myExecutingGoals = [
        ...nextMyExecutingGoals,
        ...state.myExecutingGoals.filter((goal) => !ratingIds.has(goal.id)),
      ];
    }
  }

  state.pendingGoals = state.pendingGoals.filter((goal) => !targets.has(goal.id));
  state.myGoals.selectionByTab.pending = (state.myGoals.selectionByTab.pending || []).filter((id) => !targets.has(id));
  state.overlay = null;
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
  showToast(toastMessage || `已批量拒绝 ${pendingGoals.length} 个待处理目标`);
  return pendingGoals.length;
}

function completePendingProcess(goalId) {
  const pendingGoal = state.pendingGoals.find((goal) => goal.id === goalId);
  if (!pendingGoal) {
    return;
  }

  applyPendingApproval(
    [goalId],
    pendingGoal.stage === "confirming" ? "确认审批已完成，目标进入执行中" : "评分审批已完成，目标进入已完成"
  );
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
    cancelGoalConfigGroupEditing();
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("分组已删除，目标已移入周转箱");
    return false;
  }
  if (state.overlay.scope === "goal-config-process") {
    const targets = new Set(state.overlay.processIds || []);
    const targetProcessNames = new Set(
      state.goalConfigProcesses.filter((item) => targets.has(item.id)).map((item) => item.name)
    );
    const defaultFlowProcessId = getDefaultGoalConfigFlow();
    const defaultFlowName = getGoalConfigProcessName(defaultFlowProcessId, DEFAULT_GOAL_CONFIG_PROCESSES[0].name);
    state.goalConfigProcesses = state.goalConfigProcesses.filter((item) => !targets.has(item.id) || item.isDefault);
    state.goalConfigGoals = state.goalConfigGoals.map((goal) => {
      const flowProcessId = goal.flowProcessId || resolveGoalConfigFlowProcessId(goal.flow);
      if (!targets.has(flowProcessId) && !targetProcessNames.has(goal.flow)) {
        return goal;
      }
      return {
        ...goal,
        flowProcessId: defaultFlowProcessId,
        flow: defaultFlowName,
      };
    });
    state.goalConfig.processSelection = state.goalConfig.processSelection.filter((id) => !targets.has(id));
    if (state.goalConfig.editingDraft) {
      state.goalConfig.editingDraft = normalizeGoalConfigDraft(state.goalConfig.editingDraft);
    }
    cancelGoalConfigProcessEditing();
    state.overlay = null;
    clearGoalConfigPanels();
    showToast("流程已删除");
    return false;
  }
  if (state.overlay.scope === "payroll-group") {
    if (state.overlay.kind === "copy") {
      const row = getPayrollGroupSettingsRow(state.overlay.rowId);
      if (!row) {
        state.overlay = null;
        syncOverlayInPlace();
        return true;
      }

      const nextRowId = createRuntimeId("payroll-group");
      const nextRows = [
        Object.assign(clone(row), {
          id: nextRowId,
          name: makePayrollGroupCopyName(row.name),
        }),
        ...getPayrollGroupSettingsRows(),
      ];
      const nextSavedRuleSettingsByRowId = { ...getPayrollGroupSavedRuleSettingsMap() };
      const nextDraftRuleSettingsByRowId = { ...getPayrollGroupRuleDraftSettingsMap() };
      if (nextSavedRuleSettingsByRowId[row.id]) {
        nextSavedRuleSettingsByRowId[nextRowId] = normalizePayrollGroupRuleSettings(nextSavedRuleSettingsByRowId[row.id]);
      }
      if (nextDraftRuleSettingsByRowId[row.id]) {
        nextDraftRuleSettingsByRowId[nextRowId] = normalizePayrollGroupRuleSettings(nextDraftRuleSettingsByRowId[row.id]);
      }
      state.payrollGroupSettings = {
        ...state.payrollGroupSettings,
        rows: nextRows,
        page: 1,
        savedRuleSettingsByRowId: nextSavedRuleSettingsByRowId,
        draftRuleSettingsByRowId: nextDraftRuleSettingsByRowId,
      };
      state.currentPayrollGroupId = getDefaultPayrollGroupId(nextRows, state.currentPayrollGroupId);
      ensurePayrollGroupCreatorFilterVisible(nextRows[0].creator);
      setRowMenuOpenState(null);
      state.overlay = null;
      showToast(`已复制「${row.name}」`);
      syncPayrollGroupPage();
      syncOverlayInPlace();
      persistState();
      return true;
    }

    const targetRowId = state.overlay.rowId;
    const rowName = state.overlay.rowName || "薪酬组";
    const remainingRows = getPayrollGroupSettingsRows().filter((row) => row.id !== targetRowId);
    const nextSavedRuleSettingsByRowId = { ...getPayrollGroupSavedRuleSettingsMap() };
    const nextDraftRuleSettingsByRowId = { ...getPayrollGroupRuleDraftSettingsMap() };
    delete nextSavedRuleSettingsByRowId[targetRowId];
    delete nextDraftRuleSettingsByRowId[targetRowId];
    state.payrollGroupSettings = {
      ...state.payrollGroupSettings,
      rows: remainingRows,
      savedRuleSettingsByRowId: nextSavedRuleSettingsByRowId,
      draftRuleSettingsByRowId: nextDraftRuleSettingsByRowId,
    };
    state.currentPayrollGroupId = getDefaultPayrollGroupId(remainingRows, state.currentPayrollGroupId);
    state.payrollGroupSettings.creator = isValidPayrollGroupCreator(state.payrollGroupSettings.creator, remainingRows)
      ? state.payrollGroupSettings.creator
      : "all";
    if (state.openRowMenu === getPayrollGroupSettingsRowMenuId(targetRowId)) {
      setRowMenuOpenState(null);
    }
    state.overlay = null;
    showToast(`已删除「${rowName}」`);
    syncPayrollGroupPage();
    syncOverlayInPlace();
    persistState();
    return true;
  }
  if (state.overlay.scope === "demo-reset-step-1") {
    state.overlay = buildResetDemoConfirmOverlay(2);
    return false;
  }
  if (state.overlay.scope === "demo-reset-step-2") {
    clearDemoStorageAndReload();
    return true;
  }
  if (state.overlay.scope === "my-goal-pending") {
    if (state.overlay.kind === "reject") {
      applyPendingRejection(state.overlay.goalIds);
      return false;
    }
    applyPendingApproval(state.overlay.goalIds);
    return false;
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
  setDropdownOpenState(null);
  setRowMenuOpenState(null);
  if (isLaunchAdvanceGuideStep(4)) {
    setConfigPrepGuideStep(5);
  }
  showToast(`已发起 ${instances.length} 个目标实例，进入确认审批`);
}

function confirmGoalConfigTransfer() {
  if (!state.overlay || state.overlay.type !== "goal-config-transfer") {
    return;
  }

  const selectedGoals = getGoalConfigTransferSelectedGoals(state.overlay);
  const targetGroup = getGoalConfigGroup(state.overlay.targetGroupId);
  if (!selectedGoals.length || !targetGroup || targetGroup.kind === "all") {
    showToast("请选择目标分组");
    return;
  }

  if (targetGroup.id === state.overlay.sourceGroupId) {
    showToast("目标已在当前分组中");
    return;
  }

  const selectedIds = new Set(selectedGoals.map((goal) => goal.id));
  state.goalConfigGoals = state.goalConfigGoals.map((item) =>
    selectedIds.has(item.id)
      ? {
          ...item,
          groupId: targetGroup.id,
        }
      : item
  );

  if (state.goalConfig.editingDraft?.id && selectedIds.has(state.goalConfig.editingDraft.id)) {
    state.goalConfig.editingDraft = {
      ...state.goalConfig.editingDraft,
      groupId: targetGroup.id,
    };
  }

  state.goalConfig.expandedGroupIds = [
    ...new Set([...state.goalConfig.expandedGroupIds, ...getGoalConfigAncestors(targetGroup.id)]),
  ];
  state.overlay = null;
  setDropdownOpenState(null);
  clearGoalConfigPanels();
  showToast(
    selectedGoals.length === 1
      ? `目标已转移到「${getGoalConfigGroupPathLabel(targetGroup.id)}」`
      : `已将 ${selectedGoals.length} 个目标转移到「${getGoalConfigGroupPathLabel(targetGroup.id)}」`
  );
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
        description: `当前目标已绑定「${goal.flowProcessId ? getGoalConfigProcessName(goal.flowProcessId, goal.flow || "未设置流程") : goal.flow || "未设置流程"}」，执行人与评分规则已就绪。`,
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
  setDropdownOpenState(null);
  state.overlay = null;
}

function clearGoalConfigEditing() {
  state.goalConfig.editingGoalId = null;
  state.goalConfig.editingDraft = null;
  setDropdownOpenState(null);
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
  beginGoalConfigGroupEditing(nextId);
}

function saveGoalConfigDraft() {
  const sourceDraft = clone(state.goalConfig.editingDraft);
  const draft = normalizeGoalConfigDraft(sourceDraft);
  if (!draft) {
    return false;
  }

  if (!draft.title.trim()) {
    showToast("请先填写目标名称");
    return false;
  }

  if (!draft.krs.length) {
    showToast("请至少保留一个关键结果");
    return false;
  }

  const hasEmptyKr = draft.krs.some((kr) => !kr.title.trim());
  if (hasEmptyKr) {
    showToast("请先补全关键结果名称");
    return false;
  }

  if (draft.type === "auto" || draft.type === "weighted") {
    const editableKrs = (sourceDraft.krs || []).slice(0, Math.max(0, (sourceDraft.krs || []).length - 1));
    const missingWeightIndex = editableKrs.findIndex((kr) => !String(kr.weight || "").replace("%", "").trim());
    if (missingWeightIndex !== -1) {
      showToast(`请补全 KR${missingWeightIndex + 1} 的权重`);
      return false;
    }
  }

  if (draft.type === "auto") {
    const missingMetricsIndex = draft.krs.findIndex((kr) =>
      [kr.threshold, kr.passing, kr.challenge].some((item) => !String(item || "").trim())
    );
    if (missingMetricsIndex !== -1) {
      showToast(`请补全 KR${missingMetricsIndex + 1} 的门槛、及格、挑战`);
      return false;
    }

    const nonNumericMetricIndex = draft.krs.findIndex((kr) =>
      [kr.threshold, kr.passing, kr.challenge].some((item) => !isGoalConfigNumericValue(item))
    );
    if (nonNumericMetricIndex !== -1) {
      showToast(`KR${nonNumericMetricIndex + 1} 的门槛、及格、挑战只能输入数字`);
      return false;
    }

    const invalidOrderIndex = draft.krs.findIndex((kr) =>
      !isGoalConfigStrictOrderedTriple([Number(kr.threshold), Number(kr.passing), Number(kr.challenge)])
    );
    if (invalidOrderIndex !== -1) {
      showToast(`KR${invalidOrderIndex + 1} 的门槛、及格、挑战只支持大中小或小中大`);
      return false;
    }
  }

  const nextFlowProcessId = draft.flowProcessId || resolveGoalConfigFlowProcessId(draft.flow);
  const nextAlignedGoalId = draft.alignedGoalId || resolveGoalConfigAlignedGoalId(draft.alignedGoal);
  const nextGoal = {
    ...draft,
    title: draft.title.trim(),
    groupId: draft.groupId || resolveGoalConfigTargetGroupId(),
    isNew: undefined,
    flowProcessId: nextFlowProcessId,
    flow: nextFlowProcessId ? getGoalConfigProcessName(nextFlowProcessId, draft.flow || "") : draft.flow || "",
    alignedGoalId: nextAlignedGoalId,
    alignedGoal: nextAlignedGoalId ? getGoalConfigGoalTitle(nextAlignedGoalId, draft.alignedGoal || "") : draft.alignedGoal || "",
    krs: draft.krs.map((kr) => ({
      ...kr,
      title: kr.title.trim(),
    })),
  };

  if (nextGoal.alignedGoalId) {
    const alignedTargetGoal = getGoalConfigGoal(nextGoal.alignedGoalId);
    if (isGoalConfigMutualAlignBlocked(nextGoal, alignedTargetGoal)) {
      showToast("所选目标已对齐当前目标，不能互相对齐");
      return false;
    }
  }

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
  return true;
}

function getInputPreserveFocus(input) {
  if (!(input instanceof HTMLElement) || !input.dataset.field) {
    return null;
  }

  let selector = `[data-field="${escapeSelectorAttributeValue(input.dataset.field)}"]`;

  if (input.dataset.value) {
    selector += `[data-value="${escapeSelectorAttributeValue(input.dataset.value)}"]`;
  }

  if (input.dataset.processId) {
    selector += `[data-process-id="${escapeSelectorAttributeValue(input.dataset.processId)}"]`;
  }

  if (input.dataset.field === "goal-config-group-name" && input.dataset.groupId) {
    selector = `[data-field="goal-config-group-name"][data-group-id="${input.dataset.groupId}"]`;
  }

  if (input.dataset.krId) {
    selector = `[data-field="${escapeSelectorAttributeValue(input.dataset.field)}"][data-kr-id="${escapeSelectorAttributeValue(input.dataset.krId)}"]`;
  }

  const preserve = {
    selector,
  };

  if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
    preserve.start = input.selectionStart;
    preserve.end = input.selectionEnd;
  }

  return preserve;
}

function getInteractivePreserveFocus(target) {
  const inputPreserve = getInputPreserveFocus(target);
  if (inputPreserve) {
    return inputPreserve;
  }

  if (!(target instanceof HTMLElement) || !target.dataset.action) {
    return null;
  }

  let selector = `[data-action="${escapeSelectorAttributeValue(target.dataset.action)}"]`;

  if (target.dataset.value) {
    selector += `[data-value="${escapeSelectorAttributeValue(target.dataset.value)}"]`;
  }

  if (target.dataset.processId) {
    selector += `[data-process-id="${escapeSelectorAttributeValue(target.dataset.processId)}"]`;
  }

  if (target.dataset.groupId) {
    selector += `[data-group-id="${escapeSelectorAttributeValue(target.dataset.groupId)}"]`;
  }

  if (target.dataset.krId) {
    selector += `[data-kr-id="${escapeSelectorAttributeValue(target.dataset.krId)}"]`;
  }

  return { selector };
}

function shouldDeferInputRender(event) {
  return (
    event.isComposing ||
    (event.target instanceof HTMLInputElement && event.target.dataset.composing === "true")
  );
}

function getElementHorizontalGap(element) {
  const styles = window.getComputedStyle(element);
  const gapValue = styles.columnGap !== "normal" ? styles.columnGap : styles.gap;
  const gap = Number.parseFloat(gapValue);
  return Number.isFinite(gap) ? gap : 0;
}

function measureInlineTextWidth(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  return range.getBoundingClientRect().width;
}

function measureActionCellWidth(cell) {
  const styles = window.getComputedStyle(cell);
  const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
  const inFlowChildren = [...cell.children].filter((child) => {
    if (!(child instanceof HTMLElement)) {
      return false;
    }
    const childStyles = window.getComputedStyle(child);
    return childStyles.display !== "none" && childStyles.position !== "absolute";
  });
  const contentWidth = inFlowChildren.length
    ? inFlowChildren.reduce((sum, child) => sum + child.getBoundingClientRect().width, 0) +
      getElementHorizontalGap(cell) * Math.max(0, inFlowChildren.length - 1)
    : measureInlineTextWidth(cell);

  return Math.ceil(contentWidth + paddingLeft + paddingRight);
}

function syncAdaptiveTableActionColumns() {
  document.querySelectorAll(".table-shell").forEach((shell) => {
    if (!(shell instanceof HTMLElement)) {
      return;
    }

    const actionCells = [...shell.querySelectorAll(".header-actions, .cell-actions")].filter(
      (cell) => cell instanceof HTMLElement
    );

    if (!actionCells.length) {
      shell.style.removeProperty("--table-actions-column-width");
      return;
    }

    const maxWidth = actionCells.reduce((width, cell) => Math.max(width, measureActionCellWidth(cell)), 0);
    shell.style.setProperty("--table-actions-column-width", `${maxWidth}px`);
  });
}

function render(preserveFocus) {
  syncActivePageAccess();
  const ongoingIds = new Set(state.goals.map((goal) => goal.id));
  const completedIds = new Set(state.completedGoals.map((goal) => goal.id));
  const pendingIds = new Set(state.pendingGoals.map((goal) => goal.id));
  const myExecutingIds = new Set(state.myExecutingGoals.map((goal) => goal.id));
  const myCompletedIds = new Set(state.myCompletedGoals.map((goal) => goal.id));
  state.selectionByTab.ongoing = getActiveSelection("ongoing").filter((id) => ongoingIds.has(id));
  state.selectionByTab.completed = getActiveSelection("completed").filter((id) => completedIds.has(id));
  state.myGoals.selectionByTab.pending = getMyGoalSelection("pending").filter((id) => pendingIds.has(id));
  state.myGoals.selectionByTab.executing = getMyGoalSelection("executing").filter((id) => myExecutingIds.has(id));
  state.myGoals.selectionByTab.completed = getMyGoalSelection("completed").filter((id) => myCompletedIds.has(id));

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
    ${renderConfigPrepGuideShell()}
  `;

  flushDropdownChevronAnimations();
  scheduleDropdownMotionStateCleanup();

  persistState();
  syncToast();
  scheduleConfigPrepGuideSync();

  if (maybeStartAutomaticGuide()) {
    render();
    return;
  }

  syncTabIndicators();
  syncAdaptiveTableActionColumns();

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
  const topbar = document.querySelector(".topbar");
  const nextCollapsed = !state.sidebarCollapsed;

  state.sidebarCollapsed = nextCollapsed;
  closeTransientPanels();
  state.overlay = null;

  if (!sidebar) {
    render();
    return;
  }

  sidebar.classList.toggle("is-collapsed", nextCollapsed);
  topbar?.classList.toggle("is-sidebar-collapsed", nextCollapsed);
  syncSidebarGroupPopoversInDom();

  const collapseButton = sidebar.querySelector(".collapse-button");
  if (collapseButton) {
    collapseButton.classList.toggle("is-collapsed", nextCollapsed);
    collapseButton.setAttribute("aria-label", nextCollapsed ? "展开导航" : "收起导航");
    collapseButton.setAttribute("title", nextCollapsed ? "展开导航" : "收起导航");
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
  const pendingPageGoals = getMyGoalPagedGoals(getFilteredMyGoals("pending"), "pending").items;
  const selectedPendingIds = getMyGoalSelection("pending");

  switch (action) {
    case "start-config-prep-guide":
      startConfigPrepGuide();
      break;
    case "start-launch-advance-guide":
      startLaunchAdvanceGuide();
      break;
    case "close-config-prep-guide":
      closeConfigPrepGuide(isConfigPrepGuideLastStep());
      break;
    case "toggle-sidebar-group": {
      if (state.sidebarCollapsed) {
        return;
      }

      setDropdownOpenState(null);
      animateSidebarGroupToggle(value);
      return;
    }
    case "navigate-page":
      state.activePage = normalizeGoalPage(value);
      state.pendingManualGuidePage = ["goal-config", "goal-management"].includes(state.activePage)
        ? state.activePage
        : null;
      resetGoalPageEntryTab(state.activePage);
      refreshCurrentPageTableState(state.activePage);
      if (getSidebarGroupKeyByPage(state.activePage)) {
        setSidebarGroupExpanded(getSidebarGroupKeyByPage(state.activePage), true);
      }
      closeTransientPanels();
      state.overlay = null;
      if (isConfigPrepGuideStep(1) && state.activePage === "goal-config") {
        advanceConfigPrepGuide(2);
      } else if (isLaunchAdvanceGuideStep(1) && state.activePage === "goal-management") {
        advanceConfigPrepGuide(2);
      }
      break;
    case "switch-payroll-group": {
      const nextPayrollGroupId = getDefaultPayrollGroupId(getPayrollGroupSettingsRows(), String(value || ""));
      closeTransientPanels();
      state.overlay = null;
      if (!nextPayrollGroupId || nextPayrollGroupId === state.currentPayrollGroupId) {
        if (syncPayrollGroupSwitchControl()) {
          persistState();
          return;
        }
        break;
      }
      state.currentPayrollGroupId = nextPayrollGroupId;
      showToast(`已切换到 ${getCurrentPayrollGroupSwitchOption().label}`);
      if (syncPayrollGroupSwitchControl()) {
        persistState();
        return;
      }
      break;
    }
    case "create-payroll-group":
      closeTransientPanels();
      state.overlay = buildPayrollGroupCreateOverlay();
      syncPayrollGroupSwitchControl();
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    case "confirm-payroll-group-create":
      if (state.overlay && state.overlay.type === "payroll-group-create") {
        const groupName = String(state.overlay.groupName || "").trim();
        if (!groupName) {
          showToast("请输入薪酬组名称");
          return;
        }
        if (isPayrollGroupSettingsNameTaken(groupName)) {
          showToast("薪酬组名称已存在");
          return;
        }
        const currentApprover = getCurrentApprover();
        const nextRows = [
          {
            id: createRuntimeId("payroll-group"),
            name: groupName,
            creatorId: currentApprover.id,
            creator: currentApprover.label,
            createdAt: new Date().toISOString(),
          },
          ...getPayrollGroupSettingsRows(),
        ];
        state.payrollGroupSettings = {
          ...state.payrollGroupSettings,
          rows: nextRows,
          page: 1,
        };
        state.currentPayrollGroupId = getDefaultPayrollGroupId(nextRows, state.currentPayrollGroupId);
        ensurePayrollGroupCreatorFilterVisible(currentApprover.label);
        closeTransientPanels();
        state.overlay = null;
        showToast(`已创建「${groupName}」`);
        syncPayrollGroupPage();
        syncOverlayInPlace();
        persistState();
        return;
      }
      break;
    case "configure-payroll-group": {
      const row = getPayrollGroupSettingsRow(value);
      if (!row) {
        showToast("薪酬组不存在");
        return;
      }
      closeTransientPanels();
      state.overlay = null;
      setPayrollGroupDetailState({
        ...DEFAULT_PAYROLL_GROUP_DETAIL_STATE,
        rowId: row.id,
        fieldRows: getPayrollGroupDetailFieldRows(),
        ruleSettings: getPayrollGroupRuleSettingsForRow(row.id),
      });
      break;
    }
    case "open-payroll-group-settings-list":
      closeTransientPanels();
      state.overlay = null;
      setPayrollGroupDetailState({
        ...DEFAULT_PAYROLL_GROUP_DETAIL_STATE,
        rowId: null,
        fieldRows: getPayrollGroupDetailFieldRows(),
        ruleSettings: getPayrollGroupRuleSettings(),
      });
      break;
    case "set-payroll-group-detail-tab": {
      const nextTab = PAYROLL_GROUP_DETAIL_TAB_OPTIONS.some((item) => item.key === value)
        ? value
        : DEFAULT_PAYROLL_GROUP_DETAIL_STATE.activeTab;
      const detail = getPayrollGroupDetailState();
      queueTabIndicatorTransition("payroll-group-detail", detail.activeTab, nextTab);
      closeTransientPanels();
      state.overlay = null;
      setPayrollGroupDetailState({
        ...detail,
        activeTab: nextTab,
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-rule-view-mode": {
      const detail = getPayrollGroupDetailState();
      const nextRuleSettings = setPayrollGroupRuleDraftForRow(detail.rowId, {
        ...detail.ruleSettings,
        viewMode: value === "monthly" ? "monthly" : "fixed",
      });
      setPayrollGroupDetailState({
        ...detail,
        ruleSettings: nextRuleSettings,
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "save-payroll-group-rule-settings": {
      const detail = getPayrollGroupDetailState();
      const ruleSettings = getPayrollGroupRuleSettings();
      if (ruleSettings.viewMode === "fixed" && !ruleSettings.fixedDays.trim()) {
        showToast("请输入固定天数");
        const input = document.querySelector('[data-field="payroll-group-rule-fixed-days"]');
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
        return;
      }
      if (ruleSettings.viewMode === "monthly") {
        const emptyMonthIndex = ruleSettings.monthlyDays.findIndex((value) => !String(value || "").trim());
        if (emptyMonthIndex >= 0) {
          showToast(`请输入${PAYROLL_GROUP_RULE_MONTH_OPTIONS[emptyMonthIndex].label}`);
          const input = document.querySelector(
            `[data-field="payroll-group-rule-month-day"][data-month-index="${emptyMonthIndex}"]`
          );
          if (input instanceof HTMLInputElement) {
            input.focus();
          }
          return;
        }
      }
      const savedRuleSettings = setPayrollGroupRuleSavedForRow(detail.rowId, ruleSettings);
      setPayrollGroupDetailState({
        ...detail,
        ruleSettings: savedRuleSettings,
      });
      showToast("规则设置已保存");
      persistState();
      return;
    }
    case "toggle-payroll-group-detail-sidebar": {
      const detail = getPayrollGroupDetailState();
      setPayrollGroupDetailState({
        ...detail,
        sidebarCollapsed: !detail.sidebarCollapsed,
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-detail-section": {
      if (!PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.some((item) => item.key === value)) {
        break;
      }
      const detail = getPayrollGroupDetailState();
      closeTransientPanels();
      setPayrollGroupDetailState({
        ...detail,
        sectionKey: value,
        page: 1,
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "create-payroll-group-detail-field": {
      const sectionKey = PAYROLL_GROUP_DETAIL_SECTION_OPTIONS.some((item) => item.key === value)
        ? value
        : getPayrollGroupDetailState().sectionKey;
      closeTransientPanels();
      state.overlay = buildPayrollGroupFieldCreateOverlay(sectionKey);
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-field-create-mode": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        mode: value === "auto" ? "auto" : "manual",
      });
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-field-create-type": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        itemType: value,
      });
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    }
    case "open-payroll-group-field-formula-editor": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      const nextOverlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        formulaEditor: createPayrollGroupDetailFormulaEditorState(state.overlay, {
          open: true,
        }),
      });
      state.overlay = nextOverlay;
      if (syncOverlayInPlace()) {
        focusPayrollGroupFormulaEditorInput(nextOverlay.formulaEditor.selectionStart, nextOverlay.formulaEditor.selectionEnd);
        return;
      }
      break;
    }
    case "close-payroll-group-formula-editor": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        formulaEditor: createPayrollGroupDetailFormulaEditorState(state.overlay, {
          open: false,
        }),
      });
      if (syncOverlayInPlace()) {
        return;
      }
      break;
    }
    case "save-payroll-group-formula-editor": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        formulaConfig: formulaEditor.draftFormula,
        formulaDescription: formulaEditor.draftDescription,
        formulaEditor: createPayrollGroupDetailFormulaEditorState(
          {
            ...state.overlay,
            formulaConfig: formulaEditor.draftFormula,
            formulaDescription: formulaEditor.draftDescription,
          },
          { open: false }
        ),
      });
      if (syncOverlayInPlace()) {
        return;
      }
      break;
    }
    case "insert-payroll-group-field-formula-reference": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
      const insertResult = insertPayrollGroupFormulaText(
        formulaEditor.draftFormula,
        `{${String(value || "")}}`,
        formulaEditor.selectionStart,
        formulaEditor.selectionEnd
      );
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        formulaEditor: {
          ...formulaEditor,
          open: true,
          draftFormula: insertResult.value,
          selectionStart: insertResult.selectionStart,
          selectionEnd: insertResult.selectionEnd,
        },
      });
      if (syncOverlayInPlace()) {
        focusPayrollGroupFormulaEditorInput(insertResult.selectionStart, insertResult.selectionEnd);
        return;
      }
      break;
    }
    case "insert-payroll-group-field-formula-function": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      const functionOption = getPayrollGroupDetailFormulaFunctionOption(value);
      if (!functionOption) {
        return;
      }
      const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
      const insertResult = insertPayrollGroupFormulaText(
        formulaEditor.draftFormula,
        functionOption.insertText,
        formulaEditor.selectionStart,
        formulaEditor.selectionEnd,
        functionOption.caretOffset
      );
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...state.overlay,
        formulaEditor: {
          ...formulaEditor,
          open: true,
          draftFormula: insertResult.value,
          selectionStart: insertResult.selectionStart,
          selectionEnd: insertResult.selectionEnd,
        },
      });
      if (syncOverlayInPlace()) {
        focusPayrollGroupFormulaEditorInput(insertResult.selectionStart, insertResult.selectionEnd);
        return;
      }
      break;
    }
    case "confirm-payroll-group-field-create": {
      if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
        return;
      }
      const overlay = normalizePayrollGroupDetailFieldCreateOverlay(state.overlay);
      const isEditMode = overlay.submitMode === "edit";
      const name = normalizePayrollGroupDetailFieldName(overlay.name);
      if (!name) {
        showToast("请输入项名称");
        const input = document.querySelector('[data-field="payroll-group-field-create-name"]');
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
        return;
      }
      const isCustomExternalSource =
        overlay.mode === "auto" &&
        overlay.itemType === "other-application" &&
        isPayrollGroupDetailCustomExternalSource(overlay.sourceApp);
      const customExternalMappingEntries = isCustomExternalSource
        ? getPayrollGroupDetailCustomExternalMappingEntries(overlay)
        : [];
      const primaryCustomExternalMapping = customExternalMappingEntries[0] || null;
      if (isCustomExternalSource && !isPayrollGroupDetailCustomExternalUrlValid(overlay.customExternalUrl)) {
        showToast("请输入有效的请求地址");
        const input = document.querySelector('[data-field="payroll-group-field-create-custom-url"]');
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
        return;
      }
      if (
        isCustomExternalSource &&
        isPayrollGroupDetailCustomExternalAuthValueRequired(overlay.customExternalAuthType) &&
        !overlay.customExternalAuthValue.trim()
      ) {
        showToast("请输入鉴权值");
        const input = document.querySelector('[data-field="payroll-group-field-create-custom-auth-value"]');
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
        return;
      }
      if (isCustomExternalSource && !customExternalMappingEntries.length) {
        showToast("请先获取并选择字段");
        return;
      }
      const customExternalConfig = isCustomExternalSource
        ? {
            source_type: "custom_external",
            url: overlay.customExternalUrl.trim(),
            auth_type: overlay.customExternalAuthType,
            auth_value: overlay.customExternalAuthValue,
            field_path: primaryCustomExternalMapping.field.path,
            field_type: primaryCustomExternalMapping.field.fieldType || "string",
            mapping_field: primaryCustomExternalMapping.mapping.key,
            field_mappings: customExternalMappingEntries.map((entry) => ({
              field_path: entry.field.path,
              field_type: entry.field.fieldType || "string",
              mapping_field: entry.mapping.key,
            })),
          }
        : null;

      let nextFieldRows = getPayrollGroupDetailFieldRows();
      if (isEditMode) {
        const field = getPayrollGroupDetailField(overlay.editingFieldId);
        if (!field) {
          showToast("项不存在");
          return;
        }
        const nextRow = {
          ...field,
          sectionKey: overlay.sectionKey,
          name,
          entryMode: overlay.mode,
          itemType: overlay.sectionKey === "info" ? overlay.itemType : null,
          formulaConfig: overlay.formulaConfig,
          formulaDescription: overlay.formulaDescription,
          sourceApp: overlay.sourceApp,
          sourceForm: overlay.sourceForm,
          sourceField: overlay.sourceField,
          matchField: overlay.matchField,
          sourceType: isCustomExternalSource ? "custom_external" : overlay.itemType === "other-application" ? "system_fixed" : "",
          customExternalConfig,
          customExternalUrl: isCustomExternalSource ? overlay.customExternalUrl : "",
          customExternalAuthType: isCustomExternalSource ? overlay.customExternalAuthType : "none",
          customExternalAuthValue: isCustomExternalSource ? overlay.customExternalAuthValue : "",
          customExternalFields: isCustomExternalSource ? overlay.customExternalFields : [],
          customExternalFieldPath: isCustomExternalSource ? primaryCustomExternalMapping.field.path : "",
          customExternalFieldType: isCustomExternalSource ? primaryCustomExternalMapping.field.fieldType : "",
          customExternalMappingField: isCustomExternalSource ? primaryCustomExternalMapping.mapping.key : "",
          customExternalMappings: isCustomExternalSource ? overlay.customExternalMappings : {},
          defaultText: overlay.defaultText,
          defaultNumber: overlay.defaultNumber,
        };
        nextFieldRows = nextFieldRows.map((item) => (item.id === field.id ? nextRow : item));
      } else {
        const currentApprover = getCurrentApprover();
        const nextRow = {
          id: createRuntimeId("payroll-field"),
          sectionKey: overlay.sectionKey,
          name,
          status: "enabled",
          creatorId: currentApprover.id,
          creator: currentApprover.label,
          entryMode: overlay.mode,
          itemType: overlay.sectionKey === "info" ? overlay.itemType : null,
          formulaConfig: overlay.formulaConfig,
          formulaDescription: overlay.formulaDescription,
          sourceApp: overlay.sourceApp,
          sourceForm: overlay.sourceForm,
          sourceField: overlay.sourceField,
          matchField: overlay.matchField,
          sourceType: isCustomExternalSource ? "custom_external" : overlay.itemType === "other-application" ? "system_fixed" : "",
          customExternalConfig,
          customExternalUrl: isCustomExternalSource ? overlay.customExternalUrl : "",
          customExternalAuthType: isCustomExternalSource ? overlay.customExternalAuthType : "none",
          customExternalAuthValue: isCustomExternalSource ? overlay.customExternalAuthValue : "",
          customExternalFields: isCustomExternalSource ? overlay.customExternalFields : [],
          customExternalFieldPath: isCustomExternalSource ? primaryCustomExternalMapping.field.path : "",
          customExternalFieldType: isCustomExternalSource ? primaryCustomExternalMapping.field.fieldType : "",
          customExternalMappingField: isCustomExternalSource ? primaryCustomExternalMapping.mapping.key : "",
          customExternalMappings: isCustomExternalSource ? overlay.customExternalMappings : {},
          defaultText: overlay.defaultText,
          defaultNumber: overlay.defaultNumber,
        };
        nextFieldRows = [nextRow, ...nextFieldRows];
      }
      setPayrollGroupDetailState({
        ...getPayrollGroupDetailState(),
        fieldRows: nextFieldRows,
        page: 1,
      });
      closeTransientPanels();
      state.overlay = null;
      showToast(`${isEditMode ? "已编辑" : "已创建"}「${name}」`);
      syncPayrollGroupPage();
      syncOverlayInPlace();
      persistState();
      return;
    }
    case "edit-payroll-group-detail-field": {
      const field = getPayrollGroupDetailField(value);
      setRowMenuOpenState(null);
      if (!field) {
        showToast("项不存在");
        return;
      }
      closeTransientPanels();
      state.overlay = buildPayrollGroupFieldEditOverlay(field);
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      return;
    }
    case "toggle-payroll-group-detail-field-status": {
      const field = getPayrollGroupDetailField(value);
      setRowMenuOpenState(null);
      if (!field) {
        showToast("项不存在");
        return;
      }
      if (field.isSystemDefault) {
        showToast("系统默认项不可停用");
        return;
      }
      const nextStatus = field.status === "enabled" ? "disabled" : "enabled";
      const nextFieldRows = getPayrollGroupDetailFieldRows().map((item) =>
        item.id === field.id ? { ...item, status: nextStatus } : item
      );
      setPayrollGroupDetailState({
        ...getPayrollGroupDetailState(),
        fieldRows: nextFieldRows,
      });
      showToast(`「${field.name}」${nextStatus === "disabled" ? "已停用" : "已启用"}`);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "delete-payroll-group-detail-field": {
      const field = getPayrollGroupDetailField(value);
      setRowMenuOpenState(null);
      if (!field) {
        showToast("项不存在");
        return;
      }
      if (field.isSystemDefault) {
        showToast("系统默认项不可删除");
        return;
      }
      const nextFieldRows = getPayrollGroupDetailFieldRows().filter((item) => item.id !== field.id);
      setPayrollGroupDetailState({
        ...getPayrollGroupDetailState(),
        fieldRows: nextFieldRows,
      });
      showToast(`「${field.name}」已删除`);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "toggle-row-menu": {
      const nextMenuId = String(value || "");
      setDropdownOpenState(null);
      setRowMenuOpenState(state.openRowMenu === nextMenuId ? null : nextMenuId);
      if (isPayrollGroupPageMenuId(nextMenuId) && syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "copy-payroll-group": {
      const row = getPayrollGroupSettingsRow(value);
      if (!row) {
        return;
      }
      setDropdownOpenState(null);
      setRowMenuOpenState(null);
      state.overlay = buildPayrollGroupCopyOverlay(row);
      syncPayrollGroupSwitchControl();
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    }
    case "delete-payroll-group": {
      const row = getPayrollGroupSettingsRow(value);
      if (!row) {
        return;
      }
      setDropdownOpenState(null);
      setRowMenuOpenState(null);
      state.overlay = buildPayrollGroupDeleteOverlay(row);
      syncPayrollGroupSwitchControl();
      if (syncOverlayInPlace()) {
        persistState();
        return;
      }
      break;
    }
    case "payroll-group-page-prev":
      setPayrollGroupSettingsPage(Math.max(1, state.payrollGroupSettings.page - 1));
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    case "payroll-group-page-next": {
      const totalPages = getPayrollGroupSettingsPagedRows(getFilteredPayrollGroupSettingsRows()).totalPages;
      setPayrollGroupSettingsPage(Math.min(totalPages, state.payrollGroupSettings.page + 1));
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-page-size":
      state.pageSize = Number(value);
      resetPayrollGroupSettingsPaging();
      setDropdownOpenState(null);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    case "set-payroll-group-creator-filter":
      state.payrollGroupSettings.creator = isValidPayrollGroupCreator(value, getPayrollGroupSettingsRows())
        ? value
        : "all";
      resetPayrollGroupSettingsPaging();
      setDropdownOpenState(null);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    case "payroll-group-detail-page-prev": {
      const detail = getPayrollGroupDetailState();
      setPayrollGroupDetailState({
        ...detail,
        page: Math.max(1, detail.page - 1),
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "payroll-group-detail-page-next": {
      const detail = getPayrollGroupDetailState();
      const totalPages = getPayrollGroupDetailPagedFields(getFilteredPayrollGroupDetailFields()).totalPages;
      setPayrollGroupDetailState({
        ...detail,
        page: Math.min(totalPages, detail.page + 1),
      });
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-detail-page-size":
      state.pageSize = Number(value);
      resetPayrollGroupDetailPaging();
      setDropdownOpenState(null);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    case "set-payroll-group-detail-status-filter": {
      const detail = getPayrollGroupDetailState();
      setPayrollGroupDetailState({
        ...detail,
        status: PAYROLL_GROUP_DETAIL_STATUS_OPTIONS.some((item) => item.key === value) ? value : "all",
        page: 1,
      });
      setDropdownOpenState(null);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-detail-creator-filter": {
      const detail = getPayrollGroupDetailState();
      const creatorOptions = getPayrollGroupDetailCreatorOptions();
      setPayrollGroupDetailState({
        ...detail,
        creator: creatorOptions.some((item) => item.key === value) ? value : "all",
        page: 1,
      });
      setDropdownOpenState(null);
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      break;
    }
    case "set-payroll-group-field-create-source-app":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          sourceApp: value || "",
          sourceForm: "",
          sourceField: "",
          matchField: "",
          customExternalFetchStatus: "idle",
          customExternalFetchError: "",
          customExternalRequestId: "",
          customExternalFields: [],
          customExternalFieldPath: "",
          customExternalFieldType: "",
          customExternalMappingField: "",
          customExternalMappings: {},
        });
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "set-payroll-group-field-create-custom-auth-type":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          customExternalAuthType: value || "none",
          customExternalFetchStatus: "idle",
          customExternalFetchError: "",
          customExternalRequestId: "",
          customExternalFields: [],
          customExternalFieldPath: "",
          customExternalFieldType: "",
          customExternalMappingField: "",
          customExternalMappings: {},
        });
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "toggle-payroll-group-field-create-custom-auth-visible":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          customExternalAuthValueVisible: !state.overlay.customExternalAuthValueVisible,
        });
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "fetch-payroll-group-field-create-custom-fields": {
      if (state.overlay?.type !== "payroll-group-field-create") {
        return;
      }
      const overlay = normalizePayrollGroupDetailFieldCreateOverlay(state.overlay);
      if (!isPayrollGroupDetailCustomExternalUrlValid(overlay.customExternalUrl)) {
        showToast("请输入有效的请求地址");
        return;
      }
      if (
        isPayrollGroupDetailCustomExternalAuthValueRequired(overlay.customExternalAuthType) &&
        !overlay.customExternalAuthValue.trim()
      ) {
        showToast("请输入鉴权值");
        return;
      }
      state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
        ...overlay,
        customExternalFetchStatus: "success",
        customExternalFetchError: "",
        customExternalRequestId: "",
        customExternalFields: getPayrollGroupDetailCustomExternalMockFields(),
        customExternalFieldPath: "",
        customExternalFieldType: "",
        customExternalMappingField: "",
        customExternalMappings: {},
      });
      if (syncOverlayInPlace()) {
        persistState();
        return;
      } else {
        render();
      }
      return;
    }
    case "set-payroll-group-field-create-custom-field":
      if (state.overlay?.type === "payroll-group-field-create") {
        const [fieldPath, mappingKey] = String(value || "").split("|||");
        const fields = normalizePayrollGroupDetailCustomExternalFields(state.overlay.customExternalFields);
        const selectedField = getPayrollGroupDetailCustomExternalFieldByPath(fields, fieldPath);
        const selectedMapping = getPayrollGroupDetailCustomExternalMappingOption(mappingKey);
        const allowedMappings = getPayrollGroupDetailCustomExternalMappingOptionsForField(selectedField);
        if (
          !selectedField ||
          !selectedMapping ||
          !canSelectPayrollGroupDetailCustomExternalField(state.overlay.sectionKey, selectedField) ||
          !allowedMappings.some((option) => option.key === selectedMapping.key)
        ) {
          return;
        }
        const customExternalMappings = {
          ...(state.overlay.customExternalMappings || {}),
          [selectedField.path]: selectedMapping.key,
        };
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          customExternalFieldPath: selectedField.path,
          customExternalFieldType: selectedField.fieldType,
          customExternalMappingField: selectedMapping.key,
          customExternalMappings,
        });
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "set-payroll-group-field-create-source-form":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = {
          ...state.overlay,
          sourceForm: value || "",
          sourceField: "",
          matchField: "",
        };
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "set-payroll-group-field-create-source-field":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = {
          ...state.overlay,
          sourceField: value || "",
          matchField: "",
        };
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "set-payroll-group-field-create-match-field":
      if (state.overlay?.type === "payroll-group-field-create") {
        state.overlay = {
          ...state.overlay,
          matchField: value || "",
        };
        setDropdownOpenState(null);
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      break;
    case "dismiss-guide":
      dismissGoalManagementGuide();
      break;
    case "request-demo-reset":
      state.overlay = buildResetDemoConfirmOverlay(1);
      closeTransientPanels();
      break;
    case "toggle-dropdown": {
      toggleDropdownOpenState(value);
      setRowMenuOpenState(null);
      if (
        state.overlay?.type === "start-goal" &&
        (value === "start-goal-period" || value === "start-goal-group")
      ) {
        syncStartGoalModal();
        return;
      }
      if (
        state.overlay?.type === "payroll-group-field-create" &&
        String(value || "").startsWith("payroll-group-field-create-")
      ) {
        if (syncOverlayInPlace()) {
          persistState();
          return;
        }
      }
      if (isPayrollGroupDropdownKey(value) && syncPayrollGroupPage()) {
        persistState();
        return;
      }
    }
      break;
    case "toggle-my-goal-dropdown":
      toggleDropdownOpenState(value);
      setRowMenuOpenState(null);
      break;
    case "set-my-goal-tab":
      queueTabIndicatorTransition("my-goals", state.myGoals.activeTab, value);
      state.myGoals.activeTab = value;
      refreshCurrentPageTableState("my-goals");
      closeTransientPanels();
      state.overlay = null;
      break;
    case "set-goal-config-tab":
      queueTabIndicatorTransition("goal-config", state.goalConfig.activeTab, value === "process" ? "process" : "library");
      state.goalConfig.activeTab = value === "process" ? "process" : "library";
      refreshCurrentPageTableState("goal-config");
      closeTransientPanels();
      clearGoalConfigEditing();
      cancelGoalConfigProcessEditing();
      state.overlay = null;
      if (isConfigPrepGuideStep(2) && state.goalConfig.activeTab === "process") {
        advanceConfigPrepGuide(3);
      } else if (isConfigPrepGuideStep(5) && state.goalConfig.activeTab === "library") {
        advanceConfigPrepGuide(6);
      }
      break;
    case "goal-config-select-group":
      state.goalConfig.selectedGroupId = value;
      cancelGoalConfigGroupEditing();
      clearGoalConfigPanels();
      setDropdownOpenState(null);
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
      toggleDropdownOpenState(value);
      clearGoalConfigPanels();
      setRowMenuOpenState(null);
      if (
        state.overlay?.type === "goal-config-transfer" &&
        (value === "goal-config-transfer-goal" || value === "goal-config-transfer-group")
      ) {
        syncGoalConfigTransferModal();
        return;
      }
      break;
    case "set-goal-config-type-filter":
      state.goalConfig.type = GOAL_CONFIG_TYPE_OPTIONS.some((option) => option.key === value) ? value : "all";
      setDropdownOpenState(null);
      clearGoalConfigEditing();
      break;
    case "goal-config-toggle-card-menu":
      setGoalConfigCardMenuId(state.goalConfig.cardMenuId === value ? null : value);
      setGoalConfigGroupMenuId(null);
      setDropdownOpenState(null);
      break;
    case "goal-config-toggle-group-menu":
      setGoalConfigGroupMenuId(state.goalConfig.groupMenuId === value ? null : value);
      setGoalConfigCardMenuId(null);
      setDropdownOpenState(null);
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
      setDropdownOpenState(null);
      if (isConfigPrepGuideStep(8)) {
        advanceConfigPrepGuide(9);
      }
      break;
    }
    case "goal-config-import": {
      const draft = createGoalConfigTestingDraft({
        id: `goal-config-import-${Date.now()}`,
        groupId: resolveGoalConfigTargetGroupId(),
        createdAt: new Date().toISOString(),
      });
      state.goalConfig.editingGoalId = draft.id;
      state.goalConfig.editingDraft = draft;
      clearGoalConfigPanels();
      setDropdownOpenState(null);
      showToast("已载入导入模板，可继续编辑");
      break;
    }
    case "goal-config-ai-template": {
      const draft = createGoalConfigTestingDraft({
        id: `goal-config-ai-${Date.now()}`,
        groupId: resolveGoalConfigTargetGroupId(),
        createdAt: new Date().toISOString(),
      });
      state.goalConfig.editingGoalId = draft.id;
      state.goalConfig.editingDraft = draft;
      clearGoalConfigPanels();
      setDropdownOpenState(null);
      showToast("已载入 AI 模板，可继续编辑");
      break;
    }
    case "goal-config-export":
      setDropdownOpenState(null);
      showToast("已模拟导出目标库");
      break;
    case "goal-config-save":
      if (saveGoalConfigDraft() && isConfigPrepGuideStep(11)) {
        closeConfigPrepGuide(true);
      }
      break;
    case "goal-config-cancel":
      clearGoalConfigEditing();
      clearGoalConfigPanels();
      if (state.configPrepGuide && Number(state.configPrepGuide.step) >= 9) {
        setConfigPrepGuideStep(8);
      }
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
        const targetGoal = value ? getGoalConfigGoal(value) : null;
        if (value && isGoalConfigMutualAlignBlocked(state.goalConfig.editingDraft, targetGoal)) {
          showToast("所选目标已对齐当前目标，不能互相对齐");
          setDropdownOpenState(null);
          break;
        }
        state.goalConfig.editingDraft = normalizeGoalConfigDraft({
          ...state.goalConfig.editingDraft,
          alignedGoalId: value || "",
        });
        setDropdownOpenState(null);
      }
      break;
    case "set-goal-config-draft-flow":
      if (state.goalConfig.editingDraft) {
        state.goalConfig.editingDraft = normalizeGoalConfigDraft({
          ...state.goalConfig.editingDraft,
          flowProcessId: value || "",
        });
        setDropdownOpenState(null);
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
        if (isConfigPrepGuideStep(10) && state.goalConfig.editingDraft.executors.length) {
          setDropdownOpenState(null);
          advanceConfigPrepGuide(11);
        }
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
    case "goal-config-transfer": {
      const overlay = buildGoalConfigTransferOverlay(value);
      clearGoalConfigPanels();
      setDropdownOpenState(null);
      if (!overlay || !overlay.targetGroupId) {
        showToast("暂无可转移的分组");
        break;
      }
      state.overlay = overlay;
      break;
    }
    case "goal-config-transfer-group-goal": {
      const overlay = buildGoalConfigGroupTransferOverlay(value);
      clearGoalConfigPanels();
      setDropdownOpenState(null);
      if (!overlay || !overlay.targetGroupId) {
        showToast("当前分组暂无可转移目标");
        break;
      }
      state.overlay = overlay;
      break;
    }
    case "goal-config-delete":
      state.overlay = buildGoalConfigConfirmOverlay("goal", { goalIds: [value] });
      clearGoalConfigPanels();
      break;
    case "toggle-goal-config-transfer-goal":
      if (state.overlay && state.overlay.type === "goal-config-transfer") {
        const nextGoalIds = new Set(Array.isArray(state.overlay.goalIds) ? state.overlay.goalIds : []);
        if (nextGoalIds.has(value)) {
          nextGoalIds.delete(value);
        } else {
          nextGoalIds.add(value);
        }
        state.overlay = {
          ...state.overlay,
          goalIds: [...nextGoalIds],
        };
        syncGoalConfigTransferModal();
        return;
      }
      break;
    case "set-goal-config-transfer-group":
      if (state.overlay && state.overlay.type === "goal-config-transfer") {
        state.overlay = { ...state.overlay, targetGroupId: value };
        setDropdownOpenState(null);
        syncGoalConfigTransferModal();
        return;
      }
      break;
    case "confirm-goal-config-transfer":
      confirmGoalConfigTransfer();
      break;
    case "goal-config-add-group":
      createGoalConfigGroup(null);
      if (isConfigPrepGuideStep(6)) {
        advanceConfigPrepGuide(7);
      }
      break;
    case "goal-config-add-child-group":
      createGoalConfigGroup(value);
      break;
    case "goal-config-rename-group":
      beginGoalConfigGroupEditing(value);
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
      setDropdownOpenState(null);
      if (isConfigPrepGuideStep(3)) {
        advanceConfigPrepGuide(4);
      }
      break;
    case "confirm-goal-config-process-create":
      if (state.overlay && state.overlay.type === "goal-config-process-create") {
        const processName = normalizeProcessName(state.overlay.processName);
        const currentApprover = getCurrentApprover();
        if (!processName) {
          showToast("请输入流程名称");
          break;
        }
        if (isGoalConfigProcessNameTaken(processName)) {
          showToast("流程名称已存在");
          break;
        }
        state.goalConfigProcesses = [
          {
            id: createRuntimeId("goal-process"),
            name: processName,
            creatorId: currentApprover.id,
            creator: currentApprover.label,
            updatedAt: formatDateOnly(),
            isDefault: false,
          },
          ...state.goalConfigProcesses,
        ];
        state.goalConfig.processKeyword = "";
        setGoalConfigProcessPage(1);
        state.overlay = null;
        showToast("已创建流程，并模拟生成两个 OA 模板");
        if (isConfigPrepGuideStep(4)) {
          advanceConfigPrepGuide(5);
        }
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
      setGoalConfigProcessMenuId(state.goalConfig.processMenuId === value ? null : value);
      setDropdownOpenState(null);
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
        setGoalConfigProcessMenuId(null);
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
      setDropdownOpenState(null);
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
    case "toggle-my-goal-select-row":
      if (selectedPendingIds.includes(value)) {
        setMyGoalSelection(selectedPendingIds.filter((id) => id !== value), "pending");
      } else {
        setMyGoalSelection([...selectedPendingIds, value], "pending");
      }
      break;
    case "toggle-my-goal-select-all": {
      const pageIds = pendingPageGoals.map((goal) => goal.id);
      const everySelected = pageIds.length > 0 && pageIds.every((id) => selectedPendingIds.includes(id));
      if (everySelected) {
        setMyGoalSelection(selectedPendingIds.filter((id) => !pageIds.includes(id)), "pending");
      } else {
        const merged = new Set([...selectedPendingIds, ...pageIds]);
        setMyGoalSelection([...merged], "pending");
      }
      break;
    }
    case "approve-my-goal-batch":
      if (selectedPendingIds.length) {
        const { ratingCount, confirmingCount, confirmingIds } = getPendingSelectionStageMeta(selectedPendingIds);
        if (ratingCount && confirmingCount) {
          applyPendingApproval(
            confirmingIds,
            `所选记录中有 ${ratingCount} 条评分中目标仍需填写内容，未执行批量通过；其他 ${confirmingCount} 条审批已通过。`
          );
        } else if (ratingCount) {
          showToast(`所选 ${ratingCount} 条记录均处于评分中，仍有内容待填写，暂不支持批量通过。`);
        } else {
          state.overlay = buildMyGoalPendingConfirmOverlay("approve", [...selectedPendingIds]);
        }
      }
      break;
    case "reject-my-goal-batch":
      if (selectedPendingIds.length) {
        state.overlay = buildMyGoalPendingConfirmOverlay("reject", [...selectedPendingIds]);
      }
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
      setDropdownOpenState(null);
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
      clearClosingDropdown("members");
      openingDropdownKeys.delete("members");
      state.openDropdown = "members";
      break;
    case "set-stage":
      state.filters.ongoing.stage = value;
      resetListState("ongoing");
      if (isLaunchAdvanceGuideStep(5) && value === "executing") {
        advanceConfigPrepGuide(6);
      }
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
      setDropdownOpenState(null);
      setRowMenuOpenState(state.openRowMenu === value ? null : value);
      break;
    case "view-goal":
      openGoalView(value, tabKey);
      break;
    case "request-advance":
      state.overlay = buildConfirmOverlay("advance", [value], tabKey);
      break;
    case "view-confirm-instance":
    case "view-rating-instance":
      openExternalPage(GOAL_INSTANCE_DETAIL_URL);
      break;
    case "request-delete":
      state.overlay = buildConfirmOverlay("delete", [value], tabKey);
      break;
    case "advance-all": {
      const shouldCompleteLaunchGuide = isLaunchAdvanceGuideStep(6);
      const advanceState = getAdvanceActionState(filteredGoals, tabKey);
      if (!advanceState.isExecutingStage) {
        state.filters.ongoing.stage = "executing";
        resetListState("ongoing");
        if (shouldCompleteLaunchGuide) {
          closeConfigPrepGuide(true);
        }
        break;
      }
      if (!advanceState.hasGoals) {
        showToast("当前没有可推进评分的目标");
        if (shouldCompleteLaunchGuide) {
          closeConfigPrepGuide(true);
        }
        break;
      }
      if (advanceState.canAdvance) {
        state.overlay = buildConfirmOverlay(
          "advance",
          filteredGoals.filter((goal) => goal.stage === "executing").map((goal) => goal.id),
          tabKey
        );
      }
      if (shouldCompleteLaunchGuide) {
        closeConfigPrepGuide(true);
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
      setDropdownOpenState(null);
      if (isLaunchAdvanceGuideStep(2)) {
        advanceConfigPrepGuide(3);
      }
      break;
    case "set-start-goal-period":
      if (state.overlay && state.overlay.type === "start-goal") {
        state.overlay = { ...state.overlay, period: value };
        setDropdownOpenState(null);
        syncStartGoalModal();
        return;
      }
      break;
    case "set-start-goal-group":
      if (state.overlay && state.overlay.type === "start-goal") {
        state.overlay = { ...state.overlay, groupId: value };
        setDropdownOpenState(null);
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
        const willSelect = !next.has(value);
        if (next.has(value)) {
          next.delete(value);
        } else {
          next.add(value);
        }
        state.overlay = { ...state.overlay, selectedIds: [...next] };
        if (isLaunchAdvanceGuideStep(3) && willSelect) {
          advanceConfigPrepGuide(4);
          render();
          return;
        }
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
      setDropdownOpenState(null);
      break;
    case "set-tab":
      queueTabIndicatorTransition("goal-management", state.activeTab, value === "completed" ? "completed" : "ongoing");
      state.activeTab = value === "completed" ? "completed" : "ongoing";
      refreshCurrentPageTableState("goal-management");
      closeTransientPanels();
      state.overlay = null;
      break;
    case "close-overlay": {
      if (state.overlay?.type === "payroll-group-field-create" && state.overlay.formulaEditor?.open) {
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          formulaEditor: createPayrollGroupDetailFormulaEditorState(state.overlay, {
            open: false,
          }),
        });
        if (syncOverlayInPlace()) {
          return;
        }
        break;
      }
      const wasPayrollGroupOverlay =
        state.overlay?.type === "payroll-group-create" ||
        state.overlay?.type === "payroll-group-field-create" ||
        (state.overlay?.type === "confirm" && state.overlay.scope === "payroll-group");
      if (isConfigPrepGuideStep(4) && state.overlay?.type === "goal-config-process-create") {
        setConfigPrepGuideStep(3);
      }
      if ((isLaunchAdvanceGuideStep(3) || isLaunchAdvanceGuideStep(4)) && state.overlay?.type === "start-goal") {
        setConfigPrepGuideStep(2);
      }
      closeTransientPanels();
      state.overlay = null;
      if (wasPayrollGroupOverlay) {
        syncPayrollGroupPage();
        syncOverlayInPlace();
        persistState();
        return;
      }
      break;
    }
    case "collapse-nav":
      animateSidebarCollapse(target);
      return;
    default:
      break;
  }

  render();
}

document.addEventListener("click", (event) => {
  const immediateActionTarget = event.target.closest("[data-action]");
  if (
    immediateActionTarget &&
    ["start-config-prep-guide", "start-launch-advance-guide", "close-config-prep-guide"].includes(
      immediateActionTarget.dataset.action
    )
  ) {
    onAction(immediateActionTarget.dataset.action, immediateActionTarget.dataset.value, immediateActionTarget);
    return;
  }

  const inlineEditResult = commitGoalConfigInlineEditingOnClick(event);
  if (inlineEditResult.blocked) {
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    onAction(actionTarget.dataset.action, actionTarget.dataset.value, actionTarget);
    return;
  }

  if (!event.target.closest(".dropdown-panel") && !event.target.closest(".control") && state.openDropdown) {
    const previousDropdown = state.openDropdown;
    setDropdownOpenState(null);
    if (state.overlay?.type === "goal-config-transfer") {
      syncGoalConfigTransferModal();
      return;
    }
    if (state.overlay?.type === "payroll-group-field-create" && syncOverlayInPlace()) {
      persistState();
      return;
    }
    if (isPayrollGroupDropdownKey(previousDropdown) && syncPayrollGroupPage()) {
      persistState();
      return;
    }
    render();
    return;
  }

  if (!event.target.closest(".row-menu") && !event.target.closest(".row-menu-trigger") && state.openRowMenu) {
    const previousRowMenu = state.openRowMenu;
    setRowMenuOpenState(null);
    if (isPayrollGroupPageMenuId(previousRowMenu) && syncPayrollGroupPage()) {
      persistState();
      return;
    }
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
    return;
  }

  if (inlineEditResult.committed) {
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
  if (event.target.dataset.field === "payroll-group-keyword") {
    state.payrollGroupSettings.keyword = event.target.value;
    resetPayrollGroupSettingsPaging();
    if (!deferRender) {
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "payroll-group-detail-item-keyword") {
    const detail = getPayrollGroupDetailState();
    setPayrollGroupDetailState({
      ...detail,
      itemKeyword: event.target.value,
    });
    if (!deferRender) {
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "payroll-group-detail-field-keyword") {
    const detail = getPayrollGroupDetailState();
    setPayrollGroupDetailState({
      ...detail,
      fieldKeyword: event.target.value,
      page: 1,
    });
    if (!deferRender) {
      if (syncPayrollGroupPage()) {
        persistState();
        return;
      }
      render(preserveFocus);
    }
  }
  if (event.target.dataset.field === "payroll-group-rule-fixed-days") {
    const detail = getPayrollGroupDetailState();
    const nextRuleSettings = setPayrollGroupRuleDraftForRow(detail.rowId, {
      ...detail.ruleSettings,
      fixedDays: event.target.value,
    });
    setPayrollGroupDetailState({
      ...detail,
      ruleSettings: nextRuleSettings,
    });
    persistState();
    return;
  }
  if (event.target.dataset.field === "payroll-group-rule-daily-attendance-hours") {
    const detail = getPayrollGroupDetailState();
    const nextRuleSettings = setPayrollGroupRuleDraftForRow(detail.rowId, {
      ...detail.ruleSettings,
      dailyAttendanceHours: event.target.value,
    });
    setPayrollGroupDetailState({
      ...detail,
      ruleSettings: nextRuleSettings,
    });
    persistState();
    return;
  }
  if (event.target.dataset.field === "payroll-group-rule-month-day") {
    const monthIndex = Number(event.target.dataset.monthIndex);
    if (!Number.isInteger(monthIndex) || monthIndex < 0 || monthIndex >= PAYROLL_GROUP_RULE_MONTH_OPTIONS.length) {
      return;
    }
    const detail = getPayrollGroupDetailState();
    const nextMonthlyDays = [...getPayrollGroupRuleSettings().monthlyDays];
    nextMonthlyDays[monthIndex] = event.target.value;
    const nextRuleSettings = setPayrollGroupRuleDraftForRow(detail.rowId, {
      ...detail.ruleSettings,
      monthlyDays: nextMonthlyDays,
    });
    setPayrollGroupDetailState({
      ...detail,
      ruleSettings: nextRuleSettings,
    });
    persistState();
    return;
  }
  if (event.target.dataset.field === "payroll-group-create-name" && state.overlay?.type === "payroll-group-create") {
    state.overlay = {
      ...state.overlay,
      groupName: event.target.value,
    };
    return;
  }
  if (event.target.dataset.field === "payroll-group-field-create-name" && state.overlay?.type === "payroll-group-field-create") {
    state.overlay = {
      ...state.overlay,
      name: event.target.value,
    };
    return;
  }
  if (
    event.target.dataset.field === "payroll-group-field-create-default-text" &&
    state.overlay?.type === "payroll-group-field-create"
  ) {
    state.overlay = {
      ...state.overlay,
      defaultText: event.target.value,
    };
    return;
  }
  if (
    event.target.dataset.field === "payroll-group-field-create-default-number" &&
    state.overlay?.type === "payroll-group-field-create"
  ) {
    state.overlay = {
      ...state.overlay,
      defaultNumber: event.target.value,
    };
    return;
  }
  if (
    event.target.dataset.field === "payroll-group-field-create-custom-url" &&
    state.overlay?.type === "payroll-group-field-create"
  ) {
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      customExternalUrl: event.target.value,
      customExternalFetchStatus: "idle",
      customExternalFetchError: "",
      customExternalRequestId: "",
      customExternalFields: [],
      customExternalFieldPath: "",
      customExternalFieldType: "",
      customExternalMappingField: "",
      customExternalMappings: {},
    });
    if (!deferRender) {
      syncOverlayInPlace();
    }
    return;
  }
  if (
    event.target.dataset.field === "payroll-group-field-create-custom-auth-value" &&
    state.overlay?.type === "payroll-group-field-create"
  ) {
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      customExternalAuthValue: event.target.value,
      customExternalFetchStatus: "idle",
      customExternalFetchError: "",
      customExternalRequestId: "",
      customExternalFields: [],
      customExternalFieldPath: "",
      customExternalFieldType: "",
      customExternalMappingField: "",
      customExternalMappings: {},
    });
    if (!deferRender) {
      syncOverlayInPlace();
    }
    return;
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
    return;
  }
  if (event.target.dataset.field === "goal-config-group-name") {
    state.goalConfig.editingGroupName = event.target.value;
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

document.addEventListener("input", (event) => {
  if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
    return;
  }

  if (event.target instanceof HTMLTextAreaElement && event.target.dataset.field === "payroll-group-field-formula-editor-input") {
    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      formulaEditor: {
        ...formulaEditor,
        open: true,
        draftFormula: event.target.value,
        selectionStart: event.target.selectionStart,
        selectionEnd: event.target.selectionEnd,
        scrollTop: event.target.scrollTop,
        scrollLeft: event.target.scrollLeft,
      },
    });
    syncPayrollGroupFormulaEditorPresentation(event.target);
    return;
  }

  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  const preserveFocus = getInputPreserveFocus(event.target);
  const deferRender = shouldDeferInputRender(event);
  if (event.target.dataset.field === "payroll-group-field-formula-editor-description") {
    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      formulaEditor: {
        ...formulaEditor,
        open: true,
        draftDescription: event.target.value,
      },
    });
    return;
  }

  if (event.target.dataset.field === "payroll-group-field-formula-editor-field-search") {
    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      formulaEditor: {
        ...formulaEditor,
        open: true,
        fieldKeyword: event.target.value,
      },
    });
    if (deferRender) {
      return;
    }
    syncOverlayInPlace();
    if (!preserveFocus?.selector) {
      return;
    }
    const nextInput = document.querySelector(preserveFocus.selector);
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
      if (typeof preserveFocus?.start === "number" && typeof preserveFocus?.end === "number") {
        nextInput.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
    return;
  }

  if (event.target.dataset.field === "payroll-group-field-formula-editor-function-search") {
    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      formulaEditor: {
        ...formulaEditor,
        open: true,
        functionKeyword: event.target.value,
      },
    });
    if (deferRender) {
      return;
    }
    syncOverlayInPlace();
    if (!preserveFocus?.selector) {
      return;
    }
    const nextInput = document.querySelector(preserveFocus.selector);
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
      if (typeof preserveFocus?.start === "number" && typeof preserveFocus?.end === "number") {
        nextInput.setSelectionRange(preserveFocus.start, preserveFocus.end);
      }
    }
  }
});

document.addEventListener("selectionchange", () => {
  if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
    return;
  }

  const activeElement = document.activeElement;
  if (
    !(activeElement instanceof HTMLTextAreaElement) ||
    activeElement.dataset.field !== "payroll-group-field-formula-editor-input"
  ) {
    return;
  }

  const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
  state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
    ...state.overlay,
    formulaEditor: {
      ...formulaEditor,
      open: true,
      selectionStart: activeElement.selectionStart,
      selectionEnd: activeElement.selectionEnd,
    },
  });
});

document.addEventListener(
  "scroll",
  (event) => {
    if (!state.overlay || state.overlay.type !== "payroll-group-field-create") {
      return;
    }

    if (!(event.target instanceof HTMLTextAreaElement) || event.target.dataset.field !== "payroll-group-field-formula-editor-input") {
      return;
    }

    const formulaEditor = normalizePayrollGroupDetailFormulaEditorState(state.overlay.formulaEditor, state.overlay);
    state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
      ...state.overlay,
      formulaEditor: {
        ...formulaEditor,
        open: true,
        scrollTop: event.target.scrollTop,
        scrollLeft: event.target.scrollLeft,
      },
    });
    syncPayrollGroupFormulaEditorPresentation(event.target);
  },
  true
);

document.addEventListener("focusout", (event) => {
  if (!isConfigPrepGuideStep(9) || !isConfigPrepGuideDraftFocusField(event.target)) {
    return;
  }

  window.requestAnimationFrame(() => {
    if (!isConfigPrepGuideStep(9)) {
      return;
    }

    if (isConfigPrepGuideDraftFocusField(document.activeElement)) {
      return;
    }

    if (!isConfigPrepGuideGoalDraftReady()) {
      return;
    }

    advanceConfigPrepGuide(10);
    render();
  });
});

document.addEventListener("keydown", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  if (event.target.dataset.field === "goal-config-process-name" && event.target.dataset.processId) {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      const preserveFocus = getInputPreserveFocus(event.target);
      if (saveGoalConfigProcessName(event.target.dataset.processId)) {
        render();
      } else {
        render(preserveFocus);
      }
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
      if (isConfigPrepGuideStep(4)) {
        setConfigPrepGuideStep(3);
      }
      closeTransientPanels();
      state.overlay = null;
      render();
    }
  }
  if (event.target.dataset.field === "payroll-group-create-name" && state.overlay?.type === "payroll-group-create") {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      onAction("confirm-payroll-group-create", "");
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeTransientPanels();
      state.overlay = null;
      render();
    }
  }
  if (event.target.dataset.field === "payroll-group-field-create-name" && state.overlay?.type === "payroll-group-field-create") {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      onAction("confirm-payroll-group-field-create", "");
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeTransientPanels();
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
    if (event.target.dataset.field === "payroll-group-create-name" && state.overlay?.type === "payroll-group-create") {
      return;
    }
    if (
      [
        "payroll-group-field-create-name",
        "payroll-group-field-create-default-text",
        "payroll-group-field-create-default-number",
        "payroll-group-field-create-custom-url",
        "payroll-group-field-create-custom-auth-value",
      ].includes(event.target.dataset.field) &&
      state.overlay?.type === "payroll-group-field-create"
    ) {
      return;
    }
    if (
      event.target.dataset.field === "goal-config-create-process-name" &&
      state.overlay?.type === "goal-config-process-create"
    ) {
      return;
    }
    const preserveFocus = getInputPreserveFocus(event.target);
    if (
      ["payroll-group-keyword", "payroll-group-detail-item-keyword", "payroll-group-detail-field-keyword"].includes(
        event.target.dataset.field
      ) &&
      state.activePage === "company-info" &&
      syncPayrollGroupPage()
    ) {
      persistState();
      return;
    }
    if (preserveFocus) {
      render(preserveFocus);
    }
  }
});

function commitGoalConfigInlineEditingOnClick(event) {
  if (!(event.target instanceof Element)) {
    return { blocked: false, committed: false };
  }

  let committed = false;

  if (state.goalConfig.editingGroupId) {
    const groupId = state.goalConfig.editingGroupId;
    const selector = `[data-field="goal-config-group-name"][data-group-id="${groupId}"]`;
    if (!event.target.closest(selector)) {
      const input = document.querySelector(selector);
      const preserveFocus = input ? getInputPreserveFocus(input) : null;
      if (!saveGoalConfigGroupName(groupId)) {
        render(preserveFocus);
        return { blocked: true, committed: false };
      }
      committed = true;
    }
  }

  if (state.goalConfig.processEditingId) {
    const processId = state.goalConfig.processEditingId;
    const selector = `[data-field="goal-config-process-name"][data-process-id="${processId}"]`;
    if (!event.target.closest(selector)) {
      const input = document.querySelector(selector);
      const preserveFocus = input ? getInputPreserveFocus(input) : null;
      if (!saveGoalConfigProcessName(processId)) {
        render(preserveFocus);
        return { blocked: true, committed };
      }
      committed = true;
    }
  }

  return { blocked: false, committed };
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.overlay) {
      if (state.overlay.type === "payroll-group-field-create" && state.overlay.formulaEditor?.open) {
        state.overlay = normalizePayrollGroupDetailFieldCreateOverlay({
          ...state.overlay,
          formulaEditor: createPayrollGroupDetailFormulaEditorState(state.overlay, {
            open: false,
          }),
        });
        if (syncOverlayInPlace()) {
          return;
        }
      }
      if (isConfigPrepGuideStep(4) && state.overlay.type === "goal-config-process-create") {
        setConfigPrepGuideStep(3);
      }
      if ((isLaunchAdvanceGuideStep(3) || isLaunchAdvanceGuideStep(4)) && state.overlay.type === "start-goal") {
        setConfigPrepGuideStep(2);
      }
      closeTransientPanels();
      state.overlay = null;
      render();
      return;
    }
  if (
    state.openDropdown ||
    state.openRowMenu ||
    state.goalConfig.cardMenuId ||
    state.goalConfig.groupMenuId ||
      state.goalConfig.editingGroupId ||
      state.goalConfig.processEditingId
    ) {
      const previousDropdown = state.openDropdown;
      const previousRowMenu = state.openRowMenu;
      closeTransientPanels();
      if (state.overlay?.type === "payroll-group-field-create" && syncOverlayInPlace()) {
        persistState();
        return;
      }
      if (isPayrollGroupDropdownKey(previousDropdown) && syncPayrollGroupPage()) {
        persistState();
        return;
      }
      if (isPayrollGroupPageMenuId(previousRowMenu) && syncPayrollGroupPage()) {
        persistState();
        return;
      }
      render();
    }
  }
  if (
    event.key === "Enter" &&
    event.target instanceof HTMLInputElement &&
    event.target.dataset.field === "goal-config-group-name" &&
    !event.isComposing
  ) {
    event.preventDefault();
    const preserveFocus = getInputPreserveFocus(event.target);
    if (saveGoalConfigGroupName(event.target.dataset.groupId)) {
      render();
    } else {
      render(preserveFocus);
    }
  }
});

window.addEventListener("resize", () => {
  if (state.configPrepGuide) {
    scheduleConfigPrepGuideSync();
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (state.configPrepGuide) {
      scheduleConfigPrepGuideSync();
    }
  },
  true
);

document.addEventListener("animationend", (event) => {
  if (!shouldSyncConfigPrepGuideAfterMotion(event.target)) {
    return;
  }

  scheduleConfigPrepGuideSync(true);
});

render();

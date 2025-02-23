//dashboardMenuListData import
import {
  CrmAnalytics,
  Orders,
  Cryptocurrency,
  CryptocurrencyV1,
  CryptocurrencyV2,
  Banking,
  BankingV1,
  BankingV2,
  Personal,
  CmsAnalytics,
  Influencer,
  Travel,
  Teacher,
  Education,
  Authors,
  Doctors,
  Employees,
  Workspaces,
  Meetings,
  ProjectBoards,
  WidgetUI,
  WidgetContacts,
} from "../pages/dashboard";

//applicationMenuListData import
import {
  AiChatApp,
  ChatApp,
  FileManager,
  ToDoApp,
  TravelApp,
  JobsBoard,
  KanbanBoard,
  MailApp,
  NftAppV1,
  NftAppV2,
  PosSystem,
} from "../pages/Applications";

const dashboardMenuListData = [
  {
    group: 1,
    menu: [
      {
        id: 1,
        title: "CRM Analytics",
        path: "crm-analytics",
        element: CrmAnalytics,
      },
      { id: 2, title: "Orders", path: "orders", element: Orders },
    ],
  },
  {
    group: 2,
    menu: [
      {
        id: 1,
        title: "Cryptocurrency",
        path: "cryptocurrency",
        element: Cryptocurrency,
        menuItems: [
          {
            id: 1,
            title: "Cryptocurrency v1",
            path: "cryptocurrency-v1",
            element: CryptocurrencyV1,
          },
          {
            id: 2,
            title: "Cryptocurrency v2",
            path: "cryptocurrency-v2",
            element: CryptocurrencyV2,
          },
        ],
      },
      {
        id: 2,
        title: "Banking",
        path: "banking",
        element: Banking,
        menuItems: [
          {
            id: 3,
            title: "Banking v1",
            path: "banking-v1",
            element: BankingV1,
          },
          {
            id: 4,
            title: "Banking v2",
            path: "banking-v2",
            element: BankingV2,
          },
        ],
      },
      { id: 3, title: "Personal", path: "personal", element: Personal },
      {
        id: 4,
        title: "CMS Analytics",
        path: "cms-analytics",
        element: CmsAnalytics,
      },
      { id: 5, title: "Influencer", path: "influencer", element: Influencer },
      { id: 6, title: "Travel", path: "travel", element: Travel },
      { id: 7, title: "Teacher", path: "teacher", element: Teacher },
      { id: 8, title: "Education", path: "education", element: Education },
      { id: 9, title: "Authors", path: "authors", element: Authors },
      { id: 10, title: "Doctors", path: "doctors", element: Doctors },
      { id: 11, title: "Employees", path: "employees", element: Employees },
      { id: 12, title: "Workspaces", path: "workspaces", element: Workspaces },
      { id: 13, title: "Meetings", path: "meetings", element: Meetings },
      {
        id: 14,
        title: "Project Boards",
        path: "project-boards",
        element: ProjectBoards,
      },
    ],
  },
  {
    group: 3,
    menu: [
      { id: 1, title: "Widget UI", path: "widget-ui", element: WidgetUI },
      {
        id: 2,
        title: "Widget Contacts",
        path: "widget-contacts",
        element: WidgetContacts,
      },
    ],
  },
];

const applicationMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Chat App", path: "chat-app", element: ChatApp },
      { id: 2, title: "AI Chat App", path: "ai-chat-app", element: AiChatApp },
      {
        id: 3,
        title: "Kanban Board",
        path: "kanban-board",
        element: KanbanBoard,
      },
      {
        id: 4,
        title: "File Manager",
        path: "file-manager",
        element: FileManager,
      },
      { id: 5, title: "Mail App", path: "mail-app", element: MailApp },
      { id: 6, title: "Todo App", path: "todo-app", element: ToDoApp },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 7, title: "NFT App v1", path: "nft-app-v1", element: NftAppV1 },
      { id: 8, title: "NFT App v2", path: "nft-app-v2", element: NftAppV2 },
      { id: 9, title: "POS System", path: "pos-system", element: PosSystem },
      { id: 10, title: "Jobs Board", path: "jobs-board", element: JobsBoard },
      { id: 11, title: "Travel App", path: "travel-app", element: TravelApp },
    ],
  },
];

const pagesAndLayoutsMenuListData = [
  {
    group: 1,
    menu: [
      {
        id: 1,
        title: "Onboarding",
        path: "onboarding",
        menuItems: [
          { id: 1, title: "Onboarding 1", path: "onboarding-1" },
          { id: 2, title: "Onboarding 2", path: "onboarding-2" },
        ],
      },
      {
        id: 2,
        title: "User Card",
        path: "user-card",
        menuItems: [
          { id: 1, title: "User Card 1", path: "user-card-1" },
          { id: 2, title: "User Card 2", path: "user-card-2" },
          { id: 3, title: "User Card 3", path: "user-card-3" },
          { id: 4, title: "User Card 4", path: "user-card-4" },
          { id: 5, title: "User Card 5", path: "user-card-5" },
          { id: 6, title: "User Card 6", path: "user-card-6" },
          { id: 7, title: "User Card 7", path: "user-card-7" },
        ],
      },
      {
        id: 3,
        title: "Blog Card",
        path: "blog-card",
        menuItems: [
          { id: 1, title: "Blog Card 1", path: "blog-card-1" },
          { id: 2, title: "Blog Card 2", path: "blog-card-2" },
          { id: 3, title: "Blog Card 3", path: "blog-card-3" },
          { id: 4, title: "Blog Card 4", path: "blog-card-4" },
          { id: 5, title: "Blog Card 5", path: "blog-card-5" },
          { id: 6, title: "Blog Card 6", path: "blog-card-6" },
          { id: 7, title: "Blog Card 7", path: "blog-card-7" },
          { id: 8, title: "Blog Card 8", path: "blog-card-8" },
          { id: 9, title: "Blog Detail", path: "blog-detail" },
        ],
      },
      {
        id: 4,
        title: "Help",
        path: "help",
        menuItems: [
          { id: 1, title: "Help 1", path: "help-1" },
          { id: 2, title: "Help 2", path: "help-2" },
          { id: 3, title: "Help 3", path: "help-3" },
        ],
      },
      {
        id: 5,
        title: "Price List",
        path: "price-list",
        menuItems: [
          { id: 1, title: "Price List 1", path: "price-list-1" },
          { id: 2, title: "Price List 2", path: "price-list-2" },
          { id: 3, title: "Price List 3", path: "price-list-3" },
          { id: 4, title: "Price List 4", path: "price-list-4" },
        ],
      },
      {
        id: 6,
        title: "Invoice",
        path: "invoice",
        menuItems: [
          { id: 1, title: "Invoice 1", path: "invoice-1" },
          { id: 2, title: "Invoice 2", path: "invoice-2" },
        ],
      },
    ],
  },
  {
    group: 2,
    menu: [
      {
        id: 7,
        title: "Sign In",
        path: "sign-in",
        menuItems: [
          { id: 1, title: "Sign In 1", path: "sign-in-1" },
          { id: 2, title: "Sign In 2", path: "sign-in-2" },
        ],
      },
      {
        id: 8,
        title: "Sign Up",
        path: "sign-up",
        menuItems: [
          { id: 1, title: "Sign Up 1", path: "sign-up-1" },
          { id: 2, title: "Sign Up 2", path: "sign-up-2" },
        ],
      },
    ],
  },
  {
    group: 3,
    menu: [
      {
        id: 9,
        title: "Error",
        path: "error",
        menuItems: [
          { id: 1, title: "Error 404 v1", path: "error-404-v1" },
          { id: 2, title: "Error 404 v2", path: "error-404-v2" },
          { id: 3, title: "Error 404 v3", path: "error-404-v3" },
          { id: 4, title: "Error 404 v4", path: "error-404-v4" },
          { id: 5, title: "Error 401", path: "error-401" },
          { id: 6, title: "Error 429", path: "error-429" },
          { id: 7, title: "Error 500", path: "error-500" },
        ],
      },
      {
        id: 10,
        title: "Starter",
        path: "starter",
        menuItems: [
          { id: 1, title: "Blurred Header", path: "blurred-header" },
          { id: 2, title: "Unblurred Header", path: "unblurred-header" },
          { id: 3, title: "Centered Links", path: "centered-links" },
          { id: 4, title: "Minimal Sidebar", path: "minimal-sidebar" },
          {
            id: 5,
            title: "Horizontal Navigation",
            path: "horizontal-navigation",
          },
          { id: 6, title: "Sideblock", path: "sideblock" },
        ],
      },
    ],
  },
];
const formsMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Form layout v1", path: "form-layout-v1" },
      { id: 2, title: "Form layout v2", path: "form-layout-v2" },
      { id: 3, title: "Form layout v3", path: "form-layout-v3" },
      { id: 4, title: "Form layout v4", path: "form-layout-v4" },
      { id: 5, title: "Form layout v5", path: "form-layout-v5" },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 6, title: "Input text", path: "input-text" },
      { id: 7, title: "Input group", path: "input-group" },
      { id: 8, title: "Input mask", path: "input-mask" },
      { id: 9, title: "Checkbox", path: "checkbox" },
      { id: 10, title: "Radio", path: "radio" },
      { id: 11, title: "Switch", path: "switch" },
      { id: 12, title: "Select", path: "select" },
      { id: 13, title: "Tom select", path: "tom-select" },
      { id: 14, title: "Textarea", path: "textarea" },
      { id: 15, title: "Range", path: "range" },
      { id: 16, title: "Datepicker", path: "datepicker" },
      { id: 17, title: "Timepicker", path: "timepicker" },
      { id: 18, title: "Datetimepicker", path: "datetimepicker" },
      { id: 19, title: "Text editor", path: "text-editor" },
      { id: 20, title: "Form upload", path: "form-upload" },
      { id: 21, title: "Form validation", path: "form-validation" },
    ],
  },
];
const componentsMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Accordion", path: "accordion" },
      { id: 2, title: "Collapse", path: "collapse" },
      { id: 3, title: "Tab", path: "tab" },
      { id: 4, title: "Dropdown", path: "dropdown" },
      { id: 5, title: "Popover", path: "popover" },
      { id: 6, title: "Modal", path: "modal" },
      { id: 7, title: "Drawer", path: "drawer" },
      { id: 8, title: "Steps", path: "steps" },
      { id: 9, title: "Timeline", path: "timeline" },
      { id: 10, title: "Pagination", path: "pagination" },
      { id: 11, title: "Menu list", path: "menu-list" },
      { id: 12, title: "Treeview", path: "treeview" },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 13, title: "Table", path: "table" },
      { id: 14, title: "Table Advanced", path: "table-advanced" },
      { id: 15, title: "Table Gridjs", path: "table-gridjs" },
    ],
  },
  {
    group: 3,
    menu: [
      { id: 16, title: "Apexcharts", path: "apexcharts" },
      { id: 17, title: "Carousel", path: "carousel" },
      { id: 18, title: "Notification", path: "notification" },
    ],
  },
  {
    group: 4,
    menu: [
      { id: 19, title: "Clipboard", path: "clipboard" },
      { id: 20, title: "Persist", path: "persist" },
      { id: 21, title: "Monochrome mode", path: "monochrome-mode" },
    ],
  },
];
const elementsMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Avatar", path: "avatar" },
      { id: 2, title: "Alert", path: "alert" },
      { id: 3, title: "Button", path: "button" },
      { id: 4, title: "Button group", path: "button-group" },
      { id: 5, title: "Badge", path: "badge" },
      { id: 6, title: "Breadcrumb", path: "breadcrumb" },
      { id: 7, title: "Card", path: "card" },
      { id: 8, title: "Divider", path: "divider" },
      { id: 9, title: "Mask", path: "mask" },
      { id: 10, title: "Progress", path: "progress" },
      { id: 11, title: "Skeleton", path: "skeleton" },
      { id: 12, title: "Spinner", path: "spinner" },
      { id: 13, title: "Tag", path: "tag" },
      { id: 14, title: "Tooltip", path: "tooltip" },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 15, title: "Forms", path: "forms" },
      { id: 16, title: "Typography", path: "typography" },
    ],
  },
];

export {
  dashboardMenuListData,
  applicationMenuListData,
  pagesAndLayoutsMenuListData,
  formsMenuListData,
  componentsMenuListData,
  elementsMenuListData,
};

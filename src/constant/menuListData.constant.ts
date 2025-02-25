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
import { Onboarding1, Onboarding2 } from "@/pages/pagesAndLayout/Onboarding";
//pages and layout
import {
  UserCard1,
  UserCard2,
  UserCard3,
  UserCard4,
  UserCard5,
  UserCard6,
  UserCard7,
} from "@/pages/pagesAndLayout/UserCard";
import {
  BlogCard1,
  BlogCard2,
  BlogCard3,
  BlogCard4,
  BlogCard5,
  BlogCard6,
  BlogCard7,
  BlogCard8,
  BlogDetail,
} from "@/pages/pagesAndLayout/BlogCard";
import { Help1, Help2, Help3 } from "@/pages/pagesAndLayout/Help";
import {
  PriceList1,
  PriceList2,
  PriceList3,
  PriceList4,
} from "@/pages/pagesAndLayout/PriceList";
import { Invoice1, Invoice2 } from "@/pages/pagesAndLayout/Invoice";
import { SignIn1, SignIn2 } from "@/pages/pagesAndLayout/SignIn";
import { SignUp1, SignUp2 } from "@/pages/pagesAndLayout/SignUp";
import {
  Error401,
  Error404V1,
  Error404V2,
  Error404V3,
  Error404V4,
  Error429,
  Error500,
} from "@/pages/pagesAndLayout/Error";
import {
  BlurredHeader,
  CenteredLinks,
  HorizontalNavigation,
  MinimalSidebar,
  Sideblock,
  UnblurredHeader,
} from "@/pages/pagesAndLayout/Starter";
//forms
import {
  FormLayoutV1,
  FormLayoutV2,
  FormLayoutV3,
  FormLayoutV4,
  FormLayoutV5,
  InputText,
  InputGroup,
  InputMask,
  Checkbox,
  Radio,
  Switch,
  Select,
  TomSelect,
  Textarea,
  Range,
  Datepicker,
  Timepicker,
  Datetimepicker,
  TextEditor,
  FormUpload,
  FormValidation,
} from "@/pages/forms";
//components
import {
  Accordion,
  Collapse,
  Tab,
  Dropdown,
  Popover,
  Modal,
  Drawer,
  Steps,
  Timeline,
  Pagination,
  MenuList,
  Treeview,
  Table,
  TableAdvanced,
  TableGridjs,
  Apexcharts,
  Carousel,
  Notification,
  Clipboard,
  Persist,
  MonochromeMode,
} from "@/pages/components";
//Elements
import {
  Avatar,
  Alert,
  Button,
  ButtonGroup,
  Badge,
  Breadcrumb,
  Card,
  Divider,
  Mask,
  Progress,
  Skeleton,
  Spinner,
  Tag,
  Tooltip,
  Forms,
  Typography,
} from "@/pages/elements";

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
          {
            id: 1,
            title: "Onboarding 1",
            path: "onboarding-1",
            element: Onboarding1,
          },
          {
            id: 2,
            title: "Onboarding 2",
            path: "onboarding-2",
            element: Onboarding2,
          },
        ],
      },
      {
        id: 2,
        title: "User Card",
        path: "user-card",
        menuItems: [
          {
            id: 1,
            title: "User Card 1",
            path: "user-card-1",
            element: UserCard1,
          },
          {
            id: 2,
            title: "User Card 2",
            path: "user-card-2",
            element: UserCard2,
          },
          {
            id: 3,
            title: "User Card 3",
            path: "user-card-3",
            element: UserCard3,
          },
          {
            id: 4,
            title: "User Card 4",
            path: "user-card-4",
            element: UserCard4,
          },
          {
            id: 5,
            title: "User Card 5",
            path: "user-card-5",
            element: UserCard5,
          },
          {
            id: 6,
            title: "User Card 6",
            path: "user-card-6",
            element: UserCard6,
          },
          {
            id: 7,
            title: "User Card 7",
            path: "user-card-7",
            element: UserCard7,
          },
        ],
      },
      {
        id: 3,
        title: "Blog Card",
        path: "blog-card",
        menuItems: [
          {
            id: 1,
            title: "Blog Card 1",
            path: "blog-card-1",
            element: BlogCard1,
          },
          {
            id: 2,
            title: "Blog Card 2",
            path: "blog-card-2",
            element: BlogCard2,
          },
          {
            id: 3,
            title: "Blog Card 3",
            path: "blog-card-3",
            element: BlogCard3,
          },
          {
            id: 4,
            title: "Blog Card 4",
            path: "blog-card-4",
            element: BlogCard4,
          },
          {
            id: 5,
            title: "Blog Card 5",
            path: "blog-card-5",
            element: BlogCard5,
          },
          {
            id: 6,
            title: "Blog Card 6",
            path: "blog-card-6",
            element: BlogCard6,
          },
          {
            id: 7,
            title: "Blog Card 7",
            path: "blog-card-7",
            element: BlogCard7,
          },
          {
            id: 8,
            title: "Blog Card 8",
            path: "blog-card-8",
            element: BlogCard8,
          },
          {
            id: 9,
            title: "Blog Detail",
            path: "blog-detail",
            element: BlogDetail,
          },
        ],
      },
      {
        id: 4,
        title: "Help",
        path: "help",
        menuItems: [
          { id: 1, title: "Help 1", path: "help-1", element: Help1 },
          { id: 2, title: "Help 2", path: "help-2", element: Help2 },
          { id: 3, title: "Help 3", path: "help-3", element: Help3 },
        ],
      },
      {
        id: 5,
        title: "Price List",
        path: "price-list",
        menuItems: [
          {
            id: 1,
            title: "Price List 1",
            path: "price-list-1",
            element: PriceList1,
          },
          {
            id: 2,
            title: "Price List 2",
            path: "price-list-2",
            element: PriceList2,
          },
          {
            id: 3,
            title: "Price List 3",
            path: "price-list-3",
            element: PriceList3,
          },
          {
            id: 4,
            title: "Price List 4",
            path: "price-list-4",
            element: PriceList4,
          },
        ],
      },
      {
        id: 6,
        title: "Invoice",
        path: "invoice",
        menuItems: [
          { id: 1, title: "Invoice 1", path: "invoice-1", element: Invoice1 },
          { id: 2, title: "Invoice 2", path: "invoice-2", element: Invoice2 },
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
          { id: 1, title: "Sign In 1", path: "sign-in-1", element: SignIn1 },
          { id: 2, title: "Sign In 2", path: "sign-in-2", element: SignIn2 },
        ],
      },
      {
        id: 8,
        title: "Sign Up",
        path: "sign-up",
        menuItems: [
          { id: 1, title: "Sign Up 1", path: "sign-up-1", element: SignUp1 },
          { id: 2, title: "Sign Up 2", path: "sign-up-2", element: SignUp2 },
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
          {
            id: 1,
            title: "Error 404 v1",
            path: "error-404-v1",
            element: Error404V1,
          },
          {
            id: 2,
            title: "Error 404 v2",
            path: "error-404-v2",
            element: Error404V2,
          },
          {
            id: 3,
            title: "Error 404 v3",
            path: "error-404-v3",
            element: Error404V3,
          },
          {
            id: 4,
            title: "Error 404 v4",
            path: "error-404-v4",
            element: Error404V4,
          },
          { id: 5, title: "Error 401", path: "error-401", element: Error401 },
          { id: 6, title: "Error 429", path: "error-429", element: Error429 },
          { id: 7, title: "Error 500", path: "error-500", element: Error500 },
        ],
      },
      {
        id: 10,
        title: "Starter",
        path: "starter",
        menuItems: [
          {
            id: 1,
            title: "Blurred Header",
            path: "blurred-header",
            element: BlurredHeader,
          },
          {
            id: 2,
            title: "Unblurred Header",
            path: "unblurred-header",
            element: UnblurredHeader,
          },
          {
            id: 3,
            title: "Centered Links",
            path: "centered-links",
            element: CenteredLinks,
          },
          {
            id: 4,
            title: "Minimal Sidebar",
            path: "minimal-sidebar",
            element: MinimalSidebar,
          },
          {
            id: 5,
            title: "Horizontal Navigation",
            path: "horizontal-navigation",
            element: HorizontalNavigation,
          },
          { id: 6, title: "Sideblock", path: "sideblock", element: Sideblock },
        ],
      },
    ],
  },
];

const formsMenuListData = [
  {
    group: 1,
    menu: [
      {
        id: 1,
        title: "Form layout v1",
        path: "form-layout-v1",
        element: FormLayoutV1,
      },
      {
        id: 2,
        title: "Form layout v2",
        path: "form-layout-v2",
        element: FormLayoutV2,
      },
      {
        id: 3,
        title: "Form layout v3",
        path: "form-layout-v3",
        element: FormLayoutV3,
      },
      {
        id: 4,
        title: "Form layout v4",
        path: "form-layout-v4",
        element: FormLayoutV4,
      },
      {
        id: 5,
        title: "Form layout v5",
        path: "form-layout-v5",
        element: FormLayoutV5,
      },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 6, title: "Input text", path: "input-text", element: InputText },
      { id: 7, title: "Input group", path: "input-group", element: InputGroup },
      { id: 8, title: "Input mask", path: "input-mask", element: InputMask },
      { id: 9, title: "Checkbox", path: "checkbox", element: Checkbox },
      { id: 10, title: "Radio", path: "radio", element: Radio },
      { id: 11, title: "Switch", path: "switch", element: Switch },
      { id: 12, title: "Select", path: "select", element: Select },
      { id: 13, title: "Tom select", path: "tom-select", element: TomSelect },
      { id: 14, title: "Textarea", path: "textarea", element: Textarea },
      { id: 15, title: "Range", path: "range", element: Range },
      { id: 16, title: "Datepicker", path: "datepicker", element: Datepicker },
      { id: 17, title: "Timepicker", path: "timepicker", element: Timepicker },
      {
        id: 18,
        title: "Datetimepicker",
        path: "datetimepicker",
        element: Datetimepicker,
      },
      {
        id: 19,
        title: "Text editor",
        path: "text-editor",
        element: TextEditor,
      },
      {
        id: 20,
        title: "Form upload",
        path: "form-upload",
        element: FormUpload,
      },
      {
        id: 21,
        title: "Form validation",
        path: "form-validation",
        element: FormValidation,
      },
    ],
  },
];

const componentsMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Accordion", path: "accordion", element: Accordion },
      { id: 2, title: "Collapse", path: "collapse", element: Collapse },
      { id: 3, title: "Tab", path: "tab", element: Tab },
      { id: 4, title: "Dropdown", path: "dropdown", element: Dropdown },
      { id: 5, title: "Popover", path: "popover", element: Popover },
      { id: 6, title: "Modal", path: "modal", element: Modal },
      { id: 7, title: "Drawer", path: "drawer", element: Drawer },
      { id: 8, title: "Steps", path: "steps", element: Steps },
      { id: 9, title: "Timeline", path: "timeline", element: Timeline },
      { id: 10, title: "Pagination", path: "pagination", element: Pagination },
      { id: 11, title: "Menu list", path: "menu-list", element: MenuList },
      { id: 12, title: "Treeview", path: "treeview", element: Treeview },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 13, title: "Table", path: "table", element: Table },
      {
        id: 14,
        title: "Table Advanced",
        path: "table-advanced",
        element: TableAdvanced,
      },
      {
        id: 15,
        title: "Table Gridjs",
        path: "table-gridjs",
        element: TableGridjs,
      },
    ],
  },
  {
    group: 3,
    menu: [
      { id: 16, title: "Apexcharts", path: "apexcharts", element: Apexcharts },
      { id: 17, title: "Carousel", path: "carousel", element: Carousel },
      {
        id: 18,
        title: "Notification",
        path: "notification",
        element: Notification,
      },
    ],
  },
  {
    group: 4,
    menu: [
      { id: 19, title: "Clipboard", path: "clipboard", element: Clipboard },
      { id: 20, title: "Persist", path: "persist", element: Persist },
      {
        id: 21,
        title: "Monochrome mode",
        path: "monochrome-mode",
        element: MonochromeMode,
      },
    ],
  },
];
const elementsMenuListData = [
  {
    group: 1,
    menu: [
      { id: 1, title: "Avatar", path: "avatar", element: Avatar },
      { id: 2, title: "Alert", path: "alert", element: Alert },
      { id: 3, title: "Button", path: "button", element: Button },
      {
        id: 4,
        title: "Button group",
        path: "button-group",
        element: ButtonGroup,
      },
      { id: 5, title: "Badge", path: "badge", element: Badge },
      { id: 6, title: "Breadcrumb", path: "breadcrumb", element: Breadcrumb },
      { id: 7, title: "Card", path: "card", element: Card },
      { id: 8, title: "Divider", path: "divider", element: Divider },
      { id: 9, title: "Mask", path: "mask", element: Mask },
      { id: 10, title: "Progress", path: "progress", element: Progress },
      { id: 11, title: "Skeleton", path: "skeleton", element: Skeleton },
      { id: 12, title: "Spinner", path: "spinner", element: Spinner },
      { id: 13, title: "Tag", path: "tag", element: Tag },
      { id: 14, title: "Tooltip", path: "tooltip", element: Tooltip },
    ],
  },
  {
    group: 2,
    menu: [
      { id: 15, title: "Forms", path: "forms", element: Forms },
      { id: 16, title: "Typography", path: "typography", element: Typography },
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

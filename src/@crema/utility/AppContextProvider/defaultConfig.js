import {
  FooterType,
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeDirection,
  ThemeMode,
  ThemeStyle,
} from '../../../shared/constants/AppEnums';

export const DarkSidebar = {
  sidebarBgColor: '#161B25',
  sidebarTextColor: '#fff',
  sidebarHeaderColor: '#313541',
  sidebarMenuSelectedBgColor: 'rgba(255, 255, 255, 0.2)',
  sidebarMenuSelectedTextColor: '#fff',
  mode: ThemeMode.DARK,
};
export const LightSidebar = {
  sidebarBgColor: '#fff',
  sidebarTextColor: 'rgba(0, 0, 0, 0.60)',
  sidebarHeaderColor: '#fff',
  sidebarMenuSelectedBgColor: '#F4F7FE',
  sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
  mode: ThemeMode.LIGHT,
};
const defaultConfig = {
  sidebar: {
    borderColor: '#757575',
    menuStyle: MenuStyle.DEFAULT,
    isSidebarBgImage: false,
    sidebarBgImage: 1,
    colorSet: DarkSidebar,
  },

  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  themeStyle: ThemeStyle.STANDARD,
  direction: ThemeDirection.LTR,
  themeMode: ThemeMode.SEMI_DARK,
  footerType: FooterType.FLUID,
  navStyle: NavStyle.MINI_SIDEBAR_TOGGLE,
  layoutType: LayoutType.FULL_WIDTH,
  footer: false,
  rtlLocale: ['ar'],
};
export default defaultConfig;

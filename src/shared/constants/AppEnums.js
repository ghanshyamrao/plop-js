import {
  CREATE_MASTER_PRODUCT_UNITE,
  CREATE_MASTER_PRODUCT_FREQUENCY,
  CREATE_MASTER_MARKET_UNITE,
  CREATE_MASTER_CUSTOMER_COMPETITOR,
  CREATE_MASTER_CUSTOMER_CHARACTERISTICS,
  CREATE_MASTER_FEATURE_TYPE,
  CREATE_MASTER_RECURRENCE,
  CREATE_MASTER_ENGINEERING_EVOLUTION_TYPE,
  CREATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
  CREATE_MASTER_DEVELOPMENT,
  UPDATE_MASTER_PRODUCT_UNITE,
  UPDATE_MASTER_PRODUCT_FREQUENCY,
  UPDATE_MASTER_MARKET_UNITE,
  UPDATE_MASTER_CUSTOMER_COMPETITOR,
  UPDATE_MASTER_CUSTOMER_CHARACTERISTICS,
  UPDATE_MASTER_FEATURE_TYPE,
  UPDATE_MASTER_RECURRENCE,
  UPDATE_MASTER_ENGINEERING_EVOLUTION_TYPE,
  UPDATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
  UPDATE_MASTER_DEVELOPMENT,
  GET_MASTER_PRODUCT_UNITE,
  GET_MASTER_PRODUCT_FREQUENCY,
  GET_MASTER_MARKET_UNITE,
  GET_MASTER_CUSTOMER_COMPETITOR,
  GET_MASTER_CUSTOMER_CHARACTERISTICS,
  GET_MASTER_FEATURE_TYPE,
  GET_MASTER_RECURRENCE,
  GET_MASTER_ENGINEERING_EVOLUTION_TYPE,
  GET_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
  GET_MASTER_DEVELOPMENT,
  DELETE_MASTER_PRODUCT_UNITE,
  DELETE_MASTER_PRODUCT_FREQUENCY,
  DELETE_MASTER_MARKET_UNITE,
  DELETE_MASTER_CUSTOMER_COMPETITOR,
  DELETE_MASTER_CUSTOMER_CHARACTERISTICS,
  DELETE_MASTER_FEATURE_TYPE,
  DELETE_MASTER_RECURRENCE,
  DELETE_MASTER_ENGINEERING_EVOLUTION_TYPE,
  DELETE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
  DELETE_MASTER_DEVELOPMENT,
} from './ActionTypes';
export const authRole = {
  admin: ['user', 'admin'],
  user: ['user'],
};

export const RoutePermittedRole = {
  admin: 'ADMIN',
  user: 'user',
  caseViewer: 'case_view',
};

export const path = [
  'product',
  'market',
  'customer',
  'whatCustomerWants',
  'salesProjection',
  'marketingStrategy',
  'salesStrategy',
  'engineeringEvaluation',
  'activityExecutionStrategy',
  'maintenance',
  'financial',
  'reports',
  'decisionMaking',
  'alignmentCheckModule',
];

export const breadCrumbsPathForPages = {
  company: [{path: '', name: 'Home'}],
  invite_user: [
    {path: '../home/company', name: 'Home'},
    {path: '', name: 'Invite Company user'},
  ],
  caseOnly: [
    {path: '../home/company', name: 'Home'},
    {path: '', name: 'Cases'},
  ],
  cases: [
    {path: '../home/company', name: 'Home'},
    {path: '../home/cases', name: 'Cases'},
  ],
  strategy: [
    {path: '../home/company', name: 'Home'},
    {path: '../home/strategy', name: 'Strategy'},
  ],
  myProfile: [
    {path: '../home/company', name: 'Home'},
    {path: '../home/Masters', name: 'Masters'},
  ],
  stackHolder: [
    {path: '../home/company', name: 'Home'},
    {path: '../home/cases', name: 'Cases'},
  ],
};

export const caseStatus = {
  0: {status: 'REJECTED', color: '#CB627B', background: '#FFC8D5'},
  1: {status: 'APPROVED', color: '#609242', background: '#BFE0AB'},
  2: {status: 'INITIATED', color: '#B5931B', background: '#FAD03E'},
};
export const caseStatusOptions = [
  {
    value: 0,
    label: 'Rejected',
  },
  {
    value: 1,
    label: 'Approved',
  },
  {
    value: 2,
    label: 'Initiated',
  },
];
export const masterTableType = {
  MasterProductFrequency: {
    create: CREATE_MASTER_PRODUCT_FREQUENCY,
    update: UPDATE_MASTER_PRODUCT_FREQUENCY,
    get: GET_MASTER_PRODUCT_FREQUENCY,
    delete: DELETE_MASTER_PRODUCT_FREQUENCY,
  },
  MasterProductUnite: {
    create: CREATE_MASTER_PRODUCT_UNITE,
    update: UPDATE_MASTER_PRODUCT_UNITE,
    get: GET_MASTER_PRODUCT_UNITE,
    delete: DELETE_MASTER_PRODUCT_UNITE,
  },
  MasterMarketUnite: {
    create: CREATE_MASTER_MARKET_UNITE,
    update: UPDATE_MASTER_MARKET_UNITE,
    get: GET_MASTER_MARKET_UNITE,
    delete: DELETE_MASTER_MARKET_UNITE,
  },
  MasterCustomerCharacteristic: {
    create: CREATE_MASTER_CUSTOMER_CHARACTERISTICS,
    update: UPDATE_MASTER_CUSTOMER_CHARACTERISTICS,
    get: GET_MASTER_CUSTOMER_CHARACTERISTICS,
    delete: DELETE_MASTER_CUSTOMER_CHARACTERISTICS,
  },
  MasterCustomerCompetitor: {
    create: CREATE_MASTER_CUSTOMER_COMPETITOR,
    update: UPDATE_MASTER_CUSTOMER_COMPETITOR,
    get: GET_MASTER_CUSTOMER_COMPETITOR,
    delete: DELETE_MASTER_CUSTOMER_COMPETITOR,
  },
  MasterFeatureType: {
    create: CREATE_MASTER_FEATURE_TYPE,
    update: UPDATE_MASTER_FEATURE_TYPE,
    get: GET_MASTER_FEATURE_TYPE,
    delete: DELETE_MASTER_FEATURE_TYPE,
  },
  MasterRecurrence: {
    create: CREATE_MASTER_RECURRENCE,
    update: UPDATE_MASTER_RECURRENCE,
    get: GET_MASTER_RECURRENCE,
    delete: DELETE_MASTER_RECURRENCE,
  },
  MasterEngineeringEvolutionType: {
    create: CREATE_MASTER_ENGINEERING_EVOLUTION_TYPE,
    update: UPDATE_MASTER_ENGINEERING_EVOLUTION_TYPE,
    get: GET_MASTER_ENGINEERING_EVOLUTION_TYPE,
    delete: DELETE_MASTER_ENGINEERING_EVOLUTION_TYPE,
  },
  MasterEngineeringEvolutionRiskType: {
    create: CREATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
    update: UPDATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
    get: GET_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
    delete: DELETE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE,
  },
  MasterDevelopment: {
    create: CREATE_MASTER_DEVELOPMENT,
    update: UPDATE_MASTER_DEVELOPMENT,
    get: GET_MASTER_DEVELOPMENT,
    delete: DELETE_MASTER_DEVELOPMENT,
  },
};
export const ThemeStyle = {
  MODERN: 'modern',
  STANDARD: 'standard',
};
export const ThemeStyleRadius = {
  MODERN: 30,
  STANDARD: 4,
};
export const ThemeMode = {
  LIGHT: 'light',
  SEMI_DARK: 'semi-dark',
  DARK: 'dark',
};
export const LayoutType = {
  FULL_WIDTH: 'full-width',
  BOXED: 'boxed',
  FRAMED: 'framed',
};

export const MenuStyle = {
  DEFAULT: 'default',
  STANDARD: 'standard',
  ROUNDED: 'rounded',
  ROUNDED_REVERSE: 'rounded-reverse',
  CURVED_MENU: 'curved-menu',
};

export const NavStyle = {
  DEFAULT: 'default',
  MINI: 'mini',
  MINI_SIDEBAR_TOGGLE: 'mini-sidebar-toggle',
  STANDARD: 'standard',
  HEADER_USER: 'user-header',
  HEADER_USER_MINI: 'user-mini-header',
  DRAWER: 'drawer',
  BIT_BUCKET: 'bit-bucket',
  H_DEFAULT: 'h-default',
  HOR_HEADER_FIXED: 'hor-header-fixed',
  HOR_DARK_LAYOUT: 'hor-dark-layout',
};
export const FooterType = {
  FIXED: 'fixed',
  FLUID: 'fluid',
};
export const ThemeDirection = {
  RTL: 'rtl',
  LTR: 'ltr',
};
export const HeaderType = {
  DARK: 'dark',
  LIGHT: 'light',
};
export const RouteTransition = {
  NONE: 'none',
  FADE: 'fade',
  SLIDE_LEFT: 'slideLeft',
  SLIDE_RIGHT: 'slideRight',
  SLIDE_UP: 'slideUp',
  SLIDE_DOWN: 'slideDown',
};
export const Fonts = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '600',
  EXTRA_BOLD: '600',
};

export const AuthType = {
  FIREBASE: 'firebase',
  AWS_COGNITO: 'aws_cognito',
  AUTH0: 'auth0',
  JWT_AUTH: 'jwt_auth',
};

export const AppAnimates = {
  SLIDEUPIN: {
    hidden: {
      y: '100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.2,
      },
    },
  },
  SLIDEUPOUT: {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 0,
      y: '100vh',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDEDOWNIN: {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDEDOWNOUT: {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 0,
      y: '-100vh',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDELEFTIN: {
    hidden: {
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDELEFTOUT: {
    hidden: {
      x: 0,
    },
    visible: {
      opacity: 0,
      x: '100vw',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDERIGHTIN: {
    hidden: {
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  SLIDERIGHTOUT: {
    hidden: {
      x: 0,
    },
    visible: {
      opacity: 0,
      x: '-100vw',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
      },
    },
  },
  FADEIN: {
    hidden: {
      opacity: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  },
  FADEOUT: {
    hidden: {
      opacity: 1,
      scale: 1,
    },
    visible: {
      opacity: 0,
      scale: 1,
      transition: {
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  },
};

export const AppAnimateGroups = {
  SLIDEUPIN: {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.2,
        staggerChildren: 0.05,
      },
    },
  },
  SLIDEUPOUT: {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 0,
      y: '100vh',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDEDOWNIN: {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDEDOWNOUT: {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 0,
      y: '-100vh',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDELEFTIN: {
    hidden: {
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDELEFTOUT: {
    hidden: {
      x: 0,
    },
    visible: {
      opacity: 0,
      x: '100vw',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDERIGHTIN: {
    hidden: {
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeIn',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  SLIDERIGHTOUT: {
    hidden: {
      x: 0,
    },
    visible: {
      opacity: 0,
      x: '-100vw',
      transition: {
        ease: 'easeOut',
        delay: 0,
        when: 'beforeChildren',
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
  },
  FADEIN: {
    hidden: {
      opacity: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  },
  FADEOUT: {
    hidden: {
      opacity: 1,
      scale: 1,
    },
    visible: {
      opacity: 0,
      scale: 1,
      transition: {
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  },
  NOANIMATION: {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
    },
  },
};

export const AppMotionAnimate = {
  SLIDEUPIN: {
    variants: {
      hidden: {
        y: 100,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
    transition: {
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  SLIDEUPOUT: {
    variants: {
      hidden: {
        y: 0,
        opacity: 1,
      },
      visible: {
        opacity: 0,
        y: '-100vh',
      },
    },
    transition: {
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
  SLIDEDOWNIN: {
    variants: {
      hidden: {
        y: -100,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
    transition: {
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  SLIDEDOWNOUT: {
    variants: {
      hidden: {
        y: 0,
        opacity: 1,
      },
      visible: {
        opacity: 0,
        y: '100vh',
      },
    },
    transition: {
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
  SLIDELEFTIN: {
    variants: {
      hidden: {
        x: 100,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    transition: {
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  SLIDELEFTOUT: {
    variants: {
      hidden: {
        x: 0,
        opacity: 1,
      },
      visible: {
        opacity: 0,
        x: '-100vw',
      },
    },
    transition: {
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
  SLIDERIGHTIN: {
    variants: {
      hidden: {
        x: -100,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    transition: {
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  SLIDERIGHTOUT: {
    variants: {
      hidden: {
        x: 0,
        opacity: 1,
      },
      visible: {
        opacity: 0,
        x: '-100vw',
      },
    },
    transition: {
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
  FADEIN: {
    variants: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
    transition: {
      duration: 0.1,
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  FADEOUT: {
    variants: {
      hidden: {
        opacity: 1,
      },
      visible: {
        opacity: 0,
      },
    },
    transition: {
      duration: 0.1,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

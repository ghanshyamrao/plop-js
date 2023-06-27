import {authRole, AuthType} from './AppEnums';

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  authType: AuthType.JWT_AUTH,
  token: 'access-token',
  role: authRole.admin,
  photoURL: '/assets/images/avatar/A11.jpg',
};

//OPTIONS_FOR_PRODUCT_COST
export const productCostTypeOptions = [
  {label: 'Delay', value: 'delay'},
  {label: 'Not Doing', value: 'notDoing'},
];
export const booleanOptions = [
  {label: 'Yes', value: true},
  {label: 'No', value: false},
];

//COMPANY_DURATION
export const durationOptions = [
  {label: 'Seconds', value: 'SECOND'},
  {label: 'Minutes', value: 'MINUTE'},
  {label: 'Hours', value: 'HOUR'},
  {label: 'Weeks', value: 'WEEK'},
  {label: 'Months', value: 'MONTH'},
  {label: 'Years', value: 'YEAR'},
];

export const taretValues = [
  {label: 'Yes', value: true},
  {label: 'No', value: false},
  {label: 'Not yet ', value: false},
];
//

//OPTIONS_FOR_FEATURE_COMPETITOR
export const featureCompetitor = [
  {
    label: 'Strong',
    value: 'Strong',
  },
  {
    label: 'Moderate',
    value: 'Moderate',
  },
  {
    label: 'Low',
    value: 'Low',
  },
  {
    label: 'Not Present',
    value: 'Not Present',
  },
];
//URL
export const IMAGE_URL = 'https://tmapi.blobstation.com/images/';
export const initialUrl = '/home/create_company'; // this url will open after login

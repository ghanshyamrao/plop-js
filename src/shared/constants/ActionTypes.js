//API
export const FETCH_START = 'fetch_start';
export const FETCH_SUCCESS = 'fetch_success';
export const FETCH_ERROR = 'fetch_error';
export const SHOW_MESSAGE = 'show_message';
export const HIDE_MESSAGE = 'hide_message';
export const TOGGLE_APP_DRAWER = 'toggle_app_drawer';
export const UPDATING_CONTENT = 'updating_content';
export const INTERNAL_SERVER_ERROR = 'Something went wrong ';

//APP SETTING
export const TOGGLE_NAV_COLLAPSED = 'toggle_nav_collapsed';
export const SET_INITIAL_PATH = 'set_initial_path';

//AUTH0
export const UPDATE_AUTH_USER = 'update_auth_user';
export const SET_AUTH_TOKEN = 'set_auth_token';
export const SIGNOUT_AUTH_SUCCESS = 'signout_auth_success';

//ANALYTICS-DASHBOARD
export const GET_ANALYTICS_DATA = 'get_analytics_data';

//ECOMMERCE-DASHBOARD
export const GET_ECOMMERCE_DATA = 'get_ecommerce_data';

//ACADEMY-DASHBOARD
export const GET_ACADEMY_DATA = 'get_academy_data';

//CRM-DASHBOARD
export const GET_CRM_DATA = 'get_crm_data';

//CRYPTO-DASHBOARD
export const GET_CRYPTO_DATA = 'get_crypto_data';

//CRYPTO-DASHBOARD
export const GET_HC_DATA = 'get_hc_data';

//METRICS-DASHBOARD
export const GET_METRICS_DATA = 'get_metrics_data';

//WIDGETS_DASHBOARD
export const GET_WIDGETS_DATA = 'get_widgets_data';

//MAIL-APP
export const GET_MAIL_LIST = 'get_mail_list';
export const GET_FOLDER_LIST = 'get_folder_list';
export const GET_LABEL_LIST = 'get_label_list';
export const TOGGLE_MAIL_DRAWER = 'toggle_mail_drawer';
export const COMPOSE_MAIL = 'compose_mail';
export const GET_MAIL_DETAIL = 'get_mail_detail';
export const UPDATE_MAIL_FOLDER = 'update_mail_folders';
export const UPDATE_MAIL_LABEL = 'update_mail_label';
export const UPDATE_STARRED_STATUS = 'update_starred_status';
export const UPDATED_MAIL_DETAIL = 'updated_mail_detail';
export const CHANGE_READ_STATUS = 'change_read_status';
export const GET_CONNECTION_LIST = 'get_connection_list';
export const NULLIFY_MAIL = 'nullify_mail';

//TODO-APP
export const GET_TASK_LIST = 'get_task_list';
export const CREATE_NEW_TASK = 'create_new_task';
export const TOGGLE_TODO_DRAWER = 'toggle_todo_drawer';
export const GET_TODO_FOLDER_LIST = 'GET_TODO_FOLDER_LIST';
export const GET_TODO_LABEL_LIST = 'GET_TODO_LABEL_LIST';
export const GET_TODO_STATUS_LIST = 'GET_TODO_STATUS_LIST';
export const GET_TODO_PRIORITY_LIST = 'GET_TODO_PRIORITY_LIST';
export const UPDATE_TASK_FOLDER = 'UPDATE_TASK_FOLDER';
export const UPDATE_TASK_LABEL = 'UPDATE_TASK_LABEL';
export const UPDATE_TASK_STARRED_STATUS = 'UPDATE_TASK_STARRED_STATUS';
export const GET_TASK_DETAIL = 'GET_TASK_DETAIL';
export const UPDATE_TASK_DETAIL = 'UPDATE_TASK_DETAIL';
export const GET_TODO_STAFF_LIST = 'GET_TODO_STAFF_LIST';

//CONTACT_APP
export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const GET_CONTACT_FOLDER_LIST = 'GET_CONTACT_FOLDER_LIST';
export const GET_CONTACT_LABEL_LIST = 'GET_CONTACT_LABEL_LIST';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT_LABEL = 'UPDATE_CONTACT_LABEL';
export const UPDATE_CONTACT_STARRED_STATUS = 'UPDATE_CONTACT_STARRED_STATUS';
export const GET_CONTACT_DETAIL = 'GET_CONTACT_DETAIL';
export const TOGGLE_CONTACT_DRAWER = 'TOGGLE_CONTACT_DRAWER';
export const UPDATE_CONTACT_DETAIL = 'UPDATE_CONTACT_DETAIL';
export const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT';

//SCRUMBOARD_APP
export const GET_MEMBER_LIST = 'GET_MEMBER_LIST';
export const GET_SCRUM_LABEL_LIST = 'GET_SCRUM_LABEL_LIST';
export const GET_BOARDS = 'GET_BOARDS';
export const GET_BOARD_DETAIL = 'GET_BOARD_DETAIL';
export const ADD_BOARD_LIST = 'ADD_BOARD_LIST';
export const ADD_LIST_CARD = 'ADD_LIST_CARD';
export const EDIT_LIST_CARD = 'EDIT_LIST_CARD';
export const DELETE_LIST_CARD = 'DELETE_LIST_CARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const ADD_NEW_BOARD = 'ADD_NEW_BOARD';
export const DELETE_LIST = 'DELETE_LIST';
export const EDIT_BOARD_DETAIL = 'EDIT_BOARD_DETAIL';
export const EDIT_BOARD_LIST = 'EDIT_BOARD_LIST';

//CHAT_APP
export const GET_CONNECTIONS_LIST = 'get_connections_list';
export const GET_USER_MESSAGES = 'get_user_messages';
export const ADD_NEW_MESSAGE = 'add_new_message';
export const EDIT_MESSAGE = 'edit_message';
export const DELETE_MESSAGE = 'delete_message';
export const DELETE_USER_MESSAGES = 'delete_user_messages';
export const TOGGLE_CHAT_DRAWER = 'toggle_chat_drawer';
export const SELECT_USER = 'select_user';

//WALL_APP
export const GET_WALL_DATA = 'get_wall_data';
export const GET_FEED_POSTS = 'get_feed_posts';
export const CREATE_NEW_POST = 'create_new_post';
export const UPDATE_POST = 'update_post';

//USER
// export const GET_USER_ROLE_IN_COMPANY = 'get_user_role_in_company';

//ECOMMERCE_LIST
export const GET_ECOMMERCE_LIST = 'get_ecommerce_list';
export const SET_PRODUCT_VIEW_TYPE = 'set_product_view_type';
export const SET_FILTER_DATA = 'set_filter_data';
export const SET_PRODUCT_DATA = 'set_product_data';
export const GET_RECENT_ORDER = 'get_recent_order';
export const GET_CUSTOMERS = 'get_customers';
export const ADD_CART_ITEM = 'add_cart_item';
export const REMOVE_CART_ITEM = 'remove_cart_item';
export const UPDATE_CART_ITEM = 'update_cart_item';
export const SET_CART_ITEMS = 'set_cart_items';

//CK-EDITOR
export const GET_BALLOON_BLOCK_DATA = 'get_balloon_block_data';
export const UPDATE_BALLOON_BLOCK_DATA = 'update_balloon_block_data';
export const GET_BALLOON_DATA = 'get_balloon_data';
export const UPDATE_BALLOON_DATA = 'update_balloon_data';
export const GET_CLASSIC_DATA = 'get_classic_data';
export const UPDATE_CLASSIC_DATA = 'update_classic_data';
export const GET_INLINE_DATA = 'get_inline_data';
export const UPDATE_INLINE_DATA = 'update_inline_data';
export const GET_DOCUMENT_DATA = 'get_document_data';
export const UPDATE_DOCUMENT_DATA = 'update_document_data';
export const GET_CUSTOM_DATA = 'get_custom_data';
export const UPDATE_CUSTOM_DATA = 'update_custom_data';

//GALLERY
export const GET_GALLERY_PHOTO = 'get_gallery_photo';

//weather
export const GET_WEATHER_DATA = 'get_weather_data';
//INVITELINK
export const GET_INVITED_MAIL = 'get_invited_mail';
export const MAIL_INVITE_EXPIRE = 'mail_invite_expire';
export const INTERNAL_SERVER = 'internal_server';
export const GET_COMPANY_INVITE = 'get_company_invite';
export const INVITE_COMPANY_USER = 'invite_company_user';
export const DELETE_INVITED_COMPANY_USER = 'delete_invited_company_user';

//USER
export const GET_USER_ROLE_IN_COMPANY = 'get_user_role_in_company;';

//COMPANY_LIST
export const GET_COMPANY_DATA = 'get_company_data';
export const UPDATE_COMPANY_DATA = 'update_company_data';
export const CREATE_COMPANY_DATA = 'Create_company_data';
export const GET_COMPANY_USER_FOR_COMPANY = 'get_company_user_for_company';
export const UPDATED_COMPANY_APPROVED_COUNT = 'updated_company_approved_count';

//ROLES_LIST
export const GET_COMPANY_ROLES = 'get_company_roles';
export const CREATE_ROLE = 'create_role';
export const UPDATE_ROLE = 'update_role';
export const DELETE_ROLE = 'delete_role';

//CASE_LIST
export const GET_COMPANY_CASES = 'get_company_cases';
export const GET_COMPANY_USER_FOR_CASE = 'get_company_user_for_case';
export const CREATE_CASE = 'create_case';
export const GET_CASE_DETAILS = 'get_case_details';
export const UPDATE_CASE_DETAILS = 'update_case_details';
export const ADD_CASE_USER = 'add_case_user';
export const UPDATE_CASE_USER = 'update_case_user';
export const DELETE_CASE_USER = 'delete_case_user';
export const GET_CASE_USER = 'get_case_user';
export const UPDATE_CASE_STATUS = 'update_case_status';

//PRODUCT
export const GET_PRODUCT_DETAIL_BY_CASE_ID = 'get_product_details_by_case_id';
export const CREATE_PRODUCT_DATA = 'create_product_data';

export const UPDATE_PRODUCT_DATA = 'update_product_data';
export const GET_UNIT_DATA = 'get_unit_data';
export const GET_FREQUENCY_DATA = 'get_frequency_data';
export const CREATE_BUSINESS_BENEFITS_DATA = 'create_business_Benefits_Data';
export const GET_BUSINESS_BENEFITS_DATA = 'get_business_Benefits_Data';
export const DELETE_BUSINESS_BENEFITS_DATA = 'delete_business_Benefits_Data';
export const UPDATE_BUSINESS_BENEFITS_DATA = 'update_business_Benefits_Data';
export const CREATE_PRODUCT_UNIT_DATA = 'create_product_unit_data';
export const CREATE_PRODUCT_FREQUENCY_DATA = 'create_product_frequency_data';

export const GET_PRODUCT_IMAGES = 'create_product_images';
export const CREATE_PRODUCT_IMAGE = 'create_product_image';
export const DELETE_PRODUCT_IMAGE = 'delete_product_image';

//
export const SOMETHING_WENT_WRONG = 'Something went wrong, Please try again!';

//PRODUCT_COST
export const GET_PRODUCT_COST = 'get_product_cost';
export const CREATE_PRODUCT_COST = 'create_product_cost';
export const UPDATE_PRODUCT_COST = 'update_product_cost';
export const DELETE_PRODUCT_COST = 'delete_product_cost';

//MASTER_TABLES

export const CREATE_MASTER_PRODUCT_UNITE = 'create_master_product_unite';
export const CREATE_MASTER_PRODUCT_FREQUENCY =
  'create_master_product_frequency';
export const CREATE_MASTER_MARKET_UNITE = 'create_master_market_unite';
export const CREATE_MASTER_CUSTOMER_COMPETITOR =
  'create_master_customer_competitor';
export const CREATE_MASTER_CUSTOMER_CHARACTERISTICS =
  'create_master_customer_characteristics';
export const CREATE_MASTER_FEATURE_TYPE = 'create_master_feature_type';
export const CREATE_MASTER_RECURRENCE = 'create_master_recurrence';
export const CREATE_MASTER_ENGINEERING_EVOLUTION_TYPE =
  'create_master_engineering_evolution_type';
export const CREATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE =
  'create_master_engineering_evolution_risk_type';
export const CREATE_MASTER_DEVELOPMENT =
  'create_master_engineering_evolution_development';

export const UPDATE_MASTER_PRODUCT_UNITE = 'update_master_product_unite';
export const UPDATE_MASTER_PRODUCT_FREQUENCY =
  'update_master_product_frequency';
export const UPDATE_MASTER_MARKET_UNITE = 'update_master_market_unite';
export const UPDATE_MASTER_CUSTOMER_COMPETITOR =
  'update_master_customer_competitor';
export const UPDATE_MASTER_CUSTOMER_CHARACTERISTICS =
  'update_master_customer_characteristics';
export const UPDATE_MASTER_FEATURE_TYPE = 'update_master_feature_type';
export const UPDATE_MASTER_RECURRENCE = 'update_master_recurrence';
export const UPDATE_MASTER_ENGINEERING_EVOLUTION_TYPE =
  'update_master_engineering_evolution_type';
export const UPDATE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE =
  'update_master_engineering_evolution_risk_type';
export const UPDATE_MASTER_DEVELOPMENT =
  'update_master_engineering_evolution_development';

export const GET_MASTER_PRODUCT_UNITE = 'get_master_product_unite';
export const GET_MASTER_PRODUCT_FREQUENCY = 'get_master_product_frequency';
export const GET_MASTER_MARKET_UNITE = 'get_master_market_unite';
export const GET_MASTER_CUSTOMER_COMPETITOR = 'get_master_customer_competitor';
export const GET_MASTER_CUSTOMER_CHARACTERISTICS =
  'get_master_customer_characteristics';
export const GET_MASTER_FEATURE_TYPE = 'get_master_feature_type';

export const GET_MASTER_RECURRENCE = 'get_master_recurrence';
export const GET_MASTER_ENGINEERING_EVOLUTION_TYPE =
  'get_master_engineering_evolution_type';
export const GET_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE =
  'get_master_engineering_evolution_risk_type';
export const GET_MASTER_DEVELOPMENT =
  'get_master_engineering_evolution_development';
export const DELETE_MASTER_PRODUCT_UNITE = 'delete_master_product_unite';
export const DELETE_MASTER_PRODUCT_FREQUENCY =
  'delete_master_product_frequency';
export const DELETE_MASTER_MARKET_UNITE = 'delete_master_market_unite';
export const DELETE_MASTER_CUSTOMER_COMPETITOR =
  'delete_master_customer_competitor';
export const DELETE_MASTER_CUSTOMER_CHARACTERISTICS =
  'delete_master_customer_characteristics';
export const DELETE_MASTER_FEATURE_TYPE = 'delete_master_feature_type';
export const DELETE_MASTER_RECURRENCE = 'delete_master_recurrence';
export const DELETE_MASTER_ENGINEERING_EVOLUTION_TYPE =
  'delete_master_engineering_evolution_type';
export const DELETE_MASTER_ENGINEERING_EVOLUTION_RISK_TYPE =
  'delete_master_engineering_evolution_risk_type';
export const DELETE_MASTER_DEVELOPMENT =
  'delete_master_engineering_evolution_development';

//KNOW_YOUR_MARKET

export const GET_KNOW_YOUR_MARKET = 'get_know_your_market';
export const UPDATE_KNOW_YOUR_MARKET = 'update_know_your_market';
export const CREATE_KNOW_YOUR_MARKET = 'create_know_your_market';

export const GET_RISK = 'get_risk';
export const UPDATE_RISK = 'update_risk';
export const CREATE_RISK = 'create_risk';
export const DELETE_RISK = 'delete_risk';

export const GET_OPPORTUNITY = 'get_opportunity';
export const UPDATE_OPPORTUNITY = 'update_opportunity';
export const CREATE_OPPORTUNITY = 'create_opportunity';
export const DELETE_OPPORTUNITY = 'delete_opportunity';

//WHO_IS_THE_CUSTOMER
export const GET_UPDATED_CUSTOMER_COUNT = 'get_updated_customer_count';
export const GET_CUSTOMER_MARKET = 'get_customer_market';
export const UPDATE_CUSTOMER_MARKET = 'update_customer_market';

export const GET_CUSTOMER_MARKET_COMPETITOR = 'get_customer_market_competitor';

export const UPDATE_CUSTOMER_MARKET_COMPETITOR =
  'update_customer_market_competitor';
export const CREATE_CUSTOMER_MARKET_COMPETITOR =
  'create_customer_market_competitor';

export const DELETE_CUSTOMER_MARKET_COMPETITOR =
  'delete_customer_market_competitor';
export const CREATE_CUSTOMER_PROFILE = 'create_customer_profile';
export const GET_CUSTOMER_PROFILE = 'get_customer_profile';
export const UPDATE_CUSTOMER_PROFILE = 'update_customer_profile';
export const GET_CUSTOMER_PROFILE_CHARACTERISTICS =
  'get_customer_profile_characteristics';
export const CREATE_CUSTOMER_PROFILE_CHARACTERISTICS =
  'create_customer_profile_characteristics';
export const UPDATE_CUSTOMER_PROFILE_CHARACTERISTICS =
  'update_customer_profile_characteristics';
export const DELETE_CUSTOMER_PROFILE_CHARACTERISTICS =
  'delete_customer_profile_characteristics';

//WHAT_CUSTOMER_WANTS
export const CUSTOMER_MARKET_COMPETITOR_CHANGED =
  'customer_market_competitor_changed';
export const GET_FEATURE = 'get_feature';
export const CREATE_FEATURE = 'create_feature';
export const UPDATE_FEATURE = 'update_feature';
export const DELETE_FEATURE = 'delete_feature';
export const GET_FEATURE_COMPETITOR = 'get_feature_competitor';

//SALES_PROJECTION

export const GET_SALES_PROJECTION = 'get_sales_projection';
export const UPDATE_SALES_PROJECTION = 'update_sales_projection';
export const CREATE_SALES_PROJECTION = 'create_sales_projection';

//INITIATIVE_STRATEGIES

export const GET_INITIATIVE_STRATEGIES = 'get_initiative_strategy';
export const UPDATE_INITIATIVE_STRATEGIES = 'update_initiative_strategy';
export const CREATE_INITIATIVE_STRATEGIES = 'create_initiative_strategy';
export const DELETE_INITIATIVE_STRATEGIES = 'delete_initiative_strategy';
//ENGINEERING_EVOLUTIONS

export const GET_ENGINEERING_EVOLUTIONS = 'get_engineering_evolutions';
export const UPDATE_ENGINEERING_EVOLUTIONS = 'update_engineering_evolutions';
export const CREATE_ENGINEERING_EVOLUTIONS = 'create_engineering_evolutions';
export const DELETE_ENGINEERING_EVOLUTIONS = 'delete_engineering_evolutions';

//STRATEGY

export const GET_STRATEGY = 'get_strategy';
export const UPDATE_STRATEGY = 'update_strategy';
export const CREATE_STRATEGY = 'create_strategy';
export const DELETE_STRATEGY = 'delete_strategy';

//ENGINEERING_EXECUTION_ACTIVITIES

export const GET_ENGINEERING_EXECUTION_ACTIVITIES =
  'get_engineering_execution_activities';
export const UPDATE_ENGINEERING_EXECUTION_ACTIVITIES =
  'update_engineering_execution_activities';
export const CREATE_ENGINEERING_EXECUTION_ACTIVITIES =
  'create_engineering_execution_activities';
export const DELETE_ENGINEERING_EXECUTION_ACTIVITIES =
  'delete_engineering_execution_activities';

//ENGINEERING_EXECUTION_SPECIFICATION

export const GET_ENGINEERING_EXECUTION_SPECIFICATION =
  'get_engineering_execution_specification';
export const UPDATE_ENGINEERING_EXECUTION_SPECIFICATION =
  'update_engineering_execution_specification';

export const ENGINEERING_EXECUTION_SPECIFICATION_CHANGED =
  'engineering_execution_specification_changed';

//MAN_POWER

export const GET_MAN_POWER = 'get_man_power';
export const UPDATE_MAN_POWER = 'update_man_power';
export const CREATE_MAN_POWER = 'create_man_power';
export const DELETE_MAN_POWER = 'delete_man_power';

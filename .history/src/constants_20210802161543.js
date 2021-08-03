import _ from 'lodash';

export const INIT_CY = 'INIT_CY';
export const UPDATE_CY = 'UPDATE_CY';
export const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
export const EMBEDDED_REF = 'nuVizRef';

export const SHOW_NODE_INFO = 'SHOW_NODE_INFO';
export const HOME_DATA_FETCH_BEGIN = 'HOME_DATA_FETCH_BEGIN';
export const HOME_DATA_FETCH_SUCCESS = 'HOME_DATA_FETCH_SUCCESS';
export const HOME_DATA_FETCH_FAILURE = 'HOME_DATA_FETCH_FAILURE';
export const HOME_DATA_FETCH_DISMISS_ERROR = 'HOME_DATA_FETCH_DISMISS_ERROR';

export const HOME_DATA_FETCH_NORMALIZE_BEGIN = 'HOME_DATA_FETCH_NORMALIZE_BEGIN';
export const HOME_DATA_FETCH_NORMALIZE_SUCCESS = 'HOME_DATA_FETCH_NORMALIZE_SUCCESS';
export const HOME_DATA_FETCH_NORMALIZE_FAILURE = 'HOME_DATA_FETCH_NORMALIZE_FAILURE';

export const HOME_DATA_FETCH_EXTERNAL_URI_BEGIN = 'HOME_DATA_FETCH_EXTERNAL_URI_BEGIN';
export const HOME_DATA_FETCH_EXTERNAL_URI_SUCCESS = 'HOME_DATA_FETCH_EXTERNAL_URI_SUCCESS';
export const HOME_DATA_FETCH_EXTERNAL_URI_FAILURE = 'HOME_DATA_FETCH_EXTERNAL_URI_FAILURE';
export const HOME_DATA_FETCH_EXTERNAL_URI_CLEAR = 'HOME_DATA_FETCH_EXTERNAL_URI_CLEAR';

export const QUERY_HISTORY_FETCH_BEGIN = 'QUERY_HISTORY_FETCH_BEGIN';
export const QUERY_HISTORY_FETCH_SUCCESS = 'QUERY_HISTORY_FETCH_SUCCESS';
export const QUERY_HISTORY_FETCH_FAILURE = 'QUERY_HISTORY_FETCH_FAILURE';
export const QUERY_HISTORY_FETCH_DISMISS_ERROR = 'QUERY_HISTORY_FETCH_DISMISS_ERROR';

export const USER_ACCESS_LEVEL = 'USER_ACCESS_LEVEL';
export const HOME_DATA_SAVE_RUN_SCRIPT_RES = 'HOME_DATA_SAVE_RUN_SCRIPT_RES';

export const RUN_SCRIPT_BEGIN = 'RUN_SCRIPT_BEGIN';
export const RUN_SCRIPT_SUCCESS = 'RUN_SCRIPT_SUCCESS';
export const RUN_SCRIPT_FAILURE = 'RUN_SCRIPT_FAILURE';

export const FILTER_ACTION_SELECT = 'FILTER_ACTION_SELECT';
export const FILTER_ACTION_UNION = 'FILTER_ACTION_UNION';
export const FILTER_ACTION_INTERSECT = 'FILTER_ACTION_INTERSECT';
export const FILTER_ACTION_REVERSE_SELECT = 'FILTER_ACTION_REVERSE_SELECT';
export const FILTER_ACTION_HIDE_OTHER = 'FILTER_ACTION_HIDE_OTHER';
export const FILTER_ACTION_REMOVE_SELECTED = 'FILTER_ACTION_REMOVE_SELECTED';
export const FILTER_ACTION_REMOVE_OTHER = 'FILTER_ACTION_REMOVE_OTHER';
export const FILTER_ACTION_EXCLUDE = 'FILTER_ACTION_EXCLUDE';

export const ENDPOINT = '.';

export const DEFAULT_NODE_LIMIT = 20;
export const NODE_LIMIT_TYPE_LIMIT_FIRST = 'NODE_LIMIT_TYPE_LIMIT_FIRST';
export const NODE_LIMIT_TYPE_FILTER_FIRST = 'NODE_LIMIT_TYPE_FILTER_FIRST';

export const ELEMENTS_COUNT_PERFORMANCE_THRESHOLD = 100;

export const AttrSubValueMap = {
  reg_name: 'Registration Name',
  reg_addr: 'Registration Address',
  ship_addr: 'Shipping Address',
  bill_addr: 'Billing Address',
  reg_email: 'Registration Email',
  pp_email: 'PayPal Email',
  day_phone: 'Day Phone',
  night_phone: 'Night Phone',
  cell_phone: 'Cell Phone',
  fax_phone: 'Fax Phone',
  sms_phone: 'SMS Phone',
  reg_store: 'Registration Store',
  credit_card: 'Credit Card',
  bank_account: 'Bank Account',
  // iban: 'IBAN',
  reg_machine_id: 'Registration Machine ID',
  machine_id: 'Active Machine ID',
  reg_ip_addr: 'Registration IP address',
  reg_selr_ip_addr: 'Registration Seller IP address',
  trans_ip_addr: 'Transaction IP',
  nat_id: 'National ID',
  PayPalExplicit: 'PayPal Explicit',
  PayPalImplicit: 'PayPal Implicit',
  fin: 'Financial',
  trans_bill_addr: 'Transaction Billing Address',
  trans_ship_addr: 'Transaction Shipping Address',
  trans_email: 'Transaction PayPal Email',
  trans_buyer_email: 'Transaction Buyer Email',
  trans_google_email: 'Transaction Google Email',
  trans_paypal_email: 'Transaction PayPal Email',
  oms_trans_bill_addr: 'OMS Transaction Billing Address',
};

export const AttrSubValueMapForValue = (() => {
  const objForValue = {};
  Object.keys(AttrSubValueMap).forEach(key => {
    objForValue[AttrSubValueMap[key]] = key;
  });
  return objForValue;
})();

export const NodeLabelMap = {
  Account: 'Account',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  address: 'Address',
  ip_addr: 'IP Address',
  machine_id: 'Machine Id',
  store: 'store',
  credit_card: 'Credit Card',
  bank_account: 'Bank Account',
  // iban: 'IBAN',
  national_id: 'National ID',
  rfc_token: 'RFC Token',
  ERS: 'ERS AccountId',
};

export const attrOptionListWithLabel = {
  name: [{ key: 'reg_name', label: AttrSubValueMap['reg_name'], value: 'reg_name' }],
  email: [
    { key: 'reg_email', label: AttrSubValueMap['reg_email'], value: 'reg_email' },
    { key: 'pp_email', label: AttrSubValueMap['pp_email'], value: 'pp_email' },
    { key: 'trans_email', label: AttrSubValueMap['trans_email'], value: 'trans_email' },
    {
      key: 'trans_buyer_email',
      label: AttrSubValueMap['trans_buyer_email'],
      value: 'trans_buyer_email',
    },
    {
      key: 'trans_google_email',
      label: AttrSubValueMap['trans_google_email'],
      value: 'trans_google_email',
    },
    {
      key: 'trans_paypal_email',
      label: AttrSubValueMap['trans_paypal_email'],
      value: 'trans_paypal_email',
    },
  ],
  phone: [
    { key: 'night_phone', label: AttrSubValueMap['night_phone'], value: 'night_phone' },
    { key: 'day_phone', label: AttrSubValueMap['day_phone'], value: 'day_phone' },
    { key: 'cell_phone', label: AttrSubValueMap['cell_phone'], value: 'cell_phone' },
    { key: 'fax_phone', label: AttrSubValueMap['fax_phone'], value: 'fax_phone' },
    { key: 'sms_phone', label: AttrSubValueMap['sms_phone'], value: 'sms_phone' },
  ],
  address: [
    { key: 'reg_addr', label: AttrSubValueMap['reg_addr'], value: 'reg_addr' },
    { key: 'ship_addr', label: AttrSubValueMap['ship_addr'], value: 'ship_addr' },
    { key: 'bill_addr', label: AttrSubValueMap['bill_addr'], value: 'bill_addr' },
    { key: 'trans_bill_addr', label: AttrSubValueMap['trans_bill_addr'], value: 'trans_bill_addr' },
    { key: 'trans_ship_addr', label: AttrSubValueMap['trans_ship_addr'], value: 'trans_ship_addr' },
    {
      key: 'oms_trans_bill_addr',
      label: AttrSubValueMap['oms_trans_bill_addr'],
      value: 'oms_trans_bill_addr',
    },
  ],
  ip_addr: [
    { key: 'reg_ip_addr', label: AttrSubValueMap['reg_ip_addr'], value: 'reg_ip_addr' },
    {
      key: 'reg_selr_ip_addr',
      label: AttrSubValueMap['reg_selr_ip_addr'],
      value: 'reg_selr_ip_addr',
    },
    { key: 'trans_ip_addr', label: AttrSubValueMap['trans_ip_addr'], value: 'trans_ip_addr' },
  ],
  machine_id: [
    { key: 'reg_machine_id', label: AttrSubValueMap['reg_machine_id'], value: 'reg_machine_id' },
    { key: 'machine_id', label: AttrSubValueMap['machine_id'], value: 'machine_id' },
  ],
  store: [{ key: 'reg_store', label: AttrSubValueMap['reg_store'], value: 'reg_store' }],
  credit_card: [
    { key: 'credit_card', label: AttrSubValueMap['credit_card'], value: 'credit_card' },
  ],
  bank_account: [
    { key: 'bank_account', label: AttrSubValueMap['bank_account'], value: 'bank_account' },
  ],
  national_id: [{ key: 'nat_id', label: AttrSubValueMap['nat_id'], value: 'nat_id' }],
  rfc_token: [
    { key: 'PayPalExplicit', label: AttrSubValueMap['PayPalExplicit'], value: 'PayPalExplicit' },
    { key: 'PayPalImplicit', label: AttrSubValueMap['PayPalImplicit'], value: 'PayPalImplicit' },
  ],
};

export const AttributeValueDefaultOptions = {
  Account: [
    'Source',
    'AccountId',
    'RegistrationSiteId',
    'RegistrationDate',
    'Status',
    'StatusChangeDate',
  ],
  name: ['FirstName', 'LastName'],
  address: ['Addr1', 'Addr2', 'City', 'State', 'Zip', 'Country'],
  phone: ['PhoneCountryCode'],
  credit_card: ['IssuingBank'],
  bank_account: ['BankRoutingNumber', 'IssuingBank', 'IssuingBankCountryCode'],
  // iban: ['IssuingBank', 'IssuingBankCountryCode'],
  ip_addr: ['Type'],
  national_id: ['Type', 'CountryCode'],
};

export const EdgeLinksOpMap = {
  '>': '>',
  '>=': '>=',
  '===': '=',
  '<=': '<=',
  '<': '<',
};

export const FilterOpNotExists = '!';

export const FilterOpMap = {
  '>': '>',
  '>=': '>=',
  // '@=': '=',
  '=': '=',
  '<=': '<=',
  '<': '<',
  // '!@=': 'is not',
  // '@*=': 'contains',
  // '!@*=': 'does not contain',
  '!=': 'is not',
  '!': 'not exists',
  // '*=': 'contains',
};

export const SearchTypeNormalization = {
  name: {
    compositeParamNormalizations: {
      sourceParams: ['firstName', 'lastName'],
      delimiter: '|',
      targetParamName: 'input',
      schema: 'name',
    },
  },
  email: {
    paramNormalizations: {
      inputValue: {
        schema: 'email',
      },
    },
  },
  phone: {
    paramNormalizations: {
      inputValue: {
        schema: 'phone',
      },
    },
  },
  address: {
    compositeParamNormalizations: {
      sourceParams: ['address1', 'address2', 'city', 'zip', 'state', 'country'],
      delimiter: '|',
      targetParamName: 'input',
      rule: 'Uppercase',
      sourceParamNormalization: {
        address1: { schema: 'address' },
        address2: { schema: 'address2' },
        city: { schema: 'city' },
        state: { schema: 'state' },
        zip: { schema: 'zip' },
        country: { rule: 'Trim,Uppercase' },
      },
    },
  },
  store: {
    paramNormalizations: {
      inputValue: {
        schema: 'store',
      },
    },
  },
};

export const searchTypeOptions = [
  { key: 'account', text: 'Account ID', value: 'accountId' },
  ..._.chain(NodeLabelMap)
    .keys()
    .map(key => ({ key: key, text: NodeLabelMap[key], value: key }))
    .sort()
    .value(),
];

export const labelFilterOptions = _.chain(NodeLabelMap)
  .keys()
  .map(key => ({ key: key, label: NodeLabelMap[key], value: key }))
  .value();

export const edgeSubValueFilterOptions = _.chain(AttrSubValueMap)
  .keys()
  .map(key => ({ key: key, label: AttrSubValueMap[key], value: key }))
  .value();

export const filterOptions = _.chain(FilterOpMap)
  .keys()
  .map(key => ({ key: key, text: FilterOpMap[key], value: key }))
  .sort()
  .value();

export const edgeLinksOpOptions = _.chain(EdgeLinksOpMap)
  .keys()
  .map(key => ({ key: key, text: EdgeLinksOpMap[key], value: key }))
  .sort()
  .value();

export const translateOp = {
  '>': { before: "gt('", after: "')", links: '>' },
  '>=': { before: "gte('", after: "')", links: '>=' },
  '=': { before: "eq('", after: "')", links: '==' },
  '<=': { before: "lte('", after: "')", links: '<=' },
  '<': { before: "lt('", after: "')", links: '<' },
  '!=': { before: "neq('", after: "')", links: '!=' },
  '!': { before: '', after: '', links: '' },
  // '*=': { before: "textContains('", after: "')", links: '=' },
};

export const opMap = {
  '>': 'gt',
  '>=': 'gte',
  '=': 'eq',
  '<=': 'lte',
  '<': 'lt',
  '!=': 'neq',
};

export const LOOK_UP_MAP_COLUMN = {
  RegistrationSiteId: {
    key: 'site_id',
    value: 'site_name',
  },
  SuspensionReason: {
    key: 'admin_node_id',
    value: 'admin_node_name',
  },
  Status: {
    key: 'user_sts_code',
    value: 'user_sts_desc',
  },
  Source: {
    key: 'source id',
    value: 'source name',
  },
};

export const operationMap = {
  1: 'Search',
  2: 'Bulk Search',
  3: 'Traversal Node',
  4: 'Traversal All',
  5: 'Remove',
  6: 'Load Json',
  7: 'Run Script',
  8: 'Traversal',
};

export const accountAttrList = [
  'AccountId',
  'IsGuest',
  'IsP2Seller',
  'IsSeller',
  'RegistrationSiteId',
  'Source',
  'Status',
];

export const colors = [
  [211, 211, 211], // lightgray
  [247, 227, 118],
  [158, 244, 166],
  [255, 162, 182],
  [245, 160, 217],
  [113, 227, 226],
  [147, 201, 255],
  [254, 183, 134],
  [233, 245, 119],
  //** ******* */
  [94, 228, 113],
  [255, 105, 50],
  [234, 95, 188],
  [101, 158, 255],
  [2, 162, 172],
  [251, 205, 37],
  [158, 244, 166],
  [113, 227, 226],
  [245, 160, 217],
  [255, 162, 182],
  [255, 133, 89],
  [219, 60, 7],
  [54, 207, 87],
  [209, 29, 164],
  [134, 179, 0],
  [101, 158, 255],
  [229, 140, 2],
  [245, 222, 179], // wheat
  [143, 188, 143], // darkseagreen
  [216, 191, 216], // thistle
  [127, 255, 212], // aquamarine
  [255, 182, 193], // lightpink,
  [176, 196, 222], // lightsteelblue
  [188, 143, 143], // rosybrown
  [255, 228, 196], // bisque
  [176, 224, 230], // powderblue
  [144, 238, 144], // lightgreen
  [238, 130, 238], // violet
  [230, 230, 250], // lavender
  //**************** */
  // special color names
  // [0, 0, 0, 0], // transparent
  // NB alpha === 0
  [255, 105, 180], // hotpink
  [205, 92, 92], // indianred
  [75, 0, 130], // indigo
  [240, 230, 140], // khaki
  [221, 160, 221], // plum
  [255, 240, 245], // lavenderblush
  [124, 252, 0], // lawngreen
  [255, 250, 205], // lemonchiffon
  [173, 216, 230], // lightblue
  [240, 128, 128], // lightcoral
  [224, 255, 255], // lightcyan
  [250, 250, 210], // lightgoldenrodyellow
  [255, 160, 122], // lightsalmon
  [32, 178, 170], // lightseagreen
  [135, 206, 250], // lightskyblue
  [119, 136, 153], // lightslategray
  [165, 42, 42], // brown
  [222, 184, 135], // burlywood
  [95, 158, 160], // cadetblue
  [127, 255, 0], // chartreuse
  [210, 105, 30], // chocolate
  [255, 127, 80], // coral
  [100, 149, 237], // cornflowerblue
  [255, 248, 220], // cornsilk
  [220, 20, 60], // crimson
  // [0, 0, 139], // darkblue
  [0, 139, 139], // darkcyan
  [184, 134, 11], // darkgoldenrod
  [169, 169, 169], // darkgray
  [0, 100, 0], // darkgreen
  [189, 183, 107], // darkkhaki
  [139, 0, 139], // darkmagenta
  [85, 107, 47], // darkolivegreen
  [255, 140, 0], // darkorange
  [153, 50, 204], // darkorchid
  [139, 0, 0], // darkred
  [233, 150, 122], // darksalmon
  [72, 61, 139], // darkslateblue
  [47, 79, 79], // darkslategray
  [0, 206, 209], // darkturquoise
  [148, 0, 211], // darkviolet
  [255, 20, 147], // deeppink
  [0, 191, 255], // deepskyblue
  [105, 105, 105], // dimgray
  [30, 144, 255], // dodgerblue
  [178, 34, 34], // firebrick
  [255, 250, 240], // floralwhite
  [34, 139, 34], // forestgreen
  [255, 0, 255], // fuchsia
  [220, 220, 220], // gainsboro
  [248, 248, 255], // ghostwhite
  [255, 215, 0], // gold
  [218, 165, 32], // goldenrod
  // [128, 128, 128], // gray
  [0, 128, 0], // green
  [173, 255, 47], // greenyellow
  [240, 255, 240], // honeydew
  [255, 255, 224], // lightyellow
  [0, 255, 0], // lime
  [50, 205, 50], // limegreen
  [250, 240, 230], // linen
  [128, 0, 0], // maroon
  [102, 205, 170], // mediumaquamarine
  [0, 0, 205], // mediumblue
  [186, 85, 211], // mediumorchid
  [147, 112, 219], // mediumpurple
  [60, 179, 113], // mediumseagreen
  [123, 104, 238], // mediumslateblue
  [0, 250, 154], // mediumspringgreen
  [72, 209, 204], // mediumturquoise
  [199, 21, 133], // mediumvioletred
  [25, 25, 112], // midnightblue
  [245, 255, 250], // mintcream
  [255, 228, 225], // mistyrose
  [255, 228, 181], // moccasin
  [255, 222, 173], // navajowhite
  [0, 0, 128], // navy
  [253, 245, 230], // oldlace
  [128, 128, 0], // olive
  [107, 142, 35], // olivedrab
  [255, 165, 0], // orange
  [255, 69, 0], // orangered
  [218, 112, 214], // orchid
  [238, 232, 170], // palegoldenrod
  [152, 251, 152], // palegreen
  [175, 238, 238], // paleturquoise
  [219, 112, 147], // palevioletred
  [255, 239, 213], // papayawhip
  [255, 218, 185], // peachpuff
  [205, 133, 63], // peru
  [255, 192, 203], // pink
  [128, 0, 128], // purple
  [255, 0, 0], // red
  [0, 255, 255], // aqua
  [65, 105, 225], // royalblue
  [139, 69, 19], // saddlebrown
  [250, 128, 114], // salmon
  [244, 164, 96], // sandybrown
  [46, 139, 87], // seagreen
  [255, 245, 238], // seashell
  [160, 82, 45], // sienna
  [192, 192, 192], // silver
  [135, 206, 235], // skyblue
  [106, 90, 205], // slateblue
  [112, 128, 144], // slategray
  [255, 250, 250], // snow
  [0, 255, 127], // springgreen
  [70, 130, 180], // steelblue
  [210, 180, 140], // tan
  [0, 128, 128], // teal
  [255, 99, 71], // tomato
  [64, 224, 208], // turquoise
  [255, 255, 255], // white
  [245, 245, 245], // whitesmoke
  [255, 255, 0], // yellow
  [154, 205, 50], // yellowgreen
  [0, 0, 0], // black
  // [255, 235, 205], // blanchedalmond
  [0, 0, 255], // blue
  [138, 43, 226], // blueviolet
  // [255, 255, 240], // ivory
  // regular colours
  // [240, 248, 255], // aliceblue
  // [250, 235, 215], // antiquewhite
  // [240, 255, 255], // azure
  // [245, 245, 220], // beige
];

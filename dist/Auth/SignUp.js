var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _awsAmplify=require("aws-amplify");var _AmplifyUI=require("../AmplifyUI");var _AuthPiece2=_interopRequireDefault(require("./AuthPiece"));var _CountryDialCodes=_interopRequireDefault(require("../CountryDialCodes"));var _defaultSignUpFields=_interopRequireWildcard(require("./common/default-sign-up-fields"));var _AmplifyTestIDs=_interopRequireDefault(require("../AmplifyTestIDs"));var _Utils=require("../Utils");var _jsxFileName="/root/amplify-js/packages/aws-amplify-react-native/src/Auth/SignUp.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('SignUp');var SignUp=function(_AuthPiece){(0,_inherits2.default)(SignUp,_AuthPiece);var _super=_createSuper(SignUp);function SignUp(props){var _this;(0,_classCallCheck2.default)(this,SignUp);_this=_super.call(this,props);_this._validAuthStates=['signUp'];_this.state={};_this.signUp=_this.signUp.bind((0,_assertThisInitialized2.default)(_this));_this.sortFields=_this.sortFields.bind((0,_assertThisInitialized2.default)(_this));_this.getDefaultDialCode=_this.getDefaultDialCode.bind((0,_assertThisInitialized2.default)(_this));_this.checkCustomSignUpFields=_this.checkCustomSignUpFields.bind((0,_assertThisInitialized2.default)(_this));_this.needPrefix=_this.needPrefix.bind((0,_assertThisInitialized2.default)(_this));_this.header=_this.props&&_this.props.signUpConfig&&_this.props.signUpConfig.header?_this.props.signUpConfig.header:'Create a new account';var _this$props$usernameA=_this.props.usernameAttributes,usernameAttributes=_this$props$usernameA===void 0?'username':_this$props$usernameA;if(usernameAttributes==='email'){_this.defaultSignUpFields=_defaultSignUpFields.signUpWithEmailFields;}else if(usernameAttributes==='phone_number'){_this.defaultSignUpFields=_defaultSignUpFields.signUpWithPhoneNumberFields;}else{_this.defaultSignUpFields=_defaultSignUpFields.default;}return _this;}(0,_createClass2.default)(SignUp,[{key:"isValid",value:function isValid(){for(var _iterator=_createForOfIteratorHelperLoose(this.signUpFields),_step;!(_step=_iterator()).done;){var el=_step.value;if(el.required&&!this.state[el.key])return false;}return true;}},{key:"sortFields",value:function sortFields(){var _this2=this;if(this.props.signUpConfig&&this.props.signUpConfig.hiddenDefaults&&this.props.signUpConfig.hiddenDefaults.length>0){this.defaultSignUpFields=this.defaultSignUpFields.filter(function(d){return!_this2.props.signUpConfig.hiddenDefaults.includes(d.key);});}if(this.checkCustomSignUpFields()){if(!this.props.signUpConfig||!this.props.signUpConfig.hideAllDefaults){this.defaultSignUpFields.forEach(function(f,i){var matchKey=_this2.signUpFields.findIndex(function(d){return d.key===f.key;});if(matchKey===-1){_this2.signUpFields.push(f);}});}this.signUpFields.sort(function(a,b){if(a.displayOrder&&b.displayOrder){if(a.displayOrder<b.displayOrder){return-1;}else if(a.displayOrder>b.displayOrder){return 1;}else{if(a.key<b.key){return-1;}else{return 1;}}}else if(!a.displayOrder&&b.displayOrder){return 1;}else if(a.displayOrder&&!b.displayOrder){return-1;}else if(!a.displayOrder&&!b.displayOrder){if(a.key<b.key){return-1;}else{return 1;}}});}else{this.signUpFields=this.defaultSignUpFields;}}},{key:"needPrefix",value:function needPrefix(key){var field=this.signUpFields.find(function(e){return e.key===key;});if(key.indexOf('custom:')!==0){return field.custom;}else if(key.indexOf('custom:')===0&&field.custom===false){logger.warn('Custom prefix prepended to key but custom field flag is set to false');}return null;}},{key:"getDefaultDialCode",value:function getDefaultDialCode(){return this.props.signUpConfig&&this.props.signUpConfig.defaultCountryCode&&_CountryDialCodes.default.indexOf("+"+this.props.signUpConfig.defaultCountryCode)!==-1?"+"+this.props.signUpConfig.defaultCountryCode:'+1';}},{key:"checkCustomSignUpFields",value:function checkCustomSignUpFields(){return this.props.signUpConfig&&this.props.signUpConfig.signUpFields&&this.props.signUpConfig.signUpFields.length>0;}},{key:"signUp",value:function signUp(){var _this3=this;if(!_awsAmplify.Auth||typeof _awsAmplify.Auth.signUp!=='function'){throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');}var signup_info={username:this.state.username,password:this.state.password,attributes:{}};var inputKeys=Object.keys(this.state);var inputVals=Object.values(this.state);inputKeys.forEach(function(key,index){if(!['username','password','checkedValue'].includes(key)){if(key!=='phone_line_number'&&key!=='dial_code'&&key!=='error'){var newKey=""+(_this3.needPrefix(key)?'custom:':'')+key;signup_info.attributes[newKey]=inputVals[index];}}});var labelCheck=false;this.signUpFields.forEach(function(field){if(field.label===_this3.getUsernameLabel()){logger.debug("Changing the username to the value of "+field.label);signup_info.username=signup_info.attributes[field.key]||signup_info.username;labelCheck=true;}});if(!labelCheck&&!signup_info.username){throw new Error("Couldn't find the label: "+this.getUsernameLabel()+", in sign up fields according to usernameAttributes!");}logger.debug('Signing up with',signup_info);_awsAmplify.Auth.signUp(signup_info).then(function(data){_this3.changeState('confirmSignUp',data.user.username);}).catch(function(err){return _this3.error(err);});}},{key:"showComponent",value:function showComponent(theme){var _this4=this;if(this.checkCustomSignUpFields()){this.signUpFields=this.props.signUpConfig.signUpFields;}this.sortFields();return _react.default.createElement(_AmplifyUI.Wrapper,{__self:this,__source:{fileName:_jsxFileName,lineNumber:247,columnNumber:4}},_react.default.createElement(_reactNative.ScrollView,{style:theme.sectionScroll,keyboardShouldPersistTaps:"handled",__self:this,__source:{fileName:_jsxFileName,lineNumber:248,columnNumber:5}},_react.default.createElement(_AmplifyUI.Header,{theme:theme,testID:_AmplifyTestIDs.default.AUTH.SIGN_UP_TEXT,__self:this,__source:{fileName:_jsxFileName,lineNumber:252,columnNumber:6}},_awsAmplify.I18n.get(this.header)),_react.default.createElement(_reactNative.View,{style:theme.sectionBody,__self:this,__source:{fileName:_jsxFileName,lineNumber:255,columnNumber:6}},this.signUpFields.map(function(field){return field.key!=='phone_number'?_react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({key:field.key,theme:theme,type:field.type,secureTextEntry:field.type==='password',onChangeText:function onChangeText(text){var stateObj=_this4.state;stateObj[field.key]=text;_this4.setState(stateObj);},label:_awsAmplify.I18n.get(field.label),placeholder:_awsAmplify.I18n.get(field.placeholder),required:field.required},(0,_Utils.setTestId)(field.testID),{__self:_this4,__source:{fileName:_jsxFileName,lineNumber:258,columnNumber:9}})):_react.default.createElement(_AmplifyUI.PhoneField,(0,_extends2.default)({theme:theme,key:field.key,onChangeText:function onChangeText(text){return _this4.setState({phone_number:text});},label:_awsAmplify.I18n.get(field.label),placeholder:_awsAmplify.I18n.get(field.placeholder),keyboardType:"phone-pad",required:field.required,defaultDialCode:_this4.getDefaultDialCode()},(0,_Utils.setTestId)(field.testID),{__self:_this4,__source:{fileName:_jsxFileName,lineNumber:275,columnNumber:9}}));}),_react.default.createElement(_AmplifyUI.AmplifyButton,(0,_extends2.default)({text:_awsAmplify.I18n.get('Sign Up').toUpperCase(),theme:theme,onPress:this.signUp,disabled:!this.isValid()},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.SIGN_UP_BUTTON),{__self:this,__source:{fileName:_jsxFileName,lineNumber:288,columnNumber:7}}))),_react.default.createElement(_reactNative.View,{style:theme.sectionFooter,__self:this,__source:{fileName:_jsxFileName,lineNumber:296,columnNumber:6}},_react.default.createElement(_AmplifyUI.LinkCell,{theme:theme,onPress:function onPress(){return _this4.changeState('confirmSignUp');},testID:_AmplifyTestIDs.default.AUTH.CONFIRM_A_CODE_BUTTON,__self:this,__source:{fileName:_jsxFileName,lineNumber:297,columnNumber:7}},_awsAmplify.I18n.get('Confirm a Code')),_react.default.createElement(_AmplifyUI.LinkCell,{theme:theme,onPress:function onPress(){return _this4.changeState('signIn');},testID:_AmplifyTestIDs.default.AUTH.SIGN_IN_BUTTON,__self:this,__source:{fileName:_jsxFileName,lineNumber:304,columnNumber:7}},_awsAmplify.I18n.get('Sign In'))),_react.default.createElement(_AmplifyUI.ErrorRow,{theme:theme,__self:this,__source:{fileName:_jsxFileName,lineNumber:312,columnNumber:6}},this.state.error),_react.default.createElement(_AmplifyUI.SignedOutMessage,(0,_extends2.default)({},this.props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:313,columnNumber:6}}))));}}]);return SignUp;}(_AuthPiece2.default);exports.default=SignUp;
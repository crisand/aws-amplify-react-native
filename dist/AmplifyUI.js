var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Wrapper=exports.SignedOutMessage=exports.PhoneField=exports.LinkCell=exports.Header=exports.FormField=exports.ErrorRow=exports.Container=exports.AmplifyButton=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _picker=require("@react-native-picker/picker");var _awsAmplify=require("aws-amplify");var _AmplifyTheme=_interopRequireWildcard(require("./AmplifyTheme"));var _CountryDialCodes=_interopRequireDefault(require("./CountryDialCodes"));var _AmplifyTestIDs=_interopRequireDefault(require("./AmplifyTestIDs"));var _icons=_interopRequireDefault(require("./icons"));var _Utils=require("./Utils");var _this=this,_jsxFileName="/Users/cristiananderes/_WORK_/HTML/aws-amplify-react-native/src/AmplifyUI.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Container=function Container(props){var theme=props.theme||_AmplifyTheme.default;return _react.default.createElement(_reactNative.SafeAreaView,{style:theme.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:10}},props.children);};exports.Container=Container;var FormField=function FormField(props){var theme=props.theme||_AmplifyTheme.default;return _react.default.createElement(_reactNative.View,{style:[theme.formField,{height:props.isHidden?0:'initial'}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:5}},_react.default.createElement(_reactNative.Text,{style:theme.inputLabel,__self:_this,__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:7}},props.label," ",props.required?'*':''),_react.default.createElement(_reactNative.TextInput,(0,_extends2.default)({value:props.defaultValue,style:theme.input,autoCapitalize:"none",autoCorrect:false,placeholderTextColor:_AmplifyTheme.placeholderColor},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:7}})));};exports.FormField=FormField;var minWidth={minWidth:_reactNative.Platform.OS==='android'?16:0};var PhoneField=function(_Component){(0,_inherits2.default)(PhoneField,_Component);var _super=_createSuper(PhoneField);function PhoneField(props){var _this2;(0,_classCallCheck2.default)(this,PhoneField);_this2=_super.call(this,props);_this2.state={dialCode:_this2.props.defaultDialCode||'+1',phone:''};return _this2;}(0,_createClass2.default)(PhoneField,[{key:"onChangeText",value:function onChangeText(){var _this$state=this.state,dialCode=_this$state.dialCode,phone=_this$state.phone;var cleanedPhone=phone.replace(/[^0-9.]/g,'')||'';var phoneNumber=cleanedPhone===''?'':""+dialCode+cleanedPhone;this.props.onChangeText(phoneNumber);}},{key:"render",value:function render(){var _this3=this;var _this$props=this.props,label=_this$props.label,required=_this$props.required,value=_this$props.value;var dialCode=this.state.dialCode;var theme=this.props.theme||_AmplifyTheme.default;var phoneValue=value?value.replace(dialCode,''):undefined;return _react.default.createElement(_reactNative.View,{style:theme.formField,__self:this,__source:{fileName:_jsxFileName,lineNumber:114,columnNumber:7}},_react.default.createElement(_reactNative.Text,{style:theme.inputLabel,__self:this,__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:9}},label," ",required?'*':''),_react.default.createElement(_reactNative.View,{style:theme.phoneContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:9}},_react.default.createElement(_picker.Picker,{style:theme.picker,selectedValue:this.state.dialCode,itemStyle:theme.pickerItem,onValueChange:function onValueChange(dialCode){_this3.setState({dialCode:dialCode},function(){_this3.onChangeText();});},__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:11}},_CountryDialCodes.default.map(function(dialCode){return _react.default.createElement(_picker.Picker.Item,{key:dialCode,value:dialCode,label:dialCode,__self:_this3,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:15}});})),_react.default.createElement(_reactNative.TextInput,(0,_extends2.default)({style:theme.phoneInput,autoCapitalize:"none",autoCorrect:false,placeholderTextColor:_AmplifyTheme.placeholderColor},this.props,{value:phoneValue,onChangeText:function onChangeText(phone){_this3.setState({phone:phone},function(){_this3.onChangeText();});},__self:this,__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:11}}))));}}]);return PhoneField;}(_react.Component);exports.PhoneField=PhoneField;var LinkCell=function LinkCell(props){var disabled=props.disabled;var theme=props.theme||_AmplifyTheme.default;return _react.default.createElement(_reactNative.View,{style:theme.cell,__self:_this,__source:{fileName:_jsxFileName,lineNumber:163,columnNumber:5}},_react.default.createElement(_reactNative.TouchableHighlight,(0,_extends2.default)({onPress:props.onPress,underlayColor:_AmplifyTheme.linkUnderlayColor},(0,_Utils.setTestId)(props.testID),{disabled:disabled,__self:_this,__source:{fileName:_jsxFileName,lineNumber:164,columnNumber:7}}),_react.default.createElement(_reactNative.Text,{style:disabled?theme.sectionFooterLinkDisabled:theme.sectionFooterLink,__self:_this,__source:{fileName:_jsxFileName,lineNumber:170,columnNumber:9}},props.children)));};exports.LinkCell=LinkCell;var Header=function Header(props){var theme=props.theme||_AmplifyTheme.default;return _react.default.createElement(_reactNative.View,{style:theme.sectionHeader,__self:_this,__source:{fileName:_jsxFileName,lineNumber:184,columnNumber:5}},_react.default.createElement(_reactNative.Text,(0,_extends2.default)({style:theme.sectionHeaderText},(0,_Utils.setTestId)(props.testID),{__self:_this,__source:{fileName:_jsxFileName,lineNumber:185,columnNumber:7}}),props.children));};exports.Header=Header;var ErrorRow=function ErrorRow(props){var theme=props.theme||_AmplifyTheme.default;if(!props.children)return null;return _react.default.createElement(_reactNative.View,{style:theme.errorRow,__self:_this,__source:{fileName:_jsxFileName,lineNumber:200,columnNumber:5}},_react.default.createElement(_reactNative.Image,{source:_icons.default.warning,style:theme.errorRowIcon,__self:_this,__source:{fileName:_jsxFileName,lineNumber:201,columnNumber:7}}),_react.default.createElement(_reactNative.Text,(0,_extends2.default)({style:theme.errorRowText},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.ERROR_ROW_TEXT),{__self:_this,__source:{fileName:_jsxFileName,lineNumber:202,columnNumber:7}}),props.children));};exports.ErrorRow=ErrorRow;var AmplifyButton=function AmplifyButton(props){var theme=props.theme||_AmplifyTheme.default;var style=theme.button;if(props.disabled){style=theme.buttonDisabled;}if(props.style){style=[style,props.style];}return _react.default.createElement(_reactNative.TouchableOpacity,(0,_extends2.default)({},props,{style:style,__self:_this,__source:{fileName:_jsxFileName,lineNumber:228,columnNumber:5}}),_react.default.createElement(_reactNative.Text,{style:theme.buttonText,__self:_this,__source:{fileName:_jsxFileName,lineNumber:229,columnNumber:7}},props.text));};exports.AmplifyButton=AmplifyButton;var Wrapper=function Wrapper(props){var isWeb=_reactNative.Platform.OS==='web';var WrapperComponent=isWeb?_reactNative.View:_reactNative.TouchableWithoutFeedback;var wrapperProps={style:_AmplifyTheme.default.section,accessible:false};if(!isWeb){wrapperProps.onPress=_reactNative.Keyboard.dismiss;}return _react.default.createElement(WrapperComponent,(0,_extends2.default)({},wrapperProps,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:253,columnNumber:10}}),props.children);};exports.Wrapper=Wrapper;var SignedOutMessage=function SignedOutMessage(props){var theme=props.theme||_AmplifyTheme.default;var message=props.signedOutMessage||_awsAmplify.I18n.get('Please Sign In / Sign Up');return _react.default.createElement(_reactNative.Text,(0,_extends2.default)({style:theme.signedOutMessage},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.GREETING_SIGNED_OUT_TEXT),{__self:_this,__source:{fileName:_jsxFileName,lineNumber:260,columnNumber:5}}),message);};exports.SignedOutMessage=SignedOutMessage;
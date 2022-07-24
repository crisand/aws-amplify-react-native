var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"AuthPiece",{enumerable:true,get:function get(){return _AuthPiece.default;}});Object.defineProperty(exports,"Authenticator",{enumerable:true,get:function get(){return _Authenticator.default;}});Object.defineProperty(exports,"ConfirmSignIn",{enumerable:true,get:function get(){return _ConfirmSignIn.default;}});Object.defineProperty(exports,"ConfirmSignUp",{enumerable:true,get:function get(){return _ConfirmSignUp.default;}});Object.defineProperty(exports,"ForgotPassword",{enumerable:true,get:function get(){return _ForgotPassword.default;}});Object.defineProperty(exports,"Greetings",{enumerable:true,get:function get(){return _Greetings.default;}});Object.defineProperty(exports,"Loading",{enumerable:true,get:function get(){return _Loading.default;}});Object.defineProperty(exports,"RequireNewPassword",{enumerable:true,get:function get(){return _RequireNewPassword.default;}});Object.defineProperty(exports,"SignIn",{enumerable:true,get:function get(){return _SignIn.default;}});Object.defineProperty(exports,"SignUp",{enumerable:true,get:function get(){return _SignUp.default;}});Object.defineProperty(exports,"VerifyContact",{enumerable:true,get:function get(){return _VerifyContact.default;}});exports.withAuthenticator=withAuthenticator;Object.defineProperty(exports,"withOAuth",{enumerable:true,get:function get(){return _withOAuth.default;}});var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _awsAmplify=require("aws-amplify");var _Authenticator=_interopRequireDefault(require("./Authenticator"));var _AuthPiece=_interopRequireDefault(require("./AuthPiece"));var _Loading=_interopRequireDefault(require("./Loading"));var _SignIn=_interopRequireDefault(require("./SignIn"));var _ConfirmSignIn=_interopRequireDefault(require("./ConfirmSignIn"));var _SignUp=_interopRequireDefault(require("./SignUp"));var _ConfirmSignUp=_interopRequireDefault(require("./ConfirmSignUp"));var _ForgotPassword=_interopRequireDefault(require("./ForgotPassword"));var _RequireNewPassword=_interopRequireDefault(require("./RequireNewPassword"));var _VerifyContact=_interopRequireDefault(require("./VerifyContact"));var _Greetings=_interopRequireDefault(require("./Greetings"));var _withOAuth=_interopRequireDefault(require("./withOAuth"));var _jsxFileName="/Users/cristiananderes/_WORK_/HTML/aws-amplify-react-native/src/Auth/index.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('auth components');function withAuthenticator(Comp){var includeGreetings=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var authenticatorComponents=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var federated=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var theme=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var signUpConfig=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};var Wrapper=function(_React$Component){(0,_inherits2.default)(Wrapper,_React$Component);var _super=_createSuper(Wrapper);function Wrapper(props){var _this;(0,_classCallCheck2.default)(this,Wrapper);_this=_super.call(this,props);_this.handleAuthStateChange=_this.handleAuthStateChange.bind((0,_assertThisInitialized2.default)(_this));_this.state={authState:props.authState};_this.authConfig={};if(typeof includeGreetings==='object'&&includeGreetings!==null){if(includeGreetings.theme){theme=includeGreetings.theme;}_this.authConfig=(0,_extends2.default)(_this.authConfig,includeGreetings);}else{_this.authConfig={includeGreetings:includeGreetings,authenticatorComponents:authenticatorComponents,signUpConfig:signUpConfig};}return _this;}(0,_createClass2.default)(Wrapper,[{key:"handleAuthStateChange",value:function handleAuthStateChange(state,data){this.setState({authState:state,authData:data});if(this.props.onStateChange){this.props.onStateChange(state,data);}}},{key:"render",value:function render(){var _this$state=this.state,authState=_this$state.authState,authData=_this$state.authData;var signedIn=authState==='signedIn';if(signedIn){if(!this.authConfig.includeGreetings){return _react.default.createElement(Comp,(0,_extends2.default)({},this.props,{authState:authState,authData:authData,onStateChange:this.handleAuthStateChange,__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:7}}));}return _react.default.createElement(_reactNative.View,{style:{flex:1},__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:6}},_react.default.createElement(_Greetings.default,{authState:authState,authData:authData,onStateChange:this.handleAuthStateChange,theme:theme,usernameAttributes:this.authConfig.usernameAttributes,__self:this,__source:{fileName:_jsxFileName,lineNumber:120,columnNumber:7}}),_react.default.createElement(Comp,(0,_extends2.default)({},this.props,{authState:authState,authData:authData,onStateChange:this.handleAuthStateChange,__self:this,__source:{fileName:_jsxFileName,lineNumber:127,columnNumber:7}})));}return _react.default.createElement(_Authenticator.default,(0,_extends2.default)({},this.props,{hideDefault:this.authConfig.authenticatorComponents&&this.authConfig.authenticatorComponents.length>0,signUpConfig:this.authConfig.signUpConfig,onStateChange:this.handleAuthStateChange,children:this.authConfig.authenticatorComponents,usernameAttributes:this.authConfig.usernameAttributes,theme:theme,__self:this,__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:5}}));}}]);return Wrapper;}(_react.default.Component);Object.keys(Comp).forEach(function(key){try{var excludes=['displayName','childContextTypes'];if(excludes.includes(key)){return;}Wrapper[key]=Comp[key];}catch(err){logger.warn('not able to assign '+key,err);}});return Wrapper;}
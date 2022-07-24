var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=withOAuth;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _core=require("@aws-amplify/core");var _auth=_interopRequireWildcard(require("@aws-amplify/auth"));var _jsxFileName="/Users/cristiananderes/_WORK_/HTML/aws-amplify-react-native/src/Auth/withOAuth.tsx";var _excluded=["oauth_config"];function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _core.Logger('withOAuth');function withOAuth(Comp){var listeners=[];return function(_React$Component){(0,_inherits2.default)(WithOAuth,_React$Component);var _super=_createSuper(WithOAuth);function WithOAuth(props){var _this;(0,_classCallCheck2.default)(this,WithOAuth);_this=_super.call(this,props);_this._isMounted=false;var config=_this._getOAuthConfig();var _config$urlOpener=config.urlOpener,urlOpener=_config$urlOpener===void 0?defaultUrlOpener:_config$urlOpener;_this.urlOpener=urlOpener;_this.hostedUISignIn=_this.hostedUISignIn.bind((0,_assertThisInitialized2.default)(_this));_this.signOut=_this.signOut.bind((0,_assertThisInitialized2.default)(_this));_this.urlOpener=_this.urlOpener.bind((0,_assertThisInitialized2.default)(_this));_this.state={user:null,error:null,loading:false};listeners.forEach(function(listener){return _core.Hub.remove('auth',listener);});listeners=[(0,_assertThisInitialized2.default)(_this)];_this.onHubCapsule=_this.onHubCapsule.bind((0,_assertThisInitialized2.default)(_this));_core.Hub.listen('auth',_this.onHubCapsule);return _this;}(0,_createClass2.default)(WithOAuth,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this._isMounted=true;this.setState({loading:true},function(){_auth.default.currentAuthenticatedUser().then(function(user){_this2.setState({user:user,loading:false});}).catch(function(error){logger.debug(error);_this2.setState({user:null,loading:false});});});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this._isMounted=false;return;}},{key:"onHubCapsule",value:function onHubCapsule(capsule){var _this3=this;if(!this._isMounted)return;var channel=capsule.channel,payload=capsule.payload;if(channel==='auth'){switch(payload.event){case'signIn':case'cognitoHostedUI':{_auth.default.currentAuthenticatedUser().then(function(user){logger.debug('signed in');_this3.setState({user:user,error:null,loading:false});});break;}case'signOut':{logger.debug('signed out');this.setState({user:null,error:null,loading:false});break;}case'signIn_failure':case'cognitoHostedUI_failure':{logger.debug('not signed in');this.setState({user:null,error:decodeURIComponent(payload.data),loading:false});break;}default:break;}}}},{key:"_getOAuthConfig",value:function _getOAuthConfig(){if(!_auth.default||typeof _auth.default.configure!=='function'){throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');}var _Auth$configure=_auth.default.configure(),_Auth$configure$oauth=_Auth$configure.oauth,oauth=_Auth$configure$oauth===void 0?undefined:_Auth$configure$oauth;var cognitoHostedUIConfig=oauth&&(oauth.domain?oauth:oauth.awsCognito);var config=this.props.oauth_config||cognitoHostedUIConfig;return config;}},{key:"hostedUISignIn",value:function hostedUISignIn(provider){this.setState({loading:true},function(){return _auth.default.federatedSignIn({provider:provider});});}},{key:"signOut",value:function signOut(){return _auth.default.signOut().catch(function(error){return logger.warn(error);});}},{key:"render",value:function render(){var _this4=this;var _this$state=this.state,oAuthUser=_this$state.user,oAuthError=_this$state.error,loading=_this$state.loading;var _this$props=this.props,_=_this$props.oauth_config,otherProps=(0,_objectWithoutProperties2.default)(_this$props,_excluded);var oAuthProps={loading:loading,oAuthUser:oAuthUser,oAuthError:oAuthError,hostedUISignIn:this.hostedUISignIn.bind(this,_auth.CognitoHostedUIIdentityProvider.Cognito),facebookSignIn:this.hostedUISignIn.bind(this,_auth.CognitoHostedUIIdentityProvider.Facebook),amazonSignIn:this.hostedUISignIn.bind(this,_auth.CognitoHostedUIIdentityProvider.Amazon),googleSignIn:this.hostedUISignIn.bind(this,_auth.CognitoHostedUIIdentityProvider.Google),customProviderSignIn:function customProviderSignIn(provider){return _this4.hostedUISignIn(provider);},signOut:this.signOut};return React.createElement(Comp,(0,_extends2.default)({},oAuthProps,otherProps,{__self:this,__source:{fileName:_jsxFileName,lineNumber:202,columnNumber:11}}));}}]);return WithOAuth;}(React.Component);}var defaultUrlOpener=function defaultUrlOpener(url,redirectUrl){logger.debug("opening url: "+url+", redirectUrl: "+redirectUrl);return _reactNative.Linking.openURL(url);};
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){e.exports={wrapper:"App_wrapper__1d6lM",alert:"App_alert__1TSNE","alert-danger":"App_alert-danger__3RmvT",container:"App_container__34WcI"}},142:function(e,t,n){},150:function(e,t,n){},153:function(e,t,n){e.exports={container:"HomePage_container__By-xV",mainContainer:"HomePage_mainContainer__27M2E"}},154:function(e,t,n){e.exports={wrapper:"LoginPage_wrapper__m-y15",container:"LoginPage_container__2b4VC",login:"LoginPage_login__27NSD"}},159:function(e,t,n){e.exports={wrapper:"ForgotPage_wrapper__1xKly",container:"ForgotPage_container__25TJu",login:"ForgotPage_login__2o-Ml"}},160:function(e,t,n){e.exports={"reset-form":"ForgotForm_reset-form__31vi8","login-button":"ForgotForm_login-button__2XeRS","reset-button":"ForgotForm_reset-button__2pQ9d"}},163:function(e,t,n){e.exports=n(312)},172:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),s=n(13),c=n(47),l=Object(c.a)(),u=n(44),m=n(119),p=n(140),E={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR",WARNING:"ALERT_WARNING"},g={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",RESET_PASSWORD_REQUEST:"USERS_RESET_PASSWORD_REQUEST",RESET_PASSWORD_SUCCESS:"USERS_RESET_PASSWORD_SUCCESS",RESET_PASSWORD_FAILURE:"USERS_RESET_PASSWORD_FAILURE",SET_TOKENS:"USERS_SET_TOKENS",REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",REFRESH_REQUEST:"USERS_REFRESH_REQUEST",REFRESH_SUCCESS:"USERS_REFRESH_SUCCESS",REFRESH_FAILURE:"USERS_REFRESH_FAILURE",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"},h="WINDOW_RESIZE",d=JSON.parse(localStorage.getItem("user")),S=d?{loggedIn:!0,user:d}:{};var f={};var b=n(48),y={height:0,width:0},R=Object(u.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case g.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case g.LOGIN_FAILURE:case g.LOGOUT:return{};case g.REFRESH_REQUEST:return{loggingIn:!0,user:t.user};case g.REFRESH_SUCCESS:return{loggedIn:!0,user:t.user};case g.REFRESH_FAILURE:return{};case g.REGISTER_REQUEST:return{loggingIn:!0,user:t.user};case g.REGISTER_SUCCESS:return{loggedIn:!0,user:t.user};case g.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.GETALL_REQUEST:return{loading:!0};case g.GETALL_SUCCESS:return{items:t.users};case g.GETALL_FAILURE:return{error:t.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SUCCESS:return{type:"success",message:t.message};case E.ERROR:return{type:"error",message:t.message};case E.WARNING:return{type:"warning",message:t.message};case E.CLEAR:return{};default:return e}},resetPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.RESET_PASSWORD_REQUEST:return{resettingIn:!0,user:t.user};case g.RESET_PASSWORD_SUCCESS:return{resettedIn:!0,user:t.user};case g.RESET_PASSWORD_FAILURE:case g.LOGOUT:return{};default:return e}},environment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)({},e,{height:t.height,width:t.width});default:return e}}}),_=n(161),v=n(94);var O={success:function(e){return{type:E.SUCCESS,message:e}},error:function(e){return{type:E.ERROR,message:e}},clear:function(){return{type:E.CLEAR}},warning:function(e){return{type:E.WARNING,message:e}}},C={appName:"Petective",apiUrl:"http://0.0.0.0:7001",imageUrl:"http://0.0.0.0",debug:!1,production:!0};function w(){localStorage.removeItem("user")}function I(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&w();var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}C.production&&(C.appName="Petective",C.apiUrl="",C.imageUrl="",C.debug=!1);var U={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("".concat(C.apiUrl,"/api/auth/login"),n).then(I).then(function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data})},logout:w,getAll:function(){var e={method:"GET",headers:P()};return fetch("".concat(C.apiUrl,"/api/users"),e).then(I)},resetPassword:function(e,t,n){var a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,secretKey:n})};return fetch("".concat(C.apiUrl,"/api/users"),a).then(I).then(function(e){return e.data})},register:function(e,t,n,a){var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n,secretKey:a})};return fetch("".concat(C.apiUrl,"/api/auth/register"),r).then(I).then(function(e){return e.data})},refresh:function(){var e={method:"POST",headers:F()};return fetch("".concat(C.apiUrl,"/api/auth/refresh"),e).then(I).then(function(e){return e.data})}};var T={login:function(e,t){return function(n){var a;n((a={username:e},{type:g.LOGIN_REQUEST,user:a})),U.login(e,t).then(function(e){n(function(e){return{type:g.LOGIN_SUCCESS,user:e}}(e)),l.push("/")},function(e){n(function(e){return{type:g.LOGIN_FAILURE,error:e}}(e)),n(O.error(e))})}},logout:function(){return U.logout(),{type:g.LOGOUT}},getAll:function(){return function(e){e({type:g.GETALL_REQUEST}),U.getAll().then(function(t){return e(function(e){return{type:g.GETALL_SUCCESS,users:e}}(JSON.parse(t)))},function(t){return e(function(e){return{type:g.GETALL_FAILURE,error:e}}(t))})}},resetPassword:function(e,t,n){return function(a){var r;a((r={email:e},{type:g.RESET_PASSWORD_REQUEST,user:r})),U.resetPassword(e,t,n).then(function(e){a(function(e){return{type:g.RESET_PASSWORD_SUCCESS,user:e}}(e)),l.push("/login")},function(e){a(function(e){return{type:g.RESET_PASSWORD_FAILURE,error:e}}(e)),a(O.error(e))})}},register:function(e,t,n,a){return function(r){var o;r((o={email:t},{type:g.REGISTER_REQUEST,user:o})),U.register(e,t,n,a).then(function(e){r(function(e){return{type:g.REGISTER_SUCCESS,user:e}}(e)),l.push("/login")},function(e){r(function(e){return{type:g.REGISTER_FAILURE,error:e}}(e)),r(O.error(e))})}},refresh:function(){return function(e){var t=JSON.parse(localStorage.getItem("user"));return e({type:g.REFRESH_REQUEST}),new Promise(function(n,a){U.refresh().then(function(a){(t=JSON.parse(localStorage.getItem("user")))&&(t.token=a.token,localStorage.setItem("user",JSON.stringify(t))),e(function(e){return{type:g.REFRESH_SUCCESS,user:e}}(t)),n(a)},function(t){e(function(e){return{type:g.REFRESH_FAILURE,error:e}}(t)),e(O.error(t)),a(t)})})}}},L=function(e,t){return{type:h,height:e,width:t}};function j(){return function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){if("function"===typeof a)return a(t,n);var r=a.promise,o=a.types,i=Object(v.a)(a,["promise","types"]);if(!r)return e(a);var s=Object(_.a)(o,3),c=s[0],l=s[1],u=s[2];e(Object(b.a)({},i,{type:c}));var m=Promise.resolve(),p=n().authentication.user||{},E=p.token,g=p.refresh;if(E){var h=function(e){var t={};return t.raw=e,t.header=JSON.parse(window.atob(e.split(".")[0])),t.payload=JSON.parse(window.atob(e.split(".")[1])),t}(E),d=(new Date).getTime()/1e3|300;m=g&&d>h.payload.exp?e(T.refresh()).then(function(){return r(i)}):r(i)}else{if(!g)return e(Object(b.a)({},i,{type:u}));m=e(T.refresh()).then(function(){return r(i)})}return m.then(function(t){return e(Object(b.a)({},i,{result:t,type:l}))},function(t){return e(O.error(t)),e(Object(b.a)({},i,{error:t,type:u}))}).catch(function(t){console.error("MIDDLEWARE ERROR:",t),e(Object(b.a)({},i,{error:t,type:u}))}),m}}}}var N=Object(p.createLogger)(),A=Object(u.d)(R,C.debug?Object(u.a)(j(),m.a,N):Object(u.a)(j(),m.a)),P=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}},F=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.refresh?{Authorization:"Bearer "+e.refresh}:{}},k=(n(172),n(15)),G=n(16),x=n(18),W=n(17),D=n(19),Q=n(141),H=n.n(Q),K=n(326),J=n(323),q=n(324),B=function(e){var t=e.component,n=Object(v.a)(e,["component"]);return r.a.createElement(J.a,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(q.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},M=n(319),V=n(9),z=n(314),X=n(20),Y=n.n(X),Z=n(142),$=n.n(Z),ee=Y.a.bind($.a),te=M.a.SubMenu,ne=M.a.ItemGroup,ae=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).handleClick=function(e){"logo"!==e.key&&n.setState({current:e.key})},n.state={current:""},n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{className:ee("navContainer"),onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(M.a.Item,{className:ee("logo"),key:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{style:{height:"16px"},src:C.apiUrl+"/static/assets/icons/CI.png",alt:"logo"}))),r.a.createElement(te,{className:ee("settings"),title:r.a.createElement(V.a,{type:"setting"})},r.a.createElement(ne,{title:"User"},r.a.createElement(M.a.Item,{key:"setting:logout"},r.a.createElement(z.a,{to:"/login"},"Logout")))),r.a.createElement(M.a.Item,{className:ee("userInfo"),key:"userInfo",disabled:!0},r.a.createElement("span",{className:ee("username")},"\xa0\xa0 | \xa0\xa0",r.a.createElement(V.a,{type:"user"}),this.props.user&&this.props.user.name)))}}]),t}(r.a.Component);var re=Object(s.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{})(ae),oe=n(315),ie=n(318),se=n(320),ce=n(97),le=n(150),ue=n.n(le),me=Y.a.bind(ue.a),pe=ie.a.Title,Ee=se.a.Step,ge=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).state={loading:!1,iconLoading:!1},n.enterLoading=function(){n.setState({loading:!0})},n.enterIconLoading=function(){n.setState({iconLoading:!0})},n.state={current:""},n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement(ie.a,null,r.a.createElement(pe,{level:2,className:me("test-title")},r.a.createElement(V.a,{type:"play-circle"})," Combined Test"),r.a.createElement(ce.a,{type:"primary",className:me("run-button"),loading:this.state.loading,onClick:this.enterLoading},"Run"),r.a.createElement("div",{className:me("test-wrapper")},r.a.createElement(pe,{level:3},"1. Network Test"),r.a.createElement(se.a,{current:0,className:me("progress-wrapper")},r.a.createElement(Ee,{title:"Waiting",description:"Prepare scp/scu test."}),r.a.createElement(Ee,{title:"In Progress",description:"Pending..."}),r.a.createElement(Ee,{title:"Finished",description:"Done!"}))))}}]),t}(r.a.Component);var he=Object(s.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{})(ge),de=M.a.SubMenu,Se=(oe.a.Header,oe.a.Content),fe=oe.a.Sider,be=(M.a.ItemGroup,function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).menu_click=function(e){if(0===n.state.status)switch(n.setState({location:e.key}),e.key){case"1":n.setState({contents:r.a.createElement(he,null)})}},n.state={location:"",contents:r.a.createElement(he,null),status:0},n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){r.a.createElement(he,null);return r.a.createElement(oe.a,null,r.a.createElement(fe,{width:200,style:{background:"#fff"}},r.a.createElement(M.a,{theme:"light",mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},r.a.createElement(de,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(V.a,{type:"play-circle"}),"Combined Test")},r.a.createElement(M.a.Item,{key:"1",onClick:this.menu_click},"Test All")))),r.a.createElement(oe.a,{style:{padding:"0 24px 24px"}},r.a.createElement(Se,{style:{background:"#fff",padding:24,margin:0,marginTop:24,minHeight:280}},this.state.contents)))}}]),t}(r.a.Component));var ye=Object(s.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{})(be),Re=n(152),_e=Object(Re.a)(function(e){return e.authentication.loggedIn},function(e){return e.authentication.user},function(e,t){return Boolean(e&&t)}),ve=Object(s.b)(function(e){return{user:(e.authentication||{}).user,isAuthenticated:_e(e)}})(function(e){return r.a.createElement(re,e)}),Oe=function(e){return r.a.createElement(ye,e)},Ce=n(153),we=n.n(Ce),Ie=(M.a.SubMenu,oe.a.Header,oe.a.Content,oe.a.Sider,Y.a.bind(we.a)),Ue=function(e){function t(e){var n;Object(k.a)(this,t),n=Object(x.a)(this,Object(W.a)(t).call(this,e));var a=e._initEnvironment;return console.log("in"),a(),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Ie("container")},r.a.createElement(ve,null),r.a.createElement("div",{className:Ie("mainContainer")},r.a.createElement(Oe,null)))}}]),t}(r.a.Component);var Te=Object(s.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{_initEnvironment:function(){return function(e){e(L(window.innerHeight,window.innerWidth)),window.onresize=function(){e(L(window.innerHeight,window.innerWidth))}}},refresh:T.refresh})(Ue),Le=n(317),je=n(154),Ne=n.n(je),Ae=n(43),Pe=n(32),Fe=n(321),ke=n(322),Ge=n(316),xe=n(92),We=n.n(xe),De=Y.a.bind(We.a),Qe=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).props.logout(),n.state={username:"",password:"",submitted:!1},n.handleChange=n.handleChange.bind(Object(Pe.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(Pe.a)(n)),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(Ae.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0}),this.props.form.validateFields(function(e){if(!e){var n=t.state,a=n.email,r=n.password;a&&r&&t.props.login(a,r)}})}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.props.form.getFieldDecorator;return r.a.createElement(Le.a,{onSubmit:this.handleSubmit,className:De("login-form")},r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("email",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(Fe.a,{name:"email",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(Fe.a,{name:"password",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(Le.a.Item,null,t("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(ke.a,{className:De("remember")},"Remember me")),r.a.createElement(ce.a,{type:"primary",htmlType:"submit",style:{marginTop:"0"},className:De("login-button")},"Log in"),r.a.createElement(z.a,{className:De("signup-button"),to:"/register"},"Sign up"),r.a.createElement(z.a,{className:De("forgot-button"),to:"/forgot"},"Forgot?")),e&&r.a.createElement(Ge.a,null))}}]),t}(r.a.Component);var He=Object(s.b)(function(e){return{loggingIn:e.authentication.loggingIn}},{logout:T.logout,login:T.login})(Qe),Ke=Y.a.bind(We.a),Je=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).state={name:"",email:"",password:"",secretKey:"",submitted:!1},n.handleChange=n.handleChange.bind(Object(Pe.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(Pe.a)(n)),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(Ae.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0}),this.props.form.validateFields(function(e){if(!e){var n=t.state,a=n.name,r=n.email,o=n.password,i=n.secretKey,s=t.props.dispatch;a&&r&&o&&i&&s(T.register(a,r,o,i))}})}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.props.form.getFieldDecorator;return r.a.createElement(Le.a,{onSubmit:this.handleSubmit,className:Ke("login-form")},r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("name",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(Fe.a,{name:"name",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Name"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("email",{rules:[{required:!0,message:"Please input your email!"}]})(r.a.createElement(Fe.a,{name:"email",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(Fe.a,{name:"password",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("secretKey",{rules:[{required:!0,message:"Please input Secret Key!"}]})(r.a.createElement(Fe.a,{name:"secretKey",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Secret Key"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 12px 0"}},r.a.createElement(ce.a,{type:"primary",htmlType:"submit",className:Ke("login-button")},"Register"),r.a.createElement(z.a,{className:Ke("signup-button"),to:"/login"},"Sign In")),e&&r.a.createElement(Ge.a,null))}}]),t}(r.a.Component);var qe=Object(s.b)(function(e){return{loggingIn:e.authentication.loggingIn}})(Je),Be=Y.a.bind(Ne.a),Me=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).state={isLoginPage:"/login"===l.location.pathname,isRegisterPage:"/register"===l.location.pathname},n.WrappedLoginForm=Le.a.create()(He),n.WrappedRegisterForm=Le.a.create()(qe),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.WrappedLoginForm,t=this.WrappedRegisterForm;return r.a.createElement("div",{className:Be("wrapper")},r.a.createElement("div",{className:Be("container")},this.state.isLoginPage&&r.a.createElement("div",{className:Be("login")},r.a.createElement("img",{src:C.apiUrl+"/static/assets/icons/CI.png",alt:"Petective-CI"}),r.a.createElement("h2",null,"2019 SV - ",r.a.createElement("strong",null,C.appName)),r.a.createElement(e,null)),this.state.isRegisterPage&&r.a.createElement("div",{className:Be("login")},r.a.createElement("h1",null,"REGISTER"),r.a.createElement("h2",null,"2019 SV - ",r.a.createElement("strong",null,C.appName)),r.a.createElement(t,null))))}}]),t}(r.a.Component),Ve=n(159),ze=n.n(Ve),Xe=n(160),Ye=n.n(Xe),Ze=Y.a.bind(Ye.a),$e=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.compareToFirstPassword=function(e,t,a){var r=n.props.form;t&&t!==r.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()},n.props.dispatch(T.logout()),n.state={email:"",password:"",secretKey:"",submitted:!1,confirmDirty:!1},n.handleChange=n.handleChange.bind(Object(Pe.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(Pe.a)(n)),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(Ae.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0}),this.props.form.validateFields(function(e){if(!e){var n=t.state,a=n.email,r=n.password,o=n.secretKey,i=t.props.dispatch;a&&r&&o&&i(T.resetPassword(a,r,o))}})}},{key:"render",value:function(){var e=this.props.resetingIn,t=this.props.form.getFieldDecorator;return r.a.createElement(Le.a,{onSubmit:this.handleSubmit,className:Ze("reset-form")},r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("email",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(Fe.a,{name:"email",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"email"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(Fe.a,{name:"password",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"New Password"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(Fe.a,{prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",onBlur:this.handleConfirmBlur,placeholder:"Confirm your password"}))),r.a.createElement(Le.a.Item,{style:{margin:"0 0 6px 0"}},t("secretKey",{rules:[{required:!0,message:"Please input secret key"}]})(r.a.createElement(Fe.a,{name:"secretKey",onChange:this.handleChange,prefix:r.a.createElement(V.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Secret Key"}))),r.a.createElement(Le.a.Item,null,r.a.createElement(ce.a,{type:"primary",htmlType:"submit",className:Ze("reset-button")},"Reset Password"),r.a.createElement(z.a,{className:Ze("login-button"),to:"/login"},"Sign In")),e&&r.a.createElement(Ge.a,null))}}]),t}(r.a.Component);var et=Object(s.b)(function(e){return{resetingIn:e.resetPassword.resetingIn}})($e),tt=Y.a.bind(ze.a),nt=function(e){function t(){return Object(k.a)(this,t),Object(x.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=Le.a.create()(et);return r.a.createElement("div",{className:tt("wrapper")},r.a.createElement("div",{className:tt("container")},r.a.createElement("div",{className:tt("login")},r.a.createElement("h1",null,"RESET PW"),r.a.createElement("h2",null,"Petective - ",r.a.createElement("strong",null,C.appName)),r.a.createElement(e,null))))}}]),t}(r.a.Component),at=n(325),rt=Y.a.bind(H.a),ot=function(e){function t(e){var n;Object(k.a)(this,t);var a=(n=Object(x.a)(this,Object(W.a)(t).call(this,e))).props.dispatch;return l.listen(function(){a(O.clear())}),n}return Object(D.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("div",{className:rt("wrapper")},e.message&&r.a.createElement(at.a,{banner:!0,message:e.message,type:e.type}),r.a.createElement(K.a,{history:l},r.a.createElement("div",{className:rt("container")},r.a.createElement(B,Object.assign({exact:!0,path:"/",component:Te},this.props)),r.a.createElement(J.a,{path:"/login",component:Me}),r.a.createElement(J.a,{path:"/forgot",component:nt}),r.a.createElement(J.a,{path:"/register",component:Me}))))}}]),t}(r.a.Component);var it=Object(s.b)(function(e){return{alert:e.alert}})(ot),st=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!==n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(it,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");st?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ct(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ct(t,e)})}}()},92:function(e,t,n){e.exports={"login-form":"LoginForm_login-form__2U4wn","forgot-button":"LoginForm_forgot-button__2YLHM","login-button":"LoginForm_login-button__1Ubcg","signup-button":"LoginForm_signup-button__1K8T1",remember:"LoginForm_remember__3-MWg"}}},[[163,1,2]]]);
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(0),c=n.n(a),i=n(14),r=n.n(i),s=(n(33),n(22)),l=n(27),u=n(12),d=n(3),f=n(4),p=n(8),j=n(19),b=n.n(j),g=n(25),h=function(){var e=Object(g.a)(b.a.mark((function e(t,n,o,a,c){var i,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/register","post","no-cors",i={"content-type":"application/json"},r=JSON.stringify({name:t,email:n,password:o,avatar:a.name}),fetch("http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/register",{method:"post",headers:i,body:r}).then((function(e){if(!(e.status>299))return e.json();console.log("error")})).then((function(e){s=e})).then((function(){c(s)})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n,o,a,c){return e.apply(this,arguments)}}();function m(){try{localStorage.removeItem("simpleMern")}catch(e){console.log("Unable to remove item from local storage",e)}}var v="LOGIN",O="LOGOUT",x=function(e,t){return{type:v,uid:e,token:t}},y=function(){return{type:O}},N=function(e,t,n,o,a){return function(c){return h(e,t,n,o,(function(e){void 0!==e&&(c(x(e.user._id,e.token)),console.log("hope:",e.user.avatar),console.log("Yes",e.signedURL),function(e,t,n){var o,a={"Content-type":t.type};fetch(e,{method:"put",header:a,body:t}).then((function(e){if(console.log("1"),!(e.status>299))return console.log("2"),console.log(e),e;console.log("Could not upload file",e.status)})).then((function(e){o=e,console.log("3")})).then((function(){n(o),console.log("4")})).catch((function(e){console.log(e)}))}(e.signedURL,o,(function(e){console.log("5"),a(e),console.log("6"),console.log("Finale result",e)})))}))}},k=function(e,t,n){return function(o){return function(e,t,n){var o,a=JSON.stringify({email:e,password:t});fetch("http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/auth",{method:"post",headers:{"Content-type":"application/json"},body:a}).then((function(e){if(!(e.status>299))return e.json();console.log("unable to login")})).then((function(e){o=e})).then((function(){n(o)}))}(e,t,(function(e){n(e),void 0!==e&&o(x(e.user._id,e.token))}))}},S=function(e,t){return function(t){return m(),t(y()),function(e,t){var n;fetch("http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/logout",{method:"post",headers:{Authorization:"Bearer "+e,"Content-type":"application/json"}}).then((function(e){if(!(e.status>299))return e.json();console.log("Unable to delete user")})).then((function(e){n=e})).then((function(){t(n)})).catch((function(e){console.log(e)}))}(e,(function(e){console.log("yoohoo:",e)}))}},C=function(e,t){return function(n){return function(e,t){var n;fetch("http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/delete",{method:"delete",headers:{"Content-type":"application/json",Authorization:"Bearer "+e}}).then((function(e){if(!(e.status>299))return e.json();console.log("Unable to delete account")})).then((function(e){n=e})).then((function(){t(n)})).catch((function(e){console.log(e)}))}(e,(function(e){void 0!==e&&(t(!0),m(),n(y()))}))}},D=function(e,t){return function(n){return function(e,t){var n;fetch("http://simplemernapi-dev2-brandednomad.ap-southeast-1.elasticbeanstalk.com/api/v0/user/profile",{method:"get",headers:{"Content-type":"application/json",Authorization:"Bearer "+e}}).then((function(e){if(!(e.status>299))return e.json();console.log("Unable to fetch signedURL",e.status)})).then((function(e){n=e})).then((function(){t(n)})).catch((function(e){console.log(e)}))}(e,(function(e){t(e),console.log(e)}))}};var L=Object(p.b)((function(e,t){return{state:e,toggle:t.toggle}}))((function(e){var t=e.toggle,n=e.dispatch,c=(e.state,Object(a.useState)("")),i=Object(f.a)(c,2),r=i[0],s=i[1],l=Object(a.useState)(""),u=Object(f.a)(l,2),p=u[0],j=u[1],b=Object(a.useState)(void 0),g=Object(f.a)(b,2),h=g[0],m=g[1];return void 0!==h?Object(o.jsx)(d.a,{to:"/profile"}):Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsxs)("form",{className:"login-form",onSubmit:function(e){!function(e){e.preventDefault(),n(k(r,p,m))}(e)},children:[Object(o.jsx)("input",{className:"login-input",type:"text",value:r,placeholder:"Email",onChange:function(e){!function(e){e.preventDefault(),s(e.target.value)}(e)}}),Object(o.jsx)("input",{className:"login-input",type:"text",value:p,placeholder:"Password",onChange:function(e){!function(e){e.preventDefault(),j(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"primary-button",type:"submit",children:"Login"})]}),Object(o.jsx)("span",{onClick:t,className:"tertiary-button",children:"Don't have an account?"})]})}));var w=Object(p.b)((function(e){return e}))((function(e){var t=e.toggle,n=e.dispatch,c=Object(a.useState)(""),i=Object(f.a)(c,2),r=i[0],s=i[1],l=Object(a.useState)(""),u=Object(f.a)(l,2),p=u[0],j=u[1],b=Object(a.useState)(""),g=Object(f.a)(b,2),h=g[0],m=g[1],v=Object(a.useState)(""),O=Object(f.a)(v,2),x=O[0],y=O[1],k=Object(a.useState)(void 0),S=Object(f.a)(k,2),C=S[0],D=S[1],L=Object(a.useState)({}),w=Object(f.a)(L,2),U=w[0],z=w[1],_=Object(a.useState)(!1),A=Object(f.a)(_,2),I=A[0],P=A[1];if(void 0!==C)return Object(o.jsx)(d.a,{to:"/profile"});var T=function(e,t){z(t);var n=document.createElement("div");n.classList.add("drop-zone__thumb"),e.appendChild(n);var o=e.children[2];if(t.type.startsWith("image/")){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){o.style.backgroundImage="url('".concat(a.result,"')")}}else o.style.backgroundImage=null;o.classList.add("drop-zone--dropped")};return Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsxs)("form",{className:"login-form",onSubmit:function(e){!function(e){e.preventDefault(),h===p?n(N(x,r,p,U,D)):alert("Passwords don't match")}(e)},children:[Object(o.jsxs)("div",{className:"drop-zone ",onDragOver:function(e){e.preventDefault(),e.target.classList.add("drop-zone--over")},onDragLeave:function(e){e.preventDefault(),e.target.classList.remove("drop-zone--over")},onDrop:function(e){e.preventDefault(),P(!0),e.target.children[1].files=e.dataTransfer.files,T(e.target,e.dataTransfer.files[0]),e.target.classList.remove("drop-zone--over")},onClick:function(e){document.getElementById("file-input").click()},children:[!I&&Object(o.jsx)("span",{className:"drop-zone__prompt",children:"Drop file here or click to upload"}),Object(o.jsx)("input",{type:"file",name:"avatar",id:"file-input",className:"drop-zone__input",onChange:function(e){var t=e.target.parentNode;console.log(t),e.target.files.length&&(P(!0),T(t,e.target.files[0]),console.log(e.target.value,e.target.files))}})]}),Object(o.jsx)("input",{className:"login-input",type:"text",value:x,placeholder:"Name",onChange:function(e){!function(e){e.preventDefault(),y(e.target.value)}(e)}}),Object(o.jsx)("input",{className:"login-input",type:"text",value:r,placeholder:"Email",onChange:function(e){!function(e){e.preventDefault(),s(e.target.value)}(e)}}),Object(o.jsx)("input",{className:"login-input",type:"text",value:p,placeholder:"Password",onChange:function(e){!function(e){e.preventDefault(),j(e.target.value)}(e)}}),Object(o.jsx)("input",{className:"login-input",type:"text",value:h,placeholder:"Confirm Password",onChange:function(e){!function(e){e.preventDefault(),m(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"primary-button",type:"submit",children:"Create Account"})]}),Object(o.jsx)("span",{onClick:t,className:"tertiary-button",children:"Already have an account?"})]})}));var U=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),n=t[0],c=t[1],i=function(){c(!n)};return n?Object(o.jsx)("div",{className:"loginPage-container",children:Object(o.jsx)(L,{toggle:i})}):Object(o.jsx)("div",{className:"loginPage-container",children:Object(o.jsx)(w,{toggle:i})})};var z=Object(p.b)((function(e,t){return{uid:e.uid,token:e.token,toggle:t.toggle}}))((function(e){var t=e.toggle,n=e.token,c=e.dispatch,i=Object(a.useState)(void 0),r=Object(f.a)(i,2),s=r[0],l=r[1];return void 0!==s?Object(o.jsx)(d.a,{to:"/"}):Object(o.jsx)("div",{className:"modal-outer",children:Object(o.jsx)("div",{className:"modal-inner",children:Object(o.jsxs)("div",{className:"modal-container",children:[Object(o.jsx)("p",{className:"modal-text",children:"Sure you want to delete this user profile?"}),Object(o.jsx)("button",{className:"primary-button",onClick:function(){c(C(n,l))},children:"Delete"}),Object(o.jsx)("span",{onClick:t,className:"tertiary-button",children:"Cancel"})]})})})}));var _=Object(p.b)((function(e){return{uid:e.uid,token:e.token}}))((function(e){e.uid;var t=e.token,n=e.dispatch,i=Object(a.useState)(!1),r=Object(f.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)({}),d=Object(f.a)(u,2),p=d[0],j=d[1];Object(a.useEffect)((function(){n(D(t,j))}),[]),console.log("this",p);var b=function(){l(!s)};return Object(o.jsxs)(c.a.Fragment,{children:[s&&Object(o.jsx)(z,{toggle:b}),void 0!==p.user?Object(o.jsxs)("div",{className:"profilecard-container",children:[Object(o.jsx)("div",{className:"profilecard-avatar-container",children:Object(o.jsx)("img",{className:"profilecard-avatar_img",src:void 0!==p.signedURL?p.signedURL:"./img/loading-spinner.gif",alt:"profile-avatar"})}),Object(o.jsxs)("div",{className:"profilecard-content-container",children:[Object(o.jsxs)("div",{className:"profilecard-info-container",children:[Object(o.jsx)("p",{className:"profilecard-info_name",children:p.user.name}),Object(o.jsx)("p",{className:"profilecard-info_email",children:p.user.email})]}),Object(o.jsxs)("div",{className:"profilecard-button-container",children:[Object(o.jsx)("button",{className:"primary-button",onClick:function(){n(S(t))},children:"Logout"}),Object(o.jsx)("span",{onClick:b,className:"tertiary-button",children:"Delete"})]})]})]}):Object(o.jsx)("img",{src:"./img/loading-spinner.gif",alt:"loading"})]})}));n(40);var A=Object(p.b)((function(e){return console.log("insideMapStateToProps: ",e),{isAuthenticated:!!e.token}}))((function(e){var t=e.isAuthenticated;return Object(l.a)(e,["isAuthenticated"]),console.log("first",t),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(d.b,{exact:!0,path:"/",component:U}),Object(o.jsx)(d.b,{path:"/profile",render:function(e){return console.log("inside:",e),t?Object(o.jsx)(_,Object(s.a)({},e)):Object(o.jsx)(U,Object(s.a)({},e))}})]})})})),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),c(e),i(e)}))},P=n(11),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.uid,token:t.token};case O:return{};default:return e}},E=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var o=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),o}}},F=n(26),R=Object(P.a)(F.a,E),B=function(){try{var e=localStorage.getItem("simpleMern");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("Unable to load state from local storage",t)}}(),J=Object(P.c)(T,B,R);J.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("simpleMern",t)}catch(n){console.log("Unable to save to localstorage",n)}}(J.getState())})),r.a.render(Object(o.jsx)(p.a,{store:J,children:Object(o.jsx)(A,{})}),document.getElementById("root")),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.8dd6e8a2.chunk.js.map
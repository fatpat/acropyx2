(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6307:function(e,t,r){"use strict";var a=r(4836);t.Z=void 0;var n=a(r(4938)),o=r(5893),s=(0,n.default)((0,o.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=s},9742:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var a=r(3366),n=r(7462),o=r(7294),s=r(6010),i=r(4780),c=r(9630),l=r(8884),d=r(7074),u=r(4867);function p(e){return(0,u.Z)("MuiCardHeader",e)}var h=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=r(5893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var w=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:u,component:h="div",disableTypography:w=!1,subheader:b,subheaderTypographyProps:g,title:P,titleTypographyProps:j}=r,_=(0,a.Z)(r,f),N=(0,n.Z)({},r,{component:h,disableTypography:w}),T=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(N);let k=P;null==k||k.type===c.Z||w||(k=(0,v.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"h5",className:T.title,component:"span",display:"block"},j,{children:k})));let S=b;return null==S||S.type===c.Z||w||(S=(0,v.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:S}))),(0,v.jsxs)(m,(0,n.Z)({className:(0,s.Z)(T.root,u),as:h,ref:t,ownerState:N},_,{children:[d&&(0,v.jsx)(y,{className:T.avatar,ownerState:N,children:d}),(0,v.jsxs)(Z,{className:T.content,ownerState:N,children:[k,S]}),o&&(0,v.jsx)(x,{className:T.action,ownerState:N,children:o})]}))}))},7156:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(510)}])},510:function(e,t,r){"use strict";r.r(t);var a=r(8520),n=r.n(a),o=r(5893),s=r(7294),i=(r(1664),r(9072)),c=r(5084),l=r(9837),d=r(9742),u=r(1359),p=r(7971),h=r(6307),v=r(5148),f=r(9233);function m(e,t,r,a,n,o,s){try{var i=e[o](s),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(a,n)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(c){n=!0,o=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=y((0,v.z)(),4),t=e[0],r=(e[1],e[2],e[3]);(0,s.useEffect)((function(){}),[]);var a,x=(a=n().mark((function e(a){var o,s,i,c,l,d,u;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),o=new FormData(a.target),(s=new URLSearchParams(l)).append("grand__type","password"),s.append("username",o.get("username")),s.append("password",o.get("password")),e.t0=y,e.next=9,(0,f.Xv)("/auth/login",{method:"POST",body:s,expect_json:!0});case 9:if(e.t1=e.sent,i=(0,e.t0)(e.t1,3),c=i[0],l=i[1],i[2],!c){e.next=17;break}return r("Error while authenticate: ".concat(c)),e.abrupt("return");case 17:if(l.access_token){e.next=20;break}return r("No access token received :-("),e.abrupt("return");case 20:t("Authentication successfull",o.get("username")),localStorage.setItem("token",l.access_token),d=new URLSearchParams(window.location.search),u=d.get("returnTo"),window.location=u||"".concat("/acropyx2/preprod","/");case 25:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var o=a.apply(e,t);function s(e){m(o,r,n,s,i,"next",e)}function i(e){m(o,r,n,s,i,"throw",e)}s(void 0)}))});return(0,o.jsx)(i.ZP,{container:!0,spacing:6,children:(0,o.jsx)(i.ZP,{item:!0,xs:12,children:(0,o.jsx)(l.Z,{children:(0,o.jsxs)("form",{onSubmit:x,children:[(0,o.jsx)(d.Z,{title:"Login",titleTypographyProps:{variant:"h6"}}),(0,o.jsx)(u.Z,{children:(0,o.jsxs)(i.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,children:(0,o.jsx)(p.Z,{fullWidth:!0,name:"username",label:"Username",placeholder:"Username"})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,children:(0,o.jsx)(p.Z,{fullWidth:!0,type:"password",name:"password",label:"Password",placeholder:"Password"})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,children:(0,o.jsx)(c.Z,{type:"submit",variant:"contained",endIcon:(0,o.jsx)(h.Z,{}),children:"Login"})})]})})]})})})})}}},function(e){e.O(0,[292,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
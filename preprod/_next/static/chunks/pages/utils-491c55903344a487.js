(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{122:function(n,e,r){"use strict";r.d(e,{Z:function(){return _}});var t=r(3366),o=r(7462),i=r(7294),u=r(6010),a=r(7192),s=r(4844),c=r(1796),l=r(8216),d=r(1496),p=r(1657),f=r(8791),h=r(1705),v=r(5861),m=r(8979);function y(n){return(0,m.Z)("MuiLink",n)}var b=(0,r(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=r(5893);const Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=(0,d.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[`underline${(0,l.Z)(r.underline)}`],"button"===r.component&&e.button]}})((({theme:n,ownerState:e})=>{const r=(0,s.D)(n,`palette.${(n=>w[n]||n)(e.color)}`)||e.color;return(0,o.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,c.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})}));var _=i.forwardRef((function(n,e){const r=(0,p.Z)({props:n,name:"MuiLink"}),{className:s,color:c="primary",component:d="a",onBlur:v,onFocus:m,TypographyClasses:b,underline:w="always",variant:_="inherit"}=r,S=(0,t.Z)(r,Z),{isFocusVisibleRef:g,onBlur:C,onFocus:P,ref:j}=(0,f.Z)(),[D,E]=i.useState(!1),N=(0,h.Z)(e,j),A=(0,o.Z)({},r,{color:c,component:d,focusVisible:D,underline:w,variant:_}),F=(n=>{const{classes:e,component:r,focusVisible:t,underline:o}=n,i={root:["root",`underline${(0,l.Z)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,a.Z)(i,y,e)})(A);return(0,x.jsx)(k,(0,o.Z)({className:(0,u.Z)(F.root,s),classes:b,color:c,component:d,onBlur:n=>{C(n),!1===g.current&&E(!1),v&&v(n)},onFocus:n=>{P(n),!0===g.current&&E(!0),m&&m(n)},ref:N,ownerState:A,variant:_},S))}))},5969:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utils",function(){return r(8628)}])},8628:function(n,e,r){"use strict";r.r(e);var t=r(8520),o=r.n(t),i=r(5893),u=r(4713),a=r(7294),s=r(122),c=r(7357),l=r(8462),d=r(7212),p=r(5148),f=r(9233);function h(n,e,r,t,o,i,u){try{var a=n[i](u),s=a.value}catch(c){return void r(c)}a.done?e(s):Promise.resolve(s).then(t,o)}function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(t=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);t=!0);}catch(s){o=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=(0,u.tl)((function(){var n,e=v((0,p.z)(),4),r=e[0],t=(e[1],e[2],e[3]),m=(0,u.aF)(),y=(m.user,m.authError,m.authIsLoading,m.checkSession,(0,a.useState)(!1)),b=(y[0],y[1]),x=(0,a.useState)(null),Z=x[0],w=(x[1],n=o().mark((function n(e){var i,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("Are you sure to delete unused pilots ?")){n.next=2;break}return n.abrupt("return",!1);case 2:return b(!0),n.t0=v,n.next=6,(0,f.Xv)("/utils/cleanup_pilots",{expected_status:204,method:"POST"});case 6:return n.t1=n.sent,i=(0,n.t0)(n.t1,3),u=i[0],i[1],i[2],u?t(u):r("Pilots cleanup successful"),b(!1),n.abrupt("return",!1);case 14:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function u(n){h(i,t,o,u,a,"next",n)}function a(n){h(i,t,o,u,a,"throw",n)}u(void 0)}))});return(0,a.useEffect)((function(){}),[]),(0,i.jsxs)(c.Z,{children:[Z&&(0,i.jsxs)("p",{children:["Error: ",Z]}),(0,i.jsx)("h1",{children:"Utils"}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.ZP,{children:(0,i.jsx)(s.Z,{href:"".concat("https://preprod-api-acropyx.herokuapp.com","utils/backup"),children:"Download Database Backup"})}),(0,i.jsx)(d.ZP,{children:(0,i.jsx)(s.Z,{href:"#",onClick:w,children:"Cleanup unused pilots"})})]})]})}))}},function(n){n.O(0,[774,888,179],(function(){return e=5969,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
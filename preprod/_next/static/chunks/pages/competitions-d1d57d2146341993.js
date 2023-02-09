(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{2486:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions",function(){return n(2348)}])},3521:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(7294),o=n(7971),a=n(3884),c=n(2359),l=n(1812);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){var t,n=s(i.useState(e.default),2),d=n[0],f=n[1];return(0,r.jsx)(c._,{dateAdapter:a.H,children:(0,r.jsx)(l.M,{views:null!==(t=e.views)&&void 0!==t?t:["year","day"],label:e.label,value:d,onChange:function(t){t.toJSON=function(){return"".concat(String(this.getFullYear()),"-").concat(String(this.getMonth()+1).padStart(2,"0"),"-").concat(String(this.getDate()).padStart(2,"0"))},f(t),e.onChange&&e.onChange(t)},renderInput:function(e){return(0,r.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},e))}})})}},1194:function(e,t){"use strict";t.Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"600px",bgcolor:"background.paper",boxShadow:24,p:4}},2348:function(e,t,n){"use strict";n.r(t);var r=n(8520),i=n.n(r),o=n(5893),a=n(7294),c=(n(1163),n(4713)),l=n(9072),u=n(9630),s=n(5084),d=n(2096),f=n(1849),h=n(7971),p=n(6070),x=n(1953),m=n(9837),v=n(6540),b=n(9742),g=n(1359),j=n(2416),y=n(2841),w=n(1362),Z=n(2026),P=n(2844),S=n(4117),C=(n(7497),n(9780),n(5148)),_=n(9233),O=n(1194),k=n(3521);function E(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,i)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){E(o,r,i,a,c,"next",e)}function c(e){E(o,r,i,a,c,"throw",e)}a(void 0)}))}}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e,t,n,r,E,T,A,L=D((0,C.z)(),4),z=(L[0],L[1]),F=(L[2],L[3]),V=(0,c.aF)(),W=(V.user,V.authError,V.authIisLoading,(0,a.useState)([])),X=W[0],B=W[1],H=(0,a.useState)([]),J=H[0],M=H[1],K=(0,a.useState)(!1),R=K[0],Y=K[1],q=(0,a.useState)(!1),G=q[0],Q=q[1],U=(0,a.useState)(""),$=U[0],ee=U[1],te=(0,a.useState)({}),ne=te[0],re=te[1],ie=N(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.t0=D,e.next=4,(0,_.Xv)("/competitions",{expect_json:!0});case 4:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),n=t[0],r=t[1],t[2],!n){e.next=14;break}return B(!1),M(!1),F("Error while retrieving competitions list: ".concat(n)),e.abrupt("return");case 14:r=r.map((function(e){return e.delete="delete",e.update="update",e.id=e._id,e})),B(r),M(r),Y(!1);case 18:case"end":return e.stop()}}),e)}))),oe=N(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=D,e.next=4,(0,_.Xv)("/competitions/new",{expected_status:201,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ne)});case 4:if(e.t1=e.sent,n=(0,e.t0)(e.t1,3),r=n[0],n[1],n[2],!r){e.next=12;break}return F("error while creating new competition: ".concat(r)),e.abrupt("return");case 12:Q(!1),ie();case 14:case"end":return e.stop()}}),e)}))),ae=N(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(n=t.target.value).normalize("NFD").replace(/[\u0300-\u036f]/g,""),r=new RegExp(n,"i"),o=J.filter((function(e){return e.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(r)})),B(o),z("".concat(o.length," competitions filtered over ").concat(J.length));case 6:case"end":return e.stop()}}),e)})));return(0,a.useEffect)((function(){ie()}),[]),R?(0,o.jsxs)(x.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,o.jsx)(p.Z,{}),"Loading"]}):X?(0,o.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,o.jsx)(l.ZP,{item:!0,xs:12,children:(0,o.jsxs)(u.Z,{variant:"h5",children:["Competitions",(0,o.jsx)(f.Z,{onClick:ie})]})}),(0,o.jsx)(l.ZP,{item:!0,xs:4,sm:4,children:(0,o.jsx)(h.Z,{fullWidth:!0,id:"outlined-basic",label:"Search competition",variant:"outlined",onChange:ae})}),(0,o.jsxs)(l.ZP,{item:!0,xs:8,sm:8,container:!0,children:[(0,o.jsx)(s.Z,{variant:"contained",onClick:function(){ee("New competition"),re({}),Q(!0)},startIcon:(0,o.jsx)(v.Z,{}),children:"new competition"}),(0,o.jsx)(d.Z,{open:G,onClose:function(){return Q(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(m.Z,{sx:O.Z,children:(0,o.jsxs)("form",{onSubmit:oe,children:[(0,o.jsx)(b.Z,{title:$,titleTypographyProps:{variant:"h6"}}),(0,o.jsx)(g.Z,{children:(0,o.jsxs)(l.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(l.ZP,{item:!0,xs:8,children:(0,o.jsx)(h.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Competition name",defaultValue:null!==(e=ne.name)&&void 0!==e?e:"",onChange:function(e){ne.name=e.target.value,re(ne)}})}),(0,o.jsx)(l.ZP,{item:!0,xs:4,children:(0,o.jsx)(P.Z,{disablePortal:!0,id:"autocomplete-type",options:["solo","synchro"],defaultValue:null!==(t=ne.type)&&void 0!==t?t:"",renderInput:function(e){return(0,o.jsx)(h.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({},e,{name:"type",label:"Type"}))},onChange:function(e,t){ne.type=t,re(ne)}})}),(0,o.jsx)(l.ZP,{item:!0,xs:6,children:(0,o.jsx)(k.Z,{label:"Start Date",default:null!==(n=ne.start_date)&&void 0!==n?n:"",onChange:function(e){ne.start_date=e,re(ne)}})}),(0,o.jsx)(l.ZP,{item:!0,xs:6,children:(0,o.jsx)(k.Z,{label:"End Date",default:null!==(r=ne.end_date)&&void 0!==r?r:"",onChange:function(e){ne.end_date=e,re(ne)}})}),(0,o.jsx)(l.ZP,{item:!0,xs:6,children:(0,o.jsx)(h.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:null!==(E=ne.location)&&void 0!==E?E:"",onChange:function(e){ne.location=e.target.value,re(ne)}})}),(0,o.jsx)(l.ZP,{item:!0,xs:4,children:(0,o.jsx)(h.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:null!==(T=ne.code)&&void 0!==T?T:"",onChange:function(e){e.target.value.length>0?(ne.code=e.target.value,re(ne)):delete ne.code}})}),(0,o.jsx)(l.ZP,{item:!0,xs:2,children:(0,o.jsx)(j.Z,{children:(0,o.jsx)(y.Z,{control:(0,o.jsx)(w.Z,{defaultCHecked:null===(A=ne.published)||void 0===A||A,onChange:function(e){ne.published=e.target.checked,re(ne)}}),label:"Published"})})})]})}),(0,o.jsxs)(Z.Z,{children:[(0,o.jsx)(s.Z,{size:"large",type:"submit",sx:{mr:2},variant:"contained",children:"Submit"}),(0,o.jsx)(s.Z,{size:"large",color:"secondary",variant:"outlined",onClick:function(){return Q(!1)},children:"Cancel"})]})]})})})]}),(0,o.jsx)(l.ZP,{item:!0,xs:12,children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(S.Z,{rows:X,headCells:[{id:"name",type:"LINK",href:function(e,t){return"/competitions/show?cid=".concat(t.code)}},{id:"type"},{id:"tags",rewrite:function(e){return e.join(", ")}},{id:"state"},{id:"start_date"},{id:"location"},{id:"number_of_runs"},{id:"code"},{id:"published",type:"BOOLEAN"}],orderById:"start_date",orderId:"desc",pagination:!1})})})]}):(F("Empty or invalid data"),"")}}},function(e){e.O(0,[292,177,329,897,49,588,335,774,888,179],(function(){return t=2486,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
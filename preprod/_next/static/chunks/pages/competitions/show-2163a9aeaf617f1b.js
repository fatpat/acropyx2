(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{6559:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a=r(n(4938)),s=n(5893),i=(0,a.default)((0,s.jsx)("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}),"Flight");t.Z=i},2643:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/show",function(){return n(6133)}])},6133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(8520),a=n.n(r),s=n(5893),i=n(7294),c=n(1163),o=n(4713),u=n(6886),l=n(5861),d=n(3321),p=n(666),f=n(2474),x=n(1458),h=n(7357),m=n(6242),j=n(298),v=n(5050),g=n(5670),Z=n(1496),b=n(44),y=n(1395),w=n(5071),k=n(1300),C=n(594),_=n(7440),P=n(3911),T=n(984),S=n(4229),E=n(5089),R=n(6559),I=n(2563),N=(n(4803),n(4117)),A=(n(7497),n(9780),n(5148)),O=n(9233),X=(n(1194),n(3521),n(7250)),V=n(3740),H=n(4451),J=n(3798),L=n(8321),W=n(4906),z=n(4267);function B(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(o){a=!0,s=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F,q=function(e){var t,n=e.code,r=D((0,A.z)(),4),c=(r[0],r[1],r[2],r[3]),o=(0,i.useState)(!1),d=o[0],p=o[1],f=(t=a().mark((function e(){var t,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/results"),{expect_json:!0});case 3:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],s=t[1],t[2],!r){e.next=12;break}return c("error while retrieving results for competition ".concat(n,": ").concat(r)),p(!1),e.abrupt("return");case 12:s.overall_results=s.overall_results.map((function(e,t){return e.rank=t+1,e})),p(s);case 14:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(e){B(s,r,a,i,c,"next",e)}function c(e){B(s,r,a,i,c,"throw",e)}i(void 0)}))});return(0,i.useEffect)((function(){f()}),[]),d?(0,s.jsxs)(z.Z,{children:[(0,s.jsxs)(l.Z,{varian:"h2",children:[d.final?"Final":"Intermediate"," results"]}),(0,s.jsx)(u.ZP,{container:!0,spacing:7,children:(0,s.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,s.jsx)(N.Z,{rows:d.overall_results,headCells:[{id:"rank"},{id:"pilot",rewrite:function(e){return e.name}},{id:"score",numeric:!0}],orderById:"rank"})})})]}):"loading ..."},M=n(1736);function G(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){G(s,r,a,i,c,"next",e)}function c(e){G(s,r,a,i,c,"throw",e)}i(void 0)}))}}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(o){a=!0,s=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=(0,Z.ZP)(b.Z)((function(e){var t=e.theme;return Q(F={},t.breakpoints.down("md"),{minWidth:100}),Q(F,t.breakpoints.down("sm"),{minWidth:67}),F})),$=(0,Z.ZP)("span")((function(e){var t=e.theme;return Q({lineHeight:1.71,fontSize:"0.875rem",marginLeft:t.spacing(2.4)},t.breakpoints.down("md"),{display:"none"})})),ee=function(){var e=(0,c.useRouter)(),t=e.query,n=t.cid,r=(t.rid,U((0,A.z)(),4)),Z=r[0],b=(r[1],r[2],r[3]),N=(0,o.aF)(),z=(N.user,N.authError,N.authIisLoading,(0,i.useState)({})),B=z[0],D=z[1],F=(0,i.useState)({}),G=F[0],Q=F[1],ee=(0,i.useState)(!1),te=ee[0],ne=ee[1],re=(0,i.useState)("actions"),ae=re[0],se=re[1],ie=U((0,O.XH)(),1)[0],ce=U((0,O.y2)(),1)[0],oe=U((0,O.Vf)(),1)[0],ue=U((0,O.Rs)(),1)[0],le=(0,i.useRef)(),de=(0,i.useRef)(),pe=(0,i.useRef)(),fe=(0,i.useRef)(),xe=(0,i.useRef)(),he=K(a().mark((function e(){var t,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),e.t0=U,e.next=4,(0,O.Xv)("/competitions/".concat(n),{expect_json:!0});case 4:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],s=t[1],t[2],!r){e.next=14;break}return D(!1),Q(!1),b("Error while retrieving competitions list: ".concat(r)),e.abrupt("return");case 14:s.delete="delete",s.update="update",s.id=s._id,D(s),Q(Object.assign({},s)),ne(!1);case 20:case"end":return e.stop()}}),e)}))),me=K(a().mark((function t(r){var s,i,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),s="/competitions/".concat(n),"PATCH",204,i={name:G.name,code:G.code,start_date:G.start_date,end_date:G.end_date,location:G.location,published:G.published,type:G.type},t.t0=U,t.next=8,(0,O.Xv)(s,{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 8:if(t.t1=t.sent,c=(0,t.t0)(t.t1,3),o=c[0],c[1],c[2],!o){t.next=16;break}return b("error while updating competition ".concat(n,": ").concat(o)),t.abrupt("return");case 16:if(G.code==B.code){t.next=18;break}return t.abrupt("return",e.push("/competitions/show?cid=".concat(G.code)));case 18:he();case 19:case"end":return t.stop()}}),t)}))),je=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.civlid})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=11;break}return b("error while updating pilots list ".concat(n,": ").concat(s)),e.abrupt("return");case 11:he();case 12:case"end":return e.stop()}}),e)}))),ve=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=11;break}return b("error while updating teams list ".concat(n,": ").concat(s)),e.abrupt("return");case 11:he();case 12:case"end":return e.stop()}}),e)}))),ge=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=11;break}return b("error while updating judges list ".concat(n,": ").concat(s)),e.abrupt("return");case 11:he();case 12:case"end":return e.stop()}}),e)}))),Ze=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=11;break}return b("error while updating repeatable tricks list ".concat(n,": ").concat(s)),e.abrupt("return");case 11:he();case 12:case"end":return e.stop()}}),e)}))),be=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=11;break}return b("error while updating config ".concat(n,": ").concat(s)),e.abrupt("return");case 11:he();case 12:case"end":return e.stop()}}),e)}))),ye=K(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure to ".concat(t," this competition ?"))){e.next=2;break}return e.abrupt("return");case 2:return e.t0=U,e.next=5,(0,O.Xv)("/competitions/".concat(n,"/").concat(t),{expected_status:204,method:"POST"});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],!s){e.next=13;break}return b("error while ".concat(t," competition ").concat(n,": ").concat(s)),e.abrupt("return");case 13:he();case 14:case"end":return e.stop()}}),e)})));K(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("No yet implemented! #TODO"),e.abrupt("return");case 5:return ne(!0),e.t0=U,e.next=9,(0,O.Xv)("/competitions/".concat(n),{method:"DELETE",expected_status:204});case 9:e.t1=e.sent,r=(0,e.t0)(e.t1,3),s=r[0],r[1],r[2],s?b("Error while deleting Competition ".concat(n,": ").concat(s)):Z("Competition ".concat(n," successfully deleted")),he();case 16:case"end":return e.stop()}}),e)})));return(0,i.useEffect)((function(){e.isReady&&he()}),[e.isReady]),te||!e.isReady?(0,s.jsxs)(h.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,s.jsx)(x.Z,{}),"Loading"]}):B?(0,s.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(u.ZP,{item:!0,xs:12,children:(0,s.jsxs)(l.Z,{variant:"h5",children:[B.name,(0,s.jsx)(p.Z,{onClick:he})]})}),(0,s.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)(X.Z,{text:G.name,title:"Name",onChange:me,onCancel:function(e){Q(B)},childRef:le,children:(0,s.jsx)(f.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:G.name,inputProps:{ref:le},onChange:function(e){G.name=e.target.value,Q(G)}})})}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(X.Z,{text:G.code,title:"Code",onChange:me,onCancel:function(e){Q(B)},childRef:de,children:(0,s.jsx)(f.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:G.code,inputProps:{ref:de},onChange:function(e){G.code=e.target.value,Q(G)}})})}),(0,s.jsxs)(l.Z,{children:["Status: ",(0,s.jsx)("strong",{children:G.state}),"init"==B.state&&(0,s.jsx)(d.Z,{variant:"outlined",startIcon:(0,s.jsx)(k.Z,{}),onClick:function(){return ye("open")},children:"Open"}),"open"==B.state&&(0,s.jsx)(d.Z,{variant:"outlined",startIcon:(0,s.jsx)(C.Z,{}),onClick:function(){return ye("close")},children:"Close"}),"closed"==B.state&&(0,s.jsx)(d.Z,{variant:"outlined",startIcon:(0,s.jsx)(_.Z,{}),onClick:function(){return ye("reopen")},children:"Reopen"})]}),(0,s.jsxs)(l.Z,{children:["Type: ",(0,s.jsx)("strong",{children:G.type})]})]}),(0,s.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)(X.Z,{text:G.start_date,title:"Start date",onChange:me,onCancel:function(e){Q(B)},childRef:pe,children:(0,s.jsx)(f.Z,{fullWidth:!0,name:"start_date",label:"Start date",placeholder:"Start date",defaultValue:G.start_date,inputProps:{ref:pe},onChange:function(e){G.start_date=e.target.value,Q(G)}})})}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(X.Z,{text:G.end_date,title:"End date",onChange:me,onCancel:function(e){Q(B)},childRef:fe,children:(0,s.jsx)(f.Z,{fullWidth:!0,name:"end_date",label:"End date",placeholder:"End date",defaultValue:G.end_date,inputProps:{ref:fe},onChange:function(e){G.end_date=e.target.value,Q(G)}})})}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(X.Z,{text:G.location,title:"Location",onChange:me,onCancel:function(e){Q(B)},childRef:xe,children:(0,s.jsx)(f.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:G.location,inputProps:{ref:xe},onChange:function(e){G.location=e.target.value,Q(G)}})})}),(0,s.jsx)(l.Z,{children:(0,s.jsx)("section",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("span",{children:["Published:",(0,s.jsx)(w.Z,{checked:G.published,onChange:function(e){confirm("Are you sure to ".concat(e.target.checked?"publish":"unpublish"," the competition ?"))?(G.published=e.target.checked,Q(G),me(e)):e.target.checked=!e.target.checked}})]})})})})]}),(0,s.jsx)(u.ZP,{item:!0,xs:12,children:(0,s.jsx)(m.Z,{children:(0,s.jsxs)(g.ZP,{value:ae,children:[(0,s.jsxs)(j.Z,{onChange:function(e,t){se(t)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:["solo"==B.type&&(0,s.jsx)(Y,{value:"pilots",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(y.Z,{}),(0,s.jsx)($,{children:"Pilots"})]})}),"synchro"==B.type&&(0,s.jsx)(Y,{value:"teams",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(I.Z,{}),(0,s.jsx)($,{children:"Teams"})]})}),(0,s.jsx)(Y,{value:"judges",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(P.Z,{}),(0,s.jsx)($,{children:"Judges"})]})}),(0,s.jsx)(Y,{value:"repeatable_tricks",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(T.Z,{}),(0,s.jsx)($,{children:"Repeatables tricks"})]})}),(0,s.jsx)(Y,{value:"settings",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(S.Z,{}),(0,s.jsx)($,{children:"Competition Settings"})]})}),(0,s.jsx)(Y,{value:"runs",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(R.Z,{}),(0,s.jsx)($,{children:"Runs"})]})}),(0,s.jsx)(Y,{value:"results",label:(0,s.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(E.Z,{}),(0,s.jsx)($,{children:"Results"})]})})]}),(0,s.jsx)(v.Z,{sx:{p:0},value:"pilots",children:(0,s.jsx)(J.Z,{pilots:B.pilots,allPilots:ie,update:function(e){return je(e)}})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"teams",children:(0,s.jsx)(H.Z,{teams:B.teams,allTeams:ce,update:function(e){return ve(e)}})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"judges",children:(0,s.jsx)(L.Z,{judges:B.judges,allJudges:oe,update:function(e){return ge(e)}})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,s.jsx)(M.Z,{tricks:B.repeatable_tricks,allTricks:ue,update:function(e){return Ze(e)}})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"settings",children:(0,s.jsx)(W.Z,{config:B.config,update:function(e){return be(e)},type:B.type})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"runs",children:(0,s.jsx)(V.Z,{comp:B,refresh:he})}),(0,s.jsx)(v.Z,{sx:{p:0},value:"results",children:(0,s.jsx)(q,{code:n})})]})})})]}):(b("Empty or invalid data"),"")}}},function(e){e.O(0,[885,808,698,109,725,404,738,335,595,774,888,179],(function(){return t=2643,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
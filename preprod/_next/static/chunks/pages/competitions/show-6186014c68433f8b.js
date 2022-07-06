(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{6559:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}),"Flight");t.Z=s},2643:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/show",function(){return n(6133)}])},6133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return oe}});var r=n(8520),a=n.n(r),i=n(5893),s=n(7294),c=n(1163),o=n(4713),u=n(6886),l=n(5861),d=n(3321),p=n(666),h=n(2474),x=n(1458),f=n(7357),j=n(6242),m=n(298),v=n(5050),Z=n(5670),g=n(1496),b=n(44),y=n(1395),w=n(5071),k=n(1300),_=n(594),C=n(7440),P=n(3911),T=n(984),S=n(4229),R=n(5089),E=n(6559),N=n(2563),A=(n(4803),n(4117),n(7497),n(9780),n(5148)),O=n(9233),I=(n(1194),n(3521),n(7250)),X=n(3740),V=n(4451),H=n(3798),J=n(8321),L=n(4906),W=n(4267),z=n(295),F=n(3252),B=n(3816),D=n(3184),q=n(7906),M=n(2882),G=n(9755),K=n.n(G);function Q(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var $,ee=function(e){var t,n=e.code,r=U((0,A.z)(),4),c=(r[0],r[1],r[2],r[3]),o=(0,s.useState)(!1),d=o[0],p=o[1],h=(t=a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/results"),{expect_json:!0});case 3:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],i=t[1],t[2],!r){e.next=12;break}return c("error while retrieving results for competition ".concat(n,": ").concat(r)),p(!1),e.abrupt("return");case 12:i.overall_results=i.overall_results.map((function(e,t){return e.rank=t+1,e})),p(i);case 14:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(e){Q(i,r,a,s,c,"next",e)}function c(e){Q(i,r,a,s,c,"throw",e)}s(void 0)}))});return(0,s.useEffect)((function(){h()}),[]),d?(window.onbeforeprint=function(e){K()(".hideToPrint").hide()},window.onafterprint=function(e){K()(".hideToPrint").show()},(0,i.jsxs)(W.Z,{children:[(0,i.jsx)(f.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsxs)(l.Z,{variant:"h4",children:[(0,i.jsx)(R.Z,{fontSize:"large"}),d.final?"Final":"Intermediate"," Overall"]})}),(0,i.jsx)(u.ZP,{container:!0,spacing:7,children:(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(M.Z,{children:(0,i.jsxs)(q.Z,{sx:{minWidth:750},children:[(0,i.jsx)(D.Z,{children:(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(F.Z,{children:"Rank"}),(0,i.jsx)(F.Z,{children:"Pilot"}),(0,i.jsx)(F.Z,{children:"Run"}),(0,i.jsx)(F.Z,{children:"Score"}),(0,i.jsx)(F.Z,{children:"Rank"}),(0,i.jsx)(F.Z,{children:"Score"})]})}),(0,i.jsx)(z.Z,{children:d.overall_results.map((function(e,t){return(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(F.Z,{children:t+1}),(0,i.jsx)(F.Z,{children:e.pilot.name}),(0,i.jsx)(F.Z,{children:e.result_per_run.map((function(e,t){return"Run ".concat(t+1)})).reduce((function(e,t){return e?Y(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(F.Z,{children:e.result_per_run.map((function(e,t){return e.score.toFixed(3)})).reduce((function(e,t){return e?Y(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(F.Z,{children:e.result_per_run.map((function(e,t){return"".concat(e.rank)})).reduce((function(e,t){return e?Y(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(F.Z,{children:e.score.toFixed(3)})]},"result-".concat(t))}))})]})})})})]})):"loading ..."},te=n(1736);function ne(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){ne(i,r,a,s,c,"next",e)}function c(e){ne(i,r,a,s,c,"throw",e)}s(void 0)}))}}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var se=(0,g.ZP)(b.Z)((function(e){var t=e.theme;return ae($={},t.breakpoints.down("md"),{minWidth:100}),ae($,t.breakpoints.down("sm"),{minWidth:67}),$})),ce=(0,g.ZP)("span")((function(e){var t=e.theme;return ae({lineHeight:1.71,fontSize:"0.875rem",marginLeft:t.spacing(2.4)},t.breakpoints.down("md"),{display:"none"})})),oe=function(){var e=(0,c.useRouter)(),t=e.query,n=t.cid,r=(t.rid,ie((0,A.z)(),4)),g=r[0],b=(r[1],r[2],r[3]),W=(0,o.aF)(),z=(W.user,W.authError,W.authIisLoading,(0,s.useState)({})),F=z[0],B=z[1],D=(0,s.useState)({}),q=D[0],M=D[1],G=(0,s.useState)(!1),K=G[0],Q=G[1],U=(0,s.useState)("actions"),Y=U[0],$=U[1],ne=ie((0,O.XH)(),1)[0],ae=ie((0,O.y2)(),1)[0],oe=ie((0,O.Vf)(),1)[0],ue=ie((0,O.Rs)(),1)[0],le=(0,s.useRef)(),de=(0,s.useRef)(),pe=(0,s.useRef)(),he=(0,s.useRef)(),xe=(0,s.useRef)(),fe=re(a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.t0=ie,e.next=4,(0,O.Xv)("/competitions/".concat(n),{expect_json:!0});case 4:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],i=t[1],t[2],!r){e.next=14;break}return B(!1),M(!1),b("Error while retrieving competitions list: ".concat(r)),e.abrupt("return");case 14:i.delete="delete",i.update="update",i.id=i._id,B(i),M(Object.assign({},i)),Q(!1);case 20:case"end":return e.stop()}}),e)}))),je=re(a().mark((function t(r){var i,s,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),i="/competitions/".concat(n),"PATCH",204,s={name:q.name,code:q.code,start_date:q.start_date,end_date:q.end_date,location:q.location,published:q.published,type:q.type},t.t0=ie,t.next=8,(0,O.Xv)(i,{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:if(t.t1=t.sent,c=(0,t.t0)(t.t1,3),o=c[0],c[1],c[2],!o){t.next=16;break}return b("error while updating competition ".concat(n,": ").concat(o)),t.abrupt("return");case 16:if(q.code==F.code){t.next=18;break}return t.abrupt("return",e.push("/competitions/show?cid=".concat(q.code)));case 18:fe();case 19:case"end":return t.stop()}}),t)}))),me=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ie,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.civlid})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating pilots list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:fe();case 12:case"end":return e.stop()}}),e)}))),ve=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ie,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating teams list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:fe();case 12:case"end":return e.stop()}}),e)}))),Ze=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ie,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating judges list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:fe();case 12:case"end":return e.stop()}}),e)}))),ge=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ie,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating repeatable tricks list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:fe();case 12:case"end":return e.stop()}}),e)}))),be=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ie,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating config ".concat(n,": ").concat(i)),e.abrupt("return");case 11:fe();case 12:case"end":return e.stop()}}),e)}))),ye=re(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure to ".concat(t," this competition ?"))){e.next=2;break}return e.abrupt("return");case 2:return e.t0=ie,e.next=5,(0,O.Xv)("/competitions/".concat(n,"/").concat(t),{expected_status:204,method:"POST"});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=13;break}return b("error while ".concat(t," competition ").concat(n,": ").concat(i)),e.abrupt("return");case 13:fe();case 14:case"end":return e.stop()}}),e)})));re(a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("No yet implemented! #TODO"),e.abrupt("return");case 5:return Q(!0),e.t0=ie,e.next=9,(0,O.Xv)("/competitions/".concat(n),{method:"DELETE",expected_status:204});case 9:e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],i?b("Error while deleting Competition ".concat(n,": ").concat(i)):g("Competition ".concat(n," successfully deleted")),fe();case 16:case"end":return e.stop()}}),e)})));return(0,s.useEffect)((function(){e.isReady&&fe()}),[e.isReady]),K||!e.isReady?(0,i.jsxs)(f.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,i.jsx)(x.Z,{}),"Loading"]}):F?(0,i.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(u.ZP,{item:!0,xs:12,children:(0,i.jsxs)(l.Z,{variant:"h5",children:[F.name,(0,i.jsx)(p.Z,{className:"hideToPrint",onClick:fe})]})}),(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(I.Z,{text:q.name,title:"Name",onChange:je,onCancel:function(e){M(F)},childRef:le,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:q.name,inputProps:{ref:le},onChange:function(e){q.name=e.target.value,M(q)}})})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(I.Z,{text:q.code,title:"Code",onChange:je,onCancel:function(e){M(F)},childRef:de,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:q.code,inputProps:{ref:de},onChange:function(e){q.code=e.target.value,M(q)}})})}),(0,i.jsxs)(l.Z,{children:["Status: ",(0,i.jsx)("strong",{children:q.state}),"init"==F.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(k.Z,{}),onClick:function(){return ye("open")},children:"Open"}),"open"==F.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(_.Z,{}),onClick:function(){return ye("close")},children:"Close"}),"closed"==F.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(C.Z,{}),onClick:function(){return ye("reopen")},children:"Reopen"})]}),(0,i.jsxs)(l.Z,{children:["Type: ",(0,i.jsx)("strong",{children:q.type})]})]}),(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(I.Z,{text:q.start_date,title:"Start date",onChange:je,onCancel:function(e){M(F)},childRef:pe,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"start_date",label:"Start date",placeholder:"Start date",defaultValue:q.start_date,inputProps:{ref:pe},onChange:function(e){q.start_date=e.target.value,M(q)}})})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(I.Z,{text:q.end_date,title:"End date",onChange:je,onCancel:function(e){M(F)},childRef:he,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"end_date",label:"End date",placeholder:"End date",defaultValue:q.end_date,inputProps:{ref:he},onChange:function(e){q.end_date=e.target.value,M(q)}})})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(I.Z,{text:q.location,title:"Location",onChange:je,onCancel:function(e){M(F)},childRef:xe,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:q.location,inputProps:{ref:xe},onChange:function(e){q.location=e.target.value,M(q)}})})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("section",{children:(0,i.jsx)("div",{children:(0,i.jsxs)("span",{children:["Published:",(0,i.jsx)(w.Z,{checked:q.published,onChange:function(e){confirm("Are you sure to ".concat(e.target.checked?"publish":"unpublish"," the competition ?"))?(q.published=e.target.checked,M(q),je(e)):e.target.checked=!e.target.checked}})]})})})})]}),(0,i.jsx)(u.ZP,{item:!0,xs:12,children:(0,i.jsx)(j.Z,{children:(0,i.jsxs)(Z.ZP,{value:Y,children:[(0,i.jsxs)(m.Z,{className:"hideToPrint",onChange:function(e,t){$(t)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:["solo"==F.type&&(0,i.jsx)(se,{value:"pilots",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(y.Z,{}),(0,i.jsx)(ce,{children:"Pilots"})]})}),"synchro"==F.type&&(0,i.jsx)(se,{value:"teams",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(N.Z,{}),(0,i.jsx)(ce,{children:"Teams"})]})}),(0,i.jsx)(se,{value:"judges",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(P.Z,{}),(0,i.jsx)(ce,{children:"Judges"})]})}),(0,i.jsx)(se,{value:"repeatable_tricks",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{}),(0,i.jsx)(ce,{children:"Repeatables tricks"})]})}),(0,i.jsx)(se,{value:"settings",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(ce,{children:"Competition Settings"})]})}),(0,i.jsx)(se,{value:"runs",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(E.Z,{}),(0,i.jsx)(ce,{children:"Runs"})]})}),(0,i.jsx)(se,{value:"results",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(R.Z,{}),(0,i.jsx)(ce,{children:"Results"})]})})]}),(0,i.jsx)(v.Z,{sx:{p:0},value:"pilots",children:(0,i.jsx)(H.Z,{pilots:F.pilots,allPilots:ne,update:function(e){return me(e)}})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"teams",children:(0,i.jsx)(V.Z,{teams:F.teams,allTeams:ae,update:function(e){return ve(e)}})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"judges",children:(0,i.jsx)(J.Z,{judges:F.judges,allJudges:oe,update:function(e){return Ze(e)}})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,i.jsx)(te.Z,{tricks:F.repeatable_tricks,allTricks:ue,update:function(e){return ge(e)}})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"settings",children:(0,i.jsx)(L.Z,{config:F.config,update:function(e){return be(e)},type:F.type})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"runs",children:(0,i.jsx)(X.Z,{comp:F,refresh:fe})}),(0,i.jsx)(v.Z,{sx:{p:0},value:"results",children:(0,i.jsx)(ee,{code:n})})]})})})]}):(b("Empty or invalid data"),"")}}},function(e){e.O(0,[885,571,808,698,109,725,404,738,335,595,774,888,179],(function(){return t=2643,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
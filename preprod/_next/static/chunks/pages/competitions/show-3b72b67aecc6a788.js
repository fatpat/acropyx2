(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{6559:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var s=r(t(4938)),i=t(5893),c=(0,s.default)((0,i.jsx)("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}),"Flight");n.Z=c},2643:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/show",function(){return t(6133)}])},6133:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return de}});var r=t(8520),s=t.n(r),i=t(5893),c=t(7294),a=t(1163),o=t(4713),l=t(9072),d=t(9630),u=t(5084),h=t(1849),x=t(7971),p=t(6070),j=t(1953),f=t(9837),Z=t(8769),m=t(5050),v=t(5670),b=t(7074),g=t(8661),y=t(1395),w=t(1362),k=t(1300),_=t(594),C=t(7440),P=t(3911),T=t(984),S=t(4229),R=t(5089),E=t(6559),N=t(2563),A=(t(4803),t(4117),t(7497),t(9780),t(5148)),I=t(9233),O=(t(1194),t(3521),t(7250)),X=t(3740),L=t(4451),V=t(3798),H=t(8321),J=t(4906),W=t(1359),F=t(9807),z=t(5605),D=t(9417),B=t(3978),U=t(244),q=t(6777),M=t(1523),G=t(8953),K=t(9755),Q=t.n(K);t(6786);function Y(e,n,t,r,s,i,c){try{var a=e[i](c),o=a.value}catch(l){return void t(l)}a.done?n(o):Promise.resolve(o).then(r,s)}function $(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,s=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(o){s=!0,i=o}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ee(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ne,te=function(e){var n,t=e.code,r=$((0,A.z)(),4),a=(r[0],r[1],r[2],r[3]),o=(0,c.useState)(!1),h=o[0],x=o[1],p=(n=s().mark((function e(){var n,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=$,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/results"),{expect_json:!0});case 3:if(e.t1=e.sent,n=(0,e.t0)(e.t1,3),r=n[0],i=n[1],n[2],!r){e.next=12;break}return a("error while retrieving results for competition ".concat(t,": ").concat(r)),x(!1),e.abrupt("return");case 12:i.overall_results=i.overall_results.map((function(e,n){return e.rank=n+1,e})),x(i);case 14:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,s){var i=n.apply(e,t);function c(e){Y(i,r,s,c,a,"next",e)}function a(e){Y(i,r,s,c,a,"throw",e)}c(void 0)}))});return(0,c.useEffect)((function(){p()}),[]),h?(window.onbeforeprint=function(e){Q()(".hideToPrint").hide()},window.onafterprint=function(e){Q()(".hideToPrint").show()},(0,i.jsxs)(W.Z,{children:[(0,i.jsxs)(j.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,i.jsx)(u.Z,{href:new URL("/competitions/".concat(t,"/results/export"),"https://preprod-api-acropyx.herokuapp.com").toString(),startIcon:(0,i.jsx)(M.Z,{}),children:"Download CIVL Export"}),(0,i.jsx)(u.Z,{href:new URL("/competitions/".concat(t,"/results/export?filetype=html"),"https://preprod-api-acropyx.herokuapp.com").toString(),startIcon:(0,i.jsx)(G.Z,{}),target:"_blank",rel:"noreferrer",children:"PDF Export"})]}),(0,i.jsx)(j.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsxs)(d.Z,{variant:"h4",children:[(0,i.jsx)(R.Z,{fontSize:"large"}),h.final?"Final":"Intermediate"," Overall"]})}),(0,i.jsx)(l.ZP,{container:!0,spacing:7,children:(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(q.Z,{children:(0,i.jsxs)(U.Z,{sx:{minWidth:750},children:[(0,i.jsx)(B.Z,{children:(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"Rank"}),(0,i.jsx)(z.Z,{children:"Pilot"}),(0,i.jsx)(z.Z,{children:"Run"}),(0,i.jsx)(z.Z,{children:"Score"}),(0,i.jsx)(z.Z,{children:"Rank"}),(0,i.jsx)(z.Z,{children:"Score"})]})}),(0,i.jsxs)(F.Z,{children:[h.overall_results.map((function(e,n){return(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:n+1}),(0,i.jsxs)(z.Z,{children:["solo"==h.type&&e.pilot.name,"synchro"==h.type&&(0,i.jsxs)("p",{children:[e.team.name,(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e.team.pilots[0].name}),(0,i.jsx)("li",{children:e.team.pilots[1].name})]})]})]}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,n){return"Run ".concat(n+1)})).reduce((function(e,n){return e?ee(e).concat([(0,i.jsx)("br",{}),n]):[n]}))}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,n){return e.score.toFixed(3)})).reduce((function(e,n){return e?ee(e).concat([(0,i.jsx)("br",{}),n]):[n]}))}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,n){return"".concat(e.rank)})).reduce((function(e,n){return e?ee(e).concat([(0,i.jsx)("br",{}),n]):[n]}))}),(0,i.jsx)(z.Z,{children:e.score.toFixed(3)})]},"result-".concat(n))})),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank1"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank2"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank3"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank4"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank5"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank6"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank7"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank8"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank9"),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"}),(0,i.jsx)(z.Z,{children:"\xa0"})]},"blank10")]})]})})})})]})):"loading ..."},re=t(1736);function se(e,n,t,r,s,i,c){try{var a=e[i](c),o=a.value}catch(l){return void t(l)}a.done?n(o):Promise.resolve(o).then(r,s)}function ie(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function c(e){se(i,r,s,c,a,"next",e)}function a(e){se(i,r,s,c,a,"throw",e)}c(void 0)}))}}function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,s=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(o){s=!0,i=o}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var oe=(0,b.ZP)(g.Z)((function(e){var n=e.theme;return ce(ne={},n.breakpoints.down("md"),{minWidth:100}),ce(ne,n.breakpoints.down("sm"),{minWidth:67}),ne})),le=(0,b.ZP)("span")((function(e){var n=e.theme;return ce({lineHeight:1.71,fontSize:"0.875rem",marginLeft:n.spacing(2.4)},n.breakpoints.down("md"),{display:"none"})})),de=function(){var e=(0,a.useRouter)(),n=e.query,t=n.cid,r=(n.rid,ae((0,A.z)(),4)),b=r[0],g=(r[1],r[2],r[3]),W=(0,o.aF)(),F=(W.user,W.authError,W.authIisLoading,(0,c.useState)({})),z=F[0],D=F[1],B=(0,c.useState)({}),U=B[0],q=B[1],M=(0,c.useState)(!1),G=M[0],K=M[1],Q=(0,c.useState)("actions"),Y=Q[0],$=Q[1],ee=ae((0,I.XH)(),1)[0],ne=ae((0,I.y2)(),1)[0],se=ae((0,I.Vf)(),1)[0],ce=ae((0,I.Rs)(),1)[0],de=(0,c.useRef)(),ue=(0,c.useRef)(),he=(0,c.useRef)(),xe=(0,c.useRef)(),pe=(0,c.useRef)(),je=ie(s().mark((function e(){var n,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.t0=ae,e.next=4,(0,I.Xv)("/competitions/".concat(t),{expect_json:!0});case 4:if(e.t1=e.sent,n=(0,e.t0)(e.t1,3),r=n[0],i=n[1],n[2],!r){e.next=14;break}return D(!1),q(!1),g("Error while retrieving competitions list: ".concat(r)),e.abrupt("return");case 14:i.delete="delete",i.update="update",i.id=i._id,D(i),q(Object.assign({},i)),K(!1);case 20:case"end":return e.stop()}}),e)}))),fe=ie(s().mark((function n(r){var i,c,a,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),i="/competitions/".concat(t),"PATCH",204,c={name:U.name,code:U.code,start_date:U.start_date,end_date:U.end_date,location:U.location,published:U.published,type:U.type},n.t0=ae,n.next=8,(0,I.Xv)(i,{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 8:if(n.t1=n.sent,a=(0,n.t0)(n.t1,3),o=a[0],a[1],a[2],!o){n.next=16;break}return g("error while updating competition ".concat(t,": ").concat(o)),n.abrupt("return");case 16:if(U.code==z.code){n.next=18;break}return n.abrupt("return",e.push("/competitions/show?cid=".concat(U.code)));case 18:je();case 19:case"end":return n.stop()}}),n)}))),Ze=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map((function(e){return e.civlid})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return g("error while updating pilots list ".concat(t,": ").concat(i)),e.abrupt("return");case 11:je();case 12:case"end":return e.stop()}}),e)}))),me=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return g("error while updating teams list ".concat(t,": ").concat(i)),e.abrupt("return");case 11:je();case 12:case"end":return e.stop()}}),e)}))),ve=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return g("error while updating judges list ".concat(t,": ").concat(i)),e.abrupt("return");case 11:je();case 12:case"end":return e.stop()}}),e)}))),be=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return g("error while updating repeatable tricks list ".concat(t,": ").concat(i)),e.abrupt("return");case 11:je();case 12:case"end":return e.stop()}}),e)}))),ge=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,(0,I.Xv)("/competitions/".concat(t,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return g("error while updating config ".concat(t,": ").concat(i)),e.abrupt("return");case 11:je();case 12:case"end":return e.stop()}}),e)}))),ye=ie(s().mark((function e(n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure to ".concat(n," this competition ?"))){e.next=2;break}return e.abrupt("return");case 2:return e.t0=ae,e.next=5,(0,I.Xv)("/competitions/".concat(t,"/").concat(n),{expected_status:204,method:"POST"});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=13;break}return g("error while ".concat(n," competition ").concat(t,": ").concat(i)),e.abrupt("return");case 13:je();case 14:case"end":return e.stop()}}),e)})));ie(s().mark((function e(n){var t,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("No yet implemented! #TODO"),e.abrupt("return");case 5:return K(!0),e.t0=ae,e.next=9,(0,I.Xv)("/competitions/".concat(t),{method:"DELETE",expected_status:204});case 9:e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],i?g("Error while deleting Competition ".concat(t,": ").concat(i)):b("Competition ".concat(t," successfully deleted")),je();case 16:case"end":return e.stop()}}),e)})));return(0,c.useEffect)((function(){e.isReady&&je()}),[e.isReady]),G||!e.isReady?(0,i.jsxs)(j.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,i.jsx)(p.Z,{}),"Loading"]}):z?(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(d.Z,{variant:"h5",children:[z.name,(0,i.jsx)(h.Z,{className:"hideToPrint",onClick:je})]})}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(O.Z,{text:U.name,title:"Name",onChange:fe,onCancel:function(e){q(z)},childRef:de,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:U.name,inputProps:{ref:de},onChange:function(e){U.name=e.target.value,q(U)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(O.Z,{text:U.code,title:"Code",onChange:fe,onCancel:function(e){q(z)},childRef:ue,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:U.code,inputProps:{ref:ue},onChange:function(e){U.code=e.target.value,q(U)}})})}),(0,i.jsxs)(d.Z,{children:["Status: ",(0,i.jsx)("strong",{children:U.state}),"init"==z.state&&(0,i.jsx)(u.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(k.Z,{}),onClick:function(){return ye("open")},children:"Open"}),"open"==z.state&&(0,i.jsx)(u.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(_.Z,{}),onClick:function(){return ye("close")},children:"Close"}),"closed"==z.state&&(0,i.jsx)(u.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(C.Z,{}),onClick:function(){return ye("reopen")},children:"Reopen"})]}),(0,i.jsxs)(d.Z,{children:["Type: ",(0,i.jsx)("strong",{children:U.type})]})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(O.Z,{text:U.start_date,title:"Start date",onChange:fe,onCancel:function(e){q(z)},childRef:he,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"start_date",label:"Start date",placeholder:"Start date",defaultValue:U.start_date,inputProps:{ref:he},onChange:function(e){U.start_date=e.target.value,q(U)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(O.Z,{text:U.end_date,title:"End date",onChange:fe,onCancel:function(e){q(z)},childRef:xe,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"end_date",label:"End date",placeholder:"End date",defaultValue:U.end_date,inputProps:{ref:xe},onChange:function(e){U.end_date=e.target.value,q(U)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(O.Z,{text:U.location,title:"Location",onChange:fe,onCancel:function(e){q(z)},childRef:pe,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:U.location,inputProps:{ref:pe},onChange:function(e){U.location=e.target.value,q(U)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)("section",{children:(0,i.jsx)("div",{children:(0,i.jsxs)("span",{children:["Published:",(0,i.jsx)(w.Z,{checked:U.published,onChange:function(e){confirm("Are you sure to ".concat(e.target.checked?"publish":"unpublish"," the competition ?"))?(U.published=e.target.checked,q(U),fe(e)):e.target.checked=!e.target.checked}})]})})})})]}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(f.Z,{children:(0,i.jsxs)(v.ZP,{value:Y,children:[(0,i.jsxs)(Z.Z,{className:"hideToPrint",onChange:function(e,n){$(n)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:["solo"==z.type&&(0,i.jsx)(oe,{value:"pilots",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(y.Z,{}),(0,i.jsx)(le,{children:"Pilots"})]})}),"synchro"==z.type&&(0,i.jsx)(oe,{value:"teams",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(N.Z,{}),(0,i.jsx)(le,{children:"Teams"})]})}),(0,i.jsx)(oe,{value:"judges",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(P.Z,{}),(0,i.jsx)(le,{children:"Judges"})]})}),(0,i.jsx)(oe,{value:"repeatable_tricks",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{}),(0,i.jsx)(le,{children:"Repeatables tricks"})]})}),(0,i.jsx)(oe,{value:"settings",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(le,{children:"Competition Settings"})]})}),(0,i.jsx)(oe,{value:"runs",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(E.Z,{}),(0,i.jsx)(le,{children:"Runs"})]})}),(0,i.jsx)(oe,{value:"results",label:(0,i.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(R.Z,{}),(0,i.jsx)(le,{children:"Results"})]})})]}),(0,i.jsx)(m.Z,{sx:{p:0},value:"pilots",children:(0,i.jsx)(V.Z,{pilots:z.pilots,allPilots:ee,update:function(e){return Ze(e)}})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"teams",children:(0,i.jsx)(L.Z,{teams:z.teams,allTeams:ne,update:function(e){return me(e)}})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"judges",children:(0,i.jsx)(H.Z,{judges:z.judges,allJudges:se,update:function(e){return ve(e)}})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,i.jsx)(re.Z,{tricks:z.repeatable_tricks,allTricks:ce,update:function(e){return be(e)}})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"settings",children:(0,i.jsx)(J.Z,{config:z.config,update:function(e){return ge(e)},type:z.type})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"runs",children:(0,i.jsx)(X.Z,{comp:z,refresh:je})}),(0,i.jsx)(m.Z,{sx:{p:0},value:"results",children:(0,i.jsx)(te,{code:t})})]})})})]}):(g("Empty or invalid data"),"")}}},function(e){e.O(0,[571,885,292,177,329,897,49,238,335,457,774,888,179],(function(){return n=2643,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
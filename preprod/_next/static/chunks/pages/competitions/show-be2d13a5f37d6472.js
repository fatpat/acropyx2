(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{6559:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}),"Flight");t.Z=s},2643:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/show",function(){return n(6133)}])},6133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r=n(8520),a=n.n(r),i=n(5893),s=n(7294),c=n(1163),o=n(4713),l=n(9072),u=n(9630),d=n(5084),p=n(1849),h=n(7971),x=n(6070),f=n(1953),m=n(9837),j=n(4731),v=n(8769),g=n(5050),Z=n(5670),y=n(7074),b=n(8661),w=n(1395),k=n(1362),C=n(1300),_=n(594),P=n(7440),T=n(3911),S=n(984),R=n(4229),E=n(5089),N=n(6559),A=n(2563),I=(n(4803),n(4117),n(7497),n(9780),n(5148)),O=n(9233),X=(n(1194),n(3521),n(7250)),V=n(36),L=n(4451),W=n(3798),H=n(8321),J=n(4906),F=n(1359),D=n(9807),z=n(5605),B=n(9417),U=n(3978),q=n(244),M=n(6777),G=n(1523),K=n(8953),Q=n(9755),Y=n.n(Q);n(6786);function $(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function te(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ne,re=function(e){var t,n=e.code,r=ee((0,I.z)(),4),c=(r[0],r[1],r[2],r[3]),o=(0,s.useState)(!1),p=o[0],h=o[1],x=(t=a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ee,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/results"),{expect_json:!0});case 3:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],i=t[1],t[2],!r){e.next=12;break}return c("error while retrieving results for competition ".concat(n,": ").concat(r)),h(!1),e.abrupt("return");case 12:i.overall_results=i.overall_results.map((function(e,t){return e.rank=t+1,e})),h(i);case 14:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(e){$(i,r,a,s,c,"next",e)}function c(e){$(i,r,a,s,c,"throw",e)}s(void 0)}))});return(0,s.useEffect)((function(){x()}),[]),p?(window.onbeforeprint=function(e){Y()(".hideToPrint").hide()},window.onafterprint=function(e){Y()(".hideToPrint").show()},(0,i.jsxs)(F.Z,{children:[(0,i.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,i.jsx)(d.Z,{href:new URL("/competitions/".concat(n,"/results/export"),"https://api-preprod.acroworldtour.com/").toString(),startIcon:(0,i.jsx)(G.Z,{}),children:"Download CIVL Export"}),(0,i.jsx)(d.Z,{href:new URL("/competitions/".concat(n,"/results/export?filetype=html"),"https://api-preprod.acroworldtour.com/").toString(),startIcon:(0,i.jsx)(K.Z,{}),target:"_blank",rel:"noreferrer",children:"PDF Export"})]}),(0,i.jsx)(f.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsxs)(u.Z,{variant:"h4",children:[(0,i.jsx)(E.Z,{fontSize:"large"}),p.final?"Final":"Intermediate"," Overall"]})}),(0,i.jsx)(l.ZP,{container:!0,spacing:7,children:(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(M.Z,{children:(0,i.jsxs)(q.Z,{sx:{minWidth:750},children:[(0,i.jsx)(U.Z,{children:(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(z.Z,{children:"Rank"}),(0,i.jsx)(z.Z,{children:"Pilot"}),(0,i.jsx)(z.Z,{children:"Run"}),(0,i.jsx)(z.Z,{children:"Score"}),(0,i.jsx)(z.Z,{children:"Rank"}),(0,i.jsx)(z.Z,{children:"Score"})]})}),(0,i.jsx)(D.Z,{children:p.overall_results.map((function(e,t){return(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(z.Z,{children:t+1}),(0,i.jsxs)(z.Z,{children:["solo"==p.type&&e.pilot.name,"synchro"==p.type&&(0,i.jsxs)("p",{children:[e.team.name,(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e.team.pilots[0].name}),(0,i.jsx)("li",{children:e.team.pilots[1].name})]})]})]}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,t){return"Run ".concat(t+1)})).reduce((function(e,t){return e?te(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,t){return e.score.toFixed(3)})).reduce((function(e,t){return e?te(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(z.Z,{children:e.result_per_run.map((function(e,t){return"".concat(e.rank)})).reduce((function(e,t){return e?te(e).concat([(0,i.jsx)("br",{}),t]):[t]}))}),(0,i.jsx)(z.Z,{children:e.score.toFixed(3)})]},"result-".concat(t))}))})]})})})})]})):"loading ..."},ae=n(1736);function ie(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function se(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){ie(i,r,a,s,c,"next",e)}function c(e){ie(i,r,a,s,c,"throw",e)}s(void 0)}))}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var le=(0,y.ZP)(b.Z)((function(e){var t=e.theme;return ce(ne={},t.breakpoints.down("md"),{minWidth:100}),ce(ne,t.breakpoints.down("sm"),{minWidth:67}),ne})),ue=(0,y.ZP)("span")((function(e){var t=e.theme;return ce({lineHeight:1.71,fontSize:"0.875rem",marginLeft:t.spacing(2.4)},t.breakpoints.down("md"),{display:"none"})})),de=function(){var e=(0,c.useRouter)(),t=e.query,n=t.cid,r=(t.rid,oe((0,I.z)(),4)),y=r[0],b=(r[1],r[2],r[3]),F=(0,o.aF)(),D=(F.user,F.authError,F.authIisLoading,(0,s.useState)({})),z=D[0],B=D[1],U=(0,s.useState)({}),q=U[0],M=U[1],G=(0,s.useState)(!0),K=G[0],Q=G[1],Y=(0,s.useState)("actions"),$=Y[0],ee=Y[1],te=oe((0,O.XH)(),1)[0],ne=oe((0,O.y2)(),1)[0],ie=oe((0,O.Vf)(),1)[0],ce=oe((0,O.Rs)(),1)[0],de=(0,s.useRef)(),pe=(0,s.useRef)(),he=(0,s.useRef)(),xe=(0,s.useRef)(),fe=(0,s.useRef)(),me=(0,s.useRef)(),je=(0,s.useRef)(),ve=se(a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.t0=oe,e.next=4,(0,O.Xv)("/competitions/".concat(n),{expect_json:!0});case 4:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],i=t[1],t[2],!r){e.next=14;break}return B(!1),M(!1),b("Error while retrieving competitions list: ".concat(r)),e.abrupt("return");case 14:i.delete="delete",i.update="update",i.id=i._id,i.acronym=i.name.split(/[\W]+/).map((function(e){return e[0]})).join("").toUpperCase(),B(i),M(Object.assign({},i)),Q(!1);case 21:case"end":return e.stop()}}),e)}))),ge=se(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:me.current.click();case 1:case"end":return e.stop()}}),e)}))),Ze=se(a().mark((function e(t){var r,i,s,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.files&&t.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:if(r.type.match(/^image\//)){e.next=5;break}return e.abrupt("return",b("Error: only images are allowed (got '".concat(r.type,"')")));case 5:return t.target.value=null,(i=new FormData).append("file",r,r.name),e.t0=oe,e.next=11,(0,O.Xv)("/files/new",{expected_status:200,method:"POST",body:i});case 11:if(e.t1=e.sent,s=(0,e.t0)(e.t1,3),c=s[0],o=s[1],s[2],!c){e.next=19;break}return b("error while updating competition ".concat(n,": ").concat(c)),e.abrupt("return");case 19:return console.log(o),q.image=o.id,M(q),e.next=24,ye(new Event("image"));case 24:case"end":return e.stop()}}),e)}))),ye=se(a().mark((function t(r){var i,s,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),i="/competitions/".concat(n),"PATCH",204,s={name:q.name,code:q.code,start_date:q.start_date,end_date:q.end_date,location:q.location,published:q.published,type:q.type,image:q.image,tags:q.tags},t.t0=oe,t.next=8,(0,O.Xv)(i,{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:if(t.t1=t.sent,c=(0,t.t0)(t.t1,3),o=c[0],c[1],c[2],!o){t.next=16;break}return b("error while updating competition ".concat(n,": ").concat(o)),t.abrupt("return");case 16:if(q.code==z.code){t.next=18;break}return t.abrupt("return",e.push("/competitions/show?cid=".concat(q.code)));case 18:ve();case 19:case"end":return t.stop()}}),t)}))),be=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oe,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.civlid})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating pilots list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:ve();case 12:case"end":return e.stop()}}),e)}))),we=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oe,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating teams list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:ve();case 12:case"end":return e.stop()}}),e)}))),ke=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oe,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating judges list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:ve();case 12:case"end":return e.stop()}}),e)}))),Ce=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oe,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating repeatable tricks list ".concat(n,": ").concat(i)),e.abrupt("return");case 11:ve();case 12:case"end":return e.stop()}}),e)}))),_e=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=oe,e.next=3,(0,O.Xv)("/competitions/".concat(n,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=11;break}return b("error while updating config ".concat(n,": ").concat(i)),e.abrupt("return");case 11:ve();case 12:case"end":return e.stop()}}),e)}))),Pe=se(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure to ".concat(t," this competition ?"))){e.next=2;break}return e.abrupt("return");case 2:return e.t0=oe,e.next=5,(0,O.Xv)("/competitions/".concat(n,"/").concat(t),{expected_status:204,method:"POST"});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],!i){e.next=13;break}return b("error while ".concat(t," competition ").concat(n,": ").concat(i)),e.abrupt("return");case 13:ve();case 14:case"end":return e.stop()}}),e)})));se(a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("No yet implemented! #TODO"),e.abrupt("return");case 5:return Q(!0),e.t0=oe,e.next=9,(0,O.Xv)("/competitions/".concat(n),{method:"DELETE",expected_status:204});case 9:e.t1=e.sent,r=(0,e.t0)(e.t1,3),i=r[0],r[1],r[2],i?b("Error while deleting Competition ".concat(n,": ").concat(i)):y("Competition ".concat(n," successfully deleted")),ve();case 16:case"end":return e.stop()}}),e)})));return(0,s.useEffect)((function(){e.isReady&&ve()}),[e.isReady]),K||!e.isReady?(0,i.jsxs)(f.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,i.jsx)(x.Z,{}),"Loading"]}):z?(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,i.jsx)("input",{style:{display:"none"},ref:me,type:"file",onChange:Ze}),(0,i.jsxs)(u.Z,{variant:"h5",sx:{display:"flex"},children:[(0,i.jsx)(j.Z,{src:z.image,onClick:ge,children:z.acronym}),"\xa0",z.name,(0,i.jsx)(p.Z,{className:"hideToPrint",onClick:ve})]})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.name,title:"Name",onChange:ye,onCancel:function(e){M(z)},childRef:de,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:q.name,inputProps:{ref:de},onChange:function(e){q.name=e.target.value,M(q)}})})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.code,title:"Code",onChange:ye,onCancel:function(e){M(z)},childRef:pe,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:q.code,inputProps:{ref:pe},onChange:function(e){q.code=e.target.value,M(q)}})})}),(0,i.jsxs)(u.Z,{children:["Status: ",(0,i.jsx)("strong",{children:q.state}),"init"==z.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(C.Z,{}),onClick:function(){return Pe("open")},children:"Open"}),"open"==z.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(_.Z,{}),onClick:function(){return Pe("close")},children:"Close"}),"closed"==z.state&&(0,i.jsx)(d.Z,{variant:"outlined",className:"hideToPrint",startIcon:(0,i.jsx)(P.Z,{}),onClick:function(){return Pe("reopen")},children:"Reopen"})]}),(0,i.jsxs)(u.Z,{children:["Type: ",(0,i.jsx)("strong",{children:q.type})]}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.tags.length>0?q.tags.join(", "):"none",title:"Tags",onChange:ye,onCancel:function(e){M(z)},childRef:je,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"tags",label:"Tags",placeholder:"Tags",defaultValue:q.tags.join(", "),inputProps:{ref:je},onChange:function(e){q.tags=e.target.value.split(/[, ]+/).filter((function(e){return""!=e})),M(q)}})})})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.start_date,title:"Start date",onChange:ye,onCancel:function(e){M(z)},childRef:he,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"start_date",label:"Start date",placeholder:"Start date",defaultValue:q.start_date,inputProps:{ref:he},onChange:function(e){q.start_date=e.target.value,M(q)}})})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.end_date,title:"End date",onChange:ye,onCancel:function(e){M(z)},childRef:xe,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"end_date",label:"End date",placeholder:"End date",defaultValue:q.end_date,inputProps:{ref:xe},onChange:function(e){q.end_date=e.target.value,M(q)}})})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(X.Z,{text:q.location,title:"Location",onChange:ye,onCancel:function(e){M(z)},childRef:fe,children:(0,i.jsx)(h.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:q.location,inputProps:{ref:fe},onChange:function(e){q.location=e.target.value,M(q)}})})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)("section",{children:(0,i.jsx)("div",{children:(0,i.jsxs)("span",{children:["Published:",(0,i.jsx)(k.Z,{checked:q.published,onChange:function(e){confirm("Are you sure to ".concat(e.target.checked?"publish":"unpublish"," the competition ?"))?(q.published=e.target.checked,M(q),ye(e)):e.target.checked=!e.target.checked}})]})})})})]}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(m.Z,{children:(0,i.jsxs)(Z.ZP,{value:$,children:[(0,i.jsxs)(v.Z,{className:"hideToPrint",onChange:function(e,t){ee(t)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:["solo"==z.type&&(0,i.jsx)(le,{value:"pilots",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(w.Z,{}),(0,i.jsx)(ue,{children:"Pilots"})]})}),"synchro"==z.type&&(0,i.jsx)(le,{value:"teams",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(A.Z,{}),(0,i.jsx)(ue,{children:"Teams"})]})}),(0,i.jsx)(le,{value:"judges",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{}),(0,i.jsx)(ue,{children:"Judges"})]})}),(0,i.jsx)(le,{value:"repeatable_tricks",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(ue,{children:"Repeatables tricks"})]})}),(0,i.jsx)(le,{value:"settings",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(R.Z,{}),(0,i.jsx)(ue,{children:"Competition Settings"})]})}),(0,i.jsx)(le,{value:"runs",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(N.Z,{}),(0,i.jsx)(ue,{children:"Runs"})]})}),(0,i.jsx)(le,{value:"results",label:(0,i.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(E.Z,{}),(0,i.jsx)(ue,{children:"Results"})]})})]}),(0,i.jsx)(g.Z,{sx:{p:0},value:"pilots",children:(0,i.jsx)(W.Z,{pilots:z.pilots,allPilots:te,update:function(e){return be(e)}})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"teams",children:(0,i.jsx)(L.Z,{teams:z.teams,allTeams:ne,update:function(e){return we(e)}})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"judges",children:(0,i.jsx)(H.Z,{judges:z.judges,allJudges:ie,update:function(e){return ke(e)}})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,i.jsx)(ae.Z,{tricks:z.repeatable_tricks,allTricks:ce,update:function(e){return Ce(e)}})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"settings",children:(0,i.jsx)(J.Z,{config:z.config,update:function(e){return _e(e)},type:z.type})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"runs",children:(0,i.jsx)(V.Z,{comp:z,refresh:ve})}),(0,i.jsx)(g.Z,{sx:{p:0},value:"results",children:(0,i.jsx)(re,{code:n})})]})})})]}):(b("Empty or invalid data"),"")}}},function(e){e.O(0,[885,571,292,177,329,897,49,220,335,737,193,774,888,179],(function(){return t=2643,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
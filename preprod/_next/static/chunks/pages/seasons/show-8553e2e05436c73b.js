(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6559:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),s=n(5893),i=(0,a.default)((0,s.jsx)("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}),"Flight");t.Z=i},6330:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seasons/show",function(){return n(8790)}])},8790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r,a=n(8520),s=n.n(a),i=n(5893),o=n(7294),c=n(1163),l=n(4713),u=n(9072),d=n(9630),p=n(5084),f=n(1849),x=n(7971),h=n(6070),m=n(1953),j=n(9837),v=n(4731),g=n(8769),Z=n(5050),y=n(5670),b=n(7074),w=n(8661),k=n(1395),C=n(5089),P=n(6559),_=n(1733),E=n(2563),R=(n(4803),n(4117)),S=(n(7497),n(9780),n(5148)),N=n(9233),I=(n(1194),n(3521),n(7250)),T=n(1359),O=function(e){var t=e.competitions,n=(0,o.useState)([]);n[0],n[1];return(0,o.useEffect)((function(){}),[]),(0,i.jsx)(T.Z,{children:(0,i.jsx)(u.ZP,{container:!0,spacing:7,children:(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(R.Z,{rows:t,headCells:[{id:"name",type:"LINK",href:function(e,t){return"/competitions/show?cid=".concat(t.code)}},{id:"type"},{id:"start_date"},{id:"location"},{id:"number_of_runs"}],orderById:"rank",pagination:!1})})})})},V=n(4451),L=n(3798),W=n(8346),X=function(e){var t=e.season,n=(0,o.useState)([]),r=(n[0],n[1],[{id:"rank"},{id:"pilot",rewrite:function(e){return(0,i.jsx)(m.Z,{children:(0,i.jsxs)(W.Z,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(v.Z,{alt:e.name,src:e.photo}),e.name]})})}},{id:"score"}]),a=[{id:"rank"},{id:"team",rewrite:function(e){return e.name}},{id:"pilots",rewrite:function(e,t){return e=t.team.pilots,(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(W.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(v.Z,{alt:e[0].name,src:e[0].photo}),e[0].name]}),(0,i.jsxs)(W.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(v.Z,{alt:e[1].name,src:e[1].photo}),e[1].name]})]})}},{id:"score"}];return(0,o.useEffect)((function(){}),[]),(0,i.jsx)(T.Z,{children:(0,i.jsx)(u.ZP,{container:!0,spacing:7,children:t.results.map((function(e){return(0,i.jsxs)(u.ZP,{item:!0,xs:12,sm:12,children:[(0,i.jsx)("h3",{children:e.type}),(0,i.jsx)(R.Z,{rows:e.results.map((function(e,t){return e.rank=t+1,e})),headCells:"solo"==t.type?r:a,orderById:"score",defaultOrder:"desc",pagination:!1})]})}))})})};function B(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){B(s,r,a,i,o,"next",e)}function o(e){B(s,r,a,i,o,"throw",e)}i(void 0)}))}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=(0,b.ZP)(w.Z)((function(e){var t=e.theme;return D(r={},t.breakpoints.down("md"),{minWidth:100}),D(r,t.breakpoints.down("sm"),{minWidth:67}),r})),Y=(0,b.ZP)("span")((function(e){var t=e.theme;return D({lineHeight:1.71,fontSize:"0.875rem",marginLeft:t.spacing(2.4)},t.breakpoints.down("md"),{display:"none"})})),q=function(){var e=(0,c.useRouter)(),t=z((0,S.z)(),4),n=t[0],r=(t[1],t[2],t[3]),a=(0,l.aF)(),b=(a.user,a.authError,a.authIisLoading,(0,o.useState)(e.query.sid)),w=b[0],R=b[1],T=(0,o.useState)({}),W=T[0],B=T[1],D=(0,o.useState)({}),q=D[0],H=D[1],J=(0,o.useState)(!1),K=J[0],M=J[1],U=(0,o.useState)(""),G=U[0],Q=U[1],$=(0,o.useRef)(),ee=(0,o.useRef)(),te=(0,o.useRef)(),ne=((0,o.useRef)(),(0,o.useRef)(),(0,o.useRef)()),re=A(s().mark((function t(){var n,a,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(!0),w=null!==w&&void 0!==w?w:e.query.sid,t.t0=z,t.next=5,(0,N.Xv)("/seasons/".concat(w,"/export"),{expect_json:!0});case 5:if(t.t1=t.sent,n=(0,t.t0)(t.t1,3),a=n[0],i=n[1],n[2],!a){t.next=15;break}return B(!1),H(!1),r("Error while retrieving seasons list: ".concat(a)),t.abrupt("return");case 15:i.delete="delete",i.update="update",i.id=i._id,i.pilots={},i.teams={},i.competitions.forEach((function(e){e.pilots.forEach((function(e){return i.pilots[e.civlid]=e})),e.teams.forEach((function(e){i.teams[e.name]=e,e.pilots.forEach((function(e){return i.pilots[e.civlid]=e}))}))})),i.pilots=Object.values(i.pilots),i.teams=Object.values(i.teams),i.acronym=i.name.split(/[\W]+/).map((function(e){return e[0]})).join("").toUpperCase(),B(i),H(Object.assign({},i)),M(!1);case 27:case"end":return t.stop()}}),t)}))),ae=A(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne.current.click();case 1:case"end":return e.stop()}}),e)}))),se=A(s().mark((function e(t){var n,a,i,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files&&t.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:if(n.type.match(/^image\//)){e.next=5;break}return e.abrupt("return",r("Error: only images are allowed (got '".concat(n.type,"')")));case 5:return t.target.value=null,(a=new FormData).append("file",n,n.name),e.t0=z,e.next=11,(0,N.Xv)("/files/new",{expected_status:200,method:"POST",body:a});case 11:if(e.t1=e.sent,i=(0,e.t0)(e.t1,3),o=i[0],c=i[1],i[2],!o){e.next=19;break}return r("error while updating season ".concat(w,": ").concat(o)),e.abrupt("return");case 19:return q.image=c.id,H(q),e.next=23,ie(new Event("image"));case 23:case"end":return e.stop()}}),e)}))),ie=A(s().mark((function t(n){var a,i,o,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a="/seasons/".concat(w),"put",204,i={name:q.name,tag:q.tag,year:q.year,image:q.image},t.t0=z,t.next=8,(0,N.Xv)(a,{expected_status:204,method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 8:if(t.t1=t.sent,o=(0,t.t0)(t.t1,3),c=o[0],o[1],o[2],!c){t.next=16;break}return r("error while updating season ".concat(w,": ").concat(c)),t.abrupt("return");case 16:if(R(q.tag),q.tag==W.tag){t.next=19;break}return t.abrupt("return",e.push("/seasons/show?sid=".concat(q.tag)));case 19:re();case 20:case"end":return t.stop()}}),t)}))),oe=A(s().mark((function t(a){var i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("Are you sure you want to delete Season ".concat(W.name," ?"))){t.next=2;break}return t.abrupt("return");case 2:return M(!0),t.t0=z,t.next=6,(0,N.Xv)("/seasons/".concat(W.id),{method:"DELETE",expected_status:204});case 6:if(t.t1=t.sent,i=(0,t.t0)(t.t1,3),o=i[0],i[1],i[2],!o){t.next=13;break}return t.abrupt("return",r("Error while deleting Competition ".concat(W.id,": ").concat(o)));case 13:return n("Competition ".concat(W.name," successfully deleted")),t.abrupt("return",e.push("/seasons"));case 15:case"end":return t.stop()}}),t)})));return(0,o.useEffect)((function(){e.isReady&&(re(),Q("results"))}),[e.isReady]),K||!e.isReady?(0,i.jsxs)(m.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,i.jsx)(h.Z,{}),"Loading"]}):W?(0,i.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,i.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,i.jsx)("input",{style:{display:"none"},ref:ne,type:"file",onChange:se}),(0,i.jsxs)(d.Z,{variant:"h5",sx:{display:"flex"},children:[(0,i.jsx)(v.Z,{src:W.image_url,onClick:ae,children:W.acronym}),"\xa0",W.name,(0,i.jsx)(f.Z,{className:"hideToPrint",onClick:re})]})]}),(0,i.jsxs)(u.ZP,{item:!0,xs:8,sx:{paddingBottom:4},children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(I.Z,{text:q.name,title:"Name",onChange:ie,onCancel:function(e){H(W)},childRef:$,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:q.name,inputProps:{ref:$},onChange:function(e){q.name=e.target.value,H(q)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(I.Z,{text:q.tag,title:"Tag",onChange:ie,onCancel:function(e){H(W)},childRef:ee,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:q.tag,inputProps:{ref:ee},onChange:function(e){q.tag=e.target.value,H(q)}})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(I.Z,{text:q.year,title:"Year",onChange:ie,onCancel:function(e){H(W)},childRef:te,children:(0,i.jsx)(x.Z,{fullWidth:!0,name:"year",label:"Year",placeholder:"Year",defaultValue:q.year,inputProps:{ref:te},onChange:function(e){q.year=parseInt(e.target.value),H(q)}})})})]}),(0,i.jsx)(u.ZP,{item:!0,xs:4,sx:{paddingBottom:4,"text-align":"right"},children:(0,i.jsx)(p.Z,{variant:"contained",color:"error",onClick:oe,startIcon:(0,i.jsx)(_.Z,{}),children:"Delete"})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,children:(0,i.jsx)(j.Z,{children:(0,i.jsxs)(y.ZP,{value:G,children:[(0,i.jsxs)(g.Z,{className:"hideToPrint",onChange:function(e,t){Q(t)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,i.jsx)(F,{value:"pilots",label:(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(k.Z,{}),(0,i.jsx)(Y,{children:"Pilots"})]})}),(0,i.jsx)(F,{value:"teams",label:(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(E.Z,{}),(0,i.jsx)(Y,{children:"Teams"})]})}),(0,i.jsx)(F,{value:"competitions",label:(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(P.Z,{}),(0,i.jsx)(Y,{children:"Competitions"})]})}),(0,i.jsx)(F,{value:"results",label:(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(C.Z,{}),(0,i.jsx)(Y,{children:"Results"})]})})]}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"pilots",children:(0,i.jsx)(L.Z,{pilots:W.pilots})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"teams",children:(0,i.jsx)(V.Z,{teams:W.teams})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"competitions",children:(0,i.jsx)(O,{competitions:W.competitions})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"results",children:(0,i.jsx)(X,{season:W})})]})})})]}):(r("Empty or invalid data"),"")}}},function(e){e.O(0,[885,292,177,329,897,49,220,335,737,774,888,179],(function(){return t=6330,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
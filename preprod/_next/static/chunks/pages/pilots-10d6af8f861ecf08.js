(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{3555:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pilots",function(){return n(6388)}])},6388:function(t,e,n){"use strict";n.r(e);var r=n(8520),i=n.n(r),a=n(5893),s=n(7294),o=(n(1163),n(4713)),c=n(6886),u=n(5861),l=n(3321),d=n(666),p=n(2474),f=n(1458),x=n(7357),h=n(7497),v=n(5148),m=n(9233);function j(t,e,n,r,i,a,s){try{var o=t[a](s),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(r,i)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){j(a,r,i,s,o,"next",t)}function o(t){j(a,r,i,s,o,"throw",t)}s(void 0)}))}}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=(0,o.tl)((function(){var t=Z((0,v.z)(),4),e=t[0],n=t[1],r=(t[2],t[3]),j=(0,o.aF)(),w=(j.user,j.authError,j.authIisLoading,(0,s.useState)([])),k=w[0],b=w[1],y=(0,s.useState)([]),P=y[0],_=y[1],C=(0,s.useState)(!1),E=C[0],I=C[1],S=g(i().mark((function t(){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I("Loading pilots list"),t.t0=Z,t.next=4,(0,m.Xv)("/pilots/",{expect_json:!0});case 4:if(t.t1=t.sent,e=(0,t.t0)(t.t1,3),n=e[0],a=e[1],e[2],!n){t.next=14;break}return b(!1),_(!1),r("Error while retrieving pilots list: ".concat(n)),t.abrupt("return");case 14:b(a),_(a),I(!1);case 17:case"end":return t.stop()}}),t)}))),N=function(t){event.preventDefault(),A(parseInt(document.getElementById("civlid").value))},A=g(i().mark((function t(n){var a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n<1||isNaN(n))){t.next=2;break}return t.abrupt("return");case 2:return I("Updating pilot #".concat(n)),t.t0=Z,t.next=6,(0,m.Xv)("/pilots/".concat(n),{method:"POST",expected_status:201});case 6:t.t1=t.sent,a=(0,t.t0)(t.t1,3),s=a[0],a[1],a[2],s?r("Error updating Pilot #".concat(n,": ").concat(s)):e("Pilot #".concat(n," successfully updated")),S();case 13:case"end":return t.stop()}}),t)}))),D=g(i().mark((function t(){var n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("Are you sure to update all pilots ?")){t.next=2;break}return t.abrupt("return");case 2:return I("Updating all pilots"),t.t0=Z,t.next=6,(0,m.Xv)("/pilots/update_all",{method:"POST",expected_status:201});case 6:t.t1=t.sent,n=(0,t.t0)(t.t1,3),a=n[0],n[1],n[2],a?r("Error updating all pilots: ".concat(a)):e("Pilots successfully updated"),S();case 13:case"end":return t.stop()}}),t)}))),T=g(i().mark((function t(){var n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I("Updating rankings"),t.t0=Z,t.next=4,(0,m.Xv)("/pilots/update_rankings",{method:"POST",expected_status:201});case 4:t.t1=t.sent,n=(0,t.t0)(t.t1,3),a=n[0],n[1],n[2],a?r("Error updating rankings: ".concat(a)):e("Rankings successfully updated"),S();case 11:case"end":return t.stop()}}),t)}))),U=g(i().mark((function t(e){var r,a,s,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.target.value,!((a=parseInt(r))>0)){t.next=5;break}return b(P.filter((function(t){return t.civlid==a}))),t.abrupt("return");case 5:r=r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=new RegExp(r,"i"),o=P.filter((function(t){return t.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(s)})),b(o),n("".concat(o.length," pilots filtered over ").concat(P.length));case 10:case"end":return t.stop()}}),t)})));return(0,s.useEffect)((function(){S()}),[]),E?(0,a.jsxs)(x.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,a.jsx)(f.Z,{}),E]}):k?(0,a.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,sx:{paddingBottom:4},children:(0,a.jsxs)(u.Z,{variant:"h5",children:["Pilots",(0,a.jsx)(d.Z,{onClick:S})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:4,sm:4,children:(0,a.jsx)(p.Z,{fullWidth:!0,id:"outlined-basic",label:"Search pilot",variant:"outlined",onChange:U})}),(0,a.jsx)(c.ZP,{item:!0,xs:2,sm:2,children:(0,a.jsx)("form",{onSubmit:N,children:(0,a.jsx)(p.Z,{id:"civlid",label:"CIVL ID"})})}),(0,a.jsx)(c.ZP,{item:!0,xs:2,sm:2,children:(0,a.jsx)("form",{onSubmit:N,children:(0,a.jsx)(l.Z,{type:"submit",children:"Add or Update pilot"})})}),(0,a.jsxs)(c.ZP,{item:!0,xs:4,sm:4,container:!0,direction:"row",justifyContent:"flex-end",children:[(0,a.jsx)(l.Z,{variant:"outlined",startIcon:(0,a.jsx)(d.Z,{}),onClick:T,children:"Update rankings"}),(0,a.jsx)(l.Z,{variant:"outlined",startIcon:(0,a.jsx)(d.Z,{}),onClick:D,disabled:!0,children:"Synchronize from CIVL"})]}),k.map((function(t){return(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(h.Z,{pilot:t,updatePilot:A})},t.civlid)}))]}):(0,a.jsx)("p",{children:"No data"})}))},7497:function(t,e,n){"use strict";var r=n(5893),i=n(7357),a=n(6242),s=n(3321),o=n(122),c=n(9661),u=n(3965),l=n(5861),d=n(4267),p=n(9318),f=n(693);e.Z=function(t){var e=t.pilot;return(0,r.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,r.jsx)(u.Z,{sx:{height:"12.625rem"},image:e.background_picture}),(0,r.jsx)(c.Z,{alt:e.name,src:e.photo,sx:{width:150,height:150,left:"1.313rem",top:"4.5rem",position:"absolute",border:function(t){return"0.25rem solid ".concat(t.palette.common.white)}}}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(i.Z,{sx:{mt:5.75,mb:8.75,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(i.Z,{sx:{mr:2,mb:1,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(l.Z,{variant:"h6",children:[(0,r.jsx)(o.Z,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.name})," ",(0,r.jsx)(p.Z,{countryCode:f.convertAlphaCode(e.country),svg:!0,title:f.getCountry(e.country)})]}),(0,r.jsxs)(l.Z,{variant:"caption",children:["CIVL ID: ",e.civlid]}),(0,r.jsxs)(l.Z,{variant:"caption",children:["Rank: #",e.rank]})]}),(0,r.jsx)(s.Z,{variant:"contained",onClick:function(){return t.updatePilot(e.civlid)},children:"Update pilot"})]})})]})}}},function(t){t.O(0,[808,698,774,888,179],(function(){return e=3555,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
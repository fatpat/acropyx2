(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{3555:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pilots",function(){return n(6388)}])},6388:function(t,e,n){"use strict";n.r(e);var r=n(8520),i=n.n(r),a=n(5893),c=n(7294),s=(n(1163),n(4713)),o=n(9072),u=n(9630),l=n(5084),d=n(1849),p=n(7971),f=n(6070),x=n(1953),h=n(7497),v=n(5148),m=n(9233);function g(t,e,n,r,i,a,c){try{var s=t[a](c),o=s.value}catch(u){return void n(u)}s.done?e(o):Promise.resolve(o).then(r,i)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){g(a,r,i,c,s,"next",t)}function s(t){g(a,r,i,c,s,"throw",t)}c(void 0)}))}}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(o){i=!0,a=o}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=(0,s.tl)((function(){var t=j((0,v.z)(),4),e=t[0],n=(t[1],t[2],t[3]),r=(0,s.aF)(),g=(r.user,r.authError,r.authIisLoading,(0,c.useState)([])),w=g[0],k=g[1],Z=(0,c.useState)([]),y=Z[0],_=Z[1],P=(0,c.useState)(!1),C=P[0],E=P[1],N=b(i().mark((function t(){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E("Loading pilots list"),t.t0=j,t.next=4,(0,m.Xv)("/pilots/",{expect_json:!0});case 4:if(t.t1=t.sent,e=(0,t.t0)(t.t1,3),r=e[0],a=e[1],e[2],!r){t.next=14;break}return k(!1),_(!1),n("Error while retrieving pilots list: ".concat(r)),t.abrupt("return");case 14:k(a),_(a),E(!1);case 17:case"end":return t.stop()}}),t)}))),I=b(i().mark((function t(r){var a,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r<1||isNaN(r))){t.next=2;break}return t.abrupt("return");case 2:return E("Updating pilot #".concat(r)),t.t0=j,t.next=6,(0,m.Xv)("/pilots/".concat(r),{method:"POST",expected_status:201});case 6:if(t.t1=t.sent,a=(0,t.t0)(t.t1,3),c=a[0],s=a[1],a[2],!c){t.next=13;break}return t.abrupt("return",n("Error updating Pilot #".concat(r,": ").concat(c)));case 13:e("Pilot #".concat(r," successfully updated")),k(w.map((function(t){return t.civlid==r?s:t}))),_(y.map((function(t){return t.civlid==r?s:t}))),E(null);case 17:case"end":return t.stop()}}),t)}))),S=b(i().mark((function t(r){var a,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r<1||isNaN(r))){t.next=2;break}return t.abrupt("return");case 2:return E("Chaging gender of pilot #".concat(r)),t.t0=j,t.next=6,(0,m.Xv)("/pilots/".concat(r,"/gender"),{method:"PATCH",expected_status:200});case 6:if(t.t1=t.sent,a=(0,t.t0)(t.t1,3),c=a[0],s=a[1],a[2],!c){t.next=13;break}return t.abrupt("return",n("Error changing gender of pilot #".concat(r,": ").concat(c)));case 13:k(w.map((function(t){return t.civlid==r?s:t}))),_(y.map((function(t){return t.civlid==r?s:t}))),E(null),e("Pilot #".concat(r," gender changed to ").concat(s.gender));case 17:case"end":return t.stop()}}),t)}))),A=(b(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("Are you sure to update all pilots ?")){t.next=2;break}return t.abrupt("return");case 2:return E("Updating all pilots"),t.t0=j,t.next=6,(0,m.Xv)("/pilots/update_all",{method:"POST",expected_status:201});case 6:t.t1=t.sent,r=(0,t.t0)(t.t1,3),a=r[0],r[1],r[2],a?n("Error updating all pilots: ".concat(a)):e("Pilots successfully updated"),N();case 13:case"end":return t.stop()}}),t)}))),b(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E("Updating rankings"),t.t0=j,t.next=4,(0,m.Xv)("/pilots/update_rankings",{method:"POST",expected_status:201});case 4:t.t1=t.sent,r=(0,t.t0)(t.t1,3),a=r[0],r[1],r[2],a?n("Error updating rankings: ".concat(a)):e("Rankings successfully updated"),N();case 11:case"end":return t.stop()}}),t)}))),b(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.value,!((r=parseInt(n))>0)){t.next=5;break}return k(y.filter((function(t){return t.civlid==r}))),t.abrupt("return");case 5:n=n.normalize("NFD").replace(/[\u0300-\u036f]/g,""),a=new RegExp(n,"i"),c=y.filter((function(t){return t.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(a)})),k(c);case 9:case"end":return t.stop()}}),t)}))));return(0,c.useEffect)((function(){N()}),[]),C?(0,a.jsxs)(x.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,a.jsx)(f.Z,{}),C]}):w?(0,a.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(o.ZP,{item:!0,xs:12,sx:{paddingBottom:4},children:(0,a.jsxs)(u.Z,{variant:"h5",children:["Pilots",(0,a.jsx)(d.Z,{onClick:N})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:8,sm:8,children:(0,a.jsx)(p.Z,{fullWidth:!0,id:"outlined-basic",label:"Filter pilots",variant:"outlined",onChange:A})}),(0,a.jsx)(o.ZP,{item:!0,xs:4,sm:4,children:(0,a.jsxs)("form",{onSubmit:function(t){event.preventDefault(),I(parseInt(document.getElementById("civlid").value))},children:[(0,a.jsx)(p.Z,{id:"civlid",label:"CIVL ID"}),(0,a.jsx)(l.Z,{type:"submit",children:"Add or Update pilot from CIVL"})]})}),w.map((function(t){return(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(h.Z,{pilot:t,updatePilot:I,changeGender:S})},t.civlid)}))]}):(0,a.jsx)("p",{children:"No data"})}))},7497:function(t,e,n){"use strict";var r=n(5893),i=n(1953),a=n(9837),c=n(5084),s=n(8346),o=n(4731),u=n(9647),l=n(9630),d=n(1359),p=n(9318),f=n(693);e.Z=function(t){var e=t.pilot;return(0,r.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,r.jsx)(u.Z,{sx:{height:"12.625rem"},image:e.background_picture}),(0,r.jsx)(o.Z,{alt:e.name,src:e.photo,sx:{width:150,height:150,left:"1.313rem",top:"4.5rem",position:"absolute",border:function(t){return"0.25rem solid ".concat(t.palette.common.white)}}}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(i.Z,{sx:{mt:5.75,mb:8.75,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(i.Z,{sx:{mr:2,mb:1,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(l.Z,{variant:"h6",children:[(0,r.jsx)(s.Z,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.name})," ",(0,r.jsx)("span",{onClick:function(){return t.changeGender(e.civlid)},children:"man"==e.gender?"\u2642\ufe0f":"\u2640\ufe0f"}),"\xa0",(0,r.jsx)(p.Z,{countryCode:f.convertAlphaCode(e.country),svg:!0,title:f.getCountry(e.country)})]}),(0,r.jsxs)(l.Z,{variant:"caption",children:["CIVL ID: ",e.civlid]}),(0,r.jsxs)(l.Z,{variant:"caption",children:["Rank: #",e.rank]})]}),(0,r.jsx)(c.Z,{variant:"contained",onClick:function(){return t.updatePilot(e.civlid)},children:"Update pilot"})]})})]})}}},function(t){t.O(0,[292,177,774,888,179],(function(){return e=3555,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
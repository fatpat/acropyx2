(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{6130:function(n,e,t){"use strict";var r=t(5318);e.Z=void 0;var s=r(t(4938)),i=t(5893),c=(0,s.default)((0,i.jsx)("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");e.Z=c},1659:function(n,e,t){"use strict";var r=t(5318);e.Z=void 0;var s=r(t(4938)),i=t(5893),c=(0,s.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");e.Z=c},7958:function(n,e,t){"use strict";var r=t(5318);e.Z=void 0;var s=r(t(4938)),i=t(5893),c=(0,s.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");e.Z=c},5846:function(n,e,t){"use strict";var r=t(5318);e.Z=void 0;var s=r(t(4938)),i=t(5893),c=(0,s.default)((0,i.jsx)("path",{d:"M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3.48.94C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06zM12 0C5.92 0 1 1.9 1 4.25v3.49c0 .81.88 1.26 1.56.83.14-.09.28-.18.44-.26L5 13h2l1.5-6.28c1.1-.14 2.28-.22 3.5-.22s2.4.08 3.5.22L17 13h2l2-4.69c.16.09.3.17.44.26.68.43 1.56-.02 1.56-.83V4.25C23 1.9 18.08 0 12 0zM5.88 11.24 4.37 7.69c.75-.28 1.6-.52 2.53-.71l-1.02 4.26zm12.24 0L17.1 6.98c.93.19 1.78.43 2.53.71l-1.51 3.55z"}),"Paragliding");e.Z=c},454:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/run",function(){return t(6736)}])},6736:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return mn}});var r=t(8520),s=t.n(r),i=t(5893),c=t(7294),a=t(1163),o=t(4713),l=t(6886),u=t(5861),d=t(3321),h=t(666),x=t(1458),p=t(7357),f=t(6242),j=t(122),m=t(298),Z=t(5050),v=t(5670),g=t(1496),y=t(44),k=t(1395),b=t(1300),w=t(594),_=t(7440),P=t(3911),S=t(984),T=t(4229),C=t(5089),O=t(2563),I=t(5846),R=t(6130),E=t(295),L=t(3252),N=t(3816),z=t(7906),A=t(2882),H=(t(4803),t(4117)),X=(t(7497),t(9780),t(5148)),J=t(9233),M=(t(1194),t(3521),t(7250),t(3740),t(4451)),B=t(3798),D=t(8321),F=t(4906),W=t(4267),V=t(3184);function q(n,e,t,r,s,i,c){try{var a=n[i](c),o=a.value}catch(l){return void t(l)}a.done?e(o):Promise.resolve(o).then(r,s)}function U(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,s=!1,i=void 0;try{for(var c,a=n[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(o){s=!0,i=o}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=function(n){var e,t=n.code,r=n.rid,a=U((0,X.z)(),4),o=(a[0],a[1],a[2],a[3]),d=(0,c.useState)(!1),h=d[0],x=d[1],p=(e=s().mark((function n(){var e,i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=U,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/results/").concat(r,"?published_only=false"),{expect_json:!0});case 3:if(n.t1=n.sent,e=(0,n.t0)(n.t1,3),i=e[0],c=e[1],e[2],!i){n.next=12;break}return o("error while retrieving results for competition ".concat(t,": ").concat(i)),x(!1),n.abrupt("return");case 12:c.results=c.results.map((function(n,e){return n.rank=e+1,n})),x(c);case 14:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function c(n){q(i,r,s,c,a,"next",n)}function a(n){q(i,r,s,c,a,"throw",n)}c(void 0)}))});return(0,c.useEffect)((function(){p()}),[]),h?(console.log(h),(0,i.jsxs)(W.Z,{children:[(0,i.jsxs)(u.Z,{varian:"h2",children:[h.final?"Final":"Intermediate"," results"]}),(0,i.jsx)(l.ZP,{container:!0,spacing:7,children:(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(A.Z,{children:(0,i.jsxs)(z.Z,{sx:{minWidth:750},children:[(0,i.jsx)(V.Z,{children:(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:"Rank"}),(0,i.jsx)(L.Z,{children:"Pilot"}),(0,i.jsx)(L.Z,{children:"Tricks"}),(0,i.jsx)(L.Z,{children:"Warnings"}),(0,i.jsx)(L.Z,{children:"Technicity"}),(0,i.jsx)(L.Z,{children:"Judges marks"}),(0,i.jsx)(L.Z,{children:"Final marks"}),(0,i.jsx)(L.Z,{children:"Bonus"}),(0,i.jsx)(L.Z,{children:"Score"})]})}),(0,i.jsx)(E.Z,{children:h.results.sort((function(n,e){return e.final_marks.score-n.final_marks.score})).map((function(n,e){return(0,i.jsxs)(N.Z,{children:[(0,i.jsxs)(L.Z,{children:[e+1,n.published||(0,i.jsx)("p",{children:"NOT PUBLISHED YET"})]}),(0,i.jsx)(L.Z,{children:n.pilot.name}),(0,i.jsx)(L.Z,{children:n.tricks.map((function(n){return(0,i.jsx)("p",{children:n.name})}))}),(0,i.jsxs)(L.Z,{children:[(0,i.jsxs)("p",{children:["warnings: ",n.final_marks.warnings.length]}),(0,i.jsxs)("p",{children:["Malus: ",n.final_marks.malus,"%"]}),n.did_not_start&&(0,i.jsx)("p",{children:"DID NOT START"})]}),(0,i.jsxs)(L.Z,{children:[(0,i.jsxs)("p",{children:["Techniciy: ",n.final_marks.technicity]}),(0,i.jsxs)("p",{children:["Bonus: ",n.final_marks.bonus_percentage,"%"]})]}),(0,i.jsxs)(L.Z,{children:[(0,i.jsxs)("p",{children:["Technical: ",n.final_marks.judges_mark.technical]}),(0,i.jsxs)("p",{children:["Choreography: ",n.final_marks.judges_mark.choreography]}),(0,i.jsxs)("p",{children:["Landing: ",n.final_marks.judges_mark.landing]})]}),(0,i.jsxs)(L.Z,{children:[(0,i.jsxs)("p",{children:["Technical: ",n.final_marks.technical]}),(0,i.jsxs)("p",{children:["Choreography: ",n.final_marks.choreography]}),(0,i.jsxs)("p",{children:["Landing: ",n.final_marks.landing]})]}),(0,i.jsx)(L.Z,{children:n.final_marks.bonus}),(0,i.jsx)(L.Z,{children:n.final_marks.score})]},"result-{i}")}))})]})})})})]})):"loading ..."},G=t(1736),K=t(5113),Q=t(3946),$=t(2474),nn=t(7958),en=t(1659),tn=t(9624);function rn(n,e,t,r,s,i,c){try{var a=n[i](c),o=a.value}catch(l){return void t(l)}a.done?e(o):Promise.resolve(o).then(r,s)}function sn(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var i=n.apply(e,t);function c(n){rn(i,r,s,c,a,"next",n)}function a(n){rn(i,r,s,c,a,"throw",n)}c(void 0)}))}}function cn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function an(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){cn(n,e,t[e])}))}return n}function on(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,s=!1,i=void 0;try{for(var c,a=n[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(o){s=!0,i=o}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ln,un=function(n){var e,t,r,a,o,h,x,f,j,m,Z,v,g=n.comp,y=n.run,k=n.rid,b=on((0,X.z)(),4),w=b[0],_=(b[1],b[2],b[3]),P=(0,c.useState)(0),S=P[0],T=P[1],C=(0,c.useState)(null),O=C[0],I=C[1],R=(0,c.useState)({tricks:[],marks:[],did_not_start:!1,warnings:[]}),M=R[0],B=R[1],D=(0,c.useState)({judges_mark:{}}),F=D[0],q=D[1],U=on((0,J.fR)(g.type),1)[0],Y=(0,c.useState)(!1),G=Y[0],rn=Y[1],cn=((0,c.useRef)(),sn(s().mark((function n(e){var t,r,i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={tricks:e.tricks.filter((function(n){return null!=n})).map((function(n){return n.name})),marks:e.marks,did_no_start:e.did_not_start,warnings:e.warnings},n.t0=on,n.next=4,(0,J.Xv)("/scores/simulate/solo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(n.t1=n.sent,r=(0,n.t0)(n.t1,3),i=r[0],c=r[1],r[2],!i){n.next=14;break}return console.log("error while simlating score: ".concat(i)),q({judges_mark:{}}),rn(!1),n.abrupt("return");case 14:console.log("simulated score:",c),q(c),rn(!0);case 17:case"end":return n.stop()}}),n)})))),ln=function(n,e,t){var r=!0,s=!1,i=void 0;try{for(var c,a=M.marks.entries()[Symbol.iterator]();!(r=(c=a.next()).done);r=!0){var o=on(c.value,2),l=o[0];o[1];if(M.marks[l].judge==e._id)return M.marks[l][n]=t,B(M),void cn(M)}}catch(d){s=!0,i=d}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}var u={judge:e._id};u[n]=t,M.marks.push(u),B(M),cn(M)},un=sn(s().mark((function n(e){var t,r,i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={tricks:M.tricks.filter((function(n){return null!=n})).map((function(n){return n.name})),marks:M.marks,did_no_start:M.did_not_start,warnings:M.warnings},n.t0=on,n.next=4,(0,J.Xv)("/competitions/".concat(g.code,"/runs/").concat(k,"/flights/").concat(O.civlid,"/new?published=").concat(e,"&save=",!0),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:n.t1=n.sent,r=(0,n.t0)(n.t1,3),i=r[0],c=r[1],r[2],i&&_("error while saving score: ".concat(i)),w("".concat(O.name,"'s flights saved with a ").concat(c.score," score"));case 11:case"end":return n.stop()}}),n)})));return(0,c.useEffect)((function(){S=0,I(y.pilots.sort((function(n,e){return e.rank-n.rank}))[S]),T(S)}),[]),(0,i.jsxs)(W.Z,{children:[O&&(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)(l.ZP,{item:!0,xs:1,sm:1,children:(0,i.jsx)(Q.Z,{onClick:function(){0!=S&&(S-=1,I(y.pilots[S]),T(S))},children:(0,i.jsx)(en.Z,{})})}),(0,i.jsx)(l.ZP,{item:!0,xs:10,sm:10,children:(0,i.jsx)(tn.Z,{id:"autocomplete-pilot",options:y.pilots.sort((function(n,e){return e.rank-n.rank})),value:O,getOptionLabel:function(n){return"".concat(n.name," (").concat(n.civlid,")")},renderInput:function(n){return(0,i.jsx)($.Z,an({},n,{name:"pilot",label:"Pilot"}))},onChange:function(n,e){if(e){var t=!0,r=!1,s=void 0;try{for(var i,c=y.pilots.entries()[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var a=on(i.value,2),o=a[0];if(a[1].civlid==e.civlid)return I(e),void T(o)}}catch(l){r=!0,s=l}finally{try{t||null==c.return||c.return()}finally{if(r)throw s}}}}})}),(0,i.jsx)(l.ZP,{item:!0,xs:1,sm:1,children:(0,i.jsx)(Q.Z,{onClick:function(){console.log(S,y.pilots.length),S+1>=y.pilots.length||(S+=1,I(y.pilots[S]),T(S))},children:(0,i.jsx)(nn.Z,{})})})]}),(0,i.jsx)(l.ZP,{container:!0,spacing:2,children:"separator"}),(0,i.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,i.jsxs)(l.ZP,{container:!0,xs:6,children:[(0,i.jsx)(l.ZP,{xs:12,children:(0,i.jsx)(u.Z,{variant:"h5",children:"Maneuvers"})}),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((function(n){return(0,i.jsx)(l.ZP,{xs:12,children:(0,i.jsx)(tn.Z,{id:"autocomplete-trick-{i}",options:U,getOptionLabel:function(n){return"".concat(n.name," (").concat(n.acronym,") (").concat(n.technical_coefficient,")")},renderInput:function(n){return(0,i.jsx)($.Z,an({},n,{name:"trick",label:"Trick"}))},onChange:function(e,t){M.tricks[n]=t,cn(M),B(M)}},"autocomplete-trick-{i}")},n)}))]}),(0,i.jsxs)(l.ZP,{container:!0,xs:6,children:[(0,i.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,i.jsx)(u.Z,{variant:"h5",children:"Marks"}),(0,i.jsx)(p.Z,{sx:{width:"100%"},children:(0,i.jsx)(K.Z,{sx:{width:"100%",mb:2},children:(0,i.jsx)(A.Z,{children:(0,i.jsxs)(z.Z,{sx:{minWidth:750},children:[(0,i.jsx)(V.Z,{children:(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:"Judge"}),(0,i.jsx)(L.Z,{children:"Technical"}),(0,i.jsx)(L.Z,{children:"Choreography"}),(0,i.jsx)(L.Z,{children:"Landing"}),"synchro"==g.type&&(0,i.jsx)(L.Z,{children:"Synchro"})]})}),(0,i.jsx)(E.Z,{children:y.judges.map((function(n){return(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:(0,i.jsx)(u.Z,{children:n.name})}),(0,i.jsx)(L.Z,{children:(0,i.jsx)($.Z,{type:"number",InputProps:{inputProps:{min:"0",max:"10",step:"0.5"}},onChange:function(e){ln("technical",n,e.target.value)}})}),(0,i.jsx)(L.Z,{children:(0,i.jsx)($.Z,{type:"number",InputProps:{inputProps:{min:"0",max:"10",step:"0.5"}},onChange:function(e){ln("choreography",n,e.target.value)}})}),(0,i.jsx)(L.Z,{children:(0,i.jsx)($.Z,{type:"number",InputProps:{inputProps:{min:"0",max:"10",step:"0.5"}},onChange:function(e){ln("landing",n,e.target.value)}})}),"synchro"==g.type&&(0,i.jsx)(L.Z,{children:(0,i.jsx)($.Z,{type:"number",InputProps:{inputProps:{min:"0",max:"10",step:"0.5"}},onChange:function(e){ln("synchro",n,e.target.value)}})})]})}))})]})})})})]}),(0,i.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,i.jsx)(u.Z,{variant:"h5",children:"Scores"}),(0,i.jsx)(z.Z,{children:(0,i.jsxs)(E.Z,{children:[(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Technicity: ",null!==(e=F.technicity)&&void 0!==e?e:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["% Bonus: ",null!==(t=F.bonus_percentage)&&void 0!==t?t:"","%"]})})]}),(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:(0,i.jsx)(u.Z,{children:"Judge's marks"})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Technical: ",null!==(r=F.judges_mark.technical)&&void 0!==r?r:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Choreography: ",null!==(a=F.judges_mark.choreography)&&void 0!==a?a:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Landing: ",null!==(o=F.judges_mark.landing)&&void 0!==o?o:""]})}),"synchro"==g.type&&(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Synchro: ",null!==(h=F.judges_mark.synchro)&&void 0!==h?h:""]})})]}),(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:(0,i.jsx)(u.Z,{children:"Final's marks"})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Technical: ",null!==(x=F.technical)&&void 0!==x?x:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Choreography: ",null!==(f=F.choreography)&&void 0!==f?f:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Landing: ",null!==(j=F.landing)&&void 0!==j?j:""]})}),"synchro"==g.type&&(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Synchro: ",null!==(m=F.synchro)&&void 0!==m?m:""]})})]}),(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{children:["Bonuses: ",null!==(Z=F.bonus)&&void 0!==Z?Z:""]})}),(0,i.jsx)(L.Z,{children:(0,i.jsxs)(u.Z,{variant:"h5",children:["Final Score: ",null!==(v=F.score)&&void 0!==v?v:""]})})]})]})})]}),(0,i.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsx)(d.Z,{variant:"contained",disabled:!G,onClick:function(n){return un(!1)},children:"Save Results"})}),(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsx)(d.Z,{variant:"contained",disabled:!G,onClick:function(n){return un(!0)},children:"Publish Results"})})]})]})]}),(0,i.jsx)(l.ZP,{container:!0,spacing:7,children:(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(H.Z,{rows:y.flights,headCells:[{id:"rank"},{id:"pilot",rewrite:function(n){return n.name}},{id:"score",numeric:!0}],orderById:"rank"})})})]})};function dn(n,e,t,r,s,i,c){try{var a=n[i](c),o=a.value}catch(l){return void t(l)}a.done?e(o):Promise.resolve(o).then(r,s)}function hn(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var i=n.apply(e,t);function c(n){dn(i,r,s,c,a,"next",n)}function a(n){dn(i,r,s,c,a,"throw",n)}c(void 0)}))}}function xn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,s=!1,i=void 0;try{for(var c,a=n[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(o){s=!0,i=o}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var fn=(0,g.ZP)(y.Z)((function(n){var e=n.theme;return xn(ln={},e.breakpoints.down("md"),{minWidth:100}),xn(ln,e.breakpoints.down("sm"),{minWidth:67}),ln})),jn=(0,g.ZP)("span")((function(n){var e=n.theme;return xn({lineHeight:1.71,fontSize:"0.875rem",marginLeft:e.spacing(2.4)},e.breakpoints.down("md"),{display:"none"})})),mn=function(){var n=(0,a.useRouter)(),e=n.query,t=e.cid,r=e.rid,g=pn((0,X.z)(),4),y=g[0],H=(g[1],g[2],g[3]),W=(0,o.aF)(),V=(W.user,W.authError,W.authIisLoading,(0,c.useState)(!1)),q=V[0],U=V[1],K=(0,c.useState)(!1),Q=K[0],$=K[1],nn=(0,c.useState)({}),en=nn[0],tn=nn[1],rn=(0,c.useState)(!1),sn=rn[0],cn=rn[1],an=(0,c.useState)("actions"),on=an[0],ln=an[1],dn=pn((0,J.Rs)(),1)[0],xn=((0,c.useRef)(),(0,c.useRef)(),(0,c.useRef)(),(0,c.useRef)(),(0,c.useRef)(),hn(s().mark((function n(){var e,i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return cn(!0),n.t0=pn,n.next=4,(0,J.Xv)("/competitions/".concat(t),{expect_json:!0});case 4:if(n.t1=n.sent,e=(0,n.t0)(n.t1,3),i=e[0],c=e[1],e[2],!i){n.next=15;break}return U(!1),$(!1),tn(!1),H("Error while retrieving competitions list: ".concat(i)),n.abrupt("return");case 15:c.delete="delete",c.update="update",c.id=c._id,U(c),$(c.runs[r]),tn(Object.assign({},c)),cn(!1);case 22:case"end":return n.stop()}}),n)})))),mn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("Are you sure to ".concat(e," run ").concat(r," of competition ").concat(t," ?"))){n.next=2;break}return n.abrupt("return");case 2:return n.t0=pn,n.next=5,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/").concat(e),{expected_status:204,method:"POST"});case 5:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=13;break}return H("error while ".concat(e," run ").concat(r," of competition ").concat(t,": ").concat(c)),n.abrupt("return");case 13:xn();case 14:case"end":return n.stop()}}),n)}))),Zn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=pn,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.map((function(n){return n.civlid})))});case 3:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=11;break}return H("error while updating pilots list ".concat(t,": ").concat(c)),n.abrupt("return");case 11:xn();case 12:case"end":return n.stop()}}),n)}))),vn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=pn,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.map((function(n){return n.id})))});case 3:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=11;break}return H("error while updating teams list ".concat(t,": ").concat(c)),n.abrupt("return");case 11:xn();case 12:case"end":return n.stop()}}),n)}))),gn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=pn,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.map((function(n){return n.id})))});case 3:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=11;break}return H("error while updating judges list ".concat(t,": ").concat(c)),n.abrupt("return");case 11:xn();case 12:case"end":return n.stop()}}),n)}))),yn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=pn,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.map((function(n){return n.id})))});case 3:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=11;break}return H("error while updating repeatable tricks list ".concat(t,": ").concat(c)),n.abrupt("return");case 11:xn();case 12:case"end":return n.stop()}}),n)}))),kn=hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=pn,n.next=3,(0,J.Xv)("/competitions/".concat(t,"/runs/").concat(r,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:if(n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],!c){n.next=11;break}return H("error while updating config ".concat(t,": ").concat(c)),n.abrupt("return");case 11:xn();case 12:case"end":return n.stop()}}),n)})));hn(s().mark((function n(e){var i,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return alert("No yet implemented! #TODO"),n.abrupt("return");case 5:return cn(!0),n.t0=pn,n.next=9,(0,J.Xv)("/competitions/".concat(undefined,"/runs/").concat(r),{method:"DELETE",expected_status:204});case 9:n.t1=n.sent,i=(0,n.t0)(n.t1,3),c=i[0],i[1],i[2],c?H("Error while deleting run #".concat(r," from competition ").concat(t,": ").concat(c)):y("Run #".concat(r," from competition ").concat(t," successfully deleted")),xn();case 16:case"end":return n.stop()}}),n)})));return(0,c.useEffect)((function(){n.isReady&&xn()}),[n.isReady]),sn||!n.isReady?(0,i.jsxs)(p.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,i.jsx)(x.Z,{}),"Loading"]}):q&&Q?(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,i.jsx)(u.Z,{variant:"h6",children:(0,i.jsx)(j.Z,{href:"".concat("/acropyx2/preprod","/competitions/show?cid=").concat(q.code),children:q.name})}),(0,i.jsxs)(u.Z,{variant:"h3",children:["Run #",parseInt(r)+1,(0,i.jsx)(h.Z,{onClick:xn})]})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,i.jsxs)(u.Z,{children:["Status: ",(0,i.jsx)("strong",{children:Q.state}),"init"==Q.state&&(0,i.jsx)(d.Z,{variant:"outlined",startIcon:(0,i.jsx)(b.Z,{}),onClick:function(){return mn("open")},children:"Open"}),"open"==Q.state&&(0,i.jsx)(d.Z,{variant:"outlined",startIcon:(0,i.jsx)(w.Z,{}),onClick:function(){return mn("close")},children:"Close"}),"closed"==Q.state&&(0,i.jsx)(d.Z,{variant:"outlined",startIcon:(0,i.jsx)(_.Z,{}),onClick:function(){return mn("reopen")},children:"Reopen"})]}),(0,i.jsxs)(u.Z,{children:["Type: ",(0,i.jsx)("strong",{children:en.type})]})]}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(f.Z,{children:(0,i.jsxs)(v.ZP,{value:on,children:[(0,i.jsxs)(m.Z,{onChange:function(n,e){ln(e)},"aria-label":"account-settings tabs",sx:{borderBottom:function(n){return"1px solid ".concat(n.palette.divider)}},children:["solo"==q.type&&(0,i.jsx)(fn,{value:"pilots",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(k.Z,{}),(0,i.jsx)(jn,{children:"Pilots"})]})}),"synchro"==q.type&&(0,i.jsx)(fn,{value:"teams",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(O.Z,{}),(0,i.jsx)(jn,{children:"Teams"})]})}),(0,i.jsx)(fn,{value:"judges",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(P.Z,{}),(0,i.jsx)(jn,{children:"Judges"})]})}),(0,i.jsx)(fn,{value:"repeatable_tricks",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(jn,{children:"Repeatables tricks"})]})}),(0,i.jsx)(fn,{value:"settings",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{}),(0,i.jsx)(jn,{children:"Run Settings"})]})}),(0,i.jsx)(fn,{value:"flights",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(I.Z,{}),(0,i.jsx)(jn,{children:"Flights"})]})}),(0,i.jsx)(fn,{value:"starting_order",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(R.Z,{}),(0,i.jsx)(jn,{children:"Starting Order"})]})}),(0,i.jsx)(fn,{value:"results",label:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(C.Z,{}),(0,i.jsx)(jn,{children:"Results"})]})})]}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"pilots",children:(0,i.jsx)(B.Z,{pilots:Q.pilots,allPilots:q.pilots,update:function(n){return Zn(n)}})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"teams",children:(0,i.jsx)(M.Z,{teams:Q.teams,allTeams:q.teams,update:function(n){return vn(n)}})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"judges",children:(0,i.jsx)(D.Z,{judges:Q.judges,allJudges:q.judges,update:function(n){return gn(n)}})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,i.jsx)(G.Z,{tricks:Q.repeatable_tricks,allTricks:dn,update:function(n){return yn(n)}})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"settings",children:(0,i.jsx)(F.Z,{config:Q.config,update:function(n){return kn(n)},type:q.type})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"flights",children:(0,i.jsx)(un,{comp:q,run:Q,rid:r})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"starting_order",children:(0,i.jsx)(A.Z,{children:(0,i.jsx)(z.Z,{sx:{minWidth:750},children:(0,i.jsx)(E.Z,{children:Q.pilots.sort((function(n,e){return e.rank-n.rank})).map((function(n,e){return(0,i.jsxs)(N.Z,{children:[(0,i.jsxs)(L.Z,{children:["#",e+1]}),(0,i.jsx)(L.Z,{children:n.name})]},"pilot-{i}")}))})})})}),(0,i.jsx)(Z.Z,{sx:{p:0},value:"results",children:(0,i.jsx)(Y,{code:t,rid:r})})]})})})]}):""}}},function(n){n.O(0,[885,808,698,109,725,404,738,335,595,774,888,179],(function(){return e=454,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
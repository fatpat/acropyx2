(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{2643:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/competitions/show",function(){return t(4528)}])},3521:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),i=t(7294),a=t(2474),o=t(7087),c=t(2359),s=t(9188);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){var n=l(i.useState(e.default),2),t=n[0],d=n[1];return(0,r.jsx)(c._,{dateAdapter:o.Z,children:(0,r.jsx)(s.M,{label:e.label,value:t,onChange:function(n){n.toJSON=function(){return"".concat(String(this.getFullYear()),"-").concat(String(this.getMonth()+1).padStart(2,"0"),"-").concat(String(this.getDate()).padStart(2,"0"))},d(n),e.onChange&&e.onChange(n)},renderInput:function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({},e))}})})}},1194:function(e,n){"use strict";n.Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"600px",bgcolor:"background.paper",boxShadow:24,p:4}},4528:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return fe}});var r=t(8520),i=t.n(r),a=t(5893),o=t(7294),c=t(1163),s=t(4713),u=t(6886),l=t(5861),d=t(3321),f=t(666),h=t(2474),p=t(1458),x=t(7357),m=t(6242),g=t(298),j=t(5050),v=t(5670),y=t(1496),b=t(44),Z=t(1036),w=t(1395),_=t(4496),P=t(5071),C=t(1300),k=t(594),O=t(7440),S=(t(4803),t(4117)),R=(t(7497),t(9780),t(5148)),E=t(9233);t(1194),t(3521);function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}function A(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var W=function(e){var n=e.title,t=e.text,r=(e.type,e.placeholder,e.onChange),i=e.onCancel,c=e.childRef,s=e.children,u=A(e,["title","text","type","placeholder","onChange","onCancel","childRef","children"]),l=(0,o.useState)(!1),d=l[0],f=l[1];return(0,o.useEffect)((function(){c&&c.current&&!0===d&&c.current.focus()}),[d,c]),d?(0,a.jsx)("section",I({},u,{children:(0,a.jsxs)("div",{onBlur:function(){return f(!1)},onKeyDown:function(e){return function(e){["Enter","Tab"].indexOf(e.code)>=0&&r&&r(e),["Escape"].indexOf(e.code)>=0&&i&&i(e),["Enter","Escape"].indexOf(e.code)>=0&&f(!1)}(e)},children:[n,": ",s]})})):(0,a.jsx)("section",I({},u,{children:(0,a.jsx)("div",{onClick:function(){return f(!0)},children:(0,a.jsxs)("span",{children:[n,": ",(0,a.jsx)("strong",{children:String(t)})]})})}))},M=t(4267),N=t(6540),V=function(e){var n=e.comp,t=(0,o.useState)([]),r=t[0],i=t[1],c=[{id:"name",type:"LINK",href:function(e,t){return"/runs/show?competition=".concat(n.code,"&id=").concat(t.id)}},{id:"state"}];return(0,o.useEffect)((function(){i(n.runs.map((function(e,n){return e.delete="delete",e.id=n,e.name="run".concat(n),e})))}),[]),(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsx)(u.ZP,{item:!0,xs:6,sm:6,children:(0,a.jsx)(d.Z,{variant:"contained",startIcon:(0,a.jsx)(N.Z,{}),onClick:function(){},children:"New Run"})}),(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(S.Z,{rows:r,headCells:c,orderById:"id"})})]})})},J=t(9624),L=t(9661),D=t(122);function X(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var K=function(e){var n,t=e.teams,r=e.update,c=H((0,E.y2)(),1)[0],s=(0,o.useState)([]),l=s[0],f=s[1],p=[{id:"id"},{id:"name"},{id:"pilots",rewrite:function(e){return(0,a.jsxs)(x.Z,{children:[(0,a.jsxs)(D.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(L.Z,{alt:e[0].name,src:e[0].photo}),e[0].name]}),(0,a.jsxs)(D.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(L.Z,{alt:e[1].name,src:e[1].photo}),e[1].name]})]})}},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.dataset.id,o=c.filter((function(e){return e.id==a}))[0].name,confirm("Are you sure you want to remove team ".concat(o," (").concat(a,") ?"))){e.next=4;break}return e.abrupt("return");case 4:r(t.filter((function(e){return e.id!=a})));case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(e){X(a,r,i,o,c,"next",e)}function c(e){X(a,r,i,o,c,"throw",e)}o(void 0)}))})}];return(0,o.useEffect)((function(){t=t.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsxs)(u.ZP,{item:!0,xs:6,sm:6,children:[(0,a.jsx)(J.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-teams",options:c.filter((function(e){return 0==t.filter((function(n){return n.id==e.id})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:l,renderInput:function(e){return(0,a.jsx)(h.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){B(e,n,t[n])}))}return e}({},e,{name:"teams",label:"Teams",onKeyPress:function(e){"Enter"===e.key&&r(l.concat(t))}}))},onChange:function(e,n){f(n)}}),(0,a.jsx)(d.Z,{variant:"contained",startIcon:(0,a.jsx)(N.Z,{}),onClick:function(){r(l.concat(t))},children:"Add team(s)"})]}),(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(S.Z,{rows:t,headCells:p,orderById:"rank"})})]})})};function q(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(e){var n,t=e.pilots,r=e.update,c=Q((0,E.XH)(),1)[0],s=(0,o.useState)([]),l=s[0],f=s[1],p=[{id:"name",rewrite:function(e,n){return(0,a.jsx)(x.Z,{children:(0,a.jsxs)(D.Z,{href:n.link,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(L.Z,{alt:n.name,src:n.photo}),n.name]})})}},{id:"country"},{id:"rank"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.dataset.id,o=c.filter((function(e){return e.id==a}))[0].name,confirm("Are you sure you want to remove pilot ".concat(o," (").concat(a,") ?"))){e.next=4;break}return e.abrupt("return");case 4:r(t.filter((function(e){return e.id!=a})));case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(e){q(a,r,i,o,c,"next",e)}function c(e){q(a,r,i,o,c,"throw",e)}o(void 0)}))})}];return(0,o.useEffect)((function(){t=t.map((function(e){return e.delete="delete",e.id=e.civlid,e}))}),[]),(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsxs)(u.ZP,{item:!0,xs:6,sm:6,children:[(0,a.jsx)(J.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-pilots",options:c.filter((function(e){return 0==t.filter((function(n){return n.id==e.id})).length})),getOptionLabel:function(e){return"".concat(e.name," (").concat(e.id,")")},value:l,renderInput:function(e){return(0,a.jsx)(h.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}({},e,{name:"pilots",label:"Pilots",onKeyPress:function(e){"Enter"===e.key&&r(l.concat(t))}}))},onChange:function(e,n){f(n)}}),(0,a.jsx)(d.Z,{variant:"contained",startIcon:(0,a.jsx)(N.Z,{}),onClick:function(){r(l.concat(t))},children:"Add pilot(s)"})]}),(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(S.Z,{rows:t,headCells:p,orderById:"rank"})})]})})};function Y(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(e){var n,t=e.judges,r=e.update,c=U((0,E.Vf)(),1)[0],s=(0,o.useState)([]),l=s[0],f=s[1],p=[{id:"name"},{id:"country"},{id:"civlid"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.dataset.id,o=c.filter((function(e){return e.id==a}))[0].name,confirm("Are you sure you want to remove judge ".concat(o," (").concat(a,") ?"))){e.next=4;break}return e.abrupt("return");case 4:r(t.filter((function(e){return e.id!=a})));case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(e){Y(a,r,i,o,c,"next",e)}function c(e){Y(a,r,i,o,c,"throw",e)}o(void 0)}))})}];return(0,o.useEffect)((function(){t=t.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsxs)(u.ZP,{item:!0,xs:6,sm:6,children:[(0,a.jsx)(J.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-judges",options:c.filter((function(e){return 0==t.filter((function(n){return n.name==e.name})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:l,renderInput:function(e){return(0,a.jsx)(h.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){G(e,n,t[n])}))}return e}({},e,{name:"judges",label:"Judges",onKeyPress:function(e){"Enter"===e.key&&r(l.concat(t))}}))},onChange:function(e,n){f(n)}}),(0,a.jsx)(d.Z,{variant:"contained",startIcon:(0,a.jsx)(N.Z,{}),onClick:function(){r(l.concat(t))},children:"Add judge(s)"})]}),(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(S.Z,{rows:t,headCells:p,orderById:"name"})})]})})},ee=function(e){var n=e.config,t=e.update,r=e.type,i=(0,o.useState)(n),c=i[0],s=i[1],d=(0,o.useRef)(),f=(0,o.useRef)(),p=(0,o.useRef)(),x=(0,o.useRef)(),m=(0,o.useRef)(),g=(0,o.useRef)(),j=(0,o.useRef)(),v=(0,o.useRef)(),y=(0,o.useRef)(),b=(0,o.useRef)(),Z=(0,o.useRef)(),w=(0,o.useRef)(),_=(0,o.useRef)();return(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.warning,title:"Warning",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:d,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"warning",label:"Warning",placeholder:"Warning",defaultValue:n.warning,inputProps:{ref:d},onChange:function(e){c.warning=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.malus_repetition,title:"Malus Repetition",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:f,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"malus_repetition",label:"Malus Repetition",placeholder:"Malus Repetition",defaultValue:n.malus_repetition,inputProps:{ref:f},onChange:function(e){c.malus_repetition=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.warnings_to_dsq,title:"Warnings to DSQ",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:p,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"warnings_to_dsq",label:"Warnings to DSQ",placeholder:"Warnings to DSQ",defaultValue:n.warnings_to_dsq,inputProps:{ref:p},onChange:function(e){c.warnings_to_dsq=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.judge_weights.senior,title:"Senior Judge Weight",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:x,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"judge_weight_senior",label:"Senior Judge Weight",placeholder:"Senior Judge Weight",defaultValue:n.judge_weights.senior,inputProps:{ref:x},onChange:function(e){c.judge_weights.senior=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.judge_weights.certified,title:"Certified Judge Weight",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:m,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"judge_weight_certified",label:"Certified Judge Weight",placeholder:"Certified Judge Weight",defaultValue:n.judge_weights.certified,inputProps:{ref:m},onChange:function(e){c.judge_weights.certified=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.judge_weights.trainee,title:"Trainee Judge Weight",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:g,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"judge_weight_trainee",label:"Trainee Judge Weight",placeholder:"Trainee Judge Weight",defaultValue:n.judge_weights.trainee,inputProps:{ref:g},onChange:function(e){c.judge_weights.trainee=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:3,sm:3,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.mark_percentages[r].technical,title:"Mark Percentage: Technical",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:j,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"mark_percentages_technical",label:"Mark Percentage: Technical",placeholder:"Technical",defaultValue:n.mark_percentages[r].technical,inputProps:{ref:j},onChange:function(e){c.mark_percentages[r].technical=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:3,sm:3,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.mark_percentages[r].choreography,title:"Mark Percentage: Choreography",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:v,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"mark_percentages_choreography",label:"Mark Percentage: Choreography",placeholder:"Choreography",defaultValue:n.mark_percentages[r].choreography,inputProps:{ref:v},onChange:function(e){c.mark_percentages[r].choreography=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:3,sm:3,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.mark_percentages[r].landing,title:"Mark Percentage: Landing",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:y,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"mark_percentages_landing",label:"Mark Percentage: Landing",placeholder:"Landing",defaultValue:n.mark_percentages[r].landing,inputProps:{ref:y},onChange:function(e){c.mark_percentages[r].landing=e.target.value,s(c)}})})})}),"synchro"==r&&(0,a.jsx)(u.ZP,{item:!0,xs:3,sm:3,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.mark_percentages[r].synchro,title:"Mark Percentage: Synchro",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:b,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"mark_percentages_synchro",label:"Mark Percentage: Synchro",placeholder:"Synchro",defaultValue:n.mark_percentages[r].synchro,inputProps:{ref:b},onChange:function(e){c.mark_percentages[r].synchro=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.max_bonus_per_run.twist,title:"Max Twists per run",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:Z,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"max_twist",label:"Max Twists per run",placeholder:"Max Twists per run",defaultValue:n.max_bonus_per_run.twist,inputProps:{ref:Z},onChange:function(e){c.max_bonus_per_run.twist=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.max_bonus_per_run.reverse,title:"Max Reverses per run",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:w,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"max_reverse",label:"Max Reverses per run",placeholder:"Max Reverses per run",defaultValue:n.max_bonus_per_run.reverse,inputProps:{ref:w},onChange:function(e){c.max_bonus_per_run.reverse=e.target.value,s(c)}})})})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:n.max_bonus_per_run.flip,title:"Max Flips per run",onChange:function(e){return t(c)},onCancel:function(e){s(n)},childRef:_,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"max_flip",label:"Max Flips per run",placeholder:"Max Flips per run",defaultValue:n.max_bonus_per_run.flip,inputProps:{ref:_},onChange:function(e){c.max_bonus_per_run.flip=e.target.value,s(c)}})})})})]})})};function ne(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function re(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ie,ae=function(e){var n,t=e.tricks,r=e.update,c=re((0,E.Rs)(),1)[0],s=(0,o.useState)([]),l=s[0],f=s[1],p=[{id:"name"},{id:"acronym"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.dataset.id,o=c.filter((function(e){return e.id==a}))[0].name,confirm("Are you sure you want to remove repeatable_trick ".concat(o," (").concat(a,") ?"))){e.next=4;break}return e.abrupt("return");case 4:r(t.filter((function(e){return e.id!=a})));case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(e){ne(a,r,i,o,c,"next",e)}function c(e){ne(a,r,i,o,c,"throw",e)}o(void 0)}))})}];return(0,o.useEffect)((function(){t=t.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,a.jsx)(M.Z,{children:(0,a.jsxs)(u.ZP,{container:!0,spacing:7,children:[(0,a.jsxs)(u.ZP,{item:!0,xs:6,sm:6,children:[(0,a.jsx)(J.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-tricks",options:c.filter((function(e){return 0==t.filter((function(n){return n.name==e.name})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:l,renderInput:function(e){return(0,a.jsx)(h.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){te(e,n,t[n])}))}return e}({},e,{name:"tricks",label:"Tricks",onKeyPress:function(e){"Enter"===e.key&&r(l.concat(t))}}))},onChange:function(e,n){f(n)}}),(0,a.jsx)(d.Z,{variant:"contained",startIcon:(0,a.jsx)(N.Z,{}),onClick:function(){r(l.concat(t))},children:"Add repeatable_trick(s)"})]}),(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(S.Z,{rows:t,headCells:p,orderById:"technical_coefficient"})})]})})};function oe(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function ce(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){oe(a,r,i,o,c,"next",e)}function c(e){oe(a,r,i,o,c,"throw",e)}o(void 0)}))}}function se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var le=(0,y.ZP)(b.Z)((function(e){var n=e.theme;return se(ie={},n.breakpoints.down("md"),{minWidth:100}),se(ie,n.breakpoints.down("sm"),{minWidth:67}),ie})),de=(0,y.ZP)("span")((function(e){var n=e.theme;return se({lineHeight:1.71,fontSize:"0.875rem",marginLeft:n.spacing(2.4)},n.breakpoints.down("md"),{display:"none"})})),fe=function(){var e=(0,c.useRouter)(),n=e.query.code,t=ue((0,R.z)(),4),r=t[0],y=(t[1],t[2],t[3]),b=(0,s.aF)(),S=(b.user,b.authError,b.authIisLoading,(0,o.useState)({})),T=S[0],I=S[1],A=(0,o.useState)({}),M=A[0],N=A[1],J=(0,o.useState)(!1),L=J[0],D=J[1],X=(0,o.useState)("actions"),B=X[0],H=X[1],q=(0,o.useRef)(),F=(0,o.useRef)(),Q=(0,o.useRef)(),Y=(0,o.useRef)(),G=(0,o.useRef)(),U=ce(i().mark((function e(){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.t0=ue,e.next=4,(0,E.Xv)("/competitions/".concat(n),{expect_json:!0});case 4:if(e.t1=e.sent,t=(0,e.t0)(e.t1,3),r=t[0],a=t[1],t[2],!r){e.next=14;break}return I(!1),N(!1),y("Error while retrieving competitions list: ".concat(r)),e.abrupt("return");case 14:a.delete="delete",a.update="update",a.id=a._id,I(a),N(Object.assign({},a)),D(!1);case 20:case"end":return e.stop()}}),e)}))),ne=ce(i().mark((function t(r){var a,o,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a="/competitions/".concat(n),"PATCH",204,o={name:M.name,code:M.code,start_date:M.start_date,end_date:M.end_date,location:M.location,published:M.published,type:M.type},t.t0=ue,t.next=8,(0,E.Xv)(a,{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 8:if(t.t1=t.sent,c=(0,t.t0)(t.t1,3),s=c[0],c[1],c[2],!s){t.next=16;break}return y("error while updating competition ".concat(n,": ").concat(s)),t.abrupt("return");case 16:if(M.code==T.code){t.next=18;break}return t.abrupt("return",e.push("/competitions/show?code=".concat(M.code)));case 18:U();case 19:case"end":return t.stop()}}),t)}))),te=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ue,e.next=3,(0,E.Xv)("/competitions/".concat(n,"/pilots"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.civlid})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=11;break}return y("error while updating pilots list ".concat(n,": ").concat(a)),e.abrupt("return");case 11:U();case 12:case"end":return e.stop()}}),e)}))),re=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ue,e.next=3,(0,E.Xv)("/competitions/".concat(n,"/teams"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=11;break}return y("error while updating teams list ".concat(n,": ").concat(a)),e.abrupt("return");case 11:U();case 12:case"end":return e.stop()}}),e)}))),ie=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ue,e.next=3,(0,E.Xv)("/competitions/".concat(n,"/judges"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=11;break}return y("error while updating judges list ".concat(n,": ").concat(a)),e.abrupt("return");case 11:U();case 12:case"end":return e.stop()}}),e)}))),oe=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ue,e.next=3,(0,E.Xv)("/competitions/".concat(n,"/repeatable_tricks"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.map((function(e){return e.id})))});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=11;break}return y("error while updating repeatable tricks list ".concat(n,": ").concat(a)),e.abrupt("return");case 11:U();case 12:case"end":return e.stop()}}),e)}))),se=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ue,e.next=3,(0,E.Xv)("/competitions/".concat(n,"/config"),{expected_status:204,method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=11;break}return y("error while updating config ".concat(n,": ").concat(a)),e.abrupt("return");case 11:U();case 12:case"end":return e.stop()}}),e)}))),fe=ce(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure to ".concat(t," this competition ?"))){e.next=2;break}return e.abrupt("return");case 2:return e.t0=ue,e.next=5,(0,E.Xv)("/competitions/".concat(n,"/").concat(t),{expected_status:204,method:"POST"});case 5:if(e.t1=e.sent,r=(0,e.t0)(e.t1,3),a=r[0],r[1],r[2],!a){e.next=13;break}return y("error while ".concat(t," competition ").concat(n,": ").concat(a)),e.abrupt("return");case 13:U();case 14:case"end":return e.stop()}}),e)})));ce(i().mark((function e(n){var t,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("No yet implemented! #TODO"),e.abrupt("return");case 5:return D(!0),e.t0=ue,e.next=9,(0,E.Xv)("/competitions/".concat(t),{method:"DELETE",expected_status:204});case 9:e.t1=e.sent,a=(0,e.t0)(e.t1,3),o=a[0],a[1],a[2],o?y("Error while deleting Competition ".concat(t,": ").concat(o)):r("Competition ".concat(t," successfully deleted")),U();case 16:case"end":return e.stop()}}),e)})));return(0,o.useEffect)((function(){e.isReady&&U()}),[e.isReady]),L||!e.isReady?(0,a.jsxs)(x.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,a.jsx)(p.Z,{}),"Loading"]}):T?(0,a.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsxs)(l.Z,{variant:"h5",children:[T.name,(0,a.jsx)(f.Z,{onClick:U})]})}),(0,a.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:M.name,title:"Name",onChange:ne,onCancel:function(e){N(T)},childRef:q,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"name",label:"Name",placeholder:"Name",defaultValue:M.name,inputProps:{ref:q},onChange:function(e){M.name=e.target.value,N(M)}})})}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:M.code,title:"Code",onChange:ne,onCancel:function(e){N(T)},childRef:F,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"code",label:"Code",placeholder:"Code",defaultValue:M.code,inputProps:{ref:F},onChange:function(e){M.code=e.target.value,N(M)}})})}),(0,a.jsxs)(l.Z,{children:["Status: ",(0,a.jsx)("strong",{children:M.state}),"init"==T.state&&(0,a.jsx)(d.Z,{variant:"outlined",startIcon:(0,a.jsx)(C.Z,{}),onClick:function(){return fe("open")},children:"Open"}),"open"==T.state&&(0,a.jsx)(d.Z,{variant:"outlined",startIcon:(0,a.jsx)(k.Z,{}),onClick:function(){return fe("close")},children:"Close"}),"closed"==T.state&&(0,a.jsx)(d.Z,{variant:"outlined",startIcon:(0,a.jsx)(O.Z,{}),onClick:function(){return fe("reopen")},children:"Reopen"})]}),(0,a.jsxs)(l.Z,{children:["Type: ",(0,a.jsx)("strong",{children:M.type})]})]}),(0,a.jsxs)(u.ZP,{item:!0,xs:12,md:6,sx:{paddingBottom:4},children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:M.start_date,title:"Start date",onChange:ne,onCancel:function(e){N(T)},childRef:Q,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"start_date",label:"Start date",placeholder:"Start date",defaultValue:M.start_date,inputProps:{ref:Q},onChange:function(e){M.start_date=e.target.value,N(M)}})})}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:M.end_date,title:"End date",onChange:ne,onCancel:function(e){N(T)},childRef:Y,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"end_date",label:"End date",placeholder:"End date",defaultValue:M.end_date,inputProps:{ref:Y},onChange:function(e){M.end_date=e.target.value,N(M)}})})}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(W,{text:M.location,title:"Location",onChange:ne,onCancel:function(e){N(T)},childRef:G,children:(0,a.jsx)(h.Z,{fullWidth:!0,name:"location",label:"Location",placeholder:"Location",defaultValue:M.location,inputProps:{ref:G},onChange:function(e){M.location=e.target.value,N(M)}})})}),(0,a.jsx)(l.Z,{children:(0,a.jsx)("section",{children:(0,a.jsx)("div",{children:(0,a.jsxs)("span",{children:["Published:",(0,a.jsx)(P.Z,{checked:M.published,onChange:function(e){confirm("Are you sure to ".concat(e.target.checked?"publish":"unpublish"," the competition ?"))?(M.published=e.target.checked,N(M),ne(e)):e.target.checked=!e.target.checked}})]})})})})]}),(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(m.Z,{children:(0,a.jsxs)(v.ZP,{value:B,children:[(0,a.jsxs)(g.Z,{onChange:function(e,n){H(n)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:["solo"==T.type&&(0,a.jsx)(le,{value:"pilots",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(w.Z,{}),(0,a.jsx)(de,{children:"Pilots"})]})}),"synchro"==T.type&&(0,a.jsx)(le,{value:"teams",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(w.Z,{}),(0,a.jsx)(de,{children:"Teams"})]})}),(0,a.jsx)(le,{value:"judges",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(w.Z,{}),(0,a.jsx)(de,{children:"Judges"})]})}),(0,a.jsx)(le,{value:"repeatable_tricks",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(_.Z,{}),(0,a.jsx)(de,{children:"Repeatables tricks"})]})}),(0,a.jsx)(le,{value:"settings",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(_.Z,{}),(0,a.jsx)(de,{children:"Competition Settings"})]})}),(0,a.jsx)(le,{value:"runs",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(Z.Z,{}),(0,a.jsx)(de,{children:"Runs"})]})}),(0,a.jsx)(le,{value:"results",label:(0,a.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(_.Z,{}),(0,a.jsx)(de,{children:"Results"})]})})]}),(0,a.jsx)(j.Z,{sx:{p:0},value:"pilots",children:(0,a.jsx)(z,{pilots:T.pilots,update:function(e){return te(e)}})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"teams",children:(0,a.jsx)(K,{teams:T.teams,update:function(e){return re(e)}})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"judges",children:(0,a.jsx)($,{judges:T.judges,update:function(e){return ie(e)}})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"repeatable_tricks",children:(0,a.jsx)(ae,{tricks:T.repeatable_tricks,update:function(e){return oe(e)}})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"settings",children:(0,a.jsx)(ee,{config:T.config,update:function(e){return se(e)},type:T.type})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"runs",children:(0,a.jsx)(V,{comp:T})}),(0,a.jsx)(j.Z,{sx:{p:0},value:"results"})]})})})]}):(y("Empty or invalid data"),"")}}},function(e){e.O(0,[885,824,698,109,725,595,926,335,774,888,179],(function(){return n=2643,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
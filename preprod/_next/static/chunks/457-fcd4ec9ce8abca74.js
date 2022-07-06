"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{7250:function(e,n,r){var t=r(5893),i=r(7294);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){c(e,n,r[n])}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}n.Z=function(e){var n=e.title,r=e.text,c=(e.type,e.placeholder,e.onChange),l=e.onCancel,o=e.childRef,u=e.children,d=s(e,["title","text","type","placeholder","onChange","onCancel","childRef","children"]),h=(0,i.useState)(!1),f=h[0],x=h[1];return(0,i.useEffect)((function(){o&&o.current&&!0===f&&o.current.focus()}),[f,o]),f?(0,t.jsx)("section",a({},d,{children:(0,t.jsxs)("div",{onBlur:function(){return x(!1)},onKeyDown:function(e){return function(e){["Enter","Tab"].indexOf(e.code)>=0&&c&&c(e),["Escape"].indexOf(e.code)>=0&&l&&l(e),["Enter","Escape"].indexOf(e.code)>=0&&x(!1)}(e)},children:[n,": ",u]})})):(0,t.jsx)("section",a({},d,{children:(0,t.jsx)("div",{onClick:function(){return x(!0)},children:(0,t.jsxs)("span",{children:[n,": ",(0,t.jsx)("strong",{children:String(r)})]})})}))}},3521:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(5893),i=r(7294),c=r(2474),a=r(7087),s=r(2359),l=r(7774);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){var n=u(i.useState(e.default),2),r=n[0],d=n[1];return(0,t.jsx)(s._,{dateAdapter:a.Z,children:(0,t.jsx)(l.M,{label:e.label,value:r,onChange:function(n){n.toJSON=function(){return"".concat(String(this.getFullYear()),"-").concat(String(this.getMonth()+1).padStart(2,"0"),"-").concat(String(this.getDate()).padStart(2,"0"))},d(n),e.onChange&&e.onChange(n)},renderInput:function(e){return(0,t.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},e))}})})}},1194:function(e,n){n.Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"600px",bgcolor:"background.paper",boxShadow:24,p:4}},4906:function(e,n,r){var t=r(5893),i=r(7294),c=r(6886),a=r(4267),s=r(2474),l=r(5861),o=r(7250);n.Z=function(e){var n=e.config,r=e.update,u=e.type,d=(0,i.useState)(n),h=d[0],f=d[1],x=(0,i.useRef)(),j=(0,i.useRef)(),p=(0,i.useRef)(),Z=(0,i.useRef)(),g=(0,i.useRef)(),m=(0,i.useRef)(),b=(0,i.useRef)(),v=(0,i.useRef)(),y=(0,i.useRef)(),w=(0,i.useRef)(),_=(0,i.useRef)(),k=(0,i.useRef)(),P=(0,i.useRef)();return(0,t.jsx)(a.Z,{children:(0,t.jsxs)(c.ZP,{container:!0,spacing:7,children:[(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.warning,title:"Warning",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:x,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"warning",label:"Warning",placeholder:"Warning",defaultValue:n.warning,inputProps:{ref:x},onChange:function(e){h.warning=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.malus_repetition,title:"Malus Repetition",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:j,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"malus_repetition",label:"Malus Repetition",placeholder:"Malus Repetition",defaultValue:n.malus_repetition,inputProps:{ref:j},onChange:function(e){h.malus_repetition=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.warnings_to_dsq,title:"Warnings to DSQ",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:p,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"warnings_to_dsq",label:"Warnings to DSQ",placeholder:"Warnings to DSQ",defaultValue:n.warnings_to_dsq,inputProps:{ref:p},onChange:function(e){h.warnings_to_dsq=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.judge_weights.senior,title:"Senior Judge Weight",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:Z,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"judge_weight_senior",label:"Senior Judge Weight",placeholder:"Senior Judge Weight",defaultValue:n.judge_weights.senior,inputProps:{ref:Z},onChange:function(e){h.judge_weights.senior=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.judge_weights.certified,title:"Certified Judge Weight",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:g,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"judge_weight_certified",label:"Certified Judge Weight",placeholder:"Certified Judge Weight",defaultValue:n.judge_weights.certified,inputProps:{ref:g},onChange:function(e){h.judge_weights.certified=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.judge_weights.trainee,title:"Trainee Judge Weight",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:m,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"judge_weight_trainee",label:"Trainee Judge Weight",placeholder:"Trainee Judge Weight",defaultValue:n.judge_weights.trainee,inputProps:{ref:m},onChange:function(e){h.judge_weights.trainee=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.max_bonus_per_run.twist,title:"Max Twists per run",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:_,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"max_twist",label:"Max Twists per run",placeholder:"Max Twists per run",defaultValue:n.max_bonus_per_run.twist,inputProps:{ref:_},onChange:function(e){h.max_bonus_per_run.twist=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.max_bonus_per_run.reverse,title:"Max Reverses per run",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:k,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"max_reverse",label:"Max Reverses per run",placeholder:"Max Reverses per run",defaultValue:n.max_bonus_per_run.reverse,inputProps:{ref:k},onChange:function(e){h.max_bonus_per_run.reverse=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.max_bonus_per_run.flip,title:"Max Flips per run",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:P,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"max_flip",label:"Max Flips per run",placeholder:"Max Flips per run",defaultValue:n.max_bonus_per_run.flip,inputProps:{ref:P},onChange:function(e){h.max_bonus_per_run.flip=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.mark_percentages[u].technical,title:"Mark Percentage: Technical",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:b,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"mark_percentages_technical",label:"Mark Percentage: Technical",placeholder:"Technical",defaultValue:n.mark_percentages[u].technical,inputProps:{ref:b},onChange:function(e){h.mark_percentages[u].technical=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.mark_percentages[u].choreography,title:"Mark Percentage: Choreography",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:v,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"mark_percentages_choreography",label:"Mark Percentage: Choreography",placeholder:"Choreography",defaultValue:n.mark_percentages[u].choreography,inputProps:{ref:v},onChange:function(e){h.mark_percentages[u].choreography=e.target.value,f(h)}})})})}),(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.mark_percentages[u].landing,title:"Mark Percentage: Landing",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:y,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"mark_percentages_landing",label:"Mark Percentage: Landing",placeholder:"Landing",defaultValue:n.mark_percentages[u].landing,inputProps:{ref:y},onChange:function(e){h.mark_percentages[u].landing=e.target.value,f(h)}})})})}),"synchro"==u&&(0,t.jsx)(c.ZP,{item:!0,xs:4,sm:4,container:!0,children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(o.Z,{text:n.mark_percentages[u].synchro,title:"Mark Percentage: Synchro",onChange:function(e){return r(h)},onCancel:function(e){f(n)},childRef:w,children:(0,t.jsx)(s.Z,{fullWidth:!0,name:"mark_percentages_synchro",label:"Mark Percentage: Synchro",placeholder:"Synchro",defaultValue:n.mark_percentages[u].synchro,inputProps:{ref:w},onChange:function(e){h.mark_percentages[u].synchro=e.target.value,f(h)}})})})})]})})}},8321:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=r(6886),l=r(4117),o=r(4267),u=r(3321),d=r(6540),h=r(9624),f=r(2474),x=r(1733);r(9233);function j(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n,r=e.judges,t=e.allJudges,Z=e.update,g=(0,a.useState)([]),m=g[0],b=g[1],v=[{id:"name"},{id:"country"},{id:"level"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.currentTarget.dataset.id){e.next=3;break}return e.abrupt("return");case 3:if(a=t.filter((function(e){return e.id==c}))[0].name,confirm("Are you sure you want to remove judge ".concat(a," (").concat(c,") ?"))){e.next=6;break}return e.abrupt("return");case 6:Z(r.filter((function(e){return e.id!=c})));case 7:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){j(c,t,i,a,s,"next",e)}function s(e){j(c,t,i,a,s,"throw",e)}a(void 0)}))}),rewrite:function(e){return(0,c.jsx)(x.Z,{})}}];return(0,a.useEffect)((function(){console.log("useEffect()"),r=r.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,c.jsx)(o.Z,{children:(0,c.jsxs)(s.ZP,{container:!0,spacing:7,children:[(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(h.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-judges",options:t.filter((function(e){return 0==r.filter((function(n){return n.name==e.name})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:m,renderInput:function(e){return(0,c.jsx)(f.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},e,{name:"judges",label:"Judges",onKeyPress:function(e){"Enter"===e.key&&Z(m.concat(r))}}))},onChange:function(e,n){b(n)}})}),(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(u.Z,{variant:"contained",onClick:function(){Z(m.concat(r))},children:(0,c.jsx)(d.Z,{})})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(l.Z,{rows:r,headCells:v,orderById:"level"})})]})})}},3798:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=r(6886),l=r(4117),o=r(4267),u=r(3321),d=r(6540),h=r(9624),f=r(2474),x=r(7357),j=r(122),p=r(9661),Z=r(1733);r(9233);function g(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n,r=e.pilots,t=e.allPilots,b=e.update,v=(0,a.useState)([]),y=v[0],w=v[1],_=[{id:"name",rewrite:function(e,n){return(0,c.jsx)(x.Z,{children:(0,c.jsxs)(j.Z,{href:n.link,target:"_blank",rel:"noopener noreferrer",children:[(0,c.jsx)(p.Z,{alt:n.name,src:n.photo}),n.name]})})}},{id:"country"},{id:"rank"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.currentTarget.dataset.id){e.next=3;break}return e.abrupt("return");case 3:if(a=t.filter((function(e){return e.civlid==c}))[0].name,confirm("Are you sure you want to remove pilot ".concat(a," (").concat(c,") ?"))){e.next=6;break}return e.abrupt("return");case 6:b(r.filter((function(e){return e.civlid!=c})));case 7:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){g(c,t,i,a,s,"next",e)}function s(e){g(c,t,i,a,s,"throw",e)}a(void 0)}))}),rewrite:function(e){return(0,c.jsx)(Z.Z,{})}}];return(0,a.useEffect)((function(){r=r.map((function(e){return e.delete="delete",e.id=e.civlid,e}))}),[]),(0,c.jsx)(o.Z,{children:(0,c.jsxs)(s.ZP,{container:!0,spacing:7,children:[(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(h.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-pilots",options:t.filter((function(e){return 0==r.filter((function(n){return n.civlid==e.civlid})).length})),getOptionLabel:function(e){return"".concat(e.name," (").concat(e.civlid,")")},value:y,renderInput:function(e){return(0,c.jsx)(f.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}({},e,{name:"pilots",label:"Pilots",onKeyPress:function(e){"Enter"===e.key&&b(y.concat(r))}}))},onChange:function(e,n){w(n)}})}),(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(u.Z,{variant:"contained",onClick:function(){b(y.concat(r))},children:(0,c.jsx)(d.Z,{})})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(l.Z,{rows:r,headCells:_,orderById:"rank"})})]})})}},1736:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=r(6886),l=r(4117),o=r(4267),u=r(3321),d=r(6540),h=r(9624),f=r(2474),x=r(1733);r(9233);function j(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n,r=e.tricks,t=e.allTricks,Z=e.update,g=(0,a.useState)([]),m=g[0],b=g[1],v=[{id:"name"},{id:"acronym"},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.currentTarget.dataset.id){e.next=3;break}return e.abrupt("return");case 3:if(a=t.filter((function(e){return e.id==c}))[0].name,confirm("Are you sure you want to remove repeatable_trick ".concat(a," (").concat(c,") ?"))){e.next=6;break}return e.abrupt("return");case 6:Z(r.filter((function(e){return e.id!=c})));case 7:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){j(c,t,i,a,s,"next",e)}function s(e){j(c,t,i,a,s,"throw",e)}a(void 0)}))}),rewrite:function(e){return(0,c.jsx)(x.Z,{})}}];return(0,a.useEffect)((function(){r=r.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,c.jsx)(o.Z,{children:(0,c.jsxs)(s.ZP,{container:!0,spacing:7,children:[(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(h.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-tricks",options:t.filter((function(e){return 0==r.filter((function(n){return n.name==e.name})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:m,renderInput:function(e){return(0,c.jsx)(f.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},e,{name:"tricks",label:"Tricks",onKeyPress:function(e){"Enter"===e.key&&Z(m.concat(r))}}))},onChange:function(e,n){b(n)}})}),(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(u.Z,{variant:"contained",onClick:function(){Z(m.concat(r))},children:(0,c.jsx)(d.Z,{})})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(l.Z,{rows:r,headCells:v,orderById:"technical_coefficient"})})]})})}},6786:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=(r(1163),r(6886)),l=r(7357),o=r(5861),u=r(4267),d=r(295),h=r(3252),f=r(3816),x=r(3184),j=r(7906),p=r(2882),Z=r(5089),g=r(9755),m=r.n(g),b=(r(4117),r(5148)),v=r(9233);function y(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.Z=function(e){var n,r=e.code,t=e.rid,g=w((0,b.z)(),4),_=(g[0],g[1],g[2],g[3]),k=(0,a.useState)(!1),P=k[0],C=k[1],O=(n=i().mark((function e(){var n,c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,(0,v.Xv)("/competitions/".concat(r,"/results/").concat(t,"?published_only=false"),{expect_json:!0});case 3:if(e.t1=e.sent,n=(0,e.t0)(e.t1,3),c=n[0],a=n[1],n[2],!c){e.next=12;break}return _("error while retrieving results for competition ".concat(r,": ").concat(c)),C(!1),e.abrupt("return");case 12:a.results=a.results.map((function(e,n){return e.rank=n+1,e})),C(a);case 14:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){y(c,t,i,a,s,"next",e)}function s(e){y(c,t,i,a,s,"throw",e)}a(void 0)}))});return(0,a.useEffect)((function(){O()}),[]),P?(window.onbeforeprint=function(e){m()(".hideToPrint").hide()},window.onafterprint=function(e){m()(".hideToPrint").show()},(0,c.jsxs)(u.Z,{children:[(0,c.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,c.jsxs)(o.Z,{variant:"h4",children:[(0,c.jsx)(Z.Z,{fontSize:"large"}),P.final?"Final":"Intermediate"," Run ",parseInt(t)+1," Results"]})}),(0,c.jsx)(s.ZP,{container:!0,spacing:7,children:(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(p.Z,{children:(0,c.jsxs)(j.Z,{sx:{minWidth:750},children:[(0,c.jsx)(x.Z,{children:(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"Rank"}),(0,c.jsx)(h.Z,{children:"Pilot"}),(0,c.jsx)(h.Z,{children:"Tricks"}),(0,c.jsx)(h.Z,{children:"Warnings"}),(0,c.jsx)(h.Z,{children:"Technicity"}),(0,c.jsx)(h.Z,{children:"Judges marks"}),(0,c.jsx)(h.Z,{children:"Final marks"}),(0,c.jsx)(h.Z,{children:"Bonus"}),(0,c.jsx)(h.Z,{children:"Score"})]})}),(0,c.jsxs)(d.Z,{children:[P.results.sort((function(e,n){return n.final_marks.score-e.final_marks.score})).map((function(e,n){return(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:n+1}),(0,c.jsx)(h.Z,{children:e.pilot.name}),(0,c.jsx)(h.Z,{children:e.tricks.map((function(e){return(0,c.jsx)("p",{children:e.name})}))}),(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)("p",{children:["warnings: ",e.final_marks.warnings.length]}),(0,c.jsxs)("p",{children:["Malus: ",e.final_marks.malus,"%"]}),e.did_not_start&&(0,c.jsx)("p",{children:"DID NOT START"})]}),(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)("p",{children:["Techniciy: ",e.final_marks.technicity]}),(0,c.jsxs)("p",{children:["Bonus: ",e.final_marks.bonus_percentage,"%"]})]}),(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)("p",{children:["Technical: ",e.final_marks.judges_mark.technical]}),(0,c.jsxs)("p",{children:["Choreography: ",e.final_marks.judges_mark.choreography]}),(0,c.jsxs)("p",{children:["Landing: ",e.final_marks.judges_mark.landing]})]}),(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)("p",{children:["Technical: ",e.final_marks.technical]}),(0,c.jsxs)("p",{children:["Choreography: ",e.final_marks.choreography]}),(0,c.jsxs)("p",{children:["Landing: ",e.final_marks.landing]})]}),(0,c.jsx)(h.Z,{children:e.final_marks.bonus}),(0,c.jsx)(h.Z,{children:(0,c.jsx)("strong",{children:e.final_marks.score})})]},"result-{i}")})),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank1"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank2"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank3"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank4"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank5"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank6"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank7"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank8"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank9"),(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"}),(0,c.jsx)(h.Z,{children:"\xa0"})]},"blank10")]})]})})})})]})):"loading ..."}},3740:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=r(6886),l=r(4267),o=r(3321),u=r(6540),d=r(2474),h=r(4666),f=r(7645),x=r(6580),j=r(1425),p=r(4117),Z=r(9233),g=r(5148);function m(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.Z=function(e){var n,r=e.comp,t=e.refresh,v=b((0,g.z)(),4),y=(v[0],v[1],v[2],v[3]),w=(0,a.useState)([]),_=w[0],k=w[1],P=(0,a.useState)(!1),C=P[0],O=P[1],S=(0,a.useState)(0),R=S[0],T=S[1],W=(n=i().mark((function e(){var n,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,(0,Z.Xv)("/competitions/".concat(r.code,"/runs/new?pilots_to_qualify=").concat(R),{expected_status:201,method:"POST"});case 3:if(e.t1=e.sent,n=(0,e.t0)(e.t1,3),c=n[0],n[1],n[2],!c){e.next=11;break}return y("error while creating new run ".concat(r.code,": ").concat(c)),e.abrupt("return");case 11:t();case 12:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){m(c,t,i,a,s,"next",e)}function s(e){m(c,t,i,a,s,"throw",e)}a(void 0)}))}),E=[{id:"name",type:"LINK",href:function(e,n){return"/competitions/run?cid=".concat(r.code,"&rid=").concat(n.id)}},{id:"state"}];return(0,a.useEffect)((function(){k(r.runs.map((function(e,n){return e.delete="delete",e.id=n,e.name="run #".concat(n+1),e})))}),[]),(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(h.Z,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"xs",TransitionProps:{onEntering:function(){}},open:C,children:[(0,c.jsx)(f.Z,{children:"New Run"}),(0,c.jsx)(x.Z,{dividers:!0,children:(0,c.jsx)(d.Z,{name:"pilots-to-qualify",label:"Pilots to Qualify",placeholder:"Pilots to Qualify",defaultValue:R,type:"number",onChange:function(e){T(e.target.value)}})}),(0,c.jsxs)(j.Z,{children:[(0,c.jsx)(o.Z,{autoFocus:!0,onClick:function(){O(!1)},children:"Cancel"}),(0,c.jsx)(o.Z,{onClick:function(){W()},children:"Ok"})]})]}),(0,c.jsxs)(s.ZP,{container:!0,spacing:7,children:[(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(o.Z,{variant:"contained",startIcon:(0,c.jsx)(u.Z,{}),onClick:function(){O(!0)},children:"New Run"})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(p.Z,{rows:_,headCells:E,orderById:"id"})})]})]})}},4451:function(e,n,r){var t=r(8520),i=r.n(t),c=r(5893),a=r(7294),s=r(6886),l=r(4267),o=r(3321),u=r(6540),d=r(9624),h=r(2474),f=r(7357),x=r(9661),j=r(122),p=r(1733),Z=(r(9233),r(4117));function g(e,n,r,t,i,c,a){try{var s=e[c](a),l=s.value}catch(o){return void r(o)}s.done?n(l):Promise.resolve(l).then(t,i)}function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n,r=e.teams,t=e.allTeams,b=e.update,v=(0,a.useState)([]),y=v[0],w=v[1],_=[{id:"id"},{id:"name"},{id:"pilots",rewrite:function(e){return(0,c.jsxs)(f.Z,{children:[(0,c.jsxs)(j.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,c.jsx)(x.Z,{alt:e[0].name,src:e[0].photo}),e[0].name]}),(0,c.jsxs)(j.Z,{href:e[0].link,target:"_blank",rel:"noopener noreferrer",children:[(0,c.jsx)(x.Z,{alt:e[1].name,src:e[1].photo}),e[1].name]})]})}},{id:"delete",type:"ACTION",func:(n=i().mark((function e(n){var c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.currentTarget.dataset.id){e.next=3;break}return e.abrupt("return");case 3:if(a=t.filter((function(e){return e.id==c}))[0].name,confirm("Are you sure you want to remove team ".concat(a," (").concat(c,") ?"))){e.next=6;break}return e.abrupt("return");case 6:b(r.filter((function(e){return e.id!=c})));case 7:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var c=n.apply(e,r);function a(e){g(c,t,i,a,s,"next",e)}function s(e){g(c,t,i,a,s,"throw",e)}a(void 0)}))}),rewrite:function(e){return(0,c.jsx)(p.Z,{})}}];return(0,a.useEffect)((function(){r=r.map((function(e){return e.delete="delete",e.id=e._id,e}))}),[]),(0,c.jsx)(l.Z,{children:(0,c.jsxs)(s.ZP,{container:!0,spacing:7,children:[(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(d.Z,{multiple:!0,disablePortal:!0,id:"autocomplete-teams",options:t.filter((function(e){return 0==r.filter((function(n){return n.id==e.id})).length})),getOptionLabel:function(e){return"".concat(e.name)},value:y,renderInput:function(e){return(0,c.jsx)(h.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}({},e,{name:"teams",label:"Teams",onKeyPress:function(e){"Enter"===e.key&&b(y.concat(r))}}))},onChange:function(e,n){w(n)}})}),(0,c.jsx)(s.ZP,{item:!0,xs:6,sm:6,children:(0,c.jsx)(o.Z,{variant:"contained",onClick:function(){b(y.concat(r))},children:(0,c.jsx)(u.Z,{})})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,c.jsx)(Z.Z,{rows:r,headCells:_,orderById:"rank"})})]})})}}}]);
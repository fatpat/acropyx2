"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{6540:function(e,t,o){var n=o(5318);t.Z=void 0;var r=n(o(4938)),a=o(5893),l=(0,r.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=l},9624:function(e,t,o){o.d(t,{Z:function(){return J}});var n=o(3366),r=o(7462),a=o(7294),l=o(6010),i=o(7579),s=o(8925),p=o(3633),u=o(7960);function c(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function d(e,t){for(let o=0;o<e.length;o+=1)if(t(e[o]))return o;return-1}const g=function(e={}){const{ignoreAccents:t=!0,ignoreCase:o=!0,limit:n,matchFrom:r="any",stringify:a,trim:l=!1}=e;return(e,{inputValue:i,getOptionLabel:s})=>{let p=l?i.trim():i;o&&(p=p.toLowerCase()),t&&(p=c(p));const u=e.filter((e=>{let n=(a||s)(e);return o&&(n=n.toLowerCase()),t&&(n=c(n)),"start"===r?0===n.indexOf(p):n.indexOf(p)>-1}));return"number"===typeof n?u.slice(0,n):u}}();function f(e){const{autoComplete:t=!1,autoHighlight:o=!1,autoSelect:n=!1,blurOnSelect:l=!1,disabled:c,clearOnBlur:f=!e.freeSolo,clearOnEscape:h=!1,componentName:m="useAutocomplete",defaultValue:b=(e.multiple?[]:null),disableClearable:x=!1,disableCloseOnSelect:v=!1,disabledItemsFocusable:O=!1,disableListWrap:Z=!1,filterOptions:I=g,filterSelectedOptions:y=!1,freeSolo:P=!1,getOptionDisabled:C,getOptionLabel:S=(e=>{var t;return null!=(t=e.label)?t:e}),isOptionEqualToValue:$=((e,t)=>e===t),groupBy:w,handleHomeEndKeys:A=!e.freeSolo,id:k,includeInputInList:L=!1,inputValue:R,multiple:T=!1,onChange:M,onClose:D,onHighlightChange:N,onInputChange:E,onOpen:z,open:F,openOnFocus:j=!1,options:H,readOnly:V=!1,selectOnFocus:W=!e.freeSolo,value:q}=e,B=(0,i.Z)(k);let K=S;K=e=>{const t=S(e);return"string"!==typeof t?String(t):t};const U=a.useRef(!1),G=a.useRef(!0),_=a.useRef(null),J=a.useRef(null),[Q,X]=a.useState(null),[Y,ee]=a.useState(-1),te=o?0:-1,oe=a.useRef(te),[ne,re]=(0,s.Z)({controlled:q,default:b,name:m}),[ae,le]=(0,s.Z)({controlled:R,default:"",name:m,state:"inputValue"}),[ie,se]=a.useState(!1),pe=a.useCallback(((e,t)=>{if(!(T?ne.length<t.length:null!==t)&&!f)return;let o;if(T)o="";else if(null==t)o="";else{const e=K(t);o="string"===typeof e?e:""}ae!==o&&(le(o),E&&E(e,o,"reset"))}),[K,ae,T,E,le,f,ne]),ue=a.useRef();a.useEffect((()=>{const e=ne!==ue.current;ue.current=ne,ie&&!e||P&&!e||pe(null,ne)}),[ne,pe,ie,ue,P]);const[ce,de]=(0,s.Z)({controlled:F,default:!1,name:m,state:"open"}),[ge,fe]=a.useState(!0),he=!T&&null!=ne&&ae===K(ne),me=ce&&!V,be=me?I(H.filter((e=>!y||!(T?ne:[ne]).some((t=>null!==t&&$(e,t))))),{inputValue:he&&ge?"":ae,getOptionLabel:K}):[],xe=ce&&be.length>0&&!V;const ve=(0,p.Z)((e=>{-1===e?_.current.focus():Q.querySelector(`[data-tag-index="${e}"]`).focus()}));a.useEffect((()=>{T&&Y>ne.length-1&&(ee(-1),ve(-1))}),[ne,T,Y,ve]);const Oe=(0,p.Z)((({event:e,index:t,reason:o="auto"})=>{if(oe.current=t,-1===t?_.current.removeAttribute("aria-activedescendant"):_.current.setAttribute("aria-activedescendant",`${B}-option-${t}`),N&&N(e,-1===t?null:be[t],o),!J.current)return;const n=J.current.querySelector('[role="option"].Mui-focused');n&&(n.classList.remove("Mui-focused"),n.classList.remove("Mui-focusVisible"));const r=J.current.parentElement.querySelector('[role="listbox"]');if(!r)return;if(-1===t)return void(r.scrollTop=0);const a=J.current.querySelector(`[data-option-index="${t}"]`);if(a&&(a.classList.add("Mui-focused"),"keyboard"===o&&a.classList.add("Mui-focusVisible"),r.scrollHeight>r.clientHeight&&"mouse"!==o)){const e=a,t=r.clientHeight+r.scrollTop,o=e.offsetTop+e.offsetHeight;o>t?r.scrollTop=o-r.clientHeight:e.offsetTop-e.offsetHeight*(w?1.3:0)<r.scrollTop&&(r.scrollTop=e.offsetTop-e.offsetHeight*(w?1.3:0))}})),Ze=(0,p.Z)((({event:e,diff:o,direction:n="next",reason:r="auto"})=>{if(!me)return;const a=function(e,t){if(!J.current||-1===e)return-1;let o=e;for(;;){if("next"===t&&o===be.length||"previous"===t&&-1===o)return-1;const e=J.current.querySelector(`[data-option-index="${o}"]`),n=!O&&(!e||e.disabled||"true"===e.getAttribute("aria-disabled"));if(!(e&&!e.hasAttribute("tabindex")||n))return o;o+="next"===t?1:-1}}((()=>{const e=be.length-1;if("reset"===o)return te;if("start"===o)return 0;if("end"===o)return e;const t=oe.current+o;return t<0?-1===t&&L?-1:Z&&-1!==oe.current||Math.abs(o)>1?0:e:t>e?t===e+1&&L?-1:Z||Math.abs(o)>1?e:0:t})(),n);if(Oe({index:a,reason:r,event:e}),t&&"reset"!==o)if(-1===a)_.current.value=ae;else{const e=K(be[a]);_.current.value=e;0===e.toLowerCase().indexOf(ae.toLowerCase())&&ae.length>0&&_.current.setSelectionRange(ae.length,e.length)}})),Ie=a.useCallback((()=>{if(!me)return;const e=T?ne[0]:ne;if(0!==be.length&&null!=e){if(J.current)if(null==e)oe.current>=be.length-1?Oe({index:be.length-1}):Oe({index:oe.current});else{const t=be[oe.current];if(T&&t&&-1!==d(ne,(e=>$(t,e))))return;const o=d(be,(t=>$(t,e)));-1===o?Ze({diff:"reset"}):Oe({index:o})}}else Ze({diff:"reset"})}),[be.length,!T&&ne,y,Ze,Oe,me,ae,T]),ye=(0,p.Z)((e=>{(0,u.Z)(J,e),e&&Ie()}));a.useEffect((()=>{Ie()}),[Ie]);const Pe=e=>{ce||(de(!0),fe(!0),z&&z(e))},Ce=(e,t)=>{ce&&(de(!1),D&&D(e,t))},Se=(e,t,o,n)=>{if(Array.isArray(ne)){if(ne.length===t.length&&ne.every(((e,o)=>e===t[o])))return}else if(ne===t)return;M&&M(e,t,o,n),re(t)},$e=a.useRef(!1),we=(e,t,o="selectOption",n="options")=>{let r=o,a=t;if(T){a=Array.isArray(ne)?ne.slice():[];const e=d(a,(e=>$(t,e)));-1===e?a.push(t):"freeSolo"!==n&&(a.splice(e,1),r="removeOption")}pe(e,a),Se(e,a,r,{option:t}),v||e.ctrlKey||e.metaKey||Ce(e,r),(!0===l||"touch"===l&&$e.current||"mouse"===l&&!$e.current)&&_.current.blur()};const Ae=(e,t)=>{if(!T)return;Ce(e,"toggleInput");let o=Y;-1===Y?""===ae&&"previous"===t&&(o=ne.length-1):(o+="next"===t?1:-1,o<0&&(o=0),o===ne.length&&(o=-1)),o=function(e,t){if(-1===e)return-1;let o=e;for(;;){if("next"===t&&o===ne.length||"previous"===t&&-1===o)return-1;const e=Q.querySelector(`[data-tag-index="${o}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return o;o+="next"===t?1:-1}}(o,t),ee(o),ve(o)},ke=e=>{U.current=!0,le(""),E&&E(e,"","clear"),Se(e,T?[]:null,"clear")},Le=e=>o=>{if(e.onKeyDown&&e.onKeyDown(o),!o.defaultMuiPrevented&&(-1!==Y&&-1===["ArrowLeft","ArrowRight"].indexOf(o.key)&&(ee(-1),ve(-1)),229!==o.which))switch(o.key){case"Home":me&&A&&(o.preventDefault(),Ze({diff:"start",direction:"next",reason:"keyboard",event:o}));break;case"End":me&&A&&(o.preventDefault(),Ze({diff:"end",direction:"previous",reason:"keyboard",event:o}));break;case"PageUp":o.preventDefault(),Ze({diff:-5,direction:"previous",reason:"keyboard",event:o}),Pe(o);break;case"PageDown":o.preventDefault(),Ze({diff:5,direction:"next",reason:"keyboard",event:o}),Pe(o);break;case"ArrowDown":o.preventDefault(),Ze({diff:1,direction:"next",reason:"keyboard",event:o}),Pe(o);break;case"ArrowUp":o.preventDefault(),Ze({diff:-1,direction:"previous",reason:"keyboard",event:o}),Pe(o);break;case"ArrowLeft":Ae(o,"previous");break;case"ArrowRight":Ae(o,"next");break;case"Enter":if(-1!==oe.current&&me){const e=be[oe.current],n=!!C&&C(e);if(o.preventDefault(),n)return;we(o,e,"selectOption"),t&&_.current.setSelectionRange(_.current.value.length,_.current.value.length)}else P&&""!==ae&&!1===he&&(T&&o.preventDefault(),we(o,ae,"createOption","freeSolo"));break;case"Escape":me?(o.preventDefault(),o.stopPropagation(),Ce(o,"escape")):h&&(""!==ae||T&&ne.length>0)&&(o.preventDefault(),o.stopPropagation(),ke(o));break;case"Backspace":if(T&&!V&&""===ae&&ne.length>0){const e=-1===Y?ne.length-1:Y,t=ne.slice();t.splice(e,1),Se(o,t,"removeOption",{option:ne[e]})}}},Re=e=>{se(!0),j&&!U.current&&Pe(e)},Te=e=>{null!==J.current&&J.current.parentElement.contains(document.activeElement)?_.current.focus():(se(!1),G.current=!0,U.current=!1,n&&-1!==oe.current&&me?we(e,be[oe.current],"blur"):n&&P&&""!==ae?we(e,ae,"blur","freeSolo"):f&&pe(e,ne),Ce(e,"blur"))},Me=e=>{const t=e.target.value;ae!==t&&(le(t),fe(!1),E&&E(e,t,"input")),""===t?x||T||Se(e,null,"clear"):Pe(e)},De=e=>{Oe({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},Ne=()=>{$e.current=!0},Ee=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));we(e,be[t],"selectOption"),$e.current=!1},ze=e=>t=>{const o=ne.slice();o.splice(e,1),Se(t,o,"removeOption",{option:ne[e]})},Fe=e=>{ce?Ce(e,"toggleInput"):Pe(e)},je=e=>{e.target.getAttribute("id")!==B&&e.preventDefault()},He=()=>{_.current.focus(),W&&G.current&&_.current.selectionEnd-_.current.selectionStart===0&&_.current.select(),G.current=!1},Ve=e=>{""!==ae&&ce||Fe(e)};let We=P&&ae.length>0;We=We||(T?ne.length>0:null!==ne);let qe=be;if(w){new Map;qe=be.reduce(((e,t,o)=>{const n=w(t);return e.length>0&&e[e.length-1].group===n?e[e.length-1].options.push(t):e.push({key:o,index:o,group:n,options:[t]}),e}),[])}return c&&ie&&Te(),{getRootProps:(e={})=>(0,r.Z)({"aria-owns":xe?`${B}-listbox`:null},e,{onKeyDown:Le(e),onMouseDown:je,onClick:He}),getInputLabelProps:()=>({id:`${B}-label`,htmlFor:B}),getInputProps:()=>({id:B,value:ae,onBlur:Te,onFocus:Re,onChange:Me,onMouseDown:Ve,"aria-activedescendant":me?"":null,"aria-autocomplete":t?"both":"list","aria-controls":xe?`${B}-listbox`:void 0,"aria-expanded":xe,autoComplete:"off",ref:_,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:ke}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:Fe}),getTagProps:({index:e})=>(0,r.Z)({key:e,"data-tag-index":e,tabIndex:-1},!V&&{onDelete:ze(e)}),getListboxProps:()=>({role:"listbox",id:`${B}-listbox`,"aria-labelledby":`${B}-label`,ref:ye,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:({index:e,option:t})=>{const o=(T?ne:[ne]).some((e=>null!=e&&$(t,e))),n=!!C&&C(t);return{key:K(t),tabIndex:-1,role:"option",id:`${B}-option-${e}`,onMouseOver:De,onClick:Ee,onTouchStart:Ne,"data-option-index":e,"aria-disabled":n,"aria-selected":o}},id:B,inputValue:ae,value:ne,dirty:We,popupOpen:me,focused:ie||-1!==Y,anchorEl:Q,setAnchorEl:X,focusedTag:Y,groupedOptions:qe}}var h=o(7192),m=o(1796),b=o(1849),x=o(5438),v=o(5113),O=o(3946),Z=o(7918),I=o(7021),y=o(5827),P=o(4656),C=o(4707),S=o(2066),$=o(5893),w=(0,S.Z)((0,$.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),A=o(224),k=o(1657),L=o(1496),R=o(8979);function T(e){return(0,R.Z)("MuiAutocomplete",e)}var M,D,N=(0,o(6087).Z)("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),E=o(8216);const z=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],F=(0,L.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{fullWidth:n,hasClearIcon:r,hasPopupIcon:a,inputFocused:l,size:i}=o;return[{[`& .${N.tag}`]:t.tag},{[`& .${N.tag}`]:t[`tagSize${(0,E.Z)(i)}`]},{[`& .${N.inputRoot}`]:t.inputRoot},{[`& .${N.input}`]:t.input},{[`& .${N.input}`]:l&&t.inputFocused},t.root,n&&t.fullWidth,a&&t.hasPopupIcon,r&&t.hasClearIcon]}})((({ownerState:e})=>(0,r.Z)({[`&.${N.focused} .${N.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${N.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${N.tag}`]:(0,r.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===e.size&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${N.inputRoot}`]:{flexWrap:"wrap",[`.${N.hasPopupIcon}&, .${N.hasClearIcon}&`]:{paddingRight:30},[`.${N.hasPopupIcon}.${N.hasClearIcon}&`]:{paddingRight:56},[`& .${N.input}`]:{width:0,minWidth:30}},[`& .${I.Z.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${I.Z.root}.${y.Z.sizeSmall}`]:{[`& .${I.Z.input}`]:{padding:"2px 4px 3px 0"}},[`& .${P.Z.root}`]:{padding:9,[`.${N.hasPopupIcon}&, .${N.hasClearIcon}&`]:{paddingRight:39},[`.${N.hasPopupIcon}.${N.hasClearIcon}&`]:{paddingRight:65},[`& .${N.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${N.endAdornment}`]:{right:9}},[`& .${P.Z.root}.${y.Z.sizeSmall}`]:{padding:6,[`& .${N.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${C.Z.root}`]:{paddingTop:19,paddingLeft:8,[`.${N.hasPopupIcon}&, .${N.hasClearIcon}&`]:{paddingRight:39},[`.${N.hasPopupIcon}.${N.hasClearIcon}&`]:{paddingRight:65},[`& .${C.Z.input}`]:{padding:"7px 4px"},[`& .${N.endAdornment}`]:{right:9}},[`& .${C.Z.root}.${y.Z.sizeSmall}`]:{paddingBottom:1,[`& .${C.Z.input}`]:{padding:"2.5px 4px"}},[`& .${y.Z.hiddenLabel}`]:{paddingTop:8},[`& .${N.input}`]:(0,r.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})}))),j=(0,L.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),H=(0,L.ZP)(O.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),V=(0,L.ZP)(O.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},t)=>(0,r.Z)({},t.popupIndicator,e.popupOpen&&t.popupIndicatorOpen)})((({ownerState:e})=>(0,r.Z)({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"}))),W=(0,L.ZP)(b.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${N.option}`]:t.option},t.popper,o.disablePortal&&t.popperDisablePortal]}})((({theme:e,ownerState:t})=>(0,r.Z)({zIndex:e.zIndex.modal},t.disablePortal&&{position:"absolute"}))),q=(0,L.ZP)(v.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})((({theme:e})=>(0,r.Z)({},e.typography.body1,{overflow:"auto"}))),B=(0,L.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})((({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"}))),K=(0,L.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})((({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"}))),U=(0,L.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})((({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${N.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${N.focused}`]:{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${N.focusVisible}`]:{backgroundColor:e.palette.action.focus},'&[aria-selected="true"]':{backgroundColor:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${N.focused}`]:{backgroundColor:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},[`&.${N.focusVisible}`]:{backgroundColor:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}}))),G=(0,L.ZP)(x.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})((({theme:e})=>({backgroundColor:e.palette.background.paper,top:-8}))),_=(0,L.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${N.option}`]:{paddingLeft:24}});var J=a.forwardRef((function(e,t){var o,i;const s=(0,k.Z)({props:e,name:"MuiAutocomplete"}),{autoComplete:p=!1,autoHighlight:u=!1,autoSelect:c=!1,blurOnSelect:d=!1,ChipProps:g,className:m,clearIcon:x=M||(M=(0,$.jsx)(w,{fontSize:"small"})),clearOnBlur:O=!s.freeSolo,clearOnEscape:I=!1,clearText:y="Clear",closeText:P="Close",componentsProps:C={},defaultValue:S=(s.multiple?[]:null),disableClearable:L=!1,disableCloseOnSelect:R=!1,disabled:N=!1,disabledItemsFocusable:J=!1,disableListWrap:Q=!1,disablePortal:X=!1,filterSelectedOptions:Y=!1,forcePopupIcon:ee="auto",freeSolo:te=!1,fullWidth:oe=!1,getLimitTagsText:ne=(e=>`+${e}`),getOptionLabel:re=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:ae,handleHomeEndKeys:le=!s.freeSolo,includeInputInList:ie=!1,limitTags:se=-1,ListboxComponent:pe="ul",ListboxProps:ue,loading:ce=!1,loadingText:de="Loading\u2026",multiple:ge=!1,noOptionsText:fe="No options",openOnFocus:he=!1,openText:me="Open",PaperComponent:be=v.Z,PopperComponent:xe=b.Z,popupIcon:ve=D||(D=(0,$.jsx)(A.Z,{})),readOnly:Oe=!1,renderGroup:Ze,renderInput:Ie,renderOption:ye,renderTags:Pe,selectOnFocus:Ce=!s.freeSolo,size:Se="medium"}=s,$e=(0,n.Z)(s,z),{getRootProps:we,getInputProps:Ae,getInputLabelProps:ke,getPopupIndicatorProps:Le,getClearProps:Re,getTagProps:Te,getListboxProps:Me,getOptionProps:De,value:Ne,dirty:Ee,id:ze,popupOpen:Fe,focused:je,focusedTag:He,anchorEl:Ve,setAnchorEl:We,inputValue:qe,groupedOptions:Be}=f((0,r.Z)({},s,{componentName:"Autocomplete"})),Ke=!L&&!N&&Ee&&!Oe,Ue=(!te||!0===ee)&&!1!==ee,Ge=(0,r.Z)({},s,{disablePortal:X,focused:je,fullWidth:oe,hasClearIcon:Ke,hasPopupIcon:Ue,inputFocused:-1===He,popupOpen:Fe,size:Se}),_e=(e=>{const{classes:t,disablePortal:o,focused:n,fullWidth:r,hasClearIcon:a,hasPopupIcon:l,inputFocused:i,popupOpen:s,size:p}=e,u={root:["root",n&&"focused",r&&"fullWidth",a&&"hasClearIcon",l&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",i&&"inputFocused"],tag:["tag",`tagSize${(0,E.Z)(p)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",s&&"popupIndicatorOpen"],popper:["popper",o&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,h.Z)(u,T,t)})(Ge);let Je;if(ge&&Ne.length>0){const e=e=>(0,r.Z)({className:(0,l.Z)(_e.tag),disabled:N},Te(e));Je=Pe?Pe(Ne,e):Ne.map(((t,o)=>(0,$.jsx)(Z.Z,(0,r.Z)({label:re(t),size:Se},e({index:o}),g))))}if(se>-1&&Array.isArray(Je)){const e=Je.length-se;!je&&e>0&&(Je=Je.splice(0,se),Je.push((0,$.jsx)("span",{className:_e.tag,children:ne(e)},Je.length)))}const Qe=Ze||(e=>(0,$.jsxs)("li",{children:[(0,$.jsx)(G,{className:_e.groupLabel,ownerState:Ge,component:"div",children:e.group}),(0,$.jsx)(_,{className:_e.groupUl,ownerState:Ge,children:e.children})]},e.key)),Xe=ye||((e,t)=>(0,$.jsx)("li",(0,r.Z)({},e,{children:re(t)}))),Ye=(e,t)=>{const o=De({option:e,index:t});return Xe((0,r.Z)({},o,{className:_e.option}),e,{selected:o["aria-selected"],inputValue:qe})};return(0,$.jsxs)(a.Fragment,{children:[(0,$.jsx)(F,(0,r.Z)({ref:t,className:(0,l.Z)(_e.root,m),ownerState:Ge},we($e),{children:Ie({id:ze,disabled:N,fullWidth:!0,size:"small"===Se?"small":void 0,InputLabelProps:ke(),InputProps:{ref:We,className:_e.inputRoot,startAdornment:Je,endAdornment:(0,$.jsxs)(j,{className:_e.endAdornment,ownerState:Ge,children:[Ke?(0,$.jsx)(H,(0,r.Z)({},Re(),{"aria-label":y,title:y,ownerState:Ge},C.clearIndicator,{className:(0,l.Z)(_e.clearIndicator,null==(o=C.clearIndicator)?void 0:o.className),children:x})):null,Ue?(0,$.jsx)(V,(0,r.Z)({},Le(),{disabled:N,"aria-label":Fe?P:me,title:Fe?P:me,className:(0,l.Z)(_e.popupIndicator),ownerState:Ge,children:ve})):null]})},inputProps:(0,r.Z)({className:(0,l.Z)(_e.input),disabled:N,readOnly:Oe},Ae())})})),Fe&&Ve?(0,$.jsx)(W,{as:xe,className:(0,l.Z)(_e.popper),disablePortal:X,style:{width:Ve?Ve.clientWidth:null},ownerState:Ge,role:"presentation",anchorEl:Ve,open:!0,children:(0,$.jsxs)(q,(0,r.Z)({ownerState:Ge,as:be},C.paper,{className:(0,l.Z)(_e.paper,null==(i=C.paper)?void 0:i.className),children:[ce&&0===Be.length?(0,$.jsx)(B,{className:_e.loading,ownerState:Ge,children:de}):null,0!==Be.length||te||ce?null:(0,$.jsx)(K,{className:_e.noOptions,ownerState:Ge,role:"presentation",onMouseDown:e=>{e.preventDefault()},children:fe}),Be.length>0?(0,$.jsx)(U,(0,r.Z)({as:pe,className:_e.listbox,ownerState:Ge},Me(),ue,{children:Be.map(((e,t)=>ae?Qe({key:e.key,group:e.group,children:e.options.map(((t,o)=>Ye(t,e.index+o)))}):Ye(e,t)))})):null]}))}):null]})}))}}]);
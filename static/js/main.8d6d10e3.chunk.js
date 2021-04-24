(this["webpackJsonpreact-grid"]=this["webpackJsonpreact-grid"]||[]).push([[0],{198:function(e,n,t){},199:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(77),i=t.n(r),s=t(7),o=t(4),d=t(5),l=t(1),j=[{name:"NONE",icon:"fa-expand",width:"100%",height:"100%",verical:!0},{name:"XL",icon:"fa-tv",width:"2100px",height:"1200px",verical:!0},{name:"LG",icon:"fa-windows",width:"1190px",height:"990px",verical:!0},{name:"MD",icon:"fa-tablet",width:"990px",height:"1080px",verical:!0},{name:"SM",icon:"fa-android",width:"760px",height:"1024px",verical:!0},{name:"XS",icon:"fa-android",width:"400px",height:"800px",verical:!0}],u=j[0],m=function(e){var n=Object.assign({},e),t=Object(d.a)("grid-device",u),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(l.jsx)("div",Object(s.a)(Object(s.a)({},n),{},{children:Object(l.jsx)("div",{className:"btn-group m-3",children:j.map((function(e){return Object(l.jsxs)("button",{onClick:function(n){return function(e){e.name===a.name&&(e.verical=!e.verical),r(e)}(e)},className:"btn "+(e.name===a.name?"btn-danger ":"btn-primary"),children:[Object(l.jsx)("i",{className:"mr-1 fa "+e.icon}),e.name]},e.name)}))})}))},b=t(16),v=t(11),h=[{key:1619224737325,value:1,unit:"fr"},{key:1619224737795,value:1,unit:"fr"},{key:1619224879892,value:1,unit:"fr"}],O=function(e){var n=e.title,t=e.name,c=void 0===t?"grid-cols":t,a=Object(d.a)(c,h),r=Object(o.a)(a,2),i=r[0],s=r[1];return Object(l.jsxs)("div",{className:"card card-sm mb-2",children:[Object(l.jsxs)("h5",{className:"card-header",children:[n,Object(l.jsx)("button",{onClick:function(){var e={key:(new Date).getTime(),value:1,unit:"fr"};s([].concat(Object(v.a)(i),[e]))},className:"btn btn-sm btn-primary float-right",children:Object(l.jsx)("i",{className:"fa fa-plus"})})]}),Object(l.jsx)("div",{className:"card-body",children:i.map((function(e,n){return Object(l.jsx)(x,{model:e,onChange:function(e){return function(e,n){var t=e.target,c=t.name,a=t.value,r=Object(v.a)(i);-1!==["auto","min-content","max-content","minmax"].indexOf(a)?r[n].value="":r[n].value="px"===a?100:"%"===a?50:1,r[n][c]=a,s(r)}(e,n)},onRemove:function(e){return function(e){var n=i.filter((function(n,t){return t!==e}));s(n)}(n)}},e.key)}))})]})},g=["fr","px","%","em","auto","min-content","max-content","minmax"],x=function(e){var n=e.index,t=void 0===n?0:n,c=e.model,a=void 0===c?{}:c,r=e.onChange,i=void 0===r?console.log:r,s=e.onRemove,o=void 0===s?console.log:s;return Object(l.jsxs)("div",{className:"input-group input-group-sm mb-1",children:[Object(l.jsx)("input",{name:"value",type:"number",value:a.value,onChange:function(e){return i(e,t)},step:.5,className:"form-control"}),Object(l.jsx)("select",{name:"unit",value:a.unit,onChange:function(e){return i(e,t)},className:"custom-select",children:g.map((function(e){return Object(l.jsx)("option",{children:e},e)}))}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("button",{onClick:function(e){return o(t)},className:"btn btn-danger",children:Object(l.jsx)("i",{className:"fa fa-times"})})})]})},p=function(e,n){return"string"===typeof n?e+" "+n:e+" "+n.value+n.unit},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.cols,c=void 0===t?[]:t,a=n.rows,r=void 0===a?[]:a,i=c.length-1,o=r.length-1;return e.map((function(e){var n=e.end,t=e.start;if(!(t.c>i||t.r>o))return n.c=n.c>i?i:n.c,n.r=n.r>o?o:n.r,Object(s.a)(Object(s.a)({},e),{},{end:n})})).filter((function(e){return e}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grid-container",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=t.cols,a=void 0===c?[]:c,r=t.rows,i=void 0===r?[]:r,s=t.gaps,o=void 0===s?[]:s,d=a.reduce(p,""),l=i.reduce(p,""),j=o.reduce(p,""),u=n.reduce((function(n,t){return n+"\n.".concat(e," > .").concat(t.name,"{\n    grid-area: ").concat(t.start.r+1," / ").concat(t.start.c+1," / ").concat(t.end.r+2," / ").concat(t.end.c+2,";\n    border: 4px solid ").concat(t.color,";\n}")}),"");return".".concat(e," {\n    display: grid;\n    grid-template-columns: ").concat(d,";\n    grid-template-rows: ").concat(l,";\n    gap: ").concat(j,";\n}").concat(u)};t(88);NodeList.prototype.forEach=Array.prototype.forEach;var w=function(e){for(var n,t,a=e.store,r=void 0===a?"grid-items":a,i=e.cols,s=void 0===i?[]:i,j=e.rows,u=void 0===j?[]:j,m=e.gaps,b=void 0===m?[]:m,h=Object(d.a)(r,[]),O=Object(o.a)(h,2),g=O[0],x=O[1],p=s.length*u.length,f=Object(c.useRef)(),w=[],C=!1,k=function(e){return{i:e,r:Math.trunc(e/s.length),c:e%s.length,name:"item_"+e}},M=function(e){if(C){t=e;for(var c=f.current,a=0;a<p;a++){var r=k(a),i=c.querySelector("[name='".concat(r.name,"']"));n.c<=r.c&&r.c<=t.c&&n.r<=r.r&&r.r<=t.r?i.classList.add("on"):i.classList.remove("on")}}},S=function(e){var c=k(e),a=Object(l.jsx)("div",{name:c.name,onMouseDown:function(){return function(e){C=!0,n=e,M(e)}(c)},onMouseUp:function(){return function(e){C=!1,t=e;var c={key:"r-"+(new Date).getTime(),name:"cell"+g.length,start:n,end:t,color:y()};x([].concat(Object(v.a)(g),[c])),f.current.querySelectorAll("div").forEach((function(e){return e.classList.remove("on")}))}(c)},onMouseMove:function(){return M(c)},className:"cell"},c.name);w.push(a)},E=0;E<p;E++)S(E);var G=N("grid-design",g,{cols:s,rows:u,gaps:b});return Object(l.jsxs)("div",{className:"grid-design",ref:f,children:[Object(l.jsx)("style",{children:G}),w]})},y=function(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},C=(t(89),function(e){var n=e.store,t=void 0===n?"grid-items":n,c=e.cols,a=void 0===c?[]:c,r=e.rows,i=void 0===r?[]:r,s=e.gaps,j=void 0===s?[]:s,u=Object(d.a)(t,[]),m=Object(o.a)(u,2),b=m[0],v=m[1],h={cols:a,rows:i,gaps:j},O=f(b,h);b.length!==O.length&&v(O);var g=O.map((function(e,n){return Object(l.jsx)("div",{className:e.name,children:Object(l.jsx)("h1",{className:"legend",children:e.name})},"__"+n)})),x=N("grid-draw",b,h);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("style",{children:x}),Object(l.jsx)("div",{className:"grid-draw",children:g})]})}),k=[{value:0,unit:"px"},{value:0,unit:"px"}],M=function(e){var n=e.title,t=e.name,c=void 0===t?"grid-gap":t,a=Object(d.a)(c,k),r=Object(o.a)(a,2),i=r[0],s=r[1],j=function(e,n){var t=e.target,c=t.name,a=t.value,r=Object(v.a)(i);r[n][c]=a,s(r)};return Object(l.jsxs)("div",{className:"card card-sm mb-2",children:[Object(l.jsx)("h5",{className:"card-header",children:n}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)(E,{name:"X: ",index:0,model:i[0],onChange:j}),Object(l.jsx)(E,{name:"Y: ",index:1,model:i[1],onChange:j})]})]})},S=["px","%","em"],E=function(e){var n=e.name,t=e.index,c=void 0===t?99:t,a=e.model,r=void 0===a?{}:a,i=e.onChange,s=void 0===i?console.log:i;return Object(l.jsxs)("div",{className:"input-group input-group-sm mb-1",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:n})}),Object(l.jsx)("input",{name:"value",type:"number",value:r.value,onChange:function(e){return s(e,c)},step:.5,className:"form-control"}),Object(l.jsx)("select",{name:"unit",value:r.unit,onChange:function(e){return s(e,c)},className:"custom-select",children:S.map((function(e){return Object(l.jsx)("option",{children:e},e)}))})]})},G=t(82),L=function(e){var n=e.title,t=e.store,c=Object(d.a)(t,[]),a=Object(o.a)(c,2),r=a[0],i=a[1],s=function(e,n){var t=e.target,c=t.name,a=t.value,s=Object(v.a)(r);s[n][c]=a,i(s)},j=function(e){var n=r.filter((function(n,t){return t!==e}));i(n)};return Object(l.jsxs)("div",{className:"card card-sm mb-2",children:[Object(l.jsx)("h5",{className:"card-header",children:n}),Object(l.jsx)("div",{className:"card-body",children:r.map((function(e,n){return Object(l.jsx)(R,{model:e,index:n,onChange:s,onRemove:j},e.key)}))})]})},R=function(e){var n=e.index,t=void 0===n?0:n,a=e.model,r=void 0===a?{}:a,i=e.onChange,s=void 0===i?console.log:i,d=e.onRemove,j=void 0===d?console.log:d,u=Object(c.useState)(!1),m=Object(o.a)(u,2),b=m[0],v=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"input-group input-group-sm mb-1",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:t+1})}),Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsxs)("button",{className:"btn btn-primary",style:{backgroundColor:r.color},onClick:function(e){return v(!b)},children:[Object(l.jsx)("i",{className:"fa fa-paint"}),r.color]})}),Object(l.jsx)("input",{name:"name",type:"text",value:r.name,onChange:function(e){return s(e,t)},step:.5,className:"form-control"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("button",{onClick:function(e){return j(t)},className:"btn btn-danger",children:Object(l.jsx)("i",{className:"fa fa-times"})})})]}),b&&Object(l.jsx)("div",{className:"popover",children:Object(l.jsxs)("div",{className:"popover-body",children:[Object(l.jsx)(G.a,{color:r.color,onChange:function(e){return function(e,n){s({target:{name:"color",value:e.hex}},n)}(e,t)}}),Object(l.jsxs)("button",{className:"btn btn-primary w-100",style:{backgroundColor:r.color},onClick:function(e){return v(!1)},children:[Object(l.jsx)("i",{className:"fa fa-times mr-2"}),"Close: ",r.color]})]})})]})},D=function(e){e.name;var n=Object(b.a)(e,["name"]);return Object(l.jsxs)("div",Object(s.a)(Object(s.a)({},n),{},{children:[Object(l.jsx)(O,{title:"Grid Columns",name:"grid-cols"}),Object(l.jsx)(O,{title:"Grid Rows",name:"grid-rows"}),Object(l.jsx)(M,{title:"Grid Gap",name:"grid-gaps"}),Object(l.jsx)(L,{title:"Grid Items",store:"grid-items"})]}))},_=function(e){e.name;var n=Object(b.a)(e,["name"]);return Object(l.jsx)("footer",Object(s.a)(Object(s.a)({},n),{},{children:Object(l.jsx)("h6",{children:"Footer...."})}))},A=function(e){var n=e.name,t=Object(b.a)(e,["name"]);return Object(l.jsx)("header",Object(s.a)(Object(s.a)({},t),{},{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(l.jsxs)("a",{className:"navbar-brand",href:"#/home",children:[Object(l.jsx)("img",{src:"/react-grid/_/android-chrome-192x192.png",width:"30",height:"30",className:"d-inline-block align-top",alt:n}),n]})})}))},F=function(e){var n=Object.assign({},e);return Object(l.jsx)("div",Object(s.a)(Object(s.a)({},n),{},{children:Object(l.jsxs)("button",{className:"btn btn-danger",children:[Object(l.jsx)("i",{className:"fa fa-download mr-2"}),"Download"]})}))},T=function(e){var n=Object.assign({},e),t=Object(d.a)("grid-device",u),c=Object(o.a)(t,1)[0],a=Object(d.a)("grid-cols",[]),r=Object(o.a)(a,1)[0],i=Object(d.a)("grid-rows",[]),j=Object(o.a)(i,1)[0],m=Object(d.a)("grid-gaps",[]),b=Object(o.a)(m,1)[0],v=Object(d.a)("grid-items",[]),h=(Object(o.a)(v,1)[0],"\n    .device{\n        position: relative;\n        margin: 0 auto;\n        width: ".concat(c.verical?c.width:c.height,";\n        height: ").concat(c.verical?c.height:c.width,";\n    }\n    "));return Object(l.jsxs)("div",Object(s.a)(Object(s.a)({},n),{},{children:[Object(l.jsx)("style",{children:h}),Object(l.jsxs)("div",{className:"device",children:[Object(l.jsx)(C,{cols:r,rows:j,gaps:b,store:"grid-items"}),Object(l.jsx)(w,{cols:r,rows:j,gaps:b,store:"grid-items"})]})]}))},X=function(e){var n=e.className,t=Object(d.a)("grid-cols",[]),c=Object(o.a)(t,1)[0],a=Object(d.a)("grid-rows",[]),r=Object(o.a)(a,1)[0],i=Object(d.a)("grid-gaps",[]),s=Object(o.a)(i,1)[0],j=Object(d.a)("grid-items",[]),u=Object(o.a)(j,2),m=u[0],b=u[1],v={cols:c,rows:r,gaps:s},h=f(m,v);m.length!==h.length&&b(h);var O=N("grid-container",h,v),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grid-container",n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).reduce((function(e,n){return e+'\n   <div class="'.concat(n.name,'"> ').concat(n.name," </div>")}),"");return'<div class="'.concat(e,'">').concat(n,"\n</div>")}("grid-container",h,v);return Object(l.jsxs)("div",{className:n,children:[Object(l.jsxs)("code",{className:"card card-sm mb-2",children:[Object(l.jsx)("h5",{className:"card-header",children:"CSS Source"}),Object(l.jsx)("pre",{className:"card-body overflow-auto",children:O})]}),Object(l.jsxs)("code",{className:"card card-sm mb-2",children:[Object(l.jsx)("h5",{className:"card-header",children:"HTML Source"}),Object(l.jsx)("pre",{className:"card-body overflow-auto",children:g})]})]})};t(198);var q=function(){return Object(l.jsxs)("div",{className:"grid-main",children:[Object(l.jsxs)("div",{className:"left p-2",children:[Object(l.jsx)(A,{className:"header",name:"Grid Editor"}),Object(l.jsx)(_,{className:"footer"}),Object(l.jsx)(D,{className:"config"})]}),Object(l.jsx)(T,{className:"main m-2"}),Object(l.jsxs)("div",{className:"right p-2",children:[Object(l.jsx)(m,{className:"action"}),Object(l.jsx)(X,{className:"source"}),Object(l.jsx)(F,{className:"option"})]})]})};try{i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}catch(B){localStorage.clear(),console.error("Refresh the page please......",B)}},88:function(e,n,t){},89:function(e,n,t){}},[[199,1,2]]]);
//# sourceMappingURL=main.8d6d10e3.chunk.js.map
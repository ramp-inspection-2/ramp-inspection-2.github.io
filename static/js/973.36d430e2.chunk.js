"use strict";(self.webpackChunkramp_inspection=self.webpackChunkramp_inspection||[]).push([[973],{973:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var a=t(1413),n=t(885),s=t(2791),i=t(9434),o=t(3504),c=t(4569),l=t.n(c),d=t(4074);var u=s.forwardRef((function(e,r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}))}));var m=s.forwardRef((function(e,r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))})),p=t(184);var x=function(e){var r=e.inspection;return(0,p.jsxs)(o.rU,{className:" relative block p-4 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer ",to:"/".concat(r.slug),children:[(0,p.jsx)("h3",{className:"text-lg mb-2 dark:text-gray-300 font-medium",children:r.regis_mark}),(0,p.jsxs)("p",{className:"dark:text-gray-300 text-sm",children:["Aircraft Model:"," ",r.aircraft_model,(0,p.jsx)("br",{}),"Operator:"," ",r.operator]}),(0,p.jsxs)("p",{className:" mt-2 text-gray-600 dark:text-gray-500 text-sm flex ",children:[(0,p.jsx)("span",{className:"mr-2",children:(0,p.jsx)(u,{className:"w-5 h-5"})}),(0,p.jsxs)("span",{children:[new Date(r.date).toLocaleDateString()," ",r.time]})]}),(0,p.jsx)("span",{className:" absolute top-10 right-3 ",children:(0,p.jsx)(m,{className:"w-5 h-5 text-gray-600"})})]})};function h(e){var r=e.inspection;return(0,p.jsx)("div",{className:" border-t border-x border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 ",children:r.map((function(e){return(0,p.jsx)(x,{inspection:e},e.id_ramp)}))})}h.defaultProps={inspection:function(){return[]}};var f=h,g=t(1256),v=t(3347);var j=function(){var e=(0,i.I0)(),r=(0,s.useState)(!1),t=(0,n.Z)(r,2),c=t[0],u=t[1],m=(0,s.useState)(!1),x=(0,n.Z)(m,2),h=x[0],j=x[1],b=(0,s.useState)(!1),k=(0,n.Z)(b,2),w=k[0],y=k[1],N=(0,i.v9)((function(e){return e.auth.dummy})),L=(0,i.v9)((function(e){return e.auth.currentRole})),Z=(0,i.v9)((function(e){return e.rampInspection.rampInspection})),C=(0,s.useState)([]),q=(0,n.Z)(C,2),S=q[0],_=q[1],E=(0,s.useState)({}),R=(0,n.Z)(E,2),I=R[0],M=R[1];return(0,s.useEffect)((function(){N||c||h||(j(!0),y(!0),l().get("".concat(l().defaults.baseURL,"/api/ramp")).then((function(r){y(!1),u(!0),r.data.status&&e((0,v.QK)(r.data.data))})).catch((function(e){y(!1),u(!0),console.log(e)}))),(!N&&c||N)&&function(){var e=Z;"q"in I&&""!==I.q&&(e=e.filter((function(e){return e.aircraft_model.toLowerCase().includes(I.q)||e.operator.toLowerCase().includes(I.q)}))),_(e)}()})),(0,p.jsx)(g.Z,{children:(0,p.jsxs)("div",{className:"px-4 pt-16 pb-40",children:[(0,p.jsx)("div",{className:"text-3xl text-gray-700 dark:text-gray-300 text-center",children:(0,p.jsx)("h1",{children:"Ramp Inspection Checklist"})}),(0,p.jsx)("div",{className:"mt-16",children:(0,p.jsx)("input",{type:"text",placeholder:"Search",className:"t-form",value:I.q||"",onChange:function(e){var r=e.target.value;M((function(e){return(0,a.Z)((0,a.Z)({},e),{},{q:r})}))},required:!0})}),(0,p.jsx)("div",{className:"mt-4",children:w?(0,p.jsx)("div",{className:"text-center dark:text-gray-300 text-sm",children:"Loading..."}):(0,p.jsx)(f,{inspection:S})}),L.abilities.split(",").includes("inspector")?(0,p.jsx)(o.rU,{to:"/create",className:"fixed z-100 bottom-24 right-4",children:(0,p.jsx)(d.Z,{})}):""]})})}}}]);
//# sourceMappingURL=973.36d430e2.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{2432:function(e,t,n){Promise.resolve().then(n.bind(n,4300))},4300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(7437),r=n(8957),o=n(492);function a(){return(0,i.jsxs)(r._C,{children:[(0,i.jsx)(r.nv,{children:(0,i.jsx)(o.Z,{variant:"h1",children:"Venues"})}),(0,i.jsxs)(r.nv,{children:[(0,i.jsxs)(o.Z,{children:["There is an Interactive Map of the NTU Campus available to help you easily find locations on campus. ",(0,i.jsx)(r.rU,{url:"https://map.ntu.edu.tw/",external:!0})]}),(0,i.jsxs)(o.Z,{children:["If you're unsure how to search for a location, click the link provided below to access a step-by-step guide. ",(0,i.jsx)(r.rU,{url:"https://homepage.ntu.edu.tw/~buhome/map_help/map_search.html",external:!0})]}),(0,i.jsx)(r.Ee,{path:"venues-ntu.png"})]})]})}},8957:function(e,t,n){"use strict";n.d(t,{Ee:function(){return f},_C:function(){return m},nv:function(){return h},rU:function(){return x}});var i=n(7437),r=n(7107),o=n(1691),a=n(9643),s=n(1563),u=n(2069),l=n(9978),d=n(495),p=n(5188);let c=e=>(0,r.Z)(e,{components:{MuiTypography:{styleOverrides:{h1:{color:e.palette.royal_blue.main,fontSize:"2.5rem",[e.breakpoints.up("md")]:{fontSize:"4rem"},textAlign:"center",fontWeight:500},h2:{color:e.palette.royal_blue.main,fontSize:"2rem",[e.breakpoints.up("md")]:{fontSize:"2.5rem"},lineHeight:"120%",fontWeight:"500",marginTop:40,marginBottom:40},h3:{color:e.palette.azure.contrastText,fontSize:"1.5rem",[e.breakpoints.up("md")]:{fontSize:"2rem"},lineHeight:"120%",fontWeight:"500",marginTop:40,marginBottom:24},body1:{color:e.palette.azure.contrastText,fontSize:"1.2rem",[e.breakpoints.up("md")]:{fontSize:"1.5rem"},lineHeight:"160%",marginTop:24,marginBottom:24,textAlign:"justify"}}},MuiLink:{color:e.palette.royal_blue.light},MuiList:{defaultProps:{dense:!0},styleOverrides:{root:{listStyleType:"disc",paddingLeft:30,[e.breakpoints.up("md")]:{paddingLeft:50},"& p":{marginTop:0,marginBottom:0}}}},MuiListItem:{styleOverrides:{root:{display:"list-item","&::marker":{fontSize:"1.2rem",[e.breakpoints.up("md")]:{fontSize:"1.5rem"},lineHeight:"160%"}}}}}});function m(e){let{children:t}=e,n=(0,o.Z)();return(0,i.jsx)(a.Z,{paddingY:6,spacing:3,bgcolor:n.palette.background.default,children:t})}function h(e){let{children:t}=e,n=(0,o.Z)();return(0,i.jsx)(s.Z,{theme:c(n),children:(0,i.jsx)(u.Z,{sx:{paddingX:{xs:5,sm:15,md:30},textAlign:"justify"},children:t})})}function f(e){let{path:t}=e;return(0,i.jsx)(l.Z,{sx:{marginY:3},children:(0,i.jsx)("img",{src:"/images/".concat(t),width:"100%"})})}function x(e){let{url:t,title:n,external:r}=e;return(0,i.jsxs)(d.Z,{href:t,children:[n||t,r&&(0,i.jsx)(p.Z,{})]})}},5188:function(e,t,n){"use strict";var i=n(4630),r=n(7437);t.Z=(0,i.Z)((0,r.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"Launch")},9978:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(2265),r=n(1994),o=n(738),a=n(801),s=n(3004),u=n(4873),l=n(9084),d=n(8662),p=n(7437);let c=(0,d.Z)(),m=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:c}),f=(e,t)=>{let{classes:n,fixed:i,disableGutters:r,maxWidth:u}=e,l={root:["root",u&&`maxWidth${(0,s.Z)(String(u))}`,i&&"fixed",r&&"disableGutters"]};return(0,a.Z)(l,e=>(0,o.ZP)(t,e),n)};var x=n(5657),g=n(8233),b=n(7053),v=function(e={}){let{createStyledComponent:t=m,useThemeProps:n=h,componentName:o="MuiContainer"}=e,a=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return i.forwardRef(function(e,t){let i=n(e),{className:s,component:u="div",disableGutters:l=!1,fixed:d=!1,maxWidth:c="lg",classes:m,...h}=i,x={...i,component:u,disableGutters:l,fixed:d,maxWidth:c},g=f(x,o);return(0,p.jsx)(a,{as:u,ownerState:x,className:(0,r.Z)(g.root,s),ref:t,...h})})}({createStyledComponent:(0,g.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,x.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.i)({props:e,name:"MuiContainer"})})}},function(e){e.O(0,[259,288,971,117,744],function(){return e(e.s=2432)}),_N_E=e.O()}]);
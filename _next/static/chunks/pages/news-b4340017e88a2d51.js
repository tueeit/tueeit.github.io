(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6134],{743:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(4539)}])},2373:function(e,r,n){"use strict";n.d(r,{KM:function(){return v},MN:function(){return _},j7:function(){return b},Vp:function(){return C}});var a=n(5893),t=n(6052),s=n(4592),c=n(6450),i=n(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}var u=["spacing"],d=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],h=["children","spacing","separator","className"],x=(0,t.Gp)((function(e,r){var n=e.spacing,a=o(e,u),s=l({mx:n},(0,t.yK)().separator);return i.createElement(t.m$.span,l({ref:r,role:"presentation"},a,{__css:s}))}));s.Ts&&(x.displayName="BreadcrumbSeparator");var f=(0,t.Gp)((function(e,r){var n=e.isCurrentPage,a=e.as,c=e.className,u=e.href,p=o(e,d),h=(0,t.yK)(),x=l({ref:r,as:a,className:(0,s.cx)("chakra-breadcrumb__link",c)},p);return n?i.createElement(t.m$.span,l({"aria-current":"page",__css:h.link},x)):i.createElement(t.m$.a,l({__css:h.link,href:u},x))}));s.Ts&&(f.displayName="BreadcrumbLink");var m=(0,t.Gp)((function(e,r){var n=e.isCurrentPage,a=e.separator,u=e.isLastChild,d=e.spacing,h=e.children,m=e.className,j=o(e,p),g=(0,c.WR)(h).map((function(e){return e.type===f?i.cloneElement(e,{isCurrentPage:n}):e.type===x?i.cloneElement(e,{spacing:d,children:e.props.children||a}):e})),v=l({display:"inline-flex",alignItems:"center"},(0,t.yK)().item),_=(0,s.cx)("chakra-breadcrumb__list-item",m);return i.createElement(t.m$.li,l({ref:r,className:_},j,{__css:v}),g,!u&&i.createElement(x,{spacing:d},a))}));s.Ts&&(m.displayName="BreadcrumbItem");var j=(0,t.Gp)((function(e,r){var n=(0,t.jC)("Breadcrumb",e),a=(0,t.Lr)(e),u=a.children,d=a.spacing,p=void 0===d?"0.5rem":d,x=a.separator,f=void 0===x?"/":x,m=a.className,j=o(a,h),g=(0,c.WR)(u),v=g.length,_=g.map((function(e,r){return i.cloneElement(e,{separator:f,spacing:p,isLastChild:v===r+1})})),b=(0,s.cx)("chakra-breadcrumb",m);return i.createElement(t.m$.nav,l({ref:r,"aria-label":"breadcrumb",className:b,__css:n.container},j),i.createElement(t.Fo,{value:n},i.createElement(t.m$.ol,{className:"chakra-breadcrumb__list"},_)))}));s.Ts&&(j.displayName="Breadcrumb");var g=n(9736),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",path:""};return(0,a.jsxs)(j,{spacing:"16px",fontSize:"12px",color:"#23639D",separator:(0,a.jsx)(g.XC,{color:"gray.500"}),children:[(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/",children:"\u9996\u9801"})}),(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/news",children:"\u6700\u65b0\u6d88\u606f"})}),(0,a.jsx)(m,{isCurrentPage:!0,children:(0,a.jsx)(f,{href:"/news/".concat(e.path),children:e.title})})]})},_=function(){return(0,a.jsxs)(j,{spacing:"16px",fontSize:"12px",color:"#23639D",separator:(0,a.jsx)(g.XC,{color:"gray.500"}),children:[(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/",children:"\u9996\u9801"})}),(0,a.jsx)(m,{isCurrentPage:!0,children:(0,a.jsx)(f,{href:"/news",isCurrentPage:!0,children:"\u6700\u65b0\u6d88\u606f"})})]})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",path:""};return(0,a.jsxs)(j,{spacing:"16px",fontSize:"12px",color:"#23639D",separator:(0,a.jsx)(g.XC,{color:"gray.500"}),children:[(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/",children:"\u9996\u9801"})}),(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/press",children:"\u6703\u54e1\u901a\u8a0a"})}),(0,a.jsx)(m,{isCurrentPage:!0,children:(0,a.jsx)(f,{href:"/press/".concat(e.path),children:e.title})})]})},C=function(){return(0,a.jsxs)(j,{spacing:"16px",fontSize:"12px",color:"#23639D",separator:(0,a.jsx)(g.XC,{color:"gray.500"}),children:[(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/",children:"\u9996\u9801"})}),"\u310c",(0,a.jsx)(m,{children:(0,a.jsx)(f,{href:"/press",isCurrentPage:!0,children:"\u6703\u54e1\u901a\u8a0a"})})]})}},1048:function(e,r,n){"use strict";var a=n(5893),t=n(8527);r.Z=function(e){var r=e.children,n=e.index,s=void 0===n?0:n;return(0,a.jsx)(t.xu,{border:"1px solid ".concat(s%2?"#B4B4B4":"#4C769B"),padding:"16px",children:r})}},4539:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return u},default:function(){return d}});var a=n(5893),t=n(9008),s=n(1664),c=n(8527),i=n(428),l=n(1048),o=n(2373),u=!0;function d(e){var r=e.newsList;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("meta",{property:"og:title",content:"\u6700\u65b0\u6d88\u606f - \u53f0\u7063\u96fb\u5b50\u96fb\u6a5f\u8cc7\u8a0a\u7522\u696d\u5de5\u6703"}),(0,a.jsx)("meta",{property:"og:description",content:r.slice(0,5).map((function(e){return e.data.title})).join("\u3001")})]}),(0,a.jsx)(c.xu,{children:(0,a.jsx)(o.MN,{})}),(0,a.jsx)(c.kC,{paddingY:"16px",children:(0,a.jsx)(c.xv,{fontSize:"20px",children:"\u6700\u65b0\u6d88\u606f"})}),(0,a.jsx)(c.Kq,{spacing:"16px",children:r.map((function(e,r){return(0,a.jsxs)(l.Z,{index:r,children:[(0,a.jsx)(c.xu,{children:(0,a.jsx)(c.xv,{fontSize:"14px",color:"#AAAAAA",children:e.data.createdAt})}),(0,a.jsx)(c.xu,{children:(0,a.jsx)(s.default,{as:"/news/".concat(e.filePath.replace(/\.mdx?$/,"")),href:"/news/[slug]",passHref:!0,children:(0,a.jsx)(i.Z,{children:e.data.title})})})]},e.filePath)}))})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=743,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
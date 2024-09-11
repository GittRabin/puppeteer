/*! For license information please see e1880429.0d3a3eca.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26606],{90753:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(74848),s=t(28453);const a={sidebar_label:"Page.$$"},i="Page.$$() method",p={id:"api/puppeteer.page.__",title:"Page.$$() method",description:"Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to [].",source:"@site/../docs/api/puppeteer.page.__.md",sourceDirName:"api",slug:"/api/puppeteer.page.__",permalink:"/next/api/puppeteer.page.__",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.$$"},sidebar:"api",previous:{title:"Page.$",permalink:"/next/api/puppeteer.page._"},next:{title:"Page.$$eval",permalink:"/next/api/puppeteer.page.__eval"}},o={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"page-method",children:"Page.$$() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to ",(0,n.jsx)(r.code,{children:"[]"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  $$<Selector extends string>(\n    selector: Selector,\n    options?: QueryOptions\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Selector"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.queryoptions",children:"QueryOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<Array<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.frame.__",children:"Page.mainFrame().$$(selector)"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,c=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:c,props:a,_owner:p.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>p});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);
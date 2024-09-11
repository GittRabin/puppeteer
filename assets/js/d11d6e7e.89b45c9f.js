/*! For license information please see d11d6e7e.89b45c9f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16609],{9066:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(74848),i=r(28453);const a={sidebar_label:"Dialog"},n="Dialog class",l={id:"api/puppeteer.dialog",title:"Dialog class",description:"Dialog instances are dispatched by the Page via the dialog event.",source:"@site/versioned_docs/version-23.3.0/api/puppeteer.dialog.md",sourceDirName:"api",slug:"/api/puppeteer.dialog",permalink:"/api/puppeteer.dialog",draft:!1,unlisted:!1,tags:[],version:"23.3.0",frontMatter:{sidebar_label:"Dialog"},sidebar:"api",previous:{title:"FileChooser.isMultiple",permalink:"/api/puppeteer.filechooser.ismultiple"},next:{title:"Dialog.accept",permalink:"/api/puppeteer.dialog.accept"}},d={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"dialog-class",children:"Dialog class"})}),"\n",(0,t.jsxs)(s.p,{children:["Dialog instances are dispatched by the ",(0,t.jsx)(s.a,{href:"/api/puppeteer.page",children:"Page"})," via the ",(0,t.jsx)(s.code,{children:"dialog"})," event."]}),"\n",(0,t.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class Dialog\n"})}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(s.code,{children:"Dialog"})," class."]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"accept",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.dialog.accept",children:"accept(promptText)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"A promise that resolves when the dialog has been accepted."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"defaultvalue",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.dialog.defaultvalue",children:"defaultValue()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["The default value of the prompt, or an empty string if the dialog is not a ",(0,t.jsx)(s.code,{children:"prompt"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"dismiss",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.dialog.dismiss",children:"dismiss()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"A promise which will resolve once the dialog has been dismissed"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"message",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.dialog.message",children:"message()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The message displayed in the dialog."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"type",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.dialog.type",children:"type()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The type of the dialog."})})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},21020:(e,s,r)=>{var t=r(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var t,a={},c=null,o=null;for(t in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(o=s.ref),s)n.call(s,t)&&!d.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:i,type:e,key:c,ref:o,props:a,_owner:l.current}}s.Fragment=a,s.jsx=c,s.jsxs=c},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>l});var t=r(96540);const i={},a=t.createContext(i);function n(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);
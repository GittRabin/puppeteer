/*! For license information please see 27594d96.5904db0f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69373],{79342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),o=n(28453);const i={},s="Files",a={id:"guides/files",title:"Files",description:"Currently, Puppeteer does not offer a way to handle file downloads in a programmatic way.",source:"@site/versioned_docs/version-23.3.0/guides/files.md",sourceDirName:"guides",slug:"/guides/files",permalink:"/guides/files",draft:!1,unlisted:!1,tags:[],version:"23.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Cookies",permalink:"/guides/cookies"},next:{title:"Running Puppeteer in the browser",permalink:"/guides/running-puppeteer-in-the-browser"}},l={},d=[];function p(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"files",children:"Files"})}),"\n",(0,r.jsxs)(t.p,{children:["Currently, Puppeteer does not offer a way to handle file downloads in a programmatic way.\nFor uploading files, you need to locate a file input element and call ",(0,r.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.uploadfile/",children:(0,r.jsx)(t.code,{children:"ElementHandle.uploadFile"})}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const fileElement = await page.waitForSelector('input[type=file]');\nawait fileElement.uploadFile(['./path-to-local-file']);\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:p,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
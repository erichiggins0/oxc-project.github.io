"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{8331:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(959),i=s(5924),r=s(2624),l=s(7181),n=s(1310),c=s(6530),o=s(8903),m=s(318);function d(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_LuLn",sidebarItemTitle:"sidebarItemTitle_JaTT",sidebarItemList:"sidebarItemList_P7Q7",sidebarItem:"sidebarItem_WQeJ",sidebarItemLink:"sidebarItemLink_sO1n",sidebarItemLinkActive:"sidebarItemLinkActive_dH0G"};var g=s(1527);function b(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(6668);function p(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(h.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,g.jsx)(r.Z,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},8162:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(959);var a=s(5924),i=s(6530);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(6307),n=s(3011),c=s(8331),o=s(7985),m=s(3398);const d={tag:"tag_Bxbx"};var u=s(1527);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var h=s(6625);function p(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,u.jsx)(l.d,{title:i}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:s,children:[(0,u.jsx)(m.Z,{as:"h1",children:i}),(0,u.jsx)(b,{tags:t})]})]})}},7985:(e,t,s)=>{s.d(t,{Z:()=>n});s(959);var a=s(5924),i=s(1310);const r={tag:"tag_kMKY",tagRegular:"tagRegular_lwsH",tagWithCount:"tagWithCount_XKlR"};var l=s(1527);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);
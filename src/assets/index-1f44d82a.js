import{u as g,a as n,b as o,r as l,j as e,C as i,c as r,I as p,N as d}from"./index-4635bd74.js";import{B as m}from"./breadcrumbs-26924340.js";import{j as h}from"./data-72125cf4.js";const a={"concrete-case-page__title":"_concrete-case-page__title_1pgth_1","concrete-case-page__addition":"_concrete-case-page__addition_1pgth_19","concrete-case-page__gallery":"_concrete-case-page__gallery_1pgth_35","concrete-case-page__gallery__item":"_concrete-case-page__gallery__item_1pgth_53","concrete-case-page__gallery__image":"_concrete-case-page__gallery__image_1pgth_59","concrete-case-page__gallery__image_short-view":"_concrete-case-page__gallery__image_short-view_1pgth_69","concrete-case-page__gallery__text":"_concrete-case-page__gallery__text_1pgth_77"},x=({children:t,link:s})=>s?e.jsx(d,{to:s,target:"_blank",children:t}):e.jsx(e.Fragment,{children:t}),y=()=>{g();const t=n(),{id:s}=o(),c=h[s];return l.useEffect(()=>{c||t("/cases")},[]),c?e.jsxs(i,{children:[e.jsx(m,{}),e.jsx("h1",{className:a["concrete-case-page__title"],children:c.title}),e.jsx("p",{className:a["concrete-case-page__addition"],children:c.addition}),e.jsx("section",{className:a["concrete-case-page__gallery"],children:c.cases.map(_=>e.jsx("div",{className:r(a["concrete-case-page__gallery__item"],{[a["concrete-case-page__gallery__image_short-view"]]:_.isShortView}),children:e.jsxs(x,{link:_.link,children:[e.jsx(p,{className:r(a["concrete-case-page__gallery__image"],{[a["concrete-case-page__gallery__image_short-view"]]:_.isShortView}),src:_.imageSrc,alt:_.description}),e.jsx("p",{className:a["concrete-case-page__gallery__text"],children:_.description})]})},_.id))})]}):null},v=y;export{v as default};

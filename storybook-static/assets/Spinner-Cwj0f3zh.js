import{j as i}from"./jsx-runtime-C4y08Z3j.js";import{q as n,W as t,X as l}from"./styled-components.browser.esm-BV7IBLEt.js";const m=t`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,r={sm:"0.875rem",md:"1rem",lg:"1.5rem "},d=n.span`
  display: inline-block;
  width: ${({$size:e})=>r[e]};
  height: ${({$size:e})=>r[e]};
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-top-color: ${({$color:e})=>e};
  animation: ${m} 0.8s linear infinite;
`;function p({size:e="md",color:o}){const s=l(),a=o??s.colors.primary;return i.jsx(d,{"aria-label":"loading",role:"status",$size:e,$color:a})}p.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""}}};export{p as S};

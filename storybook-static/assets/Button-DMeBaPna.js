import{j as a}from"./jsx-runtime-C4y08Z3j.js";import{q as d,A as r}from"./styled-components.browser.esm-BV7IBLEt.js";import{S as p}from"./Spinner-Cwj0f3zh.js";const c={sm:r`
    padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
    font-size: ${({theme:e})=>e.typography.fontSizeSm};
    border-radius: ${({theme:e})=>e.radii.sm};
  `,md:r`
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    font-size: ${({theme:e})=>e.typography.fontSizeMd};
    border-radius: ${({theme:e})=>e.radii.md};
  `,lg:r`
    padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.lg}`};
    font-size: ${({theme:e})=>e.typography.fontSizeLg};
    border-radius: ${({theme:e})=>e.radii.md};
  `},m={primary:r`
    background: ${({theme:e})=>e.colors.primary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.primaryHover};
    }
  `,secondary:r`
    background: ${({theme:e})=>e.colors.secondary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.secondaryHover};
    }
  `,ghost:r`
    background: transparent;
    color: ${({theme:e})=>e.colors.text};
    border: 1px solid ${({theme:e})=>e.colors.border};
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.surface};
    }
  `},u=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeightMedium};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({$size:e})=>c[e]}
  ${({$variant:e})=>m[e]}
`;function f({variant:e="primary",size:s="md",loading:o=!1,disabled:n,children:i,...t}){const l=n||o;return a.jsxs(u,{$variant:e,$size:s,disabled:l,...t,children:[o?a.jsx(p,{size:"sm",color:"currentColor"}):null,i]})}f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};export{f as B};

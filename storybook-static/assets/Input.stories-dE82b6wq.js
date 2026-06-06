import{j as r}from"./jsx-runtime-C4y08Z3j.js";import{r as i}from"./index-Cb07ilWm.js";import{q as s,A as q}from"./styled-components.browser.esm-BV7IBLEt.js";const F=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing.xs};
`,M=s.label`
  font-size: ${({theme:o})=>o.typography.fontSizeSm};
  font-weight: ${({theme:o})=>o.typography.fontWeightMedium};
  color: ${({theme:o})=>o.colors.text};
  font-family: ${({theme:o})=>o.typography.fontFamily};
`,W=s.div`
  position: relative;
`,C=s.input`
  width: 100%;
  padding: ${({theme:o})=>`${o.spacing.sm} ${o.spacing.md}`};
  font-size: ${({theme:o})=>o.typography.fontSizeMd};
  font-family: ${({theme:o})=>o.typography.fontFamily};
  color: ${({theme:o})=>o.colors.text};
  background: ${({theme:o})=>o.colors.surface};
  border: 1px solid ${({$hasError:o,theme:e})=>o?e.colors.error:e.colors.border};
  border-radius: ${({theme:o})=>o.radii.md};
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: ${({$hasError:o,theme:e})=>o?e.colors.error:e.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${({theme:o})=>o.colors.background};
  }

  &::placeholder {
    color: ${({theme:o})=>o.colors.textMuted};
  }
`,_=s.button`
  position: absolute;
  right: ${({theme:o})=>o.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:o})=>o.colors.textMuted};
  font-size: 0.75rem;
  padding: 2px 4px;
  line-height: 1;
`,w=q`
  font-size: ${({theme:o})=>o.typography.fontSizeSm};
  font-family: ${({theme:o})=>o.typography.fontFamily};
`,N=s.span`
  ${w}
  color: ${({theme:o})=>o.colors.textMuted};
`,A=s.span`
  ${w}
  color: ${({theme:o})=>o.colors.error};
`;let B=0;function S({label:o,error:e,helperText:p,id:E,type:l="text",onChange:T,...j}){const[c,I]=i.useState(!1),v=i.useRef(`input-${++B}`).current,d=E??v,z=i.useCallback(()=>{I(k=>!k)},[]),P=l==="password"&&c?"text":l;return r.jsxs(F,{children:[o?r.jsx(M,{htmlFor:d,children:o}):null,r.jsxs(W,{children:[r.jsx(C,{id:d,type:P,$hasError:!!e,onChange:T,...j}),l==="password"?r.jsx(_,{type:"button",onClick:z,tabIndex:-1,children:c?"ocultar":"mostrar"}):null]}),e?r.jsx(A,{role:"alert",children:e}):null,!e&&p?r.jsx(N,{children:p}):null]})}S.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const H={title:"Components/Input",component:S,args:{placeholder:"Digite algo..."},argTypes:{type:{control:"select",options:["text","email","password"]}}},t={args:{label:"Nome",helperText:"Seu nome completo"}},a={args:{label:"Email",type:"email",error:"Email inválido"}},n={args:{label:"Senha",type:"password"}};var u,m,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Nome',
    helperText: 'Seu nome completo'
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,f,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,$,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Senha',
    type: 'password'
  }
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const L=["Playground","WithError","Password"];export{n as Password,t as Playground,a as WithError,L as __namedExportsOrder,H as default};

import{j as o}from"./jsx-runtime-C4y08Z3j.js";import{r as i}from"./index-Cb07ilWm.js";import{r as b}from"./index-D8w3RDQN.js";import{q as n}from"./styled-components.browser.esm-BV7IBLEt.js";import{B as m}from"./Button-DMeBaPna.js";import"./index-C82X9G1Q.js";import"./Spinner-Cwj0f3zh.js";const j=n.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.overlay};
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`,v=n.div`
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 32rem;
  width: 90%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  z-index: ${({theme:e})=>e.zIndex.modal};
`,k=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.lg}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,w=n.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSizeLg};
  font-weight: ${({theme:e})=>e.typography.fontWeightBold};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.typography.fontFamily};
`,M=n.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 1.25rem;
  padding: ${({theme:e})=>e.spacing.xs};
  line-height: 1;

  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,B=n.div`
  padding: ${({theme:e})=>e.spacing.lg};
  overflow-y: auto;
  font-family: ${({theme:e})=>e.typography.fontFamily};
  color: ${({theme:e})=>e.colors.text};
`,O=n.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.lg}`};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`;function p({isOpen:e,onClose:t,title:r,footer:s,children:$}){const d=i.useCallback(c=>{c.key==="Escape"&&(t==null||t())},[t]);return i.useEffect(()=>{if(e)return document.body.style.overflow="hidden",document.addEventListener("keydown",d),()=>{document.body.style.overflow="",document.removeEventListener("keydown",d)}},[e,d]),e?b.createPortal(o.jsx(j,{onClick:t,children:o.jsxs(v,{onClick:c=>c.stopPropagation(),children:[r?o.jsxs(k,{children:[o.jsx(w,{children:r}),t?o.jsx(M,{onClick:t,children:"×"}):null]}):null,o.jsx(B,{children:$}),s?o.jsx(O,{children:s}):null]})}),document.body):null}const L={title:"Components/Modal",component:p,args:{isOpen:!1,title:"Modal Title",children:"Modal content goes here."},argTypes:{isOpen:{control:"boolean"}}},a={render:e=>o.jsx(p,{...e})},l={render:()=>{const[e,t]=i.useState(!1),r=i.useCallback(()=>t(s=>!s),[]);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:r,children:"Open Modal"}),o.jsx(p,{isOpen:e,onClose:()=>t(!1),title:"Example Modal",footer:o.jsx(m,{onClick:()=>t(!1),children:"Close"}),children:o.jsx("p",{children:"This is an example modal with a title, body content, and a footer."})})]})}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Modal {...args} />
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(v => !v), []);
    return <>
        <Button onClick={toggle}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Example Modal" footer={<Button onClick={() => setOpen(false)}>Close</Button>}>
          <p>This is an example modal with a title, body content, and a footer.</p>
        </Modal>
      </>;
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const W=["Playground","WithButton"];export{a as Playground,l as WithButton,W as __namedExportsOrder,L as default};

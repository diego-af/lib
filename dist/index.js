"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Input: () => Input,
  Modal: () => Modal,
  Spinner: () => Spinner,
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(index_exports);

// src/theme/ThemeProvider.tsx
var import_styled_components = require("styled-components");

// src/theme/defaultTheme.ts
var defaultTheme = {
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    secondary: "#64748b",
    secondaryHover: "#475569",
    text: "#0f172a",
    textMuted: "#64748b",
    background: "#f8fafc",
    surface: "#ffffff",
    border: "#cbd5e1",
    error: "#dc2626",
    overlay: "rgba(15, 23, 42, 0.55)"
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSizeSm: "0.875rem",
    fontSizeMd: "1rem",
    fontSizeLg: "1.125rem",
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  radii: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px"
  },
  zIndex: {
    modal: 1e3,
    overlay: 999
  }
};

// src/theme/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function mergeTheme(theme) {
  if (!theme) return defaultTheme;
  return {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors
    },
    typography: {
      ...defaultTheme.typography,
      ...theme.typography
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme.spacing
    },
    radii: {
      ...defaultTheme.radii,
      ...theme.radii
    },
    zIndex: {
      ...defaultTheme.zIndex,
      ...theme.zIndex
    }
  };
}
function ThemeProvider({ theme, children }) {
  const mergedTheme = mergeTheme(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styled_components.ThemeProvider, { theme: mergedTheme, children });
}

// src/components/Spinner/Spinner.tsx
var import_styled_components3 = require("styled-components");

// src/components/Spinner/Spinner.styles.ts
var import_styled_components2 = __toESM(require("styled-components"));
var spin = import_styled_components2.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
var sizeMap = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.5rem "
};
var SpinnerRoot = import_styled_components2.default.span`
  display: inline-block;
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-top-color: ${({ $color }) => $color};
  animation: ${spin} 0.8s linear infinite;
`;

// src/components/Spinner/Spinner.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Spinner({ size = "md", color }) {
  const theme = (0, import_styled_components3.useTheme)();
  const resolvedColor = color ?? theme.colors.primary;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SpinnerRoot, { "aria-label": "loading", role: "status", $size: size, $color: resolvedColor });
}

// src/components/Button/Button.styles.ts
var import_styled_components4 = __toESM(require("styled-components"));
var sizeStyles = {
  sm: import_styled_components4.css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizeSm};
    border-radius: ${({ theme }) => theme.radii.sm};
  `,
  md: import_styled_components4.css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizeMd};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
  lg: import_styled_components4.css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSizeLg};
    border-radius: ${({ theme }) => theme.radii.md};
  `
};
var variantStyles = {
  primary: import_styled_components4.css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: import_styled_components4.css`
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondaryHover};
    }
  `,
  ghost: import_styled_components4.css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surface};
    }
  `
};
var ButtonRoot = import_styled_components4.default.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;

// src/components/Button/Button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...rest
}) {
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ButtonRoot, { $variant: variant, $size: size, disabled: isDisabled, ...rest, children: [
    loading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Spinner, { size: "sm", color: "currentColor" }) : null,
    children
  ] });
}

// src/components/Input/Input.tsx
var import_react = require("react");

// src/components/Input/Input.styles.ts
var import_styled_components5 = __toESM(require("styled-components"));
var Wrapper = import_styled_components5.default.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
var Label = import_styled_components5.default.label`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var FieldWrapper = import_styled_components5.default.div`
  position: relative;
`;
var StyledInput = import_styled_components5.default.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSizeMd};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.background};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
var ToggleButton = import_styled_components5.default.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  padding: 2px 4px;
  line-height: 1;
`;
var messageBase = import_styled_components5.css`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var HelperText = import_styled_components5.default.span`
  ${messageBase}
  color: ${({ theme }) => theme.colors.textMuted};
`;
var ErrorText = import_styled_components5.default.span`
  ${messageBase}
  color: ${({ theme }) => theme.colors.error};
`;

// src/components/Input/Input.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var inputIdCounter = 0;
function Input({
  label,
  error,
  helperText,
  id: externalId,
  type = "text",
  onChange,
  ...rest
}) {
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const generatedId = (0, import_react.useRef)(`input-${++inputIdCounter}`).current;
  const inputId = externalId ?? generatedId;
  const handleTogglePassword = (0, import_react.useCallback)(() => {
    setShowPassword((prev) => !prev);
  }, []);
  const resolvedType = type === "password" && showPassword ? "text" : type;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Wrapper, { children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label, { htmlFor: inputId, children: label }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(FieldWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        StyledInput,
        {
          id: inputId,
          type: resolvedType,
          $hasError: !!error,
          onChange,
          ...rest
        }
      ),
      type === "password" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleButton, { type: "button", onClick: handleTogglePassword, tabIndex: -1, children: showPassword ? "ocultar" : "mostrar" }) : null
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ErrorText, { role: "alert", children: error }) : null,
    !error && helperText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HelperText, { children: helperText }) : null
  ] });
}

// src/components/Modal/Modal.tsx
var import_react2 = require("react");
var import_react_dom = require("react-dom");

// src/components/Modal/Modal.styles.ts
var import_styled_components6 = __toESM(require("styled-components"));
var Overlay = import_styled_components6.default.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Container = import_styled_components6.default.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 32rem;
  width: 90%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
var Header = import_styled_components6.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
var Title = import_styled_components6.default.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSizeLg};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var CloseButton = import_styled_components6.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.25rem;
  padding: ${({ theme }) => theme.spacing.xs};
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
var Body = import_styled_components6.default.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;
var Footer = import_styled_components6.default.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// src/components/Modal/Modal.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Modal({ isOpen, onClose, title, footer, children }) {
  const handleKeyDown = (0, import_react2.useCallback)(
    (e) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose]
  );
  (0, import_react2.useEffect)(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Overlay, { onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Container, { onClick: (e) => e.stopPropagation(), children: [
      title ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Title, { children: title }),
        onClose ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CloseButton, { onClick: onClose, children: "\xD7" }) : null
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Body, { children }),
      footer ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Footer, { children: footer }) : null
    ] }) }),
    document.body
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input,
  Modal,
  Spinner,
  ThemeProvider
});
//# sourceMappingURL=index.js.map
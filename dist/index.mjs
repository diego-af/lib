// src/theme/ThemeProvider.tsx
import {
  ThemeProvider as StyledComponentsThemeProvider
} from "styled-components";

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
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(StyledComponentsThemeProvider, { theme: mergedTheme, children });
}

// src/components/Spinner/Spinner.tsx
import { useTheme } from "styled-components";

// src/components/Spinner/Spinner.styles.ts
import styled, { keyframes } from "styled-components";
var spin = keyframes`
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
var SpinnerRoot = styled.span`
  display: inline-block;
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-top-color: ${({ $color }) => $color};
  animation: ${spin} 0.8s linear infinite;
`;

// src/components/Spinner/Spinner.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Spinner({ size = "md", color }) {
  const theme = useTheme();
  const resolvedColor = color ?? theme.colors.primary;
  return /* @__PURE__ */ jsx2(SpinnerRoot, { "aria-label": "loading", role: "status", $size: size, $color: resolvedColor });
}

// src/components/Button/Button.styles.ts
import styled2, { css } from "styled-components";
var sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizeSm};
    border-radius: ${({ theme }) => theme.radii.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizeMd};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSizeLg};
    border-radius: ${({ theme }) => theme.radii.md};
  `
};
var variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondaryHover};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surface};
    }
  `
};
var ButtonRoot = styled2.button`
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
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...rest
}) {
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ jsxs(ButtonRoot, { $variant: variant, $size: size, disabled: isDisabled, ...rest, children: [
    loading ? /* @__PURE__ */ jsx3(Spinner, { size: "sm", color: "currentColor" }) : null,
    children
  ] });
}

// src/components/Input/Input.tsx
import { useState, useRef, useCallback } from "react";

// src/components/Input/Input.styles.ts
import styled3, { css as css2 } from "styled-components";
var Wrapper = styled3.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
var Label = styled3.label`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var FieldWrapper = styled3.div`
  position: relative;
`;
var StyledInput = styled3.input`
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
var ToggleButton = styled3.button`
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
var messageBase = css2`
  font-size: ${({ theme }) => theme.typography.fontSizeSm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var HelperText = styled3.span`
  ${messageBase}
  color: ${({ theme }) => theme.colors.textMuted};
`;
var ErrorText = styled3.span`
  ${messageBase}
  color: ${({ theme }) => theme.colors.error};
`;

// src/components/Input/Input.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const [showPassword, setShowPassword] = useState(false);
  const generatedId = useRef(`input-${++inputIdCounter}`).current;
  const inputId = externalId ?? generatedId;
  const handleTogglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  const resolvedType = type === "password" && showPassword ? "text" : type;
  return /* @__PURE__ */ jsxs2(Wrapper, { children: [
    label ? /* @__PURE__ */ jsx4(Label, { htmlFor: inputId, children: label }) : null,
    /* @__PURE__ */ jsxs2(FieldWrapper, { children: [
      /* @__PURE__ */ jsx4(
        StyledInput,
        {
          id: inputId,
          type: resolvedType,
          $hasError: !!error,
          onChange,
          ...rest
        }
      ),
      type === "password" ? /* @__PURE__ */ jsx4(ToggleButton, { type: "button", onClick: handleTogglePassword, tabIndex: -1, children: showPassword ? "ocultar" : "mostrar" }) : null
    ] }),
    error ? /* @__PURE__ */ jsx4(ErrorText, { role: "alert", children: error }) : null,
    !error && helperText ? /* @__PURE__ */ jsx4(HelperText, { children: helperText }) : null
  ] });
}

// src/components/Modal/Modal.tsx
import { useEffect, useCallback as useCallback2 } from "react";
import { createPortal } from "react-dom";

// src/components/Modal/Modal.styles.ts
import styled4 from "styled-components";
var Overlay = styled4.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Container = styled4.div`
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
var Header = styled4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
var Title = styled4.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSizeLg};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
var CloseButton = styled4.button`
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
var Body = styled4.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;
var Footer = styled4.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// src/components/Modal/Modal.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Modal({ isOpen, onClose, title, footer, children }) {
  const handleKeyDown = useCallback2(
    (e) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose]
  );
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  return createPortal(
    /* @__PURE__ */ jsx5(Overlay, { onClick: onClose, children: /* @__PURE__ */ jsxs3(Container, { onClick: (e) => e.stopPropagation(), children: [
      title ? /* @__PURE__ */ jsxs3(Header, { children: [
        /* @__PURE__ */ jsx5(Title, { children: title }),
        onClose ? /* @__PURE__ */ jsx5(CloseButton, { onClick: onClose, children: "\xD7" }) : null
      ] }) : null,
      /* @__PURE__ */ jsx5(Body, { children }),
      footer ? /* @__PURE__ */ jsx5(Footer, { children: footer }) : null
    ] }) }),
    document.body
  );
}
export {
  Button,
  Input,
  Modal,
  Spinner,
  ThemeProvider
};
//# sourceMappingURL=index.mjs.map
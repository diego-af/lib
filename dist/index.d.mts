import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
export { DefaultTheme } from 'styled-components';

interface LibThemeProviderProps {
    theme?: Partial<DefaultTheme>;
    children: ReactNode;
}
declare function ThemeProvider({ theme, children }: LibThemeProviderProps): JSX.Element;

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            primary: string;
            primaryHover: string;
            secondary: string;
            secondaryHover: string;
            text: string;
            textMuted: string;
            background: string;
            surface: string;
            border: string;
            error: string;
            overlay: string;
        };
        typography: {
            fontFamily: string;
            fontSizeSm: string;
            fontSizeMd: string;
            fontSizeLg: string;
            fontWeightNormal: number;
            fontWeightMedium: number;
            fontWeightBold: number;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        radii: {
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        zIndex: {
            modal: number;
            overlay: number;
        };
    }
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    children?: ReactNode;
}

declare function Button({ variant, size, loading, disabled, children, ...rest }: ButtonProps): JSX.Element;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
}

declare function Input({ label, error, helperText, id: externalId, type, onChange, ...rest }: InputProps): JSX.Element;

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    footer?: ReactNode;
    children: ReactNode;
}

declare function Modal({ isOpen, onClose, title, footer, children }: ModalProps): JSX.Element | null;

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

declare function Spinner({ size, color }: SpinnerProps): JSX.Element;

export { Button, type ButtonProps, Input, type InputProps, Modal, type ModalProps, Spinner, type SpinnerProps, ThemeProvider };

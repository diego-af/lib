import { useState, useRef, useCallback, type ChangeEvent } from 'react'
import {
  Wrapper,
  Label,
  FieldWrapper,
  StyledInput,
  ToggleButton,
  HelperText,
  ErrorText,
} from './Input.styles'
import type { InputProps } from './Input.types'

let inputIdCounter = 0

export function Input({
  label,
  error,
  helperText,
  id: externalId,
  type = 'text',
  onChange,
  ...rest
}: InputProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false)
  const generatedId = useRef(`input-${++inputIdCounter}`).current
  const inputId = externalId ?? generatedId

  const handleTogglePassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  const resolvedType = type === 'password' && showPassword ? 'text' : type

  return (
    <Wrapper>
      {label ? <Label htmlFor={inputId}>{label}</Label> : null}
      <FieldWrapper>
        <StyledInput
          id={inputId}
          type={resolvedType}
          $hasError={!!error}
          onChange={onChange}
          {...rest}
        />
        {type === 'password' ? (
          <ToggleButton type="button" onClick={handleTogglePassword} tabIndex={-1}>
            {showPassword ? 'ocultar' : 'mostrar'}
          </ToggleButton>
        ) : null}
      </FieldWrapper>
      {error ? <ErrorText role="alert">{error}</ErrorText> : null}
      {!error && helperText ? <HelperText>{helperText}</HelperText> : null}
    </Wrapper>
  )
}

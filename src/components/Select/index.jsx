import React, { useState } from "react";
import { theme } from "../Theme";

export default function SelectTipo({
  options,
  placeholder,
  styleSheet,
  ...props
}) {
  const [isFocused, setFocused] = useState(false);

  const baseStyle = {
    transition: "all 0.2s ease-in-out",
    outline: 0,
    fontSize: '16px',
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral['900'],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: "block",
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingRight: theme.space.x5,
    paddingLeft: theme.space.x5,
    paddingTop: theme.space.x3,
    paddingBottom: theme.space.x3,
    backgroundColor: theme.colors.neutral['000']
  };

  const focusStyle = isFocused
    ? {
        border: `1px solid ${theme.colors.primary[500]}`,
        boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
      }
    : {};

  return (

      <select
        style={{ ...baseStyle, ...focusStyle, ...styleSheet }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
   
  );
}

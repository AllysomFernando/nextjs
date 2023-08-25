import React from "react";
import { theme } from "../Theme";
import Text from "../Text";

export default function Input({ as, styleSheet, placeholder, ...props }) {
  const tag = "input";
  const finalStyleSheet = {
    transiton: "all 0.2s ease-in-out",
    outline: 0,
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral[900],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: "block",
    width: theme.space["x1/1"],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingRight: theme.space.x5,
    paddingLeft: theme.space.x5,
    paddingVertical: theme.space.x3,
    focus: {
      border: `1px solid ${theme.colors.primary[500]}`,
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
    },
    ...styleSheet,
  };

  return <Text as={tag} placeholder={placeholder} styleSheet={finalStyleSheet} {...props} />;
}
Input.defaultProps = {
  styleSheet: {},
};

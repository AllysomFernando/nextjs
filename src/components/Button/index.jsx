import React from "react";
import { theme } from "../Theme"
import Text from "../Text";

export default function Button({ as, styleSheet, ...props }) {
    const { buttonVariant = "primary", ...restStyleSheet } = styleSheet;
    const tag = "button";
  
    const finalStyleSheet = {
      cursor: "pointer",
      textVariant: theme.typography.variants.body2,
      color: theme.colors.neutral["000"],
      boxShadow: `0 5px 7px -5px ${theme.colors.neutral["999"]}43`,
      display: "block",
      outline: 0,
      width: theme.space["x1/1"],
      border: `${theme.space.xpx} solid ${theme.colors[buttonVariant][900]}`,
      borderRadius: theme.space.x4,
      paddingLeft: theme.space.x5,
      paddingRight: theme.space.x10,

      paddingVertical: theme.space.x3,
      transiton: "all 0.2s ease-in-out",
      backgroundColor: theme.colors[buttonVariant][600],
      hover: {
        backgroundColor: theme.colors[buttonVariant][500],
        boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}73`,
      },
      focus: {
        backgroundColor: theme.colors[buttonVariant][700],
        boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}93`,

      },
      ...restStyleSheet,
    };
  
    return <Text as={tag} styleSheet={finalStyleSheet} {...props} />;
  }
  
  Button.defaultProps = {
    styleSheet: {},
  };
  
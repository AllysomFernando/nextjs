import React from "react";
import Box from "../Box";

export default function Text({ as, styleSheet, ...props }) {
    const {
      textVariant = {
        fontSize: "inherit",
      },
      ...restStyleSheet
    } = styleSheet;
    const styleSheetUpdate = { ...textVariant, ...restStyleSheet };
    const tag = as || "span";
  
    return <Box as={tag} styleSheet={styleSheetUpdate} {...props} />;
  }
  Text.defaultProps = {
    styleSheet: {},
  };
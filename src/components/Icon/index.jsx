import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconSet from "@fortawesome/free-solid-svg-icons";

export function Icon({ as, styleSheet, ...props }) {
    const { iconVariant, ...restStyleSheet } = styleSheet;
    const styleSheetUpdate = restStyleSheet;
  
    console.log("iconVariant", iconVariant);
  
    return (
      <Box
        as={FontAwesomeIcon}
        icon={iconSet[`fa${capitalize(iconVariant)}`]}
        crossOrigin="anonymous"
        styleSheet={{
          width: "1.5ch",
          heigth: "1.5ch",
          ...styleSheetUpdate,
        }}
        {...props}
      />
    );
  }
import React from "react";

export function Image({ as, ...props }) {
    const Tag = as || "img";
  
    const { children, dangerouslySetInnerHtml, ...imageProps } = props;
    return <Box as={Tag} {...imageProps} />;
  }
  imageConfigDefault.defaultProps = {
    styleSheet: {},
  };
  
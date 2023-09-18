import React from "react";
import Box from "../Box";
export default function Image({ as, ...props }) {
  const Tag = as || "img";

  const { children, dangerouslySetInnerHtml, ...imageProps } = props;
  return <Box as={Tag} {...imageProps} />;
}
Image.defaultProps = {
  styleSheet: {},
};

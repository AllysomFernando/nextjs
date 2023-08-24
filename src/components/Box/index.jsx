import React from "react";
import { theme } from "../Theme";
import { rederCSS  } from "../../utils/function.js";

export default function Box({
  as,
  styleSheet: { focus, hover, srOnly, ...styleSheet },
  ...props
}) {
  const Tag = as || "div";

  return (
    <React.Fragment>
      <Tag
        {...props}
        className={`${props.className ? props.className : ""} ${
          srOnly ? "sr-only" : ""
        }`}
      />
      <style jsx>{`
        ${Tag} {
          ${rederCSS(styleSheet, "xs")}
        }
        ${Tag}:hover {
          ${rederCSS(hover, "xs")}
        }
        ${Tag}:focus {
          ${rederCSS(focus, "xs")}
        }
        @media screen and (min-width: ${theme.breakpoints[
            "Breakpoints.sm"
          ]}px) {
          ${Tag} {
            ${rederCSS(styleSheet, "sm")}
          }
          ${Tag}:hover {
            ${rederCSS(hover, "sm")}
          }
          ${Tag}:focus {
            ${rederCSS(focus, "sm")}
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            "Breakpoints.md"
          ]}px) {
          ${Tag} {
            ${rederCSS(styleSheet, "md")}
          }
          ${Tag}:hover {
            ${rederCSS(hover, "md")}
          }
          ${Tag}:focus {
            ${rederCSS(focus, "md")}
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            "Breakpoints.lg"
          ]}px) {
          ${Tag} {
            ${rederCSS(styleSheet, "lg")}
          }
          ${Tag}:hover {
            ${rederCSS(hover, "lg")}
          }
          ${Tag}:focus {
            ${rederCSS(focus, "lg")}
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            "Breakpoints.xl"
          ]}px) {
          ${Tag} {
            ${rederCSS(styleSheet, "xl")}
          }
          ${Tag}:hover {
            ${rederCSS(hover, "xl")}
          }
          ${Tag}:focus {
            ${rederCSS(focus, "xl")}
          }
        }
      `}</style>
    </React.Fragment>
  );
}

Box.defaultProps = {
  styleSheet: {},
};

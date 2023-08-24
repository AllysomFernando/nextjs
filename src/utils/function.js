export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCSSValue(cssPropName, cssPropValue) {
  if (cssPropName.includes("horinzontal")) {
    return `
              ${cssPropName.replace("horizontal", "left")}: ${cssPropValue};
              ${cssPropName.replace("horizontal", "right")}: ${cssPropValue}; 
          `;
  }
  if (cssPropName.includes("vertical")) {
    return `
              ${cssPropName.replace("vertical", "top")}: ${cssPropValue};
              ${cssPropName.replace("vertical", "bottom")}: ${cssPropValue}; 
          `;
  }

  return cssPropName + ":" + cssPropValue + ";";
}

export function rederCSS(props, currentBreakpoint) {
  if (!props) return "";

  return Object.keys(props)
    .map((props) => {
      const cssPropName = props
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();
      const cssPropValue = props[props];
      const isCssPropValueAnObject =
        Object.prototype.toString.call(cssPropValue) === "[object Object]";
      const currentCssPropValue = cssPropName[currentBreakpoint];

      if (currentBreakpoint == "xs" && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }
    })
    .filter(Boolean)
    .join("");
}

export function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: "auto",
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        },
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0,
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: "relative",
            lg: "absolute",
          },
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: "none",
            },
            position: "relative",
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: "auto",
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
          />
        </Box>
      </Box>
    </Box>
  );
}

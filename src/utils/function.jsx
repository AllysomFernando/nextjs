function capitalize(str) {
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
  
  function rederCSS(props, currentBreakpoint) {
    if (!props) return "";
  
    return Object.keys(props)
      .map((props) => {
        const cssPropName = prop
          .splite(/(?=[A-Z])/)
          .join("-")
          .toLowerCase();
        const cssPropValue = props[prop];
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
  
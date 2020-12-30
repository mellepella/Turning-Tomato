function createElement(type, options = {}) {
  const el = document.createElement(type);
  const { className = {}, parent, children, style, ...rest } = options;

  if (parent) {
    parent.appendChild(el);
  }

  if (children) {
    children.forEach((childDef) => {
      if (childDef instanceof HTMLElement) {
        return el.appendChild(childDef);
      }
      const [childType, childOptions] = childDef;
      createElement(childType, { ...childOptions, parent: el });
    });
  }

  if (style) {
    Object.entries(style).forEach(([property, value]) => {
      el.style[property] = value;
    });
  }

  Object.entries(className).forEach(([name, isEnabled]) => {
    el.classList.toggle(name, isEnabled);
  });

  Object.entries(rest).forEach(([key, value]) => {
    el[key] = value;
  });

  return el;
}

console.log("hello");
document.getElementById("btn").addEventListener("click", function () {
  const root = document.getElementById("root");
  const styles = getComputedStyles(root, "paddingTop", "10px");
  document.getElementById("solution").innerHTML = styles || "NOTHING";
});

function getComputedStyleForInput(property, style) {
  const div = document.createElement("div");
  div.style[property] = style;
  document.body.appendChild(div);
  const styles = window.getComputedStyle(div);
  const computedStyle = styles[property];
  document.body.removeChild(div);

  return computedStyle;
}

function getComputedStyles(element, property, style) {
  //   console.log(window.getComputedStyle(element));
  const result = [];

  const search = (element, property, style) => {
    // get all styles of that element
    const allStyles = window.getComputedStyle(element);
    //get our style
    const computedStyle = allStyles[property];
    console.log("computedStyle", computedStyle);
    //get computedStyleForInput
    const computedStyleInput = getComputedStyleForInput(property, style);
    if (computedStyle === computedStyleInput) {
      result.push(element);
    }
    for (let child of element.children) {
      console.log("child", child);
      search(child, property, style);
    }
  };

  search(element, property, style);

  return result;
}

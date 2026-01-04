// Input:
// const json = {
//   type: 'div',
//   props: { id: 'hello', class: "foo" },
//   children: [
//     {type:'h1', children: 'HELLO' },
//     {type:'p', children: [{type:'span', props: {class: "bar" }, children: 'World' }] }
//   ]
// };

// JSONtoHTML(json);

// Output:
// <div id="hello" class="foo">
//   <h1>HELLO</h1>
//   <p>
//      <span class="bar">World</span>
//   </p>
// </div>

const JSONtoHTML = (json) => {
  const domElement = document.createElement(json.type);
  const { props, children } = json;
  for (let key in props) {
    domElement.setAttribute(key, props[key]);
  }

  if (Array.isArray(children)) {
    for (let ele of children) {
      domElement.appendChild(JSONtoHTML(ele));
    }
  } else {
    domElement.innerText = children;
  }

  return domElement;
};

const json = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};
console.log("hi");
console.log(JSONtoHTML(json));
document.getElementById("root").replaceChildren(JSONtoHTML(json));

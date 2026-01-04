// Input:
// <div id="root">
//   <article>Prepare for interview</article>
//   <section>
//     on
//     <p>
//       <span>
//         Learnersbucket
//         <button>click me!</button>
//         <button id="target">click me!</button>
//       </span>
//     </p>
//   </section>
// </div>

// const root = document.getElementById("root");
// const target = document.getElementById("target");
// console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

const generateSelector = (root, target) => {
  const selectors = [];

  while (target !== root) {
    const nthChild = Array.from(target.parentNode.children).indexOf(target) + 1;
    const childName = `${target.tagName}:nth-child(${nthChild})`;
    selectors.unshift(childName);
    target = target.parentNode;
  }

  selectors.unshift(`${root.tagName}[id=${target.id}]`);

  return selectors.join(" > ");
};

const root = document.getElementById("root");
const target = document.getElementById("target");
console.log(generateSelector(root, target));

// Given an object with a cycle, remove the cycle or circular reference from it.

function removeCycle(obj) {
  const s = new WeakSet();
  const iterable_Obj = (newObj) => {
    for (let key in newObj) {
      const value = newObj[key];
      //   console.log(key, "  ", value);
      if (typeof value === "object") {
        if (s.has(value)) {
          console.log("found");
          delete newObj[key];
        } else {
          s.add(value);
          iterable_Obj(value);
        }
      }
    }
  };

  iterable_Obj(obj);
}

const List = function (val) {
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

removeCycle(item1);
console.log(item1);
console.log(item2);
console.log(item3);

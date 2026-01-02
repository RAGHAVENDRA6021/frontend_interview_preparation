classNames("foo", "bar"); // => 'foo bar'
classNames("foo", { bar: true }); // => 'foo bar'
classNames({ "foo-bar": true }); // => 'foo-bar'
classNames({ "foo-bar": false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'

const arr = ["b", { c: true, d: false }];
classNames("a", arr); // => 'a b c'

let buttonType = "primary";
classNames({ [`btn-${buttonType}`]: true });

function classNames(...params) {
  const result = [];
  for (let param of params) {
    if (typeof param === "object" && param) {
      // result.push(classNames(param));
      for (let key in param) {
        if (typeof param[key] === "object") result.push(classNames(param[key]));
        if(param[key]) result.push()
      }

      result.push(filteredKeys);
    } else if (param) {
      result.push(param);
    }
  }

  console.log(result.join(" "));
}

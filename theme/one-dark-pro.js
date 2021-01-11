// Figure out a way to run this after prism is done tokenizing the code
// instead of using setTimeout

setTimeout(() => {
  // Fix for JS - `this` keyword
  document
    .querySelectorAll(".language-javascript .token.keyword")
    .forEach((keyword) => {
      if (keyword.innerText === "this") {
        keyword.classList.add("this");
      }
    });

  // Fix for Go - `:=` and `<-` operators
  document
    .querySelectorAll(".language-go .token.operator")
    .forEach((operator) => {
      if (operator.innerText === ":=") {
        operator.classList.add("colon-equal");
      } else if (operator.innerText === "<-") {
        operator.classList.add("left-arrow");
      }
    });

  // Fix for CSS - prefixes
  document
    .querySelectorAll(".language-css .token.property")
    .forEach((property) => {
      if (property.innerText.startsWith("-")) {
        property.classList.add("prefix");
      }
    });
}, 200);

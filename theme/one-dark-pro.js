// Fix for JS's `this` keyword
// Run after prism.js is done
setTimeout(() => {
  const keywords = document.getElementsByClassName("keyword");
  for (const keyword of keywords) {
    if (keyword.innerText === "this") {
      keyword.classList.add("this");
    }
  }
}, 20);

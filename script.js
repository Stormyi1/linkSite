let links = document.getElementsByClassName("links");

const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

let childs = links[0].children;
async function test() {
    for (let i = 0; i < childs.length; i++) {
      let currChild = childs[i]
      currChild.addEventListener("mouseenter", (e) => {
          currChild.classList.remove("linkUnhover")
          currChild.classList.add("linkHover")
      })
      currChild.addEventListener("mouseleave", (e) => {
          currChild.classList.remove("linkHover")
          currChild.classList.add("linkUnhover")
      })
    }
}

test();

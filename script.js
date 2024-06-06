let links = document.getElementsByClassName("links");

let childs = links[0].children;
for (let i = 0; i < childs.length; i++) {
  let currChild = childs[i];
  currChild.addEventListener("mouseenter", (e) => {
    currChild.classList.remove("linkUnhover");
    currChild.classList.add("linkHover");
  });
  currChild.addEventListener("mouseleave", (e) => {
    currChild.classList.remove("linkHover");
    currChild.classList.add("linkUnhover");
  });
}

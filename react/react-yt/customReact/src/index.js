function customRender(reactElement, mainContainer){
    
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
  },
  children: "click me to visit google",
};

const mainContainer = document.getElementById("root");


customRender(reactElement, mainContainer)
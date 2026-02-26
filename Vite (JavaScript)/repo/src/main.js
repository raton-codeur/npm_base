import "./style.css";
import s from "./main.module.css";

document.querySelector("#app").innerHTML = `
  <div class="${s.root}">
    <h1 class="${s.title}">test</h1>
    <div class="${s.section}">blabla</div>
    <div class="${s.section}">blabla</div>
  </div>
`;

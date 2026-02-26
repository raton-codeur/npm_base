import "./style.css";
import s from "./main.module.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app not found");

app.innerHTML = `
  <div class="${s.root}">
    <h1 class="${s.title}">test</h1>
    <div class="${s.section}">blabla</div>
    <div class="${s.section}">blabla</div>
  </div>
`;

import { useState } from "react";
import s from "./App.module.css";

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.compteur}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function Section(props: { content: string }) {
  return <div className={s.section}>{props.content}</div>;
}

export default function App() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>test</h1>
      <Section content="section 1" />
      <Section content="section 2" />
      <Compteur />
    </div>
  );
}

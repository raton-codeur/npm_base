import { Outlet } from "react-router-dom";
import s from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={s.root}>
      <header className={s.header}>header</header>
      <Outlet />
      <footer className={s.footer}>footer</footer>
    </div>
  );
}

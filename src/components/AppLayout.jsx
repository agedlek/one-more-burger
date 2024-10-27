import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;

import { useEffect } from "react";
import styles from "./page.module.css";
import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      index page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Camera from "../components/camera";
import ShootingButton from "../components/shootingButton";


export default function Home() {
  return (
    <div className={styles.page}>
      <Camera/>
      <ShootingButton/>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Camera from "../components/camera";
import ShootingButton from "../components/shootingButton";
import SavingButton from "../components/savingButton";


export default function Home() {
  return (
    <div className={styles.page}>
      <Camera/>
      <ShootingButton/>
      <SavingButton/>
    </div>
  );
}

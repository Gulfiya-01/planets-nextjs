
import type { PlanetItem } from "@/types";
import styles from "@/styles/Footer.module.css";

type Props = {
  item: PlanetItem;
};

function Footer({ item }: Props) {
  function millisecondsToHours(milliseconds: number) {
    return (milliseconds / (1000 * 60 * 60));
  }

  function millisecondsToYears(milliseconds: number) {
    return (milliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2);
  }

  function centimetersToKilometers(centimeters: number) {
    return (centimeters / 100000).toFixed(2);
  }

  return (
    <section className={styles.footer}>
      <p className={styles.footerData}>
        <span className={styles.footerItem}>Rotation time:</span>{millisecondsToHours(item.rotation)} HOURS
      </p>
      <p className={styles.footerData}>
        <span className={styles.footerItem}>Revolution time:</span>{millisecondsToYears(item.revolution)} years
      </p>
      <p className={styles.footerData}>
        <span className={styles.footerItem}>Radius:</span>{centimetersToKilometers(item.radius)} km
      </p>
      <p className={styles.footerData}>
        <span className={styles.footerItem}>Temperature:</span>{item.temperature}°C
      </p>
    </section>
  );
}

export default Footer;

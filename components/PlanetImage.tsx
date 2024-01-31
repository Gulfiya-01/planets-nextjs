
import type { PlanetItem } from "@/types";
import Image from 'next/image';
import styles from "@/styles/PlanetImage.module.css";

type Props = {
  item: PlanetItem;
  selectedView: string;
};

const determineImageSrc = ({ item, selectedView }: Props)=> {
  const imageName = `planet-${item.name.toLowerCase()}`;

  if (selectedView === "overview" || selectedView === "geology") {
    return `assets/${imageName}.svg`; 
  }
  if (selectedView === "structure") {
    return `assets/${imageName}-internal.svg`; 
  }
  return ""; 
};

function PlanetImage({ item, selectedView }: Props) {
  return (
    <section className={styles.imageContainer}>
      <div className={styles.imageWrapper}>
        {selectedView === "geology" && (
          <>
            <Image
              className={styles.overviewImg} 
              src={determineImageSrc({ item, selectedView: "overview" })}
              alt={item.name}
              width={300} 
              height={300} 
            />
            <Image
              className={styles.geologyImg} 
              src={`/assets/geology-${item.name.toLowerCase()}.png`}
              alt={item.name}
              width={150} 
              height={150} 
            />
          </>
        )}

        {selectedView !== "geology" && (
          <Image
            className={styles.overviewImg} 
            src={determineImageSrc({ item, selectedView })}
            alt={item.name}
            width={300} 
            height={300} 
          />
        )}
      </div>
    </section>
  );
}

export default PlanetImage;

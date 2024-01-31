"use client"
import React, { useState } from 'react';
import type { PlanetItem } from "@/types";
import PlanetImage from "@/components/PlanetImage";
import Footer from '@/components/Footer';
import styles from "@/styles/Main.module.css";
type Props = {
  item: PlanetItem;
};

function Main({ item }: Props) {
  const [selectedView, setSelectedView] = useState<string>('overview');

  const handleButtonClick = (view: string) => {
    setSelectedView(view);
  }

  return (
    <div>
     <picture className={styles.picture}>
        <PlanetImage item={item} selectedView={selectedView} />
      </picture>
      <main className={styles.content}>
        <section className={styles.leftColumn}>
          <p className={styles.planetName}>{item.name}</p>
          <article className={styles.selectedContent}>
          {selectedView === 'overview' && (
            <>
              <p>{item.overview.content}</p>
              <p className={styles.source}>Source: <a href={item.overview.source}>Wiki</a></p>
            </>
          )}
          {selectedView === 'geology' && (
            <>
              <p>{item.geology.content}</p>
              <p className={styles.source}>Source: <a href={item.geology.source}>Wiki</a></p>
            </>
          )}
          {selectedView === 'structure' && (
            <>
              <p>{item.structure.content}</p>
              <p className={styles.source}>Source: <a href={item.structure.source}>Wiki</a></p>
            </>
          )}
        </article>
      </section>

      <section className={styles.rightColumn}>
          <div className={styles.btnMain}>
            <button className={styles.contentBtn} onClick={() => handleButtonClick('overview')}>
              <span className={styles.btnNumber}>01</span>OVERVIEW
            </button>
            <button className={styles.contentBtn} onClick={() => handleButtonClick('structure')}>
              <span className={styles.btnNumber}>02</span>INTERNAL STRUCTURE
            </button>
            <button className={styles.contentBtn} onClick={() => handleButtonClick('geology')}>
              <span className={styles.btnNumber}>03</span>SURFACE GEOLOGY
            </button>
        </div>
      </section>
    </main>
 <footer>
 <Footer item={item} /> 
</footer>
</div>
 
  );
}

export default Main;

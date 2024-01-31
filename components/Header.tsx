import Link from "next/link";
import styles from "@/styles/Header.module.css";
import type {PlanetData} from "@/types";
type Props={
    planets:PlanetData[];
}
async function Header({planets}:Props){

   
        return (
            <header>
            <nav className={styles.navbar}>
              <div className={styles.logoContainer}>
                <h2 className={styles.h2}>THE PLANETS</h2>
              </div>
              <ul className={styles.planetList}>
                {planets.map(({ id, name }) => (
                  <li key={id} className={styles.planetItem}>
                    <span className={styles.list}>
                      <Link className="a" href={`/${id}`}>{name}</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        
         
         )
      } 


export default Header;
import type { PlanetItem } from "@/types";
import Main from "@/components/Main";

async function Planet({ params }: { params: { planetId: string } }) {
 

  try {
    const res = await fetch(`http://localhost:8081/api/v1/planets/${params.planetId}`);

    if (!res.ok) {
      await Promise.reject(new Error(`${res.status}`));
    }

    const item: PlanetItem = await res.json();

    return <Main item={item} />;
  } catch (e) {
    console.log(e);
  
  
  }
 
}

export default Planet;


import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import type {Planets} from "@/types";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  
  try { 
    const res = await fetch('http://localhost:8081/api/v1/planets',{cache: `no-store`}); 
    if (!res.ok){
      await Promise.reject(new Error(`${res.status}`));
    }
    const data:Planets = await res.json(); 
   
  return(
    <html lang="en">
      <body className={inter.className}>
        <Header planets={data.data}/>
        {children}
        </body>
    </html>
    
  );
  
  }catch (error) { 
    console.error('Error fetching planets:', error); 
    return []; 
  } 

}


import { redirect } from "next/navigation";


export default async function Home() {

const defaultId = "01";

redirect (`/category/${defaultId}`)  

}

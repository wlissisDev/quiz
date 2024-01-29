import { Link, useSearchParams } from "react-router-dom";

export function Home(){
   
    return(
        <div>
            <h1>home</h1>
            <Link  to={`quiz?category=carros`}>Go Quiz Carros!</Link>
            <Link  to={`quiz?category=comida`}>Go Quiz Comidas!</Link>
            <Link  to={`quiz?category=futebol`}>Go Quiz Futebol!</Link>
        </div>
    )
}
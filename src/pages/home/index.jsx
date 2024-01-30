import { Link, useSearchParams } from "react-router-dom";

export function Home(){
   
    return(
        <div>
            <h1>home</h1>
            <Link  to={`quiz?select=`}>Go Quiz!</Link>
        </div>
    )
}
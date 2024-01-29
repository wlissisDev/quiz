import { Link,useSearchParams } from "react-router-dom";

export function Quiz(){
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    return(
        <div>
            <h1>Quiz {category}</h1>
            <Link to={'/'}>Go Home!</Link>

        </div>
    )
}
import { Link, useSearchParams } from "react-router-dom";

import styles from './style.module.css';

export function Answer({ item, content, correct, setCorrectAnswer }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const select = searchParams.get('select');
    return (
        <div
            onClick={() => {
                setSearchParams({ 'select': item });
                setCorrectAnswer(correct)
            }}
            className={styles.answer}
            style={{
                backgroundColor: select == item ? "aliceblue" : ""
            }}
        >
            <span
                style={{
                    backgroundColor: select == item ? "rgb(57, 91, 120)" : "",
                    color: select == item ? "aliceblue" : ""
                }}
            >{item}</span>
            <p
                style={{
                    color: select == item ? "rgb(57, 91, 120)" : ""
                }}
            >{content}</p>
        </div>
    )
}
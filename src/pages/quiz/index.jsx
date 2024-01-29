import { Link, useSearchParams } from "react-router-dom";
import { Answer } from "../../components/answer";

import styles from './style.module.css';


export function Quiz() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <div>
                    <span>Questão 1 de 10</span>
                    <p>Pergunta sobre qualquer coisa</p>
                </div>
                <span className={styles.progress}><div></div></span>

            </div>
            <div className={styles.answers}>
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </div>

        </div>
    )
}
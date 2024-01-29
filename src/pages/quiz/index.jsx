import { Answer } from "../../components/answer";

import styles from './style.module.css';


export function Quiz() {

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
                <Answer item='A'/>
                <Answer item='B'/>
                <Answer item='C'/>
                <Answer item='D'/>
            </div>

        </div>
    )
}
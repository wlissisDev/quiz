import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/ContextProvider"

import styles from './style.module.css';


export function Score() {
    const { point, setPoint } = useContext(Context)

    return (
        <div className={styles.container}>
            <div>
                <h1>Quiz Finalizado</h1>
                <h2>Essa é sua pontuação...</h2>
            </div>
            <div className={styles.point}>
                <span>{point}</span>
                <Link 
                to={'/'}
                className={styles.btn}
                onClick={() => {
                    setPoint(0);
                }}>Novo jogo</Link>
            </div>
        </div>

    )
}
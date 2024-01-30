import { Link, useSearchParams } from "react-router-dom";
import styles from './style.module.css';
import { useContext } from "react";
import { Context } from "../../contexts/ContextProvider";
export function Home() {

    const { api } = useContext(Context)

    return (
        <div className={styles.container}>
            <h1>Bem vindo ao Quiz sobre Tecnologia</h1>
            <h2>Escolha um assunto para começar!</h2>
            <div className={styles.options}>
                <Link
                    className={styles.option}
                    to={"quiz?select="}
                    onClick={() => api("linux")}
                >
                    Linux
                </Link>
                <Link
                    className={styles.option}
                    to={"quiz?select="}
                    onClick={() => api('php')}
                >
                    Programação
                </Link>
                <Link
                    className={styles.option}
                    to={"quiz?select="}
                    onClick={() => api('docker')}
                >
                    Docker
                </Link>
            </div>
        </div>
    )
}
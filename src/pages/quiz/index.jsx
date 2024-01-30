import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from '../../contexts/ContextProvider'

import { Answer } from "../../components/answer";


import styles from './style.module.css';


export function Quiz() {

    const data = JSON.parse(localStorage.getItem('data'));



    const [nextQuestion, setNextQuestion] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);

    const { setPoint, point } = useContext(Context)
    const navigate = useNavigate();
    const [searchParams, setUseSearchParams] = useSearchParams();

    const selectedItem = searchParams.get('select');

    function next() {
        if (nextQuestion == 9) {
            navigate("/score")
            setNextQuestion(0);
        } else {
            setNextQuestion(nextQuestion + 1)
            //reseta item selecionado
            setUseSearchParams({ 'select': "" })
        }
    }

    function addPoint() {
        if (correctAnswer == "true") {
            setPoint(point + 1);
            console.log("acertou")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <div>
                    <span>Questão {nextQuestion + 1} de 10</span>
                    <p>{data[nextQuestion].question}</p>
                </div>
                <span className={styles.progress}>
                    <div style={{
                        width:`${nextQuestion}0%`
                    }}></div>
                </span>

            </div>
            <div className={styles.answers}>
                <Answer
                    item='A'
                    content={data[nextQuestion].answers.answer_a}
                    correct={data[nextQuestion].correct_answers.answer_a_correct}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='B'
                    content={data[nextQuestion].answers.answer_b}
                    correct={data[nextQuestion].correct_answers.answer_b_correct}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='C'
                    content={data[nextQuestion].answers.answer_c}
                    correct={data[nextQuestion].correct_answers.answer_c_correct}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='D'
                    content={data[nextQuestion].answers.answer_d}
                    correct={data[nextQuestion].correct_answers.answer_d_correct}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <button
                    //desativa o botao se item nao tiver selecionado
                    style={{
                        pointerEvents: selectedItem == "" ? "none" : "",
                        opacity: selectedItem == "" ? ".3" : ""
                    }}
                    onClick={() => {
                        next();
                        addPoint();
                        setCorrectAnswer(false);
                    }}>Confirmar</button>
            </div>

        </div>
    )
}
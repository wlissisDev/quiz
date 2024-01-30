import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from '../../contexts/ContextProvider'

import { Answer } from "../../components/answer";


import styles from './style.module.css';


export function Quiz() {

    const data = [
        {
            question: 'Questao numero 1',
            correct_answer: {
                correct_a_answer: false,
                correct_b_answer: true,
                correct_c_answer: false,
                correct_d_answer: false,
            },
            answer: {
                answer_a: 'item a1',
                answer_b: 'item b1',
                answer_c: 'item c1',
                answer_d: 'item d1',
            }
        },
        {
            question: 'Questao numero 2',
            correct_answer: {
                correct_a_answer: false,
                correct_b_answer: false,
                correct_c_answer: false,
                correct_d_answer: true,
            },
            answer: {
                answer_a: 'item a2',
                answer_b: 'item b2',
                answer_c: 'item c2',
                answer_d: 'item d2',
            }
        },

    ]

    const [nextQuestion, setNextQuestion] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);

    const { setPoint, point } = useContext(Context)
    const navigate = useNavigate();
    const [searchParams, setUseSearchParams] = useSearchParams();

    const selectedItem = searchParams.get('select');

    function next() {
        if (nextQuestion == 1) {
            navigate("/score")
            setNextQuestion(0);
        } else {
            setNextQuestion(nextQuestion + 1)
            //reseta item selecionado
            setUseSearchParams({ 'select': "" })
        }
    }

    function addPoint() {
        if (correctAnswer == true) {
            setPoint(point + 1);
        }
    }
    
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
                <Answer
                    item='A'
                    content={data[nextQuestion].answer.answer_a}
                    correct={data[nextQuestion].correct_answer.correct_a_answer}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='B'
                    content={data[nextQuestion].answer.answer_b}
                    correct={data[nextQuestion].correct_answer.correct_b_answer}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='C'
                    content={data[nextQuestion].answer.answer_c}
                    correct={data[nextQuestion].correct_answer.correct_c_answer}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <Answer
                    item='D'
                    content={data[nextQuestion].answer.answer_d}
                    correct={data[nextQuestion].correct_answer.correct_d_answer}
                    setCorrectAnswer={setCorrectAnswer}
                />
                <button
                //desativa o botao se item nao tiver selecionado
                    style={{
                        pointerEvents:selectedItem==""? "none":"",
                        opacity:selectedItem==""? ".3":""
                    }}
                    onClick={() => {
                        next();
                        addPoint();
                        setCorrectAnswer(false);
                        console.log(selectedItem)
                    }}>Confirmar</button>
            </div>

        </div>
    )
}
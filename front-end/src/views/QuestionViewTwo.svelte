<div>
    <div class="question-text">{question.text}</div> 
    {#if showAnswers === false}
        {#if startTimer === false && answerWasClicked === false}
            <div class="button-container">
                <button class="show-answers" on:click|once={() => showAnswers = true}>Arată variantele de răspuns</button>
                <button class="timer-button" on:click|once={() => { startTimer = true; finalTime = Date.now() + 60000; }}>Start</button>
            </div>
        {:else if startTimer === true}
            <div class="timer-no-option {timerColor}">
            { (!time && time !== 0) ? "01:00" : Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) !== 0 
                    ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString() 
                    : "00" 
                    + ":" + (Math.floor((time % (1000 * 60)) / 1000) < 10 
                        ? "0" + Math.floor((time % (1000 * 60)) / 1000).toString() 
                        : Math.floor((time % (1000 * 60)) / 1000).toString())
            }
            </div>
        {/if}
        {#if time <= 0}
            {#if showCorrectAnswer === false}
                <button class="show-correct-button" on:click|once={() => { showCorrectAnswer = true; answerWasClicked = true; startTimer = false;}}>Arată răspunsul corect</button>
            {:else}
                <div class="correct-answer">{question.possibleAnswers.find((answer) => answer.correct === true)?.text.substring(3)}</div>
                <button class="back-button" on:click={goBack}>
                    Înapoi la întrebări
                </button>
            {/if}
        {/if}
    {/if}
    {#if showAnswers === true}
        <div class="answer-container">
            {#each question.possibleAnswers as answer}
                <AnswerButton 
                    disabled={ (!time || time > 0) && time !== 0 } 
                    answer={answer} 
                    wrongAnswerChosen={showCorrectAnswer} 
                    on:wrongAnswer={showCorrect}
                    on:answerClicked={handleAnswerClick}
                />
            {/each}
        </div>
        {#if startTimer === false && answerWasClicked === false}
            <button class="timer-single-button" on:click|once={() => { startTimer = true; finalTime = Date.now() + 5000; }}>Start</button>
        {:else if startTimer === true}
        <div class="timer {timerColor}">
            { !time && time !== 0 
                ? "01:00" 
                : ((Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) !== 0 
                    ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString() 
                    : "00") 
                    + ":" + (Math.floor((time % (1000 * 60)) / 1000) < 10 
                        ? "0" + Math.floor((time % (1000 * 60)) / 1000).toString() 
                        : "00"))
            }
        </div>
        {/if}
        {#if answerWasClicked === true }
            <button class="back-button" on:click={goBack}>
                Înapoi la întrebări
            </button>
        {/if}
    {/if}
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { type Question } from "../../../common/types";
    import AnswerButton from "../components/AnswerButton.svelte";

    export let question: Question;
    const dispatch = createEventDispatcher();
    let showAnswers = false;
    let showCorrectAnswer = false;
    let startTimer = false;
    let answerWasClicked = false;
    let finalTime: number;
    let timerColor = "white";
    let time = 60000;
    let timer = setInterval(() => {
        let now = Date.now();
        time = finalTime - now;

        if(time < 0) {
            timerColor = timerColor === "red" ? "white" : "red";
            time = 0;
        }
    }, 1000);

    let colorChanger = setInterval(() => {
        if(time <= 0) {
            timerColor = timerColor === "timer-red" ? "" : "timer-red";
            time = 0;
        }
    }, 500);

    function showCorrect() {
        showCorrectAnswer = true
    }

    function handleAnswerClick() {
        answerWasClicked = true;
        startTimer = false;
    }

    function goBack() {
        question.completed = true;
        dispatch("back", {});
    }
</script>

<style>
    .question-text {
        width: 1400px;
        height: 104px;
        margin: 393px auto 0px auto;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 56px;
        color: #FFF;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0px 100px;
    }

    .show-answers, .timer-button, .show-correct-button {
        width: 661px;
        height: 108.56px;
        display: flex;
        margin-top: 58px;
        font-family: "League Spartan", sans-serif;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 15.82px;
        border-color: #CC7325;
        background-color: #CC7325;
        color: #fff;
        transition: background-color 0.1s ease;
    }

    .show-answers:hover, .timer-button:hover, .timer-single-button:hover, .show-correct-button:hover, .back-button:hover {
        background-color: #CC6000;
    }

    .answer-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100vw;
        margin: 57px 0px auto 0px;
        box-sizing: border-box;
        gap: 12.45px;
    }

    .timer-single-button {
        width: 215px;
        height: 108.56px;
        display: flex;
        margin: 56.7px auto 0px auto;
        font-family: "League Spartan", sans-serif;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 15.82px;
        border-color: #CC7325;
        background-color: #CC7325;
        color: #fff;
        transition: background-color 0.1s ease;
    }

    .show-correct-button {
        margin: 32px auto 0px auto;
    }

    .correct-answer {
        width: 900px;
        height: 80.93px;
        display: flex;
        margin: 76px auto 0px auto;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 18.67px;
        background-color: #DAC58C;
        color: #000;
    }

    .back-button {
        width: 661px;
        height: 108.56px;
        display: flex;
        margin: 56.7px auto 0px auto;
        font-family: "League Spartan", sans-serif;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 15.82px;
        border-color: #CC7325;
        background-color: #CC7325;
        color: #fff;
        transition: background-color 0.1s ease;
    }

    .timer, .timer-no-option {
        width: 147px;
        height: 39px;
        display: flex;
        margin: 106.7px auto auto auto;
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: #F6CA00;
    }

    .timer-no-option {
        width: 215px;
        margin: 0px auto 0px auto;
        position: absolute;
        top: 924px;
        left: 853px;
        font-size: 80px;
    }

    .timer-red {
        color: red;
    }

</style>

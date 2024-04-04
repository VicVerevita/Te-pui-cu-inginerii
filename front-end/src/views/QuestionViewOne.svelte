<div class="domain-name">{domain.name}</div>
<div class="question-name">{question.text}</div> 
{#if showAnswers === false}
    <button class="show-options" on:click|once={() => showAnswers = true}>Arată variantele de răspuns</button>
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
        <button 
            class="timer-button" 
            on:click|once={() => { startTimer = true; finalTime = Date.now() + 60000; }}
        >
            Start
        </button>
    {:else if startTimer === true}
        <div class="timer {timerColor}">
            { (!time && time !== 0) ? "01:00" : Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) !== 0 
                    ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString() 
                    : "00" 
                    + ":" + (Math.floor((time % (1000 * 60)) / 1000) < 10 
                        ? "0" + Math.floor((time % (1000 * 60)) / 1000).toString() 
                        : Math.floor((time % (1000 * 60)) / 1000).toString())
            }
        </div>
    {/if}
    {#if answerWasClicked === true }
        <button class="back-button" on:click={goBack}>
            Înapoi la domenii
        </button>
    {/if}
{/if}

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { type Domain, type DomainQuestion } from "../../../common/types";
    import AnswerButton from "../components/AnswerButton.svelte";

    export let domain: Domain;
    let question: DomainQuestion = domain.domainQuestion;
    const dispatch = createEventDispatcher();
    let showAnswers = false;
    let startTimer = false;
    let answerWasClicked = false;
    let showCorrectAnswer = false;
    let finalTime: number;
    let timerColor = "white";
    let time = 60000;
    let timer = setInterval(() => {
        let now = Date.now();
        time = finalTime - now;

        if(time < 0) {
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
        domain.completed = true;
        dispatch("back", {});
    }
</script>

<style>
    .domain-name {
        width: 700px;
        height: 100px;
        margin: 355px auto 0px auto;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 52px;
        font-weight: 600;
        background-color: #AA649F;
        border: 2px solid #516AA6;
        border-radius: 15px;
        color: #F6CA00;
    }

    .question-name {
        width: 1400px;
        height: 104px;
        margin: 57px auto 0px auto;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 56px;
        color: #FFF;
    }

    .show-options {
        width: 661px;
        height: 108.56px;
        display: flex;
        margin: 127px auto 0px auto;
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

    .show-options:hover {
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

    .timer-button {
        width: 215px;
        height: 108.56px;
        display: flex;
        margin: 56.7px auto auto auto;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 15.82px;
        border-color: none;
        background-color: #CC7325;
        color: white;
    }

    .timer-button:hover {
        background-color: #CC6000;
    }

    .timer {
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

    .timer-red {
        color: red;
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
</style>


<div>
    <button class="{buttonClickedColor} button" disabled={disabled} on:click|once={handleClick}>{answer.text}</button>
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Answer } from "../../../common/types";

    export let answer: Answer;
    export let wrongAnswerChosen: boolean;
    export let disabled: boolean;
    const dispatch = createEventDispatcher();
    let buttonClickedColor = "";
    
    $: if(wrongAnswerChosen === true && answer.correct === true) {
        blink("green");
    }

    function handleClick() {
        dispatch("answerClicked", {});
        if(answer.correct) {
            blink("green");
        } else {
            blink("red");
            dispatch("wrongAnswer", {});
        }
    }

    function blink(color: string) {
        let blink = 0;
        let x = setInterval(() => {
            buttonClickedColor = buttonClickedColor === "" ? color : "";
            blink += 1;
            if(blink > 6) {
                clearInterval(x);
                buttonClickedColor = color;
            }
        }, 200)
    }
</script>

<style>
    .button {
        display: inline-block;
        width: 747px;
        height: 80.93px;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: none;
        border-radius: 18.67px;
        background-color: #DAC58C;
        color: black;
        transition: background-color 0.1s ease;
    }

    .button:disabled {
        cursor: not-allowed;
    }

    .button:not(:disabled):active {
        background-color: #333;
        color: fff;
    }

    .button:not(:disabled):not(.red):not(.green):hover {
        background-color: #E1BD59;
    }
    
    .green {
        background-color: #69E367;
    }

    .red {
        background-color: #FF1E26;
    }
</style>

{#if showQuestions === true}
    <div class="container">
        {#each $questions as question}
            <QuestionButton bind:question={question} on:questionClicked={handleQuestionClicked}/>
        {/each}
    </div>
{:else}
    <QuestionViewTwo question={clickedQuestion} on:back={handleQuestionAnswered}/>
{/if}

<script lang="ts">
    import { questions } from "../store/store.ts"
    import QuestionButton from "../components/QuestionButton.svelte";
    import type { Question } from "../../../common/types.ts";
    import QuestionViewTwo from "./QuestionViewTwo.svelte";

    let showQuestions: boolean = true;
    let clickedQuestion: Question;

    function handleQuestionClicked(event: CustomEvent) {
        clickedQuestion = event.detail.question;

        showQuestions = false;
    }

    function handleQuestionAnswered() {
        showQuestions = true;
    }
</script>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 303px auto 0px auto;
        gap: 50px 200px;
    }
</style>

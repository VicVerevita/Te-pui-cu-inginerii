<script lang="ts">
    import { domains, questions } from "./store/store.ts"
    import background from './lib/background.svg'
    import DomainView from "./views/DomainView.svelte"
    import DomainViewTwo from "./views/DomainViewTwo.svelte";
    import LandingView from "./views/LandingView.svelte";
    import FinalView from "./views/FinalView.svelte";
    import './styles.css'
    
    let roundNumber = 0;

    domains.subscribe((values) => {
        let completed = true;
        values.forEach((domain) => {
            if (domain.completed === false) {
                completed = false;
            }
        })
        if(completed === true) {
            roundNumber = 2;
        }
    });

    questions.subscribe((values) => {
        let completed = true;
        values.forEach((question) => {
            if(question.completed === false) {
                completed = false;
            }
        })
        if(completed === true) {
            roundNumber = 3;
        }
    });
    
    window.addEventListener("keydown", onKeyPressed);

    function onKeyPressed(e: KeyboardEvent) {
        switch(e.key) {
            case "1":
                roundNumber = 0;
                break;
            case "2":
                roundNumber = 1;
                break;
            case "3":
                roundNumber = 2;
                break;
            case "4":
                roundNumber = 3;
                break;
        }
    }
</script>

<div 
    class="background"
    style="background-image:
    url({background})"
    >
</div>
{#if roundNumber === 0}
    <LandingView on:start={() => roundNumber = 1}/>
{:else if roundNumber === 1}
    <DomainView />
{:else if roundNumber === 2}
    <DomainViewTwo />
{:else if roundNumber === 3}
    <FinalView />
{/if}

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background-size: cover;
        background-position: center;
    }
</style>


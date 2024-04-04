{#if showDomains === true}
    <div class="container-domains">
        {#each $domains as domain}
            <DomainButton bind:domain={domain} on:domainClicked={handleDomainClicked}/>
        {/each}
    </div>
{/if}
{#if showDomains === false}
    <div>
        <QuestionViewOne domain={clickedDomain} on:back={handleQuestionAnswered}/>
    </div>
{/if}

<script lang="ts">
    import { domains } from "../store/store.ts"
    import DomainButton from "../components/DomainButton.svelte"
    import { type Domain } from "../../../common/types.ts";
    import QuestionViewOne from "./QuestionViewOne.svelte";

    let showDomains: boolean = true;
    let clickedDomain: Domain;

    function handleDomainClicked(event: CustomEvent) {
        clickedDomain = event.detail.domain;

        showDomains = false;
    }

    function handleQuestionAnswered() {
        showDomains = true;
    }
</script>

<style>
    .container-domains {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 303px auto 105px auto;
        gap: 50px 200px;
    }
</style>

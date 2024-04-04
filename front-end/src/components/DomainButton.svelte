<div>
    <button disabled={domain.completed} class="button" on:click|once={handleClick}>{domain.name}</button>
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Domain } from "../../../common/types";

    export let domain: Domain;
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("domainClicked", {
            domain: domain,
        });
    }
</script>

<style>
    .button {
        display: inline-block;
        width: 700px;
        height: 100px;
        font-family: "League Spartan", sans-serif;
        font-size: 52px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        border: 2px solid #516AA6;
        border-radius: 15px;
        cursor: pointer;
        background-color: #AA649F;
        color: #F6CA00;
        transition: background-color 0.3s ease;
    }

    .button:disabled {
        background-color: #4B4B4B; 
        color: #A8A8A8;
        border-color: #516AA6; 
        cursor: not-allowed; 
    } 

    .button:not(:disabled):active {
        background-color: #6E64AA;
        color: #F6CA00;
    }

    .button:not(:disabled):hover {
        background-color: #6E64AA;
    }
</style>


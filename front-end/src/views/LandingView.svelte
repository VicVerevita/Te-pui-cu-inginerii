<div class="org-text">Asociația Studenților din Politehnica</div>
<div class="welcome-text">Bine ați venit!</div>
<button class="start-button" on:click={handleClick}>Start</button>
<div class="logo" style="background-image: url({aspoli})"></div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import aspoli from "../lib/aspoli.svg"

    let dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("start", {});
    }
</script>

<style>
    .org-text {
        height: 80px;
        width: 1263px;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 297px auto 0px auto;
        font-size: 40px;
        font-weight: 600;
        color: #F6CA00;
    }

    .welcome-text {
        height: 80px;
        width: 1263px;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 76px auto 0px auto;
        font-size: 60px;
        font-weight: 600;
        color: #F6CA00;
    }

    .start-button {
        width: 359.07px;
        height: 106.56px;
        display: flex;
        margin: 98px auto 0px auto;
        font-family: "League Spartan", sans-serif;
        font-size: 50px;
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

    .start-button:hover {
        background-color: #CC6000;
    }

    .logo {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: cover;
        background-position: center;
    }
</style>

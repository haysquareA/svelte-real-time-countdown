<script>
    import { onMount, onDestroy } from 'svelte';
  
    export let targetDate;
  
    let interval;
  
    let remainingTime = calculateTimeRemaining();
  
    function calculateTimeRemaining() {
      const totalSeconds = Math.floor((new Date(targetDate) - new Date()) / 1000);
  
      const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
      const months = Math.floor((totalSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
      const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);
  
      return { years, months, days, hours, minutes, seconds };
    }
  
    function tick() {
      remainingTime = calculateTimeRemaining();
    }
  
    onMount(() => {
      interval = setInterval(tick, 1000);
    });
  
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  {#if remainingTime.years > 0}
    <p>{remainingTime.years} years, {remainingTime.months} months, {remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
  {:else if remainingTime.months > 0}
    <p>{remainingTime.months} months, {remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
  {:else if remainingTime.days > 0}
    <p>{remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
  {:else if remainingTime.hours > 0}
    <p>{remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
  {:else if remainingTime.minutes > 0}
    <p>{remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
  {:else}
    <p>{remainingTime.seconds} seconds</p>
  {/if}
  
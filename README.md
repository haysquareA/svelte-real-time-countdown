# Countdown Component

The Countdown component is a real-time countdown timer built with SvelteKit. It allows you to display the remaining time between the current date/time and a target date/time in years, months, days, hours, minutes, and seconds.

## Installation

You can install the Countdown component via npm:

```bash
npm i svelte-realtime-countdown


Usage
Import the Countdown component into your SvelteKit project and use it as follows:

<script>
  import Countdown from 'svelte-realtime-countdown';
</script>

<Countdown targetDate="{new Date('2024-12-31T23:59:59')}"/>


Props
The Countdown component accepts the following prop:

targetDate (required): A Date object representing the target date and time for the countdown.
Example


<script>
  import Countdown from 'svelte-realtime-countdown';
</script>

<h1>Countdown to New Year 2025</h1>
<Countdown targetDate="{new Date('2024-12-31T23:59:59')}"/>


Output
The Countdown component will continuously update to display the remaining time until the target date and time. It will show the remaining time in years, months, days, hours, minutes, and seconds.

Styling
You can style the Countdown component as per your project's requirements using CSS.

Note
The Countdown component relies on JavaScript's setInterval function to update the remaining time in real-time. Make sure to handle any potential performance concerns, especially if using multiple Countdown components on a single page.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Support and Contribution
For support or to contribute to this project, please visit GitHub repository.
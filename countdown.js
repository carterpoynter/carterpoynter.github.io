const events = [
    { name: "vs. Rangers", date: new Date("2024-11-06T20:45:00").getTime() },
    { name: "vs. Green Hornets", date: new Date("2024-11-13T22:15:00").getTime() },
    { name: "vs. Kraken Beers", date: new Date("2024-11-20T22:15:00").getTime() },
    { name: "vs. Trash Pandas", date: new Date("2024-12-03T20:45:00").getTime() }
    // Add more events as needed
];

let currentIndex = 0;
let countdownInterval;

function formatTime(date) {
    const options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    return date.toLocaleString("en-US", options);
}

function updateCountdown() {
    const now = new Date().getTime();
    let currentEvent = events[currentIndex];

    if (!currentEvent || currentEvent.date <= now) {
        currentIndex++; // Move to the next event
        if (currentIndex < events.length) {
            currentEvent = events[currentIndex];
        } else {
            document.getElementById("event-info").innerHTML = "No upcoming games";
            clearInterval(countdownInterval); // Clear the interval
            return;
        }
    }

    const timeUntilEvent = currentEvent.date - now;
    const days = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilEvent % (1000 * 60)) / 1000);

    // Get the day of the week for the event date
    const dayOfWeek = new Date(currentEvent.date).toLocaleString("en-US", { weekday: "long" });

    const eventInfo = `
        <div class="countdown-text">${dayOfWeek}, ${formatTime(new Date(currentEvent.date))}<br>
            ${currentEvent.name}<br>
            ${days}d ${hours}h ${minutes}m ${seconds}s</div>
    `;

    document.getElementById("event-info").innerHTML = eventInfo;
}

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

function updateCountdown() {
    const dueDate = new Date("May 17, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = dueDate - now;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "Baby has arrived! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes until baby arrives! 💖`;

    setTimeout(updateCountdown, 1000);
}

function addMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") return;

    let list = document.getElementById("messages-list");
    let listItem = document.createElement("li");
    listItem.textContent = message;
    list.appendChild(listItem);

    document.getElementById("message").value = "";
}

updateCountdown();

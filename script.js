const input = document.getElementById("commandInput");
const output = document.getElementById("output");
 
// Typing speed in milliseconds
const TYPING_SPEED = 25;
 
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        typeLine(`➜ ${command}`, "command");
        input.value = "";
        handleCommand(command);
    }
});
 
function typeLine(text, className = "") {
    const line = document.createElement("p");
    if (className) line.classList.add(className);
    output.appendChild(line);
 
    let index = 0;
    const interval = setInterval(() => {
        line.textContent += text.charAt(index);
        index++;
        output.scrollTop = output.scrollHeight;
 
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, TYPING_SPEED);
}
 
function handleCommand(command) {
    setTimeout(() => {
        switch (command) {
            case "help":
                typeLine("Available commands:");
                typeLine("about     → Know who I am");
                typeLine("skills    → Technologies I use");
                typeLine("projects  → What I have built");
                typeLine("contact   → Reach out to me");
                typeLine("clear     → Clear terminal");
                break;
 
            case "about":
                typeLine("👩‍💻 Payal Waghmare");
                typeLine("Associate Software Engineer – Automation & Support");
                typeLine("I automate repetitive tasks and keep systems reliable.");
                break;
 
            case "skills":
                typeLine("🛠 Skills:");
                typeLine("- Automation scripting (Python)");
                typeLine("- Java & JavaScript");
                typeLine("- Git, Linux, Monitoring");
                break;
 
            case "projects":
                typeLine("📂 Projects:");
                typeLine("1. Automated Log Monitoring");
                typeLine("2. Ticket Status Automation Tool");
                typeLine("3. System Health Check Script");
                break;
 
            case "contact":
                typeLine("📧 Email: payal@example.com");
                typeLine("🔗 GitHub: github.com/yourusername");
                typeLine("💼 LinkedIn: linkedin.com/in/yourprofile");
                break;
 
            case "clear":
                output.innerHTML = "";
                break;
 
            default:
                typeLine("❌ Command not recognized. Type 'help'");
        }
    }, 300); // slight delay before response
}
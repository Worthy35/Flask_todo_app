document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("task-form");
    const input = form.querySelector("input[name='task']");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const task = input.value.trim();
        if (!task) return;

        const res = await fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task })
        });

        if (res.ok) {
            const data = await res.json();
            const li = document.createElement("li");
            li.dataset.index = data.index;
            li.innerHTML = `
                ${data.task}
                <button class="delete-btn">❌</button>
            `;
            taskList.appendChild(li);
            input.value = "";
        }
    });

    taskList.addEventListener("click", async (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const li = e.target.closest("li");
            const index = li.dataset.index;

            const res = await fetch(`/delete/${index}`, { method: "DELETE" });
            if (res.ok) {
                li.remove();
            }
        }
    });
});
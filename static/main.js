document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("task-form");
    const input = form.querySelector("input[name='task']");

    form.addEventListener("submit", function() {
        //Delete After submit
        setTimeout(() => { input.value = ""; }, 100);
    });
});
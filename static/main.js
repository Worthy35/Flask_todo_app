document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("task-form");
    const input = form.querySelector("input[name='task']");

    form.addEventListener("submit", function() {
        // پاک کردن سریع فیلد بعد از submit
        setTimeout(() => { input.value = ""; }, 100);
    });
});

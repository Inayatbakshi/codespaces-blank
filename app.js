document.getElementById("calculatorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
    const maxMarks = parseFloat(document.getElementById("maxMarks").value);

    if (!isNaN(obtainedMarks) && !isNaN(maxMarks) && maxMarks !== 0) {
        const percent = ((obtainedMarks / maxMarks) * 100).toFixed(2);
        document.getElementById("result").innerText = `You've got ${percent}%`;
    } else {
        document.getElementById("result").innerText = "Invalid input. Please enter valid numbers.";
    }
});

const durationEl = document.getElementById("duration");
const assignmentInputsEl = document.getElementById("assignmentInputs");
const formEl = document.getElementById("checkerForm");
const resultEl = document.getElementById("result");

// Assignment field generator
durationEl.addEventListener("change", () => {
  const weeks = parseInt(durationEl.value);
  assignmentInputsEl.innerHTML = "";

  for (let i = 1; i <= weeks; i++) {
    const inputGroup = document.createElement("div");
    inputGroup.innerHTML = `
      <label class="block font-medium">Week ${i} Assignment Score</label>
      <input type="number" class="w-full border rounded px-3 py-2 assignment-score" max="100" min="0">
    `;
    assignmentInputsEl.appendChild(inputGroup);
  }
});

// Form submission
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const duration = parseInt(durationEl.value);
  const scores = Array.from(document.querySelectorAll(".assignment-score"))
    .map(input => parseFloat(input.value))
    .filter(v => !isNaN(v));
  const examScore = parseFloat(document.getElementById("examScore").value);

  const bestMap = { 4: 3, 8: 4, 12: 8 };
  if (!bestMap[duration] || scores.length !== duration || isNaN(examScore)) {
    resultEl.textContent = "Please fill all fields correctly.";
    resultEl.classList.add("text-red-500");
    return;
  }

  const bestAssignments = scores.sort((a, b) => b - a).slice(0, bestMap[duration]);
  const avgBest = bestAssignments.reduce((a, b) => a + b, 0) / bestMap[duration];

  const assignmentScore = 0.25 * avgBest;
  const examComponent = 0.75 * examScore;
  const finalScore = assignmentScore + examComponent;

  const eligible = assignmentScore >= 10 && examComponent >= 30;

  resultEl.innerHTML = `
    <div class="mt-4 text-gray-800 dark:text-white">
      <p>✅ Average Assignment Score (25%): <strong>${assignmentScore.toFixed(2)}</strong></p>
      <p>✅ Exam Score (75%): <strong>${examComponent.toFixed(2)}</strong></p>
      <p>📊 Final Score: <strong>${finalScore.toFixed(2)} / 100</strong></p>
      <p class="mt-2 ${eligible ? 'text-green-600' : 'text-red-600'}">
        ${eligible ? '🎉 You are eligible for the certificate!' : '❌ You are NOT eligible for the certificate.'}
      </p>
    </div>
  `;
});

// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
const rootEl = document.documentElement;
const themeIcon = document.getElementById("themeIcon");

// Load preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  rootEl.classList.add("dark");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

// Toggle dark mode
toggleBtn.addEventListener("click", () => {
  rootEl.classList.toggle("dark");
  const isDark = rootEl.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.replace(isDark ? "fa-sun" : "fa-moon", isDark ? "fa-moon" : "fa-sun");
});

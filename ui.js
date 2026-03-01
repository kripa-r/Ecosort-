const sheet = document.getElementById("resultSheet");
const resultsContainer = document.getElementById("resultsContainer");

export function showResults(results) {

  resultsContainer.innerHTML = "";

  results.forEach(r => {
    const p = document.createElement("p");
    p.innerText = `${r.label} — ${(r.confidence * 100).toFixed(2)}%`;
    resultsContainer.appendChild(p);
  });

  sheet.classList.add("active");
}
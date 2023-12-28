function displayResult() {
  document.getElementById("C4").innerHTML = "have a nice day";
}

const resultBtn = document.createElement("button");
resultBtn.textContent = "display";
resultBtn.addEventListener("click", (e) => displayResult(e));
document.body.appendChild(resultBtn);

const experience = document.getElementById("experience");
const button = document.getElementById("power-button");
const buttonLabel = document.getElementById("button-label");
const stateLabel = document.getElementById("state-label");
const sceneNote = document.getElementById("scene-note");

let running = false;

document.querySelectorAll(".destratifier").forEach((fan) => {
  const use = fan.querySelector("use");
  const sourceId = use?.getAttribute("href")?.replace("#", "");
  const source = sourceId ? document.getElementById(sourceId) : null;

  if (use && source) {
    const renderedFan = source.cloneNode(true);
    renderedFan.removeAttribute("id");
    fan.replaceChild(renderedFan, use);
  }
});

button.addEventListener("click", () => {
  running = !running;
  experience.classList.toggle("is-running", running);
  experience.classList.toggle("is-idle", !running);
  button.setAttribute("aria-pressed", String(running));
  buttonLabel.textContent = running ? "Wyłącz destryfikatory" : "Włącz destryfikatory";
  stateLabel.textContent = running ? "Równomierne ciepło" : "Ciepło pod dachem";
  sceneNote.textContent = running
    ? "Destryfikatory pracują — ciepłe powietrze wraca do strefy użytkowej."
    : "Bez cyrkulacji najcieplejsze powietrze pozostaje wysoko pod dachem.";
});

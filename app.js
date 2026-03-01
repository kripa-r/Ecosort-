import { navigate } from "./router.js";
import { initCamera, captureAndClassify } from "./ai.js";
import { showResults } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {

  document.getElementById("enterBtn")
    .addEventListener("click", () => {
      navigate("dashboard");
    });

  document.getElementById("openVision")
    .addEventListener("click", async () => {
      navigate("vision");
      await initCamera();
    });

  document.getElementById("captureBtn")
    .addEventListener("click", async () => {
      const results = await captureAndClassify();
      showResults(results);
    });

});
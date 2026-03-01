let classifier;
const video = document.getElementById("camera");

export async function initCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" }
  });
  video.srcObject = stream;

  classifier = await ml5.imageClassifier("MobileNet");
  console.log("Model Loaded ✅");
}

export async function captureAndClassify() {

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const size = 224;
  canvas.width = size;
  canvas.height = size;

  const sx = video.videoWidth / 2 - size / 2;
  const sy = video.videoHeight / 2 - size / 2;

  ctx.drawImage(video, sx, sy, size, size, 0, 0, size, size);

  const results = await classifier.classify(canvas);

  return results.slice(0, 3); // top 3 predictions
}
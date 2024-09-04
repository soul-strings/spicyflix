import "./style.css";
import axios from "axios";

const port = 5000;
const hostname = "127.0.0.1";

function showMessage(message) {
  document.querySelector("#app").innerHTML = `<p>${message}</p>`;
}

async function fetchVideo() {
  try {
    const res = await axios.get(`http://${hostname}:${port}/api/video`);
    console.log(res.data[0].response);
    return res.data[0].response; // Adjust if necessary
  } catch (error) {
    console.error(error);
    showMessage("Failed to load video");
    return null;
  }
}

async function init() {
  let videoUrl = await fetchVideo();
  if (videoUrl) {
    setupPage(videoUrl);
  } else {
    showMessage("Loading video...");
  }

  document.querySelector("#app").addEventListener("click", async (event) => {
    const newVideoUrl = await fetchVideo();
    if (newVideoUrl) {
      updateVideoSource(newVideoUrl);
    } else {
      showMessage("Failed to load new video");
    }
  });
}

function setupPage(videoUrl) {
  document.querySelector("#app").innerHTML = `
    <video id="video-player" autoplay controls loop>
      <source src="${videoUrl}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <footer>
      <button>More</button>
    </footer>
  `;
}

function updateVideoSource(url) {
  const videoElement = document.querySelector("#video-player");
  if (videoElement) {
    videoElement.querySelector("source").src = url;
    videoElement.load(); // Reload the video element to reflect the new source
  }
}

init();

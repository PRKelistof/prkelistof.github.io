// 实现实时时钟功能
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = { hour12: false };
    const timeString = now.toLocaleTimeString("zh-CN", options);
    clockElement.textContent = timeString;
}

// 初始化时钟并设置间隔
setInterval(updateClock, 1000);
updateClock();// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
    const digitalArtMuseumButton = document.getElementById("digital-art-museum");
    const goBackButton = document.getElementById("go-back");

    if (digitalArtMuseumButton) {
        digitalArtMuseumButton.addEventListener("click", () => {
            window.location.href = "museum.html";
        });
    }

    if (goBackButton) {
        goBackButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
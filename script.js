// JavaScript Document

function toggleMenu() {
    document.querySelector(".side-menu").classList.toggle("active");
}
function toggleMenu() {
    document.querySelector(".side-menu").classList.toggle("active");
}

// 双击有惊喜
function redirectToInfo() {
    window.location.href = "Information.html";
}
let clickCount = 0;
const teamLogo = document.getElementById("team-logo");
const textContent = document.getElementById("text-content");

if (teamLogo) {
    teamLogo.addEventListener("click", function () {
        clickCount++;
        if (clickCount === 29) {
            teamLogo.src = "yalicore.png";
            textContent.style.display = "none";
        }
    });
}
// 切换侧边菜单
function toggleMenu() {
    document.querySelector(".side-menu").classList.toggle("active");
}

// 弹窗
function openPopup(message) {
    document.getElementById("popup-text").innerText = message;
    document.getElementById("popup").style.display = "block";
}

// 关闭弹窗
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
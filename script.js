
const lightButton = document.getElementById("lightButton");
const overlay = document.getElementById("overlay");
const balloonContainer = document.getElementById("balloonContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");
const cups = document.getElementById("cupsContainer");

lightButton.onclick = function() {
    // تغيير الخلفية تدريجياً
    document.body.style.backgroundColor = "#FFFDF6";
    overlay.style.display = "none";

    // تشغيل الموسيقى
    music.play();

    // إطلاق البالونات
    for (let i = 0; i < 20; i++) {
        createBalloon();
    }

    // ظهور النص بعد 5 ثواني
    setTimeout(() => {
        message.style.opacity = 1;
    }, 5000);

    // إظهار الأكواب
    cups.style.display = "block";
};

function createBalloon() {
    const images = ["images/balloon-purple.png", "images/balloon-green.png"];
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 90 + "vw";

    balloon.style.backgroundImage = "url('" + images[Math.floor(Math.random() * images.length)] + "')";
    balloon.style.animation = "floatUp " + (Math.random() * 5 + 5) + "s linear forwards";

    // تأثير الانفجار
    balloon.onclick = function() {
        balloon.style.transform = "scale(0)";
        setTimeout(() => balloon.remove(), 300);
    };

    balloonContainer.appendChild(balloon);
}

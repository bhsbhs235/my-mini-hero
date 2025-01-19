// Create a div to hold the animated images
let animationDiv = document.createElement("div");
animationDiv.className = "myminihero_div";

// Create a div element to hold the sprite sheet as background
const animationImg = document.createElement("div");
animationImg.className = "content_img";
animationImg.style.backgroundImage = `url(${chrome.runtime.getURL("images/explosion_effects.png")})`;

// Add the animated div to the parent div
animationDiv.appendChild(animationImg);
document.body.appendChild(animationDiv);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "on") {
        if (!animationDiv) {
            document.body.appendChild(animationDiv);
        }
        animationDiv.style.display = "block"; // div를 표시
    } else if (request.action === "off") {
        console.log("off");
        console.log(animationDiv);
        if (animationDiv) {
            animationDiv.style.display = "none"; // div를 숨김
        }
    }
});


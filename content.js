// Create a div to hold the animated images
const animationDiv = document.createElement("div");
animationDiv.className = "myminihero_div";

// Create a div element to hold the sprite sheet as background
const animationImg = document.createElement("div");
animationImg.className = "content_img";
animationImg.style.backgroundImage = `url(${chrome.runtime.getURL("images/explosion_effects.png")})`;

// Add the animated div to the parent div
animationDiv.appendChild(animationImg);
document.body.appendChild(animationDiv);


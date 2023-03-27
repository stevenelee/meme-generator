"use strict";

const form = document.querySelector("form");
const button = document.querySelector("button");
const memes = document.getElementById("memes");


/** create a img element that is appended to a div. img uses value from
 * imgURL as source. div with image is appended to memes
 */
button.addEventListener("click", function (event) {
  event.preventDefault();

  const div = document.createElement("div");
  div.classList.add("new-meme");

  const img = document.createElement("img");
  const imgURL = document.getElementById("image-url");
  img.src = imgURL.value;

  const top = document.createElement("h1");
  const topText = document.getElementById("top-text");
  top.textContent = topText.value;

  const bottom = document.createElement("h2");
  const bottomText = document.getElementById("bottom-text");
  bottom.textContent = bottomText.value;

  /** check value of imgURL */
  if (imgURL.value === '') {
    alert("Please enter a URL");
    return;
  } else {
    memes.append(div);
    div.append(img, top, bottom);
    form.reset();
  }

  /** remove div when clicked on */
  div.addEventListener('click', function() {
    div.remove();
  });
});
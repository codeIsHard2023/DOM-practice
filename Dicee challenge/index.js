const testTitle = document.getElementsByTagName("h1");
const image1 = document.getElementsByClassName("img1");
const image2 = document.getElementsByClassName("img2");
const button = document.getElementsByTagName("button");

// dicee images
const dicee = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// random number
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// onclick operation handler
const min = 1;
const max = 7;

const handleClick = () => {
  const random1 = getRandomInt(min, max);
  const random2 = getRandomInt(min, max);
  image1[0].setAttribute("src", dicee[random1 - 1]);
  image2[0].setAttribute("src", dicee[random2 - 1]);
};

// button onClick action
button[0].addEventListener("click", handleClick);

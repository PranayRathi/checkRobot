var div = document.getElementById("imgContainer");
let resetButtonElement = document.getElementById("reset");
resetButtonElement.addEventListener("click", resetFun);

let verifyButtonElement = document.getElementById("btn");
verifyButtonElement.addEventListener("click", verifyFn);

let para = document.getElementById("para");

let imgArray = [];
let clickedArrayElement = [];
let clickCount = 0;
let idArray = [];

function resetFun() {
  clickCount = 0;
  clickedArrayElement = [];
  idArray = [];
  resetButtonElement.classList = "hide";
  verifyButtonElement.classList = "hide";
  para.classList = "hide";
  console.log(clickCount + "1321");
}

function verifyFn() {
  verifyButtonElement.classList = "hide";
  para.classList = "";
  if (clickedArrayElement[0] === clickedArrayElement[1]) {
    para.innerHTML = "You are a human. Congratulations!";
  } else {
    para.innerHTML =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }
}

const handleClick = (event) => {
  let currentId = event.target.id;
  if (!idArray.includes(currentId)) {
    idArray.push(currentId);
    clickCount++;
    clickedArrayElement.push(event.target.classList[0]);
  }

  if (clickCount === 1) {
    resetButtonElement.classList = "show";
  }
  if (clickCount === 2) {
    verifyButtonElement.classList = "show";
  }
};

(function createImgArray() {
  let img = "";
  for (let i = 1; i < 6; i++) {
    img = document.createElement("img");
    img.id = i;
    img.classList.add("img" + i);
    img.src = "http://placehold.it/50x50?text=img" + i;
    img.addEventListener("click", () => {
      handleClick(event);
    });
    imgArray.push(img);
  }
  let random = Math.floor(Math.random() * 5) + 1;
  img = document.createElement("img");
  img.id = 6;
  img.classList.add("img" + random);
  img.src = "http://placehold.it/50x50?text=img" + random;
  img.addEventListener("click", () => {
    handleClick(event);
  });
  imgArray.push(img);
})();

imgArray.sort((a, b) => {
  return 0.5 - Math.random();
});

for (let i = 0; i < imgArray.length; i++) {
  div.appendChild(imgArray[i]);
}
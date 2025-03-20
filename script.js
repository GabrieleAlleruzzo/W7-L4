const getImg = function () {
  const urlImg = "https://api.pexels.com/v1/search?query=mountains";

  fetch(urlImg, {
    headers: {
      Authorization: "kCLtvsiB7VhYQaaWUWTj1xJA995gigQQjbPMvuHg7ph6TVsAfKDePiCJ",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("bho errore");
      }
    })
    .then((data) => {
      console.log("tutto apposto .then 2", data);
    })
    .catch((error) => {
      console.log("errore .catch");
    });
};

getImg();

const load1 = document.getElementById("load1");
const showImgs1 = document.getElementById("show-imgs");

load1.addEventListener("click", function () {
  showImgs1.innerHTML = "";
});

getImg.forEach((element) => {
  const imgUrl = document.createElement("img");
  imgUrl.src = element.url;
  imgUrl.src = element.alt = "img";
  showImgs1.appendChild(img);
});

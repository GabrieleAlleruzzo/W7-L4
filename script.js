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

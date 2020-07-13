console.log("Client side js loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");

weatherForm.addEventListener("submit", (e) => {
  // prevent default wil prevent default behaviour of refreshing the page on submitting the form
  // on clicking search the page refreshes.. we dont want this
  e.preventDefault();

  const location = search.value;

  message1.textContent = "Loading...";
  message1.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          message1.textContent = data.error;
        } else {
          message1.textContent = data.location;
          message2.textContent = data.forecast;
        }
      });
    }
  );
});

const thumbnails = [...document.querySelectorAll(".gallery button")];
const dialog = document.querySelector("dialog");
const photo = dialog.querySelector("img");
const closeButton = dialog.querySelector("[data-close]");
let index = 0;

function showPhoto(position) {
  index = (position + thumbnails.length) % thumbnails.length;
  const thumbnail = thumbnails[index].querySelector("img");
  photo.src = thumbnail.src;
  photo.alt = thumbnail.alt;
}

thumbnails.forEach((button, position) => {
  button.addEventListener("click", () => {
    showPhoto(position);
    dialog.showModal();
    closeButton.focus();
  });
});

dialog.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => showPhoto(index + Number(button.dataset.step)));
});
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showPhoto(index - 1);
  if (event.key === "ArrowRight") showPhoto(index + 1);
});

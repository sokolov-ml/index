const square = document.querySelector(".square");

square.addEventListener("click", () => {
  //alert(event);
});

document.addEventListener("keydown", (event) => {
  square.textContent = `keyCode: ${event.keyCode} (${event.key})`;
});

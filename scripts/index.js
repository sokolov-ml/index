const square = document.querySelector(".square");

square.addEventListener("click", () => {
  //alert(event);
});

document.addEventListener("keydown", (event) => {
  const logText = `keyCode: ${event.keyCode} (${event.key})`;

  const log = new Log(logText);
  square.append(log.createLine());
});

class Log {
  constructor(text) {
    this._time = new Date();
    this._text = text;
    this._template = document.querySelector("#log").content.cloneNode(true);
  }

  createLine() {
    let time =
      String(this._time.getHours()).padStart(2, "0") +
      ":" +
      String(this._time.getMinutes()).padStart(2, "0") +
      ":" +
      String(this._time.getSeconds()).padStart(2, "0");

    this._template.querySelector(".log__time").textContent = time;
    this._template.querySelector(".log__text").textContent = this._text;

    console.log(this._template);

    return this._template;
  }
}

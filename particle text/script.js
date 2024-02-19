window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const textInput = document.getElementById("textInput");

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(ctx);

  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.lineWidth = 3;
  ctx.stroke();

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0.3, "red");
  gradient.addColorStop(0.5, "fuchsia");
  gradient.addColorStop(0.7, "Blue");



  ctx.fillStyle = gradient;
  ctx.strokeStyle = "red";
  ctx.font = "80px Monospace";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //   ctx.fillText(text, textX, textY);
  //   ctx.strokeText(text, textX, textY);

  const maxTextWidth = canvas.width * 0.8;
  const lineHeight = 80;

  function wrapText(text) {
    let linesArray = [];
    let lineCounter = 0;
    let line = "";
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + " ";

      if (ctx.measureText(testLine).width > maxTextWidth) {
        line = words[i] + " ";
        lineCounter++;
      } else {
        line = testLine;
      }
      linesArray[lineCounter] = line;
    }
    let textHeight = lineHeight * lineCounter;
    let testY = canvas.height / 2 - textHeight / 2;
    linesArray.forEach((ele, index) => {
      ctx.fillText(ele, canvas.width / 2, testY + index * lineHeight);
    //   ctx.strokeText(ele, canvas.width / 2, testY + index * lineHeight);
    });
    console.log(linesArray);
  }

  //   wrapText("Hello, how are you, hello how are you, i am shubham bawankar");

  textInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wrapText(e.target.value);
  });
});

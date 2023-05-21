function transcribe() {
    console.log("dog1");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var inputText = document.getElementById("inputText").value;

    var x = 50;
    var y = canvas.height / 2;
    var syllableSpacing = 50; // Adjust as needed
    var wordSpacing = 100;
    console.log("dog2");
    for (var i = 0; i < inputText.length; i += 2) {
        var syllable = inputText.substr(i, 2);

        if (syllable.substr(0,1) === " ") {
          x += wordSpacing;
          i --;
          continue;
        }

        if (syllable === "sh") {
          syllable = inputText.substr(i, 3);
          i++;
        }


        var shapes = syllableMapping[syllable];
        console.log("dog3");

        console.log(shapes.length)
        for (var j = 0; j < shapes.length; j++) {
            var shape = shapes[j];
            console.log("dog4");
            drawCharacter(context, x, y, shape.shape, shape);

            //x += shape.shape === "circle" ? shape.radius * 2 : shape.length;
        }
        x += syllableSpacing;
    }
}

function drawCharacter(context, x, y, shape, options) {
    if (shape === 'circle') {
      context.beginPath();
      context.arc(x + options.centerX, y + options.centerY, options.radius, 0, 2 * Math.PI);
      context.stroke();
    } 
    else if (shape === 'line') {
      console.log("line");
      context.beginPath();
      context.moveTo(x + options.startX, y + options.startY);
      context.lineTo(x + options.endX, y + options.endY);
      context.stroke();
    }
    else if (shape === "oval") {
      context.beginPath();
      context.ellipse(
      x + options.x + options.width / 2,
      y + options.y + options.height / 2,
      options.width / 2,
      options.height / 2,
      0,
      0,
      2 * Math.PI
      );
      context.stroke();
    }
    else if (shape === "arc") {
      context.beginPath();
      context.arc(
        x + options.x,
        y + options.y,
        options.radius,
        options.startAngle,
        options.endAngle,
        options.anticlockwise
      );
      context.stroke();
    }
  }

function drawLine(context, sx, sy, ex, ey, options) {
  context.beginPath();
  context.moveTo(sx + options.startX, y + options.startY);
  context.lineTo(ex + options.endX, y + options.endY);
  context.stroke();
}
  
  
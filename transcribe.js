const syllableMapping = {
    "sa": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 10, endY: 20 },
      { shape: "line", startX: 10, startY: 20, endX: 40, endY: 35 },
      { shape: "line", startX: 40, startY: 35, endX: 0, endY: 40 }
    ],
    "si": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 10, endY: 20 },
      { shape: "line", startX: 10, startY: 20, endX: 40, endY: 35 },
      { shape: "line", startX: 40, startY: 35, endX: 0, endY: 40 },
      { shape: "line", startX: 22, startY: -10, endX: 22, endY: 50 }
    ],
    "so": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 10, endY: 20 },
      { shape: "line", startX: 10, startY: 20, endX: 40, endY: 35 },
      { shape: "line", startX: 40, startY: 35, endX: 0, endY: 40 },
      { shape: "circle", centerX: 22, centerY: -10, radius: 5 }
    ],
    "su": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 10, endY: 20 },
      { shape: "line", startX: 10, startY: 20, endX: 40, endY: 35 },
      { shape: "line", startX: 40, startY: 35, endX: 0, endY: 40 },
      { shape: "line", startX: 10, startY: 15, endX: 0, endY: 20 },
      { shape: "line", startX: 0, startY: 20, endX: 10, endY: 25 },
    ],
    "se": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 10, endY: 20 },
      { shape: "line", startX: 10, startY: 20, endX: 40, endY: 35 },
      { shape: "line", startX: 40, startY: 35, endX: 0, endY: 40 },
      { shape: "line", startX: 0, startY: 10, endX: 15, endY: 10 },
      { shape: "line", startX: 0, startY: 30, endX: 15, endY: 30 },
    ],
    "mi": [
      { shape: "circle", radius: 30 },
      { shape: "line", length: 70 }
    ]
};

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
  }

function drawLine(context, sx, sy, ex, ey, options) {
  context.beginPath();
  context.moveTo(sx + options.startX, y + options.startY);
  context.lineTo(ex + options.endX, y + options.endY);
  context.stroke();
}
  
  
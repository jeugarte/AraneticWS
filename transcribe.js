const syllableMapping = {
    "sa": [
      { shape: "circle", radius: 50 },
      { shape: "line", length: 100 }
    ],
    "mi": [
      { shape: "circle", radius: 30 },
      { shape: "line", length: 70 }
    ]
};

function transcribe() {
    console.log("dog");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var inputText = document.getElementById("inputText").value;

    var x = 50;
    var y = canvas.height / 2;
    var syllableSpacing = 30; // Adjust as needed
    console.log("dog");
    for (var i = 0; i < inputText.length; i += 2) {
        var syllable = inputText.substr(i, 2);
        var shapes = syllableMapping[syllable];
        console.log("dog");


        for (var j = 0; j < shapes.length; j++) {
            var shape = shapes[j];
            console.log("dog");
            drawCharacter(context, x, y, shape.shape, shape);

            x += shape.shape === "circle" ? shape.radius * 2 : shape.length;
        }

        x += syllableSpacing;
    }
}

function drawCharacter(context, x, y, shape, options) {
    if (shape === 'circle') {
      context.beginPath();
      context.arc(x, y, options.radius, 0, 2 * Math.PI);
      context.stroke();
    } else if (shape === 'line') {
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + options.length, y);
      context.stroke();
    }
  }
  
  
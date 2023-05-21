function transcribe() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var inputText = document.getElementById("inputText").value.trim();
  var words = inputText.split(" ");

  var x = 50;
  var y = 50;
  var wordSpacing = 75; // Adjust as needed
  var syllableSpacing = 50; // Adjust as needed
  var vowels = new Set(["a", "e", "i", "o", "u"]);
  var lineWidth = canvas.width - 100; // Maximum line width



  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    console.log(word);

    var num_syllables = 0
    for (var j = 0; j < word.length; j+=2) {
      var has_sh = false;
      var has_sh_vowel = false;
      var has_vowel = false;
      var syllable_string = word.substr(j, 2);
      if (syllable_string === "sh") {
        syllable_string = word.substr(j, 3);
        has_sh = true;
        if (vowels.has(word.substr(j+3, 1))) {
          has_sh_vowel = true;
        }
      }
      else if(vowels.has(word.substr(j+2, 1))) {
        has_vowel = true;
      }
      num_syllables += 1;
      if (has_sh) {
        j++;
        if (has_sh_vowel) {
          j++;
        }
      }
      else if (has_vowel) {
        j++;
      }
      
    }
    console.log(num_syllables);

    var rowSize = Math.ceil(num_syllables / 2);

    var counter = 0;
    for (var j = 0; j < word.length; j+=2) {
      var has_sh = false;
      var has_sh_vowel = false;
      var has_vowel = false;
      var syllable_string = word.substr(j, 2);
      if (syllable_string === "sh") {
        syllable_string = word.substr(j, 3);
        has_sh = true;
        if(vowels.has(word.substr(j+3, 1))) {
          has_sh_vowel = true;
        }
      }
      else if(vowels.has(word.substr(j+2, 1))) {
        has_vowel = true;
      }
      var shapes = syllableMapping[syllable_string];


      var xPos = x + (counter % rowSize) * syllableSpacing;
      var yPos = y + (counter < rowSize ? -1 : 1) * Math.floor(counter / rowSize) * syllableSpacing;

      for (var k = 0; k < shapes.length; k++) {
        var shape = shapes[k];

        drawCharacter(context, xPos, yPos, shape.shape, shape);

        //xPos += shape.shape === "circle" ? shape.radius * 2 : shape.length;
      }

      if (has_sh) {
        if (has_sh_vowel) {
          var vowel = word.substr(j+3, 1);
          var shapes = Diphthong[vowel];
          for (var k = 0; k < shapes.length; k++) {
            var shape = shapes[k];
            drawCharacter(context, xPos, yPos, shape.shape, shape);
          }
          j++;
        }
        j++;
      }
      else if (has_vowel) {
        var vowel = word.substr(j+2, 1);
        var shapes = Diphthong[vowel];
        for (var k = 0; k < shapes.length; k++) {
          var shape = shapes[k];
          drawCharacter(context, xPos, yPos, shape.shape, shape);
        }
        if (word.substr(j+1, 1) === "a") {
          var shapes = Diphthong["a"];
          for (var k = 0; k < shapes.length; k++) {
            var shape = shapes[k];
            drawCharacter(context, xPos, yPos, shape.shape, shape);
          }
        }
        j++;
      }


      xPos += syllableSpacing;
      counter += 1;

      
    }

    x = xPos + wordSpacing;
  }
    // console.log("dog1");
    // var canvas = document.getElementById("canvas");
    // var context = canvas.getContext("2d");
    // var inputText = document.getElementById("inputText").value;

    // var x = 50;
    // var y = canvas.height / 2;
    // var syllableSpacing = 50; // Adjust as needed
    // var wordSpacing = 100;
    // console.log("dog2");
    // for (var i = 0; i < inputText.length; i += 2) {
    //     var syllable = inputText.substr(i, 2);

    //     if (syllable.substr(0,1) === " ") {
    //       x += wordSpacing;
    //       i --;
    //       continue;
    //     }

    //     if (syllable === "sh") {
    //       syllable = inputText.substr(i, 3);
    //       i++;
    //     }


    //     var shapes = syllableMapping[syllable];
    //     console.log("dog3");

    //     console.log(shapes.length)
    //     for (var j = 0; j < shapes.length; j++) {
    //         var shape = shapes[j];
    //         console.log("dog4");
    //         drawCharacter(context, x, y, shape.shape, shape);

    //         //x += shape.shape === "circle" ? shape.radius * 2 : shape.length;
    //     }
    //     x += syllableSpacing;
    // }
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
  
  
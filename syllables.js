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
    "sha": [
      { shape: "line", startX: 0, startY: 0, endX: 30, endY: 10 },
      { shape: "line", startX: 30, startY: 10, endX: 5, endY: 25 },
      { shape: "line", startX: 5, startY: 15, endX: 30, endY: 30 },
      { shape: "line", startX: 30, startY: 30, endX: 0, endY: 40 }
    ],
    "shi": [
      { shape: "line", startX: 0, startY: 0, endX: 30, endY: 10 },
      { shape: "line", startX: 30, startY: 10, endX: 5, endY: 25 },
      { shape: "line", startX: 5, startY: 15, endX: 30, endY: 30 },
      { shape: "line", startX: 30, startY: 30, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: -10, endX: 15, endY: 50 }
    ],
    "sho": [
      { shape: "line", startX: 0, startY: 0, endX: 30, endY: 10 },
      { shape: "line", startX: 30, startY: 10, endX: 5, endY: 25 },
      { shape: "line", startX: 5, startY: 15, endX: 30, endY: 30 },
      { shape: "line", startX: 30, startY: 30, endX: 0, endY: 40 },
      { shape: "circle", centerX: 25, centerY: -2, radius: 5 }
    ],
    "shu": [
      { shape: "line", startX: 0, startY: 0, endX: 30, endY: 10 },
      { shape: "line", startX: 30, startY: 10, endX: 5, endY: 25 },
      { shape: "line", startX: 5, startY: 15, endX: 30, endY: 30 },
      { shape: "line", startX: 30, startY: 30, endX: 0, endY: 40 },
      { shape: "line", startX: 10, startY: 10, endX: 0, endY: 20 },
      { shape: "line", startX: 0, startY: 20, endX: 10, endY: 30 },
    ],
    "she": [
      { shape: "line", startX: 0, startY: 0, endX: 30, endY: 10 },
      { shape: "line", startX: 30, startY: 10, endX: 5, endY: 25 },
      { shape: "line", startX: 5, startY: 15, endX: 30, endY: 30 },
      { shape: "line", startX: 30, startY: 30, endX: 0, endY: 40 },
      { shape: "line", startX: 0, startY: 10, endX: 15, endY: 10 },
      { shape: "line", startX: 0, startY: 30, endX: 15, endY: 30 },
    ],
    "ha": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 40, startY: 0, endX: 10, endY: 30 },
      { shape: "line", startX: 25, startY: 15, endX: 25, endY: 40 },
      { shape: "line", startX: 25, startY: 40, endX: 0, endY: 40 }
    ],
    "hi": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 40, startY: 0, endX: 10, endY: 30 },
      { shape: "line", startX: 25, startY: 15, endX: 25, endY: 40 },
      { shape: "line", startX: 25, startY: 40, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: -10, endX: 15, endY: 50 }
    ],
    "ho": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 40, startY: 0, endX: 10, endY: 30 },
      { shape: "line", startX: 25, startY: 15, endX: 25, endY: 40 },
      { shape: "line", startX: 25, startY: 40, endX: 0, endY: 40 },
      { shape: "circle", centerX: 22, centerY: -10, radius: 5 }
    ],
    "hu": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 40, startY: 0, endX: 10, endY: 30 },
      { shape: "line", startX: 25, startY: 15, endX: 25, endY: 40 },
      { shape: "line", startX: 25, startY: 40, endX: 0, endY: 40 },
      { shape: "line", startX: 10, startY: 5, endX: 0, endY: 10 },
      { shape: "line", startX: 0, startY: 10, endX: 10, endY: 15 },
    ],
    "he": [
      { shape: "line", startX: 0, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 40, startY: 0, endX: 10, endY: 30 },
      { shape: "line", startX: 25, startY: 15, endX: 25, endY: 40 },
      { shape: "line", startX: 25, startY: 40, endX: 0, endY: 40 },
      { shape: "line", startX: 0, startY: 10, endX: 20, endY: 10 },
      { shape: "line", startX: 0, startY: 35, endX: 15, endY: 35 },
    ],
    "ma": [
      { shape: "oval", width: 15, height: 10, x: 0, y:20 },
      { shape: "oval", width: 15, height: 10, x: 15, y:20 },
      { shape: "oval", width: 15, height: 10, x: 30, y:20 },
    ],
    "mi": [
      { shape: "oval", width: 15, height: 10, x: 0, y:20 },
      { shape: "oval", width: 15, height: 10, x: 15, y:20 },
      { shape: "oval", width: 15, height: 10, x: 30, y:20 },
      { shape: "line", startX: 22.5, startY: 0, endX: 22.5, endY: 20 }
    ],
    "mo": [
      { shape: "oval", width: 15, height: 10, x: 0, y:20 },
      { shape: "oval", width: 15, height: 10, x: 15, y:20 },
      { shape: "oval", width: 15, height: 10, x: 30, y:20 },
      { shape: "circle", centerX: 15, centerY: 15, radius: 4 },
      { shape: "circle", centerX: 30, centerY: 15, radius: 4 }
    ],
    "mu": [
      { shape: "oval", width: 15, height: 10, x: 0, y:20 },
      { shape: "oval", width: 15, height: 10, x: 15, y:20 },
      { shape: "oval", width: 15, height: 10, x: 30, y:20 },
      { shape: "line", startX: 15, startY: 15, endX: 22.5, endY: 10 },
      { shape: "line", startX: 22.5, startY: 10, endX: 30, endY: 15 },
    ],
    "me": [
      { shape: "oval", width: 15, height: 10, x: 0, y:20 },
      { shape: "oval", width: 15, height: 10, x: 15, y:20 },
      { shape: "oval", width: 15, height: 10, x: 30, y:20 },
      { shape: "line", startX: 15, startY: 5, endX: 30, endY: 5 },
      { shape: "line", startX: 17, startY: 15, endX: 28, endY: 15 },
    ],
    "na": [
      { shape: "oval", width: 22.5, height: 12, x: 0, y:20 },
      { shape: "oval", width: 22.5, height: 12, x: 22.5, y:20 },
    ],
    "ni": [
      { shape: "oval", width: 22.5, height: 12, x: 0, y:20 },
      { shape: "oval", width: 22.5, height: 12, x: 22.5, y:20 },
      { shape: "line", startX: 22.5, startY: 0, endX: 22.5, endY: 22.5 }
    ],
    "no": [
      { shape: "oval", width: 22.5, height: 12, x: 0, y:20 },
      { shape: "oval", width: 22.5, height: 12, x: 22.5, y:20 },
      { shape: "circle", centerX: 22.5, centerY: 15, radius: 4 }    
    ],
    "nu": [
      { shape: "oval", width: 22.5, height: 12, x: 0, y:20 },
      { shape: "oval", width: 22.5, height: 12, x: 22.5, y:20 },
      { shape: "line", startX: 15, startY: 15, endX: 22.5, endY: 10 },
      { shape: "line", startX: 22.5, startY: 10, endX: 30, endY: 15 },  
    ],
    "ne": [
      { shape: "oval", width: 22.5, height: 12, x: 0, y:20 },
      { shape: "oval", width: 22.5, height: 12, x: 22.5, y:20 },
      { shape: "line", startX: 15, startY: 5, endX: 30, endY: 5 },
      { shape: "line", startX: 17, startY: 15, endX: 28, endY: 15 }, 
    ],
    "pa": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 40, endY: 20 },
    ],
    "pi": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 40, endY: 20 },
      { shape: "line", startX: 15, startY: -5, endX: 15, endY: 45 },
    ],
    "po": [
      { shape: "line", startX: 0, startY: 0, endX: 12.5, endY: 15 },
      { shape: "line", startX: 12.5, startY: 25, endX: 0, endY: 40 },
      { shape: "line", startX: 20, startY: 20, endX: 40, endY: 20 },
      { shape: "circle", centerX: 15, centerY: 20, radius: 5 }    
    ],
    "pu": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 35, endY: 20 },
      { shape: "line", startX: 30, startY: 15, endX: 40, endY: 20 },
      { shape: "line", startX: 40, startY: 20, endX: 30, endY: 25 },
    ],
    "pe": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 40, endY: 20 },
      { shape: "line", startX: 25, startY: 12.5, endX: 35, endY: 12.5 },
      { shape: "line", startX: 25, startY: 27.5, endX: 35, endY: 27.5 },
    ],
    "ta": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 35, endY: 0 },
    ],
    "ti": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 31, startY: -5, endX: 31, endY: 45 },
    ],
    "to": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 35, endY: 0 },
      { shape: "circle", centerX: 36, centerY: 20, radius: 5 }
    ],
    "tu": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 35, endY: 0 },
      { shape: "line", startX: 30, startY: 10, endX: 40, endY: 20 },
      { shape: "line", startX: 40, startY: 20, endX: 30, endY: 30 },
    ],
    "te": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 35, endY: 0 },
      { shape: "line", startX: 30, startY: 12.5, endX: 38, endY: 12.5 },
      { shape: "line", startX: 30, startY: 27.5, endX: 38, endY: 27.5 },
    ],
    "ka": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 45, endY: 20 },
      { shape: "line", startX: 32, startY: 0, endX: 47, endY: 20 },
      { shape: "line", startX: 47, startY: 20, endX: 32, endY: 40 },
    ],
    "ki": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 45, endY: 20 },
      { shape: "line", startX: 32, startY: 0, endX: 47, endY: 20 },
      { shape: "line", startX: 47, startY: 20, endX: 32, endY: 40 },
      { shape: "line", startX: 31, startY: -5, endX: 31, endY: 45 },
    ],
    "ko": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 31, endY: 20 },
      { shape: "line", startX: 32, startY: 0, endX: 47, endY: 20 },
      { shape: "line", startX: 47, startY: 20, endX: 32, endY: 40 },
      { shape: "circle", centerX: 36, centerY: 20, radius: 5 }
    ],
    "ku": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 45, endY: 20 },
      { shape: "line", startX: 32, startY: 0, endX: 47, endY: 20 },
      { shape: "line", startX: 47, startY: 20, endX: 32, endY: 40 },
      { shape: "line", startX: 30, startY: 10, endX: 40, endY: 20 },
      { shape: "line", startX: 40, startY: 20, endX: 30, endY: 30 },
    ],
    "ke": [
      { shape: "line", startX: 0, startY: 0, endX: 15, endY: 20 },
      { shape: "line", startX: 15, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: 16, startY: 0, endX: 31, endY: 20 },
      { shape: "line", startX: 31, startY: 20, endX: 16, endY: 40 },
      { shape: "line", startX: 15, startY: 20, endX: 45, endY: 20 },
      { shape: "line", startX: 32, startY: 0, endX: 47, endY: 20 },
      { shape: "line", startX: 47, startY: 20, endX: 32, endY: 40 },
      { shape: "line", startX: 10, startY: 0, endX: 45, endY: 0 },
      { shape: "line", startX: 10, startY: 40, endX: 45, endY: 40 },
    ],
    "wa": [
      { shape: "arc", radius: 30, startAngle: 0.001, endAngle: 2, x: 0, y: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 30, endY: 0 },
      { shape: "arc", radius: 10, startAngle: 0, endAngle: 2.8, anticlockwise: true, x: 40, y: 2 },
    ],
    "wi": [
      { shape: "arc", radius: 30, startAngle: 0.001, endAngle: 2, x: 0, y: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 30, endY: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 45, endY: -10 },
    ],
    "wo": [
      { shape: "arc", radius: 30, startAngle: 0.001, endAngle: 2, x: 0, y: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 30, endY: 0 },
      { shape: "arc", radius: 15, startAngle: 0.001, endAngle: Math.PI, x: 40, y: 15 },
    ],
    "wu": [
      { shape: "arc", radius: 30, startAngle: 0.001, endAngle: 2, x: 0, y: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 30, endY: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 35, endY: 30 },
      { shape: "line", startX: 35, startY: 30, endX: 10, endY: 30 },
    ],
    "we": [
      { shape: "arc", radius: 30, startAngle: 0.001, endAngle: 2, x: 0, y: 0 },
      { shape: "line", startX: 30, startY: -10, endX: 30, endY: 0 },
      { shape: "line", startX: 20, startY: 0, endX: 40, endY: 0 },
      { shape: "line", startX: 15, startY: 15, endX: 35, endY: 15 },
    ],
    "ja": [
      { shape: "arc", radius: 30, startAngle: 0.2, endAngle: Math.PI + 1, anticlockwise: true, x: 0, y: 0 },
      { shape: "arc", radius: 10, startAngle: 0.001, endAngle: Math.PI, x: 40, y:-10 },
    ],
    "ji": [
      { shape: "arc", radius: 30, startAngle: 0.2, endAngle: Math.PI + 1, anticlockwise: true, x: 0, y: 0 },
      { shape: "arc", radius: 10, startAngle: 0.2, endAngle: 2.8, anticlockwise: true, x: 35, y: -20 },
    ],
    "jo": [
      { shape: "arc", radius: 30, startAngle: 0.2, endAngle: Math.PI + 1, anticlockwise: true, x: 0, y: 0 },
      { shape: "arc", radius: 10, startAngle: 0.2, endAngle: 2.8, anticlockwise: true, x: 40, y: -5 },
    ],
    "ju": [
      { shape: "arc", radius: 30, startAngle: 0.2, endAngle: Math.PI + 1, anticlockwise: true, x: 0, y: 0 },
      { shape: "line", startX: 22, startY: -20, endX: 40, endY: 5 },
      { shape: "line", startX: 40, startY: 5, endX: 30, endY: 5 },
    ],
    "je": [
      { shape: "arc", radius: 30, startAngle: 0.2, endAngle: Math.PI + 1, anticlockwise: true, x: 0, y: 0 },
      { shape: "line", startX: 10, startY: -20, endX: 30, endY: -20 },
      { shape: "line", startX: 20, startY: -10, endX: 40, endY: -10 },
    ],
    "ra": [
      { shape: "arc", radius: 20, startAngle: 0, endAngle: Math.PI , x: 0, y: 0 },
      { shape: "line", startX: 0, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: -20, startY: 30, endX: 20, endY: 30 },
      { shape: "line", startX: -20, startY: 40, endX: 20, endY: 40 },
    ],
    "ri": [
      { shape: "arc", radius: 20, startAngle: 0, endAngle: Math.PI , x: 0, y: 0 },
      { shape: "line", startX: 0, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: -20, startY: 30, endX: 0, endY: 30 },
      { shape: "line", startX: -20, startY: 40, endX: 20, endY: 40 },
      { shape: "arc", radius: 5, startAngle: 0.2, endAngle: 2.8, anticlockwise: true, x: 5, y: 30 },

    ],
    "ro": [
      { shape: "arc", radius: 20, startAngle: 0, endAngle: Math.PI , x: 0, y: 0 },
      { shape: "line", startX: 0, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: -20, startY: 30, endX: 0, endY: 30 },
      { shape: "line", startX: -20, startY: 40, endX: 20, endY: 40 },
      { shape: "arc", radius: 5, startAngle: 0.2, endAngle: 2.8, x: 5, y: 30 },
      { shape: "circle", centerX: 0, centerY: 10, radius: 5 }
    ],
    "ru": [
      { shape: "arc", radius: 20, startAngle: 0, endAngle: Math.PI , x: 0, y: 0 },
      { shape: "line", startX: 0, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: -20, startY: 30, endX: 20, endY: 30 },
      { shape: "line", startX: -20, startY: 40, endX: 20, endY: 40 },
      { shape: "arc", radius: 10, startAngle: 0, endAngle: Math.PI , x: 0, y: 5 },
    ],
    "re": [
      { shape: "arc", radius: 20, startAngle: 0, endAngle: Math.PI , x: 0, y: 0 },
      { shape: "line", startX: 0, startY: 20, endX: 0, endY: 40 },
      { shape: "line", startX: -20, startY: 30, endX: 20, endY: 30 },
      { shape: "line", startX: -20, startY: 40, endX: 20, endY: 40 },
      { shape: "line", startX: 15, startY: 5, endX: 25, endY: 5 },
      { shape: "line", startX: 12, startY: 10, endX: 22, endY: 10 },
    ],
};
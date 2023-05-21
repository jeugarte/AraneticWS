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
  
  
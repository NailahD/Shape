function getAreaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

let area = getAreaOfCircle(5);
console.log(area);

//-------------------------------

function getCircumferenceOfCircle(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}

let circumference = getCircumferenceOfCircle(10);
console.log(circumference);

//-------------------------------------

function getAreaOfSquare(side) {
  const squareArea = side * side;
  return squareArea;
}

let squareArea = getAreaOfSquare(4);
console.log(squareArea);

//------------------------------------

function getAreaOfTriangle(base, height) {
  const triangleArea = 0.5 * (base * height);
  return triangleArea;
}

let triangleArea = getAreaOfTriangle(2, 5);
console.log(triangleArea);

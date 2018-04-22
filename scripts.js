// zadanie 9.1

function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        return a * h / 2;
    }
    else {
        return 'Nieprawidłowe dane';
    }
}

var triangleArea = getTriangleArea(10, 6),
    triangle1Area = getTriangleArea(13, 7),
    triangle2Area = getTriangleArea(-1, 1),
    triangle3Area = getTriangleArea('abc', 1);

console.log(triangleArea);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
// zadanie 9.1

var triangle1Area = getTriangleArea(13, 7);
    triangle2Area = getTriangleArea(2, 5);
    triangle3Area = getTriangleArea(8, 4);

function getTriangleArea(a, h) {
    if (a < 0 || h < 0) {
        console.log('Nieprawidłowe dane');
        alert('Nieprawidłowe dane');
    }
    else if (a >= 0 && h >= 0) {
        return a * h / 2;
    }
}
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

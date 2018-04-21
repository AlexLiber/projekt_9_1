// zadanie 9.1

function getTriangleArea(a, h) {
    if ((a >= 0) && (h >= 0)) {
        var area = a * h / 2;
        alert(area);
        console.log(area);
        }
    else {
        alert('Nieprawidłowe dane');
        console.log('Nieprawidłowe dane')
    }
}
var triangleArea = getTriangleArea(10, 6),
    triangle1Area = getTriangleArea(13, 7),
    triangle2Area = getTriangleArea(-1, 1),
    triangle3Area = getTriangleArea('abc', 1);
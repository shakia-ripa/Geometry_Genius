function calculateTriangleArea(){
    // get triangle base
    const baseField = document.getElementById('triangle-base');
    const base = parseFloat(baseField.value);

    // get triangle base
    const heightField = document.getElementById('triangle-height');
    const height = parseFloat(heightField.value);

    const area = 0.5*base*height;
    console.log(area);
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    // get triangle base
    const widthField = document.getElementById('rectangle-width');
    const width = parseFloat(widthField.value);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const length = parseFloat(lengthField.value);

    const area = width*length;
    console.log(area);
    const areaSpan = document.getElementById('rectangle-area')
    areaSpan.innerText = area;
}
function calculateParallelogramArea(){
    // get triangle base
    const baseField = document.getElementById('parallelogram-base');
    const base = parseFloat(baseField.value);

    // get triangle base
    const heightField = document.getElementById('parallelogram-height');
    const height = parseFloat(heightField.value);

    const area = base*height;
    console.log(area);
    const areaSpan = document.getElementById('parallelogram-area')
    areaSpan.innerText = area;
}

function calculateRhombusArea(){
    // get triangle base
    const d1Field = document.getElementById('rhombus-d1');
    const d1 = parseFloat(d1Field.value);

    // get triangle base
    const d2Field = document.getElementById('rhombus-d2');
    const d2 = parseFloat(d2Field.value);

    const area = 0.5*d1*d2;
    console.log(area);
    const areaSpan = document.getElementById('rhombus-area')
    areaSpan.innerText = area;
}
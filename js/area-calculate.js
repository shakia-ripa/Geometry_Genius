function calculateTriangleArea() {
    const base = returnInputFieldValue('triangle-base');
    const height = returnInputFieldValue('triangle-height');
    const area = 0.5 * base * height;
    setAreaOfShape('triangle-area', area);

    // add to calculation entry
    addToCalculationEntry('Triangle', area);
}
function calculateRectangleArea() {
    const width = returnInputFieldValue('rectangle-width');
    const length = returnInputFieldValue('rectangle-length');
    const area = width * length;
    setAreaOfShape('rectangle-area', area);
    // add to calculation entry
    addToCalculationEntry('Rectangle', area);
}
function calculateParallelogramArea() {
    const base = returnInputFieldValue('parallelogram-base');
    const height = returnInputFieldValue('parallelogram-height');
    const area = base * height;
    setAreaOfShape('parallelogram-area', area);
    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea() {
    const d1 = returnInputFieldValue('rhombus-d1');
    const d2 = returnInputFieldValue('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setAreaOfShape('rhombus-area', area);
    // add to calculation entry
    addToCalculationEntry('Rhombus', area);
}
function calculatePentagonArea() {
    const p = returnInputFieldValue('pentagon-p');
    const b = returnInputFieldValue('pentagon-b');
    const area = 0.5 * p * b;
    setAreaOfShape('pentagon-area', area);
    // add to calculation entry
    addToCalculationEntry('Pentagon', area);
}
function calculateEllipseArea() {
    const a = returnInputFieldValue('ellipse-a');
    const b = returnInputFieldValue('ellipse-b');
    const area = Math.PI * a * b;
    const areaTwoDecimal = area.toFixed(2);
    setAreaOfShape('ellipse-area', areaTwoDecimal);
    // add to calculation entry
    addToCalculationEntry('Ellipse', area);
}

// Add to calculation entry

function addToCalculationEntry(shapeType, area) {
    console.log(shapeType + '  ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count +1}.  ${shapeType} ${area}cm<sup>2</sup> <button class="btn btn-sm btn-primary ">Convert</button>`;
    calculationEntry.appendChild(p);

}
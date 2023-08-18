function calculateTriangleArea(){
    const base = returnInputFieldValue('triangle-base');
    const height = returnInputFieldValue('triangle-height');
    const area = 0.5*base*height;
    setAreaOfShape('triangle-area', area);
}
function calculateRectangleArea(){
    const width = returnInputFieldValue('rectangle-width');
    const length = returnInputFieldValue('rectangle-length');
    const area = width*length;
    setAreaOfShape('rectangle-area', area);
}
function calculateParallelogramArea(){
    // get triangle base
    const base = returnInputFieldValue('parallelogram-base');

    // get triangle base
    const height = returnInputFieldValue('parallelogram-height');

    const area = base* height;
    setAreaOfShape('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 =  returnInputFieldValue('rhombus-d1');
    const d2 =  returnInputFieldValue('rhombus-d2');
    const area = 0.5*d1*d2;
    setAreaOfShape('rhombus-area', area);
}
function calculatePentagonArea(){
    const p =  returnInputFieldValue('pentagon-p');
    const b =  returnInputFieldValue('pentagon-b');
    const area = 0.5*p*b;
    setAreaOfShape('pentagon-area', area);
}
function calculateEllipseArea(){
    const a =  returnInputFieldValue('ellipse-a');
    const b =  returnInputFieldValue('ellipse-b');
    const area = 3.1416 * a * b;
    setAreaOfShape('ellipse-area', area);
}
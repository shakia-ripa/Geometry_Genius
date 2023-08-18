function returnInputFieldValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const input = parseFloat(inputField.value);
    return input;
}
function setAreaOfShape(field, value){
    const areaSpan = document.getElementById(field);
    areaSpan.innerText = value;
}
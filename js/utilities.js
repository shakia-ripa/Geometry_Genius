function returnInputFieldValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const input = parseFloat(inputField.value);
    if(!isNaN(input)){
        return input;
    }
    else{
        alert('Please enter number !');
        return;
    }
}
function setAreaOfShape(field, value){
    if(!isNaN(value)){
        const areaSpan = document.getElementById(field);
    areaSpan.innerText = value;
    }
    
}
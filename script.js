let totalArea = 0;
let totalPrice = 0;

function convertToSqFt(length, breadth, unit){

    let area = 0;

    if(unit === "inch"){
        area = (length * breadth) / 144;
    }

    else if(unit === "feet"){
        area = length * breadth;
    }

    else if(unit === "cm"){
        area = (length * breadth) / 929.03;
    }

    else if(unit === "mm"){
        area = (length * breadth) / 92903;
    }

    else if(unit === "meter"){
        area = (length * breadth) * 10.764;
    }

    return area;
}

function addItem(){

    let rate = parseFloat(document.getElementById("rate").value) || 0;

    let length = parseFloat(document.getElementById("length").value) || 0;

    let breadth = parseFloat(document.getElementById("breadth").value) || 0;

    let qty = parseInt(document.getElementById("qty").value) || 1;

    let unit = document.getElementById("unit").value;

    if(length <= 0 || breadth <= 0){
        alert("Please enter valid dimensions");
        return;
    }

    let area = convertToSqFt(length, breadth, unit) * qty;

    let price = area * rate;

    totalArea += area;
    totalPrice += price;

    document.getElementById("totalArea").innerText =
    totalArea.toFixed(2);

    document.getElementById("totalPrice").innerText =
    totalPrice.toFixed(2);

    let row = `
      <tr>
        <td>${length}×${breadth} ${unit}</td>
        <td>${qty}</td>
        <td>${area.toFixed(2)}</td>
        <td>₹${price.toFixed(2)}</td>
      </tr>
    `;

    document.getElementById("items").innerHTML += row;

    // clear fields after adding
    document.getElementById("length").value = "";
    document.getElementById("breadth").value = "";
    document.getElementById("qty").value = "";
}

function clearAll(){

    document.getElementById("items").innerHTML = "";

    totalArea = 0;
    totalPrice = 0;

    document.getElementById("totalArea").innerText = "0";

    document.getElementById("totalPrice").innerText = "0";
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js');
}
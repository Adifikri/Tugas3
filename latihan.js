function convert() {
  let selectFrom = document.getElementById("selectFrom");
  let selectTo = document.getElementById("selectTo");
  let inputNilai = document.getElementById("inputNilai");
  let tampilNilai = document.getElementById("tampilNilai");
  //   let inputNilai = parseInt(document.getElementById("inputNilai").value);
  //   let tampilNilai = parseInt(document.getElementById("tampilNilai").value);

  if (selectFrom.value === "Celcius") {
    if (selectTo.value === "Fahrenheit") {
      result = (9 / 5) * inputNilai.value + 32;
    } else if (selectTo.value === "Reamur") {
      result = (4 / 5) * inputNilai.value;
    } else if (selectTo.value === "Celcius") {
      result = inputNilai.value;
    } else if (selectTo.value === "Reamur") {
      result = (4 / 5) * inputNilai.value;
    }
    document.getElementById("tampilNilai").innerHTML = result;
  } else if (selectFrom.value === "Fahrenheit") {
    if (selectTo.value === "Celcius") {
      result = (5 / 9) * (inputNilai.value - 32);
    } else if (selectTo.value === "Reamur") {
      result = (4 / 9) * (inputNilai.value - 32);
    } else if (selectTo.value === "Fahrenheit") {
      result = inputNilai.value;
    }
    document.getElementById("tampilNilai").innerHTML = result;
  } else if (selectFrom.value === "Reamur") {
    if (selectTo.value === "Celcius") {
      result = (5 / 4) * inputNilai.value;
    } else if (selectTo.value === "Fahrenheit") {
      result = (9 / 4) * inputNilai.value + 32;
    } else if (selectTo.value === "Reamur") {
      result = inputNilai.value;
    }
    document.getElementById("tampilNilai").innerHTML = result;
  }
}
function proses() {
  let color = document.getElementById("txtChangeColor").value;
  document.body.style.backgroundColor = color;
}

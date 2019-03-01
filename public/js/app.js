function checkSelectedProducts() {
  let classic = document.getElementById("classic").value;
  let standout = document.getElementById("standout").value;
  let premium = document.getElementById("premium").value;

  if (classic <= 0 && standout <= 0 && premium <= 0) {
    alert("Select at least one product");
    return false;
  }
}

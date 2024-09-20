document
  .getElementById("btn-add-money")
  .addEventListener("click", function name(event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById("input-pin-number").value;
    console.log(addPinInput);
  });

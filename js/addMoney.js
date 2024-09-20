// add money to the account
/*
S-1: add event handler
prevent page reload after form submit
s-2: get money to be added to the account balance
get the pin number

s-3: verify the pin number(not the ideal way)
*/

// s-1
document
  .getElementById("btn-add-money")
  .addEventListener("click", function name(event) {
    event.preventDefault();
    // s-2
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById("input-pin-number").value;
    console.log(addPinInput);
    // s-3
    if (addPinInput === "1") {
      console.log("adding money to your account");

      // step-4: get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      // step-5: add addMoneyInput with balance
      const addMoneyNumber = Number(addMoneyInput);
      const balanceNumber = Number(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      // step-6: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });

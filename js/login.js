//console e warning asle manage korte hobe

//step-1 get the event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //prevent default behaviour (prevent reloading browser)
    event.preventDefault();

    //get the phone number & pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    // step-4: validate phone and Pin
    // this is temporary. You should do like this.
    if (phoneNumber === "1" && pinNumber === "1") {
      console.log("you are loged in");
      window.location.href = "./home.html";
    } else {
      alert("wrong pin or number");
    }
  });

function getPayment() {
    let userPayment = prompt("Please enter your payment amount:");
    var inputBox = document.getElementById("payment");
    // Reset default border to white color
    inputBox.style.border="2px solid #ccc";

    // Validation input payment (-) or null
    if (userPayment <= 0){
        alert("Invalid payment input!");
        inputBox.style.border="2px solid Red";
        return;
    }
    // if payment input not number (can leter symble)
    else if(isNaN(userPayment)){
        alert("Input payment only number!");
        inputBox.style.border="2px solid Red";
        return;
    }
    var formatPayment = Number(userPayment).toLocaleString("de-DE",
        { style: "currency", currency: "USD" });

    document.getElementById("payment").value = formatPayment;

}

function toggleIcon(){
    var inputpayment=document.getElementById("payment");
    var toggle= document.getElementById("toggle");

    if(inputpayment.type=="text"){
        inputpayment.type="password";
        toggle.classList.remove("fa-eyes");
        toggle.classList.add("fa-eye-slash");
        toggle.style.color="blue";
    }else{
        inputpayment.type="text";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
        toggle.style.color="Green";
    }
}
function actionbutton(){
    var container=document.getElementById("container");
    var button =document.getElementById("btn-show");
    if(container.classList.toggle("show")){
        button.value="CLOSE";
        button.style.background="Red";
    } else {
        button.value="OPEN";
        button.style.background="Green";
        
    }
    // container.classList.toggle("show");

}
function getPayment(){
    var payment = document.getElementById("payment").value;
    //format payment => currency: 121
    var currency = Number(payment).toLocaleString("en-US",{
        style: "currency",
        currency: "USD",

    });
    if(payment === ""){
        alert("Plese input payment!!");
    }else{
        alert("You are get payment with:" +currency);
    }
    };
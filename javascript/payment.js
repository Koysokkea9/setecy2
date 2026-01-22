

var btncalculate= document.getElementById("calculate-btn");
var salaryInput= document.getElementById("salary");
var commissionInput= document.getElementById("commission");
var spanTotal= document.getElementById("total");
var toggle= document.getElementById("toggle");
var toggleper= document.getElementById("toggleper");
var salaryInput= document.getElementById("salary");
// var commissionInput= document.getElementById("commission");
var togglepercent= document.getElementById("toggleper");
var toggleper= document.getElementById("toggleper");

// format currency USD Dollar
var USDdollar= new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
} );  
// create funtion calculate salary
function calculatesalary(){
    var salary= salaryInput.value;
    var commission= commissionInput.value;
    var totalsalary= salary * ( 1 + commission / 100 );
    spanTotal.innerText=USDdollar.format(totalsalary);
}

// create function changIcon
function changIcon(){
    if(salaryInput.type=="number"){
       salaryInput.type="password";
       toggle.classList.remove("fa-dollar-sign");
       toggle.classList.add("fa-money-bill");
       toggle.style.color= "blue";
       spanTotal.style.display="none";
       commissionInput.type="password";
       togglepercent.classList.remove("fa-percent");
       togglepercent.classList.add("fa-check");
       togglepercent.style.color= "blue";
    }else{
       commissionInput.type="number";
       salaryInput.type="number";
       toggle.classList.remove("fa-money-bill");
       toggle.classList.add("fa-dollar-sign");
       toggle.style.color= "green";
       spanTotal.style.display="inline";
       togglepercent.classList.remove("fa-check");
       togglepercent.classList.add("fa-percent");
       togglepercent.style.color= "green";
    }
}
// Create event or action on button get id
btncalculate.addEventListener("click",calculatesalary);
// Create event or action icon toggle
toggle.addEventListener("click", changIcon);


/*រូបមន្ត​គណនារកប្រាក់ខែសរុបរបស់បុគ្គលិក
​ total salary = salary + commision * salary
                = salary*(1+ commision *1) 
                = salary*(1+ commision/100)*/
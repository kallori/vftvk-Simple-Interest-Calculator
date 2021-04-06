function compute()
{
    principal = document.getElementById("principal").value;
    
    // checking principal amount for validation
    if (principal <= 0)
    {
        alert("Please input a valid amount for the principal.");
        document.getElementById("principal").focus;
        return false;
    }
    
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = principal * rate * years / 100;
    // convert number of years into actual year in the future
    year = parseInt(new Date().getFullYear()) + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit: <mark>" + principal + "</mark><br>At an interest rate of: <mark>" + rate + "%</mark><br>You will receive an amount of: <mark>" + result + "</mark><br>In the year: <mark>" + year + "</mark>";
    
 }

 // Using this function to show the slider bar value
function showVal(newVal){
    document.getElementById("rate").innerHTML=newVal;
}
        

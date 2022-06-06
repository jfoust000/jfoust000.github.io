function compute()
{       //Boolean variable sent to setTimeout when giving focus to the Principal input element
        var validating = false;
        //Get value of Principal input element
        var principal = document.getElementById("principal").value;
        //Validate input by making sure it isn't null, negative, isNaN, or undefined
        //If it isn't valid, show alert, give principal focus, and clear results span
        if(principal <= 0 || principal === null || principal === undefined || isNaN(principal)){
        alert("Please Enter a Positive Number in the Amount Field");
            document.getElementById("principal").value = null;
            document.getElementById("result").innerHTML = null;
            setTimeout(function(){
                document.getElementById("principal").focus();
                validating = false;
            }, 1);
         }
        else {
            //Else, if valid, get the values of remaining elements entered by the user,
            // calculate interest over period of years,
            // and convert principal & interest to currency format
            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;
            var interest = principal * years * rate / 100;
            var year = new Date().getFullYear() + parseInt(years);

            var convertedPrincipal = Number(principal).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            var convertedInterest = Number(interest).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            //Fill results span innerHTML with user's entered input and calculated interest earned
            //Add span elements with corresponding ids to wrap around user's entered principle, rate, years,
            // and the calculated interest - this will allow us to set background color of the spans to yellow
            document.getElementById("result").innerHTML = "If you deposit " + "<span id='yellowPrincipal'>"
                + convertedPrincipal + "</span>" + "," +"<br\>"+"at an interest rate of " + "<span id='yellowRate'>"
                + rate + "%" +
                "</span>"+","+"<br\>"+"You will receive an amount of " + "<span id='yellowInterest'>"
                + convertedInterest +
                "</span>" + ","+"<br\>"+"in the year " + "<span id='yellowYear'>" + year + "</span>" + "<br\>"
            document.getElementById("yellowPrincipal").style.backgroundColor = "yellow";
            document.getElementById("yellowRate").style.backgroundColor = "yellow";
            document.getElementById("yellowInterest").style.backgroundColor = "yellow";
            document.getElementById("yellowYear").style.backgroundColor = "yellow";
        }
}
//Update the span rate_val to display the value of the range input rate
 function updateRate()
 {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval+"%";
 }


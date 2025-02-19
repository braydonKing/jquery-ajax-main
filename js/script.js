/* Sample event listener using jQuery */
/*
$("#myButton").click(myFunction);

or

$("#myButton").click(function(){

    //code here

});

same as:

document.getElementById("myButton").addEventListener("click", myFunction);
*/


/* Sample AJAX call using jQuery   */
/*

function myFunction(){

    $.ajax({
        method: "GET",
        url: "https://opentdb.com/api.php",
        data: { key1: "val1", key2: "val2"  }  
        // use data if needed, equates to https://opentdb.com/api.php?key1=val1&key2=val2 
        // data values could be arguments passed to the function
    })
        .done(function(response) {
            //response (or whatever you want to call the variable) is the API response          
            // first console.log the response to see it
            console.log(response);
            // while the AJAX call is asynchronous, code in this section is back to synchronous.                       
    });
}




*/

/* Write event handler and function for getting the token here */
$("#getToken").click(getToken);

function getToken(){
    console.log("I'm get token")
    $.ajax({
        method: "GET",
        url: "https://opentdb.com/api_token.php",
        data: {command: "request"}

    })

    $.done( function(response){
        console.log(response);

        var token = response.token;
        console.log(token)
        $("#tokenValue").html(token)
        //document.getElementById(tokenValue)
        //Ajax call is asynchronus, code in this


    })


}




/* Write event handler and function for getting a sports question, 
and displaying its question and correct answer here */


function getSportsQ(){




}




/*Write event handler and function for getting a history question,
and displaying the question plus possible answers as radio buttons here */


function getHistoryQ(){



    
}


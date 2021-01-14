document.getElementById("btnActivate").addEventListener("click", SunsetHills)
document.getElementById("btnClear").addEventListener("click", Clear)




// buttons hear, make a function for clear button


function SunsetHills(){
    // Step 1: Get all the user data
    let bldg1 = parseInt(document.getElementById("input1").value);
    let bldg2 = parseInt(document.getElementById("input2").value);
    let bldg3 = parseInt(document.getElementById("input3").value);
    let bldg4 = parseInt(document.getElementById("input4").value);
    let bldg5 = parseInt(document.getElementById("iInput5").value);

    // step 2: turn the user data into an array
    let bldgArray = new Array();
    bldgArray.push(bldg1);
    bldgArray.push(bldg2);
    bldgArray.push(bldg3);
    bldgArray.push(bldg4);
    bldgArray.push(bldg5);

    // step 3: determine which buildings can see the sunset(create a new array who's job it is to record ascending numbers)
    // by default the first number will be the max number
    let maxHeight = bldgArray[0];
    let acendingArray = new Array();
    acendingArray.push(maxHeight);

    // Step 4: cycle through the array and always add the largest numbers
    // if and only if the current building(number) is larger than the largest previous building(number) will i add it to the viewers(ascending) array
    for(let loop=1; loop < length; loop++){
        if(bldgArray[loop] > maxHeight){
            maxHeight = bldgArray[loop]
            acendingArray.push(maxHeight);
        }
         

    }   // Output to id="output" innerText or HTML
        // step 5 output results to the user
        document.getElementById("output").innerText = `The Acending array is [${viewers.join(', ')}]`;
        
    }
 

    



function Clear(){
    document.getElementById("input1").innerText = "";
}
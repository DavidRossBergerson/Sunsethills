




// buttons hear, make a function for clear button


function SunsetHills(){
    // Step 1: Get all the user data
    let bldg1 = parseInt(document.getElementById("shInput1").value);
    let bldg2 = parseInt(document.getElementById("shInput2").value);
    let bldg3 = parseInt(document.getElementById("shInput3").value);
    let bldg4 = parseInt(document.getElementById("shInput4").value);
    let bldg5 = parseInt(document.getElementById("shInput5").value);

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
    let viewers = new Array();
    viewers.push(maxHeight);

    // Step 4: cycle through the array and always add the largest numbers
    // if and only if the current building(number) is larger than the largest previous building(number) will i add it to the viewers(ascending) array
    for(let loop=1; loop < length; loop++){
        if(bldgArray[loop] > maxHeight){
            maxHeight = bldgArray[loop]
            viewers.push(maxHeight);
        }
         

    }   // Output to id="output" innerText or HTML
        // step 5 output results to the user
        document.getElementById("output").innerText = `The Ascending array is [${viewers.join(', ')}]`;
        
    }
    // [24683]
    // maxNum = 2
    // ascengingArray = [2

// userArray[1] = 4
// 4 > maxNum -->4 > 2
// maxNum = 4
// ascendingArray = [2,4]
// ...

// userArray[4] = 3
// 3 > maxNum --> 3 > 8
// ascendingArray = [2,4,6,8]

    



function Clear(){
    document.getElementById("shInput1").innerText = "";
}
    document.getElementById("btnActivate").addEventListener("click", SunsetHills)
    document.getElementById("btnClear").addEventListener("click", Clear)

    function SunsetHills(){
    // Step 1: Get all the user data
        let bldg1 = parseInt(document.getElementById("input1").value);
        let bldg2 = parseInt(document.getElementById("input2").value);
        let bldg3 = parseInt(document.getElementById("input3").value);
        let bldg4 = parseInt(document.getElementById("input4").value);
        let bldg5 = parseInt(document.getElementById("input5").value);

    
        let bldgArray = new Array();
        bldgArray.push(bldg1);
        bldgArray.push(bldg2);
        bldgArray.push(bldg3);
        bldgArray.push(bldg4);
        bldgArray.push(bldg5);

  
        let maxHeight = bldgArray[0];
        let acendingArray = new Array();
        acendingArray.push(maxHeight);

    
        for(let loop=1; loop < bldgArray.length; loop++){
            if(bldgArray[loop] > maxHeight){
                maxHeight = bldgArray[loop]
                acendingArray.push(maxHeight);
        }
         

        }  
        
        if (isNaN(bldg1) || isNaN(bldg2) || isNaN(bldg3) || isNaN(bldg4) || isNaN(bldg5)) 
        {
           
            document.getElementById("output").innerText = "Please enter a number in each box!";
        }
       
           else if(acendingArray.length == 1){
            document.getElementById("output").innerText = `Their is 1 building that can see the Sunset:  [${acendingArray.join(', ')}]`;
        }else
        {
            document.getElementById("output").innerText = `Their are ${acendingArray.length} buildings that can see the Sunset:  [${acendingArray.join(', ')}]`;
        }
        
    }
 
    function Clear(){
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
        document.getElementById("input4").value = "";
        document.getElementById("input5").value = "";
        document.getElementById("input6").value = "";
        document.getElementById("output").innerText = "";
    

}   
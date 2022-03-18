console.log("sort the array into ascending order, then for each string \
match it to the prefix of the subsequent strings via regular expression: ");

function solution(numbers) {  //begin function
    //var startTime = performance.now(); //simply to calculate the execution time of this function
    //console.log(numbers);
    let consistent = true;
    if (numbers.length >= 2){
        numarray = numbers.sort(function(a,b){return a-b}); //sort array into ascending order
        //console.log (numarray);
        for (let i = 0; i < numarray.length; i++){   
            if (consistent == false){
                break;
            }  
            prefix = numarray[i];                    //set numarray[i] as a prefix
            regexp = new RegExp("\\b" + prefix); //set the prefix to be a regular expression to be used in the while loop below (\b - find a match at the beginning of the prefix)
            //console.log("Prefix number: " + prefix); 
            let j = i+1;
            while (j < numarray.length){            //this loop will loop from numarray[i + 1] up until numarray[numarray.length - 1], however will terminate once inconsistencies is found
                testnum = numarray[j];              //set numarray[i+1] as the test mumber
                //console.log("Test number: " + testnum);       
                outcome = testnum.match(regexp);
                if (outcome != null){ //match if the beginning of the string/number being tested matched with the regular expression (the regexp holds the prefix value)
                   consistent = false;
                   break;
                }
                j = j + 1;
            }
        }
    }
    console.log(consistent);
    //var endTime = performance.now() //simply to calculate the execution time of this function
    //console.log(`execution time: ${(endTime-startTime)/1000} seconds`); //simply to calculate the execution time of this function
} //end function



solution(["911", "9876543", "9112345"]) //return false
solution(["831", "9876543", "9112345"]) //return true
solution(["831", "7876543", "9112345"]) //return true

//another test cases
solution(["1050000", "101", "75450000"]) //should return true
solution(["1010000", "101", "75450000"]) //should return false
solution(["831", "7876543", "9112345", "9113456"]) //should return true
solution(["831", "7876543", "91123", "9112345"]) //should return false
solution(["1050000", "101", "75450101"]) //should return true
solution(["1050000", "101", "71010000"]) //should return true
solution(["1050000", "101", "71010000", "1010000"]) //should return false
solution(["101"]) //should return true
solution(["101", "102"]) //should return true
solution(["101", "101111111"]) //should return false

//more test cases
solution(["10512000", "75450000", "101"]); //should return true
solution(["10512000", "101", "75450000","1030000", "102", "75450101"]) //should return true
solution(["10512000", "101", "75450000","1030000", "102", "75450101", "831", "7876543", "91123"]) //should return true
solution(["10512000", "75450000", "105"]); //should return false
solution(["10512000", "101", "105","1030000", "102", "75450101"]) //should return false
solution(["83112000", "101", "75450000","1030000", "102", "75450101", "831", "7876543", "91123"]) //should return false
solution(["10512000", "101", "75450000","1030000", "102", "75450101", "831", "7876543", "105"]) //should return false
console.log("No sorting and using regular expression: ");

function solution(numbers) {  //begin function
    //var startTime = performance.now(); //simply to calculate the execution time of this function
    //console.log(numbers);
    let consistent = true;
    if (numbers.length >= 2)
    {
        for (let i = 0; i < numbers.length; i++)
        {   
            if (consistent == false){
                break;
            } 
            prefix = numbers[i];                     //take a string from the array and named it as prefix
            //console.log("prefix: " + prefix);
            regexp = new RegExp("\\b" + prefix);     //convert prefix into regexp
            numarray = numbers.map((x) => x);        //clone numbers array into numarray
            numarray.splice(i,1);                    //remove the string assigned to prefix from the array
            //console.log("test numbers: " + numarray);
            for (let i =0; i < numarray.length; i++){
                outcome = numarray[i].match(regexp); //match if the beginning of the string/number being tested matched with the regular expression (the regexp holds the prefix value)
                if (outcome != null){
                    consistent = false;
                    break;
                }
            }
        }
    }
    console.log(consistent);
    //var endTime = performance.now() //simply to calculate the execution time of this function
    //console.log(`execution time: ${(endTime-startTime)/1000} seconds`); //simply to calculate the execution time of this function
} //end function


solution(["911", "9876543", "9112345"]) //returns false
solution(["831", "9876543", "9112345"]) //returns true
solution(["831", "7876543", "9112345"]) //returns true

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
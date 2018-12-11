//Declare needed variables for page
var haulerName;
var trailerNumber;
var entranceTime;
var trailerForm;
var tableGenerator;
var trailerGridArea;


//Assign values to get from HTML form, make arrays for data
haulerName = [];
trailerNumber = [];
entranceTime = [];
trailerForm = document.getElementById("TrailerDrop");
tableGenerator = document.getElementById("tableGenerate");
trailerGridArea = document.getElementById("TrailerGridArea");


//Function that generates valid HTML table
function generateTable() {
    //Loops through all trailers in trailerNumber array, creates HTML table row for each trailer
    for (var trailerCount = 0; trailerCount < trailerNumber.length ; trailerCount++){
      trailerGridArea.innerHTML += "<tr><td>" + haulerName[trailerCount] + "</td><td>" + trailerNumber[trailerCount] + "</td><td>" + entranceTime[trailerCount] + "</td></tr>";
    }
}

//Functions to add values to data arrays
function addToTable(){
    //Generate varables
    var nameField;
    var trailerField;
    var timeField;
    var truckCompany = document.getElementById("truckCompany");
    var getTrailerNumber = document.getElementById("trailerNumber");
    var getTime = document.getElementById("timeDrop");
    
    //Turn data to values that can be stored in arrays
    nameField = truckCompany.value;
    trailerField = getTrailerNumber.value;
    timeField = getTime.value;
      
    //push the data to global arrays
    // NESTED IF TO CHECK IF VALID DATA?
    haulerName.push(nameField);
    trailerNumber.push(trailerField);
    entranceTime.push(timeField);

}

//Grabs form information on click, returns prompt if already added
trailerForm.addEventListener("submit", 
    function(event){           
        var getTrailerField;
        var TestTheTrailer;
        
        getTrailerField = document.getElementById("trailerNumber");
        TestTheTrailer = trailerField.value;
        
        for (var trailerIndex = 0; trailerAmount < trailerNumber.length; trailerAmount++){
          if(trailerTest == trailerNumber[trailerAmount]){
            alert("You have already added this trailer.");
          } else { 
            alert("Success.");
          }
        }
        addToTable(); 
        event.preventDefault();
    });

//Generate a formatted table on click
tableGenerator.addEventListener("submit",
    function(event){
        generateTable();
        event.preventDefault();
    });

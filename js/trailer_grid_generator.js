//Declare needed variables for page
var haulerName;
var trailerNumber;
var entranceTime;
var trailerForm;
var tableGenerator;
var trailerGridArea;


//Assign values to get from HTML form, make arrays for data
//Start arrays with default value
haulerName = ["Begin table"];
trailerNumber = ["InitTable"];
entranceTime = ["n/a"];
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
    var addTheTrailer;

    //Turn data to values that can be stored in arrays
    nameField = truckCompany.value;
    trailerField = getTrailerNumber.value;
    timeField = getTime.value;
    
    //Loop through trailer to be added to see if duplicate
    for (var trailerIndex = 0; trailerIndex < trailerNumber.length; trailerIndex++){
      switch(trailerField === trailerNumber[trailerIndex]){
        case true:
          addTheTrailer = "false";
          break;
        case false:
          addTheTrailer = "true";
        default:
          addTheTrailer = "true";
        }
      }
     
    //If trailer is already in table, alert user; else add data to table
    if (addTheTrailer === "true") {
      haulerName.push(nameField);
      trailerNumber.push(trailerField);
      entranceTime.push(timeField);
      alert("Success");
    } else if (addTheTrailer === "false"){
      alert("You have already added this trailer.");
    } else {
      //Alert to see what value addTheTrailer is in event of failure
      alert(addTheTrailer);
    }
}

//Submits entered data to array on click.
trailerForm.addEventListener("submit", 
    function(event){           
        addToTable(); 
        event.preventDefault();
    });

//Generates formatted table on click.
tableGenerator.addEventListener("submit",
    function(event){
        //Generate the table and hide the button so it cannot be run again
        //".classList.add" function found at https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
        tableGenerator.classList.add("hide");
        generateTable();
        event.preventDefault();
    });

var timeSlots = [];
var container = $(".container");


var startTime = 9;
var endTime = 17;
var workHours = endTime - (startTime - 1);

var startDate = moment({hour: startTime});
var endDate = moment({hour: endTime});

$("#currentDay").text(moment().format('ddd, MMMM Do YYYY'));

// initialize workDay
var workDay = JSON.parse(localStorage.getItem('workDay')) || [];

// function to pull the workDay from local storage or create it
var createWorkDay = function() {
    if(workDay.length === 0){
        for(var i = 0; i < workHours; i++){
            var timeBlock = {
                id: i,
                hour: moment(startDate).add(i,'hours'),
                description: ''
            }
            workDay.push(timeBlock);
        }
        localStorage.setItem('workDay',JSON.stringify(workDay));
    }
};

// save workDay to localStorage
var saveWorkDay = function(){
    localStorage.setItem('workDay', JSON.stringify(workDay));
}

var auditTimeBlock = function(timeBlock, timeBlockDescriptionEl) {
    timeBlockHour = moment(timeBlock.hour).format('H');
    currentHour = moment().format('H'); 

    if(timeBlockHour - currentHour < 0){
        timeBlockDescriptionEl.addClass('past');
    }
    else if (timeBlockHour - currentHour > 0) {
        timeBlockDescriptionEl.addClass('future');
    }
    else {
        timeBlockDescriptionEl.addClass('present');
    }

}
// generate and audit the schedule based on the workDay
var populateSchedule = function() {

    workDay.forEach(function(timeBlock){
        // create timeBlock row and elements
        var timeBlockRow = $("<div>").addClass("row time-block")
        .attr("id", timeBlock.id);
        var timeBlockHour = $("<div>").addClass("col-lg-2 hour").text(moment(timeBlock.hour).format('ha'));
        var timeBlockDescription = $('<div>').addClass("col-lg-8 description");
        var descriptionContents = $('<div>').text(timeBlock.description);
        var timeBlockSave = $('<div>').addClass("col-lg-2 saveBtn").html('<i class="fas fa-save"></i>');

        // audit each timeBlock to ensure the correct color coding is applied
        auditTimeBlock(timeBlock, timeBlockDescription);

        // append timeBlock row elements to row
        timeBlockDescription.append(descriptionContents);
        timeBlockRow.append(timeBlockHour,timeBlockDescription,timeBlockSave);

        // append timeBlock row to container
        container.append(timeBlockRow);
    });
}


$(".container").on("click",".description", function() {
    // get timeBlock description
    var text = $(this).find('div:first')
    .text()
    .trim();
    // change timeBlock description to textBox
    var textInput = $("<textarea>")
    .val(text);
    $(this).find('div:first').replaceWith(textInput);
    textInput.trigger("focus");
});

$(".container").on("blur", "textarea", function(){
    // get timeBlock id
    var id = $(this).closest('.row').attr('id');
    var text = $(this)
    .val()
    .trim();

    workDay[id].description = text;

    saveWorkDay();

    // create a div populated with the user's entry
    var updatedTimeBlockDescription = $("<div>")
    .text(text);

    // replace textarea with div
    $(this).replaceWith(updatedTimeBlockDescription);
});

createWorkDay();
populateSchedule();
// VARIABLES


// FUNCTIONS

// function that makes the api request to /api/owners/roster
function getRoster() {
    $.ajax(
        { url: "/api/owners/roster", method: "GET" })
        .then(function (data) {
            // console.log(data);
            displayRoster(data);
        });
};

// function that takes in the ajax data and builds the roster on the page
function displayRoster(data) {
    // capture the parameter, store it as rawData
    var rawData = data;
    // console.log(rawData.length);

    // select the roster-display hook
    var rosterDislay = $("#roster-list");



    // for loop that's going to build the roster
    for (var i = 0; i < rawData.length; i++) {
        var id = rawData[i].id;
        var name = rawData[i].ownername;
        var modPos = rawData[i].modifiedPos;
        var selecting = rawData[i].selecting
        // console.log(id + " " + name + " " + modPos + " " + selecting);
        var temp = $("<li>" +" " + name + " " + "</li>");
        temp.addClass("list-item");

        var button = $("<button>Submit</button>");
        button.addClass("roster-submit");
        button.attr("data-id", id);
        button.attr("data-modpos", modPos);
        button.attr("data-selecting", selecting)


        temp.attr("data-id", id);
        temp.attr("data-modpos", modPos);
        temp.attr("data-selecting", selecting);
        if (selecting === true) {
            temp.append(button);
        };
        rosterDislay.append(temp);
    }



};





// MAIN PROCESSES

$(document).ready(function () {
    // console.log("roster_display.js connected");
    getRoster();



});
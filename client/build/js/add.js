// Code here handles what happens when a user submits a new scenario on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
// $("#add-btn").on("click", function (event) {
//     event.preventDefault();

    

//     // make a newScenario object
//     var newScenario = {
//         // name from name input
//         name: $("#name").val().trim(),
//         // total assets at retirement
//         totalAssets: $("#total-assets").val().trim(),
//         // income while in retirement
//         incomeInRetirement: $("#income-in-retirement").val().trim(),
//         // points from force-points input
//         retirementAge: $("#retirement-age").val().trim(),
//         // target city
//         targetCity: $("#target-city").val().trim()
//     };

//     // send an AJAX POST-request with jQuery
//     $.post("/api/new", newScenario)
//         // on success, run this callback
//         .then(function (data) {
//             // log the data we found
//             console.log(data);
//             // tell the user we're adding a character with an alert window
//             alert("Adding scenario...");
//         });

//     // empty each input box by replacing the value with an empty string
//     $("#name").val("");
//     $("#total-assets").val("");
//     $("#income-in-retirement").val("");
//     $("#retirement-age").val("");
//     $("#target-city").val("");

// });


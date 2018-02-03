
// $(document).ready(function () {

    var config = {
        apiKey: "AIzaSyBCh0eUX0K2NugBzP8djrIm0p1Z5Ni1bTw",
        authDomain: "train-app-ea927.firebaseapp.com",
        databaseURL: "https://train-app-ea927.firebaseio.com",
        projectId: "train-app-ea927",
        storageBucket: "train-app-ea927.appspot.com",
        messagingSenderId: "187536975899"
      };

    firebase.initializeApp(config);
    var database = firebase.database();

    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
  
        var name = $("#train-name-input").val().trim();
        var dest = $("#destination-input").val().trim();
        var initialTime = $("#first-time-input").val().trim();
        var frec = $("#frecuency-input").val().trim();

        var newTrain = {
            nameTrain: name,
            destination: dest,
            start: initialTime,
            frecuency: frec
        };

        database.ref().push(newTrain);
        //console.log(name);
        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#first-time-input").val("");
        $("#frecuency-input").val("");
    });



    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    //   function timeCalculator(parameter1, parameter2){

    //   }
// });
var tasks = [];

// time at the top
var todaysDate = moment().format('LLLL');
$("#currentDay").text(todaysDate);

console.log(todaysDate);

// change colors of rows based on hour

var auditTask = function() {
    var hourRn = moment().hours();
    console.log(hourRn);

    $('.time-block').each(function(){
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(rowHour);
        if (rowHour < hourRn) {
            $(this).addClass("past");
        } else if (rowHour === hourRn) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).addClass("future");
        }
    });
}

auditTask();

setInterval(auditTask,(1000 * 60) * 10);

// check to see if there are already tasks list saved in local storage

var renderTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
    console.log(tasks.length);

    for (var i = 0; i < 10; i++) {
        if(!tasks[i]) {
            $("textarea")[i].value = "";
        } else {
            $("textarea")[i].value = tasks[i];
        }
    }
}

renderTasks();

// save work day task on button click
$(".saveBtn").on("click", function() {
    
    var textInput = function() {
        
        for (var i = 0; i < 10; i++) {
        tasks[i] = $("textarea")[i].value;
        }
    }
    textInput();
    console.log(tasks);

    localStorage.setItem("tasklist", JSON.stringify(tasks));

});
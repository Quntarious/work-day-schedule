$(".saveBtn").on ("click", function(){
    var text= $(this).siblings ("textarea").val ()
    var time=$(this).siblings ("textarea").attr ("id")
    localStorage.setItem (time,text)
})

for (var i = 9; i <= 17; i++) {
    $("#" + i).val(localStorage.getItem(i));
  }

  setInterval(function() {
    var currentdate= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentdate)
}, 1000)

$("textarea").each (function() {
    var textareatime= $(this).attr ("id")
    var currenttime=12 
    if (textareatime== currenttime) $(this).addClass ("present")
    if (textareatime < currenttime) $(this).addClass ("past")
    if (textareatime > currenttime) $(this).addClass ("future")
    console.log (textareatime)
})
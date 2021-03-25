$(document).ready(function() {
  $("#choice1").change(function() {
    getSelection();
  });
});
function getSelection() {
  var value1Selected = $("#choice1").val();
  var value2Selected = $("#choice2").val();
  var value3Selected = $("#choice3").val();
  document.getElementById("choice1Out").innerHTML = value1Selected;
  document.getElementById("choice2Out").innerHTML = value2Selected;
  document.getElementById("choice3Out").innerHTML = value3Selected;
}
$(document).ready(function() {
  $("#choice1").change(function() {
    getSelection();
  });
});
function getSelection() {
  var valueSelected = $("#choice1").val();
  document.getElementById("choice1Out").innerHTML = valueSelected;
}
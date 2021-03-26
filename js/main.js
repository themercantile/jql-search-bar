
function setValueHtml(choiceId, inputId, outId) {
  const choice = $(choiceId).val();
  const input = $(inputId).val();
  let operator = "=";
  if (choice === "reporter") {
    $(outId).html(`${choice} = ${input}`);
  } else if (choice === "description") {
    $(outId).html(`${choice} ~ "${input}"`);
  }
}

function getSelection() {
  setValueHtml('#choice1', '#firstInput', '#choice1Out');
  // setValueHtml('choice2', 'choice2Out');
  // setValueHtml('choice3', 'choice3Out');
}

function onDocumentReady() {
  $("#choice1").change(getSelection);
  $("#firstInput").keyup(getSelection);
  getSelection();
}

$(document).ready(onDocumentReady);

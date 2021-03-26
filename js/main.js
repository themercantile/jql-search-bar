
function setValueHtml(choiceId, inputId, outId) {
  const choice = $(choiceId).val();
  const input = $(inputId).val();
  if (choice === "reporter") {
    $(outId).html(`${choice} = ${input}`);
  } else if (choice === "description") {
    $(outId).html(`${choice} ~ "${input}"`);
  }
}

function getSelection() {
  setValueHtml('#choice1', '#firstInput', '#choice1Out');
  setValueHtml('#choice2', '#secondInput', '#choice2Out');
  setValueHtml('#choice3', '#thirdInput', '#choice3Out');
}

function onDocumentReady() {
  $("#choice1").change(getSelection);
  $("#firstInput").keyup(getSelection);
  getSelection();
}

$(document).ready(onDocumentReady);

/* 
Basic syntax is: $(selector).action()
A $ sign to define / access jQuery
A(selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s) 
*/
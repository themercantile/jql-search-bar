function toOperator(word) {
  switch(word) {
    case "reporter":
      return "reporter =";
    case "description":
      return "description ~";
  }
}

function newExpression() {
  $("#expressions").append($(".template").html());
  $(".operator").change(renderJQL);
  $(".value").keyup(renderJQL);
  $(".joiner").change(renderJQL);
  $(".expression:not(:last-child)").find(".joiner").show();
  $(".expression:last-child").find(".joiner").hide();
  // $(".joiner:not(:last-child)").show();
  // $(".joiner:last-child").hide();
  renderJQL();
}

function renderJQL() {
  let newExpression = [];
  $(".expression:not(:last-child)").each(function() {
    const operator = $(this).find(".operator").val();
    const value = $(this).find(".value").val();
    const joiner = $(this).find(".joiner").val();
    newExpression.push(`${toOperator(operator)} ${value} ${joiner}`);
  });
  const lastChild = $(".expression:last-child");
  const operator = lastChild.find(".operator").val();
  const value = lastChild.find(".value").val();
  newExpression.push(`${toOperator(operator)} ${value}`);
  $("#output").html(newExpression.join(" "));

}

// I want to make the following function redundant. You shouldn't have to click a 
// button to add another argument. An empty field should signify that no more 
// fields will be input.

function onDocumentReady() {
  $("#add").click(newExpression);
  newExpression();
}

$(document).ready(onDocumentReady);
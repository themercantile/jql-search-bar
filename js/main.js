function toOperator(word) {
  switch (word) {
    case "reporter":
      return "reporter =";
    case "description":
      return "description ~";
  }
}

function newExpression() {
  $("#expressions").append($(".template").html()); // item with ID "expressions" append item with the .html() within the class "template".
  // In effect, the line above this one adds a snippet of html code defined by an item with the class of "template". It's activated by clicking the item with an ID of "add".
  $(".operator").change(renderJQL); // if an item with the class "operator" changes,  load a reference to the function "renderJQL".
  $(".value").keyup(renderJQL); // if a field with the class "value" detects that a key that was depressed is now on its way up, load a reference to the function "renderJQL".
  $(".joiner").change(renderJQL); // if an item with the class "joiner" changes,  load a reference to the function "renderJQL".
  $(".expression:not(:last-child)") // items with class "expression" that ARE NOT the last child.
    .find(".joiner") // return descended elements of class "joiner"
    .show(); // show the selected elements
  $(".expression:last-child") // items  with class "expression" that ARE the last child.
    .find(".joiner") // return descended elements of class "joiner"
    .hide(); // hide the selected elements
  // $(".joiner:not(:last-child)").show();
  // $(".joiner:last-child").hide();
  renderJQL(); // function call to renderJQL - This will execute one of the references to renderJQL from above.
}

function renderJQL() {
  let newExpression = [];
  $(".expression:not(:last-child)").each(function() {
    const operator = $(this)
      .find(".operator")
      .val();
    const value = $(this)
      .find(".value")
      .val();
    const joiner = $(this)
      .find(".joiner")
      .val();
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
  $("#add").click(newExpression); //HTML item with ID "add". On click, load a reference (no brackets) to the newExpression function.
  newExpression(); //Call the function newExpression. I don't understand why we are placing a reference to this function in the line above.
}

$(document).ready(onDocumentReady);

//I would like to find the ticket:

//English version of the field name
var engField = {
  "Assignee": "whose assignee ",
  "Attachments": "whose attachment list ",
  "Category": "with the category ",
  "Comment": "which has a comment that ",
  "Created": "created on ",
  "Customer Request Type": "with a request type of ",
  "Description": "whose description ",
  "Due": "whose due date is ",
  "Issue Key": "with an issue key ",
  "Labels": "whose label ",
  "Reporter": "whose reporter ",
  "Resolved": "whose resolved date ",
  "Status": "whose status ",
  "Summary": "whose summary ",
  "Text": "which has a text that ",
  "Type": "whose issue type "
};

//English version of the operators
var engOperator = {
  "IS": "is",
  "IS NOT": "is not",
  "IN": "is in",
  "NOT IN": "is not in",
  "~": "which contains",
  "!~": "which doesn't contain",
  "=": "is equal to",
  "!=": "is not equal to",
  ">": "is greater than",
  ">=": "is greater than or equal to",
  "<": "is less than",
  "<=": "is less than or equal to"
};

//Legal operators for each of the fields
var fieldOp = {
  "Assigneee": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"],
  "Attachments": ["IS", "IS NOT"],
  "Category": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"],
  "Comment": ["~", "!~"],
  "Created": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"],
  "Customer Request Type": ["=", "!=", "IN", "NOT IN"],
  "Description": ["~", "!~", "IS", "IS NOT"],
  "Due": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"],
  "Issue Key": ["=", "!=", ">", ">=", "<", "<=", "IN", "NOT IN"],
  "Labels": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"],
  "Last Viewed": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"],    
  "Reporter": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"],
  "Resolved": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"],
  "Status": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"],
  "Summary": ["~", "!~", "IS", "IS NOT"],
  "Text": ["~", "!~"],
  "Type": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"]
};

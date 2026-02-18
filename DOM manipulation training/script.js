// ---------------------------------------------------
// 1) DOM Selection (Using querySelector)
// ---------------------------------------------------
let input = document.querySelector("input");
let button = document.querySelector("button");
let orderedList = document.querySelector("ol");

// ---------------------------------------------------
// 2) Event Handling (Button Click)
// ---------------------------------------------------
button.addEventListener("click", function () {

  // Get the task entered by the user
  let task = input.value.trim();

  // Prevent adding empty tasks
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // ---------------------------------------------------
  // 3) Dynamic Element Creation
  // ---------------------------------------------------
  let listItem = document.createElement("li");
  listItem.innerText = task;

  // Apply styling using style.property
  listItem.style.color = "navyblue";
  listItem.style.fontSize = "20px";
  listItem.style.fontWeight = "bold";
  listItem.style.padding = "10px";

  // Add class using setAttribute()
  listItem.setAttribute("class", "taskItem");

  // ---------------------------------------------------
  // 4) Append the <li> to <ol>
  // ---------------------------------------------------
  orderedList.append(listItem);

  // Remove the task when clicked
  listItem.addEventListener("click", function () {
    listItem.remove();
  });

  // ---------------------------------------------------
  // 5) Clear input field after adding task
  // ---------------------------------------------------
  input.value = "";
});
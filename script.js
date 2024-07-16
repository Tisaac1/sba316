

document.addEventListener("DOMContentLoaded", function (){
  const mainTitle = document.getElementById("main-title")

  const List = document.getElementById("focus-list");
  const focusAlert = document.getElementById("Alert");
  const itemList = document.getElementById("next-item-list");
  const newItemButton = document.getElementById("new-item-button");

  //to change parent element style

  function UpdateListItems(e) {
    if (
      document.parentElement.querySelector("div").style.textDecoration ===
      ""
    ) {
      divElement.style.textDecoration = "line-through";
      focusListValue.value =
        document.parentElement.parentElement.querySelector("div").innerText;
      updateText = document.parentElement.parentElement.querySelector("div");
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      focusListValue.focus();
    }
  }

  function UpdateOnSelectedlistItems() {
    let IsPresent = false;
    focusList.forEach((element) => {
      if (element.item == listValue.value) {
        IsPresent = true;
      }
    });


    focusList.forEach((element) => {
      if (element.item == updateText.innerText.trim()) {
        element.item = listValue.value;
      }
    });


  }

  function list(assignments) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
      document.parentElement.querySelector("div").style.textDecoration = "cross";


      focusList.forEach((element) => {
        if (
          document.parentElement.querySelector("div").innerText.trim() == element.item
        ) {
          element.status = true;
        };
      });

    }

    //Purpose: This line adds another event listener to the mainTitle element.
    //
    mainTitle.addEventListener("mouseout", function () {

      mainTitle.style.color = "white";
    });

const listItems = focusList.querySelectorAll("div")
listItems.forEach((item) => {
  item.addEventListener("click", updateListItems);
  item.addEventListener("blur", handleListenItems)
});


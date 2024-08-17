document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.getElementById("main-title");
  const focusList = document.getElementById("focus-list");
  const focusAlert = document.getElementById("Alert");
  const itemList = document.getElementById("next-item-list");
  const newItemButton = document.getElementById("new-item-button");

 
  const focusListValue = document.getElementById("focus-list-value");
  const addUpdate = document.getElementById("add-update");
  const listValue = document.getElementById("list-value");

  function updateListItems(e) {
    const divElement = e.target;
    if (divElement.style.textDecoration === "") {
      divElement.style.textDecoration = "line-through";
      focusListValue.value = divElement.innerText;
      updateText = divElement;
      addUpdate.setAttribute("onclick", "updateOnSelectedListItems()");
      focusListValue.focus();
    }
  }

  function updateOnSelectedListItems() {
    let isPresent = false;
    const focusListItems = focusList.querySelectorAll("div");

    focusListItems.forEach((element) => {
      if (element.innerText.trim() === listValue.value) {
        isPresent = true;
      }
    });

    if (isPresent) {
      focusListItems.forEach((element) => {
        if (element.innerText.trim() === updateText.innerText.trim()) {
          element.innerText = listValue.value;
        }
      });
    }
  }

  function updateList(e) {
    const divElement = e.target;
    if (divElement.style.textDecoration === "") {
      divElement.style.textDecoration = "line-through";

      const focusListItems = focusList.querySelectorAll("div");
      focusListItems.forEach((element) => {
        if (element.innerText.trim() === divElement.innerText.trim()) {
          element.status = true; 
        }
      });
    }
  }

 
  mainTitle.addEventListener("mouseout", function () {
    mainTitle.style.color = "white";
  });

  const listItems = focusList.querySelectorAll("div");
  listItems.forEach((item) => {
    item.addEventListener("click", updateListItems);
    item.addEventListener("blur", handleListItems);
  });
  
 
  function handleListItems(e) {
   
  }
});

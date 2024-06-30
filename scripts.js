document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const sendButton = document.getElementById("send-button");

  addButton.addEventListener("click", addItem);
  sendButton.addEventListener("click", sendWhatsAppMessage);

  function addItem() {
    const newItemInput = document.getElementById("new-item");
    const newItemValue = newItemInput.value.trim();
    if (newItemValue) {
      const shoppingList = document.getElementById("shopping-list");
      const newItem = document.createElement("li");
      newItem.innerHTML = `<label><input type="checkbox" value="${newItemValue}"> ${newItemValue}</label>`;
      shoppingList.appendChild(newItem);
      newItemInput.value = "";
    }
  }

  function sendWhatsAppMessage() {
    const checkboxes = document.querySelectorAll(
      '#shopping-list input[type="checkbox"]:checked'
    );
    const selectedItems = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );
    if (selectedItems.length > 0) {
      const message = encodeURIComponent(
        `Shopping List: \n${selectedItems.join("\n")}`
      );
      const whatsappURL = `https://wa.me/?text=${message}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("Please select items to send.");
    }
  }
});

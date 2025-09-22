//start changeStatus
const changeStatus = document.querySelectorAll("[buttonChangeStatus]");
const buttonFormStatus = document.querySelector("[buttonFormStatus]");
if (changeStatus) {
  changeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("buttonID");
      const status = button.getAttribute("buttonStatus");
      const path = buttonFormStatus.getAttribute("path");
      const action = path + `/${id}` + `/${status}` + "?_method=PATCH";
      buttonFormStatus.action = action;
      buttonFormStatus.submit();
    });
  });
}
//end changStatus
//start checkbox
const checkboxAll = document.querySelector("[checkboxAll]");
const checkboxChild = document.querySelectorAll("[checkboxChild]");
const forminputMulti = document.querySelector("[formChangeMulti]");
const inputMulti = forminputMulti.querySelector("input[name=id]");
const buttonSubmit = forminputMulti.querySelector("button[type=submit]");
if (checkboxAll) {
  checkboxAll.addEventListener("click", () => {
    if (checkboxChild) {
      checkboxChild.forEach((checkChild) => {
        if (checkboxAll.checked == true) {
          checkChild.checked = true;
        } else {
          checkChild.checked = false;
        }
      });
      const checkboxChildLengthChecked = document.querySelectorAll(
        "[checkboxChild]:checked"
      );
      const inputValue = [...checkboxChildLengthChecked]
        .map((e) => e.value)
        .join(",");
      console.log(inputValue);
      inputMulti.value = inputValue;
      if (inputMulti.value) {
        buttonSubmit.removeAttribute("disabled");
      } else {
        buttonSubmit.setAttribute("disabled", true);
      }
    }
  });
}
if (checkboxChild) {
  checkboxChild.forEach((checkChild) => {
    checkChild.addEventListener("click", () => {
      const checkboxChildLengthChecked = document.querySelectorAll(
        "[checkboxChild]:checked"
      );
      if (checkboxChildLengthChecked.length == checkboxChild.length) {
        checkboxAll.checked = true;
      } else {
        checkboxAll.checked = false;
      }
      const inputValue = [...checkboxChildLengthChecked]
        .map((e) => e.value)
        .join(",");
      console.log(inputValue);
      inputMulti.value = inputValue;
      if (inputMulti.value) {
        buttonSubmit.removeAttribute("disabled");
      } else {
        buttonSubmit.setAttribute("disabled", true);
      }
    });
  });
}

//end checkbox

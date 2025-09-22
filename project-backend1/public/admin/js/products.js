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

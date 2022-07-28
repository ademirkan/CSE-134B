export function customalert(msg) {
  // find dialog object by id[
  let dialog = document.getElementsByTagName("dialog")[0];
  dialog.innerHTML = "";

  // find alerttemplate by id
  let template = document.getElementById("alertTemplate");

  // inject the dalogue object wth alerttemplate
  let clone = template.content.cloneNode(true);

  dialog.appendChild(clone);
  dialog.getElementsByTagName("p")[0].innerText = msg;

  dialog.showModal();

  // showmodal
  dialog.returnValue = "";
}

export function customconfirm(msg) {
  // find dialog object by id[
  let dialog = document.getElementsByTagName("dialog")[0];

  // find confirmtemplate by id
  let template = document.getElementById("confirmTemplate");

  // inject the dalogue object wth confirmtemplate
  let clone = template.content.cloneNode(true);

  dialog.appendChild(clone);
  dialog.getElementsByTagName("p")[0].innerText = msg;

  let confirmButton = dialog.getElementsByTagName("button")[0];
  let cancelButton = dialog.getElementsByTagName("button")[1];

  confirmButton.addEventListener("click", () => {
    dialog.returnValue = "confirmTrue";
  });

  dialog.showModal();
  dialog.returnValue = "confirmFalse";
}

export function customprompt(msg) {
  let value = "";
  // find dialog object by id[
  let dialog = document.getElementsByTagName("dialog")[0];

  // find confirmtemplate by id
  let template = document.getElementById("promptTemplate");

  // inject the dalogue object wth confirmtemplate
  let clone = template.content.cloneNode(true);
  let input = clone.querySelector("input");

  input.addEventListener("input", (event) => {
    value = event.target.value;
    dialog.returnValue = value;
  });

  dialog.appendChild(clone);
  dialog.getElementsByTagName("p")[0].innerText = msg;
  dialog.showModal();
}

export function blogprompt() {
  // find dialog object by id[
  let dialog = document.getElementsByTagName("dialog")[0];

  let template = document.getElementById("entryPromptTemplate");
  let clone = template.content.cloneNode(true);

  let titleInput = clone.querySelector("input#titleInput");
  let dateInput = clone.querySelector("input#dateInput");
  let summaryInput = clone.querySelector("input#summaryInput");

  dialog.appendChild(clone);

  dialog.showModal();
}

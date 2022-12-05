function validateFormData() {
  let form = document.forms.form;

  const fields = [
    { name: 'fullName', pattern: '[А-ЯІЄ][а-яіїє]{1,20}\\s[А-ЯІЄ]\\.[А-ЯІЄ]\\.'},
    { name: 'phone', pattern: '\\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}'},
    { name: 'faculty', pattern: '[А-ЯІЇЄ]{4}'},
    { name: 'date', pattern: '(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.((?:19|20)\\d{2})'},
    { name: 'adress', pattern: 'м{1}\\.\\s[А-ЯІЇЄ][а-яіїє]{1,30}'},
  ]

  let flag = true;
  fields.forEach((field) => {
    const validation = validateInput(form, field.name, field.pattern);
    if(!validation) {
      flag = false;
    }
  });

  if(flag) {
    let myWindow = window.open("", "MsgWindow", "width=500,height=500");
    let result = '';
    for (let [key, value] of new FormData(form)) {
      result += `<div>${key} - ${value}<div><br/>`;
    }
    myWindow.document.write(result);
  }
  return flag;
}

function validateInput(form, name, regExp) {
  const regex = new RegExp(regExp, 'g');
  if(!regex.test(form[name].value)) {
    form[name].classList.add('error');
    return false;
  } else {
    form[name].classList.remove('error');
  }

  return true;
}



function onMouseOver(obj) {
  obj.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function onClick(obj) {
  const colorPicker = document.getElementById('colorpicker');
  obj.target.style.backgroundColor = colorPicker.value;
}

function onDblClick(obj) {
  const colorPicker = document.getElementById('colorpicker');
  for (let i = 26; i <= 36; i++) {
    if(i !== 31) {
      document.getElementById('cell' + i).style.backgroundColor = colorPicker.value;
    }
  }
}

function createTable() {
  let table = document.getElementById('table');
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    table.appendChild(row);
    for (let k = 1; k <= 6; k++) {
      let cell = document.createElement('td');
      cell.id = 'cell' + Number(i * 6 + k);
      cell.innerText = Number(i * 6 + k);
      row.appendChild(cell);
    }
  }
}

createTable();

document.getElementById('cell26').addEventListener('mouseover', onMouseOver);
document.getElementById('cell26').addEventListener('click', onClick);
document.getElementById('cell26').addEventListener('dblclick', onDblClick);
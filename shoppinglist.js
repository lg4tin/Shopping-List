var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value))
  var deleteButton = document.createElement('button')
  deleteButton.appendChild(document.createTextNode('Delete'))
  var div = document.createElement('div')
  div.appendChild(li)
  div.appendChild(deleteButton)
  ul.appendChild(div)
  input.value = ''
  li.addEventListener("click", function(event) {
    event.currentTarget.classList.toggle("done");
  });
  deleteButton.addEventListener('click', function() {
    this.parentElement.remove();
  })
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement()
  }
}


button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterKeyPress)


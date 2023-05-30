// selectors 

let input = document.getElementById('input')
let list = document.getElementById('list-group')

function addTodo(){
  if(input.value == ''){
    alert('Add a Todo')
  }else{
    let li = document.createElement('li')
    li.innerHTML = input.value
    list.appendChild(li)
  }
  input.value = ''
}
// adding value to list
var listCollection = document.querySelector('.collection');
document.getElementById('task-form').addEventListener('submit', function(event){

  var task = document.querySelector('#task').value;
  if (task !== '') {
    var listItem = '<li class="collection-item">'+ task + '<a href="#" class="delete-item secondary-content"> <i class="fa fa-remove"></i> </a> </li>';
    listCollection.innerHTML += listItem;
    event.preventDefault();
  }
})

// Clear Tasks Function
document.querySelector('.clear-tasks').addEventListener('click', function(event){
  const tasks = document.querySelector('.collection');
  tasks.innerHTML ='';
  event.preventDefault();
})

//Delete Particular list Item
const click = document.querySelector('body');
click.addEventListener('click',function(event){
    if(event.target.className==='fa fa-remove'){
      event.target.parentElement.parentElement.remove();
      event.preventDefault();
    }
})

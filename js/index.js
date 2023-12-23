var inputName=document.getElementById('inputName');
var inputURL=document.getElementById('inputURL');
var message=document.getElementById('popup-1');

var bookList=[];


//~ condition local storage
if (localStorage.getItem("books") != null) {
  bookList = JSON.parse(localStorage.getItem("books"));
  displayData();
}

//! click submit
function submitAdd(){
 if(validationName()==true && validationURL()==true){
  var head={
    name:inputName.value,
url:inputURL.value,
  };
  bookList.push(head);
  localStorage.setItem("books", JSON.stringify(bookList));
  inputName.classList.remove('is-valid');
  inputURL.classList.remove('is-valid');
  clearData();
  displayData();
 }else{
message.classList.remove('d-none');
inputName.classList.remove('is-valid');
inputURL.classList.remove('is-valid');
displayData();
}
}
function btnClose(){
  message.classList.add('d-none');
}

//&   clear data
function clearData(){
  inputName.value="";
  inputURL.value="";
}


//^   display data
function displayData(){
  var cartona="";
  for(var i=0; i<bookList.length;i++){
    cartona+=` <tr>
    <td>${i+1}</td>
    <td>${bookList[i].name}</td>
    <td><button class="btn btn-success"><a href="${bookList[i].url}" class="text-decoration-none text-white pe-2"><i class="fa-regular fa-eye px-2"></i>Visit</a></button></td>
    <td><button onClick="deleteDate(${i})"  class=" btn btn-danger pe-2"><i class="fa-solid fa-trash px-2"></i>Delete</button></td>
  </tr>`
  }
  document.getElementById('containData').innerHTML=cartona
}

function deleteDate(index){
bookList.splice(index,1);
localStorage.setItem("books", JSON.stringify(bookList));
displayData()
}
//!  validation inputName
function validationName(){
  var text=inputName.value;
  var regex=/^[A-z]{3,50}$/
  if(regex.test(text) == true){
    inputName.classList.add('is-valid');
    inputName.classList.remove('is-invalid');
    return true;
  }else{
    inputName.classList.add('is-invalid');
    inputName.classList.remove('is-valid');
    return false;
  }
}

//^   validation inputURL
function validationURL(){
  var text=inputURL.value;
  var regex=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)$/
  if(regex.test(text) == true){
    inputURL.classList.add('is-valid');
    inputURL.classList.remove('is-invalid');
    return true;
  }else{
    inputURL.classList.add('is-invalid');
    inputURL.classList.remove('is-valid');
    return false;
  }
}
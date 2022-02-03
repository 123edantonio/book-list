const list = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  //clear textbox
  addForm.querySelector('input[type="text"]').value = " ";
});
//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!= -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  })
})
// var btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// // prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });

// var books = document.querySelectorAll("#book-list li .name");

// books = document.getElementsByClassName("name");
// console.log(book);

// books.forEach(function(item){
//   book.textContent += '(book title)';
// });

// const bookList = document.querySelector("#book-list");
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>this is how you add HTML</p>';

//const wmf = document.querySelector("#book-list li:nth-child(2) .name");
//console.log(wmf);

//var books = document.querySelector("#book-list li .name");
//console.log(books);

//books = document.querySelectorAll("#book-list li .name");
//console.log(books);

//Array.from(books).forEach(function(book){
//  console.log(book);
//});

//var textbox = document.getElementById("add-book");
//textbox=document.querySelector("#add-book");
//console.log(textbox);


//const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

//var books = document.querySelector('#book-list li .name');
//console.log(books);

//books = document.querySelectorAll('#book-list li .name');
//console.log(books);

//Array.from(books).forEach(function(book){
//  console.log(book);
//});


//const titles = document.getElementsByClassName('title');

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(title){
//  console.log(title);
//});


//var titles = document.getElementsByClassName('title');

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(item){
// console.log(item);
//})
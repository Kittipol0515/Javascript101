// const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
// console.log(gJavascript);
// gJavascript.innerHTML = 'Advanced JavaScript!!'

// const gJavascripts = document.querySelector('#reading-list li:nth-child(1) .name');
// console.log(gJavascripts);
// gJavascripts.innerHTML = 'Booking...'

// const gJavascriptz = document.querySelector('#reading-list li:nth-child(3) .delete');
// console.log(gJavascriptz);
// gJavascriptz.innerHTML = 'deloop'


// const readingList = document.querySelectorAll('#reading-list li .name');
// readingList.forEach(function(list) {
//     list.textContent += ' | Book title: ' // add back
//     // list.textContent = `book title: ${list.textContent} `; add front

// })



// const form = document.querySelector('#add-list');
// const input = document.querySelector('#add-list input');
// const list = document.querySelector('#reading-list ul');
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // prevent the form from submitting and refreshing the page
//     if (input.value.trim() === '') {
//       alert('Please enter a value before adding to the list.');
//     } else {
//       const newList = document.createElement('li');
//       const newName = document.createElement('span');
//       const newDelete = document.createElement('span');
//       newName.textContent = input.value;
//       newDelete.textContent = 'delete';
//       newName.classList.add('name');
//       newDelete.classList.add('delete');
//       newList.appendChild(newName);
//       newList.appendChild(newDelete);
//       list.appendChild(newList);
//       input.value = ''; // clear the input field
//     }
//   });
//   list.addEventListener('click', (e) => {
//       if (e.target.className === 'delete') {
//           const li = e.target.parentElement;
//           const confirmDelete = confirm('Are you sure you want to delete this from your reading list?');
//           if (confirmDelete) {
//               list.removeChild(li);
//           }
//       }
//   });



const form = document.querySelector('#add-list');
const input = document.querySelector('#add-list input');
const list = document.querySelector('#reading-list ul');
const searchForm = document.querySelector('#search-list');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
        alert('Please enter a value before adding to the list.');
    } else {
        list.insertAdjacentHTML('beforeend', `<li><span class="name">${input.value}</span><span class="delete">delete</span></li>`);
        input.value = '';
    }
});
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        if (confirm('Are you sure you want to delete this from your reading list?')) {
            li.remove();
        }
    }
});
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = e.target.querySelector('input').value.trim().toLowerCase();
    list.querySelectorAll('li').forEach((li) => {
        const name = li.querySelector('.name').textContent.trim().toLowerCase();
        li.style.display = name.includes(query) || !query ? 'block' : 'none';
    });
});







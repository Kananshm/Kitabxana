// window.addEventListener('load', function () {
//     loadData();
// });
let id = 0;
let library1 = [];

function library(firstName, lastName, bookName, sectionName, yearNo) {
    this.id = ++id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bookName = bookName;
    this.sectionName = sectionName;
    this.yearNo = yearNo;
}
function addLibrary() {
    let name, surname, book, section, year;
    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    book = document.getElementById('book').value;
    section = document.getElementById('section').value;
    year = document.getElementById('year').value;

    let library2 = new library(name, surname, book, section, year);

    library1.push(library2)

    addToTable(library2)
}


function addToTable(library) {
  
    
    let tBody = document.querySelector('#library1 > tbody');
    let tr = document.createElement('tr');

    let tdId = document.createElement('th');
    tdId.textContent = library.id;
    tr.appendChild(tdId);

    let tdname = document.createElement('td');
    tdname.textContent = library.firstName;
    tr.appendChild(tdname);

    let tdsurname = document.createElement('td');
    tdsurname.textContent = library.lastName;
    tr.appendChild(tdsurname);

    let tdbook = document.createElement('td');
    tdbook.textContent = library.bookName;
    tr.appendChild(tdbook);

    let tdsection = document.createElement('td');
    tdsection.textContent = library.sectionName;
    tr.appendChild(tdsection);

    let tdyear = document.createElement('td');
    tdyear.textContent = library.yearNo;
    tr.appendChild(tdyear);

    tBody.appendChild(tr);
}



function saveData() {
    let stList = JSON.stringify(library1);
    localStorage.setItem('library1', stList);
}
function loadData() {
    try {
      let tBody = document.querySelector('#library1 > tbody');
      tBody.innerHTML='';
  
      //   let stList=JSON.stringify(library1);
      let stList = localStorage.getItem('library1');
      library1=JSON.parse(stList);
      var ids= library1.map(function(item,index)
      {
          addToTable(item);
          return item.id;
      });
    
      id=Math.max(...ids);
    } catch (error) {
      library1=[];
    }
  
  
  }
  
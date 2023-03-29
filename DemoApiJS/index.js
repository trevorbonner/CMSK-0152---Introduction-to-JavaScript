const uri = 'http://localhost:5281/api/Person';

function Person(firstName, lastName, age)
{
    this.firstname = firstName;
    this.lastname = lastName;
    this.age = parseInt(age);
}

function getPersonFromForm()
{
    var firstName, lastName, age;
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    age = document.getElementById('age').value;
    var person = new Person(firstName, lastName, age);
    return person;
}

function addItem() {
  
    var person = getPersonFromForm();
    console.log(JSON.stringify(person));
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    })
      .then(response => response.json())
      .then(() => {
        getItems();
        clearInput();
      })
      .catch(error => console.error('Unable to add item.', error));
  }


function getItems() {
    fetch(uri)
    .then(response => response.json())
    .then(data => displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
  }

  function clearInput()
  {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = 0;
  }

  function displayItems(data) {
    const tBody = document.getElementById('peopleTable');
    tBody.innerHTML = '';
      
    data.forEach(item => {  
  
      let tr = tBody.insertRow();
      
      let td1 = tr.insertCell(0);
      td1.appendChild(document.createTextNode(item.id));
  
      let td2 = tr.insertCell(1);
      td2.appendChild(document.createTextNode(item.firstname));
  
      let td3 = tr.insertCell(2);
      td3.appendChild(document.createTextNode(item.lastname));

      let td4 = tr.insertCell(3);
      td4.appendChild(document.createTextNode(item.age));
    });
  }

  getItems();
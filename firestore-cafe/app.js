const cafeList = document.querySelector('#cafe-list');
const form = document.forms['add-cafe-form'];

// create cafe elements

function renderCafe(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let exit = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  exit.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(exit);

  cafeList.appendChild(li);

  // deleting data

  exit.addEventListener('click', e => {
    //let id = e.target.parentElement.getAttribute('data-id');
    let id = doc.id;
    db.collection('cafes').doc(id).delete();
  });
}

// grab data as a snapshot, get data from each doc

/* Static code replaced by real-time listener
db.collection('cafes').orderBy('city').get().then(snapshot => {
snapshot.docs.forEach(doc => {
renderCafe(doc);
});
})
*/

db.collection('cafes').orderBy('name').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if(change.type == 'added'){
      renderCafe(change.doc);
    } else if(change.type == 'removed'){
      let li = document.querySelector('[data-id=' + change.doc.id + ']');
    }
  });
});

// saving data to firestore
form.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value
  });
  form.reset();
});

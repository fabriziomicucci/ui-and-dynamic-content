let cont = document.getElementById('content');
let sub = document.getElementById('button');
let list = document.getElementById('list');
let feed = document.getElementById('feedback');

function addItem() {

    cont.value = cont.value.trim();
    let li = document.createElement('li');
    
    if (cont.value) {
        
        li.textContent = cont.value;
        list.appendChild(li);
        feed.innerHTML="";
        cont.value="";
        cont.focus();
    } else {
        feed.innerText = "Nothing Entered";
    }
}

sub.addEventListener('click', addItem);

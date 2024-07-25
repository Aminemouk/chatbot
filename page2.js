
let groupcartn = document.getElementById('gcd');
let cartnational = document.getElementById('ci');
let groupcartass = document.getElementById('gcas');
let cartass = document.getElementById('cas');
let groupnt = document.getElementById('gnt');
let phonenember = document.getElementById('nt');
let groupnp = document.getElementById('gnamep');
let nameinp = document.getElementById('inpname');
let prename = document.getElementById('inppr');
let situ = document.getElementById('sf');
let btnajoute = document.getElementById('btncreate');
let con = document.getElementById('contin');
let fileinp = document.getElementById('photo');
let lblinp = document.getElementById('lblphoto')




function afich(){
 groupcartn.style.display = "flex";
 groupcartass.style.display = "flex";
 groupnt.style.display = "flex";
 btnajoute.style.display = "flex";
 scroll({top:2000,behavior:"smooth"});
}

//create inscription
if(localStorage != null){
    db = JSON.parse(localStorage.inf)
}
else{let db = [];}
btnajoute.onclick = function(){
   
   vdb = {
    cardndb : cartnational.value,
    carasdb : cartass.value,
    ntdb : phonenember.value,
   }
   
   db.push(vdb);
   localStorage.setItem('inf',JSON.stringify(db));  
}

//modify inforation personnal

function apdt(){
    groupnp.style.display = "flex";
    btnajoute.style.display = "flex";
    btnajoute.innerHTML = 'Update';
    scroll({top:2000,behavior:"smooth"});
   
}
//function annuller
function anul(){
    groupcartn.style.display = "flex";
    btnajoute.style.display = "flex";
    groupnp.style.display = "flex";
    btnajoute.innerHTML = 'Suprimer';
    btnajoute.style.backgroundColor = "red";
    scroll({top:2000,behavior:"smooth"});

  }
//mise a jour s f
function maj(){
    situ.style.display = "flex";
    btnajoute.style.display = "flex";
    btnajoute.innerHTML = "Update";
    scroll({top:2000,behavior:"smooth"});
    
}







//ajout picture from pc
function inpp(){
     fileinp.style.display = "flex";
     lblinp.style.display = "flex";
let photo = document.getElementById('photo');
let inpphoto = document.getElementById('inpfile');

inpphoto.onchange = function(){
    photo.src = URL.createObjectURL(inpphoto.files[0]);
}
scroll({top:2000,behavior:"smooth"});
}
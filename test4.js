//part 1 get elements
let affiche = document.getElementById('spart');
let btncreat = document.getElementById('btncret');
let txtuser = document.getElementById('inpuser');
let txtpass = document.getElementById('inppass');
let txtfname = document.getElementById('fn');
let txtlname = document.getElementById('ln');
let btnlog = document.getElementById('log');
let txtemail = document.getElementById('emai');
let txtadress = document.getElementById('pai');
let txtphone = document.getElementById('tel');
let txtsex = document.getElementById('se');
let txtage = document.getElementById('ag');
let txtusername = document.getElementById('un');
let txtpassword = document.getElementById('ps');
let txtconfpass = document.getElementById('cps');
let btncaccount = document.getElementById('btncr')




//afficher create account
function create(){

    affiche.style.display = 'flex';
    txtuser.value = '';
    txtpass.value ='';
    scroll({top:1000,behavior:"smooth",});
}
// create account
var datacount;
if(localStorage != null){ datacount = JSON.parse(localStorage.acount)

}
else{var datacount =[];}

btncaccount.onclick = function() {
   var newacount = {
    newfname : txtfname.value,
    newlname : txtlname.value,
    newemail : txtemail.value,
    newadress : txtadress.value,
    newphone : txtphone.value,
    newsex : txtsex.value,
    newage : txtage.value,
    newusername : txtusername.value,
    newpassword : txtpassword.value,
    newconfpassword : txtconfpass.value,
       }
      if(newacount.newage < 18 ){;
    txtage.style.backgroundColor = 'rgb(255,100,100)';
    window.alert ("sorry!\nyou are young" )
    }
    else if(newacount.newconfpassword !== newacount.newpassword ){
      txtconfpass.style.backgroundColor ='rgb(255,100,100)';
      window.alert("configuer your password please")
    }
 
      else{datacount.push(newacount);
        localStorage.setItem('acount', JSON.stringify(datacount));
      txtage.style.backgroundColor = 'white';
    window.alert("your account created seccessfely");
    affiche.style.display ='none';
    scroll({top:0,behavior:"smooth"});
    }
     
}

// accept your account
function accept() {
  let found = false;
  for (let i = 0; i < datacount.length; i++) {
    if (txtuser.value === datacount[i].newusername && txtpass.value === datacount[i].newpassword) {
      found = true;
      break; // exit the loop when a match is found
    }
  }

  if (found) {
    window.alert('Welcome To Our Site');
    window.open('test4page2.html');
  } else {
    window.alert('Sorry\n You Dont Have Acount\n Please Create New Account');
    create();
  }
}
// passe name to secend page




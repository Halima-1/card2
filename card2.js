//     let reg= document.getElementById('toRegister');
//     reg.addEventListener('submit', function(prevent){
//         prevent.preventDefault();
//     let name = reg['name'].value;
//    let phone = reg['phone'].value;
//    let age = reg['age'].value;
//    let mail = reg['email'].value;
//    console.log(name)


//     })

    
let regForm = document.getElementById('registerform');
regForm.addEventListener('submit', function(e){
    e.preventDefault();
let name = regForm['name'].value;
let phone = regForm['phone'].value;
let age = regForm['age'].value
let mail = regForm['mail'].value

let fullname = document.getElementById('name');
fullname.innerHTML = name;

let myNumber = document.getElementById('number');
myNumber.innerHTML = phone;

let myAge = document.getElementById('age');
myAge.innerHTML = age

let Email = document.getElementById('email');
Email.innerHTML = mail
// console.log(age)
// console.log(phone)
// console.log(name)

})
function myNum(){
    let myNumber = document.getElementById('number');
myNumber.innerHTML = phone;
    myNumber.innerHTML = nummm
    if(nummm.startsWith('070') || nummm.startsWith('080') || nummm.startsWith('070')){
        if(nummm.length == 11){
       nummm = phone
   }else{
       nummm ='Number not valid';
   }
      }else{
       nummm ='Number not valid';
      }
}
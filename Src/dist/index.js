// const form=document.querySelector('form') as HTMLFormElement;
// console.log(form);
// const inputName=document.querySelector('#name') as HTMLInputElement;
// console.log(inputName);
// const inputEmail=document.querySelector('#email') as HTMLInputElement;
// const selectCountry=document.querySelector('#country') as HTMLSelectElement;
// const texareaInput=document.querySelector('#feedback') as HTMLTextAreaElement;
// form.addEventListener('submit',(e:Event)=>{
//     e.preventDefault();
//     const data={
//         inputName:inputName.value,
//         inputEmail:inputEmail.value,
//         selectCountry:selectCountry.value,
//         texareaInput:texareaInput.value
//     }
//   console.log(data,'has submitted');
// })
//function Signature
var userInformation_1;
var userInformation_2;
var userInformation_3;
var userInformatin_4;
userInformation_1 = function () {
    console.log('This is my first-function');
};
userInformation_1();
userInformation_2 = function (name) {
    console.log('My name is' + ' ' + name);
};
userInformation_2('Abu Al Shahriar Rifat');
userInformation_3 = function (password) {
    console.log('My Password Is' + password);
};
userInformation_3(1263534373);
userInformatin_4 = function (name, password) {
    return ("My name=" + name + " and My Password=" + password);
};
userInformatin_4('Abu Al Shahriar Rifat', 2019836353);
//interface
var user1 = {
    id: 1,
    name: "Abu Al Shahriar Rifat",
    age: 24
};
var user2 = {
    id: 20173736,
    name: "Kifayet ahmed",
    age: 24
};
console.log(user1);
console.log(user2);

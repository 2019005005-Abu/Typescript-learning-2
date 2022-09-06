const form=document.querySelector('form') as HTMLFormElement;
console.log(form);
const inputName=document.querySelector('#name') as HTMLInputElement;
console.log(inputName);
const inputEmail=document.querySelector('#email') as HTMLInputElement;
const selectCountry=document.querySelector('#country') as HTMLSelectElement;
const texareaInput=document.querySelector('#feedback') as HTMLTextAreaElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    const data={
        inputName:inputName.value,
        inputEmail:inputEmail.value,
        selectCountry:selectCountry.value,
        texareaInput:texareaInput.value
    }
  console.log(data,'has submitted');
})

//function Signature
let userInformation_1:()=>void;
let userInformation_2:(name:string)=>void;
let userInformation_3:(password:number)=>void;
let userInformatin_4:(name:string,password:number)=>string;

userInformation_1=()=>{
    console.log('This is my first-function');
}
userInformation_1();

userInformation_2=(name:string)=>{
 console.log('My name is'+' '+name);
}
userInformation_2('Abu Al Shahriar Rifat');

userInformation_3=(password)=>{
    console.log('My Password Is'+password)
}
userInformation_3(1263534373);

userInformatin_4=(name:string,password:number)=>{
    return (`My name=${name} and My Password=${password}`)
  }

  userInformatin_4('Abu Al Shahriar Rifat',2019836353);

  //interface
  let user1:{
    id:number,
    name:string,
    age:number
  }={
    id:1,
    name:"Abu Al Shahriar Rifat",
    age:24,
  }

  let user2:{
    id:number,
    name:string,
    age:number
  }={
    id:20173736,
    name:"Kifayet ahmed",
    age:24
  }

  console.log(user1);
  console.log(user2);

  let user_3:{
    name:string,
    age:number,
    SystemId:number
  }[]=[];

  const PrintUserInfo=(user:{name:string,age:number,SystemId:number})=>{
    
  }
 user1.forEach(user1=>PrintUserInfo(user1))

//UserInterfe
interface IUserformatters{
  formatter:()=>string;
}
class User implements IUserformatter{
  constructor(private fullName:string,private age:number) {
  }
}
formatter=()=>{
  return `My name is =${this.fullName} and My age is ${this.age}`
}

const user=new User("Abu Al Shahriar Rifat",24);
console.log(user.formatter());

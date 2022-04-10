

let myUser = createNewUser();

function createNewUser(a,b){

let firstName;
let lastName;

return  {

firstName,

lastName,

getLogin(){

   return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
   
},


getfirstName(){

	return this.firstName
},

setfirstName(newName){
      Object.defineProperty(this, 'firstName', { writable: true });
      this.firstName = newName;
      Object.defineProperty(this, 'firstName', { writable: false});
   },

   getlastName() {

return this.lastName;

}, 


setlastName(newlastName){
      
Object.defineProperty(this, 'lastName', { writable:true });
      
   this.lastName = newlastName;
   
   Object.defineProperty(this, 'lastName', { writable:false });
 
}

}

}




let name = prompt('Enter your name');

let surname = prompt('Enter your surname');



Object.defineProperty(myUser,'firstName',{value : name ,writable:false,configureable:true});

Object.defineProperty(myUser,'lastName',{value: surname ,writable:false,configureable:true});


console.log(myUser.getLogin())


console.log(myUser);


myUser.firstName = 'mykola';

myUser.lastName = 'petrenko';


console.log(myUser);


myUser.setfirstName('ivan'); 

myUser.setlastName('onufrienko');


console.log(myUser);





   


















































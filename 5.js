
let myUser = createNewUser();

function createNewUser(name = null,surname = null){


    return {

         firstName: name,

         lastName: surname,

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
      
                   Object.defineProperty(this, 'lastName', { writable:true});
      
                   this.lastName = newlastName;
   
                   Object.defineProperty(this, 'lastName', { writable:false});
 
          }

     }

}




let userName = prompt('Enter your name');

let userSurname = prompt('Enter your surname');



Object.defineProperty(myUser,'firstName',{value : userName ,writable:false,configurable:true});

Object.defineProperty(myUser,'lastName',{value: userSurname ,writable:false,configurable:true});


console.log(myUser);

console.log(myUser.getLogin())


myUser.firstName = 'mykola';

myUser.lastName = 'petrenko';

console.log(myUser);


myUser.setfirstName('ivan'); 

myUser.setlastName('onufrienko');

console.log(myUser);



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
		 
                   Object.defineProperty(this, 'firstName', { value: newName });
                  
        },

         getlastName() {

                   return this.lastName;

         }, 


          setlastName(newlastName){
      
                   Object.defineProperty(this, 'lastName', { value:newlastName});
      
 
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


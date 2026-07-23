let userUrl = `https://jsonplaceholder.typicode.com/users`;
 


const userContainer=document.getElementById('userContainer');
const userForm=document.getElementById('userForm');

const nameControl= document.getElementById('name');
const emailControl= document.getElementById('email');
const phoneControl= document.getElementById('phone');
const usernameControl= document.getElementById('username');


const addUser= document.getElementById('addUser');
const updateUser= document.getElementById('updateUser');

const spinner = document.getElementById('spinner');






















function snackbar(msg,icon){ 
     swal.fire({ 
               title:msg,
               icon:icon,
               timer:3000
             }) 
        }


async function makeApiCall(methodName,url,body=null){

    try{ 

            let options = { 
                   method:methodName,
                   headers:{ 
                    'content-type':''
                   }
            }


   }catch(err){ 


   }finally{ 
       spinner.classList.add('d-none');
  }


}
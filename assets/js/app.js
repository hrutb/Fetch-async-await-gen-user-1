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



let userArr= []







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
















async function fetchUsers(){ 
      
     spinner.classList.remove('d-none');
     
    
        try{ 
         let res = await makeApiCall('GET',userUrl,null);
               userArr =res
            createUsers(userArr);
        

          }catch(err){ 
           
              snackbar(err,'error');

           }finally{ 
              spinner.classList.add('d-none');
          }
}

fetchUsers();


function createUsers(arr){
     let res =" "; 

     arr.forEach(ele=>{ 
           res +=` <tr id="${ele.id}">
                     <td></td>
                     <td>${ele.name}</td>
                     <td>${ele.username}</td>
                     <td>${ele.email}</td>
                     <td>${ele.contact}</td>
                     <td><button class="btn btn-block btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
                     <td><button class="btn btn-block btn-outline-primary"><i class="fa-solid fa-trash"></i></button></td>
                   </tr>`
     });
    userContainer.innerHTML =res; 
}
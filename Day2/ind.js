h1=document.querySelector("h1");

setTimeout(()=>{           //An arrow function is a shorter and cleaner way to write a function in JavaScript.
    h1.style.color='red';
},1000);

setTimeout(()=>{
    h1.style.color="green";
},3000)




// function savetodb(data,success,failure)
// {
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     console.log(internetspeed)
//     if(internetspeed>4)
//     {
//         success();
//     }
//     else{
//         failure();
//     }
// }

//---------CALLBACK HELL----------

// savetodb("ashmit",
//     ()=>{
//         console.log("success:your data is saved");
//         savetodb("hello world",()=>{
//             console.log("success2:your data2 is saved");
//             savetodb("kaur",()=>{
//                 console.log("success3: data3 saved")
//             },
//             ()=>{
//                 console.log("data3 is not saved")
//             })
//         },()=>{
//             console.log("failure2:weak connection");
//         })
//     },

//     ()=>{
//         console.log("failure:weak connection.data not saved")
//     }
// );


//---------- PROMISE ------------ Async Function returns a Promise and Promise is a object 

function savetodb(data)
{
    return new Promise((success,failure)=>{
            let internetspeed=Math.floor(Math.random()*10)+1;
            if(internetspeed>4)
            {
                success("success:data was saved");
            }
            else{
                failure("failure: data was rejected");
            }
    })
}
    
//------ PROMISE METHODS(.then, .catch) -----------
// request=savetodb("ashmit kaur"); // req=promise obj

// request.then(()=>{
//     console.log("promise was resolved");
//      console.log(request)
// })

// .catch(()=>{
//     console.log("promise was rejected")
//      console.log(request)
// })
// console.log(request);

//OR

// savetodb("ashmit kaur") // req=promise obj
// .then(()=>{
//     console.log("promise was resolved");
//      console.log(request)
// })

// .catch(()=>{
//     console.log("promise was rejected")
//      console.log(request)
// })

//--- async function return promise 
// async function greet(){
//     throw "404 not found";
//     return "hello";
// }
//     greet() // calling greet function
//     .then((result)=>{
//         console.log("pronise was resolved");
//         console.log("promise was rejected");
//     })
//     .catch((err)=>{
//         console.log("promise was rejected with err: ",err);
//     });


function getnum(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
           let num=Math.floor(Math.random()*10)+1;
           console.log(num);
           resolve();
           return num;
        },1000);
    });
    }

async function demo()
{
  getnum();
  getnum();
  getnum();
  getnum();
// getnum();
 
}
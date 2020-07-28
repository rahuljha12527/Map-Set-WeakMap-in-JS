"use strict"

// var myPromise=Promise.resolve('Foo');

// myPromise.then((res)=>console.log(res));


// var myPromise=new Promise(function(resolve,reject){
//        setTimeout(()=>resolve(4),2000);
// });

// myPromise.then((res)=>{
//    res+=3;
//    console.log(res);

// });


// function getData(method,url){
//     return new Promise(function(resolve,reject){
//       //  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//         var xhr=new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload=function(){
//              if(this.status>=200 && this.status<300){
//                     resolve(xhr.response);                 
//              }
//              else{
//                  reject({
//                      status:this.status,
//                      stautusText:xhr.statusText
//                  });
//              }           
//         };
//         xhr.onerror=function(){
//             reject({
//                 status:this.status,
//                 statusText:xhr.statusText
//             });
//         };

//         xhr.send();
//     });
// }
// getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
//    console.log(data);
// }).catch(function(err){
//      console.log(err);
// });



function* g1(){
    console.log('Hello');
    yield 'Yield 1 Ran...';
    console.log('World');
    yield 'Yield 2 Ran..';
    return 'Returned..'
}

var g=g1();
console.log(g.next().value);
console.log(g.next());
console.log(g.next());






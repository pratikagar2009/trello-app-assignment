import {reload} from './project.service';
import {reshow} from './project.service';
import {showList} from './project.service';

window.createBoard = () => {
    
    const boardName = document.getElementById('defaultForm-boardName');
    const jsonString = {
        "title" : boardName.value
};
let fetchData = {
    method: "POST", 
    mode: "cors", 
    cache: "no-cache",
    credentials: "same-origin", 
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow", 
    referrer: "no-referrer", 
    body: JSON.stringify(jsonString) 
}
let addUrl = "http://localhost:3000/state";

fetch(addUrl, fetchData)
.then(()=>{
    reload()
});
}

reload();


    export function deleteBoard(id,value){
        let fetchData = {
            method: "DELETE", 
            mode: "cors", 
            cache: "no-cache",
            credentials: "same-origin", 
            redirect: "follow", 
            referrer: "no-referrer",
       }
       let deleteUrl = `http://localhost:3000/state/${id}`;
       let getUrl = `http://localhost:3000/insideState/?collection=`+value;
       fetch(deleteUrl, fetchData)
       .then(()=>{
           reload()
       });
       fetch(getUrl).
    then((resp)=>resp.json())
    .then(data => data.map(collection => {
       let dlt = `http://localhost:3000/insideState/${collection.id}`;
       fetch(dlt,fetchData);
       }));  
    
    }


    window.addListtoJson=function(){
        const doc = document.getElementById("hidinp");
        const id = doc.lastChild.id;
        const doc1 = document.getElementById("valueInp");
        const value = doc1.lastChild.value;
        const ListName = document.getElementById("defaultForm-ListName").value;
     const addUrl = `http://localhost:3000/insideState`;
 
     const jsonString = {
         "title" : ListName,
         "collection" : value
 
 };
 
 let fetchData = {
     method: "POST", 
     mode: "cors", 
     cache: "no-cache",
     credentials: "same-origin", 
     headers: {
         "Content-Type": "application/json; charset=utf-8",
     },
     redirect: "follow", 
     referrer: "no-referrer", 
     body: JSON.stringify(jsonString) 
 }
 
 fetch(addUrl, fetchData)
 .then(()=>{
     reshow(value)
 });
    }


    
export function deleteCard(id,value,value1){
    let fetchData = { 
        method: "DELETE", 
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        redirect: "follow", 
        referrer: "no-referrer", 
    }
    let deleteUrl = `http://localhost:3000/insideState/${id}`;
    let getUrl = `http://localhost:3000/insideCard/?collectData=`+value;
    
    fetch(deleteUrl, fetchData)
    .then(()=>{
        reshow(value1)
    });
    fetch(getUrl).
then((resp)=>resp.json())
.then(data => data.map(collection => {
    let dlt = `http://localhost:3000/insideCard/${collection.id}`;
    fetch(dlt,fetchData);
    })); 
}


export function deleteSpecificList(listID,value){
    let fetchData = { 
        method: "DELETE", 
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        redirect: "follow", 
        referrer: "no-referrer", 
    }
    let getUrl = `http://localhost:3000/insideCard/`+ listID;
    console.log(listID);
    fetch(getUrl, fetchData)
    .then(()=>{
        showList(value)
    }); 
    }



    
window.addingList = function(){
    const doc = document.getElementById("idInput");
    const id = doc.lastChild.id;
    const doc1 = document.getElementById("valInput");
    const value = doc1.lastChild.value;
    const ListName = document.getElementById("defaultForm-ListTitle").value;
    const desc = document.getElementById("defaultForm-ListDesc").value;

 const addUrl = `http://localhost:3000/insideCard`;

 const jsonString = {
     "title" : ListName,
     "description" :desc,
     "collectData" : value

};

let fetchData = {
 method: "POST", 
 mode: "cors", 
 cache: "no-cache",
 credentials: "same-origin", 
 headers: {
     "Content-Type": "application/json; charset=utf-8",
 },
 redirect: "follow", 
 referrer: "no-referrer", 
 body: JSON.stringify(jsonString) 
}

fetch(addUrl, fetchData)
.then(()=>{
    showList(value)
}); 
}

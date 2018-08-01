import {reloadView} from './project.view';
import {reshowView} from './project.view';
import {showListView} from './project.view';

export function reload(){
    const getUrl = "http://localhost:3000/state";
    const newCard = document.getElementById('newCard');
    newCard.innerHTML = "";
    fetch(getUrl)
    .then((resp) => resp.json())
    .then(data => {
        let states = data;
        return states.map(state => {
            reloadView(state);
        })
    })
}


export function reshow(value){
    const getUrl = `http://localhost:3000/insideState/?collection=`+value;
    const newCardInsideBoard = document.getElementById('newCardInsideBoard');
    newCardInsideBoard.innerHTML="";
    fetch(getUrl)
    .then((resp) => resp.json())
    .then((data) => {
        let states = data;
        return states.map(state => {
            reshowView(state,value);
})
    })
}




export function showList(value){
    const Url1 = `http://localhost:3000/insideCard/?collectData=`+value;
    const newCardInsideBoard = document.getElementById(value);
    const listAppend = newCardInsideBoard.firstElementChild.nextSibling;
    listAppend.innerHTML="";
    const modalout = document.getElementById("modalout");
    fetch(Url1)
    .then((resp) => resp.json())
    .then((data) => {
        let states = data;
        return states.map(state => {
            showListView(state,listAppend,value);
})
    })
}
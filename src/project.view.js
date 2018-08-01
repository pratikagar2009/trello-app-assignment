import {deleteBoard , deleteCard , deleteSpecificList} from './project.controller';
import {reshow} from './project.service';
import {showList} from './project.service';

export function reloadView(state){
    const div = document.createElement('div');
            const cardbody = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.className = "card-title";
            cardbody.className = "card";
            h3.innerHTML = `${state.title}`;
            const button = createButton("&#10006");
            button.id = state.id;
            const button1 = createButton("View");
            button1.id = state.id;
            cardbody.appendChild(h3);
            cardbody.appendChild(button1);
            cardbody.appendChild(button);
            div.appendChild(cardbody);
            newCard.appendChild(div);
            const id = button.id;
            button.onclick = () =>{
                deleteBoard(id , state.title);
            }

            button1.onclick = () => {
                displayContentOfBoard(button1.id , state.title);
            }
}


export const createButton = html => {
    const button = document.createElement('button');
    button.type = "button";
    button.className = "btn btn-elegant add";
    button.innerHTML = html;
    button.style.fontSize = `${15}px`;
    return button;
    };

    export function createHTMLElement(html) {
    
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
       }


       export function hiddenInput(id,value){
        const input = document.createElement('input');
        input.type = "hidden";
        input.id = id;
        const input1 = document.createElement('input');
        input1.type = "hidden";
        input1.value = value;
        const div = document.getElementById("hidinp");
        const div1 = document.getElementById("valueInp");
        div1.appendChild(input1);
        div.appendChild(input);
    }


    export function reshowView(state,value){
        const div = document.createElement('div');
        const cardbody = document.createElement('div');
        const h3 = document.createElement('h3');
        const button2 = createButton("Show List");
        const div1 = document.createElement('div');
        const button = createHTMLElement(`
        <button Type="button" class="btn btn-elegant btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#basicExampleModal">
        Add List
        </button>
  `);
        const button1 = createButton("delete");
        h3.className = "card-title";
        cardbody.className = "card";
        cardbody.id = `${state.title}`;
        h3.innerHTML = `${state.title}`;
       cardbody.appendChild(h3);
       cardbody.appendChild(div1);
       cardbody.appendChild(button2);
       cardbody.appendChild(button);
       cardbody.appendChild(button1);
       div.appendChild(cardbody);
       newCardInsideBoard.appendChild(div);
       const id = state.id;
       button1.onclick = () => {
        deleteCard(id,state.title,value);
    }
    button.onclick = () => {
        hiddenInputForList(id,state.title);
    }
    button2.onclick = () => {
        showList(state.title);
    }
    }


   export const createBtn = html => {
        const button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-elegant add";
        button.innerHTML = html;
        button.style.lineHeight = `${0.1}`;
        button.style.fontSize = `${15}px`;
        return button;
        };

        window.clearModal=() => {
            document.getElementById("modalout").innerHTML = "";
        }


        export function hiddenInputForList(id,val){
            const input = document.createElement('input');
            input.type = "hidden";
            input.id = id;
            const input1 = document.createElement('input');
            input1.type = "hidden";
            input1.value = val;
            const div = document.getElementById("valInput");
            const div1 = document.getElementById("idInput");
            div.appendChild(input1);
            div1.appendChild(input);
        }


        
export function displayContentOfBoard(id,value){
    reshow(value);
    const forButton = document.getElementById('forButton');
   $("#firstpage").empty();
    const newCardInsideBoard = document.getElementById('newCardInsideBoard');
            const collectData = createHTMLElement(`
            <button Type="button" class="btn btn-elegant btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#modalLoginFo">
            Add New card
            </button>
      `);
      const button1 = collectData;
           forButton.appendChild(button1);
           button1.onclick = () => {
            hiddenInput(id,value);
        }
           
}

export function showListView(state,listAppend,value){
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.className = "list-group";
    const button = document.createElement('button');
    button.type = "button";
    button.className = "list-group-item list-group-item-action";
    const listValue = state.title;
    button.innerHTML = listValue;
    const button1 = createBtn("&#10006");
    div.appendChild(button);
    div.appendChild(button1);
     listAppend.appendChild(div);
     
     button.onclick = () => {
         p.innerHTML = state.description;
         modalout.appendChild(p);
         $("#MyModal").modal()
     }

     button1.onclick = () => {
        deleteSpecificList(state.id , value);
     }
}
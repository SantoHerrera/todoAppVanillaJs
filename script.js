"use strict";

let editHTML = {
    editElementText: (element, text) => {
        element.textContent = text;
    },
    deleteParentNode: (element) => {
        //gets parent node of element passed, then deletes it
        element.remove();
    },
    addOnClick: (elements) => {
        //reason for f inside anonymouse f is that if it was just a f it would run 
        for (let i = 0; i < elements.length; i++) {
            elements[i].firstElementChild.onclick = () => {
                editHTML.deleteParentNode(elements[i])
            }
        }
    },
    onClick: (element) => {
        //this will be added to completed button 
        //
        editHTML.deleteParentNode(element);
    },
    createElement: function (elementTag, textOfElement, appendTo) {
        let tag = document.createElement(`${elementTag}`);
        tag.appendChild(document.createTextNode(`${textOfElement}`));
        appendTo.appendChild(tag);
    }
}

let theData = {
    todoList: [],
    pushOnArray(stringH) {
        //push onto array the new string
        // string represents what needs to be done
        this.todoList.push(stringH);
        //bug?
        //turning this into () => {} breaks it, why though???
    },
    deleteElement: (indexToDelete) => {
        //given the number this.theData[whatToDelete]
        //splice that shit and onlly earese the one element
        this.todoList.splice(indexToDelete, 1);
    },
    randomNumber: (max) => {
        //randomNumber between 0  - max
        return Math.floor(Math.random() * Math.floor(max));
    },
    createId: (howLong, fn) => {
        let id = "";
        for (let i = 0; i < howLong; i++) {
            let fuck = fn();
            id += fuck;
        }
        return id;
    }
}


let allTagLi = document.getElementsByTagName("li");

//console.log(allTagLi[allTagLi.length - 1]);

let ul = document.getElementById("todoList");

ul.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.type == "button"){
        editHTML.deleteParentNode(e.target);
    };
    //console.log(b.target == button);
});

function doAllThis() {
    //things to do
    //1. create li with button nested inside
    //2.give it a random id 6 digits long
    //3. the completed button needs onclick
}

/*
let handlers = {
theData.pushOnArray()
}
*/

//this way sucks, what would be better would be 
//1. randomly generate 6 numbers and give the new li an Id with those 6 numbers
//2. learn regex
//3. instead of pushing a string onto array, push object with properties: 
//an array [{}, {}, {}, {}] of objects
//ex. = {
//todo should be todo: input.value
//    todo: fuckBitches
//    id: 42069
//    completed: false    
//}

//learn about constructers



let handlers = {
    addTodoIdButton: document.getElementById("addTodoButton"),
    todoList: document.getElementById("todoList"),
    addTodoButton() {
        // push onto array
        //theData.pushOnArray(handlers.addTodoIdButton.value);
        //create new <li> with button && this as textContent
        this.createLiWithButton(handlers.addTodoIdButton.value);
        //deletes the input 
        this.addTodoIdButton.value = "";
        //console.log(allTagLi);
        //editHTML.addOnClick(allTagLi);
    },
    createLiWithButton(text) {
        editHTML.createElement("li", text, this.todoList);
        //adds button to <li> just added
        editHTML.createElement("button", "completed", allTagLi[allTagLi.length - 1])
    },
    createNewId() {
        let idk = theData.createId(6, function () {
            return Math.floor(Math.random() * Math.floor(10));
        })
        return idk;
    },
    liButton(id) {
        //let toBeDeleted = document.getElementById(`${id}`);
        // 
    }
}

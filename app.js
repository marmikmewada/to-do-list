
const newItemButton = document.querySelector(".wrapper>button");
const sendFinalButton = document.querySelector(".temp-button-area>button");
const orderButton = document.querySelector(".final-button-area>button");
const itemInput = document.querySelector("#itemInput");
// console.log(itemInput);

const tempListArea = document.querySelector(".temp-list-area");
let tempItemList = [];
let finalItemList = [];

newItemButton.addEventListener("click", function(){
    function addGrocery (item){
            tempItemList.push(item);
        }
        addGrocery(itemInput.value);
        let li = document.createElement("li");
        tempListArea.appendChild(li);
        li.innerHTML = `<span>${itemInput.value}</span><i class="fa-solid fa-xmark"></i>`;
        itemInput.value="";

        const newi= document.querySelectorAll(".temp-list-area>li>i");
        // console.log(newi);
        newi.forEach((value,index)=>{
            newi[index].addEventListener("click", function(e){
                e.stopImmediatePropagation();
                console.log(index);
                tempItemList.splice(index,1);
                // console.log(tempItemList);
                // console.log(tempListArea);
                tempListArea.removeChild(tempListArea.children[index]);
                // li.tempListArea.removeChild(tempListArea.children[index]);
            });
        });
        sendFinalButton.addEventListener("click", function(){
            finalItemList = [...tempItemList];
            tempItemList.forEach((value, index)=>{
                tempItemList.splice(index,tempItemList.length);
            });
            
        })
        // console.log(finalItemList);
        // console.log(tempItemList);
        
    });



    




























    // let tempGroceryList = [];
// function addGrocery (item){
//     tempGroceryList.push(item);
//     return tempGroceryList;
// }
// addGrocery("milk","cucumber");

// function removeItem(index){
//     delete tempGroceryList[index];
// }
// removeItem(1);
// console.log(tempGroceryList);



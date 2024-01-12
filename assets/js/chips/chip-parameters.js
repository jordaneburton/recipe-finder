const chipBase = ["chip-toggle","cursor-pointer", "relative", "grid", "select-none", "items-center", "uppercase", "font-bold", "font-sans", "text-xs", "py-1.5", "px-3", "whitespace-nowrap", "rounded-lg"];
const chipSelected = ["border", "border-gray-900", "text-gray-700"];
const chipNotSelected = ["bg-gray-900/10", "text-gray-900"];
const chipMealContainer = document.getElementById("chip-meal-container");
const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "marinade","fingerfood", "snack", "drink"];
const chipNodeList = [];

for(let i = 0;i<mealTypes.length;i++){
  const chip = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = mealTypes[i];
  chip.append(span);
  chip.setAttribute("data-checked", "false");
  chipBase.forEach((item)=>{
    chip.classList.add(item);
  });
  chipNotSelected.forEach(item =>{
    chip.classList.add(item)
  });
  chip.onclick = (event)=>{
    if(chip.getAttribute("data-checked") === "true"){
      setChipFalse(chip);
      return;
    }
    
    setChipTrue(chip);

    chipNodeList.forEach(element =>{
      if(chip !== element && element.getAttribute("data-checked") === "true"){
        setChipFalse(element);
      }
    });
  }
  chipMealContainer.append(chip);
  chipNodeList.push(chip);
}
function setChipTrue(chip){
  chipNotSelected.forEach(item =>{
    chip.classList.remove(item)
  });
  chipSelected.forEach(item =>{
    chip.classList.add(item);
  });
  
  chip.setAttribute("data-checked", "true");
}
function setChipFalse(chip){
  chipSelected.forEach(item =>{
    chip.classList.remove(item);
  });
  chipNotSelected.forEach(item =>{
    chip.classList.add(item)
  });
  chip.setAttribute("data-checked", "false");
}

//TOGGLE SINGLE
// chip.onclick = (event)=>{
//   if(chip.getAttribute("data-checked") === "true"){
//     chipSelected.forEach(item =>{
//       chip.classList.remove(item);
//     });
//     chipNotSelected.forEach(item =>{
//       chip.classList.add(item)
//     });
//     chip.setAttribute("data-checked", "false");
//   }else{
//     chipNotSelected.forEach(item =>{
//       chip.classList.remove(item)
//     });
//     chipSelected.forEach(item =>{
//       chip.classList.add(item);
//     });
    
//     chip.setAttribute("data-checked", "true");
//   }
// }
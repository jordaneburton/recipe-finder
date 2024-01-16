const chipBase = ["chip-toggle","cursor-pointer", "relative", "grid", "select-none", "items-center", "uppercase", "font-bold", "font-sans", "text-xs", "py-1.5", "px-3", "whitespace-nowrap", "rounded-lg"];
const chipSelected = ["border", "border-gray-900", "text-gray-700"];
const chipNotSelected = ["bg-gray-900/10", "text-gray-900"];
const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "marinade","fingerfood", "snack", "drink"];
const diet = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Primal", "Low FODMAP", "Whole30"];

//Call from HTML when script is loaded to setup chip nodes and callbacks
//valueType = array/api type chips will be based on
//chipSelectorType = What type of display/click event toggles the chips will have.
//containerID = Container ID chips will be loaded into.
function onLoad(valueType, containerID, chipSelectorType){
  if(valueType === "mealType"){
    loadMealType(mealTypes, chipSelectorType, containerID);
  } else if(valueType === "diet"){
    loadMealType(diet, chipSelectorType, containerID);
  }
}

//Call from HTML when script is loaded to setup chips from a parameter in the URL.
//only call after chips have been created.
//parameter = The name of the paramater to check for in the URL.
//containerID = ID of the container where the chips are located.
function setChipsWithURLParams(parameter, containerID){
  const chipContainer = document.getElementById(containerID);
  const urlParams = new URLSearchParams(window.location.search);
  const chips = chipContainer.getElementsByClassName("chip-toggle");

  var typeParam = urlParams.get(parameter);
  if(typeParam === null)
    typeParam = "None";

  if(typeParam.includes(',')){
    const typeParams = typeParam.split(',');
    typeParams.forEach(element =>{
      setChips(element, chips);
    });
  }else{
    setChips(typeParam, chips);
  }
}

function setChips(typeParam, chips){
  for(let i = 0;i<chips.length;i++){
    if(chips[i].textContent.toLowerCase() === typeParam.toLowerCase()){
      chips[i].onclick.apply();
    }
  }
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

function loadMealType(typeList, chipSelectorType, containerID){
  const chipMealContainer = document.getElementById(containerID);
  const chipNodeList = [];
  if(chipSelectorType === "collapse"){
    typeList.unshift("None");
  }
  for(let i = 0;i<typeList.length;i++){
    const chip = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = typeList[i];
    chip.append(span);
    chip.setAttribute("data-checked", "false");
    chipBase.forEach((item)=>{
      chip.classList.add(item);
    });
    chipNotSelected.forEach(item =>{
      chip.classList.add(item)
    });
    if(chipSelectorType === "collapse"){
      chip.onclick = (event) =>{ collapseSelectEvent(chip, chipNodeList); }
    } else if (chipSelectorType === "multi"){
      chip.onclick = (event) =>{ multiSelectEvent(chip); };
    } else {
      chip.onclick = (event) =>{ standardSelectEvent(chip, chipNodeList); }
    }
    
    chipMealContainer.append(chip);
    chipNodeList.push(chip);
  }
}
function standardSelectEvent(chip, chipNodeList){
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
function collapseSelectEvent(chip, chipNodeList){
  if(chip.getAttribute("data-checked") === "true" && chip.getAttribute("data-collapse") === "true"){
    chipNodeList.forEach(element =>{
      chip.setAttribute("data-collapse", "false");
      if(chip !== element){
        element.classList.remove("hidden");
      }
    });
    return;
  }
  
  setChipTrue(chip);
  chip.setAttribute("data-collapse", "true");

  chipNodeList.forEach(element =>{
    if(chip !== element){
      setChipFalse(element);
      element.classList.add("hidden");
    }
  });
}
function multiSelectEvent(chip){
    if(chip.getAttribute("data-checked") === "true"){
      setChipFalse(chip);
      chip.setAttribute("data-checked", "false");
    }else{
      setChipTrue(chip);
      chip.setAttribute("data-checked", "true");
    }
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
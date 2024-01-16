function onLoad(buttonID, queryBarID, pageToLoad){
  const button = document.getElementById(buttonID);
  const searchBar = document.getElementById(queryBarID);
  button.onclick = (event) =>{
    event.preventDefault();
    const query = searchBar.value.trim();
    if(query === ""){
      console.log("No Value Entered...");
      return;
    }
    document.location.replace(`./${pageToLoad}.html?query=${query}${buildParameters()}`);
  };
}
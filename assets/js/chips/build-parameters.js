function buildParameters(){
    var queryParams = "";
    for(let i = 0;i<parameterList.length;i++){
        parameterList[i].paramValue = "";
        const chips = document.getElementById(parameterList[i].containerID).getElementsByClassName("chip-toggle");
        for(let index = 0;index<chips.length; index++){
            if(chips[index].textContent.toLowerCase() === "none")
                continue;
            if(chips[index].getAttribute("data-checked") === "true"){
                if(parameterList[i].paramValue !== "")
                    parameterList[i].paramValue = `${parameterList[i].paramValue},${chips[index].textContent.toLowerCase()}`;
                else
                    parameterList[i].paramValue = chips[index].textContent.toLowerCase();
            }
        }
        if(parameterList[i].paramValue !== "")
        queryParams = `${queryParams}&${parameterList[i].name}=${parameterList[i].paramValue}`;
    }
    return queryParams;
}

const parameterList = [];
function setAPIParameterCheck(paramName, containerID){
    parameterList.push({
      "name":paramName,
      "paramValue": "",
      "containerID":containerID
    });
}
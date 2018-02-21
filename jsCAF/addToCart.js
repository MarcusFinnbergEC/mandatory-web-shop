function saveData(){
    localStorage.setItem("savedData", JSON.stringify([object1, object2 /*, etc*/]));
    object1 = JSON.parse(localStorage.getItem("savedData"))[0];
    object2 = JSON.parse(localStorage.getItem("savedData"))[1];
}

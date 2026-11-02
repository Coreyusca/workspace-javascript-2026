function randInt(min, max) {
    let num = (Math.random()*(max-min+1)+min);
    return num;
}

let M = randInt(500,700);
document.getElementById("M").textContent = M.toString();
// generate random for N, and update the textCont
let N = randInt(300,700);
document.getElementById("N").textContent = N.toString();
// generate random number for K, and update the textcontent
let K = randInt(200,900);
document.getElementById("K").textContent = K.toString();

// upadte the answer selection
document.querySelector('[value ="3"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+K.toString();

// Change style of the answer block --- click --- selected to unselected, unselected to selected.
function changeStyle(event){ // 
    event.preventDefault();
    console.log(this.getAttribute('class')); // this refers to the object which call the function
    let classname= this.getAttribute('class');
    if (classname == "answer selected"){
        classname ="answer";
    }// change from answer to answer selected

    this.setAttribute("class",classname);
}
// Event --- Action --- add lsitener to all the selection items
for (var answer = 0; i < 6; i++) {  
    
document.getElementsByClassName('answer')[0].addEventListener('click', changeStyle);
document.getElementsByClassName('answer')[1].addEventListener('click', changeStyle);
document.getElementsByClassName('answer')[2].addEventListener('click', changeStyle);
document.getElementsByClassName('answer')[3].addEventListener('click', changeStyle);
document.getElementsByClassName('answer')[4].addEventListener('click', changeStyle);

}
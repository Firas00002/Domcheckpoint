console.log(document);

//select all plus button
var butp = document.querySelectorAll(".plus");


//add mouse(''click'')event for all plus button array//
for (let i = 0; i < butp.length; i++) {

    butp[i].addEventListener("click", incc);
    
}
//fonction increment +1 evry click (+)
function incc(event) {
    var target = event.target;
    console.log(target)
    var parents = target.parentElement;
    console.log(parents);
    var par = Number(parents.querySelector('p').innerHTML);




    console.log(par);
    par++;

    parents.querySelector('p').innerHTML = par;
    updateprice()

};
//select all minus button
var minusbtn = document.querySelectorAll('.minus');
//add mouse(''click'')event for all minus button array//
for (let i = 0; i < minusbtn.length; i++) {
    minusbtn[i].addEventListener('click', decreement)

}
//fonction dicrement -1  click (-)
function decreement(event) {
    var test = event.target;
    var parent = test.parentElement;
    var quant = Number(parent.querySelector('p').innerHTML);
    quant--;
    parent.querySelector('p').innerHTML = quant;

    if (quant < 0) {
        parent.querySelector('p').innerHTML = 0;

    }
    updateprice()
}
//fonction (*)'''(Sum) to updateprice 
function updateprice() {
    var unitprice = document.getElementsByClassName('unitPrice');
    console.log(unitprice)
    var price = document.getElementsByClassName('price');
    var quantity = document.querySelectorAll('.btn-cont p')
    console.log(quantity, 'Hello')
    var sum = 0;


    for (let i = 0; i < unitprice.length; i++) {

        price[i].innerHTML = quantity[i].innerHTML * unitprice[i].innerHTML
        sum += parseInt(price[i].innerHTML)
        console.log(quantity[i].innerHTML * unitprice[i].innerHTML, i)

    }
    var finalsum = document.getElementById('total');

    finalsum.innerHTML = sum
}

//add "red" color for like buttons
var butlike = document.querySelectorAll(".like");

console.log(butlike);

for (let i = 0; i < butlike.length; i++) {

    butlike[i].addEventListener("click", inccc);
}
function inccc(event){
    var target=event.target;
    console.log(target)
    target.style.color='red'

}

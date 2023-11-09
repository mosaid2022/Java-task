
var allProducts = document.querySelectorAll(".Products li")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=+(item.getAttribute("price"))
        div1.innerHTML += item.textContent + "+"

        if (div1.innerHTML != ""){
            btn1.style.display = "block"
            btn1.style.width = "150px"
            btn1.style.height = "45px"
            btn1.style.backgroundColor = "gray"
            btn1.style.color = "white"
            btn1.style.fontSize = "23px"
            btn1.style.borderRadius = "25%"
        }

    }
})

btn1.onclick = function (){
  document.getElementById("div1").innerHTML = (totalPrice)
}

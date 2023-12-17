var div_cardname = document.querySelector(".cardname")

function adicionar1() {
    var insert_cardname = document.querySelector("input.insert-cardname").value
    div_cardname.innerHTML = insert_cardname
}

var divCardnumber = document.querySelector(".cardnumber")

function adicionar2() {
    var inputCardnumber = document.querySelector("input.insert-cardnumber")
    inputCardnumberValue = inputCardnumber.value /* números digitados no input */
    inputCardnumberLength = inputCardnumberValue.length

    if(inputCardnumberLength === 4 || inputCardnumberLength === 9 || inputCardnumberLength === 14) { /* automatizar */
        inputCardnumber.value += " " /* value do input do html */
    }

    divCardnumber.innerHTML = inputCardnumberValue
}

/* Date */

var div_date = document.querySelector(".date")

function adicionar3() {
    var insert_month = document.querySelector("input.insert-month").value
    var insert_year = document.querySelector("input.insert-year").value

    if(insert_month == ""){
        insert_month = "00"
    }
    if(insert_year == ""){
        insert_year = "00"
    }

    div_date.innerHTML = `${insert_month}/${insert_year}`
}

var ano_limite = ((new Date().getFullYear()) + 5) - 2000
var insert_year = document.querySelector("input.insert-year")
insert_year.max = ano_limite /* definindo o max do input como o ano atual mais 5 */


var div_cvc = document.querySelector(".cvc")

function adicionar4() {
    var insert_cvc = document.querySelector("input.insert-cvc").value
    div_cvc.innerHTML = insert_cvc
}

/* Concluído */

function complete() {
    var form = document.querySelector("form")
    form.style.display = "none"

    var divComplete = document.querySelector(".complete")
    divComplete.style.display = "flex"
}

function datas() {
    var nome = document.getElementById("name").value
    var number = document.getElementById("number").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value
    var cvc = document.getElementById("cvc").value

    alert(`Dados armazenados: \n \nNome: ${nome} \nNúmero do Cartão: ${number} \nMês de Vencimento: ${month} \nAno de Vencimento: ${year} \nCVC: ${cvc}`)
}

/* se já tiver um valor padrão não mostra no cartão, arrumar isso diminuindo os adicionar() */
/* melhorar os nome das coisas: Variáveis, funções... */
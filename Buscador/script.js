fetch('https://fakestoreapi.com/products?limit=10')
	.then(res => res.json())
	.then((json) => {
		let ul = document.getElementById("listaProdutos")
		json.forEach((item) => { /* item seria o objeto que ele vai percorrer (objeto 1 > objeto 2...) */
			let li = document.createElement("li") /* criar dinamicamente */
			li.innerHTML = `
				<a href="#">
					<img src="${item.image}" alt="">
					<span>${item.title}</span>
				</a>
			`
			ul.appendChild(li)
		})
	})


/* function filtrar() {
	let input, filter, ul, li, a, i, txtValue, count = 0, span

	input = document.querySelector("input")
	ul = document.getElementById("listaProdutos")


	filtro = input.value.toUpperCase()

	li = document.querySelectorAll("li")

	for (i = 0; i < li.length; i++) {
		a = li[i].querySelector("a")

		txtValue = a.textContent || a.innerText

		if (txtValue.toUpperCase().indexOf(filter)) {
			li[i].style.display = ""
			count++
			span = li[i].querySelector("span")

			if (span) {
				span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
					return "<strong>" + match + "</strong>"
				})
			}
			else {
				li[i].style.display = "none"
			}
		}
	}
} */

function filtrar() {
	let input, li, span, listaProdutos

	input = document.querySelector("input").value.toUpperCase()
	li = document.querySelectorAll("li")

	for(let i=0; i<li.length; i++) {
		span = li[i].querySelector("span")
		textSpan = span.textContent

		if(span.textContent.toUpperCase().indexOf(input) != -1) { /* procurar dentro do span o texto do input */
			/* console.log(span.textContent.toUpperCase())
			console.log("------------------------------") */
			/* console.log(li[i]) */

			li[i].style.display = "block"

			/* console.log(span.innerHTML) */ /* preciso pegar o valor que está sendo comparado e deixar em negrito dentro do span */
			
			span.innerHTML = "<strong>" + textSpan + "</strong>"
		}
		else {
			li[i].style.display = "none"
		}
	}

	
}
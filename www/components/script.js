



let cidade = document.querySelector("#cidade")
let uf = document.querySelector("#estado")
let search = document.querySelector("#buscar")
let info = document.querySelector("#info")


let cond  = document.querySelector("#condicao")
let data = document.querySelector("#date")
let desc = document.querySelector("#description")
let maxima = document.querySelector("#max")
let minima = document.querySelector("#min")
let dia_semana = document.querySelector("#weekday")

uf.addEventListener("blur" ,(e) => {
	let cep = cidade.value
	let estado = uf.value

	const options = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'  
	}

	// fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
	fetch(`https://api.hgbrasil.com/weather?key=bbbc15ac&city_name=${cep},${estado}&format=json-cors`, options)

	
	.then((response) => {response.json()
		.then( data => showData(data.results.forecast))
	})
	.catch(e => console.log('Deu erro: '+ e,message))

})


const showData = (result) => {
		
		// for(const campo in result){
		// 	console.log(campo[1])
		// }
// const campo = result[0]

	for(i=1; i<7; i++){

		let previsao = document.createElement("div")
		previsao.innerHTML = `

			<H2>Data: ${result[i].date} </H2>
			<H3>Dia da semana: ${result[i].date}
			<p class="previsao">Condição do tempo: ${result[i].description}</p>
			<p class="previsao">Máxima: ${result[i].max} °C</p>
			<p class="previsao">Mínima: ${result[i].min} °C</p>
		`
		info.appendChild(previsao)
		console.log(previsao)
	}
	console.log(result)


// console.log(campo)
}


function verificar(){
	
}
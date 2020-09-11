



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

	const options = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'  
	}

	// fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
	fetch(`https://api.hgbrasil.com/weather?key=8c5d4364&city_name=${cep},${estado}&format=json-cors`, options)

	
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
			<h3>Dia Semana: ${result[i].weekday} </label></h3>
			<p>Descrição do tempo: <label id="description"> ${result[i].description} </label></p>
			<p>Max: <label id="max"> ${result[i].max} °C </label></p>
			<p>Min: <label id="min"> ${result[i].min} °C</label></p>
		`
		info.appendChild(previsao)
		console.log(previsao)
	}



// console.log(campo)
}
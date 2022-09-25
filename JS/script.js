// IMC DATA 

const data = [   /* Lista de arrays como um objeto ou como se fosse uma API em JSON */
    {
        min:0,
        max:18.4,
        classification:"Menor que 18,5",
        info: "Magreza",
        Obesity:"0"
    },
    {
        min:18.5,
        max:24.9,
        classification:"Entre 18,5 e 24,9",
        info: "Normal",
        Obesity:"0"
    },
    {
        min:25,
        max:29.9,
        classification:"Entre 25,0 e 29,9",
        info: "Sobrepeso",
        Obesity:"I"
    },
    {
        min:30,
        max:39.9,
        classification:"Entre 30,0 a 39,9 ",
        info: "Obesidade",
        Obesity:"II"
    },
    {
        min:40,
        max:99,
        classification:"Maior que 40,0",
        info: "Obesidade Grave",
        Obesity:"III"
    },
];



// --- SELEÇÃO DE ELEMENTOS --- // 
const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");


// --- FUNÇÕES  --- //
function creatTable(data) {
    data.forEach((item) => {

        const div = document.createElement("div") // criando uma div
        div.classList.add("table-data") // criando uma classe para div

        const classification = document.createElement("p"); // criando uma tag P
        classification.innerText = item.classification; // Insrindo os dados do item na tag p

        const info = document.createElement("p"); // criando uma tag P
        classification.innerText = item.info; // Insrindo os dados do item na tag p

        const Obesity = document.createElement("p"); // criando uma tag P
        classification.innerText = item.Obesity; // Insrindo os dados do item na tag p

        div.appendChild(classification) // Incluindo os itens dentro da div
        div.appendChild(info) // Incluindo os itens dentro da div
        div.appendChild(Obesity) // Incluindo os itens dentro da div

        imcTable.appendChild(div);
    })
}



// --- INICIALIZAÇÃO DAS TABELAS  --- //
creatTable(data); // inicializando a tebela




// --- EVENTOS --- //
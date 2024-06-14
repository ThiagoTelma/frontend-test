var sunlight = "";
var water = "";
var pets = "";
var sunSelector = document.querySelector('select-sunlight');
var waterSelector = document.querySelector('select-water');
var petsSelector = document.querySelector('select-pets');

var plants = [];
var filteredPlants = []; 


function handleChangeSunlight(ev){
    sunlight = ev.target.value;
    handleChangeFilter();
}
function handleChangeWater(ev){
    water = ev.target.value;
    handleChangeFilter();
}
function handleChangePets(ev){
    pets = ev.target.value;
    handleChangeFilter();
}

//Criar uma funçao para a section com as plantas exibir/ocultar.
function showHide(){
    let plantSection = document.getElementById('all-results');
    let noResultSection = document.getElementById('description');
    if(plantSection.style.display = "none"){
        noResultSection.style.display = "none";
        plantSection.style.display = "flex";
    }else{
        plantSection.style.display = "none";
    }
    
}
// const sunlight = document.getElementById("select-sunlight");
// sunlight.onchange = handleChangeSunlight;

// 1) ler arquivo json
fetch("plants.json")
    .then((response) => response.json())
    .then((json) => {
        // 2) Salvar conteúdo em uma variável
        plants = json;
    })
// 3) Criar método para filtrar a lista e salvar em outra variável
function handleChangeFilter(){
    filteredPlants = plants.filter((plant) => {
        return ( sunlight == "" || plant.sun == sunlight) && ( water == "" || plant.water == water) && (pets == "" || plant.toxicity == pets);
    })
    console.log(filteredPlants);
}


// 4) Criar os componentes de plantas dinamicamente através da lista filtrada




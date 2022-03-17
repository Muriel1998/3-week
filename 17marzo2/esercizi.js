const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
  ];

  console.log(movies);

const ulMovies = document.querySelector("ul");

const liMovies = movies.map( (element) => `<li>${element}</li>`);

ulMovies.innerHTML = liMovies.join("");


const Filtro = document.querySelector("#filtro");



const bottone = document.querySelector("#tasto");
bottone.addEventListener("click", () => {
    const selezione = movies.filter((element) => element.toLowerCase().includes(Filtro.value.toLowerCase()));
    ulMovies.innerHTML = selezione.map( (element) => `<li>${element}</li>`).join("");
    if (selezione.length === 0)
    ulMovies.innerHTML = "Riprova, sarai più fortunato!";
})




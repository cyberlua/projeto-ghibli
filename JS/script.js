const container = document.getElementById('demo')


function createFilm(film) {
    return `
    <div class="card">
      <img class="image" src=${film.image}>
      <h2 class="title">${film.title}</h2>
      <p class="originTitle"><strong>Título Original:</strong> ${film.original_title}</p>
      <p class="date"><strong>Ano:</strong> ${film.release_date}</p>
      <p class="director"><strong>Diretor:</strong> ${film.director}</p>
      <p class="description"><strong>Descrição:</strong> ${film.description}</p>
    </div>
  `
}

let films;

async function getFilms() {
    try {
        const resposta = await fetch('https://ghibliapi.vercel.app/films')
        const json = await resposta.json()
        return json


    }
    catch (erro) {
        console.error("Erro: " + erro)
    }
}

async function main() {
    const films = await getFilms()
    films.map((film) => container.innerHTML += createFilm(film))
}

window.addEventListener("scroll", function () { // window é o objeto global que representa a janela do navegador, e pode ser usado para acessar propriedades e métodos relacionados à janela e ao ambiente de execução do navegador.
    const button = document.getElementById("scrollTopButton"); // scroll é um evento de rolagem
    if (window.scrollY > 500) { // estamos acessando a propriedade scrollY da janela, que representa a posição vertical atual de rolagem da página.
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  document.getElementById("scrollTopButton").addEventListener("click", function () {
    window.scrollTo({ // Faz a rolagem suave da janela para uma posição específica.
      top: 0, // Define a posição de rolagem vertical desejada como o topo da página (0 pixels).
      behavior: "smooth", //  Especifica o comportamento da rolagem como suave. Isso faz com que a rolagem seja animada.
    });
  });



main()
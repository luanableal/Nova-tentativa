let button = document.querySelector("button")
let conteudo = document.querySelector(".conteudo")

button.addEventListener("click", (event) =>{

    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
        conteudo.innerHTML =  json.map( todos => `
            <div class="todos ${todos.completed}"> 
                <p>${todos.title}<p> 
                <p>${todos.id}</p>
            </div>`).join("");
    })
})


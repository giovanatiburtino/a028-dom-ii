function adicionaItem (event){
    let novoItem = document.createElement("article")

    let conteudoItem = document.createTextNode("")

    novoItem.appendChild(conteudoItem)

    console.log(novoItem)

    let referencia = document.getElementById("container")
    referencia.insertAdjacentElement("beforeend", novoItem)
    // referencia.insertAdjacentElement("beforeend", '<article class="item" onclick="removeItem(event)"></article>')

    novoItem.classList.add("item");
    
    novoItem.setAttribute("onclick", "removeItem(event)");
}

function removeItem(event){
    event.target.remove("item")
    // let article = document.querySelector(".item")
    // if (event.target)
    // article.classList.remove("item")
}




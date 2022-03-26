const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  //if (url.includes(href)) {
    //link.classlist.add("ativo");
  //}
}

links.forEach(ativarLink);

//ativar itens orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);


////parte das perguntas no seguro

const perguntas =document.querySelectorAll(".perguntas button");
function ativarPergunta(event){
  const pergunta= event.currentTarget
  const controls=pergunta.getAttribute('aria-controls')
  const resposta=document.getElementById(controls)

  resposta.classList.toggle("ativa")
  const ativa=resposta.classList.contains("ativa")
  pergunta.setAttribute("aria-expanded" ,"true")

}
function eventosPerguntas(pergunta){
  pergunta.addEventListener('click',ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

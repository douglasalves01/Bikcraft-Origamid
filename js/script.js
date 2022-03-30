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

//galeria de bicicletas

const galeria=document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer=document.querySelectorAll('.bicicleta-imagens')

function trocarImagem(event){
  const img =event.currentTarget;
  const media=matchMedia('(min-width:1000px)')
  if(media){
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img){
  img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)
function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar um nome de uma estrela, planeta ou galáxia.</p>" ;
    return ;
  } 

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultado = "";
  let titulo = "";
  let descricao = "";
  let tags = "" ;

  // Itera sobre cada item de dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    tipo = dado.tipo.toLowerCase();
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
       // Constrói o HTML para cada item de resultado
      resultado += `
  <div class="item-resultado">
    <h2> <a href="${dado.link}" target="_blank"> ${dado.titulo}</a> </h2>
    <p class ="descricao-meta"> ${dado.descricao}</p>
    <img src="${dado.imagem}" alt="${dado.titulo}">
  </div>
      `;
    }
    
  }

  if (!resultado) {
  resultado = "<p>Não foi encontrado.</p>"
  }

  // Insere o HTML dos resultados na seção
  section.innerHTML = resultado;
}





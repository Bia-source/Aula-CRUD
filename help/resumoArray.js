// MÉTODOS JAVASCRIPT PARA ARRAY

var nomes = [];

function adicionarNomes(nome){
  nomes.push(nome);
  console.log(nomes);
  // retorna 
  // ['Beatriz']
}

function pegarIndice(valorBusca){
  const indiceNome = nomes.indexOf(valorBusca);
  console.log(nomes[indiceNome]);
  // retorna 
  // Beatriz
}

function pegarIndice2(valorBusca){
  // nomes = [{ id: 1, nome: 'Beatriz'}, { id: 2, nome: 'Fernanda'}];
  const indiceNome = nomes.findIndex((nomes) => nomes.id === valorBusca);
  console.log(nomes[indiceNome]);
  // retorna 
  // { id:1, nome: 'Beatriz' }
}

function apagarNomes(posicao){
  nomes.splice(posicao,1);
  console.log(nomes);
  // retorna 
  // []
}

adicionarNomes('felipe');
pegarIndice();

/**
 * OBS: 
 * - Usamos {} para definir um objeto com MAIS de um elemento
 * - Chamado de OBJETO COMPOSTO. 
 * EX: [{  id: 1, nome: 'Beatriz' }]
 * 
 * - Podemos enxergar como objeto também apenas um elemento 
 * dentro do array.
 * - Chamado de OBJETO SIMPLES.
 * EX: [ 'Beatriz' ]
 * 
 * **/

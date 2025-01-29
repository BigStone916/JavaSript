let dadosOriginais = {
    Teste: "Pedro",
    Teste2: "Martins"
  };
  
  let novosNomes = {
    Teste: "Nome",
    Teste2: "Sobrenome"
  };
  
  // Substituindo os valores
  let dadosAlterados = Object.keys(dadosOriginais).map(chave => {
    return { [novosNomes[chave]]: dadosOriginais[chave] };
  });
  
  console.log(dadosAlterados);
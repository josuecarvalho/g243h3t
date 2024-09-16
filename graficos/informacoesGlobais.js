const url = "https://raw.githubusercontent.com/guilermeonrails/api/main/dados-globais.json";
async function visualizarInformaçoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();
    console.log(dados);
}
visualizarInformaçoesGlobais();
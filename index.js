document.getElementById("btnBuscar").addEventListener("click", buscarCEP);

//   then / catch
// function buscarCEP() {
//   var obterCep = document.getElementById('cep').value;

//   console.log(obterCep);
//   fetch(`https://viacep.com.br/ws/${obterCep}/json/`)
//     .then((resposta) => {
//       resposta.json().then((dados) => (document.getElementById('retorno').innerHTML = JSON.stringify(dados)));
//     })
//     .catch((erro) => {
//       Alert(erro);
//     });(((
// }

// async / await

async function buscarCEP() {
  let obterCep = document.getElementById("cep").value;
  try {
    const cep = await fetch(`https://viacep.com.br/ws/${obterCep}/json/`);
    const dados = await cep.json();
    console.log(dados);
    preencherCepHtml(dados);
    //  document.getElementById("retorno").innerHTML = JSON.stringify(dados);
  } catch (error) {
    document.getElementById("retorno").innerHTML = error;
  }
}

function preencherCepHtml(dados) {
  document.getElementById("retorno").innerHTML = "";
  document.getElementById("info-cep").style.paddingTop = "1rem";
  document.getElementById("info-cep").style.paddingBottom = "1rem";
  document.getElementById("logradouro").innerHTML = "Logradouro: " + String(dados.logradouro);
  document.getElementById("bairro").innerHTML = "Bairro: " + String(dados.bairro);
  document.getElementById("cidade").innerHTML = "Cidade: " + String(dados.localidade);
  document.getElementById("estado").innerHTML = "Estado: " + String(dados.uf);
}

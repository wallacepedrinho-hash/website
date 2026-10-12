console.log("ATIVIDADE DE PROGRAMAÇÃO WEB - JAVASCRPT")


// Inicio do site - acesso //
const form = document.getElementById('formCadastro');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão

  if (nome.value.trim() === '') {
    alert('Por favor, preencha o campo Nome.');
    return;
  }

  if (senha.value.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  alert('Cadastro realizado com sucesso!');
  form.reset();
});


// variável e uma função (Teste execução no JS)
const fullName = "Wallace Almeida";

console.log(fullName.length)  // Propriedade de quantidade de caracteres numa string

const stringToArray = fullName.split (' ') // Separar string em listas com separador em espaços em branco
console.log(stringToArray)

console.log(fullName.toLowerCase())  // Letras minusculas
console.log(fullName.toUpperCase())  // Letras Maiusculas

console.log(fullName.indexOf('e'))  // Numero da letra que começa com E - Listas começam a contar a partir do ZERO
console.log('adsiahsid'.indexOf('e'))  // -1
console.log(fullName.slice(0,9)) 

// Função para retornar os valores maiores ou iguais a 5
const bigNumbers = [1,2,3,4,5,10,100].filter (function (number) {
    return number >=5
})
console.log(bigNumbers)


// Função para nome e sobrenome e nome completo
function nomeCompleto(nome, sobrenome) {
    console.log(`O nome completo é: ${nome} ${sobrenome}`)
}

nomeCompleto('Wallace', 'Almeida')

const primeiroNome = "Pedro"
const segundoNome = "Almeida"

const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)
console.log(meuNomeCompleto)


// Alterar conteúdo de pagina
function mudarTexto() {
  const elemento = document.getElementById('meuTitulo');
  elemento.textContent = 'Título da atividade de PROGRAMAÇÃO WEB foi Alterado!';
}

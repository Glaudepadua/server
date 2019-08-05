# server
Certi's code challenge

Este eh o código proposto para o desafio da Fundação Certi.
Aqui está implementado um servidor http com requisicao GET da url, retornando o respectivo valor inserido na url por extenso.

Ao fazer um clone ou download do projeto, deve-se seguir os seguintes passos para executar o código:
1. Abrir o gitbash ou um termnal
2. Ter o Node.js instalado (caso não tenha, pode baixar e instalar acessando o link: https://nodejs.org/en/download/)
3. No diretório do projeto, digitar: node server.js
4. A seguinte mensagem deverá ser mostrada:
	Servidor rodando em http://localhost:3000
	Para derrubar o servidor, digite: ctrl + c
5. Após, abra o navegador no endereço indicado (http://localhost:3000 - deve apresentar a mensagem: "Insira um valor dentro do intevalo: [-99999, 99999]")
6. Na url, digite "/", insira um número (dentro do interevalo recomendado) e aperte "Enter"
7. Deve ser mostrada na tela o valor por extenso do número inserido na url
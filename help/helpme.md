 COLINHA AMIGA❤️
 
 request = o que estamos RECEBENDO do usuario.
 response = o que estamos ENVIANDO para o usuario.

-------------------------------------------------------

response.status = code status 

- 200 sucesso.

- 201 dados criado no banco de dados.

- 400 erro no dado passado (provavelmente esta passando uma informação que nao existe, verificar nome de variaveis).

- 500 erro no servidor (provavelmente o servidor não está rodando, start o projeto novamente com npm dev).

--------------------------------------------------------

response.json() = retorna um json com os dados do banco (voce pode inserir mensagens tambem).

response.sendMessage() = retorna APENAS mensagens de texto.

response.send() = retorna qualquer coisa.

--------------------------------------------------------

tipos de parametros pra request:
 request.body = que vem do corpo da requisição.

 request.params = que vem da rota da requisição.

 request.query = que vem da URL da requisição.

------------- ROTA VS URL ---------------------
Rota http://localhost:3000/salvando/beatriz

URL http://localhost:3000/salvando?username=beatriz&idade=22
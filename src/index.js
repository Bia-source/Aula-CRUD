const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


let usuarios = [];
let produtos = [];
let titleCategories = [];

//GET
app.get('/', (request, response) => {
  return response.json({usuarios});
  // pegar dados do banco de dados
});

//POST
app.post('/usuario', (request, response) =>{
  const usuario = request.body;
  usuarios.push(usuario);
  return response.send('Deu certo');
});



//PUT
app.put('/alterando', (request, response) => {
   const { email, nome, id, adm } = request.body;
   const usuarioIndice = usuarios.findIndex((user) => user.email === email)
   
    usuarios[usuarioIndice] = {
      id: id,
      nome: nome,
      email: email,
      adm: adm
    }

    return response.json({usuarios});
    // alterar dadoS no banco de dados
});

//PATCH
app.patch('/alterandoUm', (request, response) => {
    // alterar apenas um dado no banco de dados
});

//DELETE
app.delete('/apagando', (request, response) => {
  const { email } = request.body;
  const usuarioIndice = usuarios.findIndex((user) => user.email === email)
  usuarios.splice(usuarioIndice,1) 
  return response.json({message: "Usuario deletado com sucesso", usuario: email})
  // deletar dados no banco de dados
});

/** --------------------------------------------- 
 * RODANDO O PROJETO
*/

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
});








app.post('/salvando', (request, response) => {
  const usuario = request.body;
  usuarios.push(usuario);
  return response.status(201).send("Usuario cadastrado com sucesso");
  // inserir dados no banco de dados
});
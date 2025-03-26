const express = require ('express');
const app = express();
const port = 3000;

app.get ('/', (request, response) =>{ //response = objeto de resposta (usado para devolver para o usuário),
//  request = objeto de requisição (do que veio para o servidor)//

    response.send ('Olá Codespace!!!');
});

app.get('/mensagem/:nome', (request, response) => {
    response.send('Boa Tarde! ' + request.params['nome']);
});

app.listen(port, () => {
    console.log("Aplicação em execução na porta " + port);
});
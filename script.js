
document.getElementById("visitor-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const telefone = document.getElementById("telefone").value;
    const conheceu = document.getElementById("conheceu").value;
    const frequentou = document.getElementById("frequentou").value;

    // Criar a mensagem para o WhatsApp
    const mensagem = `Novo visitante: 
    Nome: ${nome}
    Data de Nascimento: ${dataNascimento}
    Endereço: ${endereco}
    Bairro: ${bairro}
    Cidade: ${cidade}
    Estado: ${estado}
    Telefone: ${telefone}
    Como conheceu a igreja: ${conheceu}
    Já frequentou outra igreja: ${frequentou}`;

    // Link do WhatsApp com os dados preenchidos
    const link = `https://wa.me/5564992411673?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.location.href = link;
});

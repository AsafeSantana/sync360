document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('atualiza-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //coleta os dados do formulario
        const novoNome = document.getElementById('nome').value;
        const novaIdade = document.getElementById('idade').value;
        const novaRua = document.getElementById('rua').value;
        const novoBairro = document.getElementById('bairro').value;
        const novoEstado = document.getElementById('estado').value;
        const novaBio = document.getElementById('bio').value;

        //enviando os dados do formulario para o php 
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'salvar_dados.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText);
                // Atualizar os elementos do perfil com os novos dados
                document.getElementById('usu-nome').innerText = novoNome;
                document.getElementById('usu-idade').innerText = novaIdade;
                document.getElementById('usu-rua').innerText = novaRua;
                document.getElementById('usu-bairro').innerText = novoBairro;
                document.getElementById('usu-estado').innerText = novoEstado;
                document.getElementById('usu-bio').innerText = novaBio;
            } else {
                console.error('Erro ao processar requisição:', xhr.status, xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Erro ao processar requisição.');
        };
        xhr.send(`nome=${encodeURIComponent(novoNome)}&idade=${encodeURIComponent(novaIdade)}&rua=${encodeURIComponent(novaRua)}&bairro=${encodeURIComponent(novoBairro)}&estado=${encodeURIComponent(novoEstado)}&bio=${encodeURIComponent(novaBio)}`);
        
        //limpa formulario
        form.reset();
    });
});

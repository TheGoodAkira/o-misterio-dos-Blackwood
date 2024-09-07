const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    function mostrarMensagemFinal() {
      const mensagemFinal = document.getElementById('mensagem-final');
      mensagemFinal.style.display = 'block';
    }
  
    function verificarFinal() {
      const passoAtual = document.querySelector('.passo.ativo');
      if (passoAtual && passoAtual.id === 'passo-40') {
        mostrarMensagemFinal();
      }
    }
  
    const botoes = document.querySelectorAll('.btn-proximo');
    botoes.forEach(botao => {
      botao.addEventListener('click', () => {

        verificarFinal();
      });
    });
  });
  
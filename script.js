// =====================================================
//  Validação dos formulários de login e cadastro
//  (projeto só de front-end: nenhum dado é enviado ou salvo)
// =====================================================

const formLogin = document.getElementById('formlogin');
const formCadastro = document.getElementById('formcadastro');

// Verifica se o texto tem formato de e-mail: algo@algo.algo
function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Mostra uma mensagem no formulário (tipo: 'erro' ou 'sucesso')
function mostrarMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = 'mensagem ' + tipo;
}

// Marca o campo com erro, coloca o cursor nele e mostra a mensagem
function erro(campo, elementoMsg, texto) {
  campo.classList.add('invalido');
  campo.focus();
  mostrarMensagem(elementoMsg, texto, 'erro');
  return false;
}

// Remove as marcações de erro de um formulário
function limparErros(form) {
  form.querySelectorAll('.invalido').forEach((c) => c.classList.remove('invalido'));
}

// Limpa o formulário e volta as senhas a ficarem escondidas
function limparFormulario(form) {
  form.reset();
  form.querySelectorAll('.mostrar-senha').forEach((botao) => {
    document.getElementById(botao.dataset.alvo).type = 'password';
    botao.textContent = '👁️';
    botao.setAttribute('aria-label', 'Mostrar senha');
  });
}

// ---------- Login ----------
formLogin.addEventListener('submit', (evento) => {
  evento.preventDefault();
  limparErros(formLogin);

  const email = formLogin.email_login;
  const senha = formLogin.senha_login;
  const msg = document.getElementById('msg_login');

  if (email.value.trim() === '') {
    return erro(email, msg, 'Preencha o campo com seu e-mail para entrar.');
  }
  if (!emailValido(email.value.trim())) {
    return erro(email, msg, 'Digite um e-mail válido, como voce@email.com.');
  }
  if (senha.value === '') {
    return erro(senha, msg, 'Preencha o campo com sua senha para entrar.');
  }

  mostrarMensagem(msg, '✔ Login validado com sucesso!', 'sucesso');
  limparFormulario(formLogin);
});

// ---------- Cadastro ----------
formCadastro.addEventListener('submit', (evento) => {
  evento.preventDefault();
  limparErros(formCadastro);

  const nome = formCadastro.nome_cad;
  const email = formCadastro.email_cad;
  const senha = formCadastro.senha_cad;
  const confirma = formCadastro.confirma_cad;
  const msg = document.getElementById('msg_cadastro');

  if (nome.value.trim() === '') {
    return erro(nome, msg, 'Preencha o campo com seu nome.');
  }
  if (email.value.trim() === '') {
    return erro(email, msg, 'Preencha o campo com seu e-mail.');
  }
  if (!emailValido(email.value.trim())) {
    return erro(email, msg, 'Digite um e-mail válido, como voce@email.com.');
  }
  if (senha.value.length < 6) {
    return erro(senha, msg, 'A senha precisa ter pelo menos 6 caracteres.');
  }
  if (confirma.value !== senha.value) {
    return erro(confirma, msg, 'As senhas não são iguais.');
  }

  mostrarMensagem(msg, `✔ Cadastro validado! Bem-vinda(o), ${nome.value.trim()}.`, 'sucesso');
  limparFormulario(formCadastro);
});

// ---------- Botão de mostrar/esconder senha ----------
document.querySelectorAll('.mostrar-senha').forEach((botao) => {
  botao.addEventListener('click', () => {
    const campo = document.getElementById(botao.dataset.alvo);
    const mostrando = campo.type === 'text';
    campo.type = mostrando ? 'password' : 'text';
    botao.textContent = mostrando ? '👁️' : '🙈';
    botao.setAttribute('aria-label', mostrando ? 'Mostrar senha' : 'Esconder senha');
  });
});

// Ao começar a digitar, tira a marcação de erro do campo
document.querySelectorAll('input').forEach((campo) => {
  campo.addEventListener('input', () => campo.classList.remove('invalido'));
});

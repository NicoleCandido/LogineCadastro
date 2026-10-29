<h1 align="center">Login e Cadastro</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-8a2be2?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-ff69b4?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-8a2be2?style=for-the-badge&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Concluído-ff69b4?style=for-the-badge" />
</p>

<p align="center">
  Tela de login e cadastro com troca animada entre os formulários feita <b>só com CSS</b><br>
  e validação dos campos em JavaScript.
</p>

<p align="center">
  <img src="preview.png" alt="Prévia da tela de login" width="420" />
</p>

---

## Funcionalidades

- Troca entre **Login** e **Cadastro** com animação, sem recarregar a página
- Validação dos campos com mensagens claras:
  - campos vazios
  - formato de e-mail
  - senha com no mínimo 6 caracteres
  - confirmação de senha
- Botão para **mostrar/esconder a senha**
- Destaque no campo com erro e cursor posicionado nele
- Layout **responsivo**

## Como a troca de formulário funciona (só com CSS)

A página tem duas âncoras invisíveis: `#paracadastro` e `#paralogin`. Quando um link aponta para uma delas, ela vira o **alvo** (`:target`) da página, e o CSS usa isso para decidir qual formulário mostrar:

```css
/* Clicou em "Cadastre-se" → o cadastro aparece */
#paracadastro:target ~ .content #cadastro {
  visibility: visible;
  animation-name: fadeInLeft;
}
```

```html
<a href="#paracadastro">Cadastre-se</a>
```

Nenhuma linha de JavaScript é usada para trocar de tela.

## Estrutura

```
LogineCadastro/
├── index.html    # Formulários de login e cadastro
├── estilo.css    # Estilos, troca com :target e animações
├── script.js     # Validação dos campos e botão de mostrar senha
└── preview.png   # Imagem do README
```

## O que o projeto pratica

- Formulários HTML com `label`, tipos de `input` e `autocomplete`
- Pseudo-classe **`:target`** e seletor de irmãos **`~`**
- Animações com `@keyframes`
- Seletores como `:not()` e variáveis CSS
- Validação com JavaScript: eventos `submit`, `preventDefault` e expressão regular para e-mail

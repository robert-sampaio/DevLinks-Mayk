// Fazendo a troca de modos
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // Pegando a tag img
  const img = document.querySelector("#profile img")
  
  // Substituindo a imagem
  if(html.classList.contains('light')) {
    img.setAttribute('src','./assets/avatar-light.png')
  } else {
    img.setAttribute('src', "./assets/avatar-dark.png")
  }

  // Substituindo o texto alternativo
  if(html.classList.contains('light')) {
    img.setAttribute('alt','Foto de Mayk Brito sorrindo, usando óculos escuros com fundo azul')
  } else {
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos com fundo azul')
  }
}
/* === BLOCO 1: Botões "Em Breve" nos projetos e repositórios === */
// Seleciona todos os botões com a classe 'em-breve'
document.querySelectorAll('.em-breve').forEach((botao) => {
  // Adiciona um evento de clique a cada botão
  botao.addEventListener('click', (e) => {
    e.preventDefault(); // Impede que o link redirecione
    alert('🔒 Em breve: este conteúdo ainda não está disponível.'); // Mostra o alerta
  });
});

/* === BLOCO 2: Animação "reveal" ao rolar a página === */
// Seleciona todos os elementos com a classe 'reveal'
const reveals = document.querySelectorAll('.reveal');

// Cria um observador para detectar quando um elemento entra na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Quando o elemento estiver visível na tela
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Ativa a animação CSS
        observer.unobserve(entry.target); // Para de observar para melhorar performance
      }
    });
  },
  { threshold: 0.1 } // A animação ativa quando 10% do elemento estiver visível
);

// Aplica o observador a cada elemento com a classe 'reveal'
reveals.forEach((reveal) => observer.observe(reveal));

/* === BLOCO 3: Botão de "Voltar ao Topo" === */
const backToTopButton = document.querySelector('.back-to-top');

// Mostra ou oculta o botão de voltar ao topo dependendo do scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show'); // Mostra botão
  } else {
    backToTopButton.classList.remove('show'); // Esconde botão
  }
});

// Comportamento suave ao clicar no botão de voltar ao topo
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* === BLOCO 4: Menu mobile (toggle do menu de navegação) === */
const navToggle = document.querySelector('.nav-toggle'); // Botão de menu hamburguer
const navLinks = document.querySelector('.nav-links');   // Lista de links

// Alterna a visibilidade do menu ao clicar no botão
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

/* === BLOCO 5: Efeito Tilt (inclinação suave da imagem) === */
document.addEventListener('mousemove', (e) => {
  const tilt = document.querySelector('.tilt'); // Seleciona o elemento que será inclinado
  const { clientX: x, clientY: y } = e; // Captura a posição do mouse
  const centerX = window.innerWidth / 2;  // Centro horizontal da tela
  const centerY = window.innerHeight / 2; // Centro vertical da tela
  const rotateX = (y - centerY) / 100;    // Calcula inclinação no eixo X
  const rotateY = (x - centerX) / 100;    // Calcula inclinação no eixo Y

  // Aplica a transformação de inclinação
  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

/* === BLOCO 6: Garante que a animação reveal aconteça ao carregar e ao rolar === */
window.addEventListener('scroll', revealOnScroll); // Ao rolar a página
window.addEventListener('load', revealOnScroll);   // Ao carregar a página

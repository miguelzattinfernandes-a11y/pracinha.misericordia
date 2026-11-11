// Controla a apresentação do vídeo e a mensagem em caso de falha no carregamento.
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('mainVideo');
  const placeholder = document.getElementById('videoPlaceholder');

  video.addEventListener('loadedmetadata', () => {
    placeholder.classList.add('hidden');
  });

  video.addEventListener('error', () => {
    placeholder.classList.remove('hidden');
  });

  if (video.readyState >= 1 && video.duration) {
    placeholder.classList.add('hidden');
  }
});

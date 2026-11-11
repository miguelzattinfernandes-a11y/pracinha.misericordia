# Aliança de Misericórdia — página de vídeo

Projeto simples em HTML, CSS e JavaScript puro.

## Como visualizar
1. Extraia o arquivo ZIP.
2. Abra `index.html` no navegador.
3. Para uma experiência local mais consistente, use a extensão Live Server do VS Code.

## Vídeo e logo
O vídeo usado pelo player é `assets/VID-20261110-WA0062.mp4`. Para substituí-lo,
atualize o caminho do arquivo na tag `<source>` em `index.html`.
A logo da abertura é `assets/images-removebg-preview.png`.
Na abertura também aparecem o trecho de Lucas 4, 18–19 e a frase
“Evangelizar para Transformar”.

O vídeo aparece dentro de uma moldura de celular, responsiva para desktop e
celular, com acabamento em tons quentes coordenados à identidade visual. A tela
mantém a proporção vertical do vídeo para evitar cortes. A reprodução não
inicia automaticamente; o visitante usa os controles do player.

## Arquivos
- `index.html`: estrutura da página.
- `style.css`: identidade visual, responsividade e animações.
- `script.js`: controle da mensagem em caso de falha no carregamento do vídeo.
- `assets/`: vídeo institucional e logo usados na página.
- `PROMPT.txt`: prompt completo para recriar ou evoluir o projeto.

## Personalização
As cores principais estão no início de `style.css`, nas variáveis `--paper`, `--ink` e `--wine`.
A duração da abertura pode ser ajustada nas animações `intro-exit` e `content-enter`.


let musicas = [
    {titulo: 'Bite Me', artista: 'NEFFEX', src:'musicas/Bite Me - NEFFEX.mp3', img:'images/OIUG940.jpg'},
    {titulo: 'Built to Last', artista: 'NEFFEX', src:'musicas/Built to Last - NEFFEX.mp3', img:'images/373.jpg'},
    {titulo: 'I Just Wanna Be Great', artista: 'NEFFEX', src:'musicas/I Just Wanna Be Great - NEFFEX.mp3', img:'images/1118.jpg'},
    {titulo: 'The Itch', artista: 'NEFFEX', src:'musicas/The Itch - NEFFEX.mp3', img:'images/1262.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


// Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segParaMin(Math.floor(musica.duration));
    });
    pausarMusica()
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segParaMin(Math.floor(musica.currentTime));
}

function segParaMin(seg){
    let campoMin = Math.floor(seg / 60);
    let campoSeg = seg % 60;
    if (campoSeg < 10){
        campoSeg = '0' + campoSeg;
    }
    return campoMin+':'+campoSeg;
}



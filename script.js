document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Grupo Menos é Mais', image: './img/artista-menos-e-mais.png' },
        { name: 'Matheus e Kauan', image: './img/artista-mateus-kauan.jpg' },
        { name: 'Jorge e Matheus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Henrique e Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-lima.jpg' },
        { name: 'Ferrugem', image: './img/artista-ferrugem.jpg' }
    ]


    const albunsData = [
        { name: 'Levada 2T', artist: 'Mc Tuto', image: './img/album-mctuto.jpg' },
        { name: 'A Nata de Tudo - A Ovelha Negra', artist: 'Mc Negão Original', image: './img/album-mcnegao.jpg' },
        { name: 'Menor do Desacato', artist: 'Mc Luuky', image: './img/album-mcluuky.jpg' },
        { name: 'Passado & Presente', artist: 'Mc Kevin', image: './img/album-mckevin.jpg' },
        { name: 'Coração de Ouro', artist: 'Mc Joãozinho VT', image: './img/album-mcjvt.jpg' },
        { name: 'Feliz no Simples', artist: 'Mc IG', image: './img/album-mcig.jpg' },
        { name: 'Vai Tomando', artist: 'Mc Cebezinho', image: './img/album-mccebezinho.jpg' }
    ]

    const artistgrid = document.querySelector('.artists-grid')
    const albunsgrid = document.querySelector('.albuns-grid')

    artistsData.forEach(artist => {
        const artistcard = document.createElement('div')
        artistcard.classList.add('artist-card')

        artistcard.innerHTML = `
            <img src=${artist.image} alt= Imagem do ${artist.name}>
            <h3>${artist.name}</h3>
            <p>Artista</p>
    `
        artistgrid.appendChild(artistcard)

    })

   /*albunsData.forEach(artist => {
        const artistcard = document.createElement('div')
        artistcard.classList.add('artist-card')

        artistcard.innerHTML = `
            <img src=${artist.image} alt= Imagem do ${artist.name}
            <h3>${artist.name}</h3>
            <p>${artist.artist}</p>
    `
        albunsgrid.appendChild(artistcard)

    })*/

        albunsData.forEach(album => {
            const albumcard = document.createElement('div')
            albumcard.classList.add('album-card')

            albumcard.innerHTML = `

            <img src=${album.image} alt = Imagem do ${album.name}>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            `

            albunsgrid.appendChild(albumcard)
        })




})





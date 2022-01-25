const songList = [
    {
        title: "Soft Skin",
        file:"Soft Skin.mp3",
        cover:"catsad-1.jpg"
    },
    {
        title: "sagun - I'll Keep You Safe",
        file:"sagun - I'll Keep You Safe (feat. Shiloh).mp3",
        cover:"catsad-2.jpg"
    },
    {
        title: "timmies - tell me why i'm waiting",
        file:"timmies - tell me why i'm waiting (ft. shiloh).mp3",
        cover:"catsad-3.jpg"
    },
]

//Capturar elementos del DOM para utilizarlo
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
//Cargar canciones y mostrar listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidartar a
        link.textContent = song.title
        link.href = "#"
        //Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Añadir li a ul
        songs.appendChild(li)
    });
}

// Cargar cancion seleccionada
function loadSong(songIndex) {
    audio.src = "src/audio/" + songList[songIndex].file
    audio.play()
    changeCover(songIndex)
    changeSongTitle(songIndex)
}

// Cambiar el cover de la cancion
function changeCover(songIndex){
    cover.src = "src/images/" + songList[songIndex].cover
}

// Cambiar titutlo de la cancion
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

loadSongs()
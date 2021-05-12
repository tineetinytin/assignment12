class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();
//const album1 = new Album('Operation Ivy', 'Energy');
//const album2 = new Album('Blink 182', 'Dude Ranch');
//const album3 = new Album('New Found Glory', 'Sticks and Stones');

//jbox.addAlbum(album1);
//jbox.addAlbum(album2);
//jbox.addAlbum(album3);

// album1.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album3.play();
//console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);

var jboxArr = [ ['Operation Ivy', 'Energy'],
                ['Blink 182', 'Dude Ranch'],
                ['New Found Glory', 'Sticks and Stones']];

window.addEventListener('load', init);

function init() {
    
    let select1 = document.getElementById('albums');
    let btnPlay = document.getElementById('btnPlay');
    let showFav = document.getElementById('showFav');
    let paragraph = document.getElementById('favoriteAlbum');
   // console.log(jbox.albums);

    for (let i=0; i < jboxArr.length ; i++) {
         let albDetail = jboxArr[i];
         let opt = document.createElement('option');
         opt.textContent = `${albDetail[0]} / ${albDetail[1]}`;
         opt.value = albDetail[0] ;
         select1.appendChild(opt);

         const album = new Album(albDetail[0],albDetail[1]); //new Album class instances
         jbox.addAlbum(album); //adding album to Jukebox Player instance jbox

    }
    console.log(jbox.albums);
    console.log(select1);

   
    btnPlay.addEventListener('click', () => {
        console.log(select1.value);
        for (let i=0; i< jbox.albums.length; i++) {
            if (jbox.albums[i].artist === select1.value){
                jbox.albums[i].play();
            }
           
        }
        paragraph.innerText = `You are currently playing ${select1.value}`;
        //console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);
    });

    showFav.addEventListener('click', () => {
        paragraph.innerText = `Your favorite album is: ${jbox.favoriteAlbum()}`;


    });

}
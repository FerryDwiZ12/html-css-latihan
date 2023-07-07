
// Ambil data dari file JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(song => {
      const songContainer = document.createElement('div');
      songContainer.classList.add('song-container');

      const songImage = document.createElement('img');
      songImage.src = song.foto;
      songImage.classList.add('song-image');

      const songInfo = document.createElement('div');
      songInfo.classList.add('song-info');

      const songTitle = document.createElement('h2');
      songTitle.innerText = song.judul_lagu;
      songTitle.classList.add('song-title');

      const songArtist = document.createElement('p');
      songArtist.innerText = song.nama_penyanyi;
      songArtist.classList.add('song-artist');

      const songYear = document.createElement('p');
      songYear.innerText = song.tahun_terbit;
      songYear.classList.add('song-year');

      // Gabungkan elemen-elemen menjadi tampilan utuh
      songInfo.appendChild(songTitle);
      songInfo.appendChild(songArtist);
      songInfo.appendChild(songYear);

      songContainer.appendChild(songImage);
      songContainer.appendChild(songInfo);

      // Tambahkan tampilan lagu ke dalam elemen dengan id "song-list"
      document.getElementById('song-list').appendChild(songContainer);
    });
  });
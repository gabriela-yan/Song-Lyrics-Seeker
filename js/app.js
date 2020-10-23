import * as UI from './interfaz.js';
import API from './api.js';

UI.formSearch.addEventListener('submit', searchSong);

function searchSong(e) {
    e.preventDefault();

     // Get Data form 
    const artist = document.querySelector('#artista').value;
    const song = document.querySelector('#cancion').value;

    if(artist === '' || song === ''){
        UI.divMessage.textContent = '¡Error!... Todos los campos son obligatorios';
        UI.divMessage.classList.add('error');

        setTimeout(()=> {
            UI.divMessage.textContent = '';
            UI.divMessage.classList.remove('error');
        },3000);
    }

    // Consult API
    const search = new API(artist,song);
    
    search.consultAPI();
}
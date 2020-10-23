import * as UI from './interfaz.js';

class API {
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }

    consultAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song} `;

        this.spinner();

        fetch(url)
            .then(result => result.json())
            .then( res => {
                // console.log(res);
                this.cleanHTML();
                if(res.lyrics) {
                    const { lyrics } = res;

                    UI.divResult.textContent = lyrics;
                    UI.lyrics.textContent = `Letra de la canción: ${this.song} de ${this.artist}`;
                } else {
                    UI.divMessage.textContent = 'No pudimos encontrar tu canción, intenta con otra búsqueda';
                    UI.divMessage.classList.add('error');

                    setTimeout(() => {
                        UI.divMessage.textContent = '';
                        UI.divMessage.classList.remove('error');
                    },3000);
                }
            })
            .catch(error => {
                console.log(error);
            });
        

    }

    cleanHTML() {
        while(UI.divResult.firstChild){
            UI.divResult.removeChild(UI.divResult.firstChild);
        }
    }

    spinner() {

        this.cleanHTML();

        const divSpineer = document.createElement('div');

        divSpineer.classList.add('spinner');
        divSpineer.innerHTML = `
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        `;

        UI.divResult.appendChild(divSpineer);
    }

}

export default API;
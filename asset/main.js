// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// creiamo la variabile app che contiene il collegamento al div
// e l'insieme degli oggetti al suo interno


var app = new Vue (
    {
        el: '#root',

        data: {
            content: 'Maradona',
            classi: ['color_golden', 'font_big'],
            foto: './asset/img/maradona-diego-maradona-argentina-fifa-world-cup-hd-wallpaper-preview.jpeg',
        }

    }

);
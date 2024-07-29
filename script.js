/* Stili generali per il sito */
body, html {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif; /* Font normale per il testo */
}

.background {
    /* Usa l'immagine come sfondo per dispositivi mobili */
    background-image: url('Vane2.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
    display: flex;
    justify-content: center; /* Centra il contenitore orizzontalmente */
    align-items: flex-start; /* Allinea il contenitore in alto */
    padding-top: 20px; /* Aggiungi un po' di spazio in alto */
}

.container {
    text-align: center; /* Centra tutto il testo */
    background-color: rgba(255, 255, 0, 0.8); /* Sfondo giallo trasparente per il testo */
    padding: 20px;
    border-radius: 10px;
    border: 2px solid black; /* Traccia nera */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Aggiungi ombra al riquadro */
    max-width: 90%; /* Limita la larghezza massima del riquadro */
}

.large-number {
    font-size: 3em;
    display: block;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Aggiungi ombra al testo */
    color: #ff007f; /* Colore rosa per il numero -50 */
}

#countdown {
    font-family: 'Impact', sans-serif; /* Font Impact per il countdown */
    font-size: 3em; /* Aumenta la dimensione del font del countdown */
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Aggiungi ombra al testo */
    color: #ff007f; /* Colore rosa per il countdown */
}

p {
    margin-top: 20px;
    font-size: 1.2em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Aggiungi ombra al testo */
}

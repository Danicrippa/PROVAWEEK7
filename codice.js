function InserimentoOrdine() {
    let Titolo = document.getElementById("titolo");
    let Autore = document.getElementById("autore");
    let Editore = document.getElementById("editore");
    let AnnoUscita = document.getElementById("annoUscita");

    let message = 'Grazie per Ordinare Sig. ' + cognome.value + '!\n\n' +
        
    alert(message);
}


function calcolaConto() {
    
    let Prodotto = document.querySelectorAll('input[type=checkbox]:checked');

    let totale = document.getElementById("totaleConto");

    if (Prodotto.length == 0)
        return;

    totale.innerText = '';
    let importoTotale = 0;
    for (let i = 0; i < Prodotto.length; i++) {
        let prezzo = parseFloat(Prodotto[i].value)
        importoTotale += prezzo;
    }

    totale.innerText = "Totale: " + importoTotale + " €";
}

function confermaPrenotazione() {
    let Nome = document.getElementById("Nome");
    let Cognome = document.getElementById("Cognome");
    let Email = document.getElementById("E-mail");
    let Data = document.getElementById("Data");

    let message = 'Grazie per Ordinare Sig. ' + cognome.value + '!\n\n' +

        alert(message);
}
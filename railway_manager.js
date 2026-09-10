let prompt = require("prompt-sync")();

let trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },

    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },

    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },

    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },

    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },

    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },

    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },

    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },

    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },

    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },

    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },

    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },

    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },

    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },

    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },

    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },

    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },

    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },

    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },

    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let tickets = [];
let prochainIdTicket = 1;


function afficherMenu() {

    let choix = "";

    while (choix != "0") {

        console.log("");
        console.log("=================================");
        console.log("         RAILWAY MANAGER");
        console.log("=================================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8. Statistiques");
        console.log("0. Quitter");
        console.log("=================================");

        choix = prompt("Votre choix : ");

        switch (choix) {

            case "1":
                afficherTrajets();
                break;

            case "2":
                acheterTicket();
                break;

            case "3":
                afficherTickets();
                break;

            case "4":
                annulerTicket();
                break;

            case "5":
                rechercherTicket();
                break;

            case "6":
                filtrerTrajets();
                break;

            case "7":
                trierTrajets();
                break;

            case "8":
                afficherStatistiques();
                break;

            case "0":
                console.log("");
                console.log("Merci d'avoir utilise Railway Manager.");
                console.log("Au revoir !");
                break;

            default:
                console.log("");
                console.log("Choix invalide.");
        }
    }
}


function afficherTrajets() {

    console.log("");
    console.log("=== TRAJETS DISPONIBLES ===");

    for (let i = 0; i < trips.length; i++) {

        console.log("");
        console.log("#" + trips[i].id + " " +
            trips[i].departure + " -> " +
            trips[i].destination);

        console.log("Depart : " + trips[i].departureTime);

        console.log("Arrivee : " + trips[i].arrivalTime);

        console.log("Prix : " + trips[i].price + " DH");

        console.log("Places disponibles : " +
            trips[i].availableSeats);
    }
}


function rechercherTrajet(id) {

    let trajet = null;

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].id == id) {

            trajet = trips[i];

            break;
        }
    }

    return trajet;
}


function acheterTicket() {

    console.log("");
    console.log("=== ACHETER UN TICKET ===");

    let nom = prompt("Nom du passager : ");

    let idTrajet = Number(
        prompt("Identifiant du trajet : ")
    );

    let trajet = rechercherTrajet(idTrajet);

    if (trajet == null) {

        console.log("Trajet introuvable.");

        return;
    }

    if (trajet.availableSeats == 0) {

        console.log("Train complet.");

        return;
    }

    let numeroPlace = 51 - trajet.availableSeats;

    let ticket = {

        id: prochainIdTicket,

        passengerName: nom,

        tripId: trajet.id,

        seatNumber: numeroPlace,

        price: trajet.price
    };

    tickets[tickets.length] = ticket;

    prochainIdTicket = prochainIdTicket + 1;

    trajet.availableSeats =
        trajet.availableSeats - 1;

    console.log("");

    console.log("Ticket achete avec succes.");

    afficherUnTicket(ticket);
}


function afficherUnTicket(ticket) {

    let trajet = rechercherTrajet(ticket.tripId);

    console.log("");

    console.log("Ticket #" + ticket.id);

    console.log("Passager : " + ticket.passengerName);

    if (trajet != null) {

        console.log(
            "Trajet : " +
            trajet.departure +
            " -> " +
            trajet.destination
        );
    }

    console.log("Place : " + ticket.seatNumber);

    console.log("Prix : " + ticket.price + " DH");
}


function afficherTickets() {

    console.log("");

    console.log("=== TICKETS ===");

    if (tickets.length == 0) {

        console.log("Aucun ticket enregistre.");

        return;
    }

    for (let i = 0; i < tickets.length; i++) {

        afficherUnTicket(tickets[i]);
    }
}


function rechercherIndexTicket(id) {

    let index = -1;

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].id == id) {

            index = i;

            break;
        }
    }

    return index;
}


function annulerTicket() {

    console.log("");

    console.log("=== ANNULER UN TICKET ===");

    let idTicket = Number(
        prompt("Identifiant du ticket : ")
    );

    let index = rechercherIndexTicket(idTicket);

    if (index == -1) {

        console.log("Ticket introuvable.");

        return;
    }

    let ticket = tickets[index];
    
    let confirmation = prompt("Êtes-vous sûr de vouloir annuler ce ticket ? (oui/non) ");

if (confirmation.toLowerCase() != "oui") {

    console.log("Annulation du ticket annulée.");

    return;
}

    let trajet = rechercherTrajet(ticket.tripId);

    if (trajet != null) {

        trajet.availableSeats =
            trajet.availableSeats + 1;
    }

    for (let i = index; i < tickets.length - 1; i++) {

        tickets[i] = tickets[i + 1];
    }

    tickets.length = tickets.length - 1;

    console.log("Ticket annule avec succes.");
}



function rechercherTicket() {

    console.log("");
    console.log("=== RECHERCHER UN TICKET ===");

    console.log("1. Rechercher par ID");
    console.log("2. Rechercher par nom");

    let choix = prompt("Votre choix : ");

    if (choix == "1") {

        let id = Number(
            prompt("Identifiant du ticket : ")
        );

        let trouve = false;

        for (let i = 0; i < tickets.length; i++) {

            if (tickets[i].id == id) {

                afficherUnTicket(tickets[i]);

                trouve = true;

                break;
            }
        }

        if (trouve == false) {

            console.log("Ticket introuvable.");
        }

    } else if (choix == "2") {

        let nom = prompt("Nom du passager : ");

        let trouve = false;

        for (let i = 0; i < tickets.length; i++) {

            if (tickets[i].passengerName == nom) {

                afficherUnTicket(tickets[i]);

                trouve = true;
            }
        }

        if (trouve == false) {

            console.log("Aucun ticket trouve.");
        }

    } else {

        console.log("Choix invalide.");
    }
}




function filtrerTrajets() {

    console.log("");

    console.log("=== FILTRER LES TRAJETS ===");

    let ville = prompt("Ville de depart : ");

    let trouve = false;

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].departure == ville) {

            console.log(
                trips[i].departure +
                " -> " +
                trips[i].destination +
                " : " +
                trips[i].price +
                " DH"
            );

            trouve = true;
        }
    }

    if (trouve == false) {

        console.log("Aucun trajet trouve.");
    }
}


function trierTrajets() {

    let copie = [];

    for (let i = 0; i < trips.length; i++) {

        copie[i] = trips[i];
    }

    for (let i = 0; i < copie.length - 1; i++) {

        for (let j = i + 1; j < copie.length; j++) {

            if (copie[i].price > copie[j].price) {

                let temp = copie[i];

                copie[i] = copie[j];

                copie[j] = temp;
            }
        }
    }

    console.log("");

    console.log("=== TRAJETS PAR PRIX CROISSANT ===");

    for (let i = 0; i < copie.length; i++) {

        console.log(
            copie[i].departure +
            " -> " +
            copie[i].destination +
            " : " +
            copie[i].price +
            " DH"
        );
    }
}


function afficherStatistiques() {

    console.log("");

    console.log("=== STATISTIQUES ===");

    console.log(
        "Nombre total de tickets : " +
        tickets.length
    );

    let chiffreAffaires = 0;

    for (let i = 0; i < tickets.length; i++) {

        chiffreAffaires =
            chiffreAffaires +
            tickets[i].price;
    }

    console.log(
        "Chiffre d'affaires total : " +
        chiffreAffaires +
        " DH"
    );

    if (tickets.length == 0) {

        console.log("Trajet le plus vendu : aucun");

        return;
    }

    let meilleurTrajet = null;

    let meilleurNombre = 0;

    for (let i = 0; i < trips.length; i++) {

        let compteur = 0;

        for (let j = 0; j < tickets.length; j++) {

            if (tickets[j].tripId == trips[i].id) {

                compteur = compteur + 1;
            }
        }

        if (compteur > meilleurNombre) {

            meilleurNombre = compteur;

            meilleurTrajet = trips[i];
        }
    }

    if (meilleurTrajet != null) {

        console.log(
            "Trajet le plus vendu : " +
            meilleurTrajet.departure +
            " -> " +
            meilleurTrajet.destination
        );

        console.log(
            meilleurNombre +
            " tickets vendus"
        );
    }
}


afficherMenu();


var readline = require("readline");
var trips = require("./data/trips.json");
var tickets = [];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour afficher le menu principal
function afficherMenu() {
  console.log("=================================");
  console.log("RAILWAY MANAGER");
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
  rl.question("Votre choix : ", function(choix) {
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
        afficherStats();
        break;
      case "0":
        console.log("Merci d'avoir utilise Railway Manager. Au revoir !");
        rl.close();
        break;
      default:
        console.log("Choix invalide. Essayez encore.");
        afficherMenu();
        break;
    }
  });
}
// Fonction pour afficher tous les trajets
function afficherTrajets() {
  console.log("=== TRAJETS DISPONIBLES ===");
  for (var i = 0; i < trips.length; i++) {
    console.log("#" + trips[i].id + " " + trips[i].departure + " → " + trips[i].destination);
    console.log("Départ : " + trips[i].departureTime);
    console.log("Arrivée : " + trips[i].arrivalTime);
    console.log("Prix : " + trips[i].price + " DH");
    console.log("Places disponibles : " + trips[i].availableSeats);
    console.log("");
  }
  afficherMenu();
}

// Fonction pour afficher un seul ticket
function afficherUnTicket(ticket) {
  var trajet = trips.find(function(t) {
    return t.id == ticket.tripId;
  });
  console.log("Ticket #" + ticket.id);
  console.log("Passager : " + ticket.passengerName);
  if (trajet) {
    console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
  }
  console.log("Place : " + ticket.seatNumber);
  console.log("Prix : " + ticket.price + " DH");
  console.log("");
}

// Fonction pour acheter un ticket
function acheterTicket() {
  rl.question("Nom du passager : ", function(nom) {
    rl.question("Identifiant du trajet : ", function(idTrajet) {
      var trajet = trips.find(function(t) {
        return t.id == idTrajet;
      });
      if (trajet == undefined) {
        console.log("Trajet introuvable.");
        afficherMenu();
        return;
      }
      if (trajet.availableSeats < 1) {
        console.log("Train complet.");
        afficherMenu();
        return;
      }
      var ticket = {
        id: tickets.length + 1,
        passengerName: nom,
        tripId: trajet.id,
        seatNumber: 50 - trajet.availableSeats + 1,
        price: trajet.price
      };
      tickets.push(ticket);
      trajet.availableSeats = trajet.availableSeats - 1;
      console.log("Ticket acheté avec succès.");
      afficherUnTicket(ticket);
      afficherMenu();
    });
  });
}

// Fonction pour afficher tous les tickets
function afficherTickets() {
  if (tickets.length == 0) {
    console.log("Aucun ticket enregistré.");
    afficherMenu();
    return;
  }
  console.log("=== TICKETS ===");
  for (var i = 0; i < tickets.length; i++) {
    afficherUnTicket(tickets[i]);
  }
  afficherMenu();
}
// Fonction pour annuler un ticket
function annulerTicket() {
  rl.question("Identifiant du ticket : ", function(idTicket) {
    var index = tickets.findIndex(function(t) {
      return t.id == idTicket;
    });
    if (index == -1) {
      console.log("Ticket introuvable.");
      afficherMenu();
      return;
    }
    var ticket = tickets[index];
    var trajet = trips.find(function(t) {
      return t.id == ticket.tripId;
    });
    if (trajet) {
      trajet.availableSeats = trajet.availableSeats + 1;
    }
    tickets.splice(index, 1);
    console.log("Ticket annulé avec succès.");
    afficherMenu();
  });
  }


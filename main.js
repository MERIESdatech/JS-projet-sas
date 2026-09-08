

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


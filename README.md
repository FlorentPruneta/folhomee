#Exercice 1

Créer une fonction javascript permettant d'obtenir le chiffre le plus proche de zéro au sein d'un tableau de valeurs ex : closeToZero( [ 10, 7, -3, 4.5, -1.3, 579 ] ) // retourne -1.3

Après avoir cloner l'appli, penser à installer les node_modules (npm install).
Vous pouvez voir le code de cet exercice dans le dossier Close to zero et lancer les tests avec la commande npm run test.
Vous pourrez trouver ces tests unitaires dans le fichier algo.test.js

#Exercice 2

Tu dispose de la collection "ads" suivante :

{ _id: 1, title: 'Appartement 40m2 dans Paris 15', price: 405000, type: 'apartment', assets:['last-floor']  },
{ _id: 2, title: 'Appartement 54m2 dans Paris 20', price: 399000, type: 'apartment', assets:[]  },
{ _id: 3, title: 'Maison de campagne', price: 232000, type: 'house', assets:['country-side', 'refresh']  },
{ _id: 4, title: 'Maison avec piscine', price: 321900, type: 'house', assets:['swimmingpool', 'refresh']  },

A l'aide de requêtes ou d'aggregats, tu dois obtenir les résultats suivants:

Obtenir la somme des prix des appartements (pas des maisons)
Obtenir un tableau contenant la liste des assets sans doublon
Obtenir la liste des annonces qui possèdent le mot "campagne" dans le titre (sans tenir compte de la casse)
    
Vous pourrez trouver les requêtes / aggrégats dans le dossier Mongodb

#NodeJS et react

NodeJS

Tu hérite du code suivant. A l'aide de la librairie express, tu dois créer deux nouvelles routes.

La première GET /scrapping qui doit récupérer le texte HTML de la page https://www.folhomee.fr. Avec l'aide d'une librairie de ton choix, tu dois aller chercher le content de la balise meta google-site-verification qui se trouve dans le code HTML et finalement l'afficher en retour.

La deuxième POST /auth qui doit recevoir un login et mot de passe en paramètre et qui doit les vérifier avec ceux présent dans un fichier JSON qui ressemble à ceci :

{
  "login": "admin",
  "password": "leMotDePasseSecur!",
}

Tu dois créer le fichier JSON et le lire avec la méthode de ton choix. Si les informations correspondent, tu retourne le JSON { "access": true }, sinon tu retourne le JSOn { "access": false }.

const express = require('express')
const request = require('request')
const app = express()

// Si aucune route ne match, on affiche un message
app.use((req, res) => res.send('Erreur...'))

// On lance le serveur
app.listen(3000)

React

A l'aide du serveur node précédement réaliser, tu doit créer une petite application React qui va contenir un formulaire avec des champs de saisi "Login" et "Mot de passe". Lorsqu'on valide le formulaire, ça doit appeler la route POST /auth que tu as créé pour authentifier l'utilisateur. Si les informations sont correctes, tu affiche un message de validation, sinon un message d'erreur.

Vous trouverez dans les sources un dossier NodeJS pour le côté serveur. Vous pouvez vous placer dans ce dossier et lancer node app.js pour lancer le serveur qui est alors accessible à l'address http://localhost:3001

L'appli React elle se trouve dans le dossier react-app. Vous devrez à nouveau lancer un npm install dans ce dossier pour ajouter les node_modules, puis ensuite lancer le npm start qui démarre votre application à l'adresse http://localhost:3000

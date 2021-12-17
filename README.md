Opzet Reddit project

Met dit project kunnen we steeds de 15 populairste posts van www.reddit.com op een lokale homepagina laten zien.
Deze posts projecteren we op de homepagina met de titel van de post en andere gegevens die we op de homepagina willen projecteren.
Verder hebben we een link geplaatst op de titel van de post die de gebruiker doorstuurt naar de post behorende bij de titel.
Als de gebruiker op de titel klikt wordt deze naar een specifieke pagina doorgestuurd waar andere gegevens over deze post staan.
Als de gebruiker nu weer op de titel van deze specifiek post klikt wordt hij doorgestuurd naar de daadwerkelijke pagina op www.reddit.com.

De technieken die gebruikt zijn:
Om de 15 populairste posts binnen te halen is er een asynchrone functie gemaakt die met de API de gevraagde gegevens binnen haalt.
Om de specifieke gegevens over een bepaalde post binnen te halen is er een tweede asynchrone functie gemaakt met een ander endpoint want de gevraagde gegevens zijn andere dan bij de eerste asynchrone functie.
Voor de asynchrone functie wordt gebruik gemaakt van axios.
Om de gevraagde gegevens op te slaan is er gebruik gemaakt van useState, op deze manier worden de gegevens steeds opnieuw opgeslagen als de gebruiker ergens op klikt.
Er wordt gebruik gemaakt van Component Life Cycle om de code die gebruikt wordt af te vuren op het moment dat er op de link wordt geklikt (subreddit) of als de pagina ververst wordt (Homepage).
Er is een link gemaakt tussen de homepagina en subreddit pagina door deze te linken met elkaar door gebruik te maken van NavLink, Route en Switch.
Bovendien is er een link gemaakt met de webpagina maar hier is een anker element gebruikt omdat we linken met een externe pagina.
Er is een button gemaakt die terug gaat naar de Homepagina als er op geklikt wordt, hier wordt gebruik gemaakt van useHistory. 
Op deze manier is er een 'vorige' knop gemaakt, er kan eventueel nog een knop 'volgende' gemaakt worden.
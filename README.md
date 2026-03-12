# Eksamensoppgave

## Om prosjektet
Dette prosjektet er laget i forbindelse med den tverrfaglige IT-eksamenen. Målet er å lage et lite system som viser flere ferdigheter innen IT, blant annet programmering, databaser, serveroppsett og versjonskontroll.

Prosjektet vil være en webapplikasjon hvor brukere kan lagre og hente data gjennom et enkelt brukergrensesnitt. Applikasjonen vil ha en backend som håndterer logikk og kommunikasjon med en database.

Databasen skal kjøre på en Raspberry Pi som fungerer som en liten server i nettverket.

---

## Teknologi som skal brukes

Frontend
- HTML
- CSS
- JavaScript

Backend
- Node.js
- Express.js

Database
- MySQL eller PostgreSQL
- Kjører på en Raspberry Pi

Versjonskontroll
- Git
- GitHub

Server / Nettverk
- SSH for å koble til Raspberry Pi
- Database server på Raspberry Pi

---

## Planlagte funksjoner

- Brukerregistrering
- Innlogging
- Lagre data i database
- Hente data fra database
- Endre og slette data (CRUD)
- En enkel nettside hvor data kan vises og administreres

---

## Hvordan systemet er bygget opp

Systemet består av tre hoveddeler:

Frontend  
En nettside laget med HTML, CSS og JavaScript som brukeren kan bruke.

Backend  
En server laget med Node.js og Express som håndterer forespørsler fra frontend.

Database  
En database som kjører på en Raspberry Pi og lagrer dataene til applikasjonen.

Frontend sender forespørsler til backend via et API, og backend kommuniserer videre med databasen.

---

## Mål med prosjektet

Målet med prosjektet er å vise at jeg kan:

- lage en enkel fullstack applikasjon
- jobbe med databaser
- sette opp en server
- lage et API
- bruke Git og GitHub til versjonskontroll

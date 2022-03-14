# Twitch Boss Fight

## Hauptaufgaben

### Aufbau Client -> Server

- Login/Register Daten werden an Server übermittelt

- Client sendet Globale-Settings an Server
  (sollen gespeichert werden)
- Client sendet Daten aus Form an Server
- Server erzeugt ein neues Objekt aus den Form Daten


#### Probleme



### Aufbau Server -> DB

- Login Daten werden mit DB verglichen
- Register Daten werden mit DB verglichen und Angelegt wenn nicht vorhanden

- Server sendet FormDaten an DB und speichert diese
- Server sendet Globale-Settings an DB und ruft diese beim Login ab


#### Probleme


### Aufbau DB -> Client ???

- DB gibt response an client (registered oder Logged in) über Server

- DB sendet Daten zurück an den Client (über Server)


### Aufbau Twitch -> Server <- DB

- Twitch API sendet Emotes, Follows und Subs an Server


#### Probleme

- Wie?
- API seltsam...


## Calculation

this.health
this.level
this.isAlive?
this.isDodged?

isAlive? = flase -> spwn boss[0] + x
set health(){
    return health = health * multiplier
}

## Fightingsystem

- Emotes.includes(prefix) ~ bossHealth -5 in DB
- Follow ~ bossHealth -10 in DB
- Sub !primeSub ~ bossHealth -15 in DB
- primeSub ~ bossHealth -15 (dmgOverTime 2 Runden) in DB


## Bonus:

Über Kanalpunkte können Zuschauer die öfter in dem Stream sind sich Waffen kaufen.
Zum beispiel:
- Holzschwert +3 Angriff (500 Kanalpunkte)
- Rostige Klinge + 7 Angriff (1.500 Kanalpunkte)
- Drachentöter + 13 Angriff (5.000 Kanalpunkte)
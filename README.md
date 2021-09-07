# 21-wl

Ce logiciel est une preuve de concepte pour automatiser la "whitelist" du serveur GTA V 21 Jump Click <a  href="https://discord.com/invite/Jb6UJtR"  target="_blank"><img  src="https://img.shields.io/badge/discord-online-brightgreen.svg"  alt="Discord"/></a>

<img src="https://i.ibb.co/xJScB4f/21-wl-proof.png" alt="proof"/>

<img src="https://cdn-icons-png.flaticon.com/512/497/497738.png" width="25" /> **Attention l'utilisation de ce logiciel va à l'encontre des règles de discord et du discord de 21 Jump Click. Je ne peux être tenu responsable en cas d'éventuel sanctions sur votre compte.** <img src="https://cdn-icons-png.flaticon.com/512/497/497738.png" width="25" />

## Pour démarrer

Pour pouvoir utiliser l'application, il faut **NodeJS 14.17** au minimum ou utiliser la version Docker ( voir plus bas )

### Configuration

Avant de commencer il faut récupérer votre token personnel Discord.<br>
Voici la marche à suivre: <https://discordhelp.net/discord-token>

_Si vous comptez pas utiliser Docker:<br>
Créer à la racine du projet un ficher .env sous le format suivant: DISCORD_TOKEN={TOKEN_DISCORD}_

### Développement

```shell
git clone https://github.com/ayell/21-wl
cd 21-wl
yarn i
npm run start
```

### Utilisation

Il y a deux façon d'utiliser l'application :

- Soit avec NestJS

```shell
npm run build
npm run start:prod
```

- Ou avec Docker

```shell
docker build -t 21-wl .
docker run -e DISCORD_TOKEN='{TOKEN_DISCORD}' 21-wl
```

## Fonctionnalités

Le but de ce projet est:

- D'envoyer de façon automatique la commande **!whitelist** à 3h et 13h
- Vérifier toute les 30 secondes si une place ce libère, et si oui envoyer la commande **!whitelist**

## Contribution

Si vous voyez un bug ou une optimisation du code, vous pouvez me soumettre une pull request

## Remerciements

- NestJS <https://docs.nestjs.com/>
- discord.js <https://discord.js.org/#/>

## License

Le projet est sous licence GNU, c'est à dire vous pouvez l'utiliser le modifier et la diffuser librement pour un usage personnel et non commercial

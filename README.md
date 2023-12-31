# login-mysql

login with mariadb - typescript - authentication - cookie - localstorage

## Motivation

**FR**

Ce projet est divisé en backend et frontend.

Ce projet a pour objectif d'appréhender le login avec authentication en typescript en utilisant les éléments du DOM. Le fichier test LoginTester.tsx sert à tester le form avec react-hook-form.

J'ai également utilisé une base de données avec mariadb en remote (LAN).
J'ai préféré m'axer sur les échanges de requêtes entre axios et le backend (node + express), je ne me suis donc pas servi de useContext() pour le provider des children et des privateRoutes avec token, etc.

Assurez-vous de sécuriser les connexions entre votre machine cliente et votre serveur avec ssh (chiffrement asymétrique), ainsi qu'avec le firewall UFW ou iptables pour les ports ssh et mysql.

Pour le backend :
- node
- express
- dotenv
- cors
- mariadb
- typescript

Pour le front :
- axios
- react-router-dom
- typescript
- une classe authentication (src/service/authentication-service).
- un fichier service pour la transmission des requêtes avec axios (src/service/serviceLogin.ts). 

---

**EN**

This project is divided into backend and frontend.

The aim of this project is to understand login with authentication in typescript, using DOM elements. The LoginTester.tsx test file is used to test the form with react-hook-form.

I also used a database with mariadb in remote mode (LAN).
I preferred to focus on the exchange of requests between axios and the backend (node + express), so I didn't use useContext() for the provider of children and privateRoutes with token, etc. I used a test file called LoginTester.tsx to test the form.

Make sure you secure connections between your client machine and your server with ssh (asymmetric encryption), as well as with the UFW firewall or iptables for ssh and mysql ports.

For the backend :
- node
- express
- dotenv
- cors
- mariadb
- typescript

For the front :
- axios
- react-router-dom
- typescript
- an authentication class (src/service/authentication-service).
- a service file for transmitting requests to axios (src/service/serviceLogin.ts).

## Run

$ git clone <address>

$ cd vite-project

$ pnpm install

$ cd backend

$ pnpm install

create .env + .gitignore + environment.d.ts

(.env)

```
DB_HOST: "your-remote_ip_of_db"
DB_PORT: "mysql_port"
DB_USER: "user_db"
DB_PWD: "passwd_db"
DB_DATABASE: "name_of_table"
```

---

(.gitignore)

`/.env`

(environment.d.ts)

```
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DB_HOST: string;
        DB_PORT?: number | undefined;
        DB_USER: string;
        DB_PWD: string;
        DB_DATABASE: string;
        DB_LIMIT?: number | undefined;
      }
    }
}

export {}
```

## Secure against XSS attacks (cookie & HTTP-only=true for server + HTTPS)

**FR**

Dans ma démo, il n'agit que d'un cookie navigateur, car sans https rien ne sert de configurer HTTP-only sur true.

En réglant l'indicateur "HTTP-only" sur "true", vous pouvez aider à empêcher les attaquants potentiels de voler des informations sensibles stockées dans les cookies, telles que les données de l'ordinateur. 
les attaquants potentiels de voler des informations sensibles stockées dans les cookies, telles que les identifiants de session ou les jetons d'authentification. 
les identifiants de session ou les jetons d'authentification. Il s'agit d'une mesure de sécurité importante 
contre les détournements de session et autres attaques de type cross-site scriptin' (XSS). 
(XSS).

---

**EN**

By settin' the "HTTP-only" flag to "true," ye can help prevent potential 
attackers from stealin' sensitive information stored in cookies, such as 
session IDs or authentication tokens. This be an important security 
measure to protect against session hijackin' and other cross-site scriptin' 
(XSS) attacks.

## localStorage

**FR**

- Il est possible d'y accéder par javascript, ce qui inclut une attaque xss réussie.

- Si le jeton est envoyé en tant qu'en-tête de requête, aucune autre protection n'est généralement nécessaire contre le CSRF (l'application est intrinsèquement protégée, car les informations d'authentification ne sont pas envoyées automatiquement).

- Les jetons peuvent être envoyés à différentes origines. C'est le principal avantage et la raison la plus importante pour laquelle vous devriez utiliser localStorage ou les JWT en général. Si vous ne voulez envoyer le jeton qu'à l'origine de votre application, vous n'avez probablement pas besoin de JWTs, et vous n'avez certainement pas besoin d'utiliser localStorage.

---

**EN**

- Can be accessed by javascript, which includes a successful xss attack.

- If the token is sent as a request header, no further protection is usually necessary against CSRF (the app is inherently protected, because authentication info is not sent automatically).

- Tokens can be sent to different origins. This is the main benefit, and the most important reason you would use localStorage, or JWTs in general. If you only want to send the token to your single app origin, you probably don't need JWTs at all, and definitely don't want to use localStorage.
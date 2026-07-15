# Portfolio — Anthony Pin

Portfolio personnel développé en React, réalisé dans le cadre du projet de fin de formation OpenClassrooms "Développeur Front-end". Il présente mon parcours, mes compétences techniques et mes projets (de formation et personnels).

**Site en ligne :** https://portfolio-eight-chi-2hnog4gz7m.vercel.app

## Stack technique

- **React 19** + **React Router** (SPA)
- **Redux Toolkit** (démonstration de gestion d'état global)
- **Sass/SCSS**
- **Vite** (build et dev server)
- **EmailJS** (envoi du formulaire de contact, sans backend)
- **tsParticles** (effet de particules en fond de bannière)
- Images converties en **AVIF** (via `sharp-cli`) avec repli `.png` par `<picture>`

## Installation

```bash
git clone https://github.com/anthonypin0169/portfolio.git
cd portfolio
npm install
```

### Variables d'environnement

Le formulaire de contact utilise [EmailJS](https://www.emailjs.com/). Crée un fichier `.env` à la racine avec :

```
VITE_EMAILJS_SERVICE_ID=ton_service_id
VITE_EMAILJS_TEMPLATE_ID=ton_template_id
VITE_EMAILJS_PUBLIC_KEY=ta_public_key
```

Sans ces variables, le reste du site fonctionne normalement — seul l'envoi du formulaire échouera.

## Scripts disponibles

```bash
npm run dev       # serveur de développement
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build de production
npm run lint      # vérification ESLint
```

## Structure du projet

```
src/
├── components/   # composants réutilisables (header, carrousel, cards, icônes...)
├── pages/        # une page par route (home, projects, careers, contact, legalNotice)
├── data/         # contenu des projets (schoolProjects.js, persProjects.js)
├── store/        # Redux (démonstration)
└── index.scss    # variables Sass globales et échelle typographique responsive
```

## Déploiement

Déployé sur [Vercel](https://vercel.com). Le fichier `vercel.json` gère la réécriture des routes pour que React Router fonctionne correctement sur un rechargement/accès direct à une URL (ex. `/projets`, `/contact`).

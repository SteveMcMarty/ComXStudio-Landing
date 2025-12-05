# Instructions pour configurer Git et déployer sur Cloudflare Pages

## 📋 Étapes pour initialiser le dépôt Git

### 1. Initialiser Git localement

```bash
cd c:\Projets\CS2P\ComXStudio-landing
git init
git add .
git commit -m "Initial commit: Landing page structure"
```

### 2. Créer le dépôt sur GitHub

**Option A : Via l'interface GitHub**
1. Allez sur https://github.com/new
2. Nom du dépôt : `ComXStudio-landing` (ou `ComXStudio`)
3. Description : "Landing Page"
4. Visibilité : **Public** (recommandé pour Cloudflare Pages)
5. Ne cochez PAS "Add README" (on l'a déjà)
6. Cliquez sur "Create repository"

**Option B : Via GitHub CLI**
```bash
gh repo create ComXStudio-landing --public --source=. --remote=origin --push
```

### 3. Connecter le dépôt local au distant

```bash
git remote add origin https://github.com/VotreUsername/ComXStudio-landing.git
git branch -M main
git push -u origin main
```

## 🚀 Configuration Cloudflare Pages

### 1. Connecter le dépôt à Cloudflare Pages

1. Allez sur https://dash.cloudflare.com
2. Sélectionnez votre compte
3. Allez dans **Pages** > **Create a project**
4. Cliquez sur **Connect to Git**
5. Sélectionnez votre dépôt `ComXStudio-landing`

### 2. Configuration du build

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (laisser vide)
- **Node version**: `18` ou supérieur

### 3. Variables d'environnement

Aucune variable d'environnement nécessaire pour l'instant.

### 4. Déploiement

Cloudflare Pages va automatiquement :
1. Détecter le framework Vite
2. Installer les dépendances (`npm install`)
3. Builder le projet (`npm run build`)
4. Déployer le dossier `dist`

### 5. Configuration du domaine personnalisé

1. Dans Cloudflare Pages, allez dans votre projet
2. Cliquez sur **Custom domains**
3. Ajoutez `comxstudio.ai` (votre domaine Cloudflare)
4. Cloudflare configurera automatiquement le DNS

## ✅ Vérification

Une fois déployé, votre landing page sera accessible sur :
- `https://comxstudio.ai` (si configuré)
- `https://votre-projet.pages.dev` (URL Cloudflare par défaut)

## 🔄 Mises à jour futures

Pour mettre à jour la landing page :

```bash
# Faire vos modifications
git add .
git commit -m "Description des modifications"
git push origin main
```

Cloudflare Pages déploiera automatiquement les nouvelles versions à chaque push sur `main`.

## 📝 Notes

- Les déploiements sont automatiques à chaque push
- Cloudflare Pages supporte les previews pour les pull requests
- Le build est optimisé pour la production (minification, etc.)

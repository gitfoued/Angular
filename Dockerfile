# Utiliser une image Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration (package.json et package-lock.json)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Compiler l'application Angular pour la production
RUN npm run build -- --configuration production

# Exposer le port 4200 (port par défaut de `ng serve`)
EXPOSE 4200

# Démarrer l'application avec `ng serve`
CMD ["npm", "start"]

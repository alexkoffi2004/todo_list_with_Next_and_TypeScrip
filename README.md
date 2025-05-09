# 📝 Next.js Todo List App

Une application **Todo List** construite avec **Next.js**. Elle permet aux utilisateurs de **créer**, **lire**, **modifier** et **supprimer** des tâches via des pages dédiées à chaque action.

---

## 🚀 Fonctionnalités

- ✅ Liste des tâches (GET)
- ➕ Ajout d'une tâche (CREATE)
- ✏️ Modification d'une tâche (UPDATE)
- ❌ Suppression d'une tâche (DELETE)
- 🧭 Navigation entre les différentes pages d'action
- 📦 Backend léger via API Routes intégrées à Next.js
- 🎨 Interface moderne et responsive avec Tailwind CSS (optionnel)

---

## 🗂️ Structure du projet

```bash
/app
  ├── createtask/page.tsx              # Page d'accueil avec la liste des tâches
  ├── deletetask/page.tsx              # Formulaire de création
  ├── update/[taskId]/Editetask        # Formulaire de modification
  ├── tasks/page.tsx
  ├── page.tsx                # Confirmation de suppression
  └── layout.tsx
```

# 📦 Installation
bash
Copier
Modifier
# 1. Clone le repo
git clone https://github.com/ton-user/todo-next-app.git

# 2. Accède au dossier
```cd todo-next-app```

# 3. Installe les dépendances
```npm install```

# 4. Lance le serveur de développement
```npm run dev```


🛠️ Technologies utilisées
- Next.js

- React

- Tailwind CSS (facultatif mais conseillé)

- React toastify

- Stockage JSON local



# 💡 Idées d’amélioration
**Ajouter une base de données (MongoDB, PostgreSQL, etc.)**

**Ajout de l’authentification**

**Filtrage & tri des tâches**

**Dark mode**

# 👨‍💻 Auteur
Développé par **Kouadio Jean Alex Koffi**
## ✨ Fullstack Developer passionné par les projets utiles et bien structurés.
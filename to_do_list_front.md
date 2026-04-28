**FRONT CONCEPTION REACT NATIVE**



**NB**: Ajouter un fichier pour les données fictives à faire puisque je n'utilise pas de base de données, un fichier JSON serait bien



* Code couleur:

&#x20;  - Couleur de fond (Blacnc) = #FFFFFF

&#x20;  - Couleur secondaire pour les lignes, les bordures = #707070

&#x20;  - Couleur de textes principals = #000000

&#x20;  - Couleur des textes secondaires = #707070

&#x20;  - Couleur pour l'identification des messages non lues = #4687DC

&#x20;  - Couleur des textes de changement de profil = #9422B7

&#x20;  - Couleur de couleur gradient pour les story non vues = #EB6437 et #CA335B

&#x20;  - Couleur pour les boutons de modification de profil = #ECECEC



* Réutilisation des composants:

&#x20;  **\*\* Atomes \*\*:** les plus petits

&#x20;     - **MyText** ✔️: Un composant texte qui gère tes polices (Gras pour username, Regular pour les autres, Light pour les autres par exemple).

&#x20;     - **Avatar** ✔️: un cercle d'images

&#x09;\* size (petit pour les messages, moyen pour le feed, grand pour le profil)

&#x09;\* hasStory pour afficher le cercle de couleur

&#x09;\* Prop: showPlusIcon (pour ajouter des stories)

&#x09;\* Clickable pour voir les story (not done yet) ❌

&#x20;     - **CustomButton** ✔️: un bouton rectangulaire utilisé dans l'écran Profil

&#x09;\* type: fond gris et texte noir (primaire) / fond bleu avec texte blanc (secondaire)

&#x09;\* avec size des boutons

&#x20;     - **SearchBar** ✔️ : pour les recherches de messages et de profils utilisé dans l'écran Search et DM ( fond gris et texte gris )

&#x20; 	\* isActive pour changer la couleur de bordure

&#x20;     - **Icon Menu** ✔️: utiliser un bibliothèque de React

&#x09;\* Une liste pour la TabBar (menu : Home/Reels/Send/Search/Profil(Avatare size small))

&#x20;     - **InputLine** ✔️: pour l'écran Edit Profile. C'est le champ où on tape le texte (Prop: placeholder, defaultValue)

&#x20;     - **Badge** ✔️: Le petit cercle bleu "Verified" à côté des username

&#x20;     - **Notifications badge** ✔️: pour les notifications et les messages non lues

&#x20;     - **Separator** ✔️: ligne fine avec la couleur #707070

&#x20;     - **PaginationDots** ✔️: en bas de chaque post pour la pagination des photos (pour indiquer quelle photo on regarde dans un carrousel)

&#x20;     - **TabIcon** ✔️: pour les icons dans le grille dans l'écran Profil



&#x20;   **\*\* Molécules \*\*:** assemblages\*

&#x20;     - **StoryCircle**: Avatar + Text (username) en dessous ✔️

&#x09;\* Pour le scroll horizontal des story et des Notes

&#x20;     - **Search**: quand on tape dans la barre de recherche, une petite croix X se montre à droite pour effacer le texte ❌

&#x20;     - **NoteBubble**: utilisé dans Messages, Avatar + View (bulle blanche avec rayon arrondi) + MyText (limitation des mots) ✔️

&#x20;     - **HighlightItem**: Avatar + Text (default Highlight) avec couleur #CBC9C9

&#x20;     - **PostHeader**: Avatar + Text (username) + icône trois points ✔️

&#x20;     - **PostImage**: Image principale ou carousel pour plusieurs photos + ratio de l'image (aspect ration 1:1 / portrait 4:5) ✔️

&#x20;     - **PostActions**: La ligne des icônes de réactions (Like, Comment, Repost) + icône Save à droite avec condition si vertical ou horizontale ✔️

&#x09;\* Prop: layout (horizontal pour Home et vertical pour Reel)

&#x09;**Ajouter le nombre de likes, comment, partage en dessous de chaque icon pour vertical et près de chaque icon pour le horizontale** ❌

&#x20;     - **PostInfo**: Likes aimé par X personnes / Légende: usermane + description du poste / Date: petit texte ✔️

&#x20;     - **MessageItem**: Image de gauche + Colonne (Nom/Dernier Message) + Notifications badge + icône caméra à droite ✔️

&#x20;     - **EditRow**: Label + InputLine + Separator ✔️

&#x20;     - **StatItem** : utilisé dans Profil pour les chiffres (Chiffre + Texte) ✔️

&#x20;     - **GridItem**: pour les éléments en dessous des tabSelector ✔️



&#x20;  **\*\* Organismes \*\*:** les blocs complexes

&#x20;     - **PostCard** ✔️: le bloc complet du feed (Post Header + PostImage + PostActions + PostInfo)

&#x20;     - **BottomMenu** ✔️: pour assembler IconMenu

&#x20;     - **ProfileHeader** ✔️: le haut du profil ( Avatar + StatItem + Bio + Boutons: Edit profile - Share profile - Icon ajout followers)

&#x20;     - **HighlightScroll** ✔️: La liste horizontale des HighlightItem sur le profil.

&#x20;     - **StorySection** ✔️: assemblage des stories

&#x20;     - **MessageList** ✔️: assemblage de tous les notes et MessageItem et les textes en haut en bas des NoteSection qui sont "Messages" à gauche et "Request" à droite

&#x20;     - **ReelOverlay** ✔️: Tout le texte et les boutons qui flottent sur la vidéo du Reel.

&#x20;     - **TabSelector** ✔️: utilisé dans Profil (entre ProfileHeader et la Grille, il y a la barre de sélection qui gère quel contenu afficher en bas avec icon Post / Reel / People / Repost )

&#x20;     - **PhotoGrid** ✔️: pour les grid de photos et de reels en dessous du TabSelector

&#x20;     - **HomeHeader** ✔️: (Icône Plus + Logo + Icône Coeur)

&#x20;     - **MessageHeader** ✔️: username + icone arrow down + edit icon



* Structure des écrans: (Anatomie)

&#x20;  **NB**: Le BottomMenu est toujours présent peu importe l'écran



&#x20;  \*\* Home \*\*: Fil d'actualité ✔️

&#x20;     - Top: Header (Icône Plus + Logo + Icône Coeur)

&#x20;     - Horizontal Scroll : Liste de StoryCircle

&#x20;     - Vertical Scroll: Liste de PostCard ( Chaque post est un assemblage de PostHeader + PostImage + PostActions + PostInfo)

&#x20;     - ButtonMenu avec Home active



&#x20;  \*\* Reel \*\*: ✔️

&#x20;     - Background: vidéo ou image en plein écran

&#x20;     - Utilisation de l'organisme ReelOverLay

&#x20;     - ButtonMenu avec Reel active



&#x20;  \*\* Direct Messages \*\* ✔️

&#x20;     - Top: Header (Username + icone flèche down + icône Edit) -- Faire une organisme MessageHeader

&#x20;     - Utilisation de SearchBar

&#x20;     - Utilisation des orgaism MessageList

&#x20;     - ButtonMenu avec Message active



&#x20;  \*\* Search \*\*: ✔️

&#x20;     - Header: utilisation de SearchBar

&#x20;     - Content: Grille de Photos

&#x20;     - BottomMenu avec Search active



&#x20;  \*\* Profil \*\* ✔️

&#x20;     - ProfileHeader

&#x20;     - HighlightScroll

&#x20;     - TabSelector: Icône pour Grille/Reels/Tagged)

&#x20;     - PhotoGrid: les 3 colonnes pour les publications (gérer les empty state)

&#x20;     - ButtonMenu avec Profil active (border color noir)



&#x20;   \*\* Edit Profil \*\* ✔️

&#x20;     - Header: Icône retour + Texte

&#x20;     - Top : Avatar + Icône Avatar + lien text Edit

&#x20;     - Formulaire: Une liste de lignes composées d'un label (Name, Username, Bio, Gender) et d'une valeur/input en utilisant l'organisme EditRow

&#x20;     - Bottom: Liens pour les options



* Structure du projet:

src/

&#x20;├── components/

&#x20;│    ├── atoms/

&#x20;│    │    ├── Avatar.js

&#x20;│    │    ├── MyText.js

&#x20;│    │    ├── CustomButton.js

&#x20;│    │    ├── IconButton.js

&#x20;│    │    └── Separator.js

&#x20;│    ├── molecules/

&#x20;│    │    ├── StoryCircle.js

&#x20;│    │    ├── PostHeader.js

&#x20;│    │    ├── EditRow.js

&#x20;│    │    └── MessageItem.js

&#x20;│    └── organisms/

&#x20;│         ├── PostCard.js

&#x20;│         ├── ProfileHeader.js

&#x20;│         └── ReelOverlay.js

&#x20;├── screens/

&#x20;│    ├── HomeScreen.js

&#x20;│    ├── SearchScreen.js

&#x20;│    ├── ProfileScreen.js

&#x20;│    └── EditProfileScreen.js

&#x20;└── navigation/

&#x20;     └── AppNavigation.js


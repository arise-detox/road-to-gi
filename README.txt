ROAD TO GI - V12
Nouveautés V12 :
- Onglet Reps > « Séance chronométrée » : le compteur de reps sur un temps choisi, ou en séries avec
  temps de repos.
  Deux modes : « Séries + repos » (nombre de séries, reps par série ou série libre, repos entre les
  séries) et « Temps limité » (minutes + secondes : le maximum de reps dans le temps, avec le détail
  minute par minute). On compose la séance bloc par bloc, ou en texte : « 4x10 squats repos 60 s »,
  « 3 séries de 8 pompes, repos 1 min 30 », « 5 min burpees puis 2 min repos puis 5 min squats ».
  Déroulé automatique : compte à rebours, série comptée à voix haute (fin à l'objectif de reps, à la
  fin du temps ou sur « Terminer la série »), repos avec compte à rebours (« Passer le repos »,
  « +15 s »), série suivante. La caméra reste ouverte. Bilan par série à la fin, séance enregistrable
  (historique « Séances terminées ») et séances sauvegardables pour les relancer (« Mes séances »).

Correctif V11 : à la première ouverture après une mise à jour, la page neuve pouvait utiliser l'ancien
module de comptage resté en cache (le bouton « Démarrer la caméra » ne faisait alors rien jusqu'au
rechargement). Le module est maintenant versionné (rep-counter.js?v=11) et le compteur garde un suivi
de secours si jamais l'ancien module est chargé.

Nouveautés V10 :
- Compteur de reps : verrouillage sur ta personne. Le modèle détecte jusqu'à 3 personnes ; l'appli
  se fixe sur toi (la plus grande, près du centre, squelette doré) en suivant sa position, sa
  taille et la couleur de son haut, et ignore les autres, y compris quelqu'un qui passe devant ou
  qui s'entraîne derrière. Si tu disparais du cadre, rien n'est compté jusqu'à ton retour, et un
  message l'indique (« Je ne te vois plus » ou « autre personne ignorée »). Les autres personnes
  sont dessinées en gris. Diagnostic : état du suivi et nombre de personnes.
  Limite : une personne de même taille ET de même couleur de haut, qui apparaît pile à ta place
  sans qu'on l'ait vue arriver, ne peut pas être distinguée.

Nouveautés V9 :
- Nouvel onglet « Reps » dans la barre du bas : banc d'essai du compteur de répétitions. Choisis
  un exercice, filme ta série, puis indique le nombre réel de reps : l'appli garde le résultat
  (compté / réel, amplitude mesurée, sensibilité) et calcule la précision par exercice.
  Diagnostic en direct pendant le test (angle mesuré, seuils, état, images par seconde) et bouton
  « Copier le rapport » pour partager les résultats. L'historique est inclus dans la sauvegarde.

Nouveautés V8 :
- Compteur de répétitions par caméra (bêta). Boutons « 📷 Compter les reps » dans les WOD, les
  séries de force et de renfo, et carte « Compteur de reps » sur l'accueil et l'onglet Force.
  La caméra suit ton corps (MediaPipe Pose, calculé sur le téléphone : aucune image n'est
  enregistrée ni envoyée), compte les reps, les annonce à voix haute et signale l'objectif atteint.
  Exercices : squats (thrusters), fentes, pompes, tractions, dips, sit ups / V ups, soulevés et
  swings, développés / épaulés / ground to overhead, toes / knees to bar, burpees.
  Comptage avec amplitude minimale (demi-répétition refusée et signalée), 3 sensibilités, boutons
  +1 / -1 / zéro, caméra avant ou arrière, et « Analyser une vidéo » pour compter une vidéo filmée.
  Fin du compteur : coche l'exercice du WOD, ou remplit les reps de la série de force / renfo.
  Première utilisation : télécharge le modèle (environ 8 Mo), puis il est gardé pour le hors ligne.
  Limites : une seule personne dans le cadre, corps entier visible, téléphone stable de profil.
  Contrôlé sur des vidéos réelles (squats, soulevés de terre, développés, burpees, pompes, fentes,
  swings, tractions) ; sit ups, dips et toes to bar non contrôlés, à vérifier à l'usage.

Nouveautés V7 :
- Tout le site aux couleurs du GIGN : fond bleu roi, cartes et boutons bleus, or pour les boutons
  principaux, titres et onglets actifs, rouge pour les actions dangereuses, blanc pour le texte.
  Double filet rouge et or sous l'en-tête et au-dessus du menu, badge « GI » cerclé de rouge,
  d'or et de blanc, icônes de l'écran d'accueil sur fond bleu roi avec liseré blanc.

Nouveautés V6 :
- Thème GIGN : bleu marine profond, or, rouge et blanc, comme la rondache du GIGN. Nouveau badge
  « GI » dans l'en-tête et nouvelles icônes (écran d'accueil de l'iPhone).
- Signal du chrono plus long : 3 bips puis une note tenue (environ 2,3 s) à la fin de chaque étape
  de 30 s ou plus et à la fin du chrono. Les efforts courts (Tabata, 20 s / 10 s) gardent le signal
  court. Case « Signal long » dans le chrono pour revenir au signal court ; vibration plus longue.

Nouveautés V5 :
- Les charges et répétitions que tu modifies en Force sont conservées ; cocher une série
  ne remet plus les autres à zéro et la page ne saute plus. Si tu changes un RM, les charges
  sont recalculées.
- Chrono flottant : quand tu fais défiler la page ou changes d'onglet, le chrono en cours reste
  visible au-dessus du menu, avec Pause / Reprendre et Arrêter.
- Bips 3-2-1 avant la fin de chaque étape (désactivables dans le chrono, case « Bips 3-2-1 »).
- Son iPhone : l'audio est relancé automatiquement quand tu reviens sur l'application.
- Profil > Sauvegarde : copie / restaure tes RM, ton suivi et tes cases cochées.
- Réinitialiser l'application efface maintenant bien tout, même à la première utilisation.
- iPhone : en-tête sous l'encoche, sélecteurs P/S sans zoom automatique, pas de délai au toucher.
- Ouverture plus rapide en salle : si le réseau met plus de 3,5 s, la version enregistrée s'ouvre.
- Correction (vérifiée sur les PDF) : aux programmes 3 et 4, chaque séance de force n'a qu'UN
  exercice complémentaire (EMOM / AMREP). L'appli en proposait deux, dont un qui n'existe pas.
- Course : tableau VMA complet (VMA, +0,5, +1, +1,5, +2) avec les distances en 30 s, 45 s et 60 s,
  et la remarque d'échauffement / retour au calme du coach.
- Séances fonctionnelles : encart « Conseils du coach » (temps de repos selon l'intensité, superset,
  abdos 3 fois par semaine, retour au calme), propre à chaque programme.
- Contrôle : les 48 séances WOD, les 96 circuits (abdos et samedi), les 48 séances de course et les
  16 cycles de force ont été comparés au texte des 16 PDF : aucune différence de contenu.

ROAD TO GI - V4
Renforcement complémentaire visible pour les 4 programmes, avec choix des exercices,
RM propre à chaque variante, séries et repos, et EMOM corde / tractions serviette.
Chrono sonore : série seule ou bloc complet, pause, reprise et durée personnalisée.
Tester le son avec le bouton dédié et régler le volume de l’iPhone.
Garder l’application visible pendant le chrono : écran verrouillé ou application
en arrière-plan, iOS peut suspendre le son et les transitions.

Pour mettre à jour : remplacer les fichiers sur le même hébergement HTTPS.
Les RM et le suivi existants sont conservés sur le même appareil et la même adresse.
Le nouveau cache hors ligne sera activé après ouverture de la version publiée.
Pour installer : ouvrir l’adresse dans Safari > Partager > Ajouter à l’écran d’accueil.
Les RM des variantes complémentaires doivent être renseignés pour calculer les charges.
Le pourcentage des tractions lestées est appliqué au RM de charge ajoutée saisi.

Mise à jour : chronos intégrés aux consignes WOD et abdos.
AMRAP et efforts : compte à rebours ; EMOM : bips de départ ; Tabata : 20 s / 10 s.
FOR TIME : chronomètre libre ; rappels périodiques : bips jusqu’à arrêt.
Un seul chrono est actif à la fois : lancer un autre chrono remplace le précédent.
Les validations restent indépendantes par jour et par semaine.

Calendrier réel : date et horloge de Paris, mise à jour chaque seconde.
La séance du jour suit le planning hebdomadaire et la semaine évolue automatiquement.
Le lundi de début se règle dans Profil > Calendrier de préparation.
Le cycle s’arrête après 16 semaines ; les programmes restent consultables.

WOD relus : les 48 séances sont structurées en blocs, exercices et rounds.
Les charges et les phrases coupées sont réunies ; les consignes ne sont plus à cocher.
Round suivant ajuste les répétitions des pyramides et des AMRAP évolutifs.
Les cases sont indépendantes par round et par séance.
Les écarts de durée présents dans certains PDF sont signalés dans les séances concernées.
Le texte original reste consultable dans chaque WOD.

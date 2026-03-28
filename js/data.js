// ================================================================
//  DATA.JS — Le seul fichier à modifier pour ajouter une soirée
//  Pour ajouter une session : copiez un bloc { ... } dans
//  le tableau sessions[] et remplissez les champs.
// ================================================================

const CLUB = {
  name: "La Cave à Souvenirs",
  subtitle: "Chroniques de nos soirées dégustation",
  members: ["Bastien", "Sophie", "Marc", "Céline", "Thomas", "Julie"],

  sessions: [
    {
      id: "2025-02-14",
      date: "14 février 2025",
      host: "Sophie & Marc Fontaine",
      location: "Lausanne, Vaud",
      theme: "Saint-Valentin en Bourgogne",
      cuisine: "Fondue au parmesan, magret de canard aux cerises, mille-feuille",
      description: "Une soirée romantique autour des grands crus de Bourgogne. Marc nous a surpris avec une verticale de Gevrey-Chambertin sur trois millésimes consécutifs.",
      coverColor: "#6b1a2a",
      wines: [
        {
          name: "Gevrey-Chambertin 1er Cru « Les Cazetiers »",
          domain: "Domaine Faiveley",
          vintage: 2018,
          appellation: "Gevrey-Chambertin 1er Cru",
          region: "Côte de Nuits, Bourgogne — France",
          type: "rouge",
          grape: "Pinot Noir",
          score: 93,
          nose: "Nez intense et complexe : cerise noire, mûre sauvage, note florale de violette, légère touche fumée et sous-bois humide.",
          palate: "Bouche soyeuse aux tannins fins et mûrs. Belle acidité qui porte le fruit en longueur. Finale épicée avec des notes de poivre blanc.",
          pairing: "Sublime avec le magret, les tanins enveloppaient parfaitement la chair du canard.",
          notes: "Le coup de cœur unanime de la soirée. À revoir dans 5 ans."
        },
        {
          name: "Gevrey-Chambertin 1er Cru « Les Cazetiers »",
          domain: "Domaine Faiveley",
          vintage: 2015,
          appellation: "Gevrey-Chambertin 1er Cru",
          region: "Côte de Nuits, Bourgogne — France",
          type: "rouge",
          grape: "Pinot Noir",
          score: 91,
          nose: "Plus ouvert, fruits confits (cerise au kirsch, pruneau), tabac blond, cuir souple.",
          palate: "Tannins fondus, rondeur veloutée. Le millésime chaud se ressent dans la générosité du vin.",
          pairing: "Parfait accord avec les fromages à pâte molle de fin de repas.",
          notes: "À son apogée. Boire dans les 3 prochaines années."
        },
        {
          name: "Gevrey-Chambertin 1er Cru « Les Cazetiers »",
          domain: "Domaine Faiveley",
          vintage: 2012,
          appellation: "Gevrey-Chambertin 1er Cru",
          region: "Côte de Nuits, Bourgogne — France",
          type: "rouge",
          grape: "Pinot Noir",
          score: 88,
          nose: "Nez évolué : terre humide, champignon, truffe, fruit rouge compote.",
          palate: "Structure plus austère, acidité marquée, finale légèrement tannique.",
          pairing: "Moins à l'aise avec la cuisine du soir, meilleur seul en fin de repas.",
          notes: "Un vin d'un autre temps — émouvant mais peut-être à son déclin."
        },
        {
          name: "Meursault « Les Tessons »",
          domain: "Domaine Roulot",
          vintage: 2020,
          appellation: "Meursault",
          region: "Côte de Beaune, Bourgogne — France",
          type: "blanc",
          grape: "Chardonnay",
          score: 95,
          nose: "Nez saisissant de minéralité crayeuse, beurre noisette, fleurs blanches, agrumes confits.",
          palate: "Tension remarquable, salinité persistante, gras équilibré par une acidité vive. Finale interminable.",
          pairing: "Ouverture idéale sur la fondue au parmesan.",
          notes: "Révélation de la soirée. Roulot confirme son statut de référence à Meursault."
        }
      ]
    },
    {
      id: "2024-11-08",
      date: "8 novembre 2024",
      host: "Bastien Desplands",
      location: "Genève, Genève",
      theme: "Rhône vs Languedoc — Le Sud à l'honneur",
      cuisine: "Tapenade, daube provençale, plateau de fromages affinés, tarte aux figues",
      description: "Soirée inaugurale du club ! L'occasion de définir notre rituel et de mettre en compétition deux terroirs du sud de la France.",
      coverColor: "#3d1a00",
      wines: [
        {
          name: "Châteauneuf-du-Pape « Cuvée Réservée »",
          domain: "Château Rayas",
          vintage: 2019,
          appellation: "Châteauneuf-du-Pape",
          region: "Vallée du Rhône méridionale — France",
          type: "rouge",
          grape: "Grenache 100%",
          score: 97,
          nose: "Explosion de framboise fraîche, kirsch, fleur de pivoine, poivre blanc, légère garrigue.",
          palate: "Élégance déconcertante pour un CdP. Tannins quasi inexistants, acidité vive, profondeur infinie.",
          pairing: "La daube provençale était une évidence — accord parfait.",
          notes: "Rayas justifie son mythe. Un vin qui défie toutes les conventions de l'appellation."
        },
        {
          name: "Gigondas « La Gille »",
          domain: "Domaine Les Palières",
          vintage: 2020,
          appellation: "Gigondas",
          region: "Vallée du Rhône méridionale — France",
          type: "rouge",
          grape: "Grenache, Syrah",
          score: 89,
          nose: "Garrigue intense, olive noire, fruits des bois, épices du Midi.",
          palate: "Corsé et chaleureux, belle mâche, finale légèrement réglissée.",
          pairing: "Excellent avec les fromages forts, notamment le Bleu d'Auvergne.",
          notes: "Très bon rapport qualité-prix. Un solide ambassadeur de Gigondas."
        },
        {
          name: "Pic Saint-Loup « Clos Marie »",
          domain: "Clos Marie",
          vintage: 2021,
          appellation: "Languedoc Pic Saint-Loup",
          region: "Languedoc-Roussillon — France",
          type: "rouge",
          grape: "Syrah, Grenache, Mourvèdre",
          score: 91,
          nose: "Violette éclatante, mûre, olive noire, poivre de Sichuan, herbes sèches.",
          palate: "Fraîcheur inattendue pour le terroir, tannins croquants, bel équilibre.",
          pairing: "Surprise totale avec la tarte aux figues — accord osé qui a fonctionné.",
          notes: "Révélation du soir côté Languedoc. À 18€, il a battu des vins à 3x son prix."
        },
        {
          name: "Condrieu « La Doriane »",
          domain: "Guigal",
          vintage: 2022,
          appellation: "Condrieu",
          region: "Vallée du Rhône septentrionale — France",
          type: "blanc",
          grape: "Viognier 100%",
          score: 92,
          nose: "Pêche blanche, abricot, violette, miel d'acacia, touche de gingembre.",
          palate: "Onctueux sans lourdeur, finale florale interminable.",
          pairing: "Ouverture sur la tapenade et les crudités — accord inattendu et réussi.",
          notes: "Le Viognier dans toute sa splendeur. Condrieu reste unique au monde."
        }
      ]
    }
  ]
};
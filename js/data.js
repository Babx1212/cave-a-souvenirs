// ================================================================
//  DATA.JS — Le seul fichier à modifier pour ajouter une soirée
//  Pour ajouter une session : copiez un bloc { ... } dans
//  le tableau sessions[] et remplissez les champs.
// ================================================================

const CLUB = {
  name: "La Cave à Souvenirs",
  subtitle: "Chroniques de nos soirées dégustation",
  members: ["Bastien", "Théodore", "Nathan", "Clémentin", "Fabien", "Gautier", "Hugo", "Ilan", "Imran", "Lino"],

  // La plus récente en premier
  sessions: [

    {
      id: "2026-03-26",
      date: "26 mars 2026",
      host: "Hugo",
      location: "Genève, Plainpalais",
      theme: "Soirée fondatrice — De la bulle au liquoreux",
      cuisine: "Salade printanière, boudin blanc et sa purée de pomme de terre maison, fraises fraîches et fior di latte glacée",
      description: "Soirée inaugurale du club, réunis à dix autour de la table chez Hugo dans son magnifique appartement de maître surplombant le Temple de Plainpalais. Dix vins, dix amis, une passion commune — et un rituel qui ne fait que commencer.",
      coverColor: "#4a2d6b",
      wines: [
        {
          name: "Champagne Beaugrand",
          domain: "Beaugrand",
          vintage: "NV",
          appellation: "Champagne",
          region: "Champagne — France",
          type: "pétillant",
          grape: "Assemblage champenois",
          score: 85,
          nose: "Pomme, agrumes, brioche légère",
          palate: "Vive, fraîche, droite, bulle fine",
          pairing: "Belle ouverture sur la salade printanière — la finesse des bulles épousait la légèreté du plat.",
          notes: "Longueur moyenne, nette. Un champagne élégant pour lancer la soirée."
        },
        {
          name: "Chinon Blanc",
          domain: "Éric Hérault",
          vintage: "—",
          appellation: "Chinon Blanc",
          region: "Vallée de la Loire — France",
          type: "blanc",
          grape: "Chenin Blanc",
          score: 87,
          nose: "Citron, coing, fleurs blanches, miel léger",
          palate: "Tendue, acide, texture cireuse",
          pairing: "Bel accord avec le boudin blanc — l'acidité du Chinon tranchait parfaitement le gras.",
          notes: "Longueur moyenne+, saline. Un blanc de Loire atypique et rafraîchissant."
        },
        {
          name: "Histoire d'Énfer",
          domain: "Cave du Valais",
          vintage: "—",
          appellation: "Valais AOC",
          region: "Valais — Suisse",
          type: "blanc",
          grape: "Assemblage valaisan",
          score: 83,
          nose: "Beurre, fruits blancs mûrs, boisé léger",
          palate: "Très grasse, ample, peu de tension",
          pairing: "Bien accompagné avec le boudin blanc — le gras du vin épousait la richesse du plat.",
          notes: "Longueur moyenne, sur le gras. Manque un peu de tension pour se démarquer."
        },
        {
          name: "Meursault 2019",
          domain: "Domaine non communiqué",
          vintage: 2019,
          appellation: "Meursault",
          region: "Côte de Beaune, Bourgogne — France",
          type: "blanc",
          grape: "Chardonnay",
          score: 92,
          nose: "Beurre, noisette, pomme mûre, boisé fin",
          palate: "Ample, structurée, complexe",
          pairing: "Le plus noble accord de la soirée avec le boudin blanc — un classique absolu.",
          notes: "Longueur longue, persistante. Le blanc de la soirée, sans discussion."
        },
        {
          name: "Arbin Mondeuse « 1952 »",
          domain: "Domaine non communiqué",
          vintage: "1952",
          appellation: "Arbin",
          region: "Savoie — France",
          type: "rouge",
          grape: "Mondeuse",
          score: 88,
          nose: "Poivre, violette, fruits noirs, épices",
          palate: "Vive, tannique, rustique maîtrisée",
          pairing: "Accord original avec la purée — le caractère rustique de la Mondeuse tranchait bien.",
          notes: "Longueur moyenne+, épicée. Une Mondeuse de caractère, authentique et vibrante."
        },
        {
          name: "Guardia dei Mori",
          domain: "Guardia dei Mori",
          vintage: "—",
          appellation: "Toscane IGT",
          region: "Toscane — Italie",
          type: "rouge",
          grape: "Sangiovese",
          score: 80,
          nose: "Fruits noirs, épices, poivre",
          palate: "Structurée, peu vibrante",
          pairing: "Moins à l'aise sur le menu du soir — aurait mérité un plat de viande plus affermé.",
          notes: "Longueur courte. Correct mais en retrait face aux autres rouges de la soirée."
        },
        {
          name: "Grain par Grain",
          domain: "Domaine non communiqué",
          vintage: "—",
          appellation: "Vin de France",
          region: "France",
          type: "rouge",
          grape: "Cépage inconnu",
          score: 82,
          nose: "Fruits rouges, léger sauvage",
          palate: "Souple, vivante, peu extraite",
          pairing: "Buvable et sans prise de tête — un vin naturel à l'aise en toute circonstance.",
          notes: "Longueur courte à moyenne. Léger, sans prétention, plaisant à boire."
        },
        {
          name: "Héritage Chasse-Spleen 2020",
          domain: "Château Chasse-Spleen",
          vintage: 2020,
          appellation: "Moulis-en-Médoc",
          region: "Bordeaux — France",
          type: "rouge",
          grape: "Merlot, Cabernet Sauvignon",
          score: 83,
          nose: "Bois, vanille, toast, fruit discret",
          palate: "Très boisé, structure masquée",
          pairing: "Le bois dominant écrasait les saveurs du boudin — à revoir dans quelques années.",
          notes: "Longueur moyenne, boisée. Trop marqué par le bois pour s'exprimer aujourd'hui."
        },
        {
          name: "La Baronne",
          domain: "Château La Baronne",
          vintage: "—",
          appellation: "Corbières",
          region: "Languedoc — France",
          type: "rouge",
          grape: "Carignan, Grenache, Syrah",
          score: 86,
          nose: "Fruits noirs mûrs, garrigue, épices",
          palate: "Ample, solaire, généreuse",
          pairing: "Un vin de terroir solaire qui s'est bien marié avec le boudin et ses notes poivrées.",
          notes: "Longueur moyenne+. Un Corbières généreux et sans détour — beau rapport qualité-plaisir."
        },
        {
          name: "Château Guiraud 2022",
          domain: "Château Guiraud",
          vintage: 2022,
          appellation: "Sauternes",
          region: "Bordeaux — France",
          type: "blanc",
          grape: "Sémillon, Sauvignon Blanc",
          score: 91,
          nose: "Abricot, miel, fruits confits, safran",
          palate: "Riche, équilibrée, fraîche",
          pairing: "Accord magnifique sur les fraises et la fior di latte — la douceur du Sauternes sublimait la fraîcheur du dessert.",
          notes: "Longueur longue. Une belle clôture sucrée pour une soirée mémorable."
        }
      ]
    }

  ] // fin sessions[]
}; // fin CLUB

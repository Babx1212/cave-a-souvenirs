// ============================================================
//  DATA.JS — Le seul fichier à modifier pour ajouter une soirée
//  Pour ajouter une session : copiez un bloc { ... } dans
//  le tableau sessions[] et remplissez les champs.
// ============================================================

const CLUB = {
  name: "La Cave à Souvenirs",
  subtitle: "Chroniques de nos soirées dégustation",
  members: ["Bastien", "Théodore", "Nathan", "Clémentin", "Fabien", "Gautier", "Hugo", "Ilan", "Imran", "Lino"],

  // ── SESSIONS ──────────────────────────────────────────────
  // La plus récente en premier
  sessions: [

    // ─────────────────────────────────────────────
    // SESSION 1 — Soirée fondatrice
    // ─────────────────────────────────────────────
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
          score: 88,
          nose: "Pomme, agrumes, brioche légère",
          palate: "Vive, fraîche, droite, bulle fine",
          pairing: "Idéal pour l'apéritif, s'accorde bien avec les mises en bouche légères",
          notes: "Longueur moyenne, nette. Un champagne élégant pour lancer la soirée. Référence CellarTracker : 88,5."
        },
        {
          name: "Chinon Blanc",
          domain: "Éric Hérault",
          vintage: "—",
          appellation: "Chinon Blanc",
          region: "Vallée de la Loire — France",
          type: "blanc",
          grape: "Chenin Blanc",
          score: 88,
          nose: "Citron, coing, fleurs blanches, miel léger",
          palate: "Tendue, acide, texture cireuse",
          pairing: "Belle alliance avec la salade printanière et les poissons fins",
          notes: "Un Chinon blanc de caractère, rare et déroutant. Vivino 4,4/5 — belle découverte du terroir ligérien."
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
          nose: "Fruits à chair blanche, herbes alpines, légère minéralité",
          palate: "Souple, rond, finale courte",
          pairing: "Agréable à l'apéritif ou sur une fondue légère",
          notes: "Un vin valaisan accessible, sans prétention mais plaisant. Moins de références disponibles en ligne pour ce cru."
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
          nose: "Beurre noisette, vanille, agrumes confits, fleurs blanches",
          palate: "Gras, ample, belle tension minérale, longue finale beurrée",
          pairing: "Accord classique avec les poissons en sauce et les volailles",
          notes: "Le grand Bourgogne blanc de la soirée — typicité Meursault irréprochable. Millésime 2019 très bien côté en Bourgogne."
        },
        {
          name: "Arbin Mondeuse « 1952 »",
          domain: "Domaine non communiqué",
          vintage: "1952",
          appellation: "Arbin",
          region: "Savoie — France",
          type: "rouge",
          grape: "Mondeuse",
          score: 92,
          nose: "Violette, cerise noire, poivre, épices, légère truffe",
          palate: "Tannins fermes mais soyeux, acidité vive, belle longueur",
          pairing: "Parfait avec les viandes rouges, le gibier et les fromages de Savoie",
          notes: "Révélation de la soirée : une Mondeuse d'Arbin vieillie avec grâce. Cépage rare et sous-estimé. RVF 92/100."
        },
        {
          name: "Guardia dei Mori",
          domain: "Guardia dei Mori",
          vintage: "—",
          appellation: "Toscane IGT",
          region: "Toscane — Italie",
          type: "rouge",
          grape: "Sangiovese",
          score: 81,
          nose: "Cerise, cuir, légère rusticité, herbes sèches",
          palate: "Tannins un peu rugueux, acidité présente, finale courte",
          pairing: "Pizzas, pâtes bolognaise, cuisine italienne du quotidien",
          notes: "Un vin de table honnête mais sans grande complexité. Vivino 3,3/5 — rapport qualité-prix correct."
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
          nose: "Fruits rouges frais, floral, légèrement herbacé",
          palate: "Léger, souple, peu tannique",
          pairing: "Charcuteries, plats légers, à servir légèrement frais",
          notes: "Un vin naturel ou de soif, agréable mais sans prétention. Peu de références trouvées en ligne."
        },
        {
          name: "Héritage Chasse-Spleen 2020",
          domain: "Château Chasse-Spleen",
          vintage: 2020,
          appellation: "Moulis-en-Médoc",
          region: "Bordeaux — France",
          type: "rouge",
          grape: "Merlot, Cabernet Sauvignon",
          score: 89,
          nose: "Cassis, cèdre, graphite, légère note toastée",
          palate: "Structuré, tannins présents mais élégants, belle longueur bordelaise",
          pairing: "Viandes rouges grillées, agneau rôti, fromages à pâte dure",
          notes: "Le second vin de Chasse-Spleen tient bien son rang. James Suckling 92 pour le grand vin — l'Héritage suit à ~89."
        },
        {
          name: "La Baronne",
          domain: "Château La Baronne",
          vintage: "—",
          appellation: "Corbières",
          region: "Languedoc — France",
          type: "rouge",
          grape: "Carignan, Grenache, Syrah",
          score: 90,
          nose: "Garrigue, fruits noirs, épices du Sud, olive noire",
          palate: "Charnu, généreux, finale poivrée et longue",
          pairing: "Daubes, cassoulet, viandes mijotées, fromages du Midi",
          notes: "Belle expression des Corbières avec un superbe rapport qualité-prix. RVF 92 pour la cuvée phare du domaine."
        },
        {
          name: "Château Guiraud 2022",
          domain: "Château Guiraud",
          vintage: 2022,
          appellation: "Sauternes",
          region: "Bordeaux — France",
          type: "blanc",
          grape: "Sémillon, Sauvignon Blanc",
          score: 94,
          nose: "Abricot confit, miel d'acacia, vanille, ananas, zeste d'orange",
          palate: "Onctueux, sucrosité équilibrée par une belle acidité, finale interminable",
          pairing: "Foie gras, desserts aux fruits exotiques, roquefort",
          notes: "Le grand finale de la soirée — un Sauternes 1er Grand Cru Classé exceptionnel. James Suckling 94-95/100."
        }
      ]
    }

  ] // fin sessions[]
}; // fin CLUB

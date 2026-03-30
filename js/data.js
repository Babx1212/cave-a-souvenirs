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
          domain: "Champagne Hélène Beaugrand",
          winemaker: "Hélène Beaugrand",
          vintage: "NV",
          appellation: "Champagne AOP",
          region: "Champagne — France",
          village: "Montgueux, Aube",
          type: "pétillant",
          grape: "Chardonnay",
          score: 88,
          nose: "Pomme, agrumes, brioche légère",
          palate: "Vive, fraîche, droite, bulle fine",
          pairing: "Idéal pour l'apéritif, s'accorde bien avec les mises en bouche légères",
          notes: "Hélène Beaugrand est une récoltante-manipulante installée à Montgueux (Aube) depuis 2018, sur 3 hectares de Chardonnay plantés sur la craie caractéristique de ce village exceptionnel. Quatrième génération d'une famille dont la rue principale du village porte le nom. Un champagne élégant pour lancer la soirée. Référence CellarTracker : 88,5."
        },
        {
          name: "Chinon Blanc « L'Hérault-in »",
          domain: "Domaine Éric Hérault",
          winemaker: "Éric Hérault",
          vintage: 2022,
          appellation: "Chinon AOP",
          region: "Vallée de la Loire — France",
          village: "Panzoult, Indre-et-Loire",
          type: "blanc",
          grape: "Chenin Blanc",
          score: 88,
          nose: "Citron, coing, fleurs blanches, miel léger",
          palate: "Tendue, acide, texture cireuse",
          pairing: "Belle alliance avec la salade printanière et les poissons fins",
          notes: "Éric Hérault vinifie depuis 1992 dans une ancienne ferme du 17e siècle à Panzoult, dépendance du château local. Le domaine s'étend sur 26 hectares avec une cave creusée dans le tuffeau calcaire du 14e siècle. Un Chinon blanc de caractère, rare et déroutant. Vivino 4,4/5."
        },
        {
          name: "L'Enfer du Schiste",
          domain: "Domaine Histoire d'Enfer",
          winemaker: "Dr. Patrick Regamey",
          vintage: 2022,
          appellation: "Valais AOC",
          region: "Valais — Suisse",
          village: "Corin-sur-Sierre, Valais",
          type: "blanc",
          grape: "Rèze",
          score: 83,
          nose: "Résine, herbes alpines, minéralité, touche de chardonnay",
          palate: "Typé, complexe, belle longueur en bouche, notes résineuses bien marquées",
          pairing: "Agréable à l'apéritif ou sur une fondue légère",
          notes: "Cépage autochtone valaisan rarissime, la Rèze est surtout connue dans le Vin du Glacier du Val d'Anniviers. Ce 2022 a bien résisté à la chaleur du millésime. Élevé en fût neuf, fût de passage et en cuve, il évoque le chardonnay avec une subtile touche résineuse. Domaine fondé en 2008 par le Dr. Patrick Regamey à Corin-sur-Sierre, 12 ha en bio."
        },
        {
          name: "Meursault « Clos du Murger » 2019",
          domain: "Domaine Albert Grivault",
          winemaker: "Claire Bardet",
          vintage: 2019,
          appellation: "Meursault AOP",
          region: "Côte de Beaune, Bourgogne — France",
          village: "Meursault, Côte-d'Or",
          type: "blanc",
          grape: "Chardonnay",
          score: 92,
          nose: "Beurre noisette, vanille, agrumes confits, fleurs blanches",
          palate: "Gras, ample, belle tension minérale, longue finale beurrée",
          pairing: "Accord classique avec les poissons en sauce et les volailles",
          notes: "Domaine fondé en 1873 par Albert Grivault, aujourd'hui conduit par Claire Bardet. Le Clos du Murger est leur cuvée Village — monopole de 1,65 ha. Le domaine possède aussi le Clos des Perrières, 1er Cru monopole souvent comparé à Montrachet. Or au Concours Général Agricole Paris 2019."
        },
        {
          name: "Arbin Mondeuse « 1952 »",
          domain: "Domaine Fabien Trosset",
          winemaker: "Fabien Trosset",
          vintage: 2020,
          appellation: "Vin de Savoie — Cru Arbin AOP",
          region: "Savoie — France",
          village: "Arbin, Savoie",
          type: "rouge",
          grape: "Mondeuse",
          score: 92,
          nose: "Violette, cerise noire, poivre, épices, légère truffe",
          palate: "Tannins fermes mais soyeux, acidité vive, belle longueur",
          pairing: "Parfait avec les viandes rouges, le gibier et les fromages de Savoie",
          notes: "Fabien Trosset a repris le domaine familial en 2011 après le décès de son père. La cuvée « 1952 » rend hommage à l'année de naissance de ce père, et aux vignes plantées cette même année. Un cépage rare et sous-estimé : la Mondeuse d'Arbin est l'un des grands rouges de montagne français. Le domaine s'est agrandi de 7 à 24 hectares. RVF 92/100."
        },
        {
          name: "Guardia dei Mori",
          domain: "Guardia dei Mori",
          winemaker: "—",
          vintage: "—",
          appellation: "Puglia IGT",
          region: "Pouilles — Italie",
          village: "Puglia",
          type: "rouge",
          grape: "Sangiovese",
          score: 81,
          nose: "Cerise, cuir, légère rusticité, herbes sèches",
          palate: "Tannins un peu rugueux, acidité présente, finale courte",
          pairing: "Pizzas, pâtes bolognaise, cuisine italienne du quotidien",
          notes: "Guardia dei Mori est un producteur italien proposant des vins de cépages accessibles. Malgré l'étiquette, ce Sangiovese est probablement originaire des Pouilles ou de Sicile plutôt que de Toscane — à vérifier sur la bouteille. Un vin de table honnête mais sans grande complexité. Vivino 3,3/5 — rapport qualité-prix correct."
        },
        {
          name: "Grain Noir",
          domain: "Domaine Marie-Thérèse Chappaz",
          winemaker: "Marie-Thérèse Chappaz",
          vintage: "—",
          appellation: "Valais AOC — Grain Noir",
          region: "Valais — Suisse",
          village: "Fully, Valais",
          type: "rouge",
          grape: "Cabernet Sauvignon, Cabernet Franc, Merlot",
          score: 82,
          nose: "Cassis, mûre, épices douces, légère note végétale",
          palate: "Souple, tanins fondus, fruité, finale courte",
          pairing: "Viandes rouges, fromages à pâte mi-dure",
          notes: "Marie-Thérèse Chappaz est l'une des vigneronnes les plus célèbres de Suisse. Basée à Fully (Valais) sur 8-10 hectares en biodynamie Demeter depuis 1997, elle est l'icône absolue du vignoble helvétique. Son Grain Noble Petite Arvine a été le premier vin suisse à obtenir 100/100 de Robert Parker. Élue vigneronne de l'année SVS 2021."
        },
        {
          name: "L'Héritage de Chasse-Spleen 2020",
          domain: "Château Chasse-Spleen",
          winemaker: "Céline Villars-Foubet",
          vintage: 2020,
          appellation: "Moulis-en-Médoc AOP",
          region: "Bordeaux — France",
          village: "Grand-Poujeaux, Moulis-en-Médoc",
          type: "rouge",
          grape: "Cabernet Sauvignon (50%), Merlot (40%), Petit Verdot (10%)",
          score: 89,
          nose: "Cassis, cèdre, graphite, légère note toastée",
          palate: "Structuré, tannins présents mais élégants, belle longueur bordelaise",
          pairing: "Viandes rouges grillées, agneau rôti, fromages à pâte dure",
          notes: "Second vin du Château Chasse-Spleen, dirigé depuis 2000 par Céline Villars-Foubet (petite-fille du fondateur Jacques Merlaut). Le château est perché au point le plus haut de Grand-Poujeaux. L'Héritage (ex-«L'Ermitage» jusqu'en 2001) tient bien son rang. James Suckling 92 pour le grand vin — l'Héritage suit à ~89."
        },
        {
          name: "Las Vals Rouge",
          domain: "Château La Baronne",
          winemaker: "Jean & Anne Lignères",
          vintage: 2019,
          appellation: "Corbières AOP",
          region: "Languedoc — France",
          village: "Fontcouverte, Aude",
          type: "rouge",
          grape: "Mourvèdre",
          score: 90,
          nose: "Garrigue, fruits noirs, épices du Sud, olive noire",
          palate: "Charnu, généreux, finale poivrée et longue",
          pairing: "Daubes, cassoulet, viandes mijotées, fromages du Midi",
          notes: "Cinq générations de la famille Lignères à Fontcouverte, au pied de la Montagne d'Alaric dans les Corbières. Louis Lignères fondait la maison en 1890. Certifié bio depuis 2008 et Demeter (biodynamie) depuis 2012. RVF 92 pour la cuvée phare."
        },
        {
          name: "Château Guiraud 2022",
          domain: "Château Guiraud",
          winemaker: "Sandrine Garbay",
          vintage: 2022,
          appellation: "Sauternes AOP — 1er Grand Cru Classé",
          region: "Bordeaux — France",
          village: "Sauternes, Gironde",
          type: "liquoreux",
          grape: "Sémillon (65%), Sauvignon Blanc (35%)",
          score: 94,
          nose: "Abricot confit, miel d'acacia, vanille, ananas, zeste d'orange",
          palate: "Onctueux, sucrosité équilibrée par une belle acidité, finale interminable",
          pairing: "Foie gras, desserts aux fruits exotiques, roquefort",
          notes: "Premier 1er Grand Cru Classé de Sauternes certifié en agriculture biologique (depuis 2011). Sandrine Garbay, ancienne maître de chai du Château d'Yquem, dirige le domaine depuis 2022. 128 hectares d'un seul tenant. Le grand finale de la soirée — un Sauternes d'exception. James Suckling 94-95/100."
        }
      ]
    }

  ] // fin sessions[]
}; // fin CLUB
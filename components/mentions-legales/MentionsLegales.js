import React from "react";
import classes from "./MentionsLegales.module.css";
import Link from "next/link";

function MentionsLegales() {
  return (
    <div className={classes.container}>
      <h1 className={classes.mainTitle}>MENTIONS LÉGALES</h1>
      <h2 className={classes.subTitle}>BPI CONSTRUCTION ET RÉNOVATION</h2>

      <hr className={classes.customHR}></hr>

      <p className={classes.paragraph}>
        Les présentes conditions générales d'utilisation régissent l'utilisation
        du site www.bpirenovation.com (ci-après le « Site »).
      </p>

      <h3 className={classes.sectionTitle}>Article 1 - Mentions légales</h3>

      <h4 className={classes.subSectionTitle}>Editeur :</h4>
      <p className={classes.paragraph}>PROPRIÉTAIRE DU SITE</p>
      <p className={classes.paragraph}>
        BPI CONSTRUCTION ET RÉNOVATION, 101 Rue Victor Hugo 94200 IVRY-SUR-SEINE
      </p>
      <p className={classes.paragraph}>SIREN : 914482849</p>
      <p className={classes.paragraph}>Tel. : +33 892976438</p>
      <p className={classes.paragraph}>
        Président de l'entreprise : M.Soufiene ARABI
      </p>

      <h4 className={classes.subSectionTitle}>Hébergeur :</h4>
      <p className={classes.paragraph}>Hostinger</p>
      <p className={classes.paragraph}>
        Siège social : 101 RUE VICTOR HUGO - 94200 IVRY-SUR-SEINE
      </p>

      <h4 className={classes.subSectionTitle}> Renseignements juridiques :</h4>
      <p className={classes.paragraph}>Date création entreprise : 02-06-2022</p>
      <p className={classes.paragraph}>
        Forme juridique : SASU Société par actions simplifiée à associé unique
      </p>

      <h4 className={classes.subSectionTitle}> Informations commerciales :</h4>
      <p className={classes.paragraph}>
        Activité (Code NAF ou APE) : Travaux de peinture et vitrerie (4334Z)
      </p>
      <p className={classes.paragraph}>
        Activité principale déclarée : Peinture, Carrelage, Maçonnerie,
        Electricité et Plomberie.
      </p>

      <p className={classes.paragraph}>
        Convention collective déduite : Bâtiment ouvriers plus de 10 Salariés
        (1597)
      </p>

      <p className={classes.paragraph}>
        Référence :{" "}
        <Link href="https://www.societe.com/societe/bpi-914482849.html">
          https://www.societe.com/societe/bpi-914482849.html
        </Link>
      </p>

      <h3 className={classes.sectionTitle}>
        Article 2 - Conditions générales d'utilisation
      </h3>

      <h4 className={classes.subSectionTitle}>Accès au Site</h4>
      <p className={classes.paragraph}>
        L'accès au Site et son utilisation sont réservés à un usage strictement
        personnel. Vous vous engagez à ne pas utiliser le Site et les
        informations ou données qui y figurent à des fins commerciales,
        politiques, publicitaires et pour toute forme de sollicitation
        commerciale et notamment l'envoi de courriers électroniques non
        sollicités.
      </p>

      <h4 className={classes.subSectionTitle}>Contenu du Site</h4>
      <p className={classes.paragraph}>
        Toutes les marques, photographies, textes, commentaires, illustrations,
        images animées ou non, séquences vidéo, sons, ainsi que toutes les
        applications informatiques qui pourraient être utilisées pour faire
        fonctionner ce Site et plus généralement tous les éléments reproduits ou
        utilisés sur le Site sont protégés par les lois en vigueur au titre de
        la propriété intellectuelle. Ils sont la propriété pleine et entière de
        BPI CONSTRUCTION ET RENOVATION ou de ses partenaires. Toute
        reproduction, représentation, utilisation ou adaptation, sous quelque
        forme que ce soit, de tout ou partie de ces éléments, y compris les
        applications informatiques, sans l'accord préalable et écrit de BPI est
        strictement interdites.
      </p>

      <h4 className={classes.subSectionTitle}>Gestion du Site</h4>
      <p className={classes.paragraph}>
        Pour la bonne gestion du Site, BPI pourra à tout moment :
      </p>
      <ul className={classes.list}>
        <li>
          suspendre, interrompre ou limiter l'accès à tout ou partie du Site,
          réserver l'accès au site, ou à certaines parties du Site, à une
          catégorie déterminée d'internautes ;
        </li>
        <li>
          supprimer toute information pouvant en perturber le fonctionnement ou
          entrant en contravention avec les lois nationales ou internationales,
          ou avec les règles de la Nétiquette ;
        </li>
        <li>suspendre le Site afin de procéder à des mises à jour.</li>
      </ul>

      <h4 className={classes.subSectionTitle}>Responsabilités</h4>
      <p className={classes.paragraph}>
        La responsabilité de BPI CONSTRUCTION ET RENOVATION ne peut être engagée
        en cas de défaillance, panne, difficulté ou interruption de
        fonctionnement, empêchant l'accès au Site ou à une de ses
        fonctionnalités. Le matériel de connexion au Site que vous utilisez est
        sous votre entière responsabilité. Vous devez prendre toutes les mesures
        appropriées pour protéger votre matériel et vos propres données
        notamment d'attaques virales par Internet. Vous êtes par ailleurs seul
        responsable des sites et données que vous consultez.
      </p>
      <p className={classes.paragraph}>
        BPI CONSTRUCTION ET RENOVATION ne pourra être tenu responsable en cas de
        poursuites judiciaires à votre encontre :
      </p>
      <ul className={classes.list}>
        <li>
          du fait de l'usage du Site ou de tout service accessible via Internet
          ;
        </li>
        <li>
          du fait du non-respect par vous des présentes conditions générales.
        </li>
      </ul>
      <p className={classes.paragraph}>
        BPI n'est pas responsable des dommages causés à vous-même, à des tiers
        et/ou à votre équipement du fait de votre connexion ou de votre
        utilisation du Site et vous renoncez à toute action contre lui de ce
        fait.
      </p>
      <p className={classes.paragraph}>
        Si BPI venait à faire l'objet d'une procédure amiable ou judiciaire à
        raison de votre utilisation du Site, il pourra se retourner contre vous
        pour obtenir l'indemnisation de tous les préjudices, sommes,
        condamnations et frais qui pourraient découler de cette procédure.
      </p>

      <h4 className={classes.subSectionTitle}>Liens hypertextes</h4>
      <p className={classes.paragraph}>
        La mise en place par les utilisateurs de tous liens hypertextes vers
        tout ou partie du Site est strictement interdite, sauf autorisation
        préalable et écrite de BPI .
      </p>
      <p className={classes.paragraph}>
        BPI est libre de refuser cette autorisation sans avoir à justifier de
        quelque manière que ce soit sa décision. Dans le cas où BPI accorderait
        son autorisation, celle-ci n'est dans tous les cas que temporaire et
        pourra être retirée à tout moment, sans obligation de justification à la
        charge de BPI.
      </p>
      <p className={classes.paragraph}>
        Toute information accessible via un lien vers d'autres sites n'est pas
        publié par BPI. BPI ne dispose d'aucun droit sur le contenu présent dans
        ledit lien.
      </p>

      <h4 className={classes.subSectionTitle}>Données Personnelles</h4>
      <p className={classes.paragraph}>
        Au sein de notre société, la protection des données personnelles est un
        enjeu majeur. La présente politique présente les conditions dans
        lesquelles nous collectons et traitons les données personnelles de nos
        interlocuteurs ou contacts au sein des entreprises avec lesquelles nous
        sommes en relation.
      </p>
      <p className={classes.paragraph}>
        Cette politique est applicable aux candidats, clients, prospects de BPI
        CONSTRUCTION ET RENOVATION.
      </p>

      <h5>1) Définition</h5>
      <p className={classes.paragraph}>
        La notion de données personnelles (les « Données Personnelles ») désigne
        toute information relative à une personne physique identifiée ou
        identifiable. Une personne est « identifiable » dès lors qu'elle peut
        être identifiée, directement ou indirectement. (Par exemple, l'adresse
        email personnelle renseignée dans le cadre d'une candidature à une offre
        publiée via le présent Site).
      </p>

      <h5>
        2) Quelles sont les Données Personnelles que nous pouvons être amenés à
        collecter et à traiter ?
      </h5>
      <p className={classes.paragraph}>
        Sont principalement traitées les catégories de Données Personnelles
        suivantes (liste non exhaustive) :
      </p>
      <ul className={classes.list}>
        <li>
          Données d'identification et de contact : nom, prénom, adresse email,
          adresse postale, numéro de téléphone
        </li>
        <li>
          Données dites « techniques » : données d'identification, de connexion
        </li>
      </ul>

      <h5>
        3) Sur quel fondement juridique sont collectées ces Données Personnelles
        et par quel(s) moyen(s) ?
      </h5>
      <p className={classes.paragraph}>
        Conformément à la règlementation européenne en vigueur, les traitements
        que nous faisons des Données Personnelles reposent sur la poursuite de
        nos intérêts légitimes, sous réserve de ne pas affecter les intérêts et
        droits fondamentaux des personnes concernées par les traitements.
      </p>
      <p className={classes.paragraph}>
        Pour tout traitement complémentaire ou accessoire, nous pourrons
        recueillir le consentement exprès préalable des personnes concernées.
      </p>
      <p className={classes.paragraph}>
        Les Données Personnelles sont collectées et traitées par nos équipes,
        mais nous pouvons également utiliser des systèmes et processus
        semi-automatisés pour assurer un meilleur niveau de service.
      </p>

      <h5>
        4) A quelles fins collectons-nous et traitons-nous les Données
        Personnelles ?
      </h5>
      <p className={classes.paragraph}>
        Nous collectons et traitons les Données Personnelles dans le cadre de
        nos activités et de l'exécution des services que nous proposons, aux
        fins de (liste non exhaustive) :
      </p>

      <ul className={classes.list}>
        <li>Fournir un service personnalisé</li>
        <li>
          Evaluer vos compétences et votre profil et préciser le périmètre de
          vos recherches
        </li>
        <li>
          Faciliter le processus de candidature et disposer des informations
          nécessaires à votre sélection
        </li>
        <li>
          Vous informer sur les opportunités d'emplois en rapport avec votre
          profil, vos compétences, votre disponibilité et vos attentes
        </li>
        <li>Echanger par tous moyens de communication</li>
        <li>Gérer et assurer le suivi de nos contrats commerciaux</li>
        <li>Contrôler le respect des procédures mises en place</li>
        <li>Evaluer la satisfaction et notre niveau de service</li>
        <li>Délivrer nos services conformément aux demandes</li>

        <li>
          Développement, amélioration et sécurisation de nos systèmes/processus.
        </li>
      </ul>

      <p className={classes.paragraph}>
        Enfin, plus généralement nous pouvons être amenés à utiliser certaines
        de vos données à caractère personnel pour :
      </p>
      <ul className={classes.list}>
        <li>
          Satisfaire à l'ensemble de nos obligations légales, règlementaires et
          conventionnelles ;
        </li>
        <li>
          Gérer les éventuelles actions légales, assurer notre défense ou encore
          coopérer dans le cadre d'investigations menées par les autorités ;
        </li>
        <li>
          A des fins d'opérations de communication, pour vous informer sur les
          actualités de notre société et sur les éventuelles opérations
          évènementielles en cours.
        </li>
      </ul>

      <h5>5) Qui est responsable du traitement des Données Personnelles ?</h5>
      <p className={classes.paragraph}>
        Les Données Personnelles collectées sont traitées par BPI RENOVATION en
        qualité de Responsable de traitement.
      </p>
      <p className={classes.paragraph}>
        Les entreprises avec lesquelles nous sommes en relation sont seules
        responsables de l'information, par tout moyen, des personnes concernées
        concernant l'existence et les finalités du traitement des Données
        Personnelles que nous pouvons être amenés à réaliser.
      </p>

      <h5>
        6) A qui les Données Personnelles peuvent-elles être communiquées ?
        Peut-il y avoir des transferts hors de l'Union Européenne ?
      </h5>
      <p className={classes.paragraph}>
        Dans le cadre des traitements présentés ci-dessus, nous pouvons
        communiquer les Données Personnelles à des tiers.
      </p>
      <p className={classes.paragraph}>
        Ces tiers peuvent se trouver en France, au sein de l'Union Européenne
        (auquel cas ils sont également soumis à la même règlementation
        européenne en matière de données personnelles) ou hors de l'Union
        Européenne.{" "}
      </p>
      <p className={classes.paragraph}>
        Les transferts hors Union Européenne respectent strictement la
        réglementation applicable et sont effectués soit vers un pays reconnu
        comme « à protection adéquate » par la Commission Européenne, soit dans
        le cadre de clauses contractuelles type adoptées par la Commission
        Européenne, soit sous couvert de règles d'entreprise contraignantes.{" "}
      </p>
      <p className={classes.paragraph}>
        Davantage d'informations sur la protection des données dans le monde
        sont disponibles sur le site internet de la CNIL.
      </p>
      <p className={classes.paragraph}>
        Nous nous efforçons d'assurer la protection des Données Personnelles en
        toutes circonstances, aussi nous rappelons que ces données peuvent faire
        l'objet d'un transfert dans les cas et aux conditions ci-après
        détaillées.{" "}
      </p>

      <ul className={classes.list}>
        <li>
          Les Données Personnelles peuvent être transférées en interne, au
          personnel habilité de nos services. Tous les collaborateurs de BPI
          sont soumis à une obligation de confidentialité.
        </li>
        <li>
          Les Données Personnelles peuvent être transférées à certains de nos
          partenaires au sein ou hors Union Européenne, dans les conditions
          susvisées.
        </li>
        <li>
          Les Données Personnelles peuvent être transférées aux organismes de
          droit public ou privé dans les cas prévus par la loi ou aux autorités
          si nous disposons d'une raison légitime.
        </li>
      </ul>

      <h5>7) Combien de temps sont conservées les Données Personnelles ?</h5>
      <p className={classes.paragraph}>
        Les Données Personnelles seront conservées dans la mesure strictement
        nécessaire à l'exécution de nos obligations et le temps nécessaire pour
        atteindre les finalités pour lesquelles les Données Personnelles ont été
        recueillies, conformément à la règlementation applicable.
      </p>

      <h5>
        8) De quels droits bénéficient les personnes concernées sur leurs
        Données et comment exercer ces droits?
      </h5>
      <p className={classes.paragraph}>
        Conformément à la règlementation en vigueur, les personnes concernées
        par les traitements disposent d'un droit d'accès aux Données
        Personnelles, du droit à l'effacement des Données, ainsi que d'un droit
        de rectification, d'opposition et de limitation.
      </p>
      <p className={classes.paragraph}>
        Pour l'exercice de ces droits il convient d'adresser un courrier à BPI
        CONSTRUCTION ET RENOVATION -101 Rue Victor Hugo 94200 IVRY-SUR-SEINE ou
        un email à BPI CONSTRUCTION ET RENOVATION
      </p>
      <p className={classes.paragraph}>
        Nous nous réservons le droit, à l'occasion de l'exercice de l'un des
        droits susvisés, de procéder à une vérification de votre identité.{" "}
      </p>

      <p className={classes.paragraph}>
        Les contacts / interlocuteurs ont également la possibilité d'introduire
        une réclamation relative au traitement des Données Personnelles auprès
        de la Commission Nationale Informatique et Libertés (CNIL) - www.cnil.fr
        - 3, place de Fontenoy, 75007 Paris.
      </p>

      {/* Add sections 2 to 8 here... */}

      <h4 className={classes.subSectionTitle}>Offres commerciales</h4>
      <p className={classes.paragraph}>
        Vous n'êtes pas susceptible de recevoir des offres commerciales de BPI .
        Si, lors de la consultation du Site, vous accédez à des données à
        caractère personnel, vous devez vous abstenir de toute collecte, de
        toute utilisation non autorisée et de tout acte pouvant constituer une
        atteinte à la vie privée ou à la réputation des personnes. BPI décline
        toute responsabilité à cet égard. Les données sont conservées et
        utilisées pour une durée conforme à la législation en vigueur.
      </p>

      <h4 className={classes.subSectionTitle}>Cookies</h4>
      <h5>Qu'est-ce qu'un « cookie » ?</h5>
      <p className={classes.paragraph}>
        Un « Cookie » ou traceur est un fichier électronique déposé sur un
        terminal (ordinateur, tablette, smartphone) et lu par exemple lors de la
        consultation d'un site internet, de la lecture d'un courrier
        électronique, de l'installation ou de l'utilisation d'un logiciel ou
        d'une application mobile et ce quel que soit le type de terminal utilisé
        (source : https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi ).
      </p>
      {/* Add more information about cookies... */}

      <h4 className={classes.subSectionTitle}>
        Photographies et représentation des produits
      </h4>
      <p className={classes.paragraph}>
        Les photographies de produits, accompagnant leur description, ne sont
        pas contractuelles et n'engagent pas BPI CONSTRUCTION ET RENOVATION.
      </p>

      <h4 className={classes.subSectionTitle}>Loi applicable</h4>
      <p className={classes.paragraph}>
        Les présentes conditions d'utilisation du Site sont régies par la loi
        française et soumises à la compétence des tribunaux du siège social de
        la société BPI, sous réserve d'une attribution de compétence spécifique
        découlant d'un texte de loi ou réglementaire particulier.
      </p>

      <h4 className={classes.subSectionTitle}>Contactez-nous</h4>
      <p className={classes.paragraph}>
        Pour toute question, information sur les produits présentés sur le Site,
        ou concernant le site lui-même, vous pouvez laisser un message à
        l'adresse suivante : BPI contact@bpirenovation.com
      </p>

      <p className={classes.version}>Version en date du 3 Octobre 2024</p>
    </div>
  );
}

export default MentionsLegales;

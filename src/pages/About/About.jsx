import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";

const About = () => {
  const section2Ref = useRef(null);

  // console.log(section2Ref);

  return (
    <Layout>
      <main className="main_about">
        <section className="section_about">
          <article className="article1">
            <h2 className="h2About h2About1">À propos d'Alexandre Braga</h2>
            <p className="p_about">
              Comment passe-t-on d'une carrière commerciale au développement web
              ? Eh bien comme en témoigne mon tout premier job au service
              informatique d'une banque, par passion. À l'âge de douze ou treize
              ans, je dévalisais les magasins spécialisés de leurs "brochures",
              je découpais les photos des premiers PC avec leurs spécifications
              et les collais dans mon cahier du "futur". Au même moment je
              codais ma première réalisation sur ma console Amstrad. Un petit
              volcan en éruption...
            </p>
          </article>
          <article className="article2">
            <div className="espace"></div>
            <p className="p_about">
              Je suis fasciné par ce que deviennent les lignes de codes qui,
              émanant de mon imagination, passent de mes doigts au clavier pour
              créer une animation, une boucle, une condition ou résoudre une
              énigme. J'ai un appétit sans limite pour les ambiances où les
              idées fusent de toute part, où les équipes se comprennent au
              premier regard. Être commercial m'a permis de combler ma
              propension à aller vers les autres. J'ai à présent l'occasion de
              créer pour eux. J'ai peu de certitudes mais j'ai un nouveau
              métier, c'est évident.
            </p>
          </article>
        </section>

        <section
          className="section_about2"
          id="section_about2"
          ref={section2Ref}
        >
          <h2 className="h2About2">Mes projets récents</h2>
          <div className="articles">
            <article className="article1">
              <div className="espace2"></div>
              <a
                href="img/cyrano.webp"
                target="_blank"
                className="a__img__projet"
              >
                <img
                  src={"/img/cyrano.webp"}
                  alt="image de site internet avec des nuages filmés depuis un avion"
                  className="img__apropos"
                />
              </a>

              <h3 className="h3apropos">Cyrano Tennis Club</h3>
              <p className="p__apropos">
                Mon projet de fin de formation DWWM. Réalisée seul, cette
                application, développée en HTML5, CSS3, Javascript, Symfony6,
                Doctrine, PHP8, m'a permis de comprendre et maîtriser
                l'architecture MVC d'un projet, de gérer une base de données
                avec de nombreuses relations grâce à Doctrine, d'élaborer des
                requêtes DQL, d'implémenter des ReGex, de mettre en place
                l'envoi d'email automatisé et de déployer une solution de
                paiement en ligne. C'est mon projet le plus abouti à ce jour. Un
                défi complet que j'ai eu un immense plaisir à coder.
                <span className="video">
                  <a
                    className="a__video"
                    href="https://cyranotennisclub.alexandre-braga.fr"
                    target="_blank"
                  >
                    https://cyranotennisclub.alexandre-braga.fr
                  </a>
                </span>
              </p>
            </article>
            <article className="article2">
              <div className="espace2"></div>

              <a
                href="/img/clouds.webp"
                target="_blank"
                className="a__img__projet"
              >
                <img
                  src={"/img/clouds.webp"}
                  alt="image de site internet avec des nuages filmés depuis un avion"
                  className="img__apropos"
                />
              </a>

              <h3 className="h3apropos">Clouds Header</h3>
              <p className="p__apropos">
                Mon premier projet solo en sortie de formation. C'est en quelque
                sorte un condensé des connaissances acquises en HTML, CSS et
                Javascript. J'ai essayé de retranscrire ma passion pour le
                design et l'interactivité. Animations, transitions, boutons,
                cartes 3D, scroll interactif, barre de scroll personnalisée,
                délais d'apparitions, parallax, menu burger. Tout y passe ou
                presque. C'est beaucoup, mais c'était l'objectif. Le tout
                parfaitement "responsive" et "accessible".{" "}
                <span className="video">
                  <a
                    className="a__video"
                    href="https://youtu.be/UXOAyfDKOoY"
                    target="_blank"
                  >
                    {" "}
                    https://youtu.be/UXOAyfDKOoY
                  </a>
                </span>
              </p>
            </article>
          </div>
        </section>
        <section className="contact__apropos">
          <div className="contacts">
            <a
              href="https://github.com/agamemnon94"
              className="footer__contact__icons"
              target="_blank"
            >
              <img
                src="src/assets/icons/BlueGithubX150.png"
                alt="logo github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/braga-alexandre/"
              className="footer__contact__icons"
              target="_blank"
            >
              <img
                src="src/assets/icons/linkedInX150.png"
                alt="logo linkedin"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/19529857/agamemnon94"
              className="footer__contact__icons"
              target="_blank"
            >
              <img
                src="src/assets/icons/blueStackoverflow.com.png"
                alt="logo twitter"
              />
            </a>
          </div>
          <div className="number">
            <a className="a_mail" href="mailto:contact@alexandre-braga.fr">
              contact@alexandre-braga.fr
            </a>
            <span className="span_mail"> | 06 50 52 52 17</span>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;

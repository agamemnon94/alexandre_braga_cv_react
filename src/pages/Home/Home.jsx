import React from "react";
import Layout from "../../Components/Layout/Layout";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <section className="section_1">
        <div className="box_moi">
          <div className="cadre_photo">
            <img className="moi" src={"/img/Photo_philiance.png"} alt="" />
          </div>
        </div>
        <div className="bloc_whoAmI">
          <h2 className="welcome">Salut, je suis Alexandre Braga</h2>
          <p className="p_who">Développeur web Full-Stack</p>
          <p className="p_who">Concepteur de sites web,</p>
          <p className="p_who">créatif, curieux et</p>
          <p className="p_who">un peu commercial</p>
          <NavLink to="/About" className="a_propos">
            01_À PROPOS
          </NavLink>
        </div>
        <div className="work_Here">
          <p className="a_work_Here">02_MON BUREAU</p>
        </div>
      </section>

      <section className="section_2">
        <embed
          src="/docs/CV_Alexandre_Braga_Dev_2023.pdf"
          type="application/pdf"
        />

        <div className="presentation">
          <div className="cv_mobile">
            <span className="span span1">DECEMBER</span>
            <span className="span span2">2022</span>
            <span className="span span3">T</span>
            <span className="span span4">H</span>
            <span className="span span5">E</span>
            <span className="span span6">P</span>
            <span className="span span7"></span>
            <span className="span span8">WER</span>
            <span className="span span9">OF</span>
            <span className="span span10">MIND</span>
          </div>
          <a
            href="/docs/CV_Alexandre_Braga_Dev_2023.pdf"
            className="a_presentation"
            target="_blank"
            title="Cliquez pour voir le cv"
          >
            03_VOIR MA PRESENTATION{" "}
          </a>
        </div>

        <div className="experiences">
          <div className="button__box">
            <button
              type="button"
              className="previous_exp"
              id="previous_exp"
            ></button>
          </div>
          <section className="diaporama">
            <div className="expdiv exp3" id="exp1">
              <p className="annee__exp">09/2022 - 10/2022</p>
              <h4 className="myrole">Stagiaire développement web</h4>
              <p className="firm">Damien Boiteux</p>
              <p className="descri__post">
                Aide à la conception et à la réalisation d'une application web
                QCM (Symfony, ReactJs).
              </p>
            </div>
          </section>
          <div className="button__box">
            <button type="button" className="next_exp" id="next_exp"></button>
          </div>
          <a
            href="/docs/CV_decembre_2022.pdf"
            className="a_experience"
            target="_blank"
            title="Cliquez pour voir le cv"
          >
            04_EXPERIENCES
          </a>
        </div>
        <div className="my_bike">
          <img className="bike_img" src={"/img/My_Best_Friend.webp"} alt="" />
          <p className="my_bike_p">05_MY BEST FRIEND</p>
        </div>
      </section>

      <section className="section__3" id="sect3">
        <div className="Title_box">
          <img id="title" src={"/docs/Titre_Professionnel_DWWM.jpg"} alt="" />
        </div>

        <div className="formation">
          <div className="formbox form1">
            <h4 className="detail__formation">Développeur web & web mobile</h4>
            <p>Philiance, Évry </p>
            <p>04/2022 - 11/2022</p>
            <a
              className="titre_pro"
              href="/docs/Titre_Professionnel_DWWM.jpg"
              target="_blank"
            >
              <p title="Cliquez pour voir le document">
                {" "}
                Titre Professionnel RNCP - Niveau 5
              </p>
            </a>
          </div>
          <div className="formbox form1">
            <h4 className="detail__formation">Développeur web & web mobile</h4>
            <p>La Passerelle, Paris </p>
            <p>10/2021 - 12/2021</p>
          </div>
          <div className="formbox form2">
            <h4 className="detail__formation">GRETA - Business english</h4>
            <p>2017</p>
            <p>BULATS B2</p>
          </div>
          <p className="formation__p">06_FORMATION</p>
        </div>
        <div className="branding" id="branding">
          <p className="branding__p">07_BRANDING</p>
        </div>

        <div className="competence">
          <h1 className="hsk">Hard Skills</h1>
          <div className="checked__box">
            <div className="checked">
              <img
                src={"src/assets/icons/white_check_box.png"}
                alt="Checked box"
              />
              <h2 className="comp_h2">
                Front End -
                <span
                  className="txt_type"
                  data-wait="1000"
                  data-words='["Javascript","ReactJs","Twig","HTML5","CSS3","SCSS","AJAX"]'
                ></span>
              </h2>
            </div>

            <div className="checked">
              <img
                src={"src/assets/icons/white_check_box.png"}
                alt="Checked box"
              />
              <h2 className="comp_h2">
                Back End -
                <span
                  className="txt_type2"
                  data-wait="1000"
                  data-words='["Symfony","Doctrine ORM","PHP","SQL"]'
                ></span>
              </h2>
            </div>
            <p className="competence__p">08_COMPÉTENCES</p>
          </div>
        </div>
      </section>

      <section className="section__4">
        <div className="mon__style">
          <div className="mon__style__inside"></div>
          <p className="mon__style__p">09_MON STYLE</p>
        </div>
        <div className="me__contacter">
          <div className="contact__box">
            <h3>
              Contactez-moi pour une collaboration sur de futurs projets !
            </h3>
            <a href="mailto:contact@alexandre-braga.fr">
              contact@alexandre-braga.fr
            </a>
            <span className="tel">+33 6 50 52 52 17</span>
          </div>

          <p className="me__contacter__p">07_ME CONTACTER</p>
        </div>
        <div className="reals">
          <div className="container">
            <div id="result">
              <div id="cube">
                <div className="face face-front"></div>
                <div className="face face-back"></div>
                <div className="face face-right"></div>
                <div className="face face-left"></div>
                <div className="face face-top"></div>
                <div className="face face-bottom"></div>
              </div>
            </div>
          </div>
          <p className="reals__p">08_RÉALISATIONS</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

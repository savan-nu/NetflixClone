import React from "react";
import classes from "./Index.module.css";
import Nav from "../Navbar/Nav";
import Divider from "../Divider/Divider";
import Promotion from "../Promotion/Promotion";
import SingUpForm from "../Forms/SingUpForm";
import FAQ from "../Quetion/FAQ";
import FooterPage from "../Footer/FooterPage";
import { Promotions } from "../../Data/promotions";
export default function Index() {
  return (
    <div>
      <Nav />

      <div className={classes.highlights}>
        <div className={classes.header}></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className={classes.textOverlay}>
          <h1>
            Unlimited movies, TV <br></br>shows and more.
          </h1>
          <h2 style={{ fontWeight: "normal" }}>
            Watch anywhere. Cancel anytime
          </h2>
          <h4 style={{ fontWeight: "normal" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <SingUpForm />
        </div>

        <div className={classes.footer}></div>
      </div>
      <Divider />
      

      {Promotions.map((pro) => {
        return (
          <>
            <Promotion
              title={pro.tittle}
              subtitle={pro.subtitle}
              url={pro.url}
              isreverse={pro.isreverse}
            />
            <Divider />
          </>
        );
      })}
      <FAQ />
      <div className={classes.suscribe}>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <SingUpForm />
      <Divider />
      <FooterPage />
    </div>
  );
}

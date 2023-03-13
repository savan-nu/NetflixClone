import React from "react";
import classes from "./Index.module.css";
import Nav from "../Navbar/Nav";
import Divider from "../Divider/Divider";
import Promotion from "../Promotion/Promotion";
import SingUpForm from "../Forms/SingUpForm";
import FAQ from "../Quetion/FAQ";
import FooterPage from "../Footer/FooterPage";
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
          <SingUpForm/>
        </div>

        <div className={classes.footer}></div>
      </div>
      <Divider />
      <Promotion
        title="Enjoy on your TV."
        subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        url = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        
      />
      <Divider/>
      <Promotion
        title="Download your shows to watch offline."
        subtitle="Save your favourites easily and always have something to watch."
        url = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        isreverse = "true"
      />
      <Divider />
      <Promotion
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        url = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      
      />
      <Divider />
      <Promotion
        title="Create profiles for children."
        subtitle="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        url = "https://occ-0-3776-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
        isreverse = "true"
      />
      <Divider />
      <FAQ/>
      <div className={classes.suscribe}><p>Ready to watch? Enter your email to create or restart your membership.</p></div>
      <SingUpForm/>
      <Divider/>
      <FooterPage/>
    </div>
  );
}

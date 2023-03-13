import React from "react";

import classes from "./Footer.module.css";
export default function FooterPage() {
  return (
    <footer>
      <div className={classes.footer__title}>
        <p>Questions? Call  000 - 000 - 0000</p>
      </div>
      <div className={classes.footer__columns}>
        <div className="footer__column">
          <ul>
            <li>FAQ</li>
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Content Us</li>
            <li>Only on netflix</li>
            <li><br></br></li>
            <li><br></br></li>
            <li><br></br></li>
            <li>Netflix India</li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li>Gift Card Terms</li>
            <li>Media Centre</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li>Help Centre</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

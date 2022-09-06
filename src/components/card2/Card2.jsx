import React from "react";
import classes from "./card2.module.scss";

import Avatar from "../../icons/Avatar";

const cards = () => {
  return (
    <div>
      <div className={classes.bg}>
        <div className={classes.card}>
          <div className={classes.avatar_box}>
            <div className={classes.avatar}>
              <p>LEVEL 13</p>
              <div className={classes.profile}>
                <Avatar />
              </div>
              <p>5,312 POINTS</p>
            </div>
          </div>

          <div className={classes.info_slide}>
            <h1> John Doe</h1>
          </div>

          <div className={classes.info}>
            <h1>John Doe</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar
            </p>
            <p>Mouse over the card for more info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;

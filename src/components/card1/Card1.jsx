import React, { useState } from "react";
import classes from "./card1.module.scss";
import Bookmark from "../../icons/Bookmark";
import Chat from "../../icons/Chat";
import Heart from "../../icons/Heart";
import Arrow from "../../icons/Arrow";

const Card1 = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className={classes.bg}>
        <div className={classes.card}>
          <div className={classes.date}>
            <p>12</p>
            <p>AUG</p>
            <p>2016</p>
          </div>
          <div className={classes.details}>
            <div
              className={classes.likes}
              style={
                showMore
                  ? {
                      transform: "translateY(-7rem)",
                    }
                  : { transform: "translateY(0px)" }
              }>
              <li>
                <Bookmark />
              </li>
              <li>
                <span>47</span>
                <Heart />
              </li>
              <li>
                <span>8</span>

                <Chat />
              </li>
            </div>
            <div className={classes.content}>
              <span>
                John Doe
                <div
                  onClick={() => setShowMore(!showMore)}
                  className={classes.button_box}>
                  <div className={classes.button}></div>
                </div>
              </span>
              <h1>Boxing icon has the will for a couple more fights</h1>
              <p>
                The highly anticipated world championship fight will take place
                at 10am and is the second major boxing blockbuster in the nation
                after 43 years.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.date}>
            <p>12</p>
            <p>AUG</p>
            <p>2016</p>
          </div>
          <div className={classes.likes_top}>
            <li>
              <Bookmark />
            </li>
            <li>
              <span>47</span>
              <Heart />
            </li>
            <li>
              <span>8</span>

              <Chat />
            </li>
          </div>
          <div className={classes.details}>
            <div className={classes.content}>
              <span>
                John Doe
                <div className={classes.button_box}></div>
              </span>
              <h1>Stranger Things: The sound of the Upside Down</h1>
              <p>
                The antsy bingers of Netflix will eagerly anticipate the digital
                release of the Survive soundtrack, out today.
              </p>
              <button>
                Read More <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

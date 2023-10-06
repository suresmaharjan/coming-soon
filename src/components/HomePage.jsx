import React, { useEffect } from "react";

const Title = [
  "Emaa offers an AI-Powered Domain Export Assistant for your users",
];

export const HomePage = () => {
  useEffect(() => {
    const eg = document.getElementById("eg");
    eg.play();
  }, []);

  return (
    <section className="hp">
      {/* <img className="img-responsive" alt="" src={bg} /> */}
      {/* <iframe  src="https://youtu.be/RFeW8fhUeeQ" /> */}

      <video className="img-responsive" id="eg" autoPlay muted={true} loop>
        <source src="assets/eagle.mp4" type="video/mp4" />
      </video>
      <div className="coming-soon">
        <div>Coming Soon</div>
      </div>
      <div className="offer">
        <p>
          - Emaa offers an AI-Powered Domain Export Assistant for your users .
        </p>
      </div>
      <footer>
        <div class="curve">
          <div class="left"></div>
          <div class="right"></div>
          <small>Copyright @ Emaa 2023</small>
        </div>
      </footer>
    </section>
  );
};

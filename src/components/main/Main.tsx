import React from "react";
import "./Main.css";
import ellipse2 from "../../assets/Ellipse 2.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import woman from "../../assets/woman.png";
const Main: React.FC = () => {
  return (
    <div className="container">
      <div className="c">
        <div>
          <h1>Seedra helps to grow fast and efficiant</h1>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
            <br />
            <br />
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
            Spinach commom culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more
            <br />
            <br /> Proudly sourced in the USA - our garden seeds are grown,
            harvested, and packaged in the USA. We support local farmers and are
            happy to produce this American-made product
          </p>
        </div>
        <img style={{ width: "490px" }} src={ellipse3} alt="" />
        <img className="c1" src={ellipse2} alt="" />
      </div>
      <div className="c">
        <img src={woman} alt="" />
        <div>
          <h1>Our story</h1>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
            <br />
            <br />
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
            Spinach commom culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more
            <br />
            <br /> Proudly sourced in the USA - our garden seeds are grown,
            harvested, and packaged in the USA. We support local farmers and are
            happy to produce this American-made product
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

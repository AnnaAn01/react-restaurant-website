import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from "../../constants";
import './Laurels.css';
// We won't be reusing this component in other places, so we ar creating this component inside this file.
// below we're destructuring award to imgurl, title, subtitle from our award
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content"></div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Laurels;

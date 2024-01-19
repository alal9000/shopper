import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          dolores qui iure numquam architecto at, iste et itaque autem optio
          corporis magnam illo similique facilis minus saepe. Recusandae quaerat
          corrupti inventore quo in asperiores tempora nobis saepe nisi illo
          fuga odio ratione a quasi possimus vel autem, eligendi, cupiditate
          eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eos
          harum vel voluptate facere voluptas praesentium accusantium earum
          minus exercitationem provident atque consequuntur, voluptates, autem
          quibusdam eligendi soluta optio. Quam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

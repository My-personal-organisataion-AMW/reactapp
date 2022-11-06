import New from "./new.svg";
import React from "react";

const Card = ({ option }) => {
  return (
    <div className={"card "} key={option.name}>
      {
        <div className="cardTagContainer">
          {option?.tags.map((tag) => (
            <span key={tag} className="cardTag">
              {tag}
            </span>
          ))}
        </div>
      }
      <div className="cardTitle" key={option.name}>
        {option.name}
      </div>

      <div>{option?.hint}</div>
      <div className="flexContainer">
        {Object.entries({
          map: option?.mapLink,
          menu: option?.menuLink,
        }).map((entry) => {
          const [label, href] = entry;
          return (
            href && (
              <a href={href} key={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            )
          );
        })}
        {option.tags.includes("new-places") && (
          <img
            alt="new"
            src={New}
            className={{ transform: "rotate(-10deg)" }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;

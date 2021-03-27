import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgest__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React is top", "Top news - 9456 readers")}
      {newsArticle("Tesla hits new hights", "Cars & avto - 456 readers")}
      {newsArticle("Is Redux to good?", "Code - 567 readers")}
      {newsArticle("What is Bitcoin?", "Crypte - 2567 readers")}
      {newsArticle("Most Popular Jobs", "Top news - 1347 readers")}
    </div>
  );
}

export default Widgets;

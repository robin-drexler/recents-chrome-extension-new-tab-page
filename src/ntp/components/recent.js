import React, { useState } from "react";

export default function Recent(props) {
  const title = props.data.title || "\u00a0";
  const faviconUrl = `chrome://favicon/size/16@2x/${props.data.url}`;
  const [isRemovalIntended, setIsRemovalIntended] = useState(false);
  const isRemovalIntendedClassString = isRemovalIntended
    ? "site-removal-intended"
    : "";

  return (
    <a
      className={"site site-link " + isRemovalIntendedClassString}
      href={props.data.url}
      title={props.data.title}
    >
      <button
        title="remove site"
        className="site-remove"
        onClick={event => {
          props.onRemove(props.data.id);
          event.preventDefault();
        }}
        onMouseOver={() => {
          setIsRemovalIntended(true);
        }}
        onMouseOut={() => setIsRemovalIntended(false)}
      />
      <img className="site-favicon" src={faviconUrl} />
      <span className="site-title">{title}</span>
    </a>
  );
}

import React from "react";

export default function TopSite(props) {
  const title = props.data.title || "\u00a0";
  const faviconUrl = `chrome://favicon/size/16@2x/${props.data.url}`;

  return (
    <a
      className="site site-link"
      href={props.data.url}
      title={props.data.title}
    >
      <img className="site-favicon" src={faviconUrl} />
      <span className="site-title">{title}</span>
    </a>
  );
}

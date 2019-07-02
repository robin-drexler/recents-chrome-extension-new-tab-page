import React from "react";

export default function TopSite(props) {
  const title = props.data.title || "\u00a0";
  const faviconUrl = `chrome://favicon/${props.data.url}`;

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

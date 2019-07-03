import React from "react";

export default function SitesContainer(props) {
  var sites = props.sites || [];
  var filter = props.filter || "";
  filter = filter.toLowerCase();

  if (filter) {
    sites = sites.filter(function(site) {
      return (
        site.title.toLowerCase().includes(filter) || site.url.includes(filter)
      );
    });
  }

  sites = sites.slice(0, props.limit);

  return (
    <div className="sites-row">
      {sites.map(
        function(site, i) {
          const Site = props.site;
          return (
            // XXX `site` may be ambiguous
            <Site key={i} data={site} onRemove={props.onRemove} />
          );
        }.bind(this)
      )}
    </div>
  );
}

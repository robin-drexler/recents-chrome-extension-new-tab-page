import React, { useState, useEffect, useRef } from "react";
import SitesContainer from "../components/SitesContainer";
import TopSite from "../components/topSite";
import Recent from "../components/recent";

const placeHolderSites = new Array(9)
  .join(" ")
  .split(" ")
  .map(() => {
    return { title: "", url: "" };
  });

export default function Ntp() {
  const [topSites, setTopSites] = useState(placeHolderSites);
  const [recents, setRecents] = useState(placeHolderSites);
  const [filter, setFilter] = useState("");
  const filterInputRef = useRef(null);

  const updateTopSites = () => {
    chrome.extension.sendMessage({ purpose: "getTopSites" }, response => {
      console.log(response);
      setTopSites(response.sites);
    });
  };

  const updateRecents = () => {
    chrome.storage.sync.get(["folder"], ({ folder }) => {
      chrome.bookmarks.getSubTree(folder || "1", tree => {
        if (chrome.runtime.lastError || tree.length === 0) {
          return setRecents([]);
        }
        setRecents(tree[0].children.filter(child => Boolean(child.url)));
      });
    });
  };

  useEffect(() => {
    updateTopSites();
    updateRecents();

    window.addEventListener("keydown", event => {
      if (
        event.target.tagName.toLowerCase() === "input" ||
        !filterInputRef.current ||
        ["Tab", "Enter"].includes(event.key)
      ) {
        return;
      }

      filterInputRef.current.focus();
    });
  }, []);

  return (
    <div>
      <input
        ref={filterInputRef}
        className="filter-input"
        onChange={event => {
          setFilter(event.target.value);
        }}
        aria-label="Filter"
        placeholder="Filter"
        value={filter}
      />
      <h2>Top sites</h2>
      <SitesContainer
        filter={filter}
        sites={topSites}
        limit={9}
        site={TopSite}
      />
      {(() => {
        if (recents.length > 0) {
          return (
            <div>
              <h2>Bookmarks</h2>
              <SitesContainer
                filter={filter}
                sites={recents}
                limit={15}
                site={Recent}
                onRemove={recentId => {
                  chrome.extension.sendMessage(
                    { purpose: "removeRecent", id: recentId },
                    () => {
                      updateRecents();
                    }
                  );
                }}
              />
            </div>
          );
        } else {
          return (
            <h2>OMG you totally need to install the Recents extension!</h2>
          );
        }
      })()}
    </div>
  );
}

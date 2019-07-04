import React, { useEffect, useState } from "react";
import BookmarkSelector from "./BookmarkSelector";

export default function Options() {
  const [defaultSelectedFolderId, setDefaultSelectedFolderId] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  useEffect(() => {
    chrome.storage.sync.get(["folder"], ({ folder }) => {
      setDefaultSelectedFolderId(folder);
    });
  }, []);

  return (
    <div>
      <h1>Select Bookmark folder to display on New Tab Page</h1>
      <div>
        {selectedFolder && <span>Currently saved: {selectedFolder.name}</span>}
      </div>
      <div>
        {defaultSelectedFolderId !== null && (
          <BookmarkSelector
            defaultSelectedFolderId={defaultSelectedFolderId}
            onSelected={folder => {
              setSelectedFolder(folder);
              chrome.storage.sync.set({ folder: folder.id });
            }}
          />
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Treebeard } from "react-treebeard";

export default function BookmarkSelector({
  onSelected,
  defaultSelectedFolderId
}) {
  const [bookmarks, setBookmarks] = useState(null);
  const [cursor, setCursor] = useState(null);
  useEffect(() => {
    chrome.bookmarks.getTree(([tree]) => {
      tree.toggled = true;
      function handleBookmarks(tree) {
        tree.name = tree.title;

        if (tree.children) {
          tree.children
            .reduce((toDelete, child, index) => {
              if (!child.children) {
                toDelete.push(index);
              }
              return toDelete;
            }, [])
            .forEach(indexToDelete => delete tree.children[indexToDelete]);
          tree.children.forEach(handleBookmarks);
        }

        return tree;
      }

      const bookmarks = handleBookmarks(tree);

      function expandAndActivateToSelectedFolder(tree, id, active = false) {
        if (tree.id === id) {
          tree.toggled = true;
          if (!active) {
            tree.active = true;
            active = true;
            setCursor(tree);
            onSelected(tree);
          }
          expandAndActivateToSelectedFolder(bookmarks, tree.parentId, active);
        }
        tree.children.forEach(child => {
          expandAndActivateToSelectedFolder(child, id, active);
        });
      }

      expandAndActivateToSelectedFolder(bookmarks, defaultSelectedFolderId);
      setBookmarks(bookmarks);
    });
  }, []);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setBookmarks(Object.assign({}, bookmarks));
    onSelected(node);
  };

  return <>{bookmarks && <Treebeard onToggle={onToggle} data={bookmarks} />}</>;
}

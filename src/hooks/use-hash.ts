"use client";

import React from "react";

export const useHash = () => {
  const [hash, setHash] = React.useState(""); // no window here

  React.useEffect(() => {
    if (typeof window === "undefined") return; // extra safety

    const getHash = () => window.location.hash.slice(1); // remove '#'

    const onHashChanged = () => setHash(getHash());

    const { pushState, replaceState } = window.history;

    // patch pushState / replaceState so SPA navigation updates hash
    window.history.pushState = function (...args) {
      const result = pushState.apply(this, args);
      setTimeout(() => setHash(getHash()));
      return result;
    };

    window.history.replaceState = function (...args) {
      const result = replaceState.apply(this, args);
      setTimeout(() => setHash(getHash()));
      return result;
    };

    // initial value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHash(getHash());

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
      window.history.pushState = pushState;
      window.history.replaceState = replaceState;
    };
  }, []);

  return hash; // already without '#'
};

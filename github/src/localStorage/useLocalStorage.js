import React, { useState, useEffect } from "react";

const prefix = "Github-But-Low-Budget-";

export default function useLocalStorage(accesKey, initialValue) {
  const prefixedKey = prefix + accesKey;

  const [value, setValue] = useState(() => {
    const getJsonValue = localStorage.getItem(prefixedKey);
    if (getJsonValue != null) {
      return JSON.parse(getJsonValue);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    // console.log(value + 'valueee');
  }, [prefixedKey, value]);

  return [value, setValue];
}

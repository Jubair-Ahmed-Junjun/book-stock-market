import React, { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `https://limitless-anchorage-63563.herokuapp.com/items`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems];
};

export default useItems;

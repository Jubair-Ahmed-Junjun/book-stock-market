import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteItems = (id) => {
  const [resultData, setResultData] = useState({});
  const url = `https://limitless-anchorage-63563.herokuapp.com/item/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      toast("Item Deleted Successfully!");
      setResultData(data);
    });
  return [resultData, setResultData];
};

export default useDeleteItems;

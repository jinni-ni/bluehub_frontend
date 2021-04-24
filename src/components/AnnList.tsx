import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Announcements } from "../type";
import Ann from "./Ann";

const apiUrl = "http://127.0.0.1:8000/api/v1/recruit/";

const AnnList = () => {
  const [annList, setAnnList] = useState<Announcements[]>([]);

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const {
          data: { results },
        } = response;
        console.log(results);
        setAnnList(results);
      })
      .catch((error) => {
        //error.response;
      });
    console.log("mounted");
  }, []);
  return (
    <div>
      <h2>PostList</h2>
      {annList.map((ann) => (
        <Ann announce={ann} key={ann.id} />
      ))}
    </div>
  );
};

export default AnnList;

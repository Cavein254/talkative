import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ChatsPage = () => {
  const [chats, setchats] = useState([]);
  const fetchChats = async () => {
    const url = "https://fakestoreapi.com/products/category/jewelery";
    const { data } = await axios.get(url);
    setchats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats
        ? chats?.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
              </div>
            );
          })
        : "Still loading assets"}
    </div>
  );
};

export default ChatsPage;

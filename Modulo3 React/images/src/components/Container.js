import React, { useEffect, useState } from "react";
import Image from "./Image";

export default function Container() {
  let images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iSu2RcCcdm78xbxNDJMJSgHaEo%26pid%3DApi&f=1&ipt=75c7b93015bb3b5eed68ff449119393984226bcf2663e32e3b1942eacdc96800&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iAhcp6m_91O-ClK79h8EQQHaFj%26pid%3DApi&f=1&ipt=e096eeb2dfe93ed30a6e3c2fba74ce644a7f9dd1baad1c307efe6b8bfea86f0e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OF59vsDmwxPP1tw7b_8clQHaE8%26pid%3DApi&f=1&ipt=2c748c98939d576db217d5e2ef6ea2ea76c0e2a75138b9898052c16360170b12&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KoKk_vYZW-dFP-YSdRSOZwHaEo%26pid%3DApi&f=1&ipt=763e2c9372f580cac5f88e07b5a76611caf5a1b8bc06df5eaae0cc78b8e04e37&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9Izv-aszItToTtEqRMSE0QHaE6%26pid%3DApi&f=1&ipt=d130884ff3c96388784fc6447a37104460263eede35a8e9ca52b029dd1113b91&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1d6tBbNiJTFQNEK_k0sSjQHaFj%26pid%3DApi&f=1&ipt=cc814adbc93e4f9ca75fd63939e0c0db1868eefdded71f26995c1df864e12353&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.m0R6zodOBREGljMNO0mIhQHaE8%26pid%3DApi&f=1&ipt=81c14b59367ebbcd2892336ae7b2b6775afbe26fa04b3ff121b8acb7845b6275&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.o7N6ZxVke7CphwB_phXwNgHaE7%26pid%3DApi&f=1&ipt=5fca4ba53d8ed220f538b1abe8c6292310b78e23404a404d91c7c8923657b098&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t8NO2dtMJyk3w_9Q8Ux_IAHaNK%26pid%3DApi&f=1&ipt=14704140b036622cad3a6fbd282403591753a8b8deb63aa22068189c5b2877a9&ipo=images",
  ];
  let [tags, setTags] = useState([]);
  function click(i) {
    setTags(function (tags) {
      let newTags = [];
      for (let j = 0; j < tags.length; j++) {
        if (j !== i) {
          newTags.push(tags[j]);
        }
      }
      return newTags;
    });
  }
  useEffect(function () {
    let newTags = [];
    for (let i = 0; i < images.length; i++) {
      newTags.push(
        <Image
          key={i}
          click={function () {
            click(i);
          }}
          src={images[i]}
        />
      );
    }
    setTags(newTags);
  }, []);

  return <>{tags}</>;
}

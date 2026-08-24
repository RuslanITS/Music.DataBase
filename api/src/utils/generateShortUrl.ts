import { debuglog } from "node:util";
import Link from "../models/Link";



const generateShortUrl = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    result += characters[randomIndex];
  }

  return result;
};



const generateUniqueShortUrl = async () => {
  let shortUrl = generateShortUrl();

  let existingLink = await Link.findOne({
    shortUrl,
  });

  while (existingLink) {
    shortUrl = generateShortUrl();

    existingLink = await Link.findOne({
      shortUrl,
    });
    console.log('sucsess')
  }

  return shortUrl;
};

export default generateUniqueShortUrl;
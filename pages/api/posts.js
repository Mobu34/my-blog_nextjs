// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

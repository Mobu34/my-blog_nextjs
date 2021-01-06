import axios from "axios";

export default async (req, res) => {
  try {
    const { id } = req.query;

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let post;
    for (let i = 0; i < response.data.length; i++) {
      if (Number(id) === response.data[i].id) {
        post = response.data[i];
        break;
      }
    }

    return res.status(200).json({ post });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

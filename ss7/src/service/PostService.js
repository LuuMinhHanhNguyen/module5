import axios from "axios";

export async function getPosts() {
  const response = await axios.get(
    "https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts"
  );
  return response.data;
}

export async function addPost(newPost) {
  const response = await axios.post(
    "https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts",
    newPost
  );
}

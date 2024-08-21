import axios from "axios";

axios
  .get("https://poetrydb.org/random/3/author,title.text")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

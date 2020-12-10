import axios from "axios";

export const publicationService = {
    getPublications,
    getPublication,
    addPublications
};

async function getPublications(apiEndpoint) {
  return await axios
    .get(apiEndpoint)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error in response");
      console.log(err);
    });
}

async function getPublication(apiEndpoint) {
  return await axios
    .get(apiEndpoint)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error in response");
      console.log(err);
    });
}

async function addPublications(apiEndpoint, data) {
  return await axios
    .post("http://localhost:3500/api/publication", data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error in response");
      console.log(err);
    });
}



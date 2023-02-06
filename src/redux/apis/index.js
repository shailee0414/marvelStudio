import axios from "axios";

export const api = (limit,offset,dateDescriptor,nameStartsWith,firstNameStartsWith) => {
  return axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
    params: {
      ts: "1669048822",
      limit: limit,
      offset: offset,
      apikey: "f6e4e96cffc68ec12fc093dd0eb94798",
      hash: "ee9abd7aa5332c406f9dd1cc6ab43e83",
      dateDescriptor:dateDescriptor,
      nameStartsWith:nameStartsWith,
      firstNameStartsWith:firstNameStartsWith
    },
  });
};

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://gateway.marvel.com/v1/public",
//   }),
//   endpoints: (builder) => ({
//     getData: builder.query({
//       query: (ts= "1669048822",
//       limit,offset,
//       apikey="f6e4e96cffc68ec12fc093dd0eb94798",
//        hash= "ee9abd7aa5332c406f9dd1cc6ab43e83",
//        dateDescriptor,
//        nameStartsWith,
//        firstNameStartsWith
//        ) => `/?${ts}&${apikey}&${hash}&${limit}&${offset}&${dateDescriptor}&${nameStartsWith}&${firstNameStartsWith}`,

      // ,
      // limit: limit,
      // offset: offset,
      // apikey: "f6e4e96cffc68ec12fc093dd0eb94798",
      // hash: "ee9abd7aa5332c406f9dd1cc6ab43e83",
      // dateDescriptor: dateDescriptor,
      // nameStartsWith: nameStartsWith,
      // firstNameStartsWith: firstNameStartsWith,
//     }),
//   }),
// });

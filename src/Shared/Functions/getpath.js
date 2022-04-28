import * as queryString from "query-string";

export const getPath = (id) => {
  const path = {};
  path["id"] = JSON.stringify(id);
  return queryString.stringify(path);
};


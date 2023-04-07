import api from "./api";

const postServices = {
  getList() {
    return api.call().get("/v1/tinTuc", {
      params: {},
    });
  },
  getAllNew() {
    return postServices.getList({});
  },
};

export default postServices;

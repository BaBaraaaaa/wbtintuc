import { mappingPostData } from "../../helpers";
import categoriesServices from "../../services/categories";
import postServices from "../../services/post";
import theLoaiServices from "../../services/theLoai";

// Actions type
export const ACT_FETCH_NEWS = "ACT_FETCH_NEWS";
export const ACT_FETCH_CATEGORIES = "ACT_FETCH_CATEGORIES";
export const ACT_FETCH_THELOAI = "ACT_FETCH_THELOAI";
// Action

export function actFetchNews(posts) {
  return {
    type: ACT_FETCH_NEWS,
    payload: {
      posts,
    },
  };
}

export function actFetchCategories(categories) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories,
    },
  };
}

export function actFetchTheLoai(theLoais) {
  return {
    type: ACT_FETCH_THELOAI,
    payload: {
      theLoais,
    },
  };
}

//Action async

export function actFetchNewsAsync() {
  return async (dispatch) => {
    try {
      const response = await postServices.getAllNew();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchNews(posts));
    } catch (error) {
      // TODO
    }
  };
}

export function actFetchCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoriesServices.getList();
      const categories = response.data;
      dispatch(actFetchCategories(categories));
    } catch (error) {
      // TODO
    }
  };
}

export function actFetchTheLoaiAsync() {
  return async (dispatch) => {
    try {
      const response = await theLoaiServices.getList();
      const theLoais = response.data;
      dispatch(actFetchTheLoai(theLoais));
    } catch (error) {
      // TODO
    }
  };
}

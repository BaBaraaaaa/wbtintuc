import {
  ACT_FETCH_CATEGORIES,
  ACT_FETCH_NEWS,
  ACT_FETCH_THELOAI,
} from "./action";

const initState = {
  articlePostItem: [],
  articleCategories: [],
  articleTheLoais: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_NEWS:
      return {
        ...postState,
        articlePostItem: action.payload.posts,
      };
    case ACT_FETCH_CATEGORIES:
      return {
        ...postState,
        articleCategories: action.payload.categories,
      };
    case ACT_FETCH_THELOAI:
      return {
        ...postState,
        articleTheLoais: action.payload.theLoais,
      };
    default:
      return postState;
  }
}

export default reducer;

import { getDetailArticale, getListArticale } from './../service/articale';
import { IArticale } from '../asset/types/articales';
import { ARTICALE_DETAIL, FETCH_ARTICALE_LIST, REFRESH } from '../constant/articale';

export const fetchArticale = (params?: IArticale) => ({
  type: FETCH_ARTICALE_LIST,
  payload: getListArticale(params),
});

export const detailArticale = (id: number) => ({
  type: ARTICALE_DETAIL,
  payload: getDetailArticale(id),
});

export const refreshItem = () => {
  return {
    type: REFRESH
  };
};


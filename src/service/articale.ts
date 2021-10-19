import { API_CONFIG } from './../constant/api';
import { AxiosResponse } from 'axios';
import { Api } from '../config/axios-interceptor';
import { IArticale } from '../asset/types/articales';

export const getListArticale = async (params?: IArticale) => {
  const api = new Api(API_CONFIG);
  const data: AxiosResponse = await api.get('/blogs', { params });
  return data;
};

export const getDetailArticale = async (id: number) => {
  const api = new Api(API_CONFIG);
  const data: AxiosResponse = await api.get(`/blogs/${id}`);
  return data;
};

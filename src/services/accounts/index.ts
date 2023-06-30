import Axios from 'axios';
import { IAccountResponse, IAccountTypeResponse } from '../../types/account';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'x-apikey': import.meta.env.VITE_API_KEY,
  },
});

const getAllAccounts = () => {
  return axios.get<Array<IAccountResponse>>('/accounts');
};

const getAccountTypes = () => {
  return axios.get<Array<IAccountTypeResponse>>(`/accounttypes`);
};

export const AccountService = {
  getAllAccounts,
  getAccountTypes,
};

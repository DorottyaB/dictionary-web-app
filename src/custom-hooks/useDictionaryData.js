import axios from 'axios';
import { useQuery } from 'react-query';

const fetchData = ({ queryKey }) => {
  const word = queryKey[1];
  return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
};

export const useDictionaryData = query => {
  return useQuery(['word', query], fetchData, {
    enabled: false,
  });
};

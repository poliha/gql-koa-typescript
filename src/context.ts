import DataLoader from 'dataloader';
import { getUserByIndex } from './datastore';

const loaders = (): any => ({
  getUserByIndex: new DataLoader((ids) => {
    return Promise.all(ids.map((id) => getUserByIndex(Number(id))));
  }),
});

const getContext = (ctx: any) => {
  return {
    loaders: loaders(),
  };
};

export default getContext;

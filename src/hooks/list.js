import { listData } from '../data/listData';

export const useList = title => {
    const listItem = listData.find(item => item.title === title);
    return listItem;
};

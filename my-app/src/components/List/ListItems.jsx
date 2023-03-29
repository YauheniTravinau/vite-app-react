import React from 'react';
import ListItem from './ListItem';
import items from '../data/dataItems';

const ListItems = () => {
    return (
        <ul>
            {items.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default ListItems;
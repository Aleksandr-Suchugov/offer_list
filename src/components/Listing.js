import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList.js';

export default function Listing(props) {
  const { items } = props;
  // console.log('Listing: ', items);

  if (!items.length) {
    return null;
  }

  return (
    <div className="item-list">
      {items.map((item) => (item.state === 'removed' ? null : (
        <div key={item.listing_id} className="item">
          <ItemList item={item} />
        </div>)))}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};

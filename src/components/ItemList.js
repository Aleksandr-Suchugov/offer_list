import React from 'react';
import PropTypes from 'prop-types';

export default function ItemList(props) {
  const { item } = props;
  // console.log('item: ', item);
  
  const title = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
  const currency = {
    USD: '$',
    EUR: '€',
  };
  let classQuantity = 'level-high';

  if (item.quantity <= 10) {
    classQuantity = 'level-low';
  } else if (item.quantity <= 20) {
    classQuantity = 'level-medium';
  }

  return (
      <>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <div className="item-footer">
            <p className="item-price">{currency[item.currency_code] ? `${currency[item.currency_code]} ${item.price}` : `${item.price} ${item.currency_code}`}</p>
            <p className={classQuantity}>{item.quantity} left</p>
          </div>
        </div>
      </>
  );
}

ItemList.propTypes = {
  item: PropTypes.object,
};

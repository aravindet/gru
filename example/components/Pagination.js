import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ count, onNext, onPrev }) {
  const getButtonProps = fn => (fn ? { onClick: fn } : { disabled: true });

  return (
    <div className="Pagination">
      <button {...getButtonProps(onPrev)}>&lt;</button>
      <span>{count}</span>
      <button {...getButtonProps(onNext)}>&gt;</button>
    </div>
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onNext: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  onPrev: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

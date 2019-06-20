import React from 'react';
import PropTypes from 'prop-types';

const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
const scales = [
  [60000, 'second', 1000],
  [3600000, 'minute', 60000],
  [Infinity, 'hour', 3600000],
];

export default function Visitor({ avatar, name, ts, pageviews, muted }) {
  const timeDiff = ts - Date.now();
  const [_, unit, divisor] = scales.find(([max]) => -timeDiff < max);
  const timeString = rtf.format(Math.floor(timeDiff / divisor), unit);

  return (
    <div className={`Visitor ${muted ? 'Visitor--muted' : ''}`}>
      <img className="Visitor-avatar" src={avatar} alt={name} />
      <div className="Visitor-meta">
        <div className="Visitor-name">{name}</div>
        <div className="Visitor-ts">{timeString}</div>
      </div>
      <div className="Visitor-pages">
        {Object.entries(pageviews).map(([ts, url]) => (
          <div key={ts} className="Visitor-page">
            {url}
          </div>
        ))}
      </div>
    </div>
  );
}

Visitor.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  ts: PropTypes.number,
  pageviews: PropTypes.object,
  muted: PropTypes.bool,
};
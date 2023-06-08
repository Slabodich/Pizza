import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="280" rx="0" ry="0" width="197" height="15" />
    <rect x="0" y="438" rx="0" ry="0" width="81" height="15" />
    <rect x="126" y="421" rx="15" ry="15" width="155" height="46" />
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="86" />
  </ContentLoader>
);

export default Sceleton;

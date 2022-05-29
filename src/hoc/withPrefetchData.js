import React, { useEffect, useState } from 'react';

const withPrefetchData = (Wrapped) =>
  function handler(props) {
    const [loading] = useState(false);
    useEffect(() => {});
    if (loading) return <div> hi</div>;
    return <Wrapped {...props} />;
  };

export default withPrefetchData;

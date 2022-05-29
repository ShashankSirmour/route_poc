import React, { useEffect } from 'react';

const checkRequests = (Wrapped) =>
  function (props) {
    useEffect(() => {});

    return <Wrapped {...props} />;
  };

export default checkRequests;

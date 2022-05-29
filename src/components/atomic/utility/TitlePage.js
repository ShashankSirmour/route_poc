import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const TitlePage = forwardRef(({ children, title = '', ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

TitlePage.defaultProps = {
  title: 'Application',
};
TitlePage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default TitlePage;

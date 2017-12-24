import React from 'react';
import { connect } from 'dva';
import Index from '../components/Index.js';

function IndexPage() {
  return (
    <Index/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

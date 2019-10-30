import { withRouter } from 'next/router';

const withRouterWrapper = WrappedComponent =>
  process.env.ENV_TYPE !== 'd7'
    ? withRouter(WrappedComponent)
    : WrappedComponent;

export default withRouterWrapper;

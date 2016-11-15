// @flow
import React, { PropTypes, Component } from 'react';

type MaybeProps = {
  children: any,
  predicate: boolean,
};

class Maybe extends Component { // eslint-disable-line
  static defaultProps = {};
  props: MaybeProps;
  render() {
    const {
      children,
      predicate,
    } = this.props;
    if (predicate) {
      return (
        <div>
          {children}
        </div>
      );
    }
    return <noscript />;
  }
}

export default Maybe;

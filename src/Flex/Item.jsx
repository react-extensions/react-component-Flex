/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import propTypes from 'prop-types';

function FlexItem({
  Tag,
  flex: userSetFlex,
  grow,
  basis,
  width,
  shrink,
  margin,
  children,
  style,
  ...restProps
}) {
  const flexResult = useMemo(() => {
    let flex;
    switch (userSetFlex) {
      case 'none':
        flex = [0, 0, 'auto'];
        break;
      case '0':
        flex = [0, 1, '0%'];
        break;
      case '1':
        flex = [1, 1, '0%'];
        break;
      case 'auto':
        flex = [1, 1, 'auto'];
        break;
      default:
        flex = [0, 0, 'auto'];
    }
    return `${grow || flex[0]} ${shrink || flex[1]} ${basis || flex[2]}`;
  }, [basis, userSetFlex, grow, shrink]);

  let realStyle = { flex: flexResult, marginLeft: margin, width };

  if (style) {
    realStyle = { ...style, ...realStyle };
  }

  return (
    <Tag {...restProps} style={realStyle}>
      {children}
    </Tag>
  );
}

FlexItem.defaultProps = {
  Tag: 'div',
  style: null,
  flex: 'none',
  grow: undefined,
  basis: undefined,
  width: undefined,
  margin: undefined,
  shrink: undefined,
  children: undefined,
};

FlexItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: propTypes.object,
  basis: propTypes.string,
  children: propTypes.node,
  margin: propTypes.number,
  Tag: propTypes.elementType,
  shrink: propTypes.oneOf(['0', '1']),
  grow: propTypes.oneOf(['0', '1', '2']),
  flex: propTypes.oneOf(['0', '1', 'auto', 'none']),
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

export default FlexItem;

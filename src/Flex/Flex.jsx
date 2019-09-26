/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

function Flex({
  Tag,
  children,
  justify,
  align,
  vertical,
  stretch,
  className,
  ...rest
}) {
  return (
    <Tag
      {...rest}
      className={cn(
        className,
        'layout-flex',
        stretch && 'layout-flex-stretch',
        vertical && 'layout-flex-vertical',
        align && `layout-flex-align-${align}`,
        justify && `layout-flex-justify-${justify}`
      )}
    >
      {children}
    </Tag>
  );
}

Flex.defaultProps = {
  Tag: 'div',
  stretch: false,
  vertical: false,
  align: undefined,
  children: undefined,
  className: undefined,
  justify: 'space-between',
};

Flex.propTypes = {
  stretch: propTypes.bool,
  vertical: propTypes.bool,
  children: propTypes.node,
  Tag: propTypes.elementType,
  className: propTypes.string,
  justify: propTypes.oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end',
  ]),
  align: propTypes.oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end',
  ]),
};

export default Flex;

import React from 'react';
import {Row} from 'react-native-easy-grid';
import styles from './styles';

const GridRow = (props) => {
  return (
    <Row style={[styles.row, {height: props.height}]}>{props.children}</Row>
  );
};

export default GridRow;

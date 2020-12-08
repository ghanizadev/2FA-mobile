import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

type Props = {
  source: string;
};

const Avatar: React.FC<Props> = (props) => {
  const {source} = props;
  return (
    <Image style={styles.image} source={{uri: source}} resizeMode="cover" />
  );
};

export default Avatar;

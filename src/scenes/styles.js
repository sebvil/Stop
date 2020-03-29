import {StyleSheet} from 'react-native';
import {Colors, Typography} from '_styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_48,
    color: Colors.PRIMARY,
  },
  categories: {
    fontSize: Typography.FONT_SIZE_16,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedroomsTxt: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  descContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  desc: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },

  newPrice: {
    fontWeight: 'bold',
  },
});

export default styles;

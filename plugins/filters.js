import vue from 'vue';
import { nFormater } from '../utils/general';

vue.filter('likeNotation', (value) => {
  return nFormater(value, 1);
});

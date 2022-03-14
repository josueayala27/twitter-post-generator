import { elementToSVG } from 'dom-to-svg';

export default (_, inject) => {
  inject('domToSvg', { elementToSVG });
};

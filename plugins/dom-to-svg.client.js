import { elementToSVG, inlineResources } from 'dom-to-svg';

export default (_, inject) => {
  inject('domToSvg', { elementToSVG, inlineResources });
};

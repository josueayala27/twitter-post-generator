const svgParser = (svg) => {
  const serializer = new XMLSerializer();
  let source = serializer.serializeToString(svg);
  if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(
      /^<svg/,
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
    );
  }
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
  return url;
};

export const toPng = (el, svg) => {
  try {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = el.offsetWidth * 3.5;
      canvas.height = el.offsetHeight * 3.5;
      const context = canvas.getContext('2d');
      context.drawImage(
        image,
        0,
        0,
        el.offsetWidth * 3.5,
        el.offsetHeight * 3.5
      );
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Twitter Image.png';
      a.click();
    };
    image.src = svgParser(svg);
  } catch (error) {
    console.error(error);
  }
};

export const cropper = (canvas, src) => {
  return new Promise((resolve, reject) => {
    try {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.width / 2,
          canvas.width / 2,
          0,
          Math.PI * 2,
          false
        );
        ctx.clip();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.width);
        ctx.restore();
        resolve(canvas.toDataURL('image/png'));
      };
    } catch (error) {
      reject(error);
    }
  });
};

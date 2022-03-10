export const cropper = (canvas, src, size) => {
  return new Promise((resolve, reject) => {
    try {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, false);
        ctx.clip();
        ctx.drawImage(img, 0, 0, size, size);
        ctx.restore();
        resolve(canvas.toDataURL('image/png'));
      };
    } catch (error) {
      reject(error);
    }
  });
};

export const base64Downloader = (base64Image, filename) => {
  const a = document.createElement('a')
  a.href = base64Image
  a.download = `${filename}.png`
  a.click()
}

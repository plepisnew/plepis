const downloadData = (data: Blob | MediaSource) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = URL.createObjectURL(data);
  link.download = 'output.mp4';
  link.click();
  link.remove();
};

export default downloadData;

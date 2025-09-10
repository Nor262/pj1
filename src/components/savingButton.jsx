'use client';
export default function SavingButton() {
  const handleClick = () => {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'captured_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }} onClick={handleClick}>
      Lưu Ảnh
    </button>
  );
}
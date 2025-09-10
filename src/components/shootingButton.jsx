'use client';
export default function ShootingButton() {
  const handleClick = () => {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    document.body.appendChild(img);
  };

  return (
    <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }} onClick={handleClick}>
      Chụp Ảnh
    </button>
  );
}
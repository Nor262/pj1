'use client';

export default function ShootingButton() {
  const handleClick = () => {
    const video = document.getElementById('camera');
    if (!video) {
      alert("Không tìm thấy video!");
      return;
    }

    // Tạo canvas và chụp ảnh từ video
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    // Lấy dữ liệu ảnh (base64)
    const imageDataUrl = canvas.toDataURL('image/png');

    // Tạo thẻ div chứa ảnh
    const container = document.createElement('div');
    container.style.marginTop = '20px';

    // Tạo thẻ img
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.alt = 'Ảnh chụp';
    img.style.width = '200px';
    img.style.cursor = 'pointer';
    img.title = 'Bấm để tải xuống';

    // Khi bấm vào ảnh thì tải ảnh xuống
    img.onclick = () => {
      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = `chup-anh-${Date.now()}.png`;
      link.click();
    };

    // Thêm ảnh vào div, rồi thêm div vào body (hoặc container nào đó tùy bạn)
    container.appendChild(img);
    document.body.appendChild(container);
  };

  return (
    <button
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        marginTop: '20px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      Chụp Ảnh
    </button>
  );
}

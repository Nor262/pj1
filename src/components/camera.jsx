'use client'
import { useEffect } from 'react';

export default function Camera() {
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const video = document.getElementById('camera');
          if (video) {
            video.srcObject = stream;
          }
        })
        .catch((err) => {
          console.log('Không thể truy cập camera:', err);
        });
    } else {
      console.log('Trình duyệt không hỗ trợ camera hoặc đang chạy trên server.');
    }
  }, []);

return (
    <video
        id="camera"
        autoPlay
        style={{
            border: '2px solid red',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            maxHeight: '500px'
        }}
    />
);
}

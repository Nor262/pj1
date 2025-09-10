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

  return <video style={{border: '2px solid red', width: '80%', height: '500px'}} id="camera" autoPlay />;
}

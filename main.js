function generateQRCode() {
  const text = document.getElementById('text-input').value;
  const qrColor = document.querySelector('#qr-color').value || '#000000'; // Цвет QR-кода
  const bgColor = document.querySelector('#bg-color').value || '#ffffff'; // Цвет фона
  const qrcodeContainer = document.querySelector('#qrcode');

  qrcodeContainer.innerHTML = '';
  if (text.trim() === '') {
      alert('Please enter text or URL');
      return;
  }

  // Генерация QR-кода
  const qr = new QRCode(qrcodeContainer, {
      text: text,
      width: 400,
      height: 400,
      colorDark: qrColor, // Цвет QR-кода
      colorLight: bgColor, // Цвет фона
  });
}

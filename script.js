const canvas = document.getElementById('signaturePad');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearSignature');
const signatureData = document.getElementById('signatureData');

let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', draw);

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signatureData.value = '';
});

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

document.getElementById('agreementForm').addEventListener('submit', () => {
    signatureData.value = canvas.toDataURL();
});

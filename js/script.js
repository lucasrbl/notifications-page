const read = document.querySelector('.read');
const notifications = document.querySelector('.notifications-square');
const rowColor = document.querySelectorAll('.row');
const redCircle = document.querySelectorAll('.red-circle');

read.addEventListener('click', () => {
    notifications.innerHTML = '0'
    rowColor.forEach((r) => r.style.backgroundColor = '#FFF')
    redCircle.forEach((c) => c.style.display = 'none')
})
const upperBox = document.querySelector('#image');
const lowerBox = document.getElementById('description');

console.log(upperBox);
console.log(lowerBox);

upperBox.addEventListener('mouseover', function() {
lowerBox.classList.add('h-full');
});

upperBox.addEventListener('mouseout', function() {
lowerBox.classList.remove('h-full');
});
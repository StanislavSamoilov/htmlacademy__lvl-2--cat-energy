const slider = () => {
  const before = document.querySelector('.example__before');
  const range = document.querySelector('.example__range');

  range.addEventListener('input', function() {
    before.style.width = range.value+"%";
  });
}

export default slider;
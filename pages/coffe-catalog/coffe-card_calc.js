let count = 1
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btncalc')
const decrease = document.querySelector('.decrease')
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease') && count > 1){
      count--
    } 
    else if (styles.contains('increase')) {
      count++
    }
    value.textContent = count;
    if(value.textContent < 1) {
      
    }
  })
})

;(function() {
  document.querySelector('.header__bar').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('menu')
  })

  let electronicBtn = document.querySelector('#electronicBtn')
  if(!electronicBtn) return false;
  electronicBtn.addEventListener('click', function() {
      document.querySelector('.electronic').classList.remove('hidden')
      document.querySelector('.mailing').classList.add('hidden')
    })
  let mailingBtn = document.querySelector('#mailingBtn') 
  if(!mailingBtn) return false 
  mailingBtn.addEventListener('click', function() {
    document.querySelector('.electronic').classList.add('hidden')
    document.querySelector('.mailing').classList.remove('hidden')
  })
})()

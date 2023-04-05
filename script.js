// first, we need to bring in all the cards
const panels = document.querySelectorAll('.panel')

// loop through each
panels.forEach((panel) => {
  // adding eventlistener for a click
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

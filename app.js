const toggleButton = document.getElementsByClassName('toggle-button')[0]
const black = document.getElementsByClassName('black')[0]

toggleButton.addEventListener('click', () => {
    black.classList.toggle('active')
})
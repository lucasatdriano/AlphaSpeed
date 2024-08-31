        // Script para mostrar valor do input range

const value = document.querySelector("#value")
const input = document.querySelector("#iPreco")

value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})
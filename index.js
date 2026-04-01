const generateBtn = document.getElementById('generate-btn')
const colorPicker = document.getElementById('color-picker')
const modeSelect = document.getElementById('mode-select')

generateBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${modeSelect.value}`)
    .then(resp => resp.json())
    .then(data => {
        const hexes = []
        for (let result of data.colors) {
            hexes.push(result.hex.value)
        }
        renderHexes(hexes)
    })
})

function renderHexes(hexes) {
    console.log(hexes)
    let colorsHtml = ''
    hexes.forEach((hex, idx) => {
        colorsHtml += `
            <div class="color-${idx}"></div>
        `
    })
    document.getElementById('color-scheme').innerHTML = colorsHtml
}
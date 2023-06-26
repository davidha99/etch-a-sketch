window.addEventListener("load", (e) => {
    const grid = document.getElementById("grid");
    console.log(grid);
    for (let i = 0; i < 900; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add("pixel");
        grid.appendChild(pixel)
    }
});
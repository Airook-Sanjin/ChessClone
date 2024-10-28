let board = document.querySelector(".board");
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let tile = document.createElement("div");
    tile.className = (row + col) % 2 === 0 ? "evenTiles" : "oddTiles";

    let tileId = String.fromCharCode(97 + col) + (8 - row); //e.g a1,b2
    tile.setAttribute("data-tile", tileId); // set a data attribute for identification
    tile.innerText = tileId;
    
    let tiles = document.querySelectorAll(".board div");
    tiles.forEach(tile => {
       tile.getAttribute("data-tile")
        console.log(`Tile clicked - ${tileId}`)
       
    });
    board.appendChild(tile);
  }

}

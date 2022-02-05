const blocks = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

let isPlayerOne = true;

console.log("test")

for (const [index, item] of Array.from(document.querySelectorAll(".block")).entries()) {
    console.log("test2")
    item.addEventListener("click", () => {
        onBlockClick(index, item)
    })
}

function onBlockClick(index, item) {
    console.log(index, item)
    if (blocks[index] !== 0) {
        return
    }
    if (isPlayerOne) {
        blocks[index] = 1
        item.classList.add("red")
    } else {
        blocks[index] = 2
        item.classList.add("blue")
    }

    isPlayerOne = !isPlayerOne
    console.log(blocks)

}



  // [- - -]
  // [- - -]
  // [- - -]
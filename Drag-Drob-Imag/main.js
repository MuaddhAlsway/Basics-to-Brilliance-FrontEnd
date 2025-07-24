// DOM elements

const boxes = document.querySelectorAll(".box"),
    image = document.querySelectorAll(".image");
    let draggedImage = null;

image.forEach(img => {
    img.addEventListener("dragstart" , () => {
        draggedImage = img; // Store the dragged image
        
    })
})
// Loop through each box elements
boxes.forEach(box => {
    // Whenb a draggable element dragged over a box element
    box.addEventListener("dragover", (e) => {
        e.preventDefault(); // Prevent default to allow drop
        box.classList.add("hovered"); // Add class to highlight the box
    })

    // When a draggable element leaves the box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered"); // Remove the highlight class  
    })

    // When a draggable element is dropped on the box element
    box.addEventListener("drop", () => {
        box.appendChild(draggedImage);
        box.classList.remove("hovered");
    });
})


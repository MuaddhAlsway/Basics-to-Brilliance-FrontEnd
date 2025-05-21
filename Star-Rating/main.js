const stars = document.querySelectorAll(".stars i")


// Loop through each the stars NodeList

stars.forEach((star, index1) => {
    // add an eventListner that runs a function when thee "clik" event is triggered
    star.addEventListener("click", () =>{
      
        // loop through the "stars" NodeList
        stars.forEach((star, index2) => {
            // add the "active" class to the clicked star and any stars wuth a lower index
            //add remove the active class from any stars with a higher index

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    })
})
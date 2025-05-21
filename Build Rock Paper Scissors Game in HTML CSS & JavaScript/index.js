const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Reset all active classes
        optionImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active");

        // Reset images to rock
        userResult.src = cpuResult.src = "images/rock.png";

        gameContainer.classList.add("start");

        setTimeout(() => {
            gameContainer.classList.remove("start");

            // Use the clicked image's <img> src
            let imageSrc = image.querySelector("img")?.src || image.src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User"
            };

            let outcome = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcome} Won!!`;

        }, 2500); // 2.5 seconds delay
    });
});

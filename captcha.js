document.addEventListener("DOMContentLoaded", (event) => {
    let goal = 10000;

    let score = 0;
    let speed = 0;

    const cursorInitialValue = 1;
    let cursorMultiplier = 1;
    let overallMultiplier = 1;

    const clickBox = document.querySelector(".captcha-wrapper-click");
    const uiImage = document.querySelector(".captcha-clickable");

    const images = [
        "./img/can.png",
        "./img/bag.png",
        "./img/bottle.png"
    ];

    let currentImageIndex = 0;

    clickBox.addEventListener("click", function (event) {
        score += cursorInitialValue * cursorMultiplier;
        uiUpdateScore();
        uiUpdateItems();
        uiUpdateImprovements();
        const plusText = document.createElement("span");
        plusText.classList.add("captcha-plus-text");
        plusText.textContent = `+${cursorInitialValue * cursorMultiplier}`;
        plusText.style.position = "fixed";
        plusText.style.left = `${event.clientX}px`;
        plusText.style.top = `${event.clientY}px`;
        plusText.style.userSelect = "none";
        plusText.style.pointerEvents = "none";
        document.body.appendChild(plusText);
        setTimeout(() => {
            document.body.removeChild(plusText);
        }, 2000);

        // Change the src of uiImage
        currentImageIndex = (currentImageIndex + 1) % images.length;
        uiImage.src = images[currentImageIndex];
    });

    // Config

    // Items

    let items = [
        {
            name: "Bucket",
            costInitialValue: 10,
            costMultiplier: 1,
            cpsInitialValue: 1,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Fishing Net",
            costInitialValue: 100,
            costMultiplier: 1,
            cpsInitialValue: 8,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Trash Collector Boat",
            costInitialValue: 1000,
            costMultiplier: 1,
            cpsInitialValue: 80,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Drone Collector",
            costInitialValue: 10000,
            costMultiplier: 1,
            cpsInitialValue: 480,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Trash Boom",
            costInitialValue: 100000,
            costMultiplier: 1,
            cpsInitialValue: 2800,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Underwater Vacuum",
            costInitialValue: 1000000,
            costMultiplier: 1,
            cpsInitialValue: 16800,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Marine Robot",
            costInitialValue: 10000000,
            costMultiplier: 1,
            cpsInitialValue: 100000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Recycling Station",
            costInitialValue: 100000000,
            costMultiplier: 1,
            cpsInitialValue: 600000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Ocean Skimmer",
            costInitialValue: 1000000000,
            costMultiplier: 1,
            cpsInitialValue: 3600000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Waste-Catching Reef",
            costInitialValue: 10000000000,
            costMultiplier: 1,
            cpsInitialValue: 21600000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Solar-Powered Waste Harvester",
            costInitialValue: 100000000000,
            costMultiplier: 1,
            cpsInitialValue: 100000000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "AI-Controlled Fleet",
            costInitialValue: 1000000000000,
            costMultiplier: 1,
            cpsInitialValue: 700000000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Nano-Bots",
            costInitialValue: 10000000000000,
            costMultiplier: 1,
            cpsInitialValue: 4200000000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Deep-Sea Harvester",
            costInitialValue: 100000000000000,
            costMultiplier: 1,
            cpsInitialValue: 25400000000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Global Cleanup Satellite",
            costInitialValue: 1000000000000000,
            costMultiplier: 1,
            cpsInitialValue: 100000000000,
            cpsMultiplier: 1,
            number: 0
        },
    ]

    // Improvements

    let improvements = [
        {
            name: "x2 click",
            cost: 100,
            buy: false,
            img: "./img/icons/cursor_x2.svg",
            function: function () {
                cursorMultiplier *= 2
            }
        },
        {
            name: "x2 Bucket",
            cost: 1000,
            buy: false,
            img: "./img/icons/1_x2.svg",
            function: function () {
                items[0].cpsMultiplier *= 2
            }
        },
        {
            name: "x3 Click",
            cost: 2000,
            buy: false,
            img: "./img/icons/cursor_x3.svg",
            function: function () {
                cursorMultiplier *= 3
            }
        },
        {
            name: "+5% Overall",
            cost: 2500,
            buy: false,
            img: "./img/icons/can_5_overall.svg",
            function: function () {
                overallMultiplier += 0.05
            }
        },
        {
            name: "x2 Bucket",
            cost: 2000,
            buy: false,
            img: "./img/icons/1_x2.svg",
            function: function () {
                goal = 100000
                uiUpdateEnd();
                uiUpdateEndButton()
                // TODO : animation changement goal
            }
        },
        {
            name: "x2 Fishing Net",
            cost: 5000,
            buy: false,
            img: "./img/icons/2_x2.svg",
            function: function () {
                items[1].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Trash Collector Boat",
            cost: 8000,
            buy: false,
            img: "./img/icons/3_x2.svg",
            function: function () {
                items[2].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Bucket",
            cost: 9000,
            buy: false,
            img: "./img/icons/1_x2.svg",
            function: function () {
                items[0].cpsMultiplier *= 2
            }
        },
        {
            name: "+10% Bucket",
            cost: 10000,
            buy: false,
            img: "./img/icons/1_10p.svg",
            function: function () {
                items[0].cpsMultiplier *= 1.10
            }
        },
        {
            name: "x2 Drone Collector",
            cost: 40000,
            buy: false,
            img: "./img/icons/4_x2.svg",
            function: function () {
                items[3].cpsMultiplier *= 2
            }
        },
        {
            name: "x4 click",
            cost: 50000,
            buy: false,
            img: "./img/icons/cursor_x4.svg",
            function: function () {
                cursorMultiplier *= 4
            }
        },
        {
            name: "+10% Fishing Net",
            cost: 100000,
            buy: false,
            img: "./img/icons/2_10p.svg",
            function: function () {
                items[1].cpsMultiplier *= 1.10
            }
        },
        {
            name: "+5% Overall",
            cost: 105000,
            buy: false,
            img: "./img/icons/can_5_overall.svg",
            function: function () {
                overallMultiplier += 0.05
            }
        },
        {
            name: "x5 click",
            cost: 110000,
            buy: false,
            img: "./img/icons/cursor_x5.svg",
            function: function () {
                cursorMultiplier *= 5
            }
        },
        {
            name: "x2 Trash Boom",
            cost: 500000,
            buy: false,
            img: "./img/icons/5_x2.svg",
            function: function () {
                items[4].cpsMultiplier *= 2
            }
        },
        {
            name: "x6 click",
            cost: 600000,
            buy: false,
            img: "./img/icons/cursor_x6.svg",
            function: function () {
                cursorMultiplier *= 6
            }
        },
        {
            name: "x2 Underwater Vacuum",
            cost: 5000000,
            buy: false,
            img: "./img/icons/6_x2.svg",
            function: function () {
                items[5].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Marine Robot",
            cost: 50000000,
            buy: false,
            img: "./img/icons/7_x2.svg",
            function: function () {
                items[6].cpsMultiplier *= 2
            }
        },
        {
            name: "x8 click",
            cost: 55000000,
            buy: false,
            img: "./img/icons/cursor_x6.svg",
            function: function () {
                cursorMultiplier *= 6
            }
        },
        {
            name: "+5% Overall",
            cost: 55000000,
            buy: false,
            img: "./img/icons/can_5_overall.svg",
            function: function () {
                overallMultiplier += 0.05
            }
        },
        {
            name: "x2 Recycling Station",
            cost: 500000000,
            buy: false,
            img: "./img/icons/8_x2.svg",
            function: function () {
                items[7].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Ocean Skimmer",
            cost: 5000000000,
            buy: false,
            img: "./img/icons/9_x2.svg",
            function: function () {
                items[8].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Waste-Catching Reef",
            cost: 50000000000,
            buy: false,
            img: "./img/icons/10_x2.svg",
            function: function () {
                items[9].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 Solar-Powered Waste Harvester",
            cost: 500000000000,
            buy: false,
            img: "./img/icons/11_x2.svg",
            function: function () {
                items[10].cpsMultiplier *= 2
            }
        },
        {
            name: "x2 AI-Controlled Fleet",
            cost: 1000000000000,
            buy: false,
            img: "./img/icons/12_x2.svg",
            function: function () {
                items[11].cpsMultiplier *= 2
            }
        },
        {
            name: "x10 click",
            cost: 10000000000000,
            buy: false,
            img: "./img/icons/cursor_x10.svg",
            function: function () {
                cursorMultiplier *= 10
            }
        },
    ]

    // UI Function

    const uiScore = document.querySelector("#score");
    const uiSpeed = document.querySelector("#speed");
    const uiItemsWrapper = document.querySelector(".captcha-wrapper-items");
    const uiImprovementsWrapper = document.querySelector(".captcha-wrapper-improvements");
    const uiEndButton = document.querySelector(".captcha-button-finish");

    const uiUpdateEnd = () => {
        if (score >= goal) {
            uiEndButton.disabled = false;
        } else {
            uiEndButton.disabled = true;
        }
    }

    const uiUpdateScore = () => {
        uiScore.innerHTML = Math.floor(score).toLocaleString();
        uiUpdateEnd();
    }

    const uiUpdateSpeed = () => {
        uiSpeed.innerHTML = `${Math.floor(speed).toLocaleString()} per second`;
    }

    const uiUpdateEndButton = () => {
        uiEndButton.innerText = `${Math.floor(goal).toLocaleString()} to continue`;
    }

    const uiSetupItems = () => {
        items.forEach((item, index) => {
            // Création d'un bouton pour chaque item
            const button = document.createElement("button");
            button.className = "captcha-button-item";
            button.id = `item-${index}`;
            button.disabled = true;
            button.title = `+${item.cpsInitialValue * item.cpsMultiplier} per second by unit`;
            button.style.backgroundImage = `url(./img/icons/${index + 1}.svg)`;

            // Toujours afficher l'item 1
            if (index == 0) {
                button.classList.add("show-item")
                button.classList.add("show-content")
            }

            // Création des éléments span pour le nom et le coût
            const titleSpan = document.createElement("span");
            titleSpan.className = "captcha-title-3";
            titleSpan.textContent = item.name;

            const costSpan = document.createElement("span");
            costSpan.className = "captcha-text";
            costSpan.textContent = (item.costInitialValue * item.costMultiplier).toLocaleString();
            costSpan.id = "price";

            const numberSpan = document.createElement("span");
            numberSpan.className = "captcha-number";
            numberSpan.textContent = item.number;
            numberSpan.id = "number";

            // Ajout des spans au bouton
            button.appendChild(titleSpan);
            button.appendChild(costSpan);
            button.appendChild(numberSpan);

            // Ajout du bouton à l'élément wrapper
            uiItemsWrapper.appendChild(button);

            button.addEventListener("click", function () {
                item.number += 1;
                score -= item.costInitialValue * item.costMultiplier;
                item.costMultiplier += 1;
            })
        });
    }

    const uiUpdateItems = () => {
        items.forEach((item, index) => {
            const uiItem = uiItemsWrapper.querySelector(`#item-${index}`);
            const uiPrice = uiItem.querySelector("#price");
            const uiNumber = uiItem.querySelector("#number");
            uiPrice.textContent = (item.costInitialValue * item.costMultiplier).toLocaleString();
            uiItem.title = `+${item.cpsInitialValue * item.cpsMultiplier} per second by unit`;
            uiNumber.textContent = item.number;

            if (score >= (item.costInitialValue * item.costMultiplier)) {
                uiItem.disabled = false;
            } else {
                uiItem.disabled = true;
            }

            if (goal <= 10000 && score >= 9000) {
                goal = 100000
                uiUpdateEnd()
                uiUpdateEndButton()

                // TODO : animation aug de l'objectif
            }

            if (item.number > 0) {
                uiNumber.classList.add("show");
            }
            if (score >= item.costInitialValue * 0.10 && !uiItem.classList.contains("show-item")) {
                uiItem.classList.add("show-item");
            }
            if (score >= item.costInitialValue * 0.80 && !uiItem.classList.contains("show-content")) {
                uiItem.classList.add("show-content");
            }
        });
    }

    const uiSetupImprovements = () => {
        improvements.forEach((improvement, index) => {
            // Création d'un bouton pour chaque amélioration
            const button = document.createElement("button");
            button.className = "captcha-button-improvement";
            button.id = `improvement-${index}`;
            button.disabled = true;
            button.title = `${improvement.name} | Price: ${improvement.cost.toLocaleString()}`;
            button.style.backgroundImage = `url(${improvement.img})`;

            // Ajout du bouton à l'élément wrapper
            uiImprovementsWrapper.appendChild(button);

            button.addEventListener("click", function () {
                improvement.buy = true;
                improvement.function();
                score -= improvement.cost;
            })
        })
    }

    const uiUpdateImprovements = () => {
        improvements.forEach((improvement, index) => {
            const uiImprovement = uiImprovementsWrapper.querySelector(`#improvement-${index}`);

            if (improvement.buy) {
                uiImprovement.classList.add("hide");
            }

            if (score >= (improvement.cost)) {
                uiImprovement.disabled = false;
            } else {
                uiImprovement.disabled = true;
            }
        });
    }

    // Setup
    uiSetupItems();
    uiSetupImprovements();

    // Calculate new score

    setInterval(() => {
        let calculatedSpeed = 0;
        items.forEach(item => {
            score += ((item.cpsInitialValue * item.cpsMultiplier) / 10) * item.number;
            calculatedSpeed += ((item.cpsInitialValue * item.cpsMultiplier * overallMultiplier) / 10) * item.number;
        })
        speed = calculatedSpeed * 10;
        uiUpdateScore();
        uiUpdateSpeed();
        uiUpdateItems();
        uiUpdateImprovements();
    }, 100);

    // Instructor 

    const tips = [
        {
            text: "Don't forget to upgrade your items for better efficiency!",
            image: "penguin_confident.png"
        },
        {
            text: "Every piece of waste collected helps save marine life!",
            image: "penguin_confident_2.png"
        },
        {
            text: "Did you know? Plastic takes over 400 years to decompose.",
            image: "penguin_chocked.png"
        },
        {
            text: "I think the continue button feels a bit awkward here. Could you help adjust it?.",
            image: "penguin_confident_2.png"
        },
        {
            text: "Keep collecting to unlock powerful upgrades!",
            image: "penguin_confident.png"
        },
        {
            text: "Remember, teamwork makes the dream work!",
            image: "penguin_no_mouth.png"
        },
        {
            text: "Every year, 8 million metric tons of plastic enter the oceans.",
            image: "penguin_chocked_arm.png"
        },
        {
            text: "Microplastics are found in 90% of seabirds. Let's change that!",
            image: "penguin_angry.png"
        },
        {
            text: "Over 1 million marine animals die annually from plastic waste.",
            image: "penguin_sad.png"
        },
        {
            text: "By 2050, there could be more plastic than fish in the ocean.",
            image: "penguin_cry.png"
        },
        {
            text: "You're a bit slow for a robot...",
            image: "penguin_sad.png"
        },
        {
            text: "So far, there's no proof you're a robot.",
            image: "penguin_confident_2.png"
        },
        {
            text: "I could have done the same... and yet, I'm not a robot.",
            image: "penguin_angry.png"
        },
        {
            text: "Hurry up, for crying out loud!",
            image: "penguin_angry.png"
        },
        {
            text: "If you're a robot, you're definitely the least efficient one.",
            image: "penguin_no_mouth.png"
        },
        {
            text: "Not bad, but the captcha wasn't mandatory. I put a 'skip' button at the end of the form.",
            image: "penguin_confident.png"
        },
        {
            text: "What happens if I refresh the page now?",
            image: "penguin_confident_2.png"
        },
        {
            text: "не трудитесь переводить этот текст, он совершенно бесполезен!",
            image: "penguin_confident_2.png"
        }
    ];

    function updateTip() {
        const speechBubble = document.getElementById("speech-bubble");
        const penguinImage = document.getElementById("penguin");

        const randomTip = tips[Math.floor(Math.random() * tips.length)];

        speechBubble.textContent = randomTip.text;
        penguinImage.src = "img/" + randomTip.image;
    }

    setInterval(updateTip, 20000);
})
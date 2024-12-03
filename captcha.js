document.addEventListener("DOMContentLoaded", (event) => {
    let score = 0;
    let speed = 0;

    const cursorInitialValue = 1;
    let cursorMultiplier = 1;

    const clickBox = document.querySelector(".captcha-wrapper-click");

    clickBox.addEventListener("click", function(){
        score+=cursorInitialValue*cursorMultiplier;
        uiUpdateScore();
        uiUpdateItems();
    })

    // Config

    // Items

    const items = [
        {
            name: "Item 1",
            costInitialValue: 10,
            costMultiplier: 1,
            cpsInitialValue: 1,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 2",
            costInitialValue: 100,
            costMultiplier: 1,
            cpsInitialValue: 2,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 3",
            costInitialValue: 1000,
            costMultiplier: 1,
            cpsInitialValue: 4,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 4",
            costInitialValue: 10000,
            costMultiplier: 1,
            cpsInitialValue: 8,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 5",
            costInitialValue: 100000,
            costMultiplier: 1,
            cpsInitialValue: 16,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 6",
            costInitialValue: 1000000,
            costMultiplier: 1,
            cpsInitialValue: 32,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 7",
            costInitialValue: 10000000,
            costMultiplier: 1,
            cpsInitialValue: 64,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 8",
            costInitialValue: 100000000,
            costMultiplier: 1,
            cpsInitialValue: 128,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 9",
            costInitialValue: 1000000000,
            costMultiplier: 1,
            cpsInitialValue: 256,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Item 10",
            costInitialValue: 10000000000,
            costMultiplier: 1,
            cpsInitialValue: 512,
            cpsMultiplier: 1,
            number: 0
        },
    ]

    // UI Function

    const uiScore = document.querySelector("#score");
    const uiSpeed = document.querySelector("#speed");
    const uiItemsWrapper = document.querySelector(".captcha-wrapper-items")

    const uiUpdateScore = () => {
        uiScore.innerHTML = Math.floor(score).toLocaleString();
    }

    const uiUpdateSpeed = () => {
        uiSpeed.innerHTML = `${speed} per second`;
    }

    const uiSetupItems = () => {
        items.forEach((item, index) => {
            // Création d'un bouton pour chaque item
            const button = document.createElement("button");
            button.className = "captcha-button-item";
            button.id = `item-${index}`;
            button.disabled = true;

            // Création des éléments span pour le nom et le coût
            const titleSpan = document.createElement("span");
            titleSpan.className = "captcha-title-3";
            titleSpan.textContent = item.name;

            const costSpan = document.createElement("span");
            costSpan.className = "captcha-text";
            costSpan.textContent = (item.costInitialValue * item.costMultiplier).toLocaleString();

            // Ajout des spans au bouton
            button.appendChild(titleSpan);
            button.appendChild(costSpan);

            // Ajout du bouton à l'élément wrapper
            uiItemsWrapper.appendChild(button);
        });
    }
    
    const uiUpdateItems = () => {
        items.forEach((item, index) => {
            if (score >= (item.costInitialValue * item.costMultiplier)) {
                uiItemsWrapper.querySelector(`#item-${index}`).disabled = false;
            }
        });
    }

    // Setup

    uiSetupItems();

    // Calculate new score

    setInterval(() => {
        let calculatedSpeed = 0;
        items.forEach(item=>{
            score+=((item.cpsInitialValue*item.cpsMultiplier)/10)*item.number;
            calculatedSpeed += ((item.cpsInitialValue*item.cpsMultiplier)/10)*item.number;
        })
        speed = calculatedSpeed*10;
        uiUpdateScore();
        uiUpdateSpeed();
        uiUpdateItems();
    }, 100);
})
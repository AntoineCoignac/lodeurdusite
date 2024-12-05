document.addEventListener("DOMContentLoaded", (event) => {
    let goal = 10000;
    
    let score = 0;
    let speed = 0;

    const cursorInitialValue = 1;
    let cursorMultiplier = 1;

    const clickBox = document.querySelector(".captcha-wrapper-click");
    const uiImage = document.querySelector(".captcha-clickable");

    const images = [
        "./img/can.png",
        "./img/bag.png",
        "./img/bottle.png"
    ];

    let currentImageIndex = 0;

    clickBox.addEventListener("click", function(event){
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

    // Improvements

    let improvements = [
        {
            name: "x2 click",
            cost: 100,
            buy: false,
            function: function(){
                cursorMultiplier*=2
            }
        },
        {
            name: "x2 Item 1",
            cost: 1000,
            buy: false,
            function: function(){
                items[0].cpsMultiplier*=2
            }
        },
        {
            name: "x3 click",
            cost: 2000,
            buy: false,
            function: function(){
                cursorMultiplier*=3
            }
        },
        {
            name: "x2 Item 2",
            cost: 5000,
            buy: false,
            function: function(){
                items[1].cpsMultiplier*=2
            }
        },
        {
            name: "x2 Item 3",
            cost: 8000,
            buy: false,
            function: function(){
                items[2].cpsMultiplier*=2
            }
        },
        {
            name: "+10% Item 1",
            cost: 10000,
            buy: false,
            function: function(){
                items[0].cpsMultiplier*=1.10
            }
        },
        {
            name: "x2 Item 4",
            cost: 40000,
            buy: false,
            function: function(){
                items[3].cpsMultiplier*=2
            }
        },
        {
            name: "x4 click",
            cost: 50000,
            buy: false,
            function: function(){
                cursorMultiplier*=4
            }
        },
        {
            name: "+10% Item 2",
            cost: 100000,
            buy: false,
            function: function(){
                items[1].cpsMultiplier*=1.10
            }
        },
        {
            name: "x5 click",
            cost: 110000,
            buy: false,
            function: function(){
                cursorMultiplier*=5
            }
        },
        {
            name: "x2 Item 5",
            cost: 500000,
            buy: false,
            function: function(){
                items[4].cpsMultiplier*=2
            }
        },
        {
            name: "x6 click",
            cost: 600000,
            buy: false,
            function: function(){
                cursorMultiplier*=6
            }
        },
        {
            name: "x2 Item 6",
            cost: 5000000,
            buy: false,
            function: function(){
                items[5].cpsMultiplier*=2
            }
        },
        {
            name: "x2 Item 7",
            cost: 50000000,
            buy: false,
            function: function(){
                items[6].cpsMultiplier*=2
            }
        },
        {
            name: "x2 Item 8",
            cost: 500000000,
            buy: false,
            function: function(){
                items[7].cpsMultiplier*=2
            }
        },
        {
            name: "x2 Item 9",
            cost: 5000000000,
            buy: false,
            function: function(){
                items[8].cpsMultiplier*=2
            }
        },
        {
            name: "x2 Item 10",
            cost: 50000000000,
            buy: false,
            function: function(){
                items[9].cpsMultiplier*=2
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
        if (score >= goal){
            uiEndButton.disabled=false;
        }else{
            uiEndButton.disabled=true;
        }
    }

    const uiUpdateScore = () => {
        uiScore.innerHTML = Math.floor(score).toLocaleString();
        uiUpdateEnd();
    }

    const uiUpdateSpeed = () => {
        uiSpeed.innerHTML = `${Math.floor(speed).toLocaleString()} per second`;
    }

    const uiSetupItems = () => {
        items.forEach((item, index) => {
            // Création d'un bouton pour chaque item
            const button = document.createElement("button");
            button.className = "captcha-button-item";
            button.id = `item-${index}`;
            button.disabled = true;
            button.title = `+${item.cpsInitialValue*item.cpsMultiplier} per second by unit`;

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

            button.addEventListener("click", function(){
                item.number += 1;
                score-=item.costInitialValue*item.costMultiplier;
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
            uiItem.title = `+${item.cpsInitialValue*item.cpsMultiplier} per second by unit`;
            uiNumber.textContent = item.number;

            if (score >= (item.costInitialValue * item.costMultiplier)) {
                uiItem.disabled = false;
            }else{
                uiItem.disabled = true;
            }

            if (item.number > 0){
                uiNumber.classList.add("show");
            }
        });
    }

    const uiSetupImprovements = ()=>{
        improvements.forEach((improvement, index)=>{
            // Création d'un bouton pour chaque amélioration
            const button = document.createElement("button");
            button.className = "captcha-button-improvement";
            button.id = `improvement-${index}`;
            button.disabled = true;
            button.title = `${improvement.name} | Price: ${improvement.cost.toLocaleString()}`;

            // Ajout du bouton à l'élément wrapper
            uiImprovementsWrapper.appendChild(button);

            button.addEventListener("click", function(){
                improvement.buy = true;
                improvement.function();
                score -= improvement.cost;
            })
        })
    }

    const uiUpdateImprovements = () => {
        improvements.forEach((improvement, index) => {
            const uiImprovement = uiImprovementsWrapper.querySelector(`#improvement-${index}`);

            if (improvement.buy){
                uiImprovement.classList.add("hide");
            }

            if (score >= (improvement.cost)) {
                uiImprovement.disabled = false;
            }else{
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
        items.forEach(item=>{
            score+=((item.cpsInitialValue*item.cpsMultiplier)/10)*item.number;
            calculatedSpeed += ((item.cpsInitialValue*item.cpsMultiplier)/10)*item.number;
        })
        speed = calculatedSpeed*10;
        uiUpdateScore();
        uiUpdateSpeed();
        uiUpdateItems();
        uiUpdateImprovements();
    }, 100);
})
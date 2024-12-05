document.addEventListener("DOMContentLoaded", (event) => {
    let goal = 10000;
    
    let score = 0;
    let speed = 0;

    const cursorInitialValue = 1;
    let cursorMultiplier = 1;

    const clickBox = document.querySelector(".captcha-wrapper-click");

    clickBox.addEventListener("click", function(){
        score+=cursorInitialValue*cursorMultiplier;
        uiUpdateScore();
        uiUpdateItems();
        uiUpdateImprovements();
    })

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
            name: "AI-Controlled Fleet",
            costInitialValue: 10000000000,
            costMultiplier: 1,
            cpsInitialValue: 21600000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Nano-Bots",
            costInitialValue: 100000000000,
            costMultiplier: 1,
            cpsInitialValue: 100000000,
            cpsMultiplier: 1,
            number: 0
        },
        {
            name: "Global Cleanup Satellite",
            costInitialValue: 1000000000000,
            costMultiplier: 1,
            cpsInitialValue: 700000000,
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
            name: "x2 Bucket",
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
            name: "x3 Item 1",
            cost: 2000,
            buy: false,
            function: function(){
                goal = 100000
                uiUpdateEnd();
                uiUpdateEndButton()
                // TODO : animation changement goal
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
            button.title = `+${item.cpsInitialValue*item.cpsMultiplier} per second by unit`;

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

            // Ajout des spans au bouton
            button.appendChild(titleSpan);
            button.appendChild(costSpan);

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
            uiPrice.textContent = (item.costInitialValue * item.costMultiplier).toLocaleString();
            uiItem.title = `+${item.cpsInitialValue*item.cpsMultiplier} per second by unit`;

            if (score >= (item.costInitialValue * item.costMultiplier)) {
                uiItem.disabled = false;
            }else{
                uiItem.disabled = true;
            }

            if (score >= item.costInitialValue * 0.10 && !uiItem.classList.contains("show-item")) {
                uiItem.classList.add("show-item");
            }
            if (score >= item.costInitialValue * 0.80 && !uiItem.classList.contains("show-content")) {
                uiItem.classList.add("show-content");
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

    // Instructor

    const tips = [
        "Don't forget to upgrade your items for better efficiency!",
        "Every piece of waste collected helps save marine life!",
        "Did you know? Plastic takes over 400 years to decompose.",
        "Watch your progress! Check the top-right corner for stats.",
        "Keep collecting to unlock powerful upgrades!",
        "Remember, teamwork makes the dream work!"
      ];
      
      function updateTip() {
        const speechBubble = document.getElementById("speech-bubble");
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        speechBubble.textContent = randomTip;
      }
      
      // Change the tip every 10 seconds
      setInterval(updateTip, 10000);
})
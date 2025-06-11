const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
    if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
    } else {
        alert('Character Died');
    }
    },
    levelUp() {
    this.level += 1;
    this.health += 20;
    }
};

    
initializeCharacterInfo();

document.querySelector("#attacked").addEventListener("click", function() {
    character.attacked();
    updateCharacterInfo();
});

document.querySelector("#levelup").addEventListener("click", function() {
    character.levelUp();
    updateCharacterInfo();
});


function initializeCharacterInfo() {
    const nameContainer = document.querySelector(".name");
    const classContainer = document.querySelector("#class");
    
    nameContainer.textContent = character.name;
    classContainer.textContent = character.class;

    updateCharacterInfo();

}

function updateCharacterInfo() {
    console.log("running update char info");
    const levelDesc = document.querySelector("#level");
    const healthDesc = document.querySelector("#health");
    
    levelDesc.textContent = character.level;
    healthDesc.textContent = character.health;
}
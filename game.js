var health = 20;
var healamount = 20
var healRemaining = 3;
var attackDmg;

var nextHeal = 0; //korokben szamlalva

var bosshealth = 50;
var bossDmg;

document.getElementsByClassName("d-flex justify-content-center")[0].getElementsByClassName("attackButton")[0].addEventListener("click", attack)
document.getElementsByClassName("d-flex justify-content-center")[0].getElementsByClassName("healButton")[0].addEventListener("click", heal)

function heal() {
    if(healRemaining > 0 && nextHeal <= 0) {
        health += healamount;
        healRemaining -= 1;
        document.getElementsByClassName("row")[0].getElementsByClassName("yourStats")[0].getElementsByClassName("yourHealth")[0].textContent = "Your Health:" + health;
        nextHeal = 3;
    }
}
function attack() {
    attackDmg = Math.random() * 6;
    attackDmg = Math.round(attackDmg);
    bosshealth -= attackDmg;
    nextHeal -= 1;
    document.getElementsByClassName("row")[0].getElementsByClassName("bossStats")[0].getElementsByClassName("bossHealth")[0].textContent = "Boss Health:" + bosshealth;
    bossAttack();

    if(bosshealth <= 0) {
        document.getElementsByClassName("row")[0].getElementsByClassName("bossStats")[0].getElementsByClassName("bossHealth")[0].textContent = "You won!";
        document.getElementsByClassName("row")[0].getElementsByClassName("bossStats")[0].getElementsByClassName("bossHealth")[0].textContent = "You won!";
    }
}
function bossAttack() {
    bossDmg = Math.random() * 8
    bossDmg = Math.round(bossDmg);
    health -= bossDmg;
    document.getElementsByClassName("row")[0].getElementsByClassName("yourStats")[0].getElementsByClassName("yourHealth")[0].textContent = "Your Health:" + health;

    
    if(health <= 0) {
        document.getElementsByClassName("row")[0].getElementsByClassName("bossStats")[0].getElementsByClassName("bossHealth")[0].textContent = "You lost!";
        document.getElementsByClassName("row")[0].getElementsByClassName("yourStats")[0].getElementsByClassName("yourHealth")[0].textContent = "You lost!";
    }   
}
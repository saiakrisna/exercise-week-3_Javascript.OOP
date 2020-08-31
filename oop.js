class Enemy {
    constructor(name, speed, healthPoint, attackPoint, isDead){
        this.name = name;
        this.speed= speed;
        this.healthPoint = healthPoint;
        this.attackPoint= attackPoint;
        this.isDead = false;
     }

     attack() {
           console.log(' ${this.name} Enemy is attacking!!!');
     }

     confused() {
           console.log(' ${this.name}Lieur Effect! ');
    }
}

class Pocong extends Enemy { 
        constructor(name, speed, healthPoint, attackPoint, isDead) {
            super(name, speed, healthPoint, attackPoint, isDead);
        }
            jump(){
                this.speed += 666;
                return this.speed;
            }
            heal(){
                this.healthPoint += 69;
                return this.healthPoint;
            }
          
}



let pocongHype = new Pocong ("Pocong Hype", 666,69, 100, false);

console.log(pocongHype.jump());
console.log(pocongHype.heal());


class Zombie extends Enemy { 
    constructor(name, speed, healthPoint, attackPoint, isDead) {
        super(name, speed, healthPoint, attackPoint, isDead);
    }
        walk(){
            this.speed += 666;
            return this.speed;
        }
        running(){
            this.speed += 1000;
            return this.speed;
        }
      
}



let darkZombie = new Pocong ("Dark Zombie", 666, 1000, 100, false);

console.log(darkZombie.walk());
console.log(darkZombie.running());
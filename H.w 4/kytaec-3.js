class Warrior {

    ranking = 'Pushover';
    exp = 100;
    lvl = 1;
    achieves = [];

    level(){
        return this.lvl;
    }
    rank(){
        return this.ranking;
    }
    experience(){
        return this.exp;
    }
    achievements(){
        return this.achieves;
    }

    exp_add(add){
        if(this.exp + add >= 10000)
            this.exp = 10000;
        else
            this.exp += add;
    }

    level_rank(){
        const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage",
            "Elite", "Conqueror", "Champion", "Master", "Greatest"];

        this.lvl = Math.floor(this.exp / 100);
        this.ranking = ranks[Math.floor(this.lvl / 10)];
    }

    training(details){
        if(this.lvl < details[2])
            return "Not strong enough";

        this.exp_add(details[1]);
        this.level_rank();
        this.achieves.push(details[0]);
        return details[0];
    }

    battle(enemy_level){
        if(enemy_level < 1 || enemy_level > 100)
            return "Invalid level";

        let result;

        if(this.lvl - enemy_level >= 2)
            result = "Easy fight";
        else if(this.lvl - enemy_level === 1 || this.lvl === enemy_level)
            result = "A good fight";
        else
            result = "An intense fight";


        if(Math.floor(enemy_level / 10) > Math.floor(this.lvl / 10) && enemy_level - this.lvl >= 5)
            return "You've been defeated";

        else if(this.lvl === enemy_level)
            this.exp_add(10);

        else if(this.lvl - enemy_level === 1)
            this.exp_add(5);

        else if (enemy_level - this.lvl >= 1)
            this.exp_add(20 * (enemy_level - this.lvl) * (enemy_level - this.lvl));

        this.level_rank();

        return result;

    }
}

export function level(hero) {
    let level = '';
    if (hero.health > 50) {
        level = 'healthy';
    } if (hero.health <= 50 && hero.health >= 15) {
        level = 'wounded';
    } if (hero.health < 15) {
        level = 'critical';
    }
    return level;
    }


const dataHero = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

export const sortHero = dataHero.sort(function(a, b) {
    return b.health - a.health;
    });

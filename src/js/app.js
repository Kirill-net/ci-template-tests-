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

export function sortHero(data) {
    let result = data.sort(function(a, b) {
        return b.health - a.health;
        })
    return result;
    }

import { sortHero }  from '../app';

test('sorted Heros', () => {
    const heros = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
        ];

    expect(sortHero).toEqual(heros);

});

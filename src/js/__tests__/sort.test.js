import { sortHero }  from '../app';



test('sorted Heros', () => {
    const data = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    const heros = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
        ];

    expect(sortHero(data)).toEqual(heros);

});

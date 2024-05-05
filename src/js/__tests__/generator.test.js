import Team from '../generator';

test('Team можно перебирать, тут попробовал через spread', () => {
    const team = new Team([
        { name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10},

        { name: 'Маг',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40},

        { name: 'Мечник',
          type: 'Swordsman',
          health: 80,
          level: 1,
          attack: 10,
          defence: 40},
    ]);
    
    let characters = [...team];

    let expected = [
        { name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10},
        { name: 'Маг',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40},
        { name: 'Мечник',
          type: 'Swordsman',
          health: 80,
          level: 1,
          attack: 10,
          defence: 40},
    ];
    expect(characters).toEqual(expected);
})

test('Запрашиваю у Team следующего персонажа, только одного', () => {
  const team = new Team([
    { name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10},

    { name: 'Маг',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40},

    { name: 'Мечник',
      type: 'Swordsman',
      health: 80,
      level: 1,
      attack: 10,
      defence: 40},
]);

  expect(team.next()).toEqual({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10});
})
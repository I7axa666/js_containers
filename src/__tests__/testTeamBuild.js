import Character from '../classesForTeam';
import Team from '../teamBuildClass';

const spider = new Character('bob', 'spider');
const wolf = new Character('rob', 'wolf');
const team = new Team();

test('add person 1', () => {
  team.add(spider);
  expect(team.members.size).toBe(1);
});

test('add person 2', () => {
  team.add(wolf);
  expect(team.members.size).toBe(2);
});

test('add person whith error', () => {
  expect(() => { team.add(spider); }).toThrow(new Error('Персонаж уже в команде'));
});

test('add all persons', () => {
  team.members.clear();
  team.addAll([spider, wolf]);
  expect(team.members.size).toBe(2);
});

test('add all persons again', () => {
  team.addAll([spider, wolf]);
  expect(team.members.size).toBe(2);
});

test('team set to array', () => {
  expect(team.toArray()).toEqual([{ name: 'bob', type: 'spider' }, { name: 'rob', type: 'wolf' }]);
});

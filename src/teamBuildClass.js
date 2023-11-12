export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(person);
    }
  }

  addAll(persons) {
    persons.forEach((person) => this.members.add(person));
  }

  toArray() {
    return Array.from(this.members);
  }
}

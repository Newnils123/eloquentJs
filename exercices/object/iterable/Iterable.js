class Group {
  #members = [];

  add(member) {
    if (!this.has(member)) {
      this.#members.push(member);
    }
  }
  delete(member) {
    this.#members = this.#members.filter(v => v !== member);
  }
  has(member) {
    return this.#members.includes(member);
  }
  static from(collection) {
    let group = new Group;
    for (let member of collection) {
      group.add(member);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }
  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    }
    
    return {
      value: this.#members[this.#position++],
      done: false
    };
  }
}

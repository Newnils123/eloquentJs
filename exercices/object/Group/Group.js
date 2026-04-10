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
}

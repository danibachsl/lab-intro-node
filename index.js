class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a, b) {
      return a - b;
    });
    return this.items;
  }

  get(pos) {
    if (this.items[pos] !== undefined) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length !== 0) {
      return Mathmax(this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length !== 0) {
      return Mathmin(this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length !== 0) {
      let num = 0;
      for (let i in this.items) {
        num += i;
        return num;
      }
    } else {
      return 0;
    }
  }

  avg() {
    return (this.sum(this.items)) / this.items.length;
  }
}

module.exports = SortedList;

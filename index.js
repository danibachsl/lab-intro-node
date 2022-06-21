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
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length !== 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length !== 0) {
      return this.items.reduce((a, b) => a + b, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length !== 0) {
      return (this.sum(this.items)) / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;

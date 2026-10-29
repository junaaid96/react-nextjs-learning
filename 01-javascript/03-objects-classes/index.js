export class BankAccount {
  #balance = 0;          // truly private (not reachable from outside)
  static #count = 0;     // private static
  constructor(owner) {
    this.owner = owner;
    BankAccount.#count++;
  }
  static get count() { return BankAccount.#count; }
  get balance() { return this.#balance; }
  deposit(amount) {
    if (amount <= 0) throw new RangeError('amount must be positive');
    this.#balance += amount;
    return this;           // allow chaining
  }
  withdraw(amount) {
    if (amount > this.#balance) throw new Error('insufficient funds');
    this.#balance -= amount;
    return this;
  }
}

export class SavingsAccount extends BankAccount {
  constructor(owner, rate) { super(owner); this.rate = rate; }
  addInterest() { return this.deposit(this.balance * this.rate); }
}

// Immutable nested update without mutating the original.
export function updateCity(person, city) {
  return { ...person, address: { ...person.address, city } };
}

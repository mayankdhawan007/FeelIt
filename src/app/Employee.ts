export class Employee {

    constructor(
      public PersonId: string,
      public name: string,
      public Gender: string,
      public address: Address
    ) {  }
  
  }

  export class Address {

    constructor(
      public city: string,
      public State: string
    ) {  }
  
  }

  export class Country {

    constructor(
      public value: string,
      public selection: boolean
    ) {  }
  
  }
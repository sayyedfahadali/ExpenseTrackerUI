export class Category {

  name: String | undefined;
  id: number | undefined;

  // Constructor to initialize the properties
  constructor(name: String, id: number) {
    this.name = name;
    this.id = id;
  }

  getName(): String | undefined {
    return this.name;
  }

  getId(): number | undefined {
    return this.id;
  }
  
}
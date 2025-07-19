// | Acronym | Principle Name                  | Description                                                                  |
// | ------- | ------------------------------- | ---------------------------------------------------------------------------- |
// | **S**   | Single Responsibility Principle | A class should have only one reason to change.                               |
// | **O**   | Open/Closed Principle           | Software entities should be open for extension, but closed for modification. |
// | **L**   | Liskov Substitution Principle   | Subtypes must be substitutable for their base types.                         |
// | **I**   | Interface Segregation Principle | Don't force a class to implement interfaces it doesn’t use.                  |
// | **D**   | Dependency Inversion Principle  | Depend on abstractions, not concretions.                                     |

// 🔍 1. Single Responsibility Principle (SRP)
// Definition: A class should have one and only one reason to change.

// ✅ Example: A class should have only one reason to change.
// If a class has multiple responsibilities, it can lead to code that is hard to maintain and difficult to test.
// It also makes it harder to understand the purpose and behavior of the class.

// ❌ Bad: Too many responsibilities
class User {
  saveToDatabase() {}
  generateReport() {}
  sendEmail() {}
}

// ✅ Good: Split responsibilities
class UserData {
  saveToDatabase() {}
}

class ReportGenerator {
  generateReport() {}
}

class EmailSender {
  sendEmail() {}
}

// 🔍 2. Open/Closed Principle (OCP)
// Definition: Code should be open for extension but closed for modification.

// Example:
// ❌ Bad: Adding new shape breaks the class
class AreaCalculator {
  calculate(shape) {
    if (shape.type === "circle") return Math.PI * shape.radius ** 2;
    if (shape.type === "square") return shape.length * shape.length;
  }
}

// ✅ Good: Use polymorphism to extend
class Shape {
  getArea() {}
}

class Circle extends Shape {
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  getArea() {
    return this.length ** 2;
  }
}

// 🔍 3. Liskov Substitution Principle (LSP)
// Definition: Subclasses should be replaceable for their parent classes without breaking the application.

// Example:
class Bird {
  fly() {}
}

class Duck extends Bird {} // ✅ Ok
class Ostrich extends Bird {
  fly() {
    throw new Error("Can't fly");
  } // ❌ Violates LSP
}

// 🔍 4. Interface Segregation Principle (ISP)
// Definition: Prefer many small interfaces over one large interface.

// Example (in TypeScript):
// ❌ Bad: Interface has too many methods
// interface Worker {
//   work(): void;
//   eat(): void;
// }

// ✅ Good: Split interfaces
// interface Workable {
//   work(): void;
// }

// interface Eatable {
//   eat(): void;
// }

// class Human implements Workable, Eatable {}
// class Robot implements Workable {} // Robot doesn’t need eat()

// 🔍 5. Dependency Inversion Principle (DIP)
// Definition: High-level modules should not depend on low-level modules; both should depend on abstractions.

// Example:
// ❌ Bad: High-level depends directly on low-level
class MySQLDatabase {
  save() {}
}
class UserService {
  db = new MySQLDatabase(); // tightly coupled
}

// ✅ Good: Use abstraction
// interface Database {
//   save(): void;
// }
// class MySQLDatabase implements Database {
//   save() {}
// }
// class UserService {
//   constructor(private db: Database) {}
// }

// 🎯 Why SOLID?
// Makes code easier to understand

// Enhances reusability and testability

// Simplifies debugging and future updates

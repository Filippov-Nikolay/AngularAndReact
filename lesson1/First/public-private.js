var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
        this.company = "Step";
    }
    Employee.prototype.printToConsole = function () {
        console.log("Employee ".concat(this.name, ", position - ").concat(this.position, ", company - ").concat(this.company));
    };
    return Employee;
}());
var emp1 = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
//emp1.company = "..."; // [ts] Property 'company' is private and only accessible within class 'Employee'
emp1.printToConsole();

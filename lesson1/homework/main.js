var Student = /** @class */ (function () {
    function Student(name, lastName, dateOfBirth, phoneNumber, city, country, nameInstitution, groupNumber) {
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.country = country;
        this.nameInstitution = nameInstitution;
        this.groupNumber = groupNumber;
    }
    Student.prototype.inputInfoStudent = function () {
    };
    Student.prototype.printInfoStudent = function () {
        console.log("Name: ".concat(this.name));
        console.log("LastName: ".concat(this.lastName));
        console.log("Date of birth: ".concat(this.dateOfBirth));
        console.log("Phone number: ".concat(this.phoneNumber));
        console.log("City: ".concat(this.city));
        console.log("Country: ".concat(this.country));
        console.log("Name institution: ".concat(this.nameInstitution));
        console.log("Group number: ".concat(this.groupNumber));
    };
    Object.defineProperty(Student.prototype, "GetName", {
        get: function () { return this.name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetLastName", {
        get: function () { return this.lastName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetDateOfBirth", {
        get: function () { return this.dateOfBirth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetPhoneNumber", {
        get: function () { return this.phoneNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetCity", {
        get: function () { return this.city; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetCountry", {
        get: function () { return this.country; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetNameInstitution", {
        get: function () { return this.nameInstitution; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "GetGroupNumber", {
        get: function () { return this.groupNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetName", {
        set: function (name) {
            if (name != ' ')
                this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetLastName", {
        set: function (lastName) {
            if (lastName != ' ')
                this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetDateOfBirth", {
        set: function (dateOfBirth) {
            if (dateOfBirth != ' ')
                this.dateOfBirth = dateOfBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetPhoneNumber", {
        set: function (phoneNumber) {
            if (phoneNumber != 0)
                this.phoneNumber = phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetCity", {
        set: function (city) {
            if (city != ' ')
                this.city = city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetCountry", {
        set: function (country) {
            if (country != ' ')
                this.country = country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetNameInstitution", {
        set: function (nameInstitution) {
            if (nameInstitution != ' ')
                this.nameInstitution = nameInstitution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "SetGroupNumber", {
        set: function (groupNumber) {
            if (groupNumber != 0)
                this.groupNumber = groupNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Students = [];
Students.push(new Student('Nikolay', 'Filippov', '27.10.2004', 38098056970, 'Одесса', 'UK', 'ITStep', 221));
Students.push(new Student('Alex', 'Ivanov', '10.01.2005', 987654321, 'Одесса', 'USA', 'ITStep', 222));
Students.push(new Student('John', 'Doe', '05.03.2000', 111111111, 'New York', 'USA', 'Harvard', 101));
Students.push(new Student('Emily', 'Smith', '15.07.2002', 222222222, 'Los Angeles', 'USA', 'Stanford', 202));
Students.push(new Student('Maria', 'Garcia', '20.09.1999', 333333333, 'Chicago', 'USA', 'MIT', 303));
var table = document.querySelector('.table');
for (var i = 0; i < Students.length; i++) {
    table.innerHTML += "<tr><td>".concat(Students[i].GetName, "</td><td>").concat(Students[i].GetLastName, "</td><td>").concat(Students[i].GetDateOfBirth, "</td><td>").concat(Students[i].GetPhoneNumber, "</td><td>").concat(Students[i].GetCity, "</td><td>").concat(Students[i].GetCountry, "</td><td>").concat(Students[i].GetNameInstitution, "</td><td>").concat(Students[i].GetGroupNumber, "</td></tr>");
}

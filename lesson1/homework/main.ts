class Student {
    private name: string;
    private lastName: string;
    private dateOfBirth: string;
    private phoneNumber: number;
    private city: string;
    private country: string;
    private nameInstitution: string;
    private groupNumber: number;

    public constructor(name: string, lastName: string, dateOfBirth: string, phoneNumber: number, city: string, 
                country: string, nameInstitution: string, groupNumber: number
    ) {
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.country = country;
        this.nameInstitution = nameInstitution;
        this.groupNumber = groupNumber;
    }

    public inputInfoStudent() {

    }

    public printInfoStudent() {
        console.log(`Name: ${this.name}`);
        console.log(`LastName: ${this.lastName}`);
        console.log(`Date of birth: ${this.dateOfBirth}`);
        console.log(`Phone number: ${this.phoneNumber}`);
        console.log(`City: ${this.city}`);
        console.log(`Country: ${this.country}`);
        console.log(`Name institution: ${this.nameInstitution}`);
        console.log(`Group number: ${this.groupNumber}`);
    }

    get GetName(): string { return this.name; }
    get GetLastName(): string { return this.lastName; }
    get GetDateOfBirth(): string { return this.dateOfBirth; }
    get GetPhoneNumber(): number { return this.phoneNumber; }
    get GetCity(): string { return this.city; }
    get GetCountry(): string { return this.country; }
    get GetNameInstitution():string { return this.nameInstitution; }
    get GetGroupNumber(): number { return this.groupNumber; }

    set SetName(name: string) {
        if (name != ' ')
            this.name = name;
    }
    set SetLastName(lastName: string) {
        if (lastName != ' ')
            this.lastName = lastName; 
    }
    set SetDateOfBirth(dateOfBirth: string) {
        if (dateOfBirth != ' ')
            this.dateOfBirth = dateOfBirth; 
    }
    set SetPhoneNumber(phoneNumber: number) { 
        if (phoneNumber != 0)
            this.phoneNumber = phoneNumber; 
    }
    set SetCity(city: string) { 
        if (city != ' ')
            this.city = city; 
    }
    set SetCountry(country: string) {
        if (country != ' ')
            this.country = country; 
    }
    set SetNameInstitution(nameInstitution: string) {
        if (nameInstitution != ' ')
            this.nameInstitution = nameInstitution;
    }
    set SetGroupNumber(groupNumber: number) {
        if (groupNumber != 0)
            this.groupNumber = groupNumber; 
    }
}

let Students: Student[] = [];
Students.push(new Student('Nikolay', 'Filippov', '27.10.2004', 38098056970, 'Одесса', 'UK', 'ITStep', 221))
Students.push(new Student('Alex', 'Ivanov', '10.01.2005', 987654321, 'Одесса', 'USA', 'ITStep', 222));
Students.push(new Student('John', 'Doe', '05.03.2000', 111111111, 'New York', 'USA', 'Harvard', 101));
Students.push(new Student('Emily', 'Smith', '15.07.2002', 222222222, 'Los Angeles', 'USA', 'Stanford', 202));
Students.push(new Student('Maria', 'Garcia', '20.09.1999', 333333333, 'Chicago', 'USA', 'MIT', 303));

let table: HTMLTableElement  = document.querySelector('.table') as HTMLTableElement;
for (let i: number = 0; i < Students.length; i++) {
    table.innerHTML += `<tr><td>${Students[i].GetName}</td><td>${Students[i].GetLastName}</td><td>${Students[i].GetDateOfBirth}</td><td>${Students[i].GetPhoneNumber}</td><td>${Students[i].GetCity}</td><td>${Students[i].GetCountry}</td><td>${Students[i].GetNameInstitution}</td><td>${Students[i].GetGroupNumber}</td></tr>`;
}


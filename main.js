class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(value) {
      if (typeof value === "string") {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      } else {
        this._numberOfStudents = value;
      }
    }
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`
      );
    }
    static pickSubstituteTeachers(substituteTeachers) {
      let randNumber = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randNumber];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeam() {
      return this._sportsTeams;
    }
  }
  
  //primaryschool instance
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  lorraineHansbury.quickFacts();
  const sub = School.pickSubstituteTeachers([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ]);
  console.log(`${sub} will be your sub teach`)
  //highschool instance
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith._sportsTeams);
  
  //middleschool instance
  class MiddleSchool extends School {
    constructor(name,numberOfStudents) {
  
    }
  }
  
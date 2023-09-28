class HolbertonCourse {
  constructor(name, length, students) {
    this._name = "";
    this._length = 0;
    this._students = [];

    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      throw new TypeError("Name must be a string");
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    if (typeof newLength === "number") {
      this._length = newLength;
    } else {
      throw new TypeError("Length must be a number");
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    if (
      Array.isArray(newStudents) &&
      newStudents.every((student) => typeof student === "string")
    ) {
      this._students = newStudents;
    } else {
      throw new TypeError("Students must be an array of strings");
    }
  }
}

export default HolbertonCourse;

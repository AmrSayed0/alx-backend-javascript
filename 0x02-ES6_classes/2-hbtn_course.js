export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      throw new Error("Invalid data type. Name must be a string.");
    }
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === "number") {
      this._length = newLength;
    } else {
      throw new Error("Invalid data type. Length must be a number.");
    }
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error("Invalid data type. Students must be an array.");
    }
  }
}

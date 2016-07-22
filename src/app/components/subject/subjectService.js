export default class SubjectService {
  constructor() {
    this.subjects = [{
      id: 1,
      name: 'Geometry'
    }];
  }

  getAll() {
    return this.subjects;
  }

  getById(id) {
    let subject = this.subjects.filter((item) => item.id == id)[0];
    return subject;
  }

  add(subject) {
    this.subjects.push(subject);

    return subject;
  }

  update(subject) {
    return {
      id: 1,
      name: 'Biology'
    };
  }
}

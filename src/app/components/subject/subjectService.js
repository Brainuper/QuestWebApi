import {Subject} from 'models';

export default class SubjectService {
  constructor() {
    this.Model = Subject;
  }

  getAll() {
    return this
      .Model
      .findAll();
  }

  getById(id) {
    return this
      .Model
      .findById(id);
  }

  add(subject) {
    return this
      .Model
      .create(subject);
  }

  update(id, subject) {
    return this
      .Model
      .update(subject, {
        where: {
          id: id
        }
      });
  }

  remove(id) {
    return this
      .Model
      .destroy({
        where: {
          id: id
        }
      });
  }
}

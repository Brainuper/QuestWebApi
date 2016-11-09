import {Subject} from 'models';

export default class SubjectService {
  constructor() {}

  getAll() {
    return Subject.find();
  }

  getById(id) {
    return Subject.findById(id);
  }

  add(subject) {
    let instance = new Subject(subject);
    let promise = instance.save();
    return promise;
  }

  update(id, subject) {
    let promise = Subject.findById(id);
    
    promise.then((doc) => {
      if (doc) {
        let mergeDoc = Object.assign(doc, subject);
        doc = mergeDoc.save();
      }
      return doc;
    });

    return promise;
  }

  remove(id) {
    let promise = Subject.findOneAndRemove(id);
    return promise;
  }
}

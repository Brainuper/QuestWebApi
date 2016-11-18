import {Quest} from 'models';

export default class QuestService {
  constructor() {}

  getAll() {
    let promise = Quest
      .find()
      .populate('subjects')
      .exec();
    return promise;
  }

  getById(id) {
    let promise = Quest.findById(id);
    return promise;
  }

  add(quest) {
    let instance = new Quest(quest);
    let promise = instance.save();
    return promise;
  }

  update(id, quest) {
    let promise = Quest.findById(id);

    promise.then((doc) => {
      if (doc) {
        let mergeDoc = Object.assign(doc, quest);
        return mergeDoc.save();
      }
      return doc;
    });

    return promise;
  }

  remove(id) {
    let promise = Quest.findOneAndRemove(id);
    return promise;
  }
}

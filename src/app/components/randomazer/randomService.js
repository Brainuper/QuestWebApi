import {Quest} from 'models';

export default class RandomService {
  constructor() {}

  get(subject) {
    let param = {};

    if (subject) {
      param = {
        'subjects': subject
      };
    }

    let promise = Quest
      .count(param)
      .exec()
      .then((count) => {
        let rand = Math.floor(Math.random() * count);
        return Quest
          .findOne()
          .skip(rand);
      });

    return promise;

  }
}

import {Quest, Subject} from '../../models';

export default class QuestService {
  constructor() {
    this.Model = Quest;
  }

  getAll() {
    return this.Model.findAll({
      include: [Subject]
    });
  }

  getById(id) {
    return this.Model.findById(id);
  }

  add(quest) {
    // return this.Model.sync().then(() => {
      return this.Model.create(quest, {
        include: [Subject]
      });
    // })
  }

  update(id, quest) {
    return this.Model.update(quest, {
      where: {
        id: id
      }
    });
  }

  remove(id) {
    return this.Model.destroy({
      where: {
        id: id
      }
    });
  }
};

import QuestService from './questService';
// import SubjectService from '../subject/subjectService';

export default class QuestController {
  constructor() {
    this.questService = new QuestService();
    // this.subjectService = new SubjectService();
  }

  getAll() {
    return (req, res) => {
      this.questService.getAll().then((data) => {
        res.json(data);
      });

    }
  }

  getById() {
    return (req, res) => {
      this.questService.getById(req.params.id).then((data) => {
        res.json(data);
      });
    }
  }

  add() {
    return (req, res) => {
      let createQuest = req.body;
      this.questService.add(createQuest).then((data) => {
        res.status(201).json(data);
      });
    }
  }

  edit() {
    return (req, res) => {
      let editQuest = req.body;
      let id = req.params.id;
      this.questService.update(id, editQuest).then((data) => {
        res.json(data);
      });
    }
  }

  delete() {
    return (req, res) => {
      this.questService.remove(req.params.id).then((data) => {
        res.json(data);
      })
    }
  }
};

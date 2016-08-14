import QuestService from './questService';

export default class QuestController {
  constructor() {
    this.questService = new QuestService();
  }

  getAll() {
    return (req, res) => {
      this.questService.getAll().then((data) => {
        res.json(data);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });

    }
  }

  getById() {
    return (req, res) => {
      this.questService.getById(req.params.id).then((data) => {
        res.json(data);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  }

  add() {
    return (req, res) => {
      let createQuest = req.body;
      this.questService.add(createQuest).then((data) => {
        res.status(201).json(data);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  }

  edit() {
    return (req, res) => {
      let editQuest = req.body;
      let id = req.params.id;
      this.questService.update(id, editQuest).then((data) => {
        res.json(data);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  }

  delete() {
    return (req, res) => {
      this.questService.remove(req.params.id).then((data) => {
        res.json(data);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  }
};

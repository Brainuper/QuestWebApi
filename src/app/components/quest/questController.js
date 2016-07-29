import QuestService from './questService';

export default class QuestController {
  constructor() {
    this.questService = new QuestService();
  }

  getAll() {
    return (req, res) => {
      let quests = this.questService.getAll();
      res.json(quests);
    }
  }

  getById() {
    return (req, res) => {
      let quest = this.questService.getById(req.params.id);
      res.json(quest);
    }
  }

  add() {
    return (req, res) => {
      let createQuest = req.body;
      createQuest = this.questService.add(createQuest);
      res.status(201).json(createQuest);
    }
  }

  edit() {
    return (req, res) => {
      let editQuest = req.body;
      editQuest.id = req.params.id;
      editQuest = this.questService.update(editQuest);
      res.json(editQuest);
    }
  }
};

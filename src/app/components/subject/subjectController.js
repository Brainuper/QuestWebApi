import SubjectService from './subjectService';

export default class SubjectController {
  constructor() {
    this.subjectService = new SubjectService();
  }

  getAll() {
    return (req, res) => {
      this.subjectService.getAll().then((data) => {
        res.json(data);
      });
    }
  }

  getById() {
    return (req, res) => {
      this.subjectService.getById(req.params.id).then((data) => {
        res.json(data);
      });
    }
  }

  add() {
    return (req, res) => {
      let createSubject = req.body;
      this.subjectService.add(createSubject).then((data) => {
        res.status(201).json(data);
      });
    }
  }

  edit() {
    return (req, res) => {
      let editSubject = req.body;
      let id = req.params.id;
      this.subjectService.update(id, editSubject).then((data) => {
        res.json(data);
      });
    }
  }

  delete() {
    return (req, res) => {
      let deleted = this.subjectService.remove(req.params.id).then((data) => {
        res.status(200).json(data);
      });
    }
  }
};

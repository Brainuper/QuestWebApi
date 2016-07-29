import SubjectService from './subjectService';

export default class SubjectController {
  constructor() {
    this.subjectService = new SubjectService();
  }

  getAll() {
    return (req, res) => {
      let subjects = this.subjectService.getAll();
      res.json(subjects);
    }
  }

  getById() {
    return (req, res) => {
      let subject = this.subjectService.getById(req.params.id);
      res.json(subject);
    }
  }

  add() {
    return (req, res) => {
      let createSubject = req.body;
      createSubject = this.subjectService.add(createSubject);
      res.status(201).json(createSubject);
    }
  }

  edit() {
    return (req, res) => {
      let editSubject = req.body;
      editSubject.id = req.params.id;
      editSubject = this.subjectService.update(editSubject);
      res.json(editSubject);
    }
  }
};

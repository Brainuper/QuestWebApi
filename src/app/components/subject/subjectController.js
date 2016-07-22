import {Router} from 'express';
import SubjectService from './subjectService';

export default function() {
  var subjectController = Router();
  var subjectService = new SubjectService();
  subjectController.route('/:id')
    .get((req, res) => {
      let subject = subjectService.getById(req.params.id);
      res.json(subject);
    })
    .put((req, res) => {
      let editSubject = req.body;
      editSubject.id = req.params.id;
      editSubject = subjectService.update(editSubject);
      res.json(editSubject);
    });

  subjectController.route('/')
    .get((req, res) => {
      let subjects = subjectService.getAll();
      res.json(subjects);
    })
    .post((req, res) => {
      let createSubject = req.body;
      createSubject = subjectService.add(createSubject);
      res.status(201).json(createSubject);
    });

  return subjectController;
};

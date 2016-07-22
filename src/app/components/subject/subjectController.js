import {Router} from 'express';
export default function() {
  var subjectController = Router();

  subjectController.route('/:id')
    .get((req, res) => {
      let subject = new Object();
      subject.id = req.params.id;
      res.json(subject);
    })
    .put((req, res) => {
      let subjectEdit = req.body;
      subjectEdit.id = req.params.id;
      res.json(subjectEdit);
    });

  subjectController.route('/')
    .get((req, res) => {
      let subjects = [{
        id: 1,
        name: 'Geometry'
      }];
      res.json(subjects);
    })
    .post((req, res) => {
      let subjectAdd = req.body;
      res.status(201).json(subjectAdd);
    });

  return subjectController;
};

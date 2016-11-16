import SubjectService from './subjectService';
import logger from 'logger';

export default class SubjectController {
  constructor() {
    this.subjectService = new SubjectService();
  }

  getAll() {
    return (req, res) => {
      this
        .subjectService
        .getAll()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          logger.error(err);
          res.sendStatus(500);
        });
    };
  }

  getById() {
    return (req, res) => {
      this
        .subjectService
        .getById(req.params.id)
        .then((data) => {
          if (data) {
            res.json(data);
          } else {
            res.sendStatus(404);
          }
        })
        .catch((err) => {
          logger.error(err);
          res.sendStatus(500);
        });
    };
  }

  add() {
    return (req, res) => {
      let createSubject = req.body;
      this
        .subjectService
        .add(createSubject)
        .then((doc) => {
          res
            .status(201)
            .json(doc);
        })
        .catch((err) => {
          logger.error(err);
          res.sendStatus(500);
        });
    };
  }

  edit() {
    return (req, res) => {
      let editSubject = req.body;
      let id = req.params.id;
      this
        .subjectService
        .update(id, editSubject)
        .then((data) => {
          if (data) {
            res.json(data);
          } else {
            res.sendStatus(404);
          }
        })
        .catch((err) => {
          logger.error(err);
          res.sendStatus(500);
        });
    };
  }

  delete() {
    return (req, res) => {
      this
        .subjectService
        .remove(req.params.id)
        .then((data) => {
          if (data) {
            res.json(data);
          } else {
            res.sendStatus(404);
          }
        })
        .catch((err) => {
          logger.error(err);
          res.sendStatus(500);
        });
    };
  }
}

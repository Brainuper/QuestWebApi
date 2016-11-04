import {Router} from 'express';
import SubjectController from './subjectController';

var subjectRouter = function() {
  var router = Router();
  var controller = new SubjectController();

  router.route('/')
    .get(controller.getAll())
    .post(controller.add());

  router.route('/:id')
    .get(controller.getById())
    .put(controller.edit());
  return router;
};

export default subjectRouter;

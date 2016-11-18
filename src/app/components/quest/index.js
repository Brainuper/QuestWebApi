import {Router} from 'express';
import QuestController from './questController';

export default function () {
  var router = Router();
  var controller = new QuestController();

  router.route('/')
    .get(controller.getAll())
    .post(controller.add());

  router.route('/:id')
    .get(controller.getById())
    .put(controller.edit())
    .delete(controller.delete());
  return router;
}

import {Router} from 'express';
import RandomController from './randomController';

export default function() {
  var router = Router();
  var controller = new RandomController();

  router
    .route('/')
    .get(controller.get());

  return router;
}

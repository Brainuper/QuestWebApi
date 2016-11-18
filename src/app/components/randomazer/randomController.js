import RandomService from './randomService';

export default class RandomController {
  constructor() {
    this.randomService = new RandomService();
  }

  get() {
    return (req, res) => {
      const {subject} = req.query;
      this
        .randomService
        .get(subject)
        .then((data) => {
          res.json(data);
        });
    };
  }
}

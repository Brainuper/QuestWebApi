import sinon from 'sinon';
import request from 'supertest';

import finish from '../helpers/finish';
import app from '../helpers/appMock';

import router from '../../src/app/components/quest';
import QuestService from '../../src/app/components/quest/questService';

describe("Api quest", () => {
  addRouteApp('/api/quests', router());
  stubQuestService();

  it("Get /api/quests", (done) => {

    var quests = [{
      id: 1,
      text: '2 * 2 + 2 = ?'
    }];

    request(app)
      .get('/api/quests')
      .expect(200, quests, finish(done));
  });

  it("Get /api/quests/1", (done) => {
    var quest = {
      id: 1,
      text: '2 * 2 + 2 = ?'
    };
    request(app)
      .get('/api/quests/1')
      .expect(200, quest, finish(done));
  });

  it("Post /api/quests", (done) => {
    var quest = {
      id: 1,
      text: '2 * 2 + 2 = ?'
    };

    request(app)
      .post('/api/quests')
      .send(quest)
      .expect(201, quest, finish(done));
  });

  it("Put /api/quests/1", (done) => {
    var quest = {
      text: '2 * 2 + 2 = ?'
    };

    var editQuest = {
      id: 1,
      text: '2 * 2 + 2 = ?'
    };

    request(app)
      .put('/api/quests/1')
      .send(quest)
      .expect(200, editQuest, finish(done));
  });
});

function addRouteApp(url, route) {
  app.use(url, route);
}

function stubQuestService() {
  sinon.stub(QuestService.prototype, 'getAll', () => {
    return [{
      id: 1,
      text: '2 * 2 + 2 = ?'
    }]
  });
  sinon.stub(QuestService.prototype, 'getById', () => {
    return {
      id: 1,
      text: '2 * 2 + 2 = ?'
    }
  });
  sinon.stub(QuestService.prototype, 'add', () => {
    return {
      id: 1,
      text: '2 * 2 + 2 = ?'
    }
  });
  sinon.stub(QuestService.prototype, 'update', () => {
    return {
      id: 1,
      text: '2 * 2 + 2 = ?'
    }
  });
}

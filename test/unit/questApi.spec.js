import sinon from 'sinon';
import request from 'supertest';

import finish from '../helpers/finish';
import app from '../helpers/appMock';

import router from '../../src/app/components/quest';
import QuestService from '../../src/app/components/quest/questService';

describe('Testing api quest', () => {
  var stub;

  addRouteApp('/api/quests', router());

  afterEach(() => {
    stub.restore();
  });

  it('Get /api/quests', (done) => {
    stub = sinon.stub(QuestService.prototype, 'getAll', () => {
      return Promise.resolve([{
        id: 1,
        text: '2 + 2 * 2 = ?',
        option: ['2', '4', '6', '8'],
        answer: 2,
        subject: {
          id: 1,
          text: 'Математика'
        }
      }]);
    });

    let expectQuest = [{
      id: 1,
      text: '2 + 2 * 2 = ?',
      option: ['2', '4', '6', '8'],
      answer: 2,
      subject: {
        id: 1,
        text: 'Математика'
      }
    }];

    request(app)
      .get('/api/quests')
      .expect(200, expectQuest, finish(done));
  });

  it('Get /api/quests/1', (done) => {
    stub = sinon.stub(QuestService.prototype, 'getById', () => {
      return Promise.resolve({
        id: 1,
        text: '2 + 2 * 2 = ?',
        option: ['2', '4', '6', '8'],
        answer: 2,
        subject: {
          id: 1,
          text: 'Математика'
        }
      });
    });

    let expectQuest = {
      id: 1,
      text: '2 + 2 * 2 = ?',
      option: ['2', '4', '6', '8'],
      answer: 2,
      subject: {
        id: 1,
        text: 'Математика'
      }
    };

    request(app)
      .get('/api/quests/1')
      .expect(200, expectQuest, finish(done));
  });

  it('Post /api/quests', (done) => {
    stub = sinon.stub(QuestService.prototype, 'add', (quest) => {
      quest.id = 1;
      quest.subject = {
        id: quest.subjectId,
        text: 'Математика'
      };
      delete quest.subjectId;
      return Promise.resolve(quest);
    });

    var postQuest = {
      text: '2 + 2 * 2 = ?',
      option: ['2', '4', '6', '8'],
      answer: 2,
      subjectId: 1
    };

    let expectQuest = {
      id: 1,
      text: '2 + 2 * 2 = ?',
      option: ['2', '4', '6', '8'],
      answer: 2,
      subject: {
        id: 1,
        text: 'Математика'
      }
    };

    request(app)
      .post('/api/quests')
      .send(postQuest)
      .expect(201, expectQuest, finish(done));
  });

  it('Put /api/quests/1', (done) => {
    stub = sinon.stub(QuestService.prototype, 'update', () => {
      return Promise.resolve({
        id: 1,
        text: 'Дано выражение x = 2 + 2 * 2. Чему равна x?',
        option: ['2', '4', '6', '8'],
        answer: 2,
        subject: {
          id: 1,
          text: 'Математика'
        }
      })
    });

    let putQuest = {
      text: 'Дано выражение x = 2 + 2 * 2. Чему равна x?'
    };

    let expectQuest = {
      id: 1,
      text: 'Дано выражение x = 2 + 2 * 2. Чему равна x?',
      option: ['2', '4', '6', '8'],
      answer: 2,
      subject: {
        id: 1,
        text: 'Математика'
      }
    };

    request(app)
      .put('/api/quests/1')
      .send(putQuest)
      .expect(200, expectQuest, finish(done));
  });
});

function addRouteApp(url, route) {
  app.use(url, route);
}

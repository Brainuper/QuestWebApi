import sinon from 'sinon';
import request from 'supertest';

import finish from '../helpers/finish';
import app from '../helpers/appMock';

import SubjectService from '../../src/app/components/subject/subjectService';
import router from '../../src/app/components/subject';


describe("Api subjects.", () => {

  addRouteApp('/api/subjects', router());

  stubSubjectService();

  it("Get /api/subjects", (done) => {

    var subjects = [{
      id: 1,
      name: 'Geometry'
    }];

    request(app)
      .get('/api/subjects')
      .expect(200, subjects, finish(done));
  });

  it("Get /api/subjects/1", (done) => {
    var subject = {
      id: 1,
      name: 'Geometry'
    };
    request(app)
      .get('/api/subjects/1')
      .expect(200, subject, finish(done));
  });

  it("Post /api/subjects", (done) => {
    var subject = {
      id: 1,
      name: 'Geometry'
    };

    request(app)
      .post('/api/subjects')
      .send(subject)
      .expect(201, subject, finish(done));
  });

  it("Put /api/subjects/1", (done) => {
    var subject = {
      name: 'Biology'
    };

    var editSubject = {
      id: 1,
      name: 'Biology'
    };

    request(app)
      .put('/api/subjects/1')
      .send(subject)
      .expect(200, editSubject, finish(done));
  });
})

function addRouteApp(url, route) {
  app.use(url, route);
}

function stubSubjectService() {
  sinon.stub(SubjectService.prototype, 'getAll', () => {
    return [{
      id: 1,
      name: 'Geometry'
    }]
  });
  sinon.stub(SubjectService.prototype, 'getById', () => {
    return {
      id: 1,
      name: 'Geometry'
    }
  });
  sinon.stub(SubjectService.prototype, 'add', () => {
    return {
      id: 1,
      name: 'Geometry'
    }
  });
  sinon.stub(SubjectService.prototype, 'update', () => {
    return {
      id: 1,
      name: 'Biology'
    }
  });
}

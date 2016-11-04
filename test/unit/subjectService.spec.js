import SubjectService from 'components/subject/subjectService';

xdescribe('Testing subject service', () => {
  var subjectService = new SubjectService();
  var subject;

  it('Add subject', (done) => {
    var luke = {
      text: 'Luke Skywalker'
    };
    subjectService
      .add(luke)
      .then((data) => {
        subject = data;
        expect(data.get('text')).toBe('Luke Skywalker');
        done();
      });
  });

  it('Get Luke Skywalker', (done) => {
    subjectService
      .getById(subject.get('id'))
      .then((data) => {
        expect(data.get('text')).toBe('Luke Skywalker');
        done();
      });
  });

  it('Remove Luke Skywalker', (done) => {
    subjectService
      .remove(subject.get('id'))
      .then((data) => {
        expect(data).toBe(1);
        done();
      });
  });
});

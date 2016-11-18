import QuestService from 'components/quest/questService';

xdescribe('Testing quest service', () => {
  var questService = new QuestService();
  var quest;

  it('Add quest with new ', (done) => {
    let questCreate = {
      text: '2 + 2 * 2 = ?',
      option: [
        '2', '4', '6', '8'
      ],
      answer: 2,
      subjectId: 15
    };
    questService
      .add(questCreate)
      .then((data) => {
        quest = data;
        expect(data.get('text')).toBe('2 + 2 * 2 = ?');
        expect(data.get('option')).toEqual(['2', '4', '6', '8']);
        expect(data.get('answer')).toBe(2);
        done();
      })
      .catch((err) => {
        console.log(err);
        done.fail(err);
      });
  });

  it('Get quest', (done) => {
    questService
      .getById(quest.get('id'))
      .then((data) => {
        expect(data.get('text')).toBe('2 + 2 * 2 = ?');
        expect(data.get('option')).toEqual(['2', '4', '6', '8']);
        expect(data.get('answer')).toBe(2);
        done();
      });
  });

  it('Remove quest', (done) => {
    questService
      .remove(quest.get('id'))
      .then((data) => {
        expect(data).toBe(1);
        done();
      });
  });
});

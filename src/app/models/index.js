import Subject from './subject';
import Quest from './quest';

Subject.hasMany(Quest);
Quest.belongsTo(Subject);

export {Subject, Quest};

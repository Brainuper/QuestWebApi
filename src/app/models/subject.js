import mongoose, {Schema} from 'mongoose';

const {Types: {
    ObjectId
  }} = Schema;

const model = {
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
};

const SubjectSchema = new Schema(model);

SubjectSchema.pre('save', function(next) {
  let self = this;
  let date = Date.now();
  if (self.updateAt < date) {
    self.updateAt = date;
  }
  return next();
});

const Subject = mongoose.model('Subject', SubjectSchema);

export {Subject, SubjectSchema};

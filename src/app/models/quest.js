import mongoose, {Schema} from 'mongoose';

const {
  Types: {
    ObjectId,
    Mixed
  }
} = Schema;

const model = {
  id: ObjectId,
  body: Mixed,
  option: [String],
  answer: String,
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  subjects: [
    {
      type: ObjectId,
      ref: 'Subject'
    }
  ]
};

const QuestSchema = new Schema(model);

QuestSchema.pre('save', function(next) {
  let self = this;
  let date = Date.now();
  if (self.updateAt < date) {
    self.updateAt = date;
  }
  return next();
});

const Quest = mongoose.model('Quest', QuestSchema);

export {Quest, QuestSchema};

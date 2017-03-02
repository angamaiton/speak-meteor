import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Languages from './languages';
import rateLimit from '../../modules/rate-limit';

export const upsertLanguage = new ValidatedMethod({
  name: 'languages.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String, optional: true },
    description: { type: String, optional: true },
    ancestorLanguage: { type: String, optional: true },
  }).validator(),
  run(language) {
    return Languages.upsert({ _id: language._id }, { $set: language });
  },
});

rateLimit({
  methods: [
    upsertLanguage,
  ],
  limit: 5,
  timeRange: 1000,
});


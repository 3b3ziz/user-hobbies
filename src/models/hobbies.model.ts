import { model, Schema, Document } from 'mongoose';
import { Hobby } from '@interfaces/hobbies.interface';
import { PASSION_LEVELS } from '@/utils/constansts';

const hobbySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  passionLevel: {
    type: String,
    enum: PASSION_LEVELS,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
});

const hobbyModel = model<Hobby & Document>('Hobby', hobbySchema);

export default hobbyModel;

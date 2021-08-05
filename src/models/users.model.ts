import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hobbies: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Hobby' }],
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;

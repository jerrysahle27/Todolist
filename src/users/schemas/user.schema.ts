import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  _id: string;
  @Prop({ required: true })
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  age: number;
  @Prop()
  address: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  gender: string;
  @Prop()
  username: string;
  @Prop()
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

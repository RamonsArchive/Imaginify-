import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";
// clerkId, email, firstName, lastName, photo, planId, creditBalance 


export interface IUser {
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    photo: URL;
    planId: string;
    creditBalance: number;
  }
  
const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: URL, required: true},
    planId: {type: String, required: true},
    creditBalance: {type: Number, required: true},
})

const User = models?.User || model('User', UserSchema);
export default User;
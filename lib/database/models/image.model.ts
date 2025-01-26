import { Schema, model, models } from "mongoose";

import { Types } from "mongoose";

export interface IImage extends Document{
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: Record<string, unknown>;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date; // Optional because default values might be added by Mongoose
  updatedAt?: Date; // Optional because default values might be added by Mongoose
}


const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: String, required: true},
    width: {type: Number, required: false},
    height: {type: Number, required: false},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
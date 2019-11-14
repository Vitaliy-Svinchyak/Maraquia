import { BaseModel } from './BaseModel';
import { Maraquia } from './Maraquia';

export async function initDocument(m: Maraquia, model: BaseModel, collectionName: string) {
	// @ts-ignore
	model._id = (await m.db.collection(collectionName).insertOne({})).insertedId;
}

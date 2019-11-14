"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function initDocument(m, model, collectionName) {
    // @ts-ignore
    model._id = (await m.db.collection(collectionName).insertOne({})).insertedId;
}
exports.initDocument = initDocument;

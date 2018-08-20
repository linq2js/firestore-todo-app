import firebase from '@firebase/app';
import '@firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
});

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export function addTodo(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .set(data);
}

export function getTodos(collection) {
  return db.collection(collection).get();
}

export function updateTodo(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .update(data);
}

export function deleteTodo(collection, id) {
  return db
    .collection(collection)
    .doc(id)
    .delete();
}

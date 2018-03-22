import { db } from './firebase';

export const doCreateNews = (title, description) =>
  db.ref(`news`).push({
    title,
    description,
  });

export const onceGetNews = () =>
  db.ref('news').once('value');

import fs from 'fs';
import path from 'path';

export const NEWS_PATH = path.join(process.cwd(), 'articles/news');
export const newsFilePaths = fs.readdirSync(NEWS_PATH);

export const PRESS_PATH = path.join(process.cwd(), 'articles/press');
export const pressFilePaths = fs.readdirSync(PRESS_PATH);

import fs from 'fs';
import path from 'path';

// NEWS_PATH is useful when you want to get the path to a specific file
export const NEWS_PATH = path.join(process.cwd(), 'articles/news');

// newsFilePaths  is the list of all mdx files inside the NEWS_PATH directory
export const newsFilePaths = fs.readdirSync(NEWS_PATH);
// Only include md(x) files

import { Article } from '../models/Article';

export interface Repository {
    articles(): Promise<Article[]>
}
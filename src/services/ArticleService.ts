import { Article } from '../models/article';
import { Repository } from '../repositories/Repository';

export class ArticleService {
    private repo: Repository;

    constructor(repo: Repository) {
        this.repo = repo;
    }

    async getArticles(): Promise<Article[]> {
        return await this.repo.articles();
    }
}
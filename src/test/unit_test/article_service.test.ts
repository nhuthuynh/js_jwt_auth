import { ArticleService } from '../../services/ArticleService';
import { Article } from '../../models/Article';
import { Repository } from '../../repositories/Repository';

// at first getArticles will have the return error, 
// run test look it failed then go to ArticleService and fix it
// test --> failed --> fix --> run test --> passed
// test --> passed --> add more test --> test --> failed --> fix

class EmptyMockRepository implements Repository {
    async articles(): Promise<Article[]> {
        return [];
    }
}

class SingleMockRepository implements Repository {
    async articles(): Promise<Article[]> {
        return [new Article("Lord of The Rings", 10000)];
    }
}

test("get articles should return empty", async () => {
    const service = new ArticleService(new PrismaRepository());
    const articles: Article[] = await service.getArticles();
    const actual = articles.length;
    const expected = 0;

    expect(actual).toBe(expected);
});

test('get articles with one article in DB should return 1', async () => {
    const service = new ArticleService(new PrismaRepository());
    const articles: Article[] = await service.getArticles();
    const actual = articles.length;
    const expected = 1;

    expect(actual).toBe(expected);
});


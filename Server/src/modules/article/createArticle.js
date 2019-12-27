import { Article } from '../../models';


export const createArticle = async (req, res, next) => {
  const { article } = req.body;


  const newArticle = new Article(article.article);

  // 1) check for article

  try {
    const isArticles = await Article.find({ title: newArticle.title }).lean();

    if (isArticles[0]) {
      res.send({ error: 'article already imported' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error: 'article cant find' });
    next();
  }

  // 2) Validate Article
  try {
    await newArticle.validate();
  } catch (error) {
    res.status(500);
    res.send({ error: ' validation failed!' });

    throw error;
  }

  // 3) Save the Article
  try {
    await newArticle.save();
  } catch (error) {
    res.status(500);
    res.send({ error: 'DB error!' });
    throw error;
  }


  res.send({
    article: newArticle
  });
};

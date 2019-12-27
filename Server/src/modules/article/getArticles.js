import { Article } from '../../models';


export const getArticles = async (req, res) => {
  const { query } = req.query;
  const search = JSON.parse(query);

  // search articles by any quaries.
  const articles = await Article.find(search).sort({ createdAt: -1 }).lean();
  res.send({
    articles
  });
};

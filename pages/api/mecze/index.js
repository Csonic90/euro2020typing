import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const meczes = await db.collection('meczes').get();
    const meczesData = meczes.docs.map(mecze => mecze.data());

    if (meczesData.some(meczes => meczes.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('meczes').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}
import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const wyniks = await db.collection('wyniks').get();
    const wyniksData = wyniks.docs.map(wynik => wynik.data());

    if (wyniksData.some(wynik => wynik.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('wyniks').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}
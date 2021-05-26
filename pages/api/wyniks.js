import db from '../../utils/db';

export default async (req, res) => {
  try {
    const wyniks = await db.collection('wyniks').orderBy('created').get();
    const wyniksData = entries.docs.map(wynik => ({
      id: wynik.id,
      ...wynik.data()
    }));
    res.status(200).json({ wyniksData });
  } catch (e) {
    res.status(400).end();
  }
}
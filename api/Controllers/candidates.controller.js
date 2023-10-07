import { candidateModel } from '../Models/candidates.model.js';

export const vote = async (req, res) => {
  if (req.cookies.noitcele_cookie)
    return res
      .status(403)
      .json({ message: 'Unauthorized ! Already participated' });
  const payload = req.body;

  await Promise.all([
    candidateModel.findOneAndUpdate(
      { number: payload[0].nb },
      { $inc: { vote: payload[0].vote } }
    ),
    candidateModel.findOneAndUpdate(
      { number: payload[1].nb },
      { $inc: { vote: payload[1].vote } }
    ),
    candidateModel.findOneAndUpdate(
      { number: payload[2].nb },
      { $inc: { vote: payload[2].vote } }
    ),
    candidateModel.findOneAndUpdate(
      { number: payload[3].nb },
      { $inc: { vote: payload[3].vote } }
    ),
  ])
    .then(() => {
      res.cookie('noitcele_cookie', true, {
        httpOnly: true, //accessible only by web server
        secure: true, //https
        sameSite: 'Lax', //cross-site cookie
        maxAge: 60 * 1000, //cookie expiry: set to match rT
      });
      res.status(200).send({ message: 'Registered successfully' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        message: 'Une erreur est survenue. Veuillez réessayer ultérieurement.',
      });
    });
};

export const create = async (req, res) => {
  await candidateModel
    .create([
      { name: 'Tahina Razafinjoelina', number: 1 },
      { name: 'Hajo Andrianainarivelo', number: 2 },
      { name: 'Andry Rajoelina', number: 3 },
      { name: 'Rolland Ratsiraka', number: 4 },
      { name: 'Marc Ravalomanana', number: 5 },
      { name: 'Richard Paraina', number: 6 },
      { name: 'Andry Raobelina', number: 7 },
      {
        name: 'Jean-Brunelle Razafitsiandraofa',
        number: 8,
      },
      { name: 'Lalaina Ratsirahonana', number: 9 },
      {
        name: 'Hery Rajaonarimampianina',
        number: 10,
      },
      {
        name: 'Sendrison Daniela Raderanirina',
        number: 11,
      },
      { name: 'Jean-Jacques Ratsietison', number: 12 },
      {
        name: 'Siteny Randrianasoloniaiko',
        number: 13,
      },
    ])
    .then(() => {
      res.status(200).send({ message: 'Registered successfully' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        message: 'Une erreur est survenue. Veuillez réessayer ultérieurement.',
      });
    });
};

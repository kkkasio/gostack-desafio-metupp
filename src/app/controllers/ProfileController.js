import * as Yup from 'yup';

// import User from '../models/User';
import BackendSkills from '../models/BackendSkill';
import FrontendSkills from '../models/FrontendSkill';
import Profile from '../models/Profile';

class ProfileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
        .required()
        .min(3),
      idade: Yup.number()
        .integer()
        .required(),
      frase: Yup.string(),
      linkedin: Yup.string(),
      sobre: Yup.string(),
      foto: Yup.string(),

      // Backend Skills
      cSharp: Yup.string().required(),
      javascript: Yup.string().required(),
      java: Yup.string().required(),
      pyton: Yup.string().required(),
      php: Yup.string().required(),
      ruby: Yup.string().required(),
      outroBack: Yup.string(),

      // Frontend Skills

      bootstrap: Yup.string().required(),
      angular: Yup.string().required(),
      react: Yup.string().required(),
      vue: Yup.string().required(),
      jquery: Yup.string().required(),
      outroFront: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const profile = await Profile.create({
      user_id: req.userId,
      nome: req.body.nome,
      idade: req.body.idade,
      frase: req.body.frase ? req.body.frase : null,
      linkedin: req.body.linkedin ? req.body.linkedin : false,
      sobre: req.body.sobre ? req.body.sobre : null,
      foto: req.body.foto ? req.body.foto : null,
    });

    const backend = await BackendSkills.create({
      profile_id: profile.id,
      c_sharp: req.body.cSharp,
      javascript: req.body.javascript,
      java: req.body.java,
      pyton: req.body.pyton,
      php: req.body.php,
      ruby: req.body.ruby,
      outro_back: req.body.outroBack ? req.body.outroBack : null,
    });

    const frontend = await FrontendSkills.create({
      profile_id: profile.id,
      bootstrap: req.body.bootstrap,
      angular: req.body.angular,
      react: req.body.react,
      vue: req.body.vue,
      jquery: req.body.jquery,
      outro_front: req.body.outroFront ? req.body.outroFront : null,
    });

    return res.json({ profile, backend, frontend });
  }

  async update(req, res) {}
}

export default new ProfileController();

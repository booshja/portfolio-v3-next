// dependencies
import connectMongo from '../../../utils/connectMongo';
// models
import Message from '../../../models/messageModel';
import Project from '../../../models/projectModel';

export default async function addTest(req, res) {
  try {
    await connectMongo();

    const message = await Message.insertMany([
      {
        name: 'Jacob Testerson I',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson II',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson III',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson IV',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson V',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson VI',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson VII',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson VIII',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson IX',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
      {
        name: 'Jacob Testerson X',
        email: 'jacob@email.com',
        message: 'This is a test messaggeeeeeee',
      },
    ]);
    const project = await Project.insertMany([
      {
        name: 'Project 2',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 2,
      },
      {
        name: 'Project 3',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 3,
      },
      {
        name: 'Project 4',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 4,
      },
      {
        name: 'Project 5',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 5,
      },
      {
        name: 'Project 6',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 6,
      },
      {
        name: 'Project 7',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 7,
      },
      {
        name: 'Project 8',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 8,
      },
      {
        name: 'Project 9',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 9,
      },
      {
        name: 'Project 10',
        description:
          'This was a project that I really enjoyed doing. It was a project that projected to project very well!',
        tags: [
          'javascript',
          'react',
          'node',
          'express',
          'styled-components',
          'postgres',
        ],
        thoughts:
          "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
        image_url:
          'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
        github_url: 'https://github.com/booshja/portfolio-v3-frontend',
        live_url: 'https://jacobandes.dev',
        position: 10,
      },
    ]);

    res.json({ project });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
}

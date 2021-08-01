import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient } from 'mongodb';

function meetupId() {
  return (
    <MeetupDetail
      image='https://cdn2.civitatis.com/suiza/zurich/guia/zurich-card.jpg'
      title='First Meetup'
      address='Flüelastrasse 5, 12345 Zürich'
      description='This is a 1º meetup'
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    process.env.REACT_APP_MONGODB_API_KEY
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,

    paths: meetups.map((item) => {
      params: {
        meetupId: item._id.toString();
      }
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://cdn2.civitatis.com/suiza/zurich/guia/zurich-card.jpg',
        title: 'First Meetup',
        address: 'Flüelastrasse 5, 12345 Zürich',
        description: 'This is a 1º meetup',
        id: meetupId,
      },
    },
  };
}

export default meetupId;

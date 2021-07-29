import MeetupDetail from '../../components/meetups/MeetupDetail';

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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //Fetch data for a single meetup

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

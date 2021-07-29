import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://cdn2.civitatis.com/suiza/zurich/guia/zurich-card.jpg',
    title: 'First Meetup',
    address: 'Flüelastrasse 5, 12345 Zürich',
    description: 'This is a 1º meetup',
  },
  {
    id: 'm2',
    image:
      'https://www.costacruises.co.uk/content/dam/costa/costa-asset/c_037/ports/AGP_C037_place_malaga_01.jpg.image.1440.523.high.jpg',
    title: 'Second Meetup',
    address: 'Calle San Agustín 10, 12385 Málaga',
    description: 'This is a 2º meetup',
  },
  {
    id: 'm3',
    image:
      'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/sydney-australia/overview/sydney-australia-opera-house.jpg?$750x320$',
    title: 'Third Meetup',
    address: 'Baker Street 17, 14500 Sydney',
    description: 'This is a 3º meetup',
  },
  {
    id: 'm4',
    image:
      'https://www.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg',
    title: 'Fourth Meetup',
    address: 'Washington Avenue 59, 45849 New York',
    description: 'This is a 4º meetup',
  },
];

// const fetchData = async function () {
//   try {
//     const res = await fetch(
//       'https://meetup-app-5233f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
//     );
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     setMeetups(data);
//     if (!res.ok) throw new Error('Something went wrongs');
//   } catch (err) {
//     console.error(err);
//   }
// };

function Homepage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  // fetchData();
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default Homepage;

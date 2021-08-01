import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import { Fragment } from 'react';

function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async function (meetupData) {
    try {
      const res = await fetch('/api/new-meetups', {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      console.log(data);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetup;

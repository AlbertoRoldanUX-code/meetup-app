import React, { Fragment } from 'react';
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

export default meetupId;

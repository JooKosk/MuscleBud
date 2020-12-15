import React from 'react'
import WorkoutForm from './WorkoutForm'
import Togglable from './Togglable'
import {
  HomeWrapper,
  WorkoutPost,
  WorkoutHeader,
  Header,
  CenteredWrapper,
  FlexWrapper,
  StyledP,
} from './styling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRunning,
  faClock,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'

const Home = ({ workouts }) => {
  console.log(workouts)
  if (workouts.length === 0) {
    return (
      <CenteredWrapper>
        <h1> Your MuscleBud feed</h1>
        <p>It seems no one has logged a workout yet..</p>
        <p>How about you go first?</p>
        <Togglable buttonLabel="New workout">
          <WorkoutForm />
        </Togglable>
      </CenteredWrapper>
    )
  }
  return (
    <>
      <HomeWrapper>
        <div>
          <Header>Your MuscleBud feed</Header>
          {workouts.map((w) => (
            <WorkoutPost key={w.id}>
              <WorkoutHeader>{w.name}</WorkoutHeader>
              <FlexWrapper>
                <p>
                  {' '}
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    icon={faRunning}
                  />{' '}
                  {w.type}
                </p>
                <StyledP>
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    icon={faCalendarAlt}
                  />
                  Date: {new Date(w.date).toDateString()}
                </StyledP>
                <StyledP>
                  {' '}
                  <FontAwesomeIcon style={{ marginRight: 5 }} icon={faClock} />
                  Duration: {w.duration}
                </StyledP>
              </FlexWrapper>
              <p>Notes: {w.description}</p>
              <p>Posted by: {w.user.name}</p>
            </WorkoutPost>
          ))}
        </div>
        <Togglable buttonLabel="New workout">
          <WorkoutForm />
        </Togglable>
      </HomeWrapper>
    </>
  )
}

export default Home

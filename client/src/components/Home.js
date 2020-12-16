import React from 'react'
import WorkoutForm from './WorkoutForm'
import Togglable from './Togglable'
import Workout from './Workout'
import { HomeWrapper, Header, CenteredWrapper } from './styling'

const Home = ({ workouts, user }) => {
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
            <Workout key={w.id} workout={w} user={user} />
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

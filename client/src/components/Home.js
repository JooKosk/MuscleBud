import React from 'react'
import WorkoutForm from './WorkoutForm'
import Togglable from './Togglable'
import Workout from './Workout'
import { HomeWrapper, CenteredWrapper, PostsWrapper } from '../styling/wrappers'
import { Header } from '../styling/mixins'

const Home = ({ handleClick, workouts, user }) => {
  if (workouts.length === 0) {
    return (
      <CenteredWrapper>
        <h1> Your MuscleBud feed</h1>
        <p>It seems no one has logged a workout yet..</p>
        <p>You go first!</p>
        <Togglable buttonLabel="New workout">
          <WorkoutForm />
        </Togglable>
      </CenteredWrapper>
    )
  }
  return (
    <>
      <HomeWrapper>
        <PostsWrapper>
          <Header>Your MuscleBud feed</Header>
          {workouts.map((w) => (
            <Workout
              handleLike={handleClick}
              key={w.id}
              workout={w}
              user={user}
            />
          ))}
        </PostsWrapper>
        <Togglable buttonLabel="New workout">
          <WorkoutForm />
        </Togglable>
      </HomeWrapper>
    </>
  )
}

export default Home

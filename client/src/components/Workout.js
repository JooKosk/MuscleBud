import React, { useEffect, useState } from 'react'
import workoutService from '../services/workouts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRunning,
  faClock,
  faCalendarAlt,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import {
  WorkoutPost,
  WorkoutHeader,
  FlexWrapper,
  StyledP,
  LikeButton,
} from './styling'

const Workout = ({ workout, user }) => {
  const [likedBy, setLikedBy] = useState([])
  console.log(workout.whoLiked)
  useEffect(() => {
    setLikedBy(...likedBy, workout.whoLiked)
  }, [])
  const likePost = async () => {
    if (!likedBy.includes(user)) {
      setLikedBy(...likedBy, user)
      const likedWorkout = {
        ...workout,
        whoLiked: [...likedBy, user],
      }
      await workoutService.update(workout.id, likedWorkout)
    }
  }

  return (
    <>
      <WorkoutPost key={workout.id}>
        <WorkoutHeader>{workout.name}</WorkoutHeader>
        <FlexWrapper>
          <p>
            {' '}
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faRunning} />{' '}
            {workout.type}
          </p>
          <StyledP>
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCalendarAlt} />
            Date: {new Date(workout.date).toDateString()}
          </StyledP>
          <StyledP>
            {' '}
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faClock} />
            Duration: {workout.duration}
          </StyledP>
        </FlexWrapper>
        <p>Notes: {workout.description}</p>
        <p>Posted by: {workout.user.name}</p>
        <LikeButton onClick={likePost}>
          <FontAwesomeIcon style={{ marginRight: 5 }} icon={faThumbsUp} />
          Like{' '}
        </LikeButton>
        <p>Liked by:</p>
      </WorkoutPost>
    </>
  )
}

export default Workout

/*
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
              <LikeButton>
                <FontAwesomeIcon style={{ marginRight: 5 }} icon={faThumbsUp} />
                Like{' '}
              </LikeButton>
            </WorkoutPost>
          ))}
          */

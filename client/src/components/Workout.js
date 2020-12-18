import React from 'react'
import workoutService from '../services/workouts'
import { Formik, Form } from 'formik'
import Togglable from './Togglable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRunning,
  faClock,
  faComment,
  faThumbsUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  WorkoutPost,
  FlexWrapper,
  CommentWrapper,
  CommentBody,
  CommentCount,
  PostInfo,
} from '../styling/wrappers'
import {
  WorkoutHeader,
  PostHeader,
  SpacedText,
  BlueButton,
  CommentText,
  CommentUser,
  DateText,
} from '../styling/mixins'
import { MyBigTextField } from '../styling/forms'

const Workout = ({ workout, user, handleLike }) => {
  const comments = workout.comments.length === 1 ? 'comment' : 'comments'
  const addComment = async (props) => {
    await workoutService.comment(workout.id, props, user)
  }
  const removeWorkout = async () => {
    await workoutService.remove(workout.id)
  }
  return (
    <>
      <WorkoutPost key={workout.id}>
        <PostHeader>{workout.user.username}</PostHeader>
        <DateText>{new Date(workout.date).toDateString()}</DateText>
        <WorkoutHeader>{workout.name} </WorkoutHeader>
        <p>{workout.description}</p>
        <FlexWrapper>
          <p>
            {' '}
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faRunning} />{' '}
            {workout.type}
          </p>
          <SpacedText>
            {' '}
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faClock} />
            Duration: {workout.duration}
          </SpacedText>
        </FlexWrapper>
        <Togglable
          icon={
            <FontAwesomeIcon
              style={{ marginRight: 5 }}
              icon={faComment}
              title="comment"
            />
          }
        >
          <Formik
            initialValues={{ comment: '' }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              addComment(values.comment)
              resetForm()
              setSubmitting(false)
            }}
          >
            {(props) => {
              const { isSubmitting, handleSubmit } = props
              return (
                <Form onSubmit={handleSubmit}>
                  <MyBigTextField
                    placeholder="Leave a comment..."
                    name="comment"
                  />
                  <BlueButton disabled={isSubmitting} type="submit">
                    Comment
                  </BlueButton>
                </Form>
              )
            }}
          </Formik>
        </Togglable>
        <PostInfo>
          <p>{workout.likes} likes</p>
          <SpacedText>
            {workout.comments.length} {comments}
          </SpacedText>
        </PostInfo>
        {workout.comments.map((c) => (
          <CommentWrapper key={c.id}>
            <CommentBody>
              <CommentUser>
                <b>{c.user.username}</b>
              </CommentUser>
              <CommentText key={c.id}>{c.content}</CommentText>
            </CommentBody>
          </CommentWrapper>
        ))}
        <BlueButton onClick={() => handleLike(workout.id)}>Like</BlueButton>
      </WorkoutPost>
    </>
  )
}
/*
<RemoveButton>
          <FontAwesomeIcon icon={faTrashAlt} onClick={removeWorkout} />
        </RemoveButton>
        {new Date(c.date).toDateString()}
        */
export default Workout

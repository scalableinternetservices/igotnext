import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import * as React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FetchCourts, FetchCourtsVariables } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Spacer } from '../../style/spacer'
import { fetchCourt } from './fetchCourt'
import { addCourtMutation } from './mutateCourt'

export function Courts() {
  return createSurvey()
}

function createSurvey() {
  const [input_longitude, setlongitude] = React.useState(0)
  const [input_latitude, setlatitude] = React.useState(0)
  const { data } = useQuery<FetchCourts, FetchCourtsVariables>(fetchCourt, {
    variables: { latitude: input_latitude, longitude: input_longitude },
  })
  interface RegistrationFormData {
    latitude: string
    longitude: string
  }
  const { register, onSubmit } = useRegistrationForm()
  function useRegistrationForm() {
    const { register, handleSubmit } = useForm<RegistrationFormData>()
    const onSubmit = useCallback((formValues: RegistrationFormData) => {
      console.log(formValues)
      console.log(formValues.latitude)
      setlatitude(parseInt(formValues.latitude))
      setlongitude(parseInt(formValues.longitude))
    }, [])

    return {
      register,
      onSubmit: handleSubmit(onSubmit),
    }
  }
  function joinGame(courtID: number | undefined) {
    if (courtID !== undefined) {
      void addCourtMutation(courtID)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>latitude</p>
        <input name="latitude" type="latitude" ref={register} />
        <Spacer $h4 />
        <p>longitude</p>
        <input name="longitude" type="longitude" ref={register} />
        <Spacer $h4 />
        <Button>
          <input type="submit" value="Submit" />
        </Button>
      </form>
      <div className="mw6">
        {data?.court?.map((s, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <Link to="/app/in_game">
              <p onClick={() => joinGame(s?.courtID)}>
                courts : {s?.courtName} : {s?.lobby} / 10
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

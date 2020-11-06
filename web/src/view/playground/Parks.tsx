import { useQuery } from '@apollo/client'
import { Link } from '@reach/router'
import * as React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FetchParks, FetchParksVariables } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Spacer } from '../../style/spacer'
import { fetchPark } from './fetchPark'
import { addCourtMutation } from './mutateCourt'
// import { addGameMutation } from './mutateGame'

export function Parks() {
  return createSurvey()
}

function createSurvey() {
  const [input_longitude, setlongitude] = React.useState(0)
  const [input_latitude, setlatitude] = React.useState(0)
  const [nickname, setnickname] = React.useState('')
  const [GameQuery, setGameID] = React.useState('')
  const { data } = useQuery<FetchParks, FetchParksVariables>(fetchPark, {
    variables: { latitude: input_latitude, longitude: input_longitude },
    pollInterval: 200,
  })
  interface RegistrationFormData {
    latitude: string
    longitude: string
    nickname: string
  }
  const { register, onSubmit } = useRegistrationForm()
  function useRegistrationForm() {
    const { register, handleSubmit } = useForm<RegistrationFormData>()
    const onSubmit = useCallback((formValues: RegistrationFormData) => {
      setlatitude(parseInt(formValues.latitude))
      setlongitude(parseInt(formValues.longitude))
      setnickname(formValues.nickname)
    }, [])

    return {
      register,
      onSubmit: handleSubmit(onSubmit),
    }
  }
  async function joinGame(courtID: number | undefined, nickname: string) {
    if (courtID !== undefined) {
      await addCourtMutation(courtID, nickname)
      // if (lobby === 9) {
      //   void addGameMutation(courtID)
      // }
    }
  }

  function changeResultPage(courtID: number | undefined) {
    // should change link to reflect correct game match
    if (courtID !== undefined) {
      setGameID('/app/in_game/?gameID=' + courtID.toString() + '.' + input_latitude + '.' + input_longitude)
    }
  }

  // Display text under the current featured court
  interface DisplayCourtProps {
    featured: boolean | undefined
  }
  function DisplayCourt(props: DisplayCourtProps): React.ReactElement | null {
    const featured = props.featured

    if (featured) {
      return <p>[FEATURED COURT]</p>
    }
    return <p></p>
  }

  return (
    <div className="w-full max-w-x">
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
          latitude
        </label>
        <input
          name="latitude"
          type="latitude"
          ref={register}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <Spacer $h4 />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
          longitude
        </label>
        <input
          name="longitude"
          type="longitude"
          ref={register}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <Spacer $h4 />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
          nickname
        </label>
        <input
          name="nickname"
          type="nickname"
          ref={register}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <Spacer $h4 />
        <Button>
          <input type="submit" value="Find Courts" />
        </Button>
      </form>
      <div className="mw6">
        {data?.park?.map((s, i) => (
          <div key={i}>
            {s?.courts?.map((t, j) => (
              <div key={j} className="pa3 br2 mb2 bg-black-10 flex items-center">
                <Link to={GameQuery}>
                  <p
                    onMouseEnter={() => changeResultPage(t?.courtID)}
                    onMouseLeave={() => setGameID('')}
                    onClick={() => joinGame(t?.courtID, nickname)}
                  >
                    {t?.courtName} ({t?.lobby} / 10)
                    <DisplayCourt featured={t?.featured} />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

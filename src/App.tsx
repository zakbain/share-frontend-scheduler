import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SpacePanel } from './SpacePanel';

function App() {
  const scheduleServiceUrl = process.env.REACT_APP_SCHEDULE_SERVICE_URL 
  const availabilitiesUrl = `${scheduleServiceUrl}/${process.env.REACT_APP_SCHEDULE_SERVICE_AVAILABILITIES_PATH}`
  const spacesUrl = `${scheduleServiceUrl}/${process.env.REACT_APP_SCHEDULE_SERVICE_SPACES_PATH}`
  const [spaces, setSpaces] = useState<any>([])

  useEffect(() => {
    getAvailabilities()
  }, [])


  const getAvailabilities = async () => {
    const availabilityResponse = await fetch(availabilitiesUrl)
    const availabilityItems = await availabilityResponse.json()

    const spaceResponse = await fetch(spacesUrl)
    const spaceItems = await spaceResponse.json()

    const spaceMap = new Map(spaceItems.map((obj: any) => [obj._id, obj]))

    const spaceAvailabilities = availabilityItems.map((avail: any) => {
      const space = spaceMap.get(avail.space) as any
      return { ...avail, title: space ? space.title : '', description: space ? space.description : '' }
    })
    setSpaces(spaceAvailabilities)
  }

  const spacesItems = spaces.map((space: any) => { return <li key={space._id}><SpacePanel {...space}></SpacePanel></li> })

  return (
    <div className="App">
      <p>
        Frontend web client for customers to search, view, and reserve spaces.
      </p>
      <ul>
        {spacesItems}
      </ul>
    </div>
  );
}

export default App;

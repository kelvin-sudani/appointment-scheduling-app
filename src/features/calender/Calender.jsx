// ==> External Imports
import React, { useState, useEffect } from 'react'
import { Card, Typography } from 'antd'
import CalenderComponent from '../../Components/CalenderComponent'

// ==> Internal Imports
import eventData from '../../data/events'

const { Title } = Typography

export function Calender(props) {
  const data = props.location.state.data

  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState({})

  useEffect(() => {
    console.log('==> data', data.name)
    const EventData = JSON.parse(sessionStorage.getItem('events'))
    const filteredEvents = EventData?.filter(
      (item) => item.with === `${data.firstName} ${data.lastName}`
    )
    const combinedEvents = EventData
      ? [...eventData[data.id], ...filteredEvents]
      : eventData[data.id]
    setEvents(combinedEvents)
    let interval = setTimeout(() => {
      setLoading(false)
    }, 0)
    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Card
      loading={loading}
      title={
        <Title level={3} style={{ color: '#001529' }}>
          {`Book an Appointment with ${data.firstName} ${data.lastName}`}
        </Title>
      }
    >
      {/* Intentional prop drilling for facilitating composition */}
      <CalenderComponent events={events} setEvents={setEvents} doctor={data} />
    </Card>
  )
}

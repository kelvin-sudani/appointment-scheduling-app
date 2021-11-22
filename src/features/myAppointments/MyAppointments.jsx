import { Card, List, Avatar } from 'antd'
import React, { useState, useEffect } from 'react'
import { DateTime } from 'luxon'
const MyAppointments = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const EventData = JSON.parse(sessionStorage.getItem('events'))
    setEvents(EventData)
    return () => {}
  }, [])
  return (
    <Card>
      {events?.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={events}
          renderItem={(item) => (
            <List.Item
              style={{
                padding: '1em',
                border: '1px solid rgba(140, 140, 140, 0.9)',
              }}
            >
              <List.Item.Meta
                avatar={<Avatar />}
                title={item.title}
                description={
                  <div>
                    <p>with: {item.with}</p>
                    <p>
                      From:{' '}
                      {DateTime.fromFormat(
                        item.start,
                        `yyyy-MM-dd'T'HH:mm:ssZZ`
                      ).toLocaleString(DateTime.DATETIME_FULL)}
                    </p>
                    <p>
                      To:{' '}
                      {DateTime.fromISO(item.end).toLocaleString(
                        DateTime.DATETIME_FULL
                      )}
                    </p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <div>Nothing Scheduled Yet</div>
      )}
    </Card>
  )
}

export default MyAppointments

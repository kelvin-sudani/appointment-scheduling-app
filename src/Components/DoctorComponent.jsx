// ==> External Imports
import React from 'react'
import { List, Avatar } from 'antd'

const DoctorComponent = ({ data, loading, handleListItemClick }) => {
  return (
    <div
      id="scrollableDiv"
      style={{
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        loading={loading}
        renderItem={(item) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a>
            <List.Item
              style={{
                padding: '1em',
                border: '1px solid rgba(140, 140, 140, 0.9)',
              }}
              key={item.id}
              onClick={() =>
                handleListItemClick(item.id, item.firstName, item.lastName)
              }
            >
              <List.Item.Meta
                avatar={<Avatar />}
                title={`${item.firstName} ${item.lastName}`}
              />
            </List.Item>
          </a>
        )}
      />
    </div>
  )
}

export default DoctorComponent

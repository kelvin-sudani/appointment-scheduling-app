// ==> External Imports
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// ==> Internal Imports
import DoctorComponent from '../../Components/DoctorComponent'
import doctors from '../../data/doctors'
const Doctors = () => {
  let history = useHistory()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = () => {
    setLoading(true)
    const dataPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(doctors)
      }, 1000)
    })
    dataPromise
      .then((doctors) => {
        setData(doctors)
        setLoading(false)
      })
      .catch((error) => {
        alert(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  const handleListItemClick = (id, firstName, lastName) => {
    history.push({
      pathname: `/book`,
      state: {
        data: {
          id,
          firstName,
          lastName,
        },
      },
    })
  }

  return (
    <DoctorComponent
      handleListItemClick={handleListItemClick}
      data={data}
      loading={loading}
    />
  )
}

export default Doctors

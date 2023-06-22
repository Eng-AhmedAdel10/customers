import React, { useEffect, useState } from 'react'
import images from './images'
import Customers from './Customers'
import Filter from './Filter'
import Loading from './Loading'
import Error from './Error'

const url = 'http://jsonplaceholder.typicode.com/users '

function App() {
  const [customers, setCustomers] = useState([])
  const [filterCustomers, setFilterCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('Name (A-Z)')
  const [sortIsOpen, setSortIsOpen] = useState(false)
  // fetch data
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const list = await res.json()
      const data = list.map((item, index) => {
        return { ...item, img: images[index] }
      })
      setCustomers(data)
      setFilterCustomers(data.sort((a, b) => a.name.localeCompare(b.name)))
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw Error(error)
    }
  }

  // handle sort
  const handleSort = (sort) => {
    setSort(sort)
    if (sort === 'Name (A-Z)') {
      setFilterCustomers(
        filterCustomers.sort((a, b) => a.name.localeCompare(b.name))
      )
    }
    if (sort === 'Name (Z-A)') {
      setFilterCustomers(
        filterCustomers.sort((a, b) => b.name.localeCompare(a.name))
      )
    }
  }
  console.log(filterCustomers)

  // search item
  const searchItem = (e) => {
    if (e.target.value === '') {
      setFilterCustomers(customers)
    } else {
      let tempCustomer = customers.filter((customer) =>
        customer.name.toLowerCase().startsWith(e.target.value)
      )
      setFilterCustomers(tempCustomer)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const mainComponents = (component) => {
    return (
      <main>
        {/* navbar */}
        <nav></nav>
        {/* container */}
        <div className='container'>
          {/* search */}
          <Filter
            handleSort={handleSort}
            searchItem={searchItem}
            sort={sort}
            sortIsOpen={sortIsOpen}
            sortBtnsContainer={sortIsOpen}
            setSortIsOpen={setSortIsOpen}
          />
          {component}
        </div>
      </main>
    )
  }

  if (loading) {
    return mainComponents(<Loading />)
  }

  if (filterCustomers.length > 0) {
    return mainComponents(<Customers customers={filterCustomers} />)
  } else {
    return mainComponents(<Error />)
  }
}

export default App

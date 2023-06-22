import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
const Filter = ({
  handleSort,
  searchItem,
  sort,
  sortIsOpen,
  setSortIsOpen,
}) => {
  const sortBtnsContainer = useRef(null)

  // toggle sort
  const toggleSort = (e) => {
    if (e.target.classList.contains('toggle-sort')) {
      setSortIsOpen(!sortIsOpen)
      toggleSortItems()
    }
  }

  // toggle sort
  const toggleSortItems = () => {
    if (sortIsOpen) {
      console.log(sortBtnsContainer.current)
      sortBtnsContainer.current.style.height = '0px'
    } else {
      sortBtnsContainer.current.style.height = '100px'
    }
  }

  return (
    <div className='filter-container'>
      {/* search */}
      <div className='search-container shadow-input'>
        <BsSearch />
        <input
          type='text'
          className='search-input'
          placeholder='Find Customers'
          onInput={(e) => searchItem(e)}
        />
      </div>
      {/* sort */}
      <div
        className='sort-container toggle-sort'
        onClick={(e) => toggleSort(e)}
      >
        <span className='label toggle-sort'>Filter by {sort}</span>
        <div className='toggle-sort'>
          {sortIsOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        <div ref={sortBtnsContainer} className='sort-btns-container'>
          <div className='sort-btns'>
            <button
              className='sort-btn'
              onClick={() => handleSort('Name (A-Z)')}
            >
              Name (A-Z)
            </button>
            <button
              className='sort-btn'
              onClick={() => handleSort('Name (Z-A)')}
            >
              Name (Z-A)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter

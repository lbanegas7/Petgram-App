import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './style'

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)

  const useCategoriesData = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      window.fetch('https://petgram-server-luis-b.vercel.app/categories').then(resp => resp.json()).then(
        data => {
          setCategories(data)
          setLoading(false)
        })
    }, [])

    return { categories, loading }
  }

  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (<List fixed={fixed}>{categories.map(cat => <Item key={cat.id}><Category {...cat} /></Item>)}</List>)
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
      {loading && 'Cargando...'}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

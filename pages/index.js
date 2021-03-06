import { useEffect } from 'react'
import Router from 'next/router'
import qs from 'qs'
import { URLS } from '@/src/constants'

const redirectToUrl = URLS.LOGIN_URL

const HomePage = () => {
  useEffect(() => {
    const { query = {} } = Router
    const queryString = Object.keys(query).length ? `?${qs.stringify(query)}` : ''
    Router.push(redirectToUrl + queryString)
  }, [])
  return null
}

export default HomePage

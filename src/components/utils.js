import { useState, useEffect } from 'react'
import { useQueryParam, StringParam, BooleanParam } from 'use-query-params'

const windowLocation = (() => {
  if(typeof window !== 'undefined' && window) {
    return "" // useQueryParam will parse query params automatically
  } else {
    return "?dummy-param"
  }
})()

const stateFromQueryParam = (name, type) => {
    const [valueFromUrl, setQueryToUrl] = useQueryParam(
        name,
        type,
        windowLocation
    )
    const [stateValue, setStateValue] = useState(valueFromUrl)

    useEffect(() => {
      setQueryToUrl(stateValue)
    }, [stateValue])

    return [stateValue, setStateValue]
}

export { stateFromQueryParam, StringParam, BooleanParam }
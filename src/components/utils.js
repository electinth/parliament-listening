import { useState, useEffect } from 'react'
import { useQueryParam, StringParam, BooleanParam } from 'use-query-params'

const stateFromQueryParam = (name, type) => {
    const [valueFromUrl, setQueryToUrl] = useQueryParam(name, type)
    const [stateValue, setStateValue] = useState(valueFromUrl)

    useEffect(() => {
      setQueryToUrl(stateValue)
    }, [stateValue])

    return [stateValue, setStateValue]
}

export { stateFromQueryParam, StringParam, BooleanParam }
import React from 'react'
import { Alert } from 'antd'

export const AlertAttention = () => {
  return (
    <Alert
      message="Внимание"
      description="Рейсов, подходящих под заданные фильтры, не найдено."
      type="warning"
      showIcon
    />
  )
}

export const AlertError = () => {
  return (
    <Alert
      message="Error"
      description="Something was wrong"
      type="error"
      showIcon
    />
  )
}

import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ticket from '../ticket/ticket'
import Spinner from '../spin-load/spin-load'
import { AlertAttention, AlertError } from '../alert-error/alert-error'
import * as actions from '../../redux/actions/actionCreators'
import classes from './ticket-list.module.scss'
import { filterTickets, onSortTickets } from '../utilities/utilities'

const TicketList = () => {
  const reducerSortTab = useSelector((state) => state.reducerSortTab)
  const reducerFilter = useSelector((state) => state.reducerFilter)
  const reducerTickets = useSelector((state) => state.reducerTickets)
  const dispatch = useDispatch()

  const { sort } = reducerSortTab
  const { tickets, counter, loading, error } = reducerTickets
  const { viewMore } = actions

  useEffect(() => {
    const { getDataId } = actions
    dispatch(getDataId())
  }, [])

  const sortFilterTickets = useMemo(() =>
    filterTickets(reducerFilter, onSortTickets(tickets, sort), [tickets, sort]),
  )

  return (
    <div>
      {!loading ? <Spinner /> : null}
      {error ? <AlertError /> : null}
      <ul className={classes.ticket_list}>
        {sortFilterTickets.slice(0, counter).map((el) => {
          return (
            <Ticket
              key={`${el.price}${el.carrier}${el.segments[0].stops}`}
              item={el}
            />
          )
        })}
        {!sortFilterTickets.length ? <AlertAttention /> : null}
      </ul>
      {sortFilterTickets.length ? (
        <button
          onClick={() => dispatch(viewMore())}
          className={classes.button_view}
        >
          показать ещё 5 билетов
        </button>
      ) : null}
    </div>
  )
}

export default TicketList

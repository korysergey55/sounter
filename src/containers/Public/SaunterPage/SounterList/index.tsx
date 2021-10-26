import React, { useState } from 'react'
import IList from 'models/index'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowsAlt,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'stores'
import { toJS } from 'mobx'

interface ISouterProps {
  item: IList
}
const SounterList: React.FC<ISouterProps> = ({ item }) => {
  const { sounterState } = useStore()
  const { item: currentItem } = sounterState

  const GetDirections = () => {
    sounterState.setItem(item)
  }
  return (
    <li
      className={classNames({
        [styles.item]: true,
        [styles.itemActive]: item.id === currentItem?.id,
      })}
      onClick={GetDirections}
    >
      <FontAwesomeIcon
        icon={faArrowsAlt}
        color="grey"
        size="2x"
        className={styles.icon}
      />
      <div className={styles.container}>
        {item.favorite && (
          <FontAwesomeIcon icon={faStar} color="yellow" size="2x" />
        )}
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.text}>{item.shortDescription}</p>
      </div>
      <p className={styles.distance}>{item.distance}km</p>
      <button type="button" className={styles.buttonGetDirections}>
        <FontAwesomeIcon icon={faArrowRight} color="grey" size="1x" />
      </button>
    </li>
  )
}

export default SounterList

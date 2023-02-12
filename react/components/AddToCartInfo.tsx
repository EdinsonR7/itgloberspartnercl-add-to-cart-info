/* eslint-disable import/order */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */

import ButtonGroup from './ButtonGroup'
import ProductGroup from './ProductGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass)
  const containerTotal = generateBlockClass(styles.buttontotal, blockClass)
  const containerTotal2 = generateBlockClass(styles.buttontotal2, blockClass)
  const containerTotal3 = generateBlockClass(styles.buttontotal3, blockClass)
  const containerTotal4 = generateBlockClass(styles.buttontotal4, blockClass)
  const itemText = generateBlockClass(styles.itemText, blockClass)
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  // eslint-disable-next-line no-console
  console.log('este producto tiene esta info:', productInfo)
  console.log('estos son mis totales:', totalizers)

  return (
    <div className={classes}>
      {items.map((item: any, index: number) => {
        console.log(item)

        return (
          <div key={index}>
            <ProductGroup />
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p className={itemText}>{item.name}</p>
              <p className={itemText}>{item.id}</p>
              <p className={itemText}>${item.price / 100}</p>
              <p className={itemText}>Cant: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div>
        <div className={containerTotal2}>
          <p className={containerTotal}>
            SUBTOTAL: ${totalizers[0]?.value / 100}
          </p>
        </div>
        <div className={containerTotal3}>
          <p className={containerTotal}>
            DESCUENTOS: ${totalizers[0]?.value / 100}
          </p>
        </div>
        <div className={containerTotal4}>
          <p className={containerTotal}>TOTAL: ${totalizers[0]?.value / 100}</p>
        </div>
        <ButtonGroup />
      </div>
    </div>
  )
}

export default AddToCartInfo

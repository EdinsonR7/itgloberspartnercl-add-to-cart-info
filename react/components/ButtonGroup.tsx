// eslint-disable-next-line prettier/prettier
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const ButtonGroup = () => {
  const CSS_HANDLES = ['button__group', 'label__boton']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.button__group}>
      <div>
        <button className={handles.button__group}>
          <a href="/checkout#/cart" className={handles.label__boton}>
            FINALIZAR COMPRA
          </a>
        </button>
      </div>
    </div>
  )
}

export default ButtonGroup

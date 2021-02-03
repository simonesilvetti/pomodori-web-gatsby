import React from 'react'
import PropTypes from 'prop-types'
import { ChiSiamoTemplate } from '../../templates/chi-siamo'

const ChiSiamoPreview = ({ entry, widgetFor }) => (
  <ChiSiamoPreview
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ChiSiamoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ChiSiamoPreview

import React from 'react';
import {SketchField} from 'react-sketch-whiteboard';
import PropTypes from 'prop-types';

const BoardCanvas = ({selectedTool, lineColor}) => (
  <div className='border border-dark'>
    <SketchField
      tool={selectedTool}
      lineColor={lineColor}
      lineWidth={3}
      undoSteps={15} />
  </div>
);

BoardCanvas.propTypes = {
  selectedTool: PropTypes.string,
  lineColor: PropTypes.string,
};

export default BoardCanvas;

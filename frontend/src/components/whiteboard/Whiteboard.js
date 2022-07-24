import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tools} from 'react-sketch-whiteboard';
import {
  ArrowsMove, Circle, CircleFill,
  // Pencil, PencilFill,
  SlashSquare, SlashSquareFill, Square, SquareFill
} from 'react-bootstrap-icons';
import {Button, ButtonGroup, Col, Row} from 'reactstrap';
import BoardCanvas from '../board-canvas/BoardCanvas';

const Whiteboard = ({themeMode}) => {
  const [toolSelection, setToolSelection] = useState(1);
  const [lineColor, setLineColor] = useState('#000000');
  let selectedTool = Tools.Pencil;

  switch (toolSelection) {
    // case 0:
    //   selectedTool = Tools.Pencil;
    //   break;
    case 1:
      selectedTool = Tools.Line;
      break;
    case 2:
      selectedTool = Tools.Rectangle;
      break;
    case 3:
      selectedTool = Tools.Circle;
      break;
    case 4:
      selectedTool = Tools.Pan;
      break;
    default:
      selectedTool = Tools.Pencil;
      break;
  }


  console.log(toolSelection);
  return (
    <>
      <div className='text-center'>
        <h1>
          Whiteboard
        </h1>
        <small className={`${themeMode ? 'text-light' : 'text-muted'}`}>Quick Whiteboard</small>
      </div>
      <br />
      <Row className='justify-content-center mb-2'>
        <Col sm={12} className='text-center'>
          <ButtonGroup>
            {/* <Button color='dark' outline active={toolSelection === 0} onClick={() => setToolSelection(0)}>
          {toolSelection === 0 ? <PencilFill /> : <Pencil />}
        </Button> */}
            <Button color='dark' outline active={toolSelection === 1} onClick={() => setToolSelection(1)}>
              {toolSelection === 1 ? <SlashSquareFill /> : <SlashSquare />}
            </Button>
            <Button color='dark' outline active={toolSelection === 2} onClick={() => setToolSelection(2)}>
              {toolSelection === 2 ? <SquareFill /> : <Square />}
            </Button>
            <Button color='dark' outline active={toolSelection === 3} onClick={() => setToolSelection(3)}>
              {toolSelection === 3 ? <CircleFill /> : <Circle />}
            </Button>
            <Button color='dark' outline active={toolSelection === 4} onClick={() => setToolSelection(4)}>
              {toolSelection === 4 ? <ArrowsMove /> : <ArrowsMove />}
            </Button>
            <Button color='dark' outline>
              <input type='color' onChange={({target}) => setLineColor(target.value)} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <BoardCanvas
        selectedTool={selectedTool}
        lineColor={lineColor} />
    </>
  );
};

Whiteboard.propTypes = {
  themeMode: PropTypes.bool.isRequired,
};
export default Whiteboard;

import { useRef } from 'react';
import { ActionPart } from './editor/ActionPart';
import { ConfigPart } from './editor/ConfigPart';
import { FooterPart } from './editor/FooterPart';
import { HeaderPart } from './editor/HeaderPart';
import { OptionPart } from './editor/OptionPart';
import { PreviewPart } from './editor/PreviewPart';
import { SourcePart } from './editor/SourcePart';
import './MainApp.scss';

function MainApp() {
  const [refL, onLToggle, btnL] = useToggle()
  const [refR, onRToggle, btnR] = useToggle()
  return (
    <div className="grid-main">
      <div className="left p-2" ref={refR} >
        {btnR}
        <HeaderPart className="header" name="Grid Editor" />
        <FooterPart className="footer" />
        <ConfigPart className="config" />
      </div>
      <div className="main" >
        <PreviewPart className="preview" />
      </div>
      <div className="right p-2" ref={refL}>
        {btnL}
        <ActionPart className="action" />
        <SourcePart className="source" />
        <OptionPart className="option" />
      </div>
    </div>
  );
}

const useToggle = (props = {}) => {
  const { refName, direction = 'LR', classCollapse = 'collapse', className = 'root-toggle', classButton = 'btn-toggle' } = props;
  const [classOpen, classClose] = direction === 'LR' ? ['fa fa-arrow-left', 'fa fa-arrow-right'] : direction === 'RL' ? ['fa fa-arrow-right', 'fa fa-arrow-left'] : []
  const ref = useRef(refName)
  const onToggle = () => {
    if (ref.current) {
      ref.current.classList.toggle(classCollapse)
    }
  }
  const Btn = (
    <div className={className}>
      <button className={classButton} onClick={onToggle}>
        <i className={'btn-open ' + classOpen} />
        <i className={'btn-close ' + classClose} />
      </button>
    </div>
  )
  return [ref, onToggle, Btn]
}


export default MainApp;

import { useToggle } from '_/hooks/useToggle';
import { ActionPart } from './editor/ActionPart';
import { ConfigPart } from './editor/ConfigPart';
import { FooterPart } from './editor/FooterPart';
import { HeaderPart } from './editor/HeaderPart';
import { OptionPart } from './editor/OptionPart';
import { PreviewPart } from './editor/PreviewPart';
import { SourcePart } from './editor/SourcePart';
import './MainApp.scss';

function MainApp() {
  const [refL, , btnL] = useToggle()
  const [refR, , btnR] = useToggle()
  return (
    <div className="grid-main">
      <div className="left p-2" ref={refR} >
        {btnR}
        <HeaderPart className="header" name="Grid Editor" />
        <FooterPart className="footer" />
        <ConfigPart className="config" />
      </div>

      <PreviewPart className="main" />

      <div className="right p-2" ref={refL}>
        {btnL}
        <ActionPart className="action" />
        <SourcePart className="source" />
        <OptionPart className="option" />
      </div>
    </div>
  );
}
/*

        <PreviewPart className="preview" />
*/

export default MainApp;
import { ActionPart } from './editor/ActionPart';
import { ConfigPart } from './editor/ConfigPart';
import { FooterPart } from './editor/FooterPart';
import { HeaderPart } from './editor/HeaderPart';
import { OptionPart } from './editor/OptionPart';
import { PreviewPart } from './editor/PreviewPart';
import { SourcePart } from './editor/SourcePart';
import './MainApp.scss';

function MainApp() {
  return (
    <div className="grid-main">
      <div className="left p-2">
        <HeaderPart className="header" name="Grid Editor" />
        <FooterPart className="footer" />
        <ConfigPart className="config" />
      </div>

      <PreviewPart className="main m-2" />

      <div className="right p-2">
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

import './MainApp.scss';
import { ConfigPart } from './editor/ConfigPart';
import { HeaderPart } from './editor/HeaderPart';
import { FooterPart } from './editor/FooterPart';
import { ActionPart } from './editor/ActionPart';
import { SourcePart } from './editor/SourcePart';
import { OptionPart } from './editor/OptionPart';
import { PreviewPart } from './editor/PreviewPart';

function MainApp() {
  return (
    <div className="grid-main">
      <HeaderPart className="header" name="Grid Editor" />
      <ConfigPart className="config" />
      <FooterPart className="footer" />
      <ActionPart className="action" />
      <SourcePart className="source" />
      <OptionPart className="option" />
      <PreviewPart className="preview" />
    </div>
  );
}

export default MainApp;
/*

    <div className="MainApp">
      <Navbar name="Define Grid" />
      <div className="container-fluend m-4">
        <Editor />
      </div>
    </div>

*/
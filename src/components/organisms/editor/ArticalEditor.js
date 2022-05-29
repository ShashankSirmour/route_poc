import React from 'react';

import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';
import { InputBase } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import classNames from 'classnames';
import 'draft-js/dist/Draft.css';
import './blocks.css';

const useStyle = makeStyles((theme) => ({
  root: {
    margin: '0px auto',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'rgb(255, 255, 255)',
    fontSize: 'calc(1.175em + 0.25 * (100vw - 80em) / 40)',
  },
  contentArea: {
    margin: '0px auto',
    padding: '3em',
    width: '60%',
    fontSize: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '98%',
      padding: '2em',
    },
  },
  customInputRoot: {
    'font-family': 'inherit',
    'letter-spacing': '-0.02em',
    'font-weight': '700',
    'font-style': 'normal',
    'font-size': '3em',
    'margin-left': '-1.8px',
    'line-height': '1.2',
    'margin-top': '40px',
    'margin-bottom': '0.7em',
  },
}));

function ArticalEditor() {
  const initial = JSON.parse(sessionStorage.getItem('draftail:content'));

  const plugins = [];

  const onSave = (content) => {
    console.log('saving', content);
    sessionStorage.setItem('draftail:content', JSON.stringify(content));
  };

  const classes = useStyle();
  return (
    <div className={classNames(classes.root, 'EdEditor')}>
      <div className={classes.contentArea}>
        <InputBase
          classes={{
            root: classes.customInputRoot,
          }}
          placeholder="Tilte"
          fullWidth
          multiline
        />

        <DraftailEditor
          rawContentState={initial || null}
          onSave={onSave}
          enableLineBreak
          placeholder="Start Writing Here..."
          topToolbar={null}
          blockTypes={[
            { type: BLOCK_TYPE.HEADER_THREE },
            { type: BLOCK_TYPE.HEADER_TWO },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
            { type: BLOCK_TYPE.ORDERED_LIST_ITEM },
            { type: BLOCK_TYPE.BLOCKQUOTE },
          ]}
          inlineStyles={[
            { type: INLINE_STYLE.BOLD },
            { type: INLINE_STYLE.ITALIC },
            { type: INLINE_STYLE.DELETE },
            { type: INLINE_STYLE.UNDERLINE },
          ]}
          plugins={plugins}
        />
      </div>
    </div>
  );
}

export default ArticalEditor;

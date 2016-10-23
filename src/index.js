import {transform} from 'babel-core';
import PersistentFilter from 'broccoli-persistent-filter';

export default class Babel extends PersistentFilter {

  constructor(inputNode, {
    extensions=['js'],
    targetExtension='js',
    inputEncoding,
    outputEncoding,
    annotation,
    ...babelOptions}) {

    super(inputNode, {
      name: 'Babel',
      extensions,
      targetExtension,
      inputEncoding,
      outputEncoding,
      annotation
    });

    this.babelOptions = babelOptions;
  }

  processString(contents, filenameRelative) {
    return transform(contents, {...this.babelOptions, filenameRelative}).code;
  }

}

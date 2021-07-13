import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Evaluation from '../bundles/HelloWorld/components/Evaluation';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Evaluation
});




// まず既存のコンポーネントを呼ぶ
// 呼び出し方を変える。


// Reduxの呼び方を考える。
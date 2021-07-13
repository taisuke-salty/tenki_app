import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Evaluation from '../components/Evaluation';
import Card from '../components/Card';
import IndexCalendar from '../components/indexCalendar';
import MotivatedImg from '../components/MotivatedImg';
import Motivation from '../components/Motivation';
import NikkiTest from '../components/NikkiTest';
import NotMotivatedImg from '../components/NotMotivatedImg';
import PieChart from '../components/PieChart';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Evaluation,
  Card,
  IndexCalendar,
  MotivatedImg,
  Motivation,
  NikkiTest,
  NotMotivatedImg,
  PieChart
});




// まず既存のコンポーネントを呼ぶ
// 呼び出し方を変える。


// Reduxの呼び方を考える。
import React from 'react';
import {render} from 'react-dom';
import StyledApp from './App';
import StyledPlayground from './Playground';
import { BrowserRouter,  Route } from 'react-router-dom';

render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={StyledApp} />
      <Route path='/playground' component={StyledPlayground} />
    </div>
</BrowserRouter>
), document.getElementById('root'))
import './Content.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Test1 from './Test1'
import Test2 from './Test2'

const Content = props => (
    <main className="Contenttest">
        <Routes>
            <Route exact path="/test1">
                <Test1 />
            </Route>
            <Route path="/test2">
                <Test2 />
            </Route>
        </Routes>
    </main>
)

export default Content
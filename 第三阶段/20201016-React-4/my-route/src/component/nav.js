import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <header class="header">
            <div class="wrap">
                <h1 id="logo">KaiKeBa</h1>
                <nav class="nav">
                    <Link to="/">首页</Link>
  
                    <Link to="/about">关于我们</Link>

                    <Link to="/join">加入我们</Link>
                </nav>
            </div>
        </header>
    )
}
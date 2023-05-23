import React from "react";
import "./News.scss"

export default function News() {
  return (
    <div className="news-container">
      <h2 className="news-title">News</h2>
      <div className="news-post-w">
        <div className="news-updates-w">
          <div className="news-updates-title">Update</div>
          <div className="news-u-data-w">

          </div>
        </div>
        <div className="news-vip-members-w">
          <div className="news-vip-members-title">VIPs</div>
          <div className="news-v-data-w">

          </div>
        </div>
      </div>
    </div>
  )
}
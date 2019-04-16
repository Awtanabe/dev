import React, {Component} from "react";
import index from '../index'

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="header">
         <div className="search-header">
           <div className="search-hrader-wrapper">
            <div className="logo">
                <img className="logo-img" src="favicon.ico"/>
              </div>
              <div className="search-field">
               
                  <fom className="search-form">
                  <input className="search-input" type="text"/>
                  <button className="search-button" type="button">
                  <i class="fas fa-search-plus"></i>
                  </button>
                  </fom>
              
              </div>
           </div>
         </div>
         <div className="nav-items">
          <div className="nav-items-wrapper">
            <ul className="nav-ltem-list">
              <li className="nav-list"><a href="#" href="#"><span className="fas fa-caret-down"></span></a></li>
              <li className="nav-list"><a href="#"><span className="far fa-question-circle"></span></a></li>
              <li className="nav-list"><a href="#"><span className="fas fa-bell"></span></a></li>
              <li className="nav-list"><a href="#"><span className="fas fa-comments nev-comments"></span></a></li>
              <li className="nav-list"><a href="#"><span className="fas fa-user-friends"></span></a></li>
              <li className="nav-list"><a href="#" className="create"><span>作成</span></a></li>
              <li className="nav-list"><a href="#" className="home"><span>ホーム</span></a></li>
              <li className="nav-list">
                <a href="#" class="user-name">
                  <img src="favicon.ico" className="logo-img" />
                  <span className="image-text">渡辺晃史</span>
                </a>
              </li>
            </ul>
          </div>
         </div>
        </div>
        <div className="container-body clear">
          <div className="side-bar">
            <div className="news-feeds"> 
              <ul className="side-bar-news-feeds">
                <div className="news-feed-title">
                 <span class="far fa-newspaper newspaper-icon"></span>
                 <h4 className="news-feed-text">ニュースフィード</h4>
                </div>
                
                <li className="side-list">
                <div>
                  <div>
                    <span className="fas fa-comments side-message"></span>
                    <a><span className="messanger-text">Messanger</span></a>
                  </div>
                
                </div>
                </li>
                <li className="side-list">
                <div>
                <i class="fas fa-tv"></i>
                <a><span>Watchの動画</span></a>
                </div>
                
                </li>
              </ul>
            </div>
            <div className="short-cut">
              <ul className="short-cut-list">
                <h4>ショートカット</h4>
                <li className="side-list" >
                <div>
                <span class="fas fa-sun"></span>
                <a><span>Temonaグループ</span></a>
                </div>
                </li>
              </ul>
            </div>
            <div className="discover">
              <ul className="discover-list">
                <h4>発見</h4>
                <li className="side-list" >
                <span class="fas fa-flag"></span>
                <a><span>Facebookページ</span></a></li>
                <li className="side-list" ><a><p>グループ</p></a></li>
                <li className="side-list" ><a><p> イベント</p></a></li>
                <li className="side-list" ><a><p>募集キャンペーン</p></a></li>
                <li className="side-list" ><a><p>もっとみる...</p></a></li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="create-post"></div>
            <div className="posts">
              <div className="post-field">
                <div className="post-field-header">
                 <span>投稿を作成</span>
                </div>
                <div className="post-feed">
                  <div className="post-field-user">
                    <img src="favicon.ico" className="logo-img" />
                </div>
                <div className="post-form">
                  <form>
                    <input　className="post-input" type="text" placeholder="渡辺晃史さん-今何してる？"/>
　                  </form>
                </div> 
              </div>
              <div className="post-field-icons">
                <ul className="post-field-lists-icons">
                  <li className="post-field-list">
                    <a href="#">
                    <span class="fas fa-images"></span>
                    <span>写真・画像</span>  
                    </a>
                  </li>
                  <li className="post-field-list">
                    <a href="#" > 
                      <span class="fas fa-images"></span>
                      <span>友達をタグ付け</span>  
                    </a>
                  </li>
                  <li className="post-field-list">
                    <a href="#">
                      <span class="fas fa-images"></span>
                      <span>気分・アクティビティ</span>  
                    </a>  
                  </li>
                  <li className="post-field-list">
                    <a href="#">
                    <span class="fas fa-ellipsis-h"></span>
                    </a>
                  </li>
                </ul>
              </div>  
              <div className="post-field-additional">
                <ul>
                  モーダルここに入れる
                  <li className="post-field-additional-list">sdas</li>
                  <li className="post-field-additional-list">asda</li>
                </ul>
              </div>
            </div>
              
              <div className="post clear">
                <div className="post-header">
                  <div className="post-header-user">
                    <span className="user-image"><img src="image.png" className="logo-img" /></span>
                  <div>
                    <span className="post-user-name">name</span><span>さんがカバーを</span>
                    <span class="fas fa-ellipsis-h post-more"></span>  
                    <div className="user-date"> <span>2011/11/11</span></div>
                  </div>
                  <div className="post-header-body">
                    <p className="normal w-nomal">asdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss だださsdさdさあだs</p>
                  </div>
                </div>
              </div>
              <div className="post-images">
                    <div className="post-left">
                      <img src="https://picsum.photos/300/306"/>
                  
                    </div>
                    <div className="post-right">
                      <div className="post-right-top">
                        <img src="https://picsum.photos/200/100/?random"/>
                      </div>
                      <div className="post-right-middle">
                        <img src="https://picsum.photos/200/100/?random"/>
                      </div>
                      <div className="post-right-bottom">
                        <img src="https://picsum.photos/200/100/?random"/> 
                      </div>
                    </div>  
                  </div>
                  <div className="post-good-icons">
                    <div className="shrae-icons">
                      <a href="#"><span className="share-text">シェア1件</span></a>
                    </div>
                    <div className="good-icons">
                    <span class="fas fa-thumbs-up"></span>
                    <span class="fas fa-heart"></span>
                    <span className="good-icons-text">9人</span>
                    </div>
                  </div>
                  <div className="post-icons">
                    <ul className="post-field-lists">
                      <li className="post-field-list-comment">
                        <a href="#">
                        <span class="fas fa-thumbs-up"></span>
                        <span>いいね</span>  
                        </a>
                      </li>
                      <li className="post-field-list-comment">
                        <a href="#" > 
                          <span class="far fa-comments"></span>
                          <span>コメントする</span>  
                        </a>
                      </li>
                      <li className="post-field-list-comment">
                        <a href="#">
                          <span class="fas fa-share fa-spin"></span>
                          <span>シェアする</span>  
                        </a>  
                      </li>
                    </ul>
                  </div>
                  <div className="post-comment">
                    <div className="post-field-user">
                      <img src="favicon.ico" className="logo-img" />
                    </div>
                    <div className="post-comment-form-wrapper">
                      <form className="post-comment-form">
                        <input　className="post-input" type="text" placeholder="コメントする・・・"/>
　                     </form>
                          <span class="far fa-smile"></span>
                          <span class="far fa-address-card"></span>
                          <span class="fas fa-camera"></span>
                          <span class="fab fa-adobe"></span>
                    </div> 
                  </div>
                </div>
              <div className="post"></div>
              <div className="post"></div>
            </div>
          </div>
        </div>

        <div className="post-field none">
                <div className="post-field-header">
                 <span>投稿を作成</span>
                </div>
                <div className="post-feed">
                  <div className="post-field-user">
                    <img src="favicon.ico" className="logo-img" />
                </div>
                <div className="post-form">
                  <form>
                    <input　className="post-input" type="text" placeholder="渡辺晃史さん-今何してる？"/>
　                  </form>
                </div> 
              </div>
        </div>
        
        <div className="nnn clear">
         <table>
           <tr>
             <th>無料</th>
             <th>中級</th>
             <th>上級</th>
           </tr>
           <tr>
             <td>0円</td>
             <td>1000円</td>
             <td>1万円</td>
           </tr>
           <tr>
             <td><button>クリック</button></td>
             <td><button>クリック</button></td>
             <td><button>クリック</button></td>
           </tr>

         </table>


        <h1>見出しタイトル</h1>
          <img src="https://picsum.photos/100/100/?random"/>
          <video src="video.mp4"></video>

        </div>

        <div className="box clear">
          <div className="box-header">
            <img src="https://picsum.photos/100/100/?random"/>  <h3>見出し</h3>
          </div>
          <div className="content-box">
            <img src="https://picsum.photos/480/300/?random"/>
 

           <div className="box-botton">
             <div className="left-button">
               <h3>paddingを削除</h3>
             </div>
             <div className="right-button">
             <h3>margingを削除</h3>
             </div>
           </div>

          </div>

        </div>



      </div>
    )
  }
}

export default App;
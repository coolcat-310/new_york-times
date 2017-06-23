import React, { Component } from 'react';
import Header from './Header/header';
import Search from './Section/search';
import Result from './Section/result';
import SavedArticle from './Section/savedArticle';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles1: [],
      articles: [
        {
          title: "text4",
          time: "time1"
        },
        {
          title: "text5",
          time: "time2"
        },
        {
          title: "text6",
          time: "time3"
        }
      ],
      savedArticles: []
    }
  }

  fetchArticles = (term, term2, term3) => {
    console.log("FetchArticles HIT")
    const API_KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

    axios.get(`${ROOT_URL}&q=${term}&begin_date=${term2}0101&end_date=${term3}0101`)
    .then((response)=>{
      const fetchData = response.data.response.docs;
      console.log(fetchData);


      this.setState({
        articles1: fetchData
      })
    });
  };


  saveArticle = (article) => {
    let newArticles = this.state.savedArticles.slice();
    newArticles.push(article);
      this.setState({
        savedArticles: newArticles
      })
      console.log(newArticles);
  };

  deleteArticle = (article) => {
      let newArticles = this.state.savedArticles.slice();
      let index = newArticles.indexOf(article);
      if (index > -1) {
          newArticles.splice(index, 1);
      }
      this.setState({
         savedArticles: newArticles
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search fetchArticles = {this.fetchArticles} />
        <Result articles = {this.state.articles1} saveArticle={this.saveArticle}/>
        <SavedArticle savedArticles = {this.state.savedArticles} deleteArticle={this.deleteArticle}/>
      </div>  
    );
  }
}

export default App;

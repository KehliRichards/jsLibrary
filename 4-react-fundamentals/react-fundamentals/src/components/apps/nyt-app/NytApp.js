import React, { Component } from 'react';
import NytResults from './NytResults';
import './NytApp.css';
import logo from './Assets/nyt-logo.png';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'qGPfMFR10YJAsB0OyGZuNwA8nj5E8tSp';

export default class NytApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }

    handleSubmit = (event) => {
        this.setState({ pageNumber: 0 })
        this.fetchResults()
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        console.log(url);
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
        fetch(url)
            .then(
                (response) => response.json()
            ).then((data) => {
                this.setState({ results: data.response.docs })
            })
    }

    changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === 'down') {
            if (this.state.pageNumber > 0) {
                let newPageNumber = this.state.pageNumber - 1
                this.setState({ pageNumber : newPageNumber })
                this.fetchResults();
            }
        }
        if (direction === 'up') {
            let newPageNumber = this.state.pageNumber + 1
            this.setState({ pageNumber : newPageNumber })
            this.fetchResults();
        }
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <img className="NYTimg" src={logo} alt={"logo"}/>
                    <hr />
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span className="span">Enter a SINGLE search term (required): </span>
                        <input className="searchInput" type="text" name="search" onChange={this.handleChange} required />
                            <br />
                        <span className="span">Enter a start date: </span>
                        <input className="dateInput" type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} />
                            <br />
                        <span className="span">Enter an end date: </span>
                        <input className="dateInput" type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} />
                            <br />
                        <button className="submit">Submit Search</button>
                    </form>
                    <div className="NYTresults">
                    {
                        this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
                    }
                    </div>
                </div>
            </div>
        );
    }
}
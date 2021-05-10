import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

class Pagination extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            
        };
        
    }

    render(){
        let paginationSection = '';
        let paginations = [ <li key={'prev-'+this.props.page} className={ this.props.page == 1 ? 'page-item disabled' : 'page-item' }><a className="page-link cursor-pointer" key='left' data-page={ this.props.page - 1 } onClick={ this.props.pageChange }><i className="fa fa-chevron-left" data-page={ this.props.page - 1 } onClick={ this.props.pageChange }></i></a></li> ];
        const startPage = Math.max(1, this.props.page - 1);
        const lastPage = Math.min(Math.ceil(this.props.count / this.props.limit), startPage+3);
        for(let i = startPage; i <= lastPage; i++) {
            paginations.push(<li key={'cur-page-'+i} className={ i == this.props.page ? 'page-item active' : 'page-item' }><a  className="page-link cursor-pointer" key={i} data-page={i} onClick={ this.props.pageChange } >{i}</a></li>);
        }
        paginations.push(<li key={'next-'+this.props.page} className={ this.props.page == lastPage ? 'page-item disabled' : 'page-item' }><a className="page-link cursor-pointer" key='right' data-page={ this.props.page + 1 } onClick={ this.props.pageChange }><i className="fa fa-chevron-right" data-page={ this.props.page + 1 } onClick={ this.props.pageChange }></i></a></li>);

        if ( Math.ceil(this.props.count / this.props.limit) > 1 ) {
            paginationSection = <div className="text-center">
                                    <ul className="pagination ">
                                        { paginations }
                                    </ul>
                                </div>;
        }
        return paginationSection;
    }
}

export default Pagination;
import React from 'react';
import {connect} from 'react-redux';

import {authCheck} from "../../actions";


export default ChildComponent=>{

    class ComposedComponent extends React.Component{


        goAway = ()=>{
            //donothing
        }
        checkAuth = ()=>{

            if(!this.props.auth.user){
               this.props.authCheck(this.goAway)
            }

        }

        componentDidMount() {
            this.checkAuth();
        }

        render(){
            return(
                <ChildComponent {...this.props}/>
            )
        }
    }
    const mapStateToProps=(state)=>{
        return {
            auth:state.auth
        };
    }
    return connect(mapStateToProps,{authCheck})(ComposedComponent)
};




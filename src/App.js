import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import szeregowy from './pictures/szeregowy.png';
import starszy_szeregowy from './pictures/starszy szeregowy.png';
import kapral from './pictures/kapral.png';
import starszy_kapral from './pictures/starszy kapral.png';
import plutonowy from './pictures/plutonowy.png';
import sierzant from './pictures/sierzant.png';
import starszy_sierżant from './pictures/starszy sierzant.png';
import młodszy_chorazy from './pictures/mlodszy chorazy.png';
import chorazy from './pictures/chorazy.png';
import starszy_chorazy from './pictures/starszy chorazy.png';
import starszy_chorazy_sztabowy from './pictures/starszy chorazy sztabowy.png';
import podporucznik from './pictures/podporucznik.png';
import porucznik from './pictures/porucznik.png';
import kapitan from './pictures/kapitan.png';
import major from './pictures/major.png';
import podpulkownik from './pictures/podpulkownik.png';
import pulkownik from './pictures/podpulkownik.png';
import general_brygady from './pictures/general brygady.png';
import general_dywizji from './pictures/general dywizji.png';
import general_broni from './pictures/general broni.png';
import general from './pictures/general.png';
import marszalek_polski from './pictures/marszalek polski.png';


import Header from './components/header.js';
import Section from './components/sectionType1.js';
import DivSrc from './components/sectionType2.js'
import AlertResult from './components/alertResult.js'

class App extends Component {
    state={
    misions:[ {id:1, src:szeregowy, title:'szeregowy'},
              {id:2, src:starszy_szeregowy, title:'starszy szeregowy'},
              {id:3, src:kapral, title:'kapral'},
              {id:4, src:starszy_kapral, title:'starszy kapral'},
              {id:5, src:plutonowy, title:'plutonowy'},
              {id:6, src:sierzant, title:'sierżant'},
              {id:7, src:starszy_sierżant, title:'starszy sierżant'},
              {id:8, src:młodszy_chorazy, title:'młodszy chorąży'},
              {id:9, src:chorazy, title:'chorąży'},
              {id:10, src:starszy_chorazy, title:'starszy chorąży'},
              {id:11, src:starszy_chorazy_sztabowy, title:'starszy chorąży sztabowy'},
              {id:12, src:podporucznik, title:'podporucznik'},
              {id:13, src:porucznik, title:'porucznik'},
              {id:14, src:kapitan, title:'kapitan'},
              {id:15, src:major, title:'major'},
              {id:16, src:podpulkownik, title:'podpułkownik'},
              {id:17, src:pulkownik, title:'pułkownik'},
              {id:18, src:general_brygady, title:'generał brygady'},
              {id:19, src:general_dywizji, title:'generał dywizji'},
              {id:20, src:general_broni, title:'generał broni'},
              {id:21, src:general, title:'generał'},
              {id:22, src:marszalek_polski, title:'marszałek Polski'},

          ],
        number:[null,null,null,null,null,null],
        winner:null,
        showResult: false ,
        resultt:null,
    randomNumber : () => {
        for(let i=0;i<6;i++){
            this.state.number[i]=null;}
        for(let i=0;i<6;){
            let rand=(Math.floor(Math.random() * 22));
            if(rand!=this.state.number[0]&&
            rand!=this.state.number[1]&&
            rand!=this.state.number[2]&&
            rand!=this.state.number[3]&&
            rand!=this.state.number[4]&&
            rand!=this.state.number[5]){
                this.state.number[i]=rand
                i++}
            }
        this.state.winner=this.state.number[Math.floor(Math.random() * 6)];
    },
    clickSection : (x) => {
      if(this.state.winner==x){
          this.state.result("Dobrze");
          this.state.randomNumber();}
      else{
          this.state.result("Źle");}
    },
    result : (x) => {
      this.state.resultt=x;
      this.setState( { showResult: true } );
      setTimeout(() => {
          this.setState({ showResult: false });
      }, 3000);
  }}
  render() {
    const styleAlert={
          border: '2px solid #bdbebd',
          borderRadius: '25px',
          width:'150px',
          backgroundColor:'#090909',

    }
    const styleAlert2={
          width:'100%',
          position:'absolute',
          display: 'flex',
          zIndex:'2',
          top:'14%',
          justifyContent: 'center',
    }
    const styleCopy={
          width:'100%',
          position:'absolute',
          display: 'flex',
          justifyContent: 'center',
    }
    let alertResult=null;
    if ( this.state.showResult ) {
        alertResult=(
            <div style={styleAlert2}>
                <h1 style={styleAlert}>{this.state.resultt}</h1>
            </div>
        );
    }
    if(this.state.number[0]==null){
        this.state.randomNumber();/*reparing*/
    }
    const style={
        border: '2px solid #bdbebd',
        borderRadius: '25px',
        padding:'0px',
        margin:'5px auto 5px auto',
        minWidth:'260px',
        fontSize:'22px',
        cursor: 'pointer'
    }
    const styleSection={
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'600px',
        margin:'auto'

    }
    const sections=(
        <div style={styleSection}>
          {this.state.number.map((x) => {
            return <Section
            style={style}
            title={this.state.misions[x].title}
            click={() => this.state.clickSection(x)}
              />
          })}
        </div>
    );
    const copy=(
        <div style={styleCopy}>
            &copy by Michał Kubiak
        </div>
    );
    const windowPicture=(
        <div>
            <DivSrc
            src={this.state.misions[this.state.winner].src}
            title={this.state.misions[this.state.winner].title}
              />
        </div>);
    return (

      <div className="App">
        <Header></Header>
        {windowPicture}
        {sections}
        {alertResult}
        {copy}
      </div>
    );
  }
}

export default App;

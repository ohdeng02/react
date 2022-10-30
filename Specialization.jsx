import React, {useState} from "react";
import './PassingCount.css'

function Border(props) {
    return (
      <div className={'Border Border-blue' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props) {
    return (
        <Border color="blue">
            <h1 className="Dialog-title">
                {props.title}
          </h1>
          <p className="Dialog-message">		
                {props.message}
          </p>
      </Border>
  );
}

function WelcomeDialog(props) {
    return (
        <Dialog
            title="안녕하세요"
            message="반갑습니다."
        />
  );
}

export default WelcomeDialog;

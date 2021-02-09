import React from "react";

interface ButtonProps {
  title: string;
}

export class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      busy: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(1234);
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.title}
      </button>
    );
  }
}

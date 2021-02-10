import React from "react";

interface ButtonProps {
  title: string;
  buttonType: string;
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
      <button onClick={this.onClick} data-type={this.props.buttonType}>
        {this.props.title}
      </button>
    );
  }
}
